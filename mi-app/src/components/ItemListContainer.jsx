import { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const categoryId = useParams().categoryId
    console.log(categoryId)

    useEffect(() => {
        pedirDatos()
            .then((res) => {
              if (categoryId){
                setProductos(res.filter((prod) => prod.categoryId === categoryId))
              }else{
                setProductos(res);
              }
                
            })
    }, [categoryId])
    
    
  return (
    <div>
        <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer