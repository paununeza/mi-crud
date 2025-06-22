import React, {useState, useEffect} from 'react';
/*
➤ useState: para manejar el valor del input.
➤ useEffect: para reaccionar cuando cambian las props (especialmente itemToEdit)
*/

/*
Declaración del componente Form que recibe dos props:
➤  addOrUpdateItem: Función para agregar o actualizar un item.
➤  itemToEdit: Objeto del item que se está editando, o null si no se está editando.

Estado del input:
inputValue: almacena lo que el usuario escribe en el campo de texto.
setInputValue: actualiza ese valor.
*/
function Form({addOrUpdateItem, itemToEdit}) {
    const [inputValue, setInputValue] = useState('');

/*
➤ useEffect: Detectar si estamos editando
- Este efecto se ejecuta cada vez que itemToEdit cambia:
    - Si hay un ítem para editar, se copia su value en el inputValue,
      lo cual rellena automáticamente el input con ese valor.
    - Si no hay ítem, se limpia el campo ('') para que el usuario
     pueda ingresar algo nuevo.

-- Si itemToEdit tiene un valor, se establece inputValue con el valor del item a editar.
-- Si itemToEdit es null, se limpia el inputValue.
*/    
    useEffect(() => {
        if (itemToEdit) {
            setInputValue(itemToEdit.value);
        } else {
            setInputValue('');
        }
    }, [itemToEdit]);
/*
➤ Manejador del formulario :
- handleSubmit: Se ejecuta al enviar el formulario.
    - e.preventDefault(): Evita el comportamiento por defecto del formulario (recargar la página).
    - inputValue.trim(): se asegura de que no se guarde un texto vacío o con solo espacios.
    - Si inputValue no está vacío, llama a addOrUpdateItem con el valor del input.
    - Limpia el inputValue para que quede vacío después de agregar o actualizar.
*/    
const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
        addOrUpdateItem(inputValue);
        setInputValue('');
    }
};

/* Renderiza el formulario con un input y un botón
- input: campo de texto controlado (su valor viene del estado).
- onChange: actualiza inputValue cada vez que el usuario escribe.
- button: el texto del botón cambia dinámicamente:
    "Actualizar" si estamos editando un ítem.
    "Agregar" si estamos creando uno nuevo.

 El input muestra el valor actual de inputValue y se actualiza al cambiar el texto.
 El botón cambia su texto dependiendo de si estamos editando un item o agregando uno nuevo
*/

return(
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            value={inputValue} 
            onChange={(e)=> setInputValue(e.target.value)}
        />
        <button type="submit">
            {itemToEdit ? 'Actualizar':'Agregar'}
        </button>
    </form>
);
}

export default Form;

/*
El componente Form:

Es controlado (React maneja el valor del input).

Permite tanto crear como editar ítems.

Detecta automáticamente si se está en modo edición usando useEffect.

Se integra perfectamente con el componente App, que maneja la lógica central.
*/