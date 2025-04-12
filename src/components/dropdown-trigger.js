/**
 * dropdown-trigger component
 * @class DropdownTrigger
 * @extends HTMLElement
 */
export class DropdownTrigger extends HTMLElement {
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
