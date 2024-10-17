# React Password Generator

A fully featured Password Generator built using React.

## Features

- Automatic password generation on page load
- Specify password length using input slider
- Include/Exclude Numbers
- Include/Exclude Special Characters
- Copy password with a single click
- On demand generation of unique passwords with generate button
- Automatic password generation on change of parameter

## Hooks use

- `useState` to store password, length, isNumbrIncluded, isCharIncluded
- `useRef` to highlight password input on Copy
- `useCallback` to memoize the generatePassword() function
- `useEffect` to generate password on page load
