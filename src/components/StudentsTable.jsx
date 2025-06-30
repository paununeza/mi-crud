
function getApreciacion(grade) {
  if (grade >= 1 && grade <= 3.9) {
    return { text: 'Deficiente', className: 'deficiente' }
  } else if (grade >= 4.0 && grade <= 5.5) {
    return { text: 'Con mejora', className: 'mejora' }
  } else if (grade >= 5.6 && grade <= 6.4) {
    return { text: 'Buen trabajo', className: 'bueno' }
  } else if (grade >= 6.5 && grade <= 7.0) {
    return { text: 'Destacado', className: 'destacado' }
  } else {
    return { text: 'Sin datos', className: 'sin-datos' }
  }
}

function StudentsTable({ students, onDelete, onEdit, editingIndex }) {
  return (
    <div className="evaluaciones-container">
      <h2>Evaluaciones Guardadas</h2>
      {students.length === 0 ? (
        <p className="empty-message">
          No hay evaluaciones guardadas aún. ¡Agrega una!
        </p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {students.map((s, i) => {
            const apreciacion = getApreciacion(s.grade)
            return (
              <div key={i} className="evaluacion-card">
                <div className="evaluacion-info">
                  <p><strong>Alumno:</strong> {s.name}</p>
                  <p>Asignatura: {s.subject}</p>
                  <p>Promedio: <strong>{s.grade}</strong></p>
                  <p className={`badge ${apreciacion.className}`}>{apreciacion.text}</p>
                </div>
                <div className="card-buttons">
                  <button 
                    onClick={() => onEdit(i)}
                    className={`edit-button ${editingIndex === i ? 'active' : ''}`}
                  >
                    Editar
                  </button>
                  <button 
                    onClick={() => onDelete(i)}
                    className="delete-button"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default StudentsTable