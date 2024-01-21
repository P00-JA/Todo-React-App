import './Button.css';

const Button = (props) =>{
    return <button text={props.text} onClick={props.onClick} className='bttn' >{
        props.text?props.text:props.children
    }</button>
}

export default Button;