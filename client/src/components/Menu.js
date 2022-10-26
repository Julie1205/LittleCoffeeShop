import styled from "styled-components";
import { useState, useEffect } from "react";

import { MENU_DRINKS_ITEMS } from "./menu_constants";

const INITIAL_STATE = [];

const Menu = () => {
    const [cart, setCart] = useState(INITIAL_STATE);

    useEffect(() => {
        if(localStorage.getItem("order")){
            setCart(JSON.parse(localStorage.getItem("order")));
        }
    }, [])

    const addToCart = (itemDetails) => {
        if(localStorage.getItem("order")) {
            const newCart = [...cart, itemDetails];
            localStorage.setItem("order", JSON.stringify(newCart));
            setCart(JSON.parse(localStorage.getItem("order")));
        }
        else {
            localStorage.setItem("order", JSON.stringify([itemDetails]));
            setCart(JSON.parse(localStorage.getItem("order")));
        }
    
    };

    return (
        <Wrapper>
            {MENU_DRINKS_ITEMS.map((item) => {
                return (
                    <CoffeeTile key={item.name}>
                        <CoffeeImg src={item.image} alt={item.name}/>
                        <CoffeeDetails>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <button onClick={() => addToCart(item)}>Add to cart</button>
                        </CoffeeDetails>
                    </CoffeeTile>
                )
            })}
        </Wrapper>
    )
};

export default Menu;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    gap: 10px;
    margin-top: 50px;
`;

const CoffeeImg = styled.img`
    height: 400px;
    width: 400px;
`;

const CoffeeTile = styled.div`
    position: relative;

`;

const CoffeeDetails = styled.div`
    position: absolute;
    top: 250px;
    margin-left: 20px;
`;