import React from "react";
import Grid from "@material-ui/core/Grid";
import ProjectDetails from "./ProjectDetails.js";
import ProjectImages from "./ProjectImages.js";
import Button from "@material-ui/core/Button";

import "./styles/AdminForm.css";

export default class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      images: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let details = this.state.details;

    details[name] = value;
    this.setState({
      details: details
    });

    console.log("Current state = ", this.state);
  }

  handleImageChange(images) {
    console.log("Image list ", images);
    this.setState({
      images: images
    });
    console.log("Current image state = ", this.state);
  }

  handleSubmit() {
    fetch("projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.details)
    })
      .then(function(response) {
        return response.status;
      })
      .then(function(status) {
        console.log("Status is = " + status);
      });
  }

  render() {
    return (
      <div style={{ padding: "0px 50px 70px 50px" }}>
        <h1>
          Hello {this.props.name}. Welcome to the back end of your website.
        </h1>
        <br />
        <Grid container spacing={6} direction="row">
          <Grid item md={6}>
            <ProjectDetails
              details={this.state.details}
              handleInputChange={this.handleInputChange}
            />
          </Grid>
          <Grid item md={6}>
            <ProjectImages
              images={this.state.images}
              handleChange={this.handleImageChange}
            />
            {/* <div>Image Placeholder</div> */}
          </Grid>
        </Grid>

        <Grid container spacing={10}>
          <Grid item xs={12} align="center">
            <Button variant="contained" onClick={this.handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}
