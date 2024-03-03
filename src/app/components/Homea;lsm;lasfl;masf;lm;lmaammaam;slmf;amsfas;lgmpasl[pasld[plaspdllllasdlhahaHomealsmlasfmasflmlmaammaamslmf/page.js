"use client";
import React, { useEffect, useState, useCallback } from "react";
import styles from "./page.module.css";
import Notiflix from "notiflix";
export default function Home() {
  function _0x5256() {
    const _0xdc4e0d = [
      "none",
      "2190vazVFH",
      "7618888vkTnre",
      "7085JTycaT",
      "2aKdvgs",
      "5675628ZeVhsa",
      "71217opeONl",
      "2322186bxQoUH",
      "2524OgZxKV",
      "55558YrTWwk",
      "4186511SXnLpb",
    ];
    _0x5256 = function () {
      return _0xdc4e0d;
    };
    return _0x5256();
  }
  const _0x36e0e0 = _0x204e;
  function _0x204e(_0x3d0166, _0x4b9d70) {
    const _0x5256f2 = _0x5256();
    return (
      (_0x204e = function (_0x204e11, _0x2122b2) {
        _0x204e11 = _0x204e11 - 0x11e;
        let _0xca301c = _0x5256f2[_0x204e11];
        return _0xca301c;
      }),
      _0x204e(_0x3d0166, _0x4b9d70)
    );
  }
  (function (_0x37f28b, _0x3bc6ea) {
    const _0x1dab9d = _0x204e,
      _0x148f98 = _0x37f28b();
    while (!![]) {
      try {
        const _0x34e22d =
          (parseInt(_0x1dab9d(0x126)) / 0x1) *
            (-parseInt(_0x1dab9d(0x121)) / 0x2) +
          -parseInt(_0x1dab9d(0x124)) / 0x3 +
          (parseInt(_0x1dab9d(0x125)) / 0x4) *
            (-parseInt(_0x1dab9d(0x120)) / 0x5) +
          -parseInt(_0x1dab9d(0x122)) / 0x6 +
          parseInt(_0x1dab9d(0x127)) / 0x7 +
          parseInt(_0x1dab9d(0x11f)) / 0x8 +
          (-parseInt(_0x1dab9d(0x123)) / 0x9) *
            (-parseInt(_0x1dab9d(0x11e)) / 0xa);
        if (_0x34e22d === _0x3bc6ea) break;
        else _0x148f98["push"](_0x148f98["shift"]());
      } catch (_0xb096fc) {
        _0x148f98["push"](_0x148f98["shift"]());
      }
    }
  })(_0x5256, 0x95d40);
  const [data, setData] = useState([]),
    [usersCount, setUsersCount] = useState("2500"),
    [userName, setUserName] = useState(""),
    [phoneNumber, setPhoneNumber] = useState(""),
    [userAddress, setUserAddress] = useState(""),
    [searchValue, setSearchValue] = useState(""),
    [isOnline, setIsOnline] = useState("Online"),
    [userCount, setUserCount] = useState(null),
    [userCountStyle, setUserCountStyle] = useState(_0x36e0e0(0x128)),
    [boolenEvent, setBoolenEvent] = useState(![]);
  const _0x35337a = _0x27ce;
  (function (_0x3ae8b1, _0x1b1923) {
    const _0x44c9b8 = _0x27ce,
      _0x27286c = _0x3ae8b1();
    while (!![]) {
      try {
        const _0x2b8b3a =
          (-parseInt(_0x44c9b8(0x113)) / 0x1) *
            (-parseInt(_0x44c9b8(0x110)) / 0x2) +
          -parseInt(_0x44c9b8(0x10b)) / 0x3 +
          parseInt(_0x44c9b8(0x116)) / 0x4 +
          (-parseInt(_0x44c9b8(0x114)) / 0x5) *
            (parseInt(_0x44c9b8(0x10e)) / 0x6) +
          parseInt(_0x44c9b8(0x10a)) / 0x7 +
          (parseInt(_0x44c9b8(0x111)) / 0x8) *
            (parseInt(_0x44c9b8(0x10f)) / 0x9) +
          (parseInt(_0x44c9b8(0x10c)) / 0xa) *
            (-parseInt(_0x44c9b8(0x115)) / 0xb);
        if (_0x2b8b3a === _0x1b1923) break;
        else _0x27286c["push"](_0x27286c["shift"]());
      } catch (_0x234b5b) {
        _0x27286c["push"](_0x27286c["shift"]());
      }
    }
  })(_0x22be, 0xd8759);
  const api = _0x35337a(0x112) + usersCount + _0x35337a(0x10d) + searchValue;
  function _0x27ce(_0x5b224f, _0x289621) {
    const _0x22befd = _0x22be();
    return (
      (_0x27ce = function (_0x27ce08, _0x269150) {
        _0x27ce08 = _0x27ce08 - 0x10a;
        let _0x4f667d = _0x22befd[_0x27ce08];
        return _0x4f667d;
      }),
      _0x27ce(_0x5b224f, _0x289621)
    );
  }
  function _0x22be() {
    const _0x1038b9 = [
      "603463GgXyhW",
      "804597lXhEki",
      "3989290EzZzrx",
      "&keyword=",
      "6RNUxSh",
      "12853476oZTUJZ",
      "2150ccRLjk",
      "8FNANpJ",
      "https://pharmacy-api-5i0h.onrender.com/api/v1/users?limit=",
      "369yssoSz",
      "3037445mLzRyG",
      "22eNZtef",
      "2596460IclflN",
    ];
    _0x22be = function () {
      return _0x1038b9;
    };
    return _0x22be();
  }
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

  (function (_0xf2dc59, _0x3119b6) {
    const _0x2d4691 = _0x4758,
      _0x3d2818 = _0xf2dc59();
    while (!![]) {
      try {
        const _0x39111a =
          (parseInt(_0x2d4691(0x157)) / 0x1) *
            (parseInt(_0x2d4691(0x156)) / 0x2) +
          (parseInt(_0x2d4691(0x140)) / 0x3) *
            (-parseInt(_0x2d4691(0x14e)) / 0x4) +
          (-parseInt(_0x2d4691(0x146)) / 0x5) *
            (parseInt(_0x2d4691(0x13f)) / 0x6) +
          (-parseInt(_0x2d4691(0x144)) / 0x7) *
            (-parseInt(_0x2d4691(0x154)) / 0x8) +
          (-parseInt(_0x2d4691(0x14f)) / 0x9) *
            (parseInt(_0x2d4691(0x14d)) / 0xa) +
          (-parseInt(_0x2d4691(0x141)) / 0xb) *
            (parseInt(_0x2d4691(0x149)) / 0xc) +
          (parseInt(_0x2d4691(0x155)) / 0xd) *
            (parseInt(_0x2d4691(0x150)) / 0xe);
        if (_0x39111a === _0x3119b6) break;
        else _0x3d2818["push"](_0x3d2818["shift"]());
      } catch (_0x227b4b) {
        _0x3d2818["push"](_0x3d2818["shift"]());
      }
    }
  })(_0x370b, 0x197d8);
  function _0x4758(_0x39c776, _0x33e9b4) {
    const _0x370bba = _0x370b();
    return (
      (_0x4758 = function (_0x47586c, _0xaf705) {
        _0x47586c = _0x47586c - 0x13f;
        let _0x4b6609 = _0x370bba[_0x47586c];
        return _0x4b6609;
      }),
      _0x4758(_0x39c776, _0x33e9b4)
    );
  }
  function _0x370b() {
    const _0x34bc78 = [
      "42UAyyIY",
      "application/json",
      "40780hiLPQv",
      "DELETE",
      "Client,\x20Deleted",
      "12lmIoQV",
      "message",
      "_id",
      "Failed\x20to\x20delete\x20user",
      "2010ohVrrG",
      "1056AKecSU",
      "954reymft",
      "10654BtATUG",
      "success",
      "error",
      "left-bottom",
      "37096IfLbEo",
      "4732jGgcDY",
      "163626uWayiq",
      "1CWGgaT",
      "48cTExlH",
      "297SwzEzB",
      "1864951AIlska",
      "filter",
      "Error\x20deleting\x20user:",
    ];
    _0x370b = function () {
      return _0x34bc78;
    };
    return _0x370b();
  }
  const handleDelete = useCallback(
    async (_0x21268d) => {
      const _0x4eaf21 = _0x4758;
      try {
        const _0x13d049 = await fetch(
          "https://pharmacy-api-5i0h.onrender.com/api/v1/users/" +
            _0x21268d +
            "?sort=createdAt&keyword=" +
            searchValue,
          {
            method: _0x4eaf21(0x147),
            headers: { "Content-Type": _0x4eaf21(0x145) },
          }
        );
        if (!_0x13d049["ok"]) throw new Error(_0x4eaf21(0x14c));
        setData((_0xeca277) =>
          _0xeca277[_0x4eaf21(0x142)](
            (_0x4d73a0) => _0x4d73a0[_0x4eaf21(0x14b)] !== _0x21268d
          )
        ),
          Notiflix["Notify"][_0x4eaf21(0x151)](_0x4eaf21(0x148), {
            position: _0x4eaf21(0x153),
          });
      } catch (_0x184f87) {
        console[_0x4eaf21(0x152)](
          _0x4eaf21(0x143),
          _0x184f87[_0x4eaf21(0x14a)]
        );
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

  let [numberBarStyle, setNumberBarStyle] = useState("flex");
  let [boolenStyleForNumberBar, setBoolenStyleForNumberBar] = useState(false);

  let numbersBarStyle = {
    display: numberBarStyle,
  };
  let HideAndShowNumberBar = () => {
    setBoolenStyleForNumberBar(!boolenStyleForNumberBar);
    if (boolenStyleForNumberBar) {
      setNumberBarStyle("none");
    } else {
      setNumberBarStyle("flex");
    }
  };
  let [valueBarNumbers, setValueBarNumbers] = useState("");

  let TakeValueFromInput = (UserPhone) => {
    setValueBarNumbers(UserPhone.target.value);
  };
  let TakeValueFromInputAndGoToWhatsApp = () => {
    window.open(
      `https://wa.me/+2${valueBarNumbers}?text=السلام عليكم ورحمه الله وبركاته
       صيدليه المرام
        مع حضرتك يا فندم وحبين نسجل حضرتك في قاعده البيانات الجديده ممكن تعرفنا:
         :العنوان
         :و الاسم
         ورقم التواصل؟`
    );
    setValueBarNumbers("");
  };
  return (
    <main className={styles.main}>
      <div className={styles.h1}>El-Maram DateBase</div>
      <div onClick={handleCountStyleEvent} className={styles.isonline}>
        {isOnline}
      </div>
      <div style={userCountStyleing}> Count:: {userCount} </div>

      <div style={numbersBarStyle} className={styles.senderBtn}>
        <input
          onChange={TakeValueFromInput}
          className={styles.senderBtnInput}
          placeholder="Enter Phone Number"
          value={valueBarNumbers}
          type="number"
        />
        <button
          onClick={TakeValueFromInputAndGoToWhatsApp}
          className={styles.senderBtnChild}
        >
          Send
        </button>
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
      <button
        className={styles.hideNumberBarBtn}
        onClick={HideAndShowNumberBar}
      >
        Hide Numbers Bar
      </button>
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
