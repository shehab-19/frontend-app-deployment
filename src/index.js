import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css'; // Import a CSS file for styling

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1 className="header">Welcome to My Cool Frontend App!</h1>
      <p className="description">
        This is a React application with interactive features.
      </p>
      <button className="button" onClick={() => setCount(count + 1)}>
        Click me!
      </button>
      <p className="count">You clicked {count} times.</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
