/**
 * dropdown-trigger component
 * @class DropdownTrigger
 * @extends HTMLElement
 */
export class DropdownTrigger extends HTMLElement {
  #handleKeyDown;
  
  constructor() {
    super();
    // Make the trigger focusable
    this.setAttribute('tabindex', '0');
    this.#handleKeyDown = this.#onKeyDown.bind(this);
  }

  connectedCallback() {
    // Add caret if not present
    if (!this.querySelector('.dropdown-caret')) {
      const caret = document.createElement('span');
      caret.className = 'dropdown-caret';
      this.appendChild(caret);
    }
    
    // Add keyboard event listener
    this.addEventListener('keydown', this.#handleKeyDown);
  }
  
  disconnectedCallback() {
    this.removeEventListener('keydown', this.#handleKeyDown);
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
      
      // Find parent dropdown-select and toggle it
      const dropdown = this.closest('dropdown-select');
      if (dropdown && typeof dropdown.toggleDropdown === 'function') {
        dropdown.toggleDropdown();
      } else {
        // Fallback to click if direct method call isn't available
        this.click();
      }
    }
  }
}
