import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '',
            inputValue: '',
            responseMessage: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async componentDidMount() {
        let response = await fetch('/api/hello')
        let data = await response.json()
        this.setState({ message: data.message })
    }

    handleChange(e) {
        this.setState({ inputValue: e.target.value })
    }

    async handleSubmit(e) {
        e.preventDefault()
        let response = await fetch('/api/world', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ value: this.state.inputValue })
        })
        let data = await response.json()
        this.setState({ responseMessage: data.message })
    }

    render() {
        return (
            <div style={{ fontFamily: 'Arial', maxWidth: '600px', margin: '40px auto', padding: '0 20px' }}>
                <h1>{this.state.message}</h1>

                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                        placeholder="Type something..."
                        style={{ padding: '8px', fontSize: '16px', marginRight: '10px' }}
                    />
                    <button type="submit" style={{ padding: '8px 16px', fontSize: '16px' }}>
                        Submit
                    </button>
                </form>

                {this.state.responseMessage && <p>{this.state.responseMessage}</p>}
            </div>
        )
    }
}

export default App
