function StudentsTable({ students, onDelete, onEdit }) {
  const handleEdit = (index) => {
    const student = students[index]
    const newName = prompt('Nuevo nombre:', student.name) || student.name
    const newLastName = prompt('Nuevo apellido:', student.lastName) || student.lastName
    const newGrade = parseFloat(prompt('Nueva calificación (1.0 - 7.0):', student.grade)) || student.grade

    if (newGrade < 1 || newGrade > 7) {
      alert('La calificación debe estar entre 1 y 7.')
      return
    }

    onEdit(index, { name: newName, lastName: newLastName, grade: newGrade })
  }

  return (
    <table border="1" cellPadding="8" cellSpacing="0">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Calificación</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {students.length === 0 ? (
          <tr>
            <td colSpan="4">No hay estudiantes</td>
          </tr>
        ) : (
          students.map((s, i) => (
            <tr key={i}>
              <td>{s.name}</td>
              <td>{s.lastName}</td>
              <td>{s.grade}</td>
              <td>
                <button onClick={() => handleEdit(i)}>Editar</button>
                <button onClick={() => onDelete(i)}>Eliminar</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  )
}

export default StudentsTable