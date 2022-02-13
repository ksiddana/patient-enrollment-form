import logo from "./logo.svg";
import "./App.css";
import PatientEnrollmentForm from "./components/patient-enrollment-form";
import { Progress, Grid } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
        <Grid.Column>
          <PatientEnrollmentForm />
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
