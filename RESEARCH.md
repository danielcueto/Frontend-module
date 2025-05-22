## React Research Topics

# What are React components and how are they reused?

React components are like LEGO blocks used to build user interfaces. Each component is an independent piece of code that shows something on the screen, such as a button, form or product card. These components use JSX, a mix of HTML and JavaScript.

There are two main types of components: functional components, which are the most commonly used today, and class components, which are older and less common now.

Reusability comes from using props, which are like parameters that allow you to customize how a component looks or behaves. For example, you can have a single Button component but show different text or colors depending on the props it receives.

You can also combine smaller components into larger ones through component composition. This helps organize your code better and avoids repeating the same logic, following the DRY principle (Don't Repeat Yourself).

There are also libraries like Material-UI or Chakra UI that provide ready-to-use components, which makes reuse even easier.

# What is state in React and how does it work internally?

State in React is like a component’s memory. It stores data that can change over time, such as what a user types in a form or whether a menu is open or closed.

In functional components, the useState hook is used to create a state variable and a function to update it. When that function is called, React re-renders the component to reflect the new state on the screen.

Internally, React uses a structure called the fiber tree to keep track of components and their states. Then it performs a process called reconciliation, where it compares the previous and current state and updates only the parts of the DOM that have changed. This makes the application faster and more efficient.

State updates are asynchronous. React may group multiple updates together to improve performance. Also, React does not directly change the old state but instead creates a new version of it. This follows the concept of immutability from functional programming.

Thanks to this system, React can build interactive, fast and easy-to-maintain user interfaces.
