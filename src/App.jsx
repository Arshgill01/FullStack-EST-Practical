import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [submitted, setSubmitted] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(formData)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <p>Name: {submitted.name}</p>
          <p>Email: {submitted.email}</p>
        </div>
      )}
    </div>
  )
}

export default App