import React from "react";
import Sections from "./Sections";
import JobPositionList from "../pages/JobPositionList";
import { Grid } from "semantic-ui-react";
import { Route } from 'react-router';
import AddJobPosition from "../pages/AddJobPosition";
import ApproveJobPosition from "../pages/Personel/ApproveJobPosition";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <Sections />
          </Grid.Column>
          <Grid.Column width={13}>
            <Route exact path="/" component={ApproveJobPosition}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
