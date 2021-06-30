import axios from "axios";

export default class JobSeekerLanguageService{
    
    getJobSeekerLanguages(){
        return axios.get("http://localhost:8080/api/jobseekerlanguages/getall")
    }
}