import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavigationBar = () => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <HomeNav to="/">Home</HomeNav>
            <MenuNav to="/menu">Menu</MenuNav>
            <YourOrderNav to="/order">Your Order</YourOrderNav>
            <button onClick={() => navigate("/login")}>LogIn</button>
        </Wrapper>
    )
};

export default NavigationBar;

const Wrapper = styled.nav`
    display: flex;
    justify-content: space-evenly;
    padding: 15px 0;
    background-color: blanchedalmond;
`;

const HomeNav = styled(NavLink)`
    color: black;
    text-decoration: none;
`;

const MenuNav = styled(NavLink)`
    color: black;
    text-decoration: none;

    &.active {
        color: red;
    };
`;

const YourOrderNav = styled(MenuNav)`
    color: black;
    text-decoration: none;

    &.active {
        color: red;
    };
`;