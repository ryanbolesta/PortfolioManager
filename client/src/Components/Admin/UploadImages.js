import React from 'react';
// import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    //margin: theme.spacing(1),
    padding: 0,
    margin: 0,
    width: '20px',
    height: '20px'
  },
  input: {
    display: 'none',
  },
}));

export default function UploadImages(props) {
  const classes = useStyles();

//   function handleChange(event) {
//       this.props.on
//   }

  return (
    <span>
        <input
            accept="image/*"
            className={classes.input}
            onChange={props.handleChange}
            id="contained-button-file"
            multiple
            type="file"
        />
        <label htmlFor="contained-button-file">
            <Button color="default" component="span" aria-label="Add" size="small" className={classes.button}>
                <AddIcon />
            </Button>
        </label>
    </span>
  );
}