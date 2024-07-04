import { createContext, useCallback, useEffect, useState } from 'react'
import { storeProducts, detailProduct } from '../../data';
const ProductContext = createContext();


function ProductProvider({children}){

    const [items, setItems] = useState({
        products : [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen:true,
        modalProduct:detailProduct
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
    function addToCart(id){
        let temProducts = [...items.products]
        const index = temProducts.indexOf(getDetail(id))
        const product = temProducts[index]
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        setItems((prev) =>{
            return {
               ...prev, products: temProducts, cart: [...items.cart, product]

            }
        })

    }
    
    const openModal = (id)=>{

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
                detailProduct: detailProduct,
                cart : []
             }
        })

    
    }

    return(
        <ProductContext.Provider value={{...items, handleDetail, addToCart}}>
            {children}
        </ProductContext.Provider>
    )
}


const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}