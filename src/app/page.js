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
  const api = `https://pharmacy-api-5i0h.onrender.com/api/v1/users?limit=${usersCount}&keyword=${searchValue}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api, { method: "GET" });
        const json = await response.json();
        setData(Array.isArray(json.data) ? json.data : []);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [api]);
  useEffect(()=>{
    Notiflix.Notify.info("Hello Doctors")
  },[])

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
      // Confirm.show("Failed to add a new user", "OK");
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
  // let [isOnline, setIsonline] = useState("Online");

  const [isOnline, setIsOnline] = useState(
    navigator.onLine ? "Online" : "Offline"
  );

  useEffect(() => {
    const handleOnlineStatus = () => {
      setIsOnline(navigator.onLine ? "Online" : "Offline");
    };

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, []);
  return (
    <main className={styles.main}>
      <div className={styles.h1}>El-Maram DateBase</div>

      <div className={styles.isonline}>{isOnline}</div>

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
                    <button
                      className={styles.delBtn}
                      onClick={() => handleDelete(user._id)}
                    >
                      delete
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
