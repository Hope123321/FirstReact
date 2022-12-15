import React, { useState, useEffect, createContext } from "react";
import { Props } from "../models/_common/props";
import { User } from "../models/_common/user";
import Login from "../pages/Login";
import { GetUser, isAuthenticated } from "../services/AuthService";

//全系統使用Context(使用者資訊)
const UserContext = createContext({});

export const UserProvider = ({ children }: Props) => {

    //登入資料
    const [currentUser, setCurrentUser] = useState<User | null>(GetUser());

    // 第一次載入執行
    useEffect(() => {
      const checkLoggedIn = async () => {
        let cuser: User | null = isAuthenticated();

        if (cuser === null || cuser.Token === "") {
          cuser = null;
        }
        setCurrentUser(cuser);
      };

      checkLoggedIn();
    }, []);

    // 當值變更執行
    useEffect(() => {
      console.log("currentUser=");
      console.log(currentUser);

      // 登出
      if (!currentUser) {
        localStorage.removeItem("user");
      }
    });

    return (
      <UserContext.Provider
        value={[currentUser, setCurrentUser]}
      >
        {currentUser ? children : <Login />}
      </UserContext.Provider>
    );
};

export default UserContext;
