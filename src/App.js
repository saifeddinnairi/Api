import axios from "axios";
import"./App.css"
import { useEffect, useState } from "react";

function App() {
  const [listOfUSer, setListOfUSer] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((res) => setListOfUSer(res.data))
  }, []);  return (
    <div className="App">
      <header >
        <h2 className="h2">List of users :</h2>
        {listOfUSer.map((user,index) => (
          <>
            <div className="h5" key={index}>
              <h5>id : {user.id}</h5>
              <h5>name : {user.name}</h5>
              <h5>username : {user.username}</h5>
              <h5>email : {user.email}</h5>
              <h5>address : </h5>
              <h5>street : {user.address.street}</h5>
              <h5>suite : {user.address.suite}</h5>
              <h5>city : {user.address.city}</h5>
              <h5>zipcode : {user.address.zipcode}</h5>
              <h5>geo : </h5>
              <h5>lat : {user.address.geo.lat}</h5>
              <h5>lng : {user.address.geo.lng}</h5>
              <h5>phone : {user.phone}</h5>
              <h5>website : {user.website}</h5>
              <h5>company : </h5>
              <h5>name : {user.company.name}</h5>
              <h5>catchPhrase : {user.company.catchPhrase}</h5>
              <h5>bs : {user.company.bs}</h5>
              <hr></hr>
              <br></br>
            </div>
          </>
        ))}
      </header>
    </div>
  );
}

export default App;