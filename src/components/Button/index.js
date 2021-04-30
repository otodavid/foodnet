import { Button as Btn } from './style';

const Button = ({ children }) => {
    return ( 
        <Btn>
            {children}
        </Btn>
     );
}
 
export default Button;