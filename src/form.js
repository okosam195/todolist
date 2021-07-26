import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import {useState} from 'react';


const Form = () => {
    const [title, settitle] = useState("");
     const [lists,setlists] = useState([]);
 const handleremove = (id) =>{
     const newlists = lists.filter((list) =>list.id !==id);
     setlists(newlists)
 }

    const handlesubmit =(e) =>{
         e.preventDefault();
       setlists([
             ...lists,
           {
               id:lists.length,
               title:title,
           }
       ]);
       settitle("")
    };
    
    return ( 
        <div className="form container">
            <h1>Todolist</h1>
            <form onSubmit={handlesubmit}>
                <label>enter item</label>
                <input type="text" className="form-control" name="lists" placeholder="enter list" value={title} onChange={(e)=>settitle(e.target.value.trim())}/>
                <Button>add list</Button>
                <br/>
                <ul className="list-group">
                    {lists.map(list =>(
                        <li className="listers" key={list.id}>{list.title} <button className="remove" type="button" onClick={(e) => handleremove(list.id)}>x</button></li>
                    ))}
                </ul>
            </form>
        </div>
     );
}
 
export default Form;