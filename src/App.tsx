import React, { useState } from 'react';
import './App.css';

function App() {
  const [person, setPerson] = useState();
  const [GoogleAuth, setGoogleAuth] = useState();
  const [vkAuth, setVkAuth] = useState();
console.log(person);
console.log(GoogleAuth);
console.log(vkAuth);

  const getPerson = () => {
    fetch(`http://localhost:3003/info/person/${1}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setPerson(json))
      .catch((err) => console.log(err));
  };
  const getGoogle = () => {
    fetch(`http://localhost:3006/auth/google`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setGoogleAuth(json))
      .catch((err) => console.log(err));
  };
  const getVk = () => {
    fetch(`http://localhost:3006/auth/vk`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setVkAuth(json))
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <button onClick={() => getGoogle()}>Google</button>
      <button onClick={() => getVk()}>VK</button>
      <button onClick={() => getPerson()}>Person</button>
      <div>
        {person
          ? "Запрос person в логах"
          : "Person нет ответа localhost:3003/info/person/${1}"}
      </div>
      <div>
        {GoogleAuth
          ? "Запрос GoogleAuth в логах"
          : "Google нет ответа localhost:3006/auth/google"}
      </div>
      <div>
        {vkAuth
          ? "Запрос vkAuth в логах"
          : "Vk нет ответа localhost:3006/auth/vk"}
      </div>
    </div>
  );
}

export default App;
