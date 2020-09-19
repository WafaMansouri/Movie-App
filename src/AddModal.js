import React, { useState } from 'react';
function AddModal({addMovie, handleFunction}) {
    const [newMovie,setNewMovie]=useState({name:"", date:"", image:"", rate:0, link:""});
    const inputFunction=(e)=> {
        setNewMovie({...newMovie, [e.target.name]:e.target.value})
    }
    return (
        <div className="AddModal">
        <form>
            <div>
            <label>Movie Name: &nbsp;</label>
            <input type="text" name="name" placeholder="Write the movie name" required onChange={inputFunction} 
            onChange={inputFunction}/>
            </div>
            <div>
            <label>Release Date: &nbsp;</label>
            <input type="number" name="date" placeholder="Put the year of production" required onChange={inputFunction}/>
            </div>
            <div>
            <label>&nbsp; Image URL: &nbsp;</label>
            <input type="text" name="image" placeholder="Paste the URL of a web image" required onChange={inputFunction}/>
            </div>
            <div>
            <label>&nbsp; Movie Rate: &nbsp;</label>
            <input type="number" name="rate" placeholder="Enter the movie's rate" required onChange={inputFunction}/>
            </div>
            <div>
            <label>&nbsp; Movie link: &nbsp;</label>
            <input type="text" name="link" placeholder="Paste the movie's link" required onChange={inputFunction}/>
            </div>
            <button type="submit" style={{paddingBottom:40}}
            onClick={e=>{e.preventDefault();addMovie(newMovie); handleFunction()}}>ADD</button>
        </form>
        </div>
    )
}
export default AddModal;