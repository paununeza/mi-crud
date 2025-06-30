import './App.css'
import { useState, useEffect } from 'react'
import StudentForm from './components/StudentForm'
import StudentsTable from './components/StudentsTable'

// Funcion principal de la aplicación
// Maneja el estado de los estudiantes, la edición y el almacenamiento local
function App() {
  // Estado para almacenar la lista de estudiantes
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem('students')
    return saved ? JSON.parse(saved) : []
  })
 // Estado para manejar el índice del estudiante que se está editando
  // Si es null, significa que no se está editando a nadie
  const [studentToEdit, setStudentToEdit] = useState(null)
// Efecto para guardar la lista de estudiantes en el almacenamiento local
  // Cada vez que la lista de estudiantes cambia, se actualiza el localStorage
  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students))
  }, [students])
// Funciones para manejar la lógica de agregar, actualizar, eliminar y editar estudiantes
  // Agrega un nuevo estudiante o actualiza uno existente
  // Si studentToEdit es null, se agrega un nuevo estudiante
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
// Elimina un estudiante por su índice
  // Si se está editando a un estudiante, se cancela la edición
  // y se elimina el estudiante de la lista
  const deleteStudent = (index) => {
    const newStudents = [...students]
    newStudents.splice(index, 1)
    setStudents(newStudents)
    if (studentToEdit === index) setStudentToEdit(null)
  }
// Inicia el proceso de edición de un estudiante
  // Establece el índice del estudiante a editar
  const startEdit = (index) => {
    setStudentToEdit(index)
  }
// Cancela la edición de un estudiante
  // Establece studentToEdit a null para salir del modo de edición
  const cancelEdit = () => {
    setStudentToEdit(null)
  }
// Renderiza el componente principal de la aplicación
  // Incluye el formulario para agregar/editar estudiantes y la tabla de estudiantes
  return (
    <div className="app">
      <h1>⋆.˚ Evaluación de Alumnos ˚.⋆</h1>
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
// Exporta el componente App.
export default App