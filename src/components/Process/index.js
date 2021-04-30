import { CardList, Heading2, ProcessSection } from "./style";
import { data } from './data';
import Card from "../Card";

const Process = () => {
    return ( 
        <ProcessSection>
            <Heading2>how it works</Heading2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam, sed id eum assumenda rerum iure aut dolore aliquid</p>
            
            <CardList>
                {data.map(item => (
                    <Card data={item} key={item.id} />
                ))}
            </CardList>
        </ProcessSection>
     );
}
 
export default Process;