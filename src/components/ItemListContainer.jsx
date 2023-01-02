import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import ItemList from "./ItemList";
import { firestoreFetch } from '../utils/firestoreFetch';


const ItemListContainer = () => {
  const [products, setProducts] = useState ([]); //hook
  const { idCategory } = useParams();

//componentDidUpdate
useEffect(() => {
    firestoreFetch(idCategory)
        .then(result => setProducts(result))
        .catch(err => console.log(err));
}, [idCategory]);

//componentWillUnmount
useEffect(() => {
    return (() => {
        setProducts([]);
    })
}, []);

    return (
        <ItemList items={products} />
    )
}

export default ItemListContainer;