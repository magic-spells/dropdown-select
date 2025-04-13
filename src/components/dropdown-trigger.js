/**
 * dropdown-trigger component
 * @class DropdownTrigger
 * @extends HTMLElement
 */
export class DropdownTrigger extends HTMLElement {
  #handleKeyDown;
  #handleClick;
  
  constructor() {
    super();
    // Make the trigger focusable
    this.setAttribute('tabindex', '0');
    this.#handleKeyDown = this.#onKeyDown.bind(this);
    this.#handleClick = this.#onClick.bind(this);
  }

  connectedCallback() {
    // Add caret if not present
    if (!this.querySelector('.dropdown-caret')) {
      const caret = document.createElement('span');
      caret.className = 'dropdown-caret';
      this.appendChild(caret);
    }
    
    // Add event listeners
    this.addEventListener('keydown', this.#handleKeyDown);
    this.addEventListener('click', this.#handleClick);
  }
  
  disconnectedCallback() {
    this.removeEventListener('keydown', this.#handleKeyDown);
    this.removeEventListener('click', this.#handleClick);
  }
  
  /**
   * Handle keydown events on the trigger
   * @param {KeyboardEvent} e - The keyboard event
   * @private
   */
  #onKeyDown(e) {
    // Handle Enter and Space key presses
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.stopPropagation(); // Prevent event bubbling
      this.#toggleDropdown();
    }
  }
  
  /**
   * Handle click events on the trigger
   * @param {MouseEvent} e - The mouse event
   * @private
   */
  #onClick(e) {
    this.#toggleDropdown();
  }
  
  /**
   * Toggle the parent dropdown
   * @private
   */
  #toggleDropdown() {
    const dropdown = this.closest('dropdown-select');
    if (dropdown && typeof dropdown.toggleDropdown === 'function') {
      dropdown.toggleDropdown();
    }
  }
}
