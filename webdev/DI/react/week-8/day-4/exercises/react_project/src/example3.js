import React from 'react'
import data from './data.json'

class Example3 extends React.Component {
  render() {
    return (
      <div>
        <h2>Experiences</h2>
        {data.Experiences.map((exp, index) => (
          <div key={index}>
            <p>{exp.title}</p>
            <p>{exp.company}</p>
            <p>{exp.years} years</p>
          </div>
        ))}
      </div>
    )
  }
}

export default Example3
