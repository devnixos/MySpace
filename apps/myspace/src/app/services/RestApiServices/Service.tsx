import axios from "axios";

export const base_url = ()=>{
    return ("http://20.20.20.78:5008/api/");
}

export const addEmployeeData = (data:object) =>{
    return axios.post(base_url() + "employee",data);
}