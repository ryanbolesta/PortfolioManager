import React, { Component } from 'react'
import Grid from "@material-ui/core/Grid";
import ProjectForm from "./ProjectForm.js";


export default class AdminPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Call our fetch function below once the component mounts
        this.callBackendAPI()
          .then(res => this.setState({ data: res.express }))
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
    render() {
        return (
            <ProjectForm name="Robert" />
        )
    }
}
