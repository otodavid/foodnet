import { Button } from "../Button/style";
import * as S from "./style";

const Newsletter = ({ id }) => {
    return ( 
        <S.Newsletter id={id}>
            <S.NewsletterIntro>
                <h3>Get Notified</h3>
                <p>
                    Lorem ipsum dolor sit ametconsectetur adipisicing elit.Cumque harum nihil sunt quasiveritatis nemo necessitatibusperferendis animi dicta, ratio
                </p>
            </S.NewsletterIntro>
            
            <S.SubscribeForm>
                <S.TextField placeholder="Email Address" />
                <Button primary>Subscribe</Button>
            </S.SubscribeForm>
        </S.Newsletter>
     );
}
 
export default Newsletter;