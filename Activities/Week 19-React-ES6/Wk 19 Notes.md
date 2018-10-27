# React

Refer to https://react-gently.netlify.com/#/

- look into redux and mobix
- Facebook built it
- React (web) Reach Nativve (mobile)
- built of a series of components which are re-useable
- Components -- Dumb (no business login) Front End and Design
- Components -- Smart or Stateful -- more capable and does business logic
- React - Single Page Application
  - relying on the state change\
  - rendering multiple pages
  - more efficient
  - less requests to the server
- DOM Tree -- Render Virtual DOM Tree
- JSX - similar to HTML but is NOT HTML - The syntax that react is made in
- when you use 'class=''' you need to use className
- unidirectional -- from parent to child
- you can add or embed as many components into child
- App.js (is always your top level parent js file)

**Lookup ES7 Property Initializer 

### Functional Component

- Presentation
- No Business Logic
- Stateless
- Function that returns JSX

`const FriendCard = props => (<div>Hi World</ div> );`

### Stateful Component

- Smart Component
- Can do business logic
- Has a STATE
- Class based component
- Render() will always be used on a Stateful component `React.Component`
- class based methods it needs to be bound to the class it is referencing

## Props

- These are constant and immutable
- Props is an object and can have properties added to it
- props value always has to be wrapped in {}

## State
- You cannot manually update the state in React
