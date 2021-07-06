import axios from "axios";

export default class JobPositionService {
  getAllJobPositions() {
    return axios.get("http://localhost:8080/api/jobpositions/getall");
  }

  getActiveJobPositions() {
    return axios.get(
      "http://localhost:8080/api/jobpositions/getActiveJobPositions"
    );
  }

  getAllPositionsByEmployerId(employerId) {
    return axios.get(
      `http://localhost:8080/api/jobpositions/getAllPositionsByEmployerId?employerId=${employerId}`
    );
  }

  addJobPosition({
    positionName,
    employer,
    job,
    city,
    workType,
    workTime,
    minSalary,
    maxSalary,
    activePositionQuantity,
    applicationDeadline,
    creationDate,
    positionActive,
    description,
  }) {
    return axios.post("http://localhost:8080/api/jobpositions/add", {
      positionId: 0,
      positionName: positionName,
      employer: employer,
      job: job,
      city: city,
      workType: workType,
      workTime: workTime,
      minSalary: minSalary,
      maxSalary: maxSalary,
      activePositionQuantity: activePositionQuantity,
      applicationDeadline: applicationDeadline,
      creationDate: creationDate,
      positionActive: positionActive,
      description: description,
    });
  }

  updateJobPositionStatus(positionId, status){
      return axios.post(`http://localhost:8080/api/jobpositions/updateJobPositionStatus?isActive=${status}&positionId=${positionId}`)
  }
}
