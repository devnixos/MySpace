import axios from "axios";

const BASE_URL = "http://20.20.20.78:5008/api/";

export const ENDPOINTS = {
  EMPLOYEE: "Employee",
  EMPLOYEE_PERSONAL_DETAILS:"Employee/personal-details",
  CLIENT: "Client",
  DEPARTMENT: "Department",
};

export const createAPIEndpoint = (endpoint:string) => {
  const url = BASE_URL + endpoint + "/";

  return {
    fetchAll: async() => await axios.get(url),
    fetchById: async(id:number) => await axios.get(url + id),
    create: async(newRecord:object) => await axios.post(url, newRecord),
    update: async(id:number, updatedRecord:object) => await axios.put(url + id, updatedRecord),
    updatePost: async(id:number, updatedRecord:object) => await axios.post(url + id, updatedRecord),
    delete: async(id:number) => await axios.delete(url + id),
  };
};


