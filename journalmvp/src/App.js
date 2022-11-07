
import './App.css';
import Journalentry from './components/Journalentry';
import Add from './components/Add';

function EntryHeader() {
  return <h2><font size='7'>☼ My travel Journal ☾ </font></h2>
}

function EntryBody(){
  return (
    <div>
      
    </div>
  )
}

//functon class to return my components 
function App() {
  return (
    <div className="App">
      <h1>Journal Entry App  ---✈</h1>
< EntryHeader />
< EntryBody />    
< Journalentry />
< Add />

    </div>
  );
}

export default App;
