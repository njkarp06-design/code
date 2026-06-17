import { useState } from 'react'
import FormComponent from './FormComponent'

function App() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        destination: "",
        lactoseFree: false
    })

    function handleChange(event) {
        const target = event.target
        const value = target.type === "checkbox" ? target.checked : target.value
        setFormData({
            ...formData,
            [target.name]: value
        })
    }

    return (
        <div>
            <h1>Travel Form</h1>
            <FormComponent formData={formData} handleChange={handleChange} />
        </div>
    )
}

export default App
