import { useState } from 'react'

function App() {
    const [languages, setLanguages] = useState([
        {name: "Php", votes: 0},
        {name: "Python", votes: 0},
        {name: "JavaSript", votes: 0},
        {name: "Java", votes: 0}
    ])

    function vote(index) {
        const newLanguages = [...languages]
        newLanguages[index].votes = newLanguages[index].votes + 1
        setLanguages(newLanguages)
    }

    return (
        <div>
            <h1>Languages Poll</h1>
            {languages.map((language, index) => (
                <div key={index}>
                    <p>{language.name} : {language.votes} votes</p>
                    <button onClick={() => vote(index)}>Vote for {language.name}</button>
                </div>
            ))}
        </div>
    )
}

export default App
