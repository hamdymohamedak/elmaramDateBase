"use client";
import React, { useEffect, useState, useCallback } from "react";
import styles from "./page.module.css";
import Notiflix from "notiflix";
export default function Home() {
  const [data, setData] = useState([]);
  const [usersCount, setUsersCount] = useState("50");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [isOnline, setIsOnline] = useState("Online");
  const [userCount, setUserCount] = useState(null);
  const [userCountStyle, setUserCountStyle] = useState("none");
  const [boolenEvent, setBoolenEvent] = useState(false);
  const api = `https://pharmacy-api-5i0h.onrender.com/api/v1/users?limit=${usersCount}&keyword=${searchValue}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api, { method: "GET" });
        const json = await response.json();
        setData(Array.isArray(json.data) ? json.data : []);
        setUserCount(json.count);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData();
  }, [api]);

  useEffect(() => {
    const handleOnlineStatus = () => {
      setIsOnline(navigator.onLine ? "Online" : "Offline");
    };

    handleOnlineStatus();
    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, []);

  useEffect(() => {
    // This useEffect runs only on the client side
    setIsOnline("Online");
  }, []); // Empty dependency array means it only runs once after the initial render on the client side

  const handleDelete = useCallback(
    async (userId) => {
      try {
        const response = await fetch(
          `https://pharmacy-api-5i0h.onrender.com/api/v1/users/${userId}?sort=createdAt&keyword=${searchValue}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to delete user");
        }

        setData((prevData) => prevData.filter((user) => user._id !== userId));
        Notiflix.Notify.success("Client, Deleted", {
          position: "left-bottom",
        });
      } catch (error) {
        console.error("Error deleting user:", error.message);
      }
    },
    [searchValue]
  );

  const handleName = (event) => setUserName(event.target.value);
  const handlePhoneNumber = (event) => setPhoneNumber(event.target.value);
  const handleAddress = (event) => setUserAddress(event.target.value);

  const handleSearch = (event) => setSearchValue(event.target.value);

  const handleAddNewUser = async () => {
    try {
      const response = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          phone: phoneNumber,
          address: userAddress,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add a new user");
      }

      const newUser = await response.json();
      setData((prevData) => [...prevData, newUser]);
      Notiflix.Notify.success("add successfully", {
        position: "left-bottom",
      });
      setUserName("");
      setPhoneNumber("");
      setUserAddress("");
    } catch (error) {
      console.error("Error adding a new user:", error.message);
      Notiflix.Notify.warning("Failed to add a new client", {
        position: "left-bottom",
      });
    }
  };

  const handleUsersCount = (event) => {
    const usersCountNumber = Number(event.target.value);
    setUsersCount(usersCountNumber);
    if (event < 0) {
      setUsersCount(1);
    }
  };

  useEffect(() => {
    Notiflix.Notify.info("Hello Doctors");
  }, []);

  let userCountStyleing = {
    display: userCountStyle,
  };
  let handleCountStyleEvent = () => {
    setBoolenEvent(!boolenEvent);
    if (boolenEvent) {
      setUserCountStyle("block");
    } else {
      setUserCountStyle("none");
    }
  };

  let [numberBarStyle,setNumberBarStyle] = useState("flex");
  let [boolenStyleForNumberBar,setBoolenStyleForNumberBar] = useState(false);


  let numbersBarStyle = {
    display:numberBarStyle,
  }
  let HideAndShowNumberBar = ()=>{
    setBoolenStyleForNumberBar(!boolenStyleForNumberBar);
    if(boolenStyleForNumberBar){
      setNumberBarStyle("none");
    }else{
      setNumberBarStyle("flex");
    }
  }
  let [valueBarNumbers,setValueBarNumbers] = useState("")

  let TakeValueFromInput = (UserPhone)=>{
    setValueBarNumbers(UserPhone.target.value);
  }
  let TakeValueFromInputAndGoToWhatsApp = ()=>{

    window.open(`https://wa.me/+2${valueBarNumbers}`)
    setValueBarNumbers("")
  }
  return (
    <main className={styles.main}>
      <div className={styles.h1}>El-Maram DateBase</div>
      <div onClick={handleCountStyleEvent} className={styles.isonline}>
        {isOnline}
      </div>
      <div style={userCountStyleing}> Count:: {userCount} </div>

      <div style={numbersBarStyle} className={styles.senderBtn}>
        <input onChange={TakeValueFromInput} className={styles.senderBtnInput} placeholder="Enter Phone Number" value={valueBarNumbers} type="number"/>
        <button onClick={TakeValueFromInputAndGoToWhatsApp} className={styles.senderBtnChild}>Send</button>
      </div>
      <div className={styles.formParent}>
        <label>الاسم</label>
        <input
          onChange={handleName}
          dir="rtl"
          className={styles.inputs}
          placeholder="الاسم..."
          value={userName}
        />
        <label>الرقم </label>

        <input
          onChange={handlePhoneNumber}
          dir="rtl"
          className={styles.inputs}
          placeholder="الرقم..."
          value={phoneNumber}
        />
        <label>العنوان</label>
        <input
          onChange={handleAddress}
          dir="rtl"
          className={styles.inputs}
          placeholder="العنوان..."
          value={userAddress}
        />
        <button onClick={handleAddNewUser} className={styles.addBtn}>
          اضافه
        </button>
      </div>
      <input
        type="number"
        className={styles.userCount}
        onChange={handleUsersCount}
        placeholder="50"
        value={usersCount}
      />
      <input
        onChange={handleSearch}
        dir="rtl"
        placeholder="بحث..."
        className={styles.search}
      />
      <button className={styles.hideNumberBarBtn} onClick={HideAndShowNumberBar}>Hide Numbers Bar</button>
      <div className={styles.clients}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>الاسم</th>
              <th>العنوان</th>
              <th>الرقم</th>
              <th>ناريخ انضمام العميل</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="5">loading...</td>
              </tr>
            ) : (
              data.map((user) => (
                <tr key={user._id} className={styles.tr}>
                  <td className={styles.td}>{user.name}</td>
                  <td className={styles.td}>{user.address}</td>
                  <td className={styles.td}>{user.phone}</td>
                  <td dir="rtl" className={styles.td}>
                    {user.createdAt}
                  </td>
                  <td>
                    <div> {user.count} </div>
                    <button
                      className={styles.delBtn}
                      onClick={() => handleDelete(user._id)}
                    >
                      delete
                    </button>
                    <button
                      onClick={() => {
                        let phoneNumber = user.phone;
                        if (
                          user.phone2 &&
                          user.phone2.length > phoneNumber.length
                        ) {
                          phoneNumber = user.phone2;
                        }
                        if (phoneNumber.startsWith("0")) {
                          phoneNumber = "+20" + phoneNumber.slice(1);
                        }
                        const message = `السلام عليكم ورحمه الله وبركاته
                        صيدليه المرام مع حضرتك ودي بيانات حضرتك في قاعده البيانات الجديده
                        هل حضرتك حابب تعدلها؟
             الاسم:${user.name}
             ,\العنوان: ${user.address},
             \الرقم: ${phoneNumber}
             `;
                        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                          message
                        )}`;
                        window.open(whatsappUrl);
                      }}
                      className={styles.waBtn}
                    >
                      Send
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
