import './Trash.css';

const Trash = (props) =>{
    return <div className="trash" onClick={props.onClick}><i className="fa-solid fa-trash"></i></div>
}

export default Trash;