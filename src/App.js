import React,{useState} from "react";
import Data from "./components/Data"
import List from "./components/List";
function App() {
  const [people,setpeople]=useState(Data)
  return (
    <>
    <div  >
    <h2>{people.length}</h2>
    <List people={people} onclick={()=> setpeople[{}]} />
    
    </div>
    </>
    );
}

export default App;
