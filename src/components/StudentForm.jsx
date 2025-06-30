import { useEffect, useState } from 'react'

function StudentForm({ onSubmit, student, onCancel }) {
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [grade, setGrade] = useState('')

  useEffect(() => {
    if (student) {
      setName(student.name)
      setSubject(student.subject)
      setGrade(student.grade)
    } else {
      setName('')
      setSubject('')
      setGrade('')
    }
  }, [student])

  const handleSubmit = (e) => {
    e.preventDefault()
    const gradeNum = parseFloat(grade)

    if (!name.trim() || !subject.trim() || isNaN(gradeNum) || gradeNum < 0 || gradeNum > 7) {
      alert('Por favor, ingrese datos válidos. El promedio debe ser entre 0 y 7.')
      return
    }

    onSubmit({
      name: name.trim(),
      subject: subject.trim(),
      grade: gradeNum
    })

    setName('')
    setSubject('')
    setGrade('')
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h3>{student ? 'Editar Evaluación' : 'Agregar Nueva Evaluación'}</h3>
      <div className="form-group">
        <label>Nombre del Alumno:</label>
        <input 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>

      <div className="form-group">
        <label>Asignatura:</label>
        <input 
          value={subject} 
          onChange={(e) => setSubject(e.target.value)} 
          required 
        />
      </div>

      <div className="form-group">
        <label>Promedio (0.0 - 7.0):</label>
        <input
          type="number"
          step="0.1"
          min="0"
          max="7"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          required
        />
      </div>

      <div className="form-buttons">
        <button className="add-button" type="submit">
          {student ? 'Guardar Cambios' : 'Agregar Evaluación'}
        </button>
        {student && (
          <button 
            className="cancel-button"
            type="button"
            onClick={onCancel}
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  )
}

export default StudentForm