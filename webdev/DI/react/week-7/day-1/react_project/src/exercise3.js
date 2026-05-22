import React from 'react';
import './exercise.css';

class Exercise extends React.Component {
  render() {
    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };

    return (
      <div>
        <h1 style={style_header}>Hello from Exercise</h1>

        <p className="para">This is a paragraph.</p>

        <a href="https://www.google.com">Click this link</a>

        <form>
          <label>Name: </label>
          <input type="text" placeholder="Enter your name" />
          <button type="submit">Submit</button>
        </form>

        <img src="https://via.placeholder.com/150" alt="placeholder" />

        <ul>
          <li>Item one</li>
          <li>Item two</li>
          <li>Item three</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
