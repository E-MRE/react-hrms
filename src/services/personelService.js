import axios from "axios";

export default class PersonelService{
    
    getPersonels(){
        return axios.get("http://localhost:8080/api/personels/getall")
    }
}