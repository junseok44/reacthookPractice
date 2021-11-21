import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { UserList } from "./UserList";

const useScroll = () => {
  const element = useRef();
  const [y, changeY] = useState(window.scrollY);

  // useEffect를 쓰지않으면. 이게 re-rendering 될때
  // window에 달려있는 eventListener가 없어질것이라고 생각됨.

  const handler = () => {
    changeY(window.scrollY);

    if (element.current) {
      if (y >= 100) {
        element.current.style.height = "8vh";
        element.current.style.fontSize = "1rem";
      } else {
        element.current.style.height = "10vh";
        element.current.style.fontSize = "1.5rem";
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handler);
  });

  return [element];
};

const useInput = () => {
  const [userInfo, changeUserInfo] = useState({
    username: "",
    email: "",
    favorite: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    changeUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const onReset = () => {
    changeUserInfo({
      username: "",
      email: "",
    });
  };
  return [userInfo, changeUserInfo, onChange, onReset];
};

function App() {
  const [title] = useScroll();
  const [userInfo, changeUserInfo, onChange, onReset] = useInput();
  let nextId = useRef(4);

  const { username, email, favorite } = userInfo;

  const [user, changeUser] = useState([
    {
      name: "junseok",
      email: "newtdnfds@naver.com",
      favorite: "anime",
      toggle: true,
      id: 1,
    },
    {
      name: "chulsoo",
      email: "efmewof@naver.com",
      favorite: "game",
      toggle: false,
      id: 2,
    },
    {
      name: "alice",
      email: "alice@gmail.com",
      favorite: "ehefe",
      toggle: false,
      id: 3,
    },
  ]);

  const createUser = () => {
    const newUser = {
      name: userInfo.username,
      email: userInfo.email,
      favorite: userInfo.favorite,
      toggle: false,
      id: nextId.current,
    };
    changeUser([...user, newUser]);
    changeUserInfo({
      username: "",
      email: "",
      favorite: "",
    });

    nextId.current += 1;
    console.log("nextId" + nextId.current);
  };

  const deleteUser = (id) => {
    const newUserArray = user.filter((user) => {
      return user.id !== id;
    });
    // forEach, filter, map, 차이는?
    // filter는 그냥 찾아주는거. map은 무슨 새로운 작업을.
    newUserArray.forEach((user) => {
      if (user.id > id) {
        user.id -= 1;
      }
    });
    changeUser(newUserArray);
    nextId.current -= 1;
  };

  const toggleUser = (id) => {
    const newUser = user.map((user) => {
      return user.id === id ? { ...user, toggle: !user.toggle } : user;
    });

    changeUser(newUser);
  };

  /* 여기 위에 deleteUser에서 user를 출력했을때랑 useEffect에서
  user값을 출력했을때랑 값이 다르다. 거기서 user를 출력하면
  state값이 바뀌기 전의 user가 출력되는데, 이것은 아무래도
  state 값이 변경됨 --> 이전의 user를 그대로 출력 -->
  리렌더링 --> 마운트 이후 useEffect 출력으로 인해서 새로운
  user가 출력되는 형식이라서 그런듯.. 결론은
  무언가 값이 바뀌는경우에는 useEffect를 통해서 바뀐 값을 등록해주는게.
  */
  return (
    <div className="container">
      <div ref={title} className="header">
        <h3> username : {username} </h3>
        <h3> email : {email} </h3>
        <h3> favorite: {favorite} </h3>
      </div>
      <div className="inputBox">
        <input
          type="text"
          placeholder="username"
          name="username"
          value={username} // 여기서 그냥 "username" 이렇게 써버리면 고정이 되어버리잖아요..그러니까 이거를 바꾸도록 조정해주어야히죠
          onChange={onChange}
        ></input>
        <input
          type="text"
          placeholder="email"
          name="email"
          value={email || ""}
          onChange={onChange}
        ></input>
        <input
          type="text"
          placeholder="favorite"
          name="favorite"
          value={favorite || ""}
          onChange={onChange}
        ></input>
        <button onClick={onReset}>reset</button>
        <button onClick={createUser}>create</button>
      </div>
      <UserList
        userList={user}
        deleteUser={deleteUser}
        toggleUser={toggleUser}
      ></UserList>
    </div>
  );
}

export default App;
