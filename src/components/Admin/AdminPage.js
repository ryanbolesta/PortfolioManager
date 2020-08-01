import React, { Component } from 'react'
import Grid from "@material-ui/core/Grid";
import ProjectForm from "./ProjectForm.js";
import ResponsiveDrawer from "../ResponsiveDrawer.js"
import SignOutButton from "../SignOut";
import {BrowserRouter as Router} from "react-router-dom";


export default class AdminPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
          projects: null,
          workingProject: null,
          projectIndex: -1,
          details: {},
          images: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleProjectChange = this.handleProjectChange.bind(this);
        this.callBackendAPI = this.callBackendAPI.bind(this);
        this.refreshProjects = this.refreshProjects.bind(this);
    }

    componentDidMount() {
        // Call our fetch function below once the component mounts
        this.refreshProjects();
      }

      refreshProjects() {
        this.callBackendAPI()
          .then(res => this.setState({ projects: res, projectIndex: -1, details: {}, images: [] }))
          .catch(err => console.log(err));
      }

      // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
      callBackendAPI = async () => {
        const response = await fetch("projects");
        const body = await response.json();
    
        if (response.status !== 200) {
          throw Error(body.message);
        }
        return body;
      };

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
        const self = this;
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
            alert("Project successfully added from your portfolio");
            self.refreshProjects();
          });
      }

      handleDelete() {
        const self = this;
        fetch("projects/" + this.state.projects[this.state.projectIndex]._id, {
          method: "DELETE",
        })
          .then(function(response) {
            return response.status;
          })
          .then(function(status) {
            console.log("Status is = " + status);
            alert("Project successfully deleted from your portfolio");
            self.refreshProjects();
            
          });
      }

      handleProjectChange(index) {
        if (index !== this.state.index && index >= 0) {
          const project = this.state.projects[index];
          this.setState({projectIndex: index, details: project, images:[]});
        } else {
          this.setState({projectIndex: index, details: {}, images:[]});
        }
      }
  
      render() {
        const project = this.state.projectIndex >= 0 ? this.state.projects[this.state.projectIndex] : {};
        console.log("Selected project is ", project);
        const projectForm = <ProjectForm name="Robert" 
                                         handleInputChange={this.handleInputChange} 
                                         handleImageChange={this.handleImageChange} 
                                         handleSubmit={this.handleSubmit}
                                         handleDelete={this.handleDelete}
                                         details={this.state.details}
                                         images={this.state.images}  
                                         new={this.state.projectIndex == -1}
                                         />
        return (
          <>
              <SignOutButton/>
              <ResponsiveDrawer projects={this.state.projects}
                              projectIndex={this.state.projectIndex} 
                              handleProjectChange={this.handleProjectChange} 
                              projectForm={projectForm}
                              />
          </>
        )
    }
}
