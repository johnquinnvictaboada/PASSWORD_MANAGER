import React from "react";
import{ useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Walletbutton from "./components/Walletbutton";
import * as Web3 from '@solana/web3.js';

function App() {
  const [wallet, setwallet] = useState (null);
  const [sol, setSol] = useState(0);
  const [count, setCount] = useState(0);

  const connectWallet = async () => {
    try{
    const {solana} = window ;
    const response = await solana.connect();
    setwallet(response.publicKey.toString()); 
  }catch{
    alert("MAMA MIA WALETTA IS NO NO ( no phantom wallet uwu )");
  }
  
  
}
  return (
    <>

      <div  className="App">
        <div className="w-full">
          {wallet && <Navbar/>}
        </div>
        
        <div className="w-full h-full">
          {!wallet && <Walletbutton onClick={connectWallet} />} 
        </div>
      </div>
      
    </>
  );
}

export default App;
