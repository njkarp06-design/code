import { useState } from 'react'

function DailyChallenge() {
    const [languages, setLanguages] = useState([
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "JavaSript", votes: 0 },
        { name: "Java", votes: 0 }
    ])

    function vote(name) {
        setLanguages(languages.map(lang => {
            if (lang.name === name) {
                return { ...lang, votes: lang.votes + 1 }
            }
            return lang
        }))
    }

    return (
        <div>
            <h2>Voting App</h2>
            {languages.map((lang, index) => (
                <div key={index}>
                    <button onClick={() => vote(lang.name)}>{lang.name}</button>
                    <span> {lang.votes} votes</span>
                </div>
            ))}
        </div>
    )
}

export default DailyChallenge
