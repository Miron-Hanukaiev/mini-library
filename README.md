Mini Library - React + TypeScript
A small searchable and filterable library built with React + TypeScript.

Main Features:
● Searching a book by author/title,
● Filter by tag & rating,
● Sorting the title by A->Z / Z->A, sorting rating by high->low / low -> high),
● Favorite books toggle - persisted in localStorage,
● Given helpful empty states and strict typed props.

Decisions:
● All filtering/sorting states are inside Library.tsx
Child components are stateless UI drivers that improve separation and reducing coupling.
Tradeoff: Parent component got bigger, but the app kept predictable and clean without logic being spread.

● Favorite books persist between sessions via localStorage.
Tradeoff: There is no backend sync - persistence happend inside the brower only. 

● useFetch() wrapsload/error UI logic instead of placing it in components.
Tradeoff: it abstracts the errors, but keeps components more clean.

● created filtering pipeline instead of multiple conditional renders.
Tradeoff: the function has a depth, but it's easier to focus and to follow it, with less errors.

Run the project:
open the terminal in project, type: npm install, after that type: npm start.
The app will be open at http://localhost:3000/

Tech Stack:
React,
TypeScript,
Hooks,
localStorage,
fetch customized.

● Author: Miron Hanukaiev - Software Engineering Student @ Braude
