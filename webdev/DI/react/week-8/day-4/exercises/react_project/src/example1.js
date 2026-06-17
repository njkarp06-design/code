import React from 'react'
import data from './data.json'

class Example1 extends React.Component {
  render() {
    return (
      <div>
        <h2>Social Medias</h2>
        <ul>
          {data.SocialMedias.map((media, index) => (
            <li key={index}>{media}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Example1
