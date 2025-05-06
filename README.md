# Alert Button Toolbar - React Application

## Overview

This React application demonstrates the use of **props** and **event handlers** by creating a `Toolbar` component that contains multiple `AlertButton` components. Each button displays a unique alert message when clicked.

Key features:
- **Reusable `AlertButton` component** that accepts `message` and `children` props.
- **`Toolbar` component** that renders multiple `AlertButton`s.
- Clicking each button triggers an alert with its own unique message.

---

## Component Structure

### 1️⃣ `AlertButton` Component
- Accepts:
  - `message` prop → displayed in an alert when button is clicked.
  - `children` prop → used as the button label.
- Example usage:

```jsx
<AlertButton message="Hello!">Click Me</AlertButton>
