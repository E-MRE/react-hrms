import React, { useState, useEffect } from "react";
import { Item } from "semantic-ui-react";
import CustomHeader from "../../components/CustomHeader";
import JobPositionItem from "../../components/JobPositionItem";
import JobPositionService from "../../services/jobPositionService.js";

export default function ApproveJobPosition() {
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getAllJobPositions()
      .then((result) => setJobPositions(result.data.data));
  });

  function handleApproveJobPosition(jobPositionId){
    let jobPositionService = new JobPositionService();
    jobPositionService
      .updateJobPositionStatus(jobPositionId, true)
      .then((result) => window.alert(result.data.message))
      .catch(error => window.alert(error.message))
  };

  function handleDisprageJobPosition(jobPositionId){
    let jobPositionService = new JobPositionService();
    jobPositionService
      .updateJobPositionStatus(jobPositionId, false)
      .then((result) => window.alert(result.data.message))
      .catch(error => window.alert(error.message))
  };

  return (
    <div>
      <CustomHeader title="Tüm ilanlar" icon="users" />

      <Item.Group divided>
        {jobPositions.map((jobPosition) => (
          <JobPositionItem
            jobPosition={jobPosition}
            userType="Personel"
            approveJobPosition = {handleApproveJobPosition}
            disprageJobPosition={handleDisprageJobPosition}
          />
        ))}
      </Item.Group>
    </div>
  );
}
