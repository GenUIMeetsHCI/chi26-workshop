# Workshop Homepage Updates

## New Features Implemented

### 1. Resizable Panel Layout
- **Main content wrapper**: Now resizes to 60% of screen width when sidebar is open (instead of fixed pixel shift)
- **Sidebar**: Takes up the remaining 40% of screen width dynamically

### 2. Draggable Divider
- A 4px draggable resize handle appears between the main content and sidebar when sidebar is open
- Visual feedback on hover and during drag (color changes)
- Smooth cursor change to `col-resize` when dragging

### 3. Drag Constraints
- **Minimum main width**: 30% of screen
- **Maximum main width**: 80% of screen
- Prevents text selection during drag operation
- Smooth transitions when opening/closing sidebar

## Technical Implementation

### State Management
- `mainWidth`: Controls the percentage width of the main content (default: 60%)
- `isDragging`: Tracks whether user is currently dragging the divider
- Mouse event handlers for drag functionality

### CSS Changes
- **App.css**: Changed from fixed translation to flexible widths using `display: flex`
- **Sidebar.css**: Removed fixed width, now uses dynamic width from props
- **Global.css**: Added `.dragging` class to prevent text selection during resize
- **Resize handle**: New CSS for the draggable divider with hover effects

### React Components
- **App.js**: Added `useRef`, `useEffect` for drag functionality
- **Sidebar.js**: Now accepts `width` prop for dynamic sizing
- Event listeners for `mousemove` and `mouseup` for drag tracking

## User Experience
1. Click any navigation button (Program, CFP, or Organizers)
2. Sidebar smoothly slides in, resizing main content to 60%
3. Grab the 4px gray divider between panels
4. Drag left or right to adjust panel sizes
5. Release to set the new layout
6. Click the same button again to close the sidebar

## Browser Compatibility
Works in all modern browsers with full mouse event support.





