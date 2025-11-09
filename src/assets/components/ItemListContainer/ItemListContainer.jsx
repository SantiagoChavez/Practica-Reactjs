import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ({ titulo, productos }) => {
    //estado

    //llamada a la api

    return (
    <section>
        <h1>{titulo}</h1>
    <ItemList lista={productos}/>
        
    </section>
    );
};