import styled from "styled-components";
import loginBackground from '../assets/images/login-background.jpg';
import ctaLogoOne from '../assets/images/cta-logo-one.svg';
import ctaLogoTwo from '../assets/images/cta-logo-two.png';


function Login(props) {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src={ctaLogoOne} alt="logo"/>
                    <SignUp>LOG IN TO WATCH </SignUp>
                    <Description>
                        U.S. residents, 18+ only. Offer valid for eligible subscribers only. Select Hulu content
                        available via Disney+ with valid Hulu and Disney+ subscriptions; additional content only
                        available via Hulu app. © 2024 Disney and its related entities. Additional terms apply.
                        All of these and more now streaming on Disney+, Hulu, and ESPN+ with the Disney Bundle.
                    </Description>
                    <CTALogoTwo src={ctaLogoTwo} alt="logo"/>


                </CTA>
                <BgImage/>
            </Content>
        </Container>
    );
}


const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${loginBackground});
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;

const CTA = styled.div`
    max-width: 650px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto 2vw;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
    width: 100%;
`;

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`;


const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 90%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 25px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #0483ee;
    }
`;

const Description = styled.p`
    color: silver;
    font-family: Avenir, sans-serif;
    letter-spacing: .1px;
    font-size: 14px;
    line-height: 1.5;
    margin: 0 0 24px;
    max-width: 580px;
`;

const CTALogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`;


export default Login;
