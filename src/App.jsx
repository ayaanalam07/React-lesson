import React from 'react'

const App = () => {
  return (
    <>
    <div>
    <div className='p-5 mt-[5rem] ml-[18rem] w-[50rem] text-center border border-black bg-info'>
      <h1 className='italic font-bold text-3xl text-white underline'>React-JS</h1>
      <h1 className='mt-3 italic'>React.js (or just React) is a JavaScript library for building user interfaces, mainly for single-page applications (SPAs). It was developed by Facebook (now Meta) and is widely used for creating fast, interactive, and scalable front-end applications.</h1>
    </div>
    <div className='p-5 mt-[2rem] ml-[18rem] w-[50rem]  text-balance border border-black bg-info'>
      <h1 className='italic font-bold text-3xl text-white underline'>Library & Framework</h1>
      <h1 className='mt-3 italic'>A library is a collection of reusable functions and components that you can call whenever you need them. It gives you flexibility because you control how and when to use it.

      A framework provides a complete structure for building applications. Unlike a library, it controls the flow of your code and calls your code when needed.
</h1>
<h1 className='italic font-bold text-white text-3xl underline'>Example of Library</h1>
<h1>
  <ul>React.js → A UI library for building user interfaces.</ul>
  <ul>Axios → For making API requests.</ul>
  <ul>Lodash → Utility functions for arrays, objects, and strings.</ul>
  <ul>Framer Motion → For animations.</ul>
</h1>
<h1 className='italic font-bold text-white text-3xl underline'>Example of Framework</h1>
<h1>
  <ul>Next.js → A React framework for full-stack development.</ul>
  <ul>Angular → A front-end framework for building web apps.</ul>
  <ul>Django → A backend framework for Python web apps.</ul>
  <ul>Express.js → A backend framework for Node.js.</ul>
</h1>
    </div>
    <div className='p-5 mt-[5rem] ml-[18rem] w-[50rem] text-center border border-black bg-info'>
      <h1 className='italic font-bold text-3xl text-white underline'>Component-Based Architecture (CBA)</h1>
      <h1 className='mt-3 italic'>Component-Based Architecture (CBA) is a software design approach where an application is built using reusable, self-contained components. Instead of writing a single long file for UI, you break the UI into smaller, independent pieces called components.</h1>
    </div>
    <div className='p-5 mt-[5rem] ml-[18rem] w-[50rem] text-center border border-black bg-info'>
      <h1 className='italic font-bold text-3xl text-white underline'>Virtual DOM (VDOM)</h1>
      <h1 className='mt-3 italic'>The Virtual DOM (VDOM) is a lightweight copy of the Real DOM (Document Object Model). React uses it to improve performance by minimizing direct updates to the actual DOM.</h1>
    </div>
    <div className='p-5 mt-[5rem] ml-[18rem] w-[50rem] text-center border border-black bg-info'>
      <h1 className='italic font-bold text-3xl text-white underline'>JSX (JavaScript XML)</h1>
      <h1 className='mt-3 italic'>JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript. It makes writing React components more intuitive and readable.</h1>
    </div>
    <div className='p-5 mt-[5rem] ml-[18rem] w-[50rem] text-center border border-black bg-info'>
      <h1 className='italic font-bold text-3xl text-white underline'>State Management</h1>
      <h1 className='mt-3 italic'>State Management in React refers to how data (state) is stored, updated, and shared across components. It helps keep the UI synchronized with the application’s data.</h1>
    </div>
    <div className='p-5 mt-[5rem] ml-[18rem] w-[50rem] text-center border border-black bg-info'>
      <h1 className='italic font-bold text-3xl text-white underline'>React Hooks Forms</h1>
      <h1 className='mt-3 italic'>React Hooks are built-in functions that allow you to use state and lifecycle features in functional components without needing class components.</h1>
    </div>
    </div>
    </>
  )
}

export default App