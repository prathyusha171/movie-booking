import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import VerifiedIcon from '@mui/icons-material/Verified';
import { valid, deletePost, updatePost } from './PostSlice';
import '../App.css'


 const Bookings = () => {

  const dispatch=useDispatch();
  const posts=useSelector((state)=>state.posts);
  const[formData,setFormData]=useState({
      username:' ',
      email:'',
      name:'',
      language:'',
      seats:'',
      datetime:''
  })
  const handelInputChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });
  };
const handelSubmit=()=>{
  dispatch(valid(formData));
  setFormData({
    username:' ',
    email:'',
    name:'',
    language:'',
    seats:'',
    datetime:''

  });
};

const handleUpdateDetails=(id)=>{
  const updatedData={
    ...formData,
    id,
  };
  dispatch(updatePost(updatedData));
  setFormData({
    username:' ',
    email:'',
    name:'',
    language:'',
    seats:'',
    datetime:''
  })
};
const handleDeleteDetails=(id)=>{
  dispatch(deletePost({id}));
};

  return (
    
    <div className='form'>
    
    <legend style={{color:'black', fontFamily:'moz-initial',fontSize:'40px',}}>SEATS BOOKINGS</legend>
    <div style={{border:'5px solid white', margin:'50px', padding:'10px'}}>
    
      <label className='label'>USERNAME </label>
      <input  className='input' type='text' name='username' value={formData.username} onChange={handelInputChange} />
      <br/>
        <label className='label'>EMAIL </label>
        <input  className='input' type="text" id="email" name="email"
        placeholder=" example@gmail.com"
        value={formData.email}
        onChange={handelInputChange}/>
        <br/>
        <label className='label'>MOVIE NAME </label>
      <input    className='input'  type='text' placeholder='Enter Movie name' name='name' value={formData.name} onChange={handelInputChange}/>
        <br/>
        <label  className='label'>LANGUAGE </label>
            <select id='language' name="language" value={formData.language} onChange={handelInputChange} style={{width:'100px', height:'40px', borderRadius:'20px',opacity:'0.5'}}>
                <option value='English'>English</option>
                <option value='Hindi'>Hindi</option>
                <option value='Telugu'>Telugu</option>
                <option value='kannada'>Kannada</option>
                <option value='Malayalam' >Malayalam</option>
                <option  value='Tamil'>Tamil</option>
                <option value='Thai' >Thai</option>
                <option  value='Italian'>Italian</option>
                <option value='Russian'>Russian</option>
                <option value='Turkish'>Turkish</option>
                <option value='Spanish'>Spanish</option>
            </select>
            <label  className='label'>SEATS </label>
            <select id="seats" name="seats" value={formData.seats} onChange={handelInputChange} style={{width:'100px',height:'40px', borderRadius:'20px',opacity:'0.5'}}>
                <option value="A">A1</option>
                <option value="B">B1</option>
                <option value="C">C1</option>
                <option value="D">D1</option>
                <option value="E">E1</option>
                <option value="F">F1</option>
                <option value="G">G1</option>
                <option value="H">H1</option>
                <option value="I">I1</option>
                <option value="J">J1</option>
            </select>

            <label className='label'> SELECT YOUR DATE AND TIME:</label>
        <input    className='input'  type="datetime-local" name='datetime' value={formData.datetime} onChange={handelInputChange}/>
<br/>
        <button  className='submit' onClick={handelSubmit}>submit</button>

      </div>
      <div className='postview'>
           <VerifiedIcon sx={{color:'green',fontSize:60}}/>
            <h2>successfull booked</h2>
            <ul className='list-view'>
                {posts.map((book)=>(
                    <li key={book.id} className='listdisplay'>
                        <p><strong>NAME:</strong>{book.username}</p>
                        <p><strong>EMAIL:</strong>{book.email}</p>
                        <p><strong>MovieName:</strong>{book.name}</p>
                        <p><strong>language:</strong>{book.language}</p>
                        <p><strong>seats:</strong>{book.seats}</p>
                       <p><strong>show Time&Date:</strong>{book.datetime}</p>
                        <button onClick={()=>handleUpdateDetails(book.id)} className='btn'>Update</button>
                        <button onClick={()=>handleDeleteDetails(book.id)} className='btn'>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    </div>

  )
}

export default Bookings
