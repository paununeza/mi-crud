import React from 'react';
import Item from './Item';

/* Declaración del componente List:

Este componente recibe tres props:
➤ items: array de objetos, cada uno con al menos un id y un value.
➤ deleteItem: función para eliminar un ítem.
➤ editItem: función para editar un ítem.

Estos serán reutilizados y pasados al componente Item.

*/

function List({ items, deleteItem, editItem}){
// Renderiza una lista desordenada (ul) con cada item como un elemento de lista (li).
// Cada item se representa con el componente Item, pasando las props necesarias.
/*
Se usa .map() para recorrer el array items.

Por cada item, se renderiza un componente <Item />.

Se pasa:

    key={item.id}: requerido por React para optimizar el renderizado de listas.

    item: objeto completo del ítem (contiene su valor y su id).

    deleteItem: función para eliminar el ítem (la misma que viene de App).

    editItem: función para iniciar la edición de un ítem.
*/
    return(
        <ul>
            {items.map((item)=>(
                <Item 
                    key={item.id} 
                    item={item} 
                    deleteItem={deleteItem} 
                    editItem={editItem}
                />
        ))}
        </ul>
    );
}

export default List;

/* 
Este componente List es responsable de mostrar la lista de elementos (items)
en la aplicación. Sirve como intermediario entre el componente principal (App)
y cada ítem individual (Item).

El componente List:

Recibe la lista de ítems y las funciones para editar/eliminar.

Itera sobre los ítems y crea un <Item /> por cada uno.

Delega la visualización y funcionalidad específica de cada ítem al componente Item.
*/