import { useState, useEffect } from 'react'
import StudentForm from './components/StudentForm'
import StudentsTable from './components/StudentsTable'
import AverageDisplay from './components/AverageDisplay'

function App() {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem('students')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students))
  }, [students])

  const addStudent = (student) => {
    setStudents([...students, student])
  }

  const deleteStudent = (index) => {
    const newStudents = [...students]
    newStudents.splice(index, 1)
    setStudents(newStudents)
  }

  const editStudent = (index, updatedStudent) => {
    const newStudents = [...students]
    newStudents[index] = updatedStudent
    setStudents(newStudents)
  }

  return (
    <div className="app">
      <h2>Seguimiento de Calificaciones de Estudiantes</h2>
      <AverageDisplay students={students} />
      <StudentForm onAdd={addStudent} />
      <StudentsTable 
        students={students} 
        onDelete={deleteStudent} 
        onEdit={editStudent} 
      />
    </div>
  )
}

export default App