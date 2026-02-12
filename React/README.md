# Nebula Labs - React Workshop

### Date: Feb 11, 2026

### Imperative (Vanilla JS)

<strong>How</strong> to achieve the result

### Declarative (React)

<strong>WHAT</strong> the UI should look like for a given state.
<hr>

Virtual DOM: lightweight JS object rep of the actual DOM

Diffing: React compares the new VDOM tree with the previous one to find exact differences

Reconciliation: only the changed "nodes" are updated in the real browser DOM

Efficiency: Minimizes expensive reflows and repains in the browser.

### Hooks!!!

Functions that let you "hook into" React state and lifecycle features from functional components. 

1: <strong>Top level</strong>: only call hooks at the top level.

2: <b>React Functions</b>: only call hooks from React function components or custom hooks

### useState()

returns a stateful value and a function to update it.
- Persistent between renders
- Triggers a re-render on change
- Initial value can be any type

```tsx
const [orderBy, setOrderby] = useState<string>('color);
```

### useEffect()

no dependency array: runs after every render

empty array[]: runs once on mount (e.g., fetching initial course data)

specific dependencies [id]: runs on mount and whenever the id value changes

cleanup: `Return` a function to clear intervals or unsubscribe from listeners

```jsx
useEffect(() => {
    blah,
    []
})
```
## Context & Refs

### useContext
Avoid "prop drilling". use for global state like User Auth or theme that many components need.

### useRef
Direct DOM Access. Persists values without re-renders.

## NEBULA STANDARD
TypeScript First
No any, type your props, state, and API responses

Modularity
Keep components small (under 200 lines) think for scale, think for function, (e.g., is it reusable)

Clean effects


