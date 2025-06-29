import { useState } from 'react'

function StudentForm({ onAdd }) {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [grade, setGrade] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const gradeNum = parseFloat(grade)
    if (!name || !lastName || isNaN(gradeNum) || gradeNum < 1 || gradeNum > 7) {
      alert('Por favor, ingrese datos válidos.')
      return
    }

    onAdd({ name, lastName, grade: gradeNum })
    setName('')
    setLastName('')
    setGrade('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Apellido:</label>
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} required />
      </div>
      <div>
        <label>Calificación (1.0 - 7.0):</label>
        <input
          type="number"
          step="0.1"
          min="1"
          max="7"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          required
        />
      </div>
      <button type="submit">Agregar Estudiante</button>
    </form>
  )
}

export default StudentForm