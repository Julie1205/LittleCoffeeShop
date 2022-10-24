import styled from "styled-components";

import { MENU_DRINKS_ITEMS } from "./menu_constants";


const Menu = () => {
    const items = [];

    const addToCart = (itemDetails) => {
        items.push(itemDetails);
    
        localStorage.setItem("order", JSON.stringify(items));
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