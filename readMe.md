# React Custom Spinner

> 🎡 A collection of beautiful and customizable React loader/spinner components.

![NPM Version](https://img.shields.io/npm/v/react-custom-spinner)
![License](https://img.shields.io/npm/l/react-custom-spinner)
![React](https://img.shields.io/badge/react-18+-blue)

---

## 📺 Demo

Check out the live demo of loaders gallery here:

[Live Demo Link](https://your-demo-link.com)

---

## ✨ Features

- 🎨 Multiple spinner types (Circle, ZigZag, etc.)
- 🛠 Fully customizable (size, color, speed)
- 💡 Easy to use in React projects
- 🔥 Lightweight and optimized

---

## 📦 Installation

```bash
npm install react-custom-spinner
# or
yarn add react-custom-spinner
```

---

## 🚀 Usage

```jsx
import React from "react";
import { CircleLoader, ZigZagLoader } from "react-custom-spinner";

function App() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <CircleLoader loading size="50px" color="red" />
      <ZigZagLoader loading size="30px" color="blue" />
    </div>
  );
}

export default App;
```

---

## 🛠 Props

| Prop      | Type      | Default  | Description          |
| --------- | --------- | -------- | -------------------- |
| `loading` | `boolean` | `true`   | Show/hide the loader |
| `size`    | `string`  | `"40px"` | Size of the loader   |
| `color`   | `string`  | `"#000"` | Color of the loader  |

---

## 🖼 Available Loaders

- `CircleLoader`
- `ZigZagLoader`
- `RotatingSquare`
- `BarsLoader`
- `DotsWave`
- `DualRing`
- `FadingDots`
- `GrowingBars`
- `PulseCircle`
- `RippleLoader`
- `BlinkingLoader`
- `BounceCircleLoader`
- `CubeBounceLoader`
- `FlipDotLoader`
- `HeartbeatLoader`
- `PuffLoader`
- `PulseSquareLoader`
- `RingBounceLoader`
- `RipplePulseLoader`
- `ShimmerLineLoader`
- `SlideInBarsLoader`
- `SpinBubbleLoader`
- `SpinDotsLoader`
- `StretchBarLoader`
- `TunnelSpinner`

---

## 👨‍💻 Author

- **Pratik Hole**

---

## 📄 License

This project is licensed under the ISC License.
