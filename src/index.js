/**
 * @file Main entry point for dropdown-select web component
 * @author Cory Schulz
 * @version 0.1.0
 */

// import styles
import './styles/dropdown-select.scss';

// import components
import { DropdownSelect } from './components/dropdown-select.js';
import { DropdownTrigger } from './components/dropdown-trigger.js';
import { DropdownOptions } from './components/dropdown-options.js';
import { DropdownOption } from './components/dropdown-option.js';

// export components for external use
export { DropdownSelect, DropdownTrigger, DropdownOptions, DropdownOption };

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
