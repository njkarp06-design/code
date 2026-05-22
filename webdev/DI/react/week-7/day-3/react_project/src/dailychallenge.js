import { useState } from 'react'
import FormComponent from './formcomponent'

function DailyChallenge() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        destination: '',
        lactoseFree: ''
    })

    function handleChange(e) {
        let { name, value, type, checked } = e.target
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? (checked ? 'on' : '') : value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        let params = new URLSearchParams()
        if (formData.firstName) params.set('firstName', formData.firstName)
        if (formData.lastName) params.set('lastName', formData.lastName)
        if (formData.age) params.set('age', formData.age)
        if (formData.gender) params.set('gender', formData.gender)
        if (formData.destination) params.set('destination', formData.destination)
        if (formData.lactoseFree) params.set('lactoseFree', formData.lactoseFree)
        window.location.search = params.toString()
    }

    return <FormComponent formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
}

export default DailyChallenge
