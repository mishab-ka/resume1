import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, serverTimestamp } from "firebase/firestore";
import React, { Component, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../config/fireconfig";
import "./Home.css";
import Icon from "@mui/material/Icon";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export default function Home() {

     const [datas, setDatas] = useState([]);
     
  const ref = collection(db, "todos");
  const [todo, setTodo] = useState("");
  const [todo2, setTodo2] = useState("");
     useEffect(() => {
       query(ref, orderBy("time", "desc"))
       const getDatas = async () => {
         try {
           const data = await getDocs(ref);
           setDatas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
         } catch (error) {
           alert(error);
         }
       };
   
       getDatas();
     }, []);
  const createTodo = async () => {
    if (todo == "") {
      toast.error("Enter Todos...");
    } else {
      try {
        await addDoc(ref, { todo: todo, time: serverTimestamp() });
        toast.success("Todo Created Success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } catch (error) {
        alert(error);
      }
    }
  };
  return (
    <>
      <div className="main">
        <h1>Todos</h1>
        <div className="inputs">
          <input
          maxlength="300"
            type="text"
            placeholder="Enter Todo"
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <button onClick={createTodo}>
            <Icon>add</Icon>
          </button>
        </div>
      </div>

      {datas.map((data) => {
        async function Delete() {
          try {
            await deleteDoc(doc(db, "todos", data.id));
            toast.success(data.todo + " Deleted");
            setTimeout(() => {
              window.location.reload(false);
            }, 1000);
          } catch (error) {
            alert(error);
          }
        }
        return (
          <>
            <div id={data.id} className="main_data">
              <div className="datas">
                <div className="curd1">
                  <p>{data.todo}</p>
                </div>
                <div className="curd2">
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                  />
                  <button onClick={Delete}><Icon>delete</Icon></button>
                  
                </div>
              </div>
            </div>
          </>
        );
      })}
   </>
  );
}
