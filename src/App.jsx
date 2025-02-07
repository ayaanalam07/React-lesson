import React from "react";

const lessons = [
  {
    title: "Introduction to Websites",
    content:
      "A website is a collection of web pages that are accessed through a web browser. Websites can be static (simple HTML, CSS) or dynamic (using JavaScript, React, and other frameworks).",
  },
  {
    title: "Types of Websites",
    content:
      "- **Static Websites**: Built with HTML and CSS only.\n- **Dynamic Websites**: Use JavaScript, databases, and frameworks like React.\n- **Single Page Applications (SPA)**: Websites that load a single HTML page and dynamically update content without refreshing.",
  },
  {
    title: "Introduction to JavaScript",
    content:
      "JavaScript is a programming language that allows you to create interactive websites. It can manipulate the DOM (Document Object Model) and handle user interactions.\n\nKey JavaScript Concepts:\n- **Variables** (`let`, `const`, `var`)\n- **Functions** (Regular & Arrow functions)\n- **Events** (Click, Hover, Input)\n- **DOM Manipulation** (`document.querySelector`, `document.getElementById`)\n- **ES6 Features** (Template literals, Destructuring, Spread operator)",
  },
  {
    title: "Introduction to ReactJS",
    content: "ReactJS is a JavaScript library for building UI components. It helps create fast and scalable web applications.\n\nKey React Concepts:\n- **Components** (Functional & Class components)\n- **JSX (JavaScript XML)**\n- **Props & State**\n- **Event Handling**\n- **Hooks (useState, useEffect)",
  },
  {
    title: "Setting Up a React Project",
    content: "1. Install Node.js and npm.\n2. Create a React App:\n\n```bash\nnpx create-react-app my-app\ncd my-app\nnpm start\n```"
    
  },
  {
    title: "Advanced React Concepts",
    content: "- **State Management with Hooks**:\n```javascript\nimport React, { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p className='text-lg font-semibold'>Count: {count}</p>\n      <button className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-2' onClick={() => setCount(count + 1)}>Increase</button>\n    </div>\n  );\n}\n\nexport default Counter;\n```\n\n- **React Router for Navigation**:\n```bash\nnpm install react-router-dom\n```"
    
  }
];

export default function LessonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-2xl border border-gray-200">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8">
          React Website Lesson
        </h1>
        <div className="space-y-8">
          {lessons.map((lesson, index) => (
            <div
              key={index}
              className="p-6 border-l-8 border-blue-600 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="text-2xl font-bold text-gray-800">{lesson.title}</h2>
              <p className="text-gray-700 mt-4 leading-relaxed">{lesson.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
