function FormComponent({ formData, handleChange, handleSubmit }) {
    return (
        <div style={{ maxWidth: "500px", margin: "40px auto", fontFamily: "Arial" }}>
            <h2>Travel Form</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name: </label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
                </div>
                <div>
                    <label>Age: </label>
                    <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
                </div>
                <div>
                    <label>Gender: </label>
                    <select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div>
                    <label>Destination: </label>
                    <select name="destination" value={formData.destination} onChange={handleChange}>
                        <option value="">Select destination</option>
                        <option value="Japan">Japan</option>
                        <option value="France">France</option>
                        <option value="USA">USA</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Australia">Australia</option>
                    </select>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="lactoseFree" checked={formData.lactoseFree === 'on'} onChange={handleChange} />
                        {" "}Lactose Free
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>

            <hr />
            <h3>Form Values:</h3>
            <p>First Name: {formData.firstName}</p>
            <p>Last Name: {formData.lastName}</p>
            <p>Age: {formData.age}</p>
            <p>Gender: {formData.gender}</p>
            <p>Destination: {formData.destination}</p>
            <p>Lactose Free: {formData.lactoseFree}</p>
        </div>
    )
}

export default FormComponent
