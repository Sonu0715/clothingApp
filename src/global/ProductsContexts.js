import React,{createContext,useState} from 'react';
import pic1 from "../assets/pic1.jpg"
import pic2 from "../assets/pic2.jpg"
import pic3 from "../assets/pic3.jpg"
import pic4 from "../assets/pic4.jpg"
import pic5 from "../assets/pic5.jpg"
import pic6 from "../assets/pic6.jpg"
import pic7 from "../assets/pic7.jpg"
import pic8 from "../assets/pic8.jpg"
import pic9 from "../assets/pic9.jpg"

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
    const [products]= useState([
        {id: 1, name: "Shoes", price: 500, image: pic1, status: "new"},
        {id: 2, name: "Burka", price: 600, image: pic2, status: "hot"},
        {id: 3, name: "Hoodie", price: 700, image: pic3, status: "new"},
        {id: 4, name: "Ear Ring", price: 800, image: pic4, status: "hot"},
        {id: 5, name: "Mobile", price: 900, image: pic5, status: "hot"},
        {id: 6, name: "Mobile", price: 500, image: pic6, status: "new"},
        {id: 7, name: "Head Phone", price: 700, image: pic7, status: "new"},
        {id: 8, name: "Jewellry", price: 400, image: pic8, status: "hot"},
        {id: 9, name: "Sleeper", price: 900, image: pic9, status: "new"},

    ]);
    return (
        <div>
            <ProductsContext.Provider value={{products:[...products]}}>
                {props.children}
            </ProductsContext.Provider>
        </div>
    )
}

export default ProductsContextProvider
