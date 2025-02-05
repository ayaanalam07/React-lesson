import React from "react";

const topics = [
  {
    title: "React-JS",
    description:
      "React.js (or just React) is a JavaScript library for building user interfaces, mainly for single-page applications (SPAs). It was developed by Facebook (now Meta) and is widely used for creating fast, interactive, and scalable front-end applications.",
  },
  {
    title: "Library & Framework",
    description:
      "A library is a collection of reusable functions and components that you can call whenever you need them. It gives you flexibility because you control how and when to use it.\n\nA framework provides a complete structure for building applications. Unlike a library, it controls the flow of your code and calls your code when needed.",
    extra: [
      {
        subtitle: "Example of Library",
        items: [
          "React.js → A UI library for building user interfaces.",
          "Axios → For making API requests.",
          "Lodash → Utility functions for arrays, objects, and strings.",
          "Framer Motion → For animations.",
        ],
      },
      {
        subtitle: "Example of Framework",
        items: [
          "Next.js → A React framework for full-stack development.",
          "Angular → A front-end framework for building web apps.",
          "Django → A backend framework for Python web apps.",
          "Express.js → A backend framework for Node.js.",
        ],
      },
    ],
  },
  {
    title: "Component-Based Architecture (CBA)",
    description:
      "Component-Based Architecture (CBA) is a software design approach where an application is built using reusable, self-contained components. Instead of writing a single long file for UI, you break the UI into smaller, independent pieces called components.",
  },
  {
    title: "Virtual DOM (VDOM)",
    description:
      "The Virtual DOM (VDOM) is a lightweight copy of the Real DOM (Document Object Model). React uses it to improve performance by minimizing direct updates to the actual DOM.",
  },
  {
    title: "JSX (JavaScript XML)",
    description:
      "JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript. It makes writing React components more intuitive and readable.",
  },
  {
    title: "State Management",
    description:
      "State Management in React refers to how data (state) is stored, updated, and shared across components. It helps keep the UI synchronized with the application’s data.",
  },
  {
    title: "React Hooks Forms",
    description:
      "React Hooks are built-in functions that allow you to use state and lifecycle features in functional components without needing class components.",
  },
];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-5 flex flex-col items-center">
      {topics.map((topic, index) => (
        <div
          key={index}
          className="w-full max-w-3xl bg-gray-800 rounded-xl shadow-lg p-6 mb-6 border border-gray-700"
        >
          <h1 className="text-2xl md:text-3xl font-bold underline mb-4">
            {topic.title}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">{topic.description}</p>
          {topic.extra &&
            topic.extra.map((section, idx) => (
              <div key={idx} className="mt-4">
                <h2 className="text-xl font-semibold underline mb-2">
                  {section.subtitle}
                </h2>
                <ul className="list-disc list-inside space-y-1">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default App;