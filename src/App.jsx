import './App.css'
import { useState, useEffect } from 'react'
import StudentForm from './components/StudentForm'
import StudentsTable from './components/StudentsTable'

function App() {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem('students')
    return saved ? JSON.parse(saved) : []
  })

  const [studentToEdit, setStudentToEdit] = useState(null)

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students))
  }, [students])

  const addOrUpdateStudent = (student) => {
    if (studentToEdit !== null) {
      const updated = students.map((s, i) =>
        i === studentToEdit ? student : s
      )
      setStudents(updated)
      setStudentToEdit(null)
    } else {
      setStudents([...students, student])
    }
  }

  const deleteStudent = (index) => {
    const newStudents = [...students]
    newStudents.splice(index, 1)
    setStudents(newStudents)
    if (studentToEdit === index) setStudentToEdit(null)
  }

  const startEdit = (index) => {
    setStudentToEdit(index)
  }

  const cancelEdit = () => {
    setStudentToEdit(null)
  }

  return (
    <div className="app">
      <h1>Evaluación de Alumnos</h1>
      <StudentForm 
        onSubmit={addOrUpdateStudent} 
        student={studentToEdit !== null ? students[studentToEdit] : null}
        onCancel={cancelEdit}
      />
      <StudentsTable
        students={students} 
        onDelete={deleteStudent} 
        onEdit={startEdit} 
        editingIndex={studentToEdit}
      />
    </div>
  )
}

export default App