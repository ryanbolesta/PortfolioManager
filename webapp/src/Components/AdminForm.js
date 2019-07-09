import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import ProjectImages from './ProjectImages.js'

import '../styles/AdminForm.css'


class AdminForm extends React.Component {
     render() {
          return (
               <div style={{ padding: "0px 50px 70px 50px" }}>
                    <h1>Hello {this.props.name}. Welcome to the back end of your website.</h1>
                    <br />
                    <Grid
                         container
                         spacing={3}
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
                                        // value={values.name}
                                        // onChange={handleChange('name')}
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
                                                  // value={values.name}
                                                  // onChange={handleChange('name')}
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
                                                  // value={values.name}
                                                  // onChange={handleChange('name')}
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
                                        // className={classes.textField}
                                        margin="normal"
                                        InputLabelProps={{ shrink: true }}
                                        variant="filled"
                                   />

                              </form>
                         </Grid>
                         <Grid item md={6}>
                              <ProjectImages/>
                              {/* <div>Image Placeholder</div> */}
                         </Grid>
                    </Grid>
               </div>
          );


     }
}

export default AdminForm;
