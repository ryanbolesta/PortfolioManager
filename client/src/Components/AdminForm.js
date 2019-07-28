import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import ProjectImages from './ProjectImages.js';
import Button from '@material-ui/core/Button';

import '../styles/AdminForm.css'


export default class AdminForm extends React.Component {

     constructor(props){
          super(props)
          this.state = {
              details: {},
              images: []
          }
          this.handleInputChange = this.handleInputChange.bind(this);
          this.handleImageChange = this.handleImageChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
      }

     componentDidMount() {
          // Call our fetch function below once the component mounts
        this.callBackendAPI()
          .then(res => this.setState({ data: res.express }))
          .catch(err => console.log(err));
      }
        // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
      callBackendAPI = async () => {
        const response = await fetch('projects');
        const body = await response.json();
    
        if (response.status !== 200) {
          throw Error(body.message) 
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

          fetch('projects', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
                  },
               body: JSON.stringify(this.state.details)
             }).then(function(response) {
               return response.status;
             }).then(function(status) {
               console.log("Status is = " + status);
             });

      }


     render() {
          return (
               <div style={{ padding: "0px 50px 70px 50px" }}>
                    <h1>Hello {this.props.name}. Welcome to the back end of your website.</h1>
                    <br />
                    <Grid
                         container
                         spacing={6}
                         direction="row"
                    >
                         

                         <Grid item md={6} >
                              <h3>Project Details</h3>
                              <form>

                                   <TextField
                                        id="project-title"
                                        label="Project Title"
                                        // className={classes.textField}
                                        name="title"
                                        value={this.state.details.title || ''}
                                        onChange={this.handleInputChange}
                                        placeholder="Groder"
                                        margin="normal"
                                        InputLabelProps={{ shrink: true }}
                                        variant="filled"
                                        multiline
                                        fullWidth
                                   />

                                   <TextField
                                        id="client"
                                        label="Client/Location"
                                        name="location"
                                        value={this.state.details.location || ''}
                                        onChange={this.handleInputChange}
                                        placeholder="Client/Location"
                                        margin="normal"
                                        InputLabelProps={{ shrink: true }}
                                        variant="filled"
                                        multiline
                                        fullWidth
                                   />
                                   <Grid container
                                        spacing={3}
                                        direction="row"
                                         >
                                        <Grid item sm={6}>
                                             <TextField
                                                  id="startYear"
                                                  label="Start Year"
                                                  maxLength="4"
                                                  name="startYear"
                                                  value={this.state.details.startYear || ''}
                                                  onChange={this.handleInputChange}
                                                  margin="normal"
                                                  InputLabelProps={{ shrink: true }}
                                                  variant="filled"
                                                  fullWidth
                                             />
                                        </Grid>
                                        <Grid item sm={6}>
                                             <TextField
                                                  id="endYear"
                                                  label="End Year"
                                                  maxLength="4"
                                                  name="endYear"
                                                  value={this.state.details.endYear || ''}
                                                  onChange={this.handleInputChange}
                                                  margin="normal"
                                                  InputLabelProps={{ shrink: true }}
                                                  variant="filled"
                                                  fullWidth
                                             />
                                        </Grid>
                                   </Grid>

                                   <TextField
                                        id="description"
                                        label="Project Description"
                                        placeholder="Dewalt Brander"
                                        multiline
                                        fullWidth
                                        name="description"
                                        value={this.state.details.description || ''}
                                        onChange={this.handleInputChange}
                                        margin="normal"
                                        InputLabelProps={{ shrink: true }}
                                        variant="filled"
                                   />

                              </form>
                         </Grid>
                         <Grid item md={6}>
                              <ProjectImages images={this.state.images} handleChange={this.handleImageChange}/>
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


