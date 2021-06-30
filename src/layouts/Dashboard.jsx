import React from "react";
import Sections from "./Sections";
import JobPositionList from "../pages/JobPositionList";
import { Grid } from "semantic-ui-react";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <Sections />
          </Grid.Column>
          <Grid.Column width={13}>
            <JobPositionList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
