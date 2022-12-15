import { useEffect, useState } from "react";
import { GetByAuth } from "../services/APIService";

export function About() {

    //登入訊息
    const [List, setList] = useState<string>('');

    useEffect(() => {
        GetList();
    }, [])


    const GetList = async () => {
        let res = await GetByAuth("/api/WeatherForecast/get");
        console.log(res);
        if (res.ResponseNo == "0000") {
            setList(JSON.stringify(res.ResponseData));
        } else {
            alert(res.ResponseNa);
        }
    }
    
    return (
        <>
            <h1>About Page</h1>
            <p>Data</p>
            <hr/>
            <p>{List}</p>
        </>
    );
}