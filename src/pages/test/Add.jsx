import { addDoc, collection, docs, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import "./read"
import "./Add.css";
import { db } from "../config/fireconfig";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


const Add = () => {
  const [name, setName] = useState("");
  const [ph, setPh] = useState("");
  const [email, setEmail] = useState("");
  const ref = collection(db, "contacts");
  const Navigate = useNavigate()

 
  const createTodo = async () => {
    
    

    if (name == "" || ph == "" || email == ""){
      toast.error("fill the form first")
    }else {
      try{
        await addDoc(ref, {name: name, ph: "+91 " + ph, time: serverTimestamp(), email: email,  })
        toast.success("Contact Created Success");
        Navigate('/')
      }catch (error){
        alert(error)
      }
    }
    

  };

  return (
    <>
      <div className="main">
        <h1>Create Contact</h1>
        <div className="inputs">
          <input
            type="text"
            placeholder="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            placeholder="Email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            placeholder="phone number"
            type="number"
            onChange={(e) => {
              setPh(e.target.value);
            }}
          />
          
        </div>
        <button onClick={createTodo}>create</button>
        <button><a href="/">Read</a></button>
      </div>
    </>
  );
};

export default Add;
