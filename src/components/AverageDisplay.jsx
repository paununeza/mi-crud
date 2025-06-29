function AverageDisplay({ students }) {
  const average = 
    students.length === 0 
    ? 'No Disponible' 
    : (students.reduce((sum, s) => sum + parseFloat(s.grade), 0) / students.length).toFixed(2)

  return (
    <h3 style={{ backgroundColor: '#e8f0ff', padding: '10px', borderRadius: '5px' }}>
      Promedio de Calificaciones: {average}
    </h3>
  )
}

export default AverageDisplay