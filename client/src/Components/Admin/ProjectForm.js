import React from "react";
import Grid from "@material-ui/core/Grid";
import ProjectDetails from "./ProjectDetails.js";
import ProjectImages from "./ProjectImages.js";
import Button from "@material-ui/core/Button";

import "./styles/AdminForm.css";

export default class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    const project = this.props.project;
    console.log("Project is ", project)
  }

  render() {
    return (
      <div style={{ padding: "50px 50px 70px 50px" }}>
        <h1>
          Hello {this.props.name}. Welcome to the back end of your website.
        </h1>
        <br />
        <Grid container spacing={6} direction="row">
          <Grid item md={6}>
            <ProjectDetails
              details={this.props.details}
              handleInputChange={this.props.handleInputChange}
            />
          </Grid>
          <Grid item md={6}>
            <ProjectImages
              images={this.props.images}
              handleChange={this.props.handleImageChange}
            />
          </Grid>
        </Grid>

        <Grid container spacing={10}>
          <Grid item xs={12} align="center">
          {this.props.new && <Button variant="contained" onClick={this.props.handleSubmit} disabled={!this.props.new}>
              Submit
            </Button>
          }
          {!this.props.new && <Button variant="contained" color="secondary" onClick={this.props.handleDelete} >
            Delete
          </Button>
          }
          </Grid>
        </Grid>
      </div>
    );
  }
}
