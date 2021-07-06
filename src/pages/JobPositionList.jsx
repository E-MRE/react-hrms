import React, { useState, useEffect } from "react";
import { Item } from "semantic-ui-react";
import JobPositionService from "../services/jobPositionService.js";
import JobPositionItem from "../components/JobPositionItem";
import CustomHeader from '../components/CustomHeader'

export default function JobPositionList() {
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getAllPositionsByEmployerId(11) //TODO: employerId çekince bunu düzelt
      .then((result) => setJobPositions(result.data.data));
  });

  return (
    <div>
     <CustomHeader title="İş İlanları" icon="users"/>

      <Item.Group divided>
        {jobPositions.map((jobPosition) => (
          <JobPositionItem jobPosition = {jobPosition} userType="Employer"/>
        ))}
      </Item.Group>
    </div>
  );
}
