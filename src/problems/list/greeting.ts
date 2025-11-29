import { ProblemElement } from "../types/problem";

const starterCodeGreeting = `function Greeting(props) {
  // Your code here
  // Display a greeting message using the name prop
  // If no name is provided, display "Guest"
  
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}`;

const handlerGreeting = (Component: any) => {
  try {
    if (typeof Component !== 'function') {
      throw new TypeError('Greeting must be a function component');
    }
    
    const result = Component({});
    if (!result || typeof result !== 'object') {
      throw new Error('Component must return JSX');
    }
    
    return true;
  } catch (error: any) {
    console.log("greeting handler function error:", error.message);
    throw new Error(error.message);
  }
};

export const greeting: ProblemElement = {
  id: "greeting",
  slug: "greeting",
  title: "Greeting Component",
  difficulty: "Easy",
  category: "Basics",
  type: "react",
  language: "React",
  problemStatement: [
    "Create a Greeting component that accepts a 'name' prop and displays a personalized greeting.",
    "If no name is provided, display 'Hello, Guest!'",
    "If a name is provided, display 'Hello, [name]!'"
  ],
  examples: [
    {
      id: 1,
      inputText: "props = { name: 'Alice' }",
      outputText: "Hello, Alice!",
      explanation: "The component uses the name prop"
    },
    {
      id: 2,
      inputText: "props = {}",
      outputText: "Hello, Guest!",
      explanation: "When no name is provided, it defaults to 'Guest'"
    }
  ],
  constraints: [
    "Must accept a 'name' prop",
    "Must use a default value when name is not provided",
    "The greeting must be displayed in an h1 element"
  ],
  handlerFunction: handlerGreeting,
  starterCode: "",
  starterCodeReact: starterCodeGreeting,
  order: 201,
  starterFunctionName: "Greeting",
  videoId: "",
  solution: {
    approach: "Use props destructuring with a default value, or use the logical OR operator.",
    explanation: [
      "Accept props parameter in the function",
      "Destructure the name prop with a default value",
      "Use template literals or string concatenation to build the greeting",
      "Display the greeting in an h1 element"
    ],
    code: `function Greeting({ name = 'Guest' }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
}`
  }
};
