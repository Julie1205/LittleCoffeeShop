const YourOrderPage = () => {
    const itemsInCart = JSON.parse(localStorage.getItem("order"));
    let priceArray = [];
    let totalPrice;

    if(itemsInCart){
        priceArray = itemsInCart.map((item) => Number(item.price.replace("$", "")));
        totalPrice = priceArray.reduce((total, price) => total + price);
    };
    
    return (
        <div>
            <p>Your Order</p>
            { itemsInCart 
            ?
                itemsInCart.map((item, index) => {
                    return (
                        <div key={`item${index}`}>
                            <img src={item.image} alt={item.name} />
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                        </div>
                    )
                })
            : <p>No items in cart</p>
            }
            <p>{`Total: ${itemsInCart ? totalPrice.toFixed(2) : 0}`}</p>
        </div>

    )
};

export default YourOrderPage;