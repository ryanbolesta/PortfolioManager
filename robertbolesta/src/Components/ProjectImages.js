import React from 'react';
import UploadImages from './UploadImages';
import Grid from '@material-ui/core/Grid';


class ProjectImages extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            files: null
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log("handle change called");
        console.log(event.target.files);
        this.setState({
            files: URL.createObjectURL(event.target.files[0])
        });
    }

    render() {
        return (<div>
                <Grid container direction="row" spacing={3}>
                    <Grid item xs={12}>
                        <h3>Project Images
                            <UploadImages handleChange={this.handleChange}/>
                        </h3>
                        <img src={this.state.files} alt='test'/>
                    </Grid>
                </Grid>
                  
                </div>
        );
    } 
}

export default ProjectImages;