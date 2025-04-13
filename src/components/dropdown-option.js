/**
 * dropdown-option component
 * @class DropdownOption
 * @extends HTMLElement
 */
export class DropdownOption extends HTMLElement {
  #handleClick;
  
  constructor() {
    super();
    this.#handleClick = this.#onClick.bind(this);
  }
  
  connectedCallback() {
    // Add click event listener
    this.addEventListener('click', this.#handleClick);
  }
  
  disconnectedCallback() {
    // Clean up event listener
    this.removeEventListener('click', this.#handleClick);
  }
  
  /**
   * Handle click events on the option
   * @param {MouseEvent} e - The mouse event
   * @private
   */
  #onClick(e) {
    e.preventDefault();
    this.#notifySelection();
  }
  
  /**
   * Notify the parent dropdown that this option was selected
   * @private
   */
  #notifySelection() {
    const dropdown = this.closest('dropdown-select');
    if (dropdown && typeof dropdown.selectOption === 'function') {
      dropdown.selectOption({ target: this });
    }
  }
}
