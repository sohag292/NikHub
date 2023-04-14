import React from 'react'

export default function Blogs() {
  return (
   <div>
       <div className='bg-light p-4 '>
    <h1 className='text-center mb-4'>Blogs</h1>
    </div>
    <div className='container my-5'>
      <h3>1. When should you use context API?</h3>
      <p>Ans: The Context API in React is used to share data between components without having to pass props through every level of the component tree. It allows  to create a context object that holds the data you want to share, and any component can access that data by "subscribing" to the context using the useContext hook. This makes your code more efficient and easier to manage.</p>
      <h3>2. What is a custom hook?</h3>
      <p>Ans: A custom hook is a function in React that allows you to reuse common logic across multiple components in your application. It helps to avoid code duplication, create reusable and composable code, and make your codebase more maintainable. </p>
      <h3>3. What is useRef?</h3>
      <p>Ans: useRef is a React hook that returns a mutable ref object. It can be used to access and modify DOM nodes or to store mutable values that do not trigger a re-render when they change. The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.</p>
      <h3>4. What is useMemo?</h3>
      <p>Ans: In React, useMemo is a hook that allows you to memoize the result of a function call and only recompute it if the dependencies of the function have changed. Memoization is a technique that helps improve the performance of your application by caching the results of expensive calculations. !!!</p>

    </div>
   </div>
  )
}
