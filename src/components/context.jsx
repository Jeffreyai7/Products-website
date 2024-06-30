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


    const getDetail = (id) =>{
        const product = items.products.find((item)=> item.id === id )
        return product
    } 

    function handleDetail(id){
        const product = getDetail(id)
        setItems((prev)=>{
            return{
                ...prev, detailProduct: product
            }
        })
    }

    const setProducts=() =>{
        let temProducts = [];
        storeProducts.forEach(item => {
            const singleItem ={...item};
            temProducts = [...temProducts, singleItem]
        })
        setItems(()=>{
            return {
                products:temProducts,
                detailProduct: detailProduct
             }
        })
    }

    function addToCart(id){
        let tempPtoducts
    }
    
    return(
        <ProductContext.Provider value={{...items, handleDetail, addToCart}}>
            {children}
        </ProductContext.Provider>
    )
}


const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}