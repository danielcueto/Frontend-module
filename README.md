## Controlled Components
Controlled components are form elements whose value is controlled by React state. 

### In my code
```jsx
const [userInput, setUserInput] = useState("");

const handleUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

 <input
        id="user"
        type="text"
        value={userInput}
        onChange={handleUserInput}
      />
```

### Use Cases
1. Validate inputs as users type
2. Show/hide elements based on user input (conditional render)
3. Alter form fields based on other inputs
4. Format phone numbers, currency, etc. as users type
5.  Restrict input to specific patterns (numbers only, etc.)
6. Keep track of data across multiple form steps

### Advantages
- Full control over input value and behavior
- Can transform/sanitize input data in real-time
- Easier to implement complex validation logic
- Predictable form state
- Centralized state management
- Easier to test

### Disadvantages
- More boilerplate code
- Re-renders on every keystroke (potential performance issues with complex forms)
- Requires a separate handler for each form field in large forms

## Uncontrolled Components

Uncontrolled components maintain their own internal state. Values are retrieved from the DOM using refs rather than being controlled by React state.

### Implementation
```jsx
const passwordRef = useRef<HTMLInputElement>(null);

const handleClick = () => {
    alert(passwordRef.current?.value);
};

<input type="password" name="" ref={passwordRef} id="pass" />
```

### Use Cases
1. When you only need the value on submit
2. File inputs are inherently uncontrolled
3. When you need to minimize re-renders
4. When working with third-party DOM libraries
5. When you don't need to track changes
6. When refactoring older code bases

### Advantages
- Less code for simple use cases
- Better performance for large forms (no re-renders on every keystroke)
- Simpler implementation for basic forms
- Works well with file inputs and other complex input types
- Easier integration with non-React code and libraries

### Disadvantages
- Less control over user input
- Cannot perform real-time validation easily
- More difficult to implement dynamic form behavior
- Form state is less predictable and harder to test
- Cannot enforce input format or constraints in real-time