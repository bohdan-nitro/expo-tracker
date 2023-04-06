import axios from "axios";

const BACKEND_URL = "https://expo-tracker-default-rtdb.firebaseio.com"

export const storeExpence = async (expenceData) => {
   const response = await axios.post(BACKEND_URL + '/expences.json', expenceData);
   const id = response.data.name;
   return id
}

export const getExpence = async () => {
   const response = await axios.get(BACKEND_URL + "/expences.json")

   const expences = [];
   
   for(const key in response.data){
    const expenveObj = {
        id: key,
        amount: response.data[key].amount,
        date: new Date(response.data[key].date),
        description: response.data[key].description
    }
    expences.push(expenveObj)
   }
   return expences
}

export const updateExpence = (id, expenceData) => {
    return axios.put(BACKEND_URL + `/expences/${id}.json`, expenceData)
}
export const deleteExpence = (id) => {
    axios.delete(BACKEND_URL + `/expences/${id}.json`)
}