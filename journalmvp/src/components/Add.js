import React, { useState } from 'react';

// setting useHooks 
function Add(){
    const [jentry, setjentry] = useState("");
    const [jdesc, setjdesc] = useState("");

    // fetch function to my add api
    let jSubmit = async e => {
        e.preventDefault();
        try{
        let res = await fetch('http://localhost:5000/add', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            jentry: jentry,
            jdesc: jdesc,
         }),

        });
        
        if (res.status === 200) {
            setjentry("");
            setjdesc("");
        }
    } 
    // to use 'TRY' need a catch call
    catch (err) {
        console.log(err);
      }
    };

 //fetch funtion to DELETE    
//     fetch('http://localhost:5000/delete', {
//   method: 'DELETE',
// })
// .then(res => res.json()) // or res.json()
// .then(res => console.log(res))  



  
    
// returning my buttons functionallity and it's input 
    return (
         <div>
            <ul><font size='6'> NEW TRAVEL ENTRY ✈ </font>
                <li><input name='Entry' type={"text"} placeholder="Destination" onChange={(e) => setjentry(e.target.value)}></input></li>
                 <input name='Description' type={"text"} placeholder="Description" onChange={(e) => setjdesc(e.target.value)}></input>
                <li><button class='button1' type={"submit"} onClick={jSubmit}> <font size='5'>Add Entry</font></button>
                    <button type={"submit"}><font size='5'> 🗑 </font> </button></li>
            </ul>
        </div>
    )
}
        

export default Add;