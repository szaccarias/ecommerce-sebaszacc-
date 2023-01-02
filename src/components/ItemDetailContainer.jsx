import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { firestoreFetchOne } from "../utils/firestoreFetch";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        firestoreFetchOne(idItem)
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;