(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.DropdownSelect = {}));
})(this, (function (exports) { 'use strict';

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = "dropdown-select{color:#333;display:block;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-size:1rem;line-height:1.5;margin-bottom:1rem;position:relative;width:300px}dropdown-select[aria-hidden=true] dropdown-options{display:none}dropdown-trigger{align-items:center;background-color:#fff;border:1px solid #ddd;border-radius:.25rem;cursor:pointer;display:flex;justify-content:space-between;padding:.75rem 1rem;transition:border-color .2s,box-shadow .2s;width:100%}dropdown-trigger:hover{border-color:#aaa}dropdown-trigger:focus{border-color:#4299e1;box-shadow:0 0 0 3px rgba(66,153,225,.25);outline:none}.dropdown-caret{border-color:#666 transparent transparent;border-style:solid;border-width:.25rem .25rem 0;margin-left:.75rem;transition:transform .2s}dropdown-trigger[aria-expanded=true] .dropdown-caret{transform:rotate(180deg)}dropdown-options{background-color:#fff;border:1px solid #ddd;border-radius:.25rem;box-shadow:0 4px 6px rgba(0,0,0,.1);left:0;max-height:15rem;overflow-y:auto;position:absolute;top:calc(100% + .25rem);width:100%;z-index:10}.dropdown-list{list-style:none;margin:0;padding:0}dropdown-option{cursor:pointer;display:block;padding:.75rem 1rem;transition:background-color .2s}dropdown-option:hover{background-color:#f0f0f0}dropdown-option:focus{background-color:#e6f7ff;box-shadow:inset 0 0 0 2px #4299e1;outline:none}dropdown-option[aria-selected=true]{background-color:#e6f7ff;font-weight:500}.dropdown-hidden-input{height:0;opacity:0;position:absolute;width:0}";
  styleInject(css_248z);

  /**
   * dropdown-select component that handles the functionality of a custom dropdown
   * @class DropdownSelect
   * @extends HTMLElement
   */
  class DropdownSelect extends HTMLElement {
    // private fields for event handlers
    #handleTriggerClick;
    #handleOptionClick;
    #handleDocumentClick;
    #handleKeyDown;

    // private fields for elements
    #trigger;
    #input;
    #optionsContainer;
    #options;
    #label;
    #currentFocusIndex = -1;

    constructor() {
      super();

      // set default attributes
      this.setAttribute('aria-hidden', 'true');

      // bind event handlers
      this.#handleTriggerClick = this.toggleDropdown.bind(this);
      this.#handleOptionClick = this.selectOption.bind(this);
      this.#handleDocumentClick = this.handleOutsideClick.bind(this);
      this.#handleKeyDown = this.handleKeyboardNavigation.bind(this);
    }

    /**
     * when element is connected to the dom
     */
    connectedCallback() {
      // query all dom elements needed for the component
      this.#trigger = this.querySelector('dropdown-trigger');
      this.#input = this.querySelector('input');
      this.#optionsContainer = this.querySelector('dropdown-options');
      this.#options = this.querySelectorAll('dropdown-option');
      this.#label = this.#trigger?.querySelector('.dropdown-label');

      // initialize component
      this.setupAriaAttributes();
      this.bindUI();

      // set initial state
      this.hide();
    }

    /**
     * clean up event listeners when element is removed
     */
    disconnectedCallback() {
      this.unbindUI();
    }

    /**
     * sets up aria attributes for accessibility
     */
    setupAriaAttributes() {
      const listbox = this.#optionsContainer;
      const trigger = this.#trigger;

      // setup trigger button
      trigger.setAttribute('aria-haspopup', 'listbox');
      trigger.setAttribute('aria-expanded', 'false');
      trigger.setAttribute('role', 'combobox');

      if (!trigger.id) {
        trigger.id = `dropdown-trigger-${Date.now()}`;
      }

      // setup listbox
      listbox.setAttribute('role', 'listbox');
      listbox.setAttribute('aria-labelledby', trigger.id);

      // setup options
      this.#options.forEach((option, index) => {
        option.setAttribute('role', 'option');
        option.setAttribute('aria-selected', 'false');
        option.setAttribute('tabindex', '-1');
        option.id = `${trigger.id}-option-${index}`;
      });
    }

    /**
     * binds the necessary ui events to the component
     */
    bindUI() {
      // bind trigger click
      this.#trigger.addEventListener('click', this.#handleTriggerClick);

      // bind option clicks
      this.#options.forEach((option) => {
        option.addEventListener('click', this.#handleOptionClick);
      });
    }

    /**
     * unbinds event listeners
     */
    unbindUI() {
      // remove trigger event
      this.#trigger.removeEventListener('click', this.#handleTriggerClick);

      // remove option events
      this.#options.forEach((option) => {
        option.removeEventListener('click', this.#handleOptionClick);
      });

      // remove document events if they exist
      document.removeEventListener('click', this.#handleDocumentClick);
      document.removeEventListener('keydown', this.#handleKeyDown);
    }

    /**
     * handles click events outside of the dropdown to close it
     * @param {Event} e - the click event
     */
    handleOutsideClick(e) {
      // if click is outside of the dropdown, close it
      if (!this.contains(e.target)) {
        this.hide();
      }
    }

    /**
     * handles keyboard navigation in the dropdown
     * @param {KeyboardEvent} e - the keyboard event
     */
    handleKeyboardNavigation(e) {
      const options = Array.from(this.#options);

      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          this.hide();
          break;

        case 'ArrowDown':
          e.preventDefault();

          // if focus is on trigger, move to first option
          if (document.activeElement === this.#trigger) {
            this.#currentFocusIndex = -1;
          }

          // move to next option or loop to first
          if (this.#currentFocusIndex < options.length - 1) {
            this.focusOption(this.#currentFocusIndex + 1);
          }
          break;

        case 'ArrowUp':
          e.preventDefault();

          // move to previous option or loop to last
          if (this.#currentFocusIndex > 0) {
            this.focusOption(this.#currentFocusIndex - 1);
          } else if (this.#currentFocusIndex === 0) {
            // if on first option, move focus back to trigger
            this.#trigger.focus();
            this.#currentFocusIndex = -1;
          }
          break;

        case 'Home':
          e.preventDefault();
          this.focusOption(0);
          break;

        case 'End':
          e.preventDefault();
          this.focusOption(options.length - 1);
          break;

        case 'Enter':
        case ' ':
          e.preventDefault();

          // if dropdown is closed and trigger is focused, open it
          if (
            this.getAttribute('aria-hidden') === 'true' &&
            document.activeElement === this.#trigger
          ) {
            this.show();
            return;
          }

          // if focus is on an option, select it
          if (this.#currentFocusIndex >= 0) {
            this.selectOption({ target: options[this.#currentFocusIndex] });
          } else if (document.activeElement === this.#trigger) {
            // if focus is on trigger, toggle the dropdown
            this.toggleDropdown();
          }
          break;

        default:
          // handle typeahead - find option starting with pressed key
          const key = e.key.toLowerCase();

          // only proceed if it's a single character
          if (key.length === 1) {
            // find the first option that starts with the pressed key
            const matchingOption = options.find((option) =>
              option.textContent.trim().toLowerCase().startsWith(key)
            );

            if (matchingOption) {
              const index = options.indexOf(matchingOption);
              this.focusOption(index);
            }
          }
          break;
      }
    }

    /**
     * focuses a specific option by index
     * @param {number} index - the index of the option to focus
     */
    focusOption(index) {
      const options = Array.from(this.#options);

      // reset tabindex on all options
      options.forEach((opt) => {
        opt.setAttribute('tabindex', '-1');
      });

      // set tabindex on target option and focus it
      if (options[index]) {
        options[index].setAttribute('tabindex', '0');
        options[index].focus();
        this.#currentFocusIndex = index;
      }
    }

    /**
     * toggles the dropdown open/closed
     */
    toggleDropdown() {
      if (this.getAttribute('aria-hidden') === 'true') {
        this.show();
      } else {
        this.hide();
      }
    }

    /**
     * selects an option from the dropdown
     * @param {Event} e - the click event
     */
    selectOption(e) {
      const option = e.target.closest('dropdown-option');
      if (!option) return;

      // update aria-selected on all options
      this.#options.forEach((opt) => {
        opt.setAttribute('aria-selected', 'false');
      });

      // mark selected option
      option.setAttribute('aria-selected', 'true');

      // update the input value
      if (this.#input) {
        this.#input.value = option.dataset.value || option.textContent.trim();
      }

      // update the visible label
      if (this.#label) {
        this.#label.textContent = option.textContent.trim();
      }

      // dispatch change event
      this.dispatchEvent(
        new CustomEvent('change', {
          detail: {
            value: option.dataset.value || option.textContent.trim(),
            text: option.textContent.trim(),
          },
          bubbles: true,
        })
      );

      // close the dropdown
      this.hide();
    }

    /**
     * shows the dropdown options
     */
    show() {
      // set attributes for open state
      this.setAttribute('aria-hidden', 'false');
      this.#trigger.setAttribute('aria-expanded', 'true');

      // find selected option or default to first
      const selectedOption = Array.from(this.#options).find(
        (opt) => opt.getAttribute('aria-selected') === 'true'
      );

      if (selectedOption) {
        const selectedIndex = Array.from(this.#options).indexOf(selectedOption);
        this.focusOption(selectedIndex);
      } else if (this.#options.length > 0) {
        this.focusOption(0);
      }

      // add global event listeners
      document.addEventListener('click', this.#handleDocumentClick);
      document.addEventListener('keydown', this.#handleKeyDown);
    }

    /**
     * hides the dropdown options
     */
    hide() {
      // set attributes for closed state
      this.setAttribute('aria-hidden', 'true');
      this.#trigger.setAttribute('aria-expanded', 'false');

      // reset the current focus index
      this.#currentFocusIndex = -1;

      // remove global event listeners
      document.removeEventListener('click', this.#handleDocumentClick);
      document.removeEventListener('keydown', this.#handleKeyDown);

      // return focus to trigger
      this.#trigger.focus();
    }
  }

  /**
   * dropdown-trigger component
   * @class DropdownTrigger
   * @extends HTMLElement
   */
  class DropdownTrigger extends HTMLElement {
    constructor() {
      super();
      this.setAttribute('tabindex', '0');
    }

    connectedCallback() {
      if (!this.querySelector('.dropdown-caret')) {
        const caret = document.createElement('span');
        caret.className = 'dropdown-caret';
        this.appendChild(caret);
      }
    }
  }

  /**
   * dropdown-options component
   * @class DropdownOptions
   * @extends HTMLElement
   */
  class DropdownOptions extends HTMLElement {
    constructor() {
      super();
    }
  }

  /**
   * dropdown-option component
   * @class DropdownOption
   * @extends HTMLElement
   */
  class DropdownOption extends HTMLElement {
    constructor() {
      super();
    }
  }

  /**
   * @file Main entry point for dropdown-select web component
   * @author Cory Schulz
   * @version 0.1.0
   */


  // define custom elements if not already defined
  if (!customElements.get('dropdown-select')) {
    customElements.define('dropdown-select', DropdownSelect);
  }

  if (!customElements.get('dropdown-trigger')) {
    customElements.define('dropdown-trigger', DropdownTrigger);
  }

  if (!customElements.get('dropdown-options')) {
    customElements.define('dropdown-options', DropdownOptions);
  }

  if (!customElements.get('dropdown-option')) {
    customElements.define('dropdown-option', DropdownOption);
  }

  exports.DropdownOption = DropdownOption;
  exports.DropdownOptions = DropdownOptions;
  exports.DropdownSelect = DropdownSelect;
  exports.DropdownTrigger = DropdownTrigger;

}));
