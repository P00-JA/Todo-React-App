import './Input.css';

const Input = props=>{
   return <input type={props.type} onChange={props.onChange} onKeyDown={props.onKeyDown}  placeholder={props.placeholder} value={props.value} className='inputBox' />
}

export default Input;