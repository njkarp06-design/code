import React from 'react'
import data from './data.json'

class Example2 extends React.Component {
  render() {
    return (
      <div>
        <h2>Skills</h2>
        {Object.keys(data.Skills).map((key, index) => (
          <div key={index}>
            <h4>{key}</h4>
            <ul>
              {data.Skills[key].map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )
  }
}

export default Example2
