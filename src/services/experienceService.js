import axios from "axios";

export default class ExperienceService{
    
    getExperiences(){
        return axios.get("http://localhost:8080/api/experiences/getall")
    }
}