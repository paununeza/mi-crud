import React from 'react';
/*
Se importa React, necesario para definir componentes, aunque no se usan hooks aquí.

Declaración del componente Item
Este componente recibe 3 props:

- item: el objeto del ítem actual (contiene id, value).
- deleteItem: función para eliminar un ítem (recibida desde List, que la recibe desde App).
- editItem: función para preparar un ítem para edición.

*/
function Item({item, deleteItem, editItem}) {

/* Renderizado del ítem:
Aquí se construye visualmente cada ítem:

➤ item.value
Muestra el valor del ítem (por ejemplo: "Comprar leche").

➤ Botón "Editar"
Cuando se hace clic, ejecuta editItem(item), enviando el objeto completo al componente App,
que lo guarda en itemToEdit.

Esto hace que el formulario se llene automáticamente con ese valor (gracias al useEffect en Form),
habilitando la edición.

➤ Botón "Eliminar"
Cuando se hace clic, se llama a deleteItem(item.id), pasando solo el id del ítem.

En App, eso provoca que se filtre la lista y se elimine ese ítem del estado.
*/
    return(
        <li>
            {item.value}
            <button onClick={() => editItem(item)}>Editar</button>
            <button onClick={() => deleteItem(item.id)}>Eliminar</button>
        </li>
    );    
}

export default Item;

/*
Este componente es el más específico y funcional, ya que representa
una fila de datos con acciones disponibles: editar o eliminar.

El componente Item:
Muestra un ítem con su valor.
Tiene dos botones: Editar y Eliminar.
Usa funciones pasadas como props para comunicarse hacia arriba y modificar el estado global (App).
*/