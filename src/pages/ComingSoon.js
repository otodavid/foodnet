import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components";

const Section = styled.section`
    height: 600px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    h1 {
        text-align: center;
    }
`;


const ComingSoon = () => {
    return ( 
        <Section>
            <h1>COMING SOON &#128512;</h1>
            <Button
                as={Link}
                to="/"
                primary="true"   
            >
                Go back
            </Button>
        </Section>
     );
}
 
export default ComingSoon;