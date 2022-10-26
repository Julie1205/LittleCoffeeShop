import styled from "styled-components";

const HomePage = () => {
    return (
        <Wrapper>
            <SloganSection>
                <p>Little CoffeeShop</p>
                <p>Where everything is made fresh wtih local ingredients</p>
            </SloganSection>
            <PromotionSection>
                <div>
                    <p>Our popular Drinks</p>
                    <div>

                    </div>
                </div>
                <div>
                    <p>Fall Season is here!</p>
                    <p>Try our new baked goods</p>
                </div>
            </PromotionSection>
            <div>
                <p>About us and our Mission</p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.
                </p>
            </div>
        </Wrapper>
    )
};

export default HomePage;

const Wrapper = styled.div`
    margin: 20px;
`;

const SloganSection = styled.div`
    margin-bottom: 20px;
`;

const PromotionSection = styled.div`
    margin-bottom: 20px;
`;

