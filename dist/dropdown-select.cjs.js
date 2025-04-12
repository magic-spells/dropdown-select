'use strict';

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

var css_248z = ":root {\n  --dropdown-width: 300px;\n  --options-max-height: 15rem;\n  --caret-size: 0.25rem;\n  --font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;\n  --font-size-base: 1rem;\n  --line-height: 1.5;\n  --color-text: #333;\n  --color-background: #fff;\n  --color-border: #ddd;\n  --color-border-hover: #aaa;\n  --color-border-dark: #666;\n  --color-primary: #4299e1;\n  --color-primary-rgb: 66, 153, 225;\n  --color-hover: #f0f0f0;\n  --color-focus: #e6f7ff;\n  --color-selected: #e6f7ff;\n  --spacing-xs: 0.25rem;\n  --spacing-sm: 0.75rem;\n  --spacing-md: 1rem;\n  --border-radius: 0.25rem;\n  --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  --z-index-dropdown: 10;\n  --transition-duration: 0.2s;\n}\n\n/* dropdown component styles */\ndropdown-select {\n  position: relative;\n  width: var(--dropdown-width);\n  margin-bottom: var(--spacing-md);\n  display: block;\n  font-family: var(--font-family);\n  font-size: var(--font-size-base);\n  line-height: var(--line-height);\n  color: var(--color-text);\n  box-sizing: border-box;\n}\n\ndropdown-select * {\n  box-sizing: border-box;\n}\n\n/* hide dropdown when aria-hidden=\"true\" */\ndropdown-select[aria-hidden=true] dropdown-options {\n  display: none;\n}\n\n/* trigger button styles */\ndropdown-trigger {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: var(--spacing-sm) var(--spacing-md);\n  background-color: var(--color-background);\n  border: 1px solid var(--color-border);\n  border-radius: var(--border-radius);\n  cursor: pointer;\n  transition: border-color var(--transition-duration), box-shadow var(--transition-duration);\n}\ndropdown-trigger:hover {\n  border-color: var(--color-border-hover);\n}\ndropdown-trigger:focus {\n  outline: none;\n  border-color: var(--color-primary);\n  box-shadow: 0 0 0 3px rgba(var(--color-primary-rgb, 66, 153, 225), 0.25);\n}\n\n/* caret icon */\n.dropdown-caret {\n  border-style: solid;\n  border-width: var(--caret-size) var(--caret-size) 0;\n  border-color: var(--color-border-dark) transparent transparent;\n  margin-left: var(--spacing-sm);\n  transition: transform var(--transition-duration);\n}\n\n/* Flipped caret when expanded (default direction) */\ndropdown-select:not([direction=up]) dropdown-trigger[aria-expanded=true] .dropdown-caret {\n  transform: rotate(180deg);\n}\n\n/* Already flipped caret for upward dropdowns when closed */\ndropdown-select[direction=up] .dropdown-caret {\n  transform: rotate(180deg);\n  border-width: 0 var(--caret-size) var(--caret-size);\n  border-color: transparent transparent var(--color-border-dark);\n}\n\n/* Flip back to normal when expanded for upward dropdowns */\ndropdown-select[direction=up] dropdown-trigger[aria-expanded=true] .dropdown-caret {\n  transform: rotate(0);\n}\n\n/* options container */\ndropdown-options {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  max-height: var(--options-max-height);\n  overflow-y: auto;\n  background-color: var(--color-background);\n  border: 1px solid var(--color-border);\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow);\n  z-index: var(--z-index-dropdown);\n}\n\n/* Default direction (down) */\ndropdown-select:not([direction=up]) dropdown-options {\n  top: calc(100% + var(--spacing-xs));\n}\n\n/* Direction up */\ndropdown-select[direction=up] dropdown-options {\n  bottom: calc(100% + var(--spacing-xs));\n}\n\n/* Add some elevation for upward direction to create nice shadow */\ndropdown-select[direction=up] dropdown-options {\n  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);\n}\n\n/* styling for the list */\n.dropdown-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n/* option items */\ndropdown-option {\n  padding: var(--spacing-sm) var(--spacing-md);\n  cursor: pointer;\n  transition: background-color var(--transition-duration);\n  display: block;\n}\ndropdown-option:hover {\n  background-color: var(--color-hover);\n}\ndropdown-option:focus {\n  outline: none;\n  background-color: var(--color-focus);\n  box-shadow: inset 0 0 0 2px var(--color-primary);\n}\ndropdown-option[aria-selected=true] {\n  background-color: var(--color-selected);\n  font-weight: 500;\n}\n\n/* hidden input */\n.dropdown-hidden-input {\n  position: absolute;\n  opacity: 0;\n  height: 0;\n  width: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3Bkb3duLXNlbGVjdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsb0lBQW9JO0VBQ3BJLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsaUNBQWlDO0VBQ2pDLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QiwwQ0FBMEM7RUFDMUMsc0JBQXNCO0VBQ3RCLDJCQUEyQjtBQUM3Qjs7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSxrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLGdDQUFnQztFQUNoQywrQkFBK0I7RUFDL0Isd0JBQXdCO0VBQ3hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQSwwQ0FBMEM7QUFDMUM7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLDRDQUE0QztFQUM1Qyx5Q0FBeUM7RUFDekMscUNBQXFDO0VBQ3JDLG1DQUFtQztFQUNuQyxlQUFlO0VBQ2YsMEZBQTBGO0FBQzVGO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsd0VBQXdFO0FBQzFFOztBQUVBLGVBQWU7QUFDZjtFQUNFLG1CQUFtQjtFQUNuQixtREFBbUQ7RUFDbkQsOERBQThEO0VBQzlELDhCQUE4QjtFQUM5QixnREFBZ0Q7QUFDbEQ7O0FBRUEsb0RBQW9EO0FBQ3BEO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLDJEQUEyRDtBQUMzRDtFQUNFLHlCQUF5QjtFQUN6QixtREFBbUQ7RUFDbkQsOERBQThEO0FBQ2hFOztBQUVBLDJEQUEyRDtBQUMzRDtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFdBQVc7RUFDWCxxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLHlDQUF5QztFQUN6QyxxQ0FBcUM7RUFDckMsbUNBQW1DO0VBQ25DLDZCQUE2QjtFQUM3QixnQ0FBZ0M7QUFDbEM7O0FBRUEsNkJBQTZCO0FBQzdCO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQSxrRUFBa0U7QUFDbEU7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsNENBQTRDO0VBQzVDLGVBQWU7RUFDZix1REFBdUQ7RUFDdkQsY0FBYztBQUNoQjtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGdEQUFnRDtBQUNsRDtBQUNBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGdCQUFnQjtBQUNsQjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxRQUFRO0FBQ1YiLCJmaWxlIjoiZHJvcGRvd24tc2VsZWN0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gIC0tZHJvcGRvd24td2lkdGg6IDMwMHB4O1xuICAtLW9wdGlvbnMtbWF4LWhlaWdodDogMTVyZW07XG4gIC0tY2FyZXQtc2l6ZTogMC4yNXJlbTtcbiAgLS1mb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBPcGVuIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xuICAtLWZvbnQtc2l6ZS1iYXNlOiAxcmVtO1xuICAtLWxpbmUtaGVpZ2h0OiAxLjU7XG4gIC0tY29sb3ItdGV4dDogIzMzMztcbiAgLS1jb2xvci1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWNvbG9yLWJvcmRlcjogI2RkZDtcbiAgLS1jb2xvci1ib3JkZXItaG92ZXI6ICNhYWE7XG4gIC0tY29sb3ItYm9yZGVyLWRhcms6ICM2NjY7XG4gIC0tY29sb3ItcHJpbWFyeTogIzQyOTllMTtcbiAgLS1jb2xvci1wcmltYXJ5LXJnYjogNjYsIDE1MywgMjI1O1xuICAtLWNvbG9yLWhvdmVyOiAjZjBmMGYwO1xuICAtLWNvbG9yLWZvY3VzOiAjZTZmN2ZmO1xuICAtLWNvbG9yLXNlbGVjdGVkOiAjZTZmN2ZmO1xuICAtLXNwYWNpbmcteHM6IDAuMjVyZW07XG4gIC0tc3BhY2luZy1zbTogMC43NXJlbTtcbiAgLS1zcGFjaW5nLW1kOiAxcmVtO1xuICAtLWJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIC0tYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLS16LWluZGV4LWRyb3Bkb3duOiAxMDtcbiAgLS10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xufVxuXG4vKiBkcm9wZG93biBjb21wb25lbnQgc3R5bGVzICovXG5kcm9wZG93bi1zZWxlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiB2YXIoLS1kcm9wZG93bi13aWR0aCk7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctbWQpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodCk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuZHJvcGRvd24tc2VsZWN0ICoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBoaWRlIGRyb3Bkb3duIHdoZW4gYXJpYS1oaWRkZW49XCJ0cnVlXCIgKi9cbmRyb3Bkb3duLXNlbGVjdFthcmlhLWhpZGRlbj10cnVlXSBkcm9wZG93bi1vcHRpb25zIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogdHJpZ2dlciBidXR0b24gc3R5bGVzICovXG5kcm9wZG93bi10cmlnZ2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1zbSkgdmFyKC0tc3BhY2luZy1tZCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJhY2tncm91bmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgdmFyKC0tdHJhbnNpdGlvbi1kdXJhdGlvbiksIGJveC1zaGFkb3cgdmFyKC0tdHJhbnNpdGlvbi1kdXJhdGlvbik7XG59XG5kcm9wZG93bi10cmlnZ2VyOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1ib3JkZXItaG92ZXIpO1xufVxuZHJvcGRvd24tdHJpZ2dlcjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKHZhcigtLWNvbG9yLXByaW1hcnktcmdiLCA2NiwgMTUzLCAyMjUpLCAwLjI1KTtcbn1cblxuLyogY2FyZXQgaWNvbiAqL1xuLmRyb3Bkb3duLWNhcmV0IHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiB2YXIoLS1jYXJldC1zaXplKSB2YXIoLS1jYXJldC1zaXplKSAwO1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWJvcmRlci1kYXJrKSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLXNwYWNpbmctc20pO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tdHJhbnNpdGlvbi1kdXJhdGlvbik7XG59XG5cbi8qIEZsaXBwZWQgY2FyZXQgd2hlbiBleHBhbmRlZCAoZGVmYXVsdCBkaXJlY3Rpb24pICovXG5kcm9wZG93bi1zZWxlY3Q6bm90KFtkaXJlY3Rpb249dXBdKSBkcm9wZG93bi10cmlnZ2VyW2FyaWEtZXhwYW5kZWQ9dHJ1ZV0gLmRyb3Bkb3duLWNhcmV0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLyogQWxyZWFkeSBmbGlwcGVkIGNhcmV0IGZvciB1cHdhcmQgZHJvcGRvd25zIHdoZW4gY2xvc2VkICovXG5kcm9wZG93bi1zZWxlY3RbZGlyZWN0aW9uPXVwXSAuZHJvcGRvd24tY2FyZXQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICBib3JkZXItd2lkdGg6IDAgdmFyKC0tY2FyZXQtc2l6ZSkgdmFyKC0tY2FyZXQtc2l6ZSk7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdmFyKC0tY29sb3ItYm9yZGVyLWRhcmspO1xufVxuXG4vKiBGbGlwIGJhY2sgdG8gbm9ybWFsIHdoZW4gZXhwYW5kZWQgZm9yIHVwd2FyZCBkcm9wZG93bnMgKi9cbmRyb3Bkb3duLXNlbGVjdFtkaXJlY3Rpb249dXBdIGRyb3Bkb3duLXRyaWdnZXJbYXJpYS1leHBhbmRlZD10cnVlXSAuZHJvcGRvd24tY2FyZXQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbn1cblxuLyogb3B0aW9ucyBjb250YWluZXIgKi9cbmRyb3Bkb3duLW9wdGlvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiB2YXIoLS1vcHRpb25zLW1heC1oZWlnaHQpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xuICB6LWluZGV4OiB2YXIoLS16LWluZGV4LWRyb3Bkb3duKTtcbn1cblxuLyogRGVmYXVsdCBkaXJlY3Rpb24gKGRvd24pICovXG5kcm9wZG93bi1zZWxlY3Q6bm90KFtkaXJlY3Rpb249dXBdKSBkcm9wZG93bi1vcHRpb25zIHtcbiAgdG9wOiBjYWxjKDEwMCUgKyB2YXIoLS1zcGFjaW5nLXhzKSk7XG59XG5cbi8qIERpcmVjdGlvbiB1cCAqL1xuZHJvcGRvd24tc2VsZWN0W2RpcmVjdGlvbj11cF0gZHJvcGRvd24tb3B0aW9ucyB7XG4gIGJvdHRvbTogY2FsYygxMDAlICsgdmFyKC0tc3BhY2luZy14cykpO1xufVxuXG4vKiBBZGQgc29tZSBlbGV2YXRpb24gZm9yIHVwd2FyZCBkaXJlY3Rpb24gdG8gY3JlYXRlIG5pY2Ugc2hhZG93ICovXG5kcm9wZG93bi1zZWxlY3RbZGlyZWN0aW9uPXVwXSBkcm9wZG93bi1vcHRpb25zIHtcbiAgYm94LXNoYWRvdzogMCAtNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi8qIHN0eWxpbmcgZm9yIHRoZSBsaXN0ICovXG4uZHJvcGRvd24tbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogb3B0aW9uIGl0ZW1zICovXG5kcm9wZG93bi1vcHRpb24ge1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXNtKSB2YXIoLS1zcGFjaW5nLW1kKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIHZhcigtLXRyYW5zaXRpb24tZHVyYXRpb24pO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmRyb3Bkb3duLW9wdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWhvdmVyKTtcbn1cbmRyb3Bkb3duLW9wdGlvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWZvY3VzKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuZHJvcGRvd24tb3B0aW9uW2FyaWEtc2VsZWN0ZWQ9dHJ1ZV0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWxlY3RlZCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi8qIGhpZGRlbiBpbnB1dCAqL1xuLmRyb3Bkb3duLWhpZGRlbi1pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbn0iXX0= */";
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

  // Observed attributes
  static get observedAttributes() {
    return ['position'];
  }

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

    // Make sure the component itself isn't focusable
    this.setAttribute('tabindex', '-1');

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
   * Determines if the dropdown should open upward based on available space
   * @private
   */
  #determineDirection() {
    // If position is explicitly set, honor that
    const userPosition = this.getAttribute('position');
    if (userPosition === 'up' || userPosition === 'down') {
      return userPosition;
    }
    
    // Calculate available space
    const rect = this.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const estimatedOptionsHeight = Math.min(
      this.#options.length * 40, // Rough estimate of option height
      parseInt(getComputedStyle(this).getPropertyValue('--options-max-height') || '15rem') * 16 // Convert rem to px
    );
    
    // Determine if there's not enough space below, but more space above
    if (spaceBelow < estimatedOptionsHeight && rect.top > estimatedOptionsHeight) {
      return 'up';
    }
    
    // Default to down
    return 'down';
  }

  /**
   * shows the dropdown options
   */
  show() {
    // Determine direction to open
    const direction = this.#determineDirection();
    this.setAttribute('direction', direction);
    
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
    
    // Remove direction attribute
    this.removeAttribute('direction');

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
//# sourceMappingURL=dropdown-select.cjs.js.map
