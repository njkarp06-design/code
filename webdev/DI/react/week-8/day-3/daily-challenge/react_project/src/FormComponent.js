function FormComponent({ formData, handleChange }) {
    return (
        <div>
            <form>
                <label>First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />

                <label>Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />

                <label>Age</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} />

                <label>Male</label>
                <input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handleChange} />
                <label>Female</label>
                <input type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={handleChange} />

                <label>Destination</label>
                <select name="destination" value={formData.destination} onChange={handleChange}>
                    <option value="">Choose...</option>
                    <option value="Japan">Japan</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Macao">Macao</option>
                    <option value="Las Vegas">Las Vegas</option>
                </select>

                <label>Lactose Free</label>
                <input type="checkbox" name="lactoseFree" checked={formData.lactoseFree} onChange={handleChange} />

                <button type="submit">Submit</button>
            </form>

            <h2>Entered Information</h2>
            <p>First Name: {formData.firstName}</p>
            <p>Last Name: {formData.lastName}</p>
            <p>Age: {formData.age}</p>
            <p>Gender: {formData.gender}</p>
            <p>Destination: {formData.destination}</p>
            <p>Lactose Free: {formData.lactoseFree ? "Yes" : "No"}</p>
        </div>
    )
}

export default FormComponent
