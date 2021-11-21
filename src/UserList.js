export function UserList({ userList, deleteUser, toggleUser }) {
  return (
    <div className="UserList">
      {userList.map((user) => {
        return (
          <User
            user={user}
            key={user.id}
            toggleUser={toggleUser}
            deleteUser={deleteUser}
          ></User>
        );
      })}
    </div>
  );
}

//forEach 와 map의 차이였다..
// createUser 부분 마무리하고.
// toggle 기능과 기타 react hook을 이용해서 응용해보기

function User({ user, deleteUser, toggleUser }) {
  return (
    <div className="user-container">
      <h1
        style={{
          color: user.toggle === true ? "red" : "black",
        }}
      >
        {user.name}
        <span> ({user.id})</span>
      </h1>
      <h3>{user.email}</h3>
      <h3>{user.favorite}</h3>
      <button
        onClick={() => {
          deleteUser(user.id);
        }}
      >
        delete
      </button>
      <button
        onClick={() => {
          toggleUser(user.id);
        }}
      >
        toggle
      </button>
    </div>
  );
}

/* 
  onClick={deleteUser()} 하면 즉시실행함수가 되어버림.
  그런데 param을 받아야 하니까. 여기서 deleteUser(user.id) 해버리면
  클릭할때가 아니라 그것을 즉시 실행해버리니까 오류가 발생.
  보통은 param이 없을때는 onClick = {deleteUser} 이런 식으로 쓰지만.
  그래서 onClick={ () => { deleteUser(next.id)}} 형식으로 
  callback 함수의 형식을 취한다는 것이다.
*/
