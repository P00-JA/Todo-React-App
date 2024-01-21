
import './Date.css';

const Date = props=>{
   return <input type='Date' onChange={props.onChange} className={props.className?props.className:'datePicker'} placeholder='Due date'/>
}

export default Date;