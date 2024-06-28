import { createContext, useEffect, useState } from 'react'
import { storeProducts, detailProduct } from '../../data';
const ProductContext = createContext();


function ProductProvider({children}){

    const [items, setItems] = useState({
        products : [],
        detailProduct: detailProduct
    })

    useEffect(() =>{
       setProducts() 
    }, [])

    function handleDetail(){
        console.log("hello from detail")
    }

    const setProducts=() =>{
        let temProducts = [];
        storeProducts.forEach(item => {
            const singleItem ={...item};
            temProducts = [...temProducts, singleItem]
        })
        setItems(()=>{
            return {products:temProducts}
        })
    }

    function addToCart(){
        console.log("hello from detail")
    }
    
    return(
        <ProductContext.Provider value={{...items, handleDetail, addToCart}}>
            {children}
        </ProductContext.Provider>
    )
}


const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}