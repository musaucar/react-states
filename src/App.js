import { useState } from "react";


function App() {
  const [name,setName] = useState("musa");
  const [age,setAge] = useState(22);
  const [friends, setFriends] = useState(["Muhammet","Hanifi"]);
  const [address,setAddress] = useState({title:"İstanbul",zip: 34771});


  return (
    <div className="App">
     <h1>Merhaba {name}</h1>
     <h2>{age}</h2>
     <button className="btn btn-secondary" onClick={()=> setName("ahmet")}>change name</button>
     <button className="btn btn-secondary" onClick={()=> setAge(23)}>change age</button>

     <hr />
     <br />

     <h2>Friends</h2>
     {
      friends.map((friend,key) =>(
        <div key={key}>{friend}</div>
      ))
     }

      <button onClick={()=> setFriends([...friends, "Ersin"])}>Add New Friend</button>


      <hr />
      <br />

      <h2>Address</h2>
      <div>{address.title} {address.zip}</div>
      <br />
     <button onClick={()=> setAddress({ ...address, title:"Ankara" })}>Change Address</button>   {/* { title:"Ankara", zip:44444 } */} 
    </div>
  );
}

export default App;
