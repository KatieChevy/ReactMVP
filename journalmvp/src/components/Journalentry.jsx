import React, {useEffect, useState} from 'react';
import '../index.css' 

function Journalentry() {
  const [backendData, setBackendData] = useState([{}]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {;
    fetch('http://localhost:5000/api')
    .then(res => res.json())
    .then(
      data => {
          // console.log(data)
        setBackendData(data)
      }
    )},[]);
     return (backendData.map(data => {
      
       return (
        <div className='card'>
    <div id='contextBox' key={data.id} ><h2>{data.journalentry_name}:</h2><p> {data.journalentrydesc}</p></div>
  
  <img id='picture' src='https://source.unsplash.com/WLxQvbMyfas' alt="card-image" width='460' height='345' />

</div>
)})
     )


   
}
        

   
export default Journalentry;