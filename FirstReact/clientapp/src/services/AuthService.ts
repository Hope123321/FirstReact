import { SingInRequest } from "../models/login/SignIn";
import { BasicResponse } from "../models/_common/basicHttp";

// 登入方法(API)
export const login = async (username: string, password: string, remember: boolean) => {

	const response = await fetch(`/api/Login/signin`,
		{
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				Account: username,
				Password: password,
				Remember:remember
			} as SingInRequest)
		}
	);
	const data: BasicResponse = await response.json();
	return data;
};

//storage key
const userKey='user'
// 確認是否登入
export const isAuthenticated = () => {
	const user = localStorage.getItem(userKey);
	if (!user) {
		return null
	}
	return JSON.parse(user);
};
//設定登入資訊
export const SetUser = (user:string) => {
	localStorage.setItem(userKey,user);
};
//取得登入資訊
export const GetUser = () => {
	let str=localStorage.getItem(userKey);
	if(str!==null)
		return JSON.parse(str);
	return null;
};
//清除登入資訊
export const ClearUser = () => {
	localStorage.removeItem(userKey);
};

