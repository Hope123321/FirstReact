import { BasicResponse } from "../models/_common/basicHttp";
import { User } from "../models/_common/user";
import {  GetUser } from "./AuthService";


export const GetByAuth = async (url: string) => {
    let user:User=GetUser();
	const response = await fetch(url,
		{
			method: 'Get',
			headers: {
                "Authorization": `Bearer ${user.Token}`
				// "Content-Type": "application/json"
			},
			// body: JSON.stringify({
			// 	UserNo: username,
			// 	UserPwd: password,
			// 	Remember:remember
			// })
		}
	);

    let data:BasicResponse|null=null;
    console.log(response);
    if(response.status !== 401){
        data = (await response.json() as BasicResponse);
    }
    else{
        data={
            ResponseNo:"401",
            ResponseNa:"工作階段已失效，請重新登入",
            ResponseData:{}
        };
    }
	return data;
};

export const PostByAuth = async (url: string,source:object) => {
    let user:User=GetUser();
	const response = await fetch(url,
		{
			method: 'Post',
			headers: {
                "Authorization": `Bearer ${user.Token}`
				,"Content-Type": "application/json"
			},
			body: JSON.stringify(source)
		}
	);

    let data:BasicResponse|null=null;
    console.log(response);
    if(response.status !== 401){
        data = (await response.json() as BasicResponse);
    }
    else{
        data={
            ResponseNo:"401",
            ResponseNa:"工作階段已失效，請重新登入",
            ResponseData:{}
        };
    }
	return data;
};