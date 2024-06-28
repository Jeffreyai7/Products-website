import React from "react";
import { ProductConsumer } from "./context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default function Details() {


    return (
        <ProductConsumer>
          {(value)=>{
                console.log(value)
          }}  
        </ProductConsumer>
        
    )
}