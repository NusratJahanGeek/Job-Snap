import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div>
            <div className='job-title'>
                <h2>Blog</h2>
            </div>
            <div className='blog-data-container'>
                <h2>Q-1: When should you use context API?</h2>
                <p><strong>Answer:</strong> Context API is a way to share data between components in a React application. It works by creating a "provider" component that holds the shared data, and then any component that needs access to that data can "subscribe" to it using a "consumer" component. This makes it easy to manage state in a large application and pass data down through multiple layers of nested components. Thus, we don't need to manually pass props to every child component.</p>
            </div>
            <div className='blog-data-container'>
                <h2>Q-2: What is a custom hook?</h2>
                <p><strong>Answer:</strong> Custom hooks are functions that allow us to reuse stateful logic across different components in the React application. Instead of repeating the same code logic in multiple components, we can extract it into a custom hook and reuse it as needed. Custom hooks are a powerful way to encapsulate complex behavior and make our code more reusable and easier to maintain.</p>
            </div>
            <div className='blog-data-container'>
                <h2>Q-3: What is useRef?</h2>
                <p><strong>Answer:</strong> useRef is a hook in React that allows us to create a reference to a particular element in our component. We can use this reference to manipulate the element directly, like changing its content or position, without triggering a re-render of our entire component. It's particularly useful when we need to keep track of the previous value of a variable or state without causing a re-render, or when we need to focus or select an input element imperatively (i.e., without requiring user interaction).</p>
            </div>
            <div className='blog-data-container'>
                <h2>Q-4: What is useMemo?</h2>
                <p><strong>Answer:</strong> useMemo is a React hook that is used for performance optimization. It is used to memoize (by caching the results) expensive function calls so that they are not re-evaluated every time a component re-renders.
                <br /><br />
                Whenever we have a function that is computationally expensive or time-consuming and we only want to run it when necessary, we can wrap it in the useMemo hook. By using useMemo, we can prevent unnecessary re-rendering of components and improve the performance of our application.</p>
            </div>
        </div>
    );
};

export default Blog;