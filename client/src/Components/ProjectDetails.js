import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
export default class ProjectDetails extends React.Component {
  render() {
    return (
      <>
        <h3>Project Details</h3>
        <form>
          <TextField
            id="project-title"
            label="Project Title"
            // className={classes.textField}
            name="title"
            value={this.props.details.title || ""}
            onChange={this.props.handleInputChange}
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
            value={this.props.details.location || ""}
            onChange={this.props.handleInputChange}
            placeholder="Client/Location"
            margin="normal"
            InputLabelProps={{ shrink: true }}
            variant="filled"
            multiline
            fullWidth
          />
          <Grid container spacing={3} direction="row">
            <Grid item sm={6}>
              <TextField
                id="startYear"
                label="Start Year"
                maxLength="4"
                name="startYear"
                value={this.props.details.startYear || ""}
                onChange={this.props.handleInputChange}
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
                value={this.props.details.endYear || ""}
                onChange={this.props.handleInputChange}
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
            value={this.props.details.description || ""}
            onChange={this.props.handleInputChange}
            margin="normal"
            InputLabelProps={{ shrink: true }}
            variant="filled"
          />
        </form>
      </>
    );
  }
}
