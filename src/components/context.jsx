import { createContext } from 'react'

const ProductContext = createContext();


function ProductProvider({children}){

    return(
        <ProductContext.Provider value="hello from context">
            {children}
        </ProductContext.Provider>
    )
}


const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}