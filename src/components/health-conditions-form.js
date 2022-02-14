import React, { useState } from "react";
import { Form, Container, Header, Grid, Button, Label, Divider } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";
import _ from "lodash";
import { conditionsGroupedByType } from "../fixtures/health-conditions";

const HealthConditionsForm = ({ nextStep, prevStep, handleChange, handleSearchChange, healthConditionForm }) => {
  return (
    <Container>
      <Header as="h3" block textAlign="center">
        Health Conditions
      </Header>
      <Container>Please select all the health conditions that apply to you</Container>
      <Divider />
      <Grid>
        <Grid.Row columns={2}>
          {conditionsGroupedByType.map((type) => {
            return (
              <Grid.Column>
                <Container textAlign="left">{type.type}</Container>
                <Dropdown
                  multiple
                  fluid
                  search
                  selection
                  options={type.conditions}
                  onChange={handleChange}
                  onSearchChange={handleSearchChange}
                  value={healthConditionForm[type]}
                />
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
      <Button onClick={prevStep} type="submit">
        Previous
      </Button>
      <Button onClick={nextStep} type="submit" positive>
        Next
      </Button>
    </Container>
  );
};

export default HealthConditionsForm;
