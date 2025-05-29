# Dropdown Select Web Component

A fully accessible custom dropdown web component that can be used as a replacement for the native `<select>` element with enhanced styling options and keyboard navigation.

🔍 **[Live Demo](https://magic-spells.github.io/dropdown-select/demo/)** - See it in action!

## Features

- 🎨 Fully customizable styling
- ♿ WAI-ARIA compliant for accessibility
- ⌨️ Complete keyboard navigation support
- 📱 Mobile-friendly
- 🔍 Typeahead search functionality
- 🧩 Zero dependencies
- 📦 Small footprint (~3KB minified and gzipped)

## Installation

### NPM

```bash
npm install @magic-spells/dropdown-select
```

### CDN

```html
<link
	rel="stylesheet"
	href="https://unpkg.com/@magic-spells/dropdown-select/dist/dropdown-select.min.css"
/>
<script src="https://unpkg.com/@magic-spells/dropdown-select/dist/dropdown-select.min.js"></script>
```

## Distribution Formats

This package provides multiple distribution formats for different environments:

- **ES Module**: `dropdown-select.esm.js`
  ```javascript
  import { DropdownSelect } from '@magic-spells/dropdown-select';
  ```

- **CommonJS**: `dropdown-select.cjs.js`
  ```javascript
  const { DropdownSelect } = require('@magic-spells/dropdown-select');
  ```

- **UMD**: `dropdown-select.js` and `dropdown-select.min.js`
  - Works in browsers via script tag
  - Compatible with AMD loaders (RequireJS)
  - Works in Node.js
  ```html
  <script src="dropdown-select.min.js"></script>
  <script>
    // Available as global variable DropdownSelect
    console.log(DropdownSelect);
  </script>
  ```

## Usage

### Basic Usage

```html
<dropdown-select>
	<dropdown-trigger>
		<span class="dropdown-label">Select an option</span>
	</dropdown-trigger>

	<input type="hidden" class="dropdown-hidden-input" name="selected-option" />

	<dropdown-options>
		<ul class="dropdown-list">
			<li><dropdown-option data-value="option1">Option 1</dropdown-option></li>
			<li><dropdown-option data-value="option2">Option 2</dropdown-option></li>
			<li><dropdown-option data-value="option3">Option 3</dropdown-option></li>
		</ul>
	</dropdown-options>
</dropdown-select>
```

### Opening Direction

The dropdown automatically detects if there's enough space below and will open upward if needed. You can explicitly set the direction with the `position` attribute:

```html
<!-- Force dropdown to open upward -->
<dropdown-select position="up">
  <!-- dropdown content -->
</dropdown-select>

<!-- Force dropdown to open downward (default) -->
<dropdown-select position="down">
  <!-- dropdown content -->
</dropdown-select>
```

### Getting the Selected Value

The selected value is stored in the hidden input element. You can also listen for the `change` event:

```javascript
document
	.querySelector("dropdown-select")
	.addEventListener("change", function (e) {
		console.log("Selected value:", e.detail.value);
		console.log("Selected text:", e.detail.text);
	});
```

## Keyboard Navigation

| Key           | Action                                         |
| ------------- | ---------------------------------------------- |
| Tab           | Focus the dropdown trigger                     |
| Enter / Space | Open the dropdown or select the focused option |
| Escape        | Close the dropdown without selecting           |
| Arrow Down    | Move to the next option                        |
| Arrow Up      | Move to the previous option                    |
| Home          | Jump to the first option                       |
| End           | Jump to the last option                        |
| Any letter    | Jump to an option starting with that letter    |

## Styling

The component comes with default styling, but you can customize it by overriding the CSS variables or using your own CSS.

### SCSS Integration

This package provides multiple ways to integrate with your SCSS workflow:

```scss
// Option 1: Use the main entry point (recommended)
@use "@magic-spells/dropdown-select/scss" with (
  $color-primary: #ff5722,
  $border-radius: 0.5rem
);

// Option 2: Import individual files
@use "@magic-spells/dropdown-select/scss/variables" with (
  $color-primary: #ff5722,
  $border-radius: 0.5rem
);
@use "@magic-spells/dropdown-select/scss/dropdown-select";

// Option 3: Direct paths (if needed)
@use "node_modules/@magic-spells/dropdown-select/dist/dropdown-select.scss";
@use "node_modules/@magic-spells/dropdown-select/dist/scss/dropdown-select";
```

### CSS Variables

You can customize the dropdown appearance using CSS custom properties. All styling aspects are available as variables:

```css
dropdown-select {
	/* Sizing */
	--select-dropdown-width: 400px;
	--select-options-max-height: 15rem;
	--select-caret-size: 0.25rem;
	
	/* Colors */
	--select-color-text: #333;
	--select-color-background: #fff;
	--select-color-border: #ddd;
	--select-color-border-hover: #aaa;
	--select-color-border-dark: #666;
	--select-color-primary: #ff5722;
	--select-color-primary-rgb: 255, 87, 34; /* For alpha transparency */
	--select-color-hover: #f5f5f5;
	--select-color-focus: #e6f7ff;
	--select-color-selected: #ffede6;
	
	/* Spacing */
	--select-spacing-xs: 0.25rem;
	--select-spacing-sm: 0.75rem;
	--select-spacing-md: 1rem;
	
	/* Misc */
	--select-border-radius: 0.5rem;
	--select-box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	--select-z-index-dropdown: 10;
	--select-transition-duration: 0.2s;
}
```

This enables theme switching and custom styling without modifying the component itself.

## Examples

### Preselected Option

```html
<dropdown-select id="fruit-dropdown">
	<dropdown-trigger id="fruit-trigger">
		<span class="dropdown-label">Apple</span>
	</dropdown-trigger>

	<input
		type="hidden"
		class="dropdown-hidden-input"
		name="selected-fruit"
		value="apple"
	/>

	<dropdown-options>
		<ul class="dropdown-list">
			<li>
				<dropdown-option data-value="apple" aria-selected="true"
					>Apple</dropdown-option
				>
			</li>
			<li><dropdown-option data-value="banana">Banana</dropdown-option></li>
			<li><dropdown-option data-value="cherry">Cherry</dropdown-option></li>
		</ul>
	</dropdown-options>
</dropdown-select>
```

### Integration with Form

```html
<form id="myForm">
	<div class="form-group">
		<label for="fruit-dropdown">Select a fruit:</label>
		<dropdown-select id="fruit-dropdown">
			<dropdown-trigger id="fruit-trigger">
				<span class="dropdown-label">Select a fruit</span>
			</dropdown-trigger>

			<input
				type="hidden"
				class="dropdown-hidden-input"
				name="fruit"
				id="fruit-input"
			/>

			<dropdown-options>
				<ul class="dropdown-list">
					<li><dropdown-option data-value="apple">Apple</dropdown-option></li>
					<li><dropdown-option data-value="banana">Banana</dropdown-option></li>
					<li><dropdown-option data-value="cherry">Cherry</dropdown-option></li>
				</ul>
			</dropdown-options>
		</dropdown-select>
	</div>

	<button type="submit">Submit</button>
</form>

<script>
	document.getElementById("myForm").addEventListener("submit", function (e) {
		e.preventDefault();
		const formData = new FormData(this);
		console.log("Selected fruit:", formData.get("fruit"));
	});
</script>
```

## API

### Events

- `change` - Fired when an option is selected
  - `detail.value` - The value of the selected option
  - `detail.text` - The text content of the selected option

### Methods

- `show()` - Opens the dropdown
- `hide()` - Closes the dropdown
- `toggleDropdown()` - Toggles the dropdown open/closed
- `selectOption(event)` - Selects an option and updates the value

## Browser Support

The component works in all modern browsers that support Custom Elements v1.

## License

MIT
