import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import ProjectImages from './ProjectImages.js'

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


     render() {
          return (
               <div style={{ padding: "0px 50px 70px 50px" }}>
                    <h1>Hello {this.props.name}. Welcome to the back end of your website.</h1>
                    <br />
                    <Grid
                         container
                         spacing={6}
                         direction="row"
                         // justify="left"
                         // alignItems="left"
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
                                   <Grid container
                                        spacing={3}
                                        direction="row"
                                         >
                                        <Grid item sm={6}>
                                             <TextField
                                                  // id="project-title"
                                                  label="Start Year"
                                                  maxLength="4"
                                                  // className={classes.textField}
                                                  name="startYear"
                                                  value={this.state.details.startYear || ''}
                                                  onChange={this.handleInputChange}
                                                  // placeholder={Number.toString(new Date().getFullYear())}
                                                  margin="normal"
                                                  InputLabelProps={{ shrink: true }}
                                                  variant="filled"
                                                  fullWidth
                                             />
                                        </Grid>
                                        <Grid item sm={6}>
                                             <TextField
                                                  // id="project-title"
                                                  label="End Year"
                                                  maxLength="4"
                                                  // className={classes.textField}
                                                  name="endYear"
                                                  value={this.state.details.endYear || ''}
                                                  onChange={this.handleInputChange}
                                                  // placeholder={Number.toString(new Date().getFullYear())}
                                                  margin="normal"
                                                  InputLabelProps={{ shrink: true }}
                                                  variant="filled"
                                                  fullWidth
                                             />
                                        </Grid>
                                   </Grid>

                                   <TextField
                                        id="standard-textarea"
                                        label="Project Description"
                                        placeholder="Dewalt Brander"
                                        multiline
                                        fullWidth
                                        name="description"
                                        value={this.state.details.description || ''}
                                        onChange={this.handleInputChange}
                                        // className={classes.textField}
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
               </div>
          );


     }
}


