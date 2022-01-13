import { collection, doc, deleteDoc, getDocs, query, orderBy } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../config/fireconfig";
import "./Read.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import Icon from "@mui/material/Icon";

toast.configure();

const Read = () => {
  const [datas, setDatas] = useState([]);

  const ref = collection(db, "contacts");
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

  return (
    <>
      <Header />
      {datas.map((data) => {
        //  async function update() {
        //   try{
        //     await updateDoc(doc(db, "contacts", data.id), {
        //       name: name,
        //       ph: ph,
        //       email: email,
        //     });
        //     toast.success(data.name + " Updated");
        //     window.location.reload(false);

        //   }catch(error) {
        //     alert(error)
        //   }
        // }
        async function Delete() {
          try {
            await deleteDoc(doc(db, "contacts", data.id));
            toast.success(data.name + " Deleted");
            setTimeout(() => {
              window.location.reload(false);
            }, 2000);
          } catch (error) {
            alert(error);
          }
        }
        return (
          <>
            <div id={data.id} className="main_data">
              <div className="datas">
                <div className="curd1">
                  <p>{data.name}</p>
                  <p> {data.ph}</p>
                  <p>{data.email}</p>
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
};

export default Read;
