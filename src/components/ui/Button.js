import styled from "styled-components";

const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    margin: 0.4rem;
    margin-top: 20px;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    letter-spacing: 2px;
    cursor: pointer;

    background: ${function(props){
        if (props.variant === "primary") {
            return " radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,0.6310904872389791) 100%);";
        } 

        else if (props.variant === "secondary") {
            return "linear-gradient(90deg, rgba(0,174,255,1) 0%, rgba(224,48,48,1) 63%, rgba(255,48,48,1) 100%)";
        } 

        else {
            return "#4361ee";
        }
    }}
`


export default Button;