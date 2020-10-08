import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "react-loader-spinner";
import User from "./User";
import { userList } from "./usersData";
import "./style.scss";


const RaitingUsers = () => {
  const [users, setUsers] = useState(userList);

  const fetchUsersList = () => {
    setTimeout(() => {
      setUsers(users.concat(userList));
    }, 2000);
  };
 
  return (
    <div>
      <h1 className="users-list">Users Rating</h1>
      <InfiniteScroll
        dataLength={users.length}
        next={fetchUsersList}
        hasMore={true}
        loader={
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        }
      >
        {users.map((user, index) => (
          <div key={index}>
            <User id={index + 1}  {...user} />
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default RaitingUsers;

