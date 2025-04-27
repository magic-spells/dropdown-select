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

var css_248z = ":root {\n  --select-dropdown-width: 300px;\n  --select-options-max-height: 15rem;\n  --select-caret-size: 0.25rem;\n  --select-font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;\n  --select-font-size-base: 1rem;\n  --select-line-height: 1.5;\n  --select-color-text: #333;\n  --select-color-background: #fff;\n  --select-color-border: #ddd;\n  --select-color-border-hover: #aaa;\n  --select-color-border-dark: #666;\n  --select-color-primary: #4299e1;\n  --select-color-primary-rgb: 66, 153, 225;\n  --select-color-hover: #f0f0f0;\n  --select-color-focus: #e6f7ff;\n  --select-color-selected: #e6f7ff;\n  --select-spacing-xs: 0.25rem;\n  --select-spacing-sm: 0.75rem;\n  --select-spacing-md: 1rem;\n  --select-border-radius: 0.25rem;\n  --select-box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  --select-z-index-dropdown: 10;\n  --select-transition-duration: 0.2s;\n}\n\n/* dropdown component styles */\ndropdown-select {\n  position: relative;\n  width: var(--select-dropdown-width);\n  margin-bottom: var(--select-spacing-md);\n  display: block;\n  font-family: var(--select-font-family);\n  font-size: var(--select-font-size-base);\n  line-height: var(--select-line-height);\n  color: var(--select-color-text);\n  box-sizing: border-box;\n}\n\ndropdown-select * {\n  box-sizing: border-box;\n}\n\n/* hide dropdown when aria-hidden=\"true\" */\ndropdown-select[aria-hidden=true] dropdown-options {\n  display: none;\n}\n\n/* trigger button styles */\ndropdown-trigger {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: var(--select-spacing-sm) var(--select-spacing-md);\n  background-color: var(--select-color-background);\n  border: 1px solid var(--select-color-border);\n  border-radius: var(--select-border-radius);\n  cursor: pointer;\n  transition: border-color var(--select-transition-duration), box-shadow var(--select-transition-duration);\n}\ndropdown-trigger:hover {\n  border-color: var(--select-color-border-hover);\n}\ndropdown-trigger:focus {\n  outline: none;\n  border-color: var(--select-color-primary);\n  box-shadow: 0 0 0 3px rgba(var(--select-color-primary-rgb, 66, 153, 225), 0.25);\n}\n\n/* caret icon */\n.dropdown-caret {\n  border-style: solid;\n  border-width: var(--select-caret-size) var(--select-caret-size) 0;\n  border-color: var(--select-color-border-dark) transparent transparent;\n  margin-left: var(--select-spacing-sm);\n  transition: transform var(--select-transition-duration);\n}\n\n/* Flipped caret when expanded (default direction) */\ndropdown-select:not([direction=up]) dropdown-trigger[aria-expanded=true] .dropdown-caret {\n  transform: rotate(180deg);\n}\n\n/* Already flipped caret for upward dropdowns when closed */\ndropdown-select[direction=up] .dropdown-caret {\n  transform: rotate(180deg);\n  border-width: 0 var(--select-caret-size) var(--select-caret-size);\n  border-color: transparent transparent var(--select-color-border-dark);\n}\n\n/* Flip back to normal when expanded for upward dropdowns */\ndropdown-select[direction=up] dropdown-trigger[aria-expanded=true] .dropdown-caret {\n  transform: rotate(0);\n}\n\n/* options container */\ndropdown-options {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  max-height: var(--select-options-max-height);\n  overflow-y: auto;\n  background-color: var(--select-color-background);\n  border: 1px solid var(--select-color-border);\n  border-radius: var(--select-border-radius);\n  box-shadow: var(--select-box-shadow);\n  z-index: var(--select-z-index-dropdown);\n}\n\n/* Default direction (down) */\ndropdown-select:not([direction=up]) dropdown-options {\n  top: calc(100% + var(--select-spacing-xs));\n}\n\n/* Direction up */\ndropdown-select[direction=up] dropdown-options {\n  bottom: calc(100% + var(--select-spacing-xs));\n}\n\n/* Add some elevation for upward direction to create nice shadow */\ndropdown-select[direction=up] dropdown-options {\n  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);\n}\n\n/* styling for the list */\n.dropdown-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n/* option items */\ndropdown-option {\n  padding: var(--select-spacing-sm) var(--select-spacing-md);\n  cursor: pointer;\n  transition: background-color var(--select-transition-duration);\n  display: block;\n}\ndropdown-option:hover {\n  background-color: var(--select-color-hover);\n}\ndropdown-option:focus {\n  outline: none;\n  background-color: var(--select-color-focus);\n  box-shadow: inset 0 0 0 2px var(--select-color-primary);\n}\ndropdown-option[aria-selected=true] {\n  background-color: var(--select-color-selected);\n  font-weight: 500;\n}\n\n/* hidden input */\n.dropdown-hidden-input {\n  position: absolute;\n  opacity: 0;\n  height: 0;\n  width: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3Bkb3duLXNlbGVjdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyw0QkFBNEI7RUFDNUIsMklBQTJJO0VBQzNJLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0IsaUNBQWlDO0VBQ2pDLGdDQUFnQztFQUNoQywrQkFBK0I7RUFDL0Isd0NBQXdDO0VBQ3hDLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixpREFBaUQ7RUFDakQsNkJBQTZCO0VBQzdCLGtDQUFrQztBQUNwQzs7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSxrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLHVDQUF1QztFQUN2QyxjQUFjO0VBQ2Qsc0NBQXNDO0VBQ3RDLHVDQUF1QztFQUN2QyxzQ0FBc0M7RUFDdEMsK0JBQStCO0VBQy9CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQSwwQ0FBMEM7QUFDMUM7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLDBEQUEwRDtFQUMxRCxnREFBZ0Q7RUFDaEQsNENBQTRDO0VBQzVDLDBDQUEwQztFQUMxQyxlQUFlO0VBQ2Ysd0dBQXdHO0FBQzFHO0FBQ0E7RUFDRSw4Q0FBOEM7QUFDaEQ7QUFDQTtFQUNFLGFBQWE7RUFDYix5Q0FBeUM7RUFDekMsK0VBQStFO0FBQ2pGOztBQUVBLGVBQWU7QUFDZjtFQUNFLG1CQUFtQjtFQUNuQixpRUFBaUU7RUFDakUscUVBQXFFO0VBQ3JFLHFDQUFxQztFQUNyQyx1REFBdUQ7QUFDekQ7O0FBRUEsb0RBQW9EO0FBQ3BEO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLDJEQUEyRDtBQUMzRDtFQUNFLHlCQUF5QjtFQUN6QixpRUFBaUU7RUFDakUscUVBQXFFO0FBQ3ZFOztBQUVBLDJEQUEyRDtBQUMzRDtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFdBQVc7RUFDWCw0Q0FBNEM7RUFDNUMsZ0JBQWdCO0VBQ2hCLGdEQUFnRDtFQUNoRCw0Q0FBNEM7RUFDNUMsMENBQTBDO0VBQzFDLG9DQUFvQztFQUNwQyx1Q0FBdUM7QUFDekM7O0FBRUEsNkJBQTZCO0FBQzdCO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLDZDQUE2QztBQUMvQzs7QUFFQSxrRUFBa0U7QUFDbEU7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsMERBQTBEO0VBQzFELGVBQWU7RUFDZiw4REFBOEQ7RUFDOUQsY0FBYztBQUNoQjtBQUNBO0VBQ0UsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsMkNBQTJDO0VBQzNDLHVEQUF1RDtBQUN6RDtBQUNBO0VBQ0UsOENBQThDO0VBQzlDLGdCQUFnQjtBQUNsQjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxRQUFRO0FBQ1YiLCJmaWxlIjoiZHJvcGRvd24tc2VsZWN0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gIC0tc2VsZWN0LWRyb3Bkb3duLXdpZHRoOiAzMDBweDtcbiAgLS1zZWxlY3Qtb3B0aW9ucy1tYXgtaGVpZ2h0OiAxNXJlbTtcbiAgLS1zZWxlY3QtY2FyZXQtc2l6ZTogMC4yNXJlbTtcbiAgLS1zZWxlY3QtZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgT3BlbiBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcbiAgLS1zZWxlY3QtZm9udC1zaXplLWJhc2U6IDFyZW07XG4gIC0tc2VsZWN0LWxpbmUtaGVpZ2h0OiAxLjU7XG4gIC0tc2VsZWN0LWNvbG9yLXRleHQ6ICMzMzM7XG4gIC0tc2VsZWN0LWNvbG9yLWJhY2tncm91bmQ6ICNmZmY7XG4gIC0tc2VsZWN0LWNvbG9yLWJvcmRlcjogI2RkZDtcbiAgLS1zZWxlY3QtY29sb3ItYm9yZGVyLWhvdmVyOiAjYWFhO1xuICAtLXNlbGVjdC1jb2xvci1ib3JkZXItZGFyazogIzY2NjtcbiAgLS1zZWxlY3QtY29sb3ItcHJpbWFyeTogIzQyOTllMTtcbiAgLS1zZWxlY3QtY29sb3ItcHJpbWFyeS1yZ2I6IDY2LCAxNTMsIDIyNTtcbiAgLS1zZWxlY3QtY29sb3ItaG92ZXI6ICNmMGYwZjA7XG4gIC0tc2VsZWN0LWNvbG9yLWZvY3VzOiAjZTZmN2ZmO1xuICAtLXNlbGVjdC1jb2xvci1zZWxlY3RlZDogI2U2ZjdmZjtcbiAgLS1zZWxlY3Qtc3BhY2luZy14czogMC4yNXJlbTtcbiAgLS1zZWxlY3Qtc3BhY2luZy1zbTogMC43NXJlbTtcbiAgLS1zZWxlY3Qtc3BhY2luZy1tZDogMXJlbTtcbiAgLS1zZWxlY3QtYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgLS1zZWxlY3QtYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLS1zZWxlY3Qtei1pbmRleC1kcm9wZG93bjogMTA7XG4gIC0tc2VsZWN0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG59XG5cbi8qIGRyb3Bkb3duIGNvbXBvbmVudCBzdHlsZXMgKi9cbmRyb3Bkb3duLXNlbGVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IHZhcigtLXNlbGVjdC1kcm9wZG93bi13aWR0aCk7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNlbGVjdC1zcGFjaW5nLW1kKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWxlY3QtZm9udC1mYW1pbHkpO1xuICBmb250LXNpemU6IHZhcigtLXNlbGVjdC1mb250LXNpemUtYmFzZSk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1zZWxlY3QtbGluZS1oZWlnaHQpO1xuICBjb2xvcjogdmFyKC0tc2VsZWN0LWNvbG9yLXRleHQpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5kcm9wZG93bi1zZWxlY3QgKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIGhpZGUgZHJvcGRvd24gd2hlbiBhcmlhLWhpZGRlbj1cInRydWVcIiAqL1xuZHJvcGRvd24tc2VsZWN0W2FyaWEtaGlkZGVuPXRydWVdIGRyb3Bkb3duLW9wdGlvbnMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiB0cmlnZ2VyIGJ1dHRvbiBzdHlsZXMgKi9cbmRyb3Bkb3duLXRyaWdnZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiB2YXIoLS1zZWxlY3Qtc3BhY2luZy1zbSkgdmFyKC0tc2VsZWN0LXNwYWNpbmctbWQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3QtY29sb3ItYmFja2dyb3VuZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlbGVjdC1jb2xvci1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zZWxlY3QtYm9yZGVyLXJhZGl1cyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIHZhcigtLXNlbGVjdC10cmFuc2l0aW9uLWR1cmF0aW9uKSwgYm94LXNoYWRvdyB2YXIoLS1zZWxlY3QtdHJhbnNpdGlvbi1kdXJhdGlvbik7XG59XG5kcm9wZG93bi10cmlnZ2VyOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zZWxlY3QtY29sb3ItYm9yZGVyLWhvdmVyKTtcbn1cbmRyb3Bkb3duLXRyaWdnZXI6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6IHZhcigtLXNlbGVjdC1jb2xvci1wcmltYXJ5KTtcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEodmFyKC0tc2VsZWN0LWNvbG9yLXByaW1hcnktcmdiLCA2NiwgMTUzLCAyMjUpLCAwLjI1KTtcbn1cblxuLyogY2FyZXQgaWNvbiAqL1xuLmRyb3Bkb3duLWNhcmV0IHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiB2YXIoLS1zZWxlY3QtY2FyZXQtc2l6ZSkgdmFyKC0tc2VsZWN0LWNhcmV0LXNpemUpIDA7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc2VsZWN0LWNvbG9yLWJvcmRlci1kYXJrKSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLXNlbGVjdC1zcGFjaW5nLXNtKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIHZhcigtLXNlbGVjdC10cmFuc2l0aW9uLWR1cmF0aW9uKTtcbn1cblxuLyogRmxpcHBlZCBjYXJldCB3aGVuIGV4cGFuZGVkIChkZWZhdWx0IGRpcmVjdGlvbikgKi9cbmRyb3Bkb3duLXNlbGVjdDpub3QoW2RpcmVjdGlvbj11cF0pIGRyb3Bkb3duLXRyaWdnZXJbYXJpYS1leHBhbmRlZD10cnVlXSAuZHJvcGRvd24tY2FyZXQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4vKiBBbHJlYWR5IGZsaXBwZWQgY2FyZXQgZm9yIHVwd2FyZCBkcm9wZG93bnMgd2hlbiBjbG9zZWQgKi9cbmRyb3Bkb3duLXNlbGVjdFtkaXJlY3Rpb249dXBdIC5kcm9wZG93bi1jYXJldCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIGJvcmRlci13aWR0aDogMCB2YXIoLS1zZWxlY3QtY2FyZXQtc2l6ZSkgdmFyKC0tc2VsZWN0LWNhcmV0LXNpemUpO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHZhcigtLXNlbGVjdC1jb2xvci1ib3JkZXItZGFyayk7XG59XG5cbi8qIEZsaXAgYmFjayB0byBub3JtYWwgd2hlbiBleHBhbmRlZCBmb3IgdXB3YXJkIGRyb3Bkb3ducyAqL1xuZHJvcGRvd24tc2VsZWN0W2RpcmVjdGlvbj11cF0gZHJvcGRvd24tdHJpZ2dlclthcmlhLWV4cGFuZGVkPXRydWVdIC5kcm9wZG93bi1jYXJldCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDApO1xufVxuXG4vKiBvcHRpb25zIGNvbnRhaW5lciAqL1xuZHJvcGRvd24tb3B0aW9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IHZhcigtLXNlbGVjdC1vcHRpb25zLW1heC1oZWlnaHQpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3QtY29sb3ItYmFja2dyb3VuZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlbGVjdC1jb2xvci1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zZWxlY3QtYm9yZGVyLXJhZGl1cyk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNlbGVjdC1ib3gtc2hhZG93KTtcbiAgei1pbmRleDogdmFyKC0tc2VsZWN0LXotaW5kZXgtZHJvcGRvd24pO1xufVxuXG4vKiBEZWZhdWx0IGRpcmVjdGlvbiAoZG93bikgKi9cbmRyb3Bkb3duLXNlbGVjdDpub3QoW2RpcmVjdGlvbj11cF0pIGRyb3Bkb3duLW9wdGlvbnMge1xuICB0b3A6IGNhbGMoMTAwJSArIHZhcigtLXNlbGVjdC1zcGFjaW5nLXhzKSk7XG59XG5cbi8qIERpcmVjdGlvbiB1cCAqL1xuZHJvcGRvd24tc2VsZWN0W2RpcmVjdGlvbj11cF0gZHJvcGRvd24tb3B0aW9ucyB7XG4gIGJvdHRvbTogY2FsYygxMDAlICsgdmFyKC0tc2VsZWN0LXNwYWNpbmcteHMpKTtcbn1cblxuLyogQWRkIHNvbWUgZWxldmF0aW9uIGZvciB1cHdhcmQgZGlyZWN0aW9uIHRvIGNyZWF0ZSBuaWNlIHNoYWRvdyAqL1xuZHJvcGRvd24tc2VsZWN0W2RpcmVjdGlvbj11cF0gZHJvcGRvd24tb3B0aW9ucyB7XG4gIGJveC1zaGFkb3c6IDAgLTRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4vKiBzdHlsaW5nIGZvciB0aGUgbGlzdCAqL1xuLmRyb3Bkb3duLWxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi8qIG9wdGlvbiBpdGVtcyAqL1xuZHJvcGRvd24tb3B0aW9uIHtcbiAgcGFkZGluZzogdmFyKC0tc2VsZWN0LXNwYWNpbmctc20pIHZhcigtLXNlbGVjdC1zcGFjaW5nLW1kKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIHZhcigtLXNlbGVjdC10cmFuc2l0aW9uLWR1cmF0aW9uKTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5kcm9wZG93bi1vcHRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3QtY29sb3ItaG92ZXIpO1xufVxuZHJvcGRvd24tb3B0aW9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0LWNvbG9yLWZvY3VzKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4IHZhcigtLXNlbGVjdC1jb2xvci1wcmltYXJ5KTtcbn1cbmRyb3Bkb3duLW9wdGlvblthcmlhLXNlbGVjdGVkPXRydWVdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0LWNvbG9yLXNlbGVjdGVkKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLyogaGlkZGVuIGlucHV0ICovXG4uZHJvcGRvd24taGlkZGVuLWlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xufSJdfQ== */";
styleInject(css_248z);

/**
 * dropdown-select component that handles the functionality of a custom dropdown
 * @class DropdownSelect
 * @extends HTMLElement
 */
class DropdownSelect extends HTMLElement {
  // private fields for event handlers
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
    // No need to bind element events - child components manage their own events
    // This method is kept for potential future global event binding
  }

  /**
   * unbinds event listeners
   */
  unbindUI() {
    // No element events to remove - child components manage their own events
    // This method is kept for potential future global event cleanup

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
