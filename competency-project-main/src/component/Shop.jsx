import React, { useState, useEffect, useContext } from 'react';
import api from '../api/index';
import AnimalCard from './AnimalCard';

import { CartContext } from './App'

const Shop = (props) => {

    const { currentCart } = useContext(CartContext)
    console.log("currentCart: ", currentCart)


    // const [cart, setCart] = useState(currentCart)

    const [animals, setAnimals] = useState([])

    // loads animals from database
    useEffect(() => {
        api.getAnimals().then(animals => {
            setAnimals(animals.data)
        })
    }, [])

    const addToCart = (name, price, image) => {
        const item = [name, price, image];
        currentCart.push(item);
        console.log('updated cart: ', currentCart)
        console.log('price: ', Number(price))
    }

    return (
        <div className="d-flex flex-wrap justify-content-center">
            {animals.map((animal) => (
                <AnimalCard 
                addToCart={() => addToCart(animal.name, animal.price, animal.image)} 
                name={animal.name} 
                description={animal.description} 
                image={animal.image} 
                key={animal._id} 
                price={animal.price} 
                />
            ))}
        </div>
    )
}

export default Shop;