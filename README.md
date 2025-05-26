# Choose 2 of the following exercises:
## Exercise 1
Build a component that lets users manage a list of colors and change the page background.
- Users can add a color by typing a hex code (like #ff0000) into an input and pressing
Add.
- The list of colors is displayed as small color swatches.
- Clicking a color swatch changes the entire page background to that color.
## Exercise 2
Build a component that tracks and displays the current window width and height.
- On component mount, read current window size and display it.
- Add a resize event listener to update width and height in state whenever the window
resizes.
- Clean up the event listener on unmount.
Hints:
- Use window.innerWidth and window.innerHeight to get dimensions.
## Exercise 3
Build a form with inputs (e.g., name, email, password) that validates user input on submit.
- Validate each input field for simple rules (e.g., required, valid email format).
- If a field is invalid, focus that input using useRef.
- Show an error message below each invalid input.
Hints:
- Store refs in an object or array (e.g., { nameRef, emailRef, passwordRef }).
- Use regex or simple checks to validate email.