import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
import "./styles/AdminForm.css";

export default class ThumbnailInput extends Component {
  constructor(props) {
    super(props);
    console.log("image url of input = " + props.image);
    this.state = {
      caption: this.props.caption ? this.props.caption : null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    console.log("handle change called");
    console.log(event.target.value);
    this.props.handleChange(this.props.index, event.target.value);
  }

  handleDelete() {
    console.log("handle delete called");
    this.props.handleDelete(this.props.index);
  }

  render() {
    return (
      <>
        <Grid container direction="row">
          <Grid item xs={10}>
            <TextField
              label="Caption"
              value={this.props.image.caption || ""}
              onChange={this.handleChange}
              placeholder="Add optional caption"
              margin="normal"
              InputLabelProps={{ shrink: true }}
              variant="filled"
              multiline
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position={"end"}>
                    <IconButton
                      onClick={this.handleDelete}
                      aria-label="Delete"
                      title="Remove image"
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <img
              className="inputThumbnail marginNormal"
              src={this.props.image.url}
              alt="No Thumbnail"
            />
          </Grid>
        </Grid>
      </>
    );
  }
}
