import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';
/*
useState: hook para manejar el estado de los componentes funcionales.
useEffect: hook para ejecutar efectos secundarios (como cargar o guardar datos).
*/

/* Definición del componente App:
- App: Componente principal que maneja el estado de los items y la lógica de CRUD.
- items: Array que almacena los objetos de la lista.
- setItems: Función para actualizar el estado de items.   
- itemToEdit: objeto que representa el ítem que se va a editar, o null si no se está editando nada.
- setItemToEdit: Función para actualizar el estado del item a editar.
*/
function App() {
  const [items, setItems] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(null);

  /* Cargar los items desde localStorage al iniciar el componente:
  - useEffect: Hook que se ejecuta al montar el componente para cargar los items.
  - Se usa JSON.parse para convertir el string almacenado en un objeto.
  - Si no hay items en localStorage, se inicializa con un array vacío.
  */
  useEffect(() => {
    const storedItems =
      JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  /* Guardar los items en localStorage cada vez que cambian:
  - useEffect: Hook que se ejecuta cada vez que el estado de items cambia.
  -- Convierte el array items a JSON y lo guarda en localStorage.
  - Se usa JSON.stringify para convertir el array de objetos a un string.
  - Se almacena en localStorage bajo la clave 'items'.
  */  
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  /* Funciones para manejar el CRUD:
  ➤  addOrUpdateItem: Agrega un nuevo item o actualiza uno existente.
      Si itemToEdit existe, se está en modo edición:
       - Se actualiza el value del ítem que tiene el mismo id.
       - Se restablece itemToEdit a null.
      Si no existe, se agrega un nuevo ítem:
       - id: Date.now() genera un ID único basado en el tiempo.
       - Se agrega al array usando el operador de propagación (...items).
     
  */
  const addOrUpdateItem = (value) => {
    if (itemToEdit) {
      setItems(items.map(item => item.id === itemToEdit.id ? { ...item, value } : item));
      setItemToEdit(null);
    } else {
      setItems([...items, { id: Date.now(), value }]);
    }
  };
/* 
➤  deleteItem: Elimina un item por su id.
  Filtra el array para eliminar el ítem cuyo id coincide con el pasado como parámetro.
*/ 
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };
/* 
➤  editItem: Establece el item a editar.
  - Recibe un item como parámetro y lo asigna a itemToEdit.
  - Esto permite que el formulario se llene con los datos del ítem seleccionado para editar.  
*/ 
  const editItem = (item) => {
    setItemToEdit(item);
  };
/*
Renderizado del componente:
- Se muestra un título y se incluyen los componentes Form y List.
- Form: Componente para agregar o editar items.
  - Se le pasan las funciones addOrUpdateItem (función para guardar) 
    y itemToEdit [objeto actual que se está editando (o null)] como props.
- List: Componente que muestra la lista de items.
  - Se le pasan los items (lista actual), deleteItem (para eliminar) y editItem (para editar) como props.  
*/
  return (
    <div className="App">
      <h1>CRUD con LocalStorage</h1>
      <Form
        addOrUpdateItem={addOrUpdateItem}
        itemToEdit={itemToEdit}
      />
      <List
        items={items}
        deleteItem={deleteItem}
        editItem={editItem}
      />
    </div>
  );
}
// Exportación del componente App para que pueda ser utilizado en otros archivos.
export default App;