import React, {useState, useEffect} from 'react';
import CreateVacation from "./Components/CreateVacation";
import RenderVacations from "./Components/Vacations";
import axios from 'axios'
import './App.css';

//const userId = "211613b0-71ce-49dd-acc0-8d09438437f5"
//const usersAPI = 'https://acme-users-api-rev.herokuapp.com/api/users';
//const vacationsAPI = "https://acme-users-api-rev.herokuapp.com/api/users/211613b0-71ce-49dd-acc0-8d09438437f5/vacations" //hard coded userId for testing
const API = 'https://acme-users-api-rev.herokuapp.com/api'


export default function App(){

  const [user, setUser] = useState({});
  const [vacations, setVacations] = useState([]);

  const fetchUser = async () => {
    const storage = window.localStorage;
    const userId = storage.getItem('userId');
    if (userId) {
      try {
        return (await axios.get(`${API}/users/detail/${userId}`)).data;
      } catch (ex) {
        storage.removeItem('userId');
        return fetchUser();
      }
    }
    const user = (await axios.get(`${API}/users/random`)).data;
    storage.setItem('userId', user.id);
    return user;
  };

  useEffect(() => {
    fetchUser().then(data => {//console.log(data)
    setUser(data)});
  });

  useEffect(() => {
    axios.get(
        `${API}/users/${user.id}/vacations/`
      )
      .then(response => {console.log(response.data)
        setVacations(response.data)});
  }, [user.id]);

  return (
    <div className="App">
      <h1>Acme Vacation Planner for: {user.fullName} ({vacations.length})</h1>
      <CreateVacation
      user={user}
      vacations={vacations}
      setVacations={setVacations}
      />
      <RenderVacations
      vacations ={vacations}
      />

    </div>
  );
}
