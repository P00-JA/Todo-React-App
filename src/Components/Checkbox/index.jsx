import './Checkbox.css';

const Checkbox = props=>{
   return <input type='checkbox' onChange={props.onChange} className='check-box' id={props.id} />
}

export default Checkbox;