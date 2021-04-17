import { 
    CardContainer,
    SvgWrapper,
    CardTitle,

} from "./Card.style";

const Card = ({ data }) => {
    return ( 
        <CardContainer>
            <SvgWrapper>
                {/* svg icon */}
                <data.icon />
            </SvgWrapper>
            <div>
                <CardTitle>{data.title}</CardTitle>
                <p>{data.content}</p>
            </div>
        </CardContainer>
     );
}
 
export default Card;