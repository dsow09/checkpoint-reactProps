import React from 'react';
import './App.css';
import Profile from './profile/Profile';

function App() {

  const handleName = fullName => alert(fullName);
  const styleApp = { backgroundColor: "#ccc", color: "blue", textAlign: "center", fontSize: "30px", margin: "0 auto", width: "500px"}

  return (
    <div style={styleApp}>
      <Profile  fullName="Djibril SOW" 
                bio="je suis impliqué de la conception à la finalisation du produit. " 
                profession="Developer FullStack JS"
                handleName={handleName}>logo.svg </Profile>

    </div>
  )
}

export default App;
