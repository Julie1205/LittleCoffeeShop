import { useState, useEffect } from "react";

import styled from "styled-components";

const YourOrderPage = () => {
    const [itemsInCart, setCart] = useState(null);
    let priceArray = [];
    let totalPrice;

    useEffect(() => {
        if(localStorage.getItem("order")){
            setCart(JSON.parse(localStorage.getItem("order")));
        }
    }, []);


    if(itemsInCart && itemsInCart.length > 0){
        priceArray = itemsInCart.map((item) => Number(item.price.replace("$", "")));
        totalPrice = priceArray.reduce((total, price) => total + price);
    };
    
    const removeItem = (index) => {
        const newCart = [...itemsInCart];
        newCart.splice(index, 1);
        localStorage.setItem("order", JSON.stringify(newCart));
        setCart(newCart);
    }

    return (
        <Wrapper>
            <Title>Your Order</Title>
            { itemsInCart && itemsInCart.length > 0
            ?
                itemsInCart.map((item, index) => {
                    return (
                        <OrderSection key={`item${index}`}>
                            <Image src={item.image} alt={item.name} />
                            <div>
                                <ItemName>{item.name}</ItemName>
                                <ItemPrice>{item.price}</ItemPrice>
                                <button onClick={() => removeItem(index)}>Remove</button>
                            </div>
                        </OrderSection>
                    )
                })
            : <p>No items in cart</p>
            }
            <Total>{`Total: ${itemsInCart && itemsInCart.length > 0 ? totalPrice.toFixed(2) : 0}$`}</Total>
        </Wrapper>

    )
};

export default YourOrderPage;

const Wrapper = styled.div`
    margin: 20px;
`;

const Title = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 15px;
`;

const Image = styled.img`
    max-width: 75%;
    max-height: 75%;
`;

const OrderSection = styled.div`
    display: grid;
    grid-template-columns: 25% 25%;
    grid-template-rows: 350px;
    justify-content: center;
    align-items: center;
`;

const ItemName = styled.p`
    margin-bottom: 10px;
`;

const ItemPrice = styled.p`
    margin-bottom: 20px;
`;

const Total = styled.p`
    margin-top: 15px;
    font-weight: bold;
    font-size: 1.2rem;
`;