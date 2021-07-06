import axios from "axios";

export default class UserTypeService{
    
    getUserTypes(){
        return axios.get("http://localhost:8080/api/usertypes/getall")
    }
}