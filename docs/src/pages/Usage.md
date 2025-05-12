# Usage Guide

Welcome to the usage guide for **React Custom Spinner**.  
This guide will show you how to install, import, and use the spinners and loaders effectively in your React projects.

---

## Installation

You can install the package using either **npm** or **yarn**.

### Using npm

```bash
npm install react-custom-spinner
```

### Using yarn

```bash
yarn add react-custom-spinner
```

Importing Loaders
You can import any loader component you need:

```jsx
import { CircleLoader, BarsLoader, PulseCircle } from "react-custom-spinner";
```

✅ You can import multiple loaders at once or individually as needed.

**Basic Usage Example:**

```jsx
import { CircleLoader } from "react-custom-spinner";

function App() {
  return <CircleLoader loading={true} color="blue" size="60px" />;
}
```

By default, if loading is false, the loader will not render anything.

**Dynamic Loading Example:**

```jsx
import React, { useState } from "react";
import { BarsLoader } from "react-custom-spinner";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading ? (
        <BarsLoader color="green" size="80px" />
      ) : (
        <p>Content Loaded</p>
      )}
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
    </div>
  );
}
```

## Loader Props Reference

**Most loaders accept these common props:**

| Prop      | Type    | Default  | Description                                      |
| --------- | ------- | -------- | ------------------------------------------------ |
| `size`    | string  | `"50px"` | Defines the overall size of the loader           |
| `color`   | string  | `"red"`  | Defines the color of the spinner animation       |
| `loading` | boolean | `true`   | Whether the loader should be visible             |
| `speed`   | number  | `1`      | (Optional) Speed multiplier on supported loaders |

Advanced Usage Scenarios

**Conditionally Showing Loader During API Call**

```jsx
import { PulseCircle } from "react-custom-spinner";

function App() {
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
  };

  return (
    <div>
      <button onClick={fetchData}>Load Data</button>
      {loading && <PulseCircle color="#3498db" size="70px" />}
    </div>
  );
}
```

**Multiple Loaders Example**

```jsx
import {
  CircleLoader,
  DotWaveLoader,
  GrowingBarsLoader,
} from "react-custom-spinner";

function App() {
  return (
    <>
      <CircleLoader color="purple" size="40px" loading={true} />
      <DotWaveLoader color="orange" size="60px" loading={true} />
      <GrowingBarsLoader color="green" size="80px" loading={true} />
    </>
  );
}
```

**Accessibility Tips**

Always ensure loaders are accessible for all users, including screen readers:

```jsx
<div role="status" aria-label="Loading, please wait.">
  <CircleLoader color="blue" />
</div>
```

- Use role="status" or aria-busy="true".
- Provide descriptive labels (aria-label).
