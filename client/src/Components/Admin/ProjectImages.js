import React from 'react';
import UploadImages from './UploadImages';
import Grid from '@material-ui/core/Grid';
import ThumbnailInput from './ThumbnailInput';


export default class ProjectImages extends React.Component {
    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this);
        this.captionChange = this.captionChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(event) {
        console.log("handle change called");
        console.log(event.target.files);
        let fileList = this.props.images ? this.props.images : [];
        for (var i = 0; i < event.target.files.length; i++) {
            console.log("file is ", i);
            fileList.push({url: URL.createObjectURL(event.target.files[i]),
                          caption: null,
            });
        }
        console.log("DOne iterating files ", fileList);
        this.props.handleChange(fileList);
    }

    captionChange(key, caption) {
        let fileList = this.props.images;
        fileList[key].caption = caption;
        this.props.handleChange(fileList);
        // this.setState({
        //     files: fileList
        // });
    }

    handleDelete(key) {
        let fileList = this.props.images;
        fileList.splice(key, 1);
        this.props.handleChange(fileList);
        // this.setState({files: fileList});
    }

    render() {
        const files = this.props.images;
        console.log("Files are ", files);
       
         const ThumbnailInputs = () => (
                <>
                  {files && files.map((fileObj, index) => {
                    return(<ThumbnailInput key={index} index={index} image={fileObj} handleChange={this.captionChange} handleDelete={this.handleDelete}/>);
                  })}
                </>
        ); 
        console.log(ThumbnailInputs);
        
        
        return (<div>
                <Grid container direction="row" spacing={3}>
                    <Grid item xs={12}>
                        <div>
                        <h3>Project Images
                            <UploadImages handleChange={this.handleChange}/>
                        </h3>
                        {/* <img src={this.state.files} alt='test'/> */}
                        {/* <ThumbnailInput image={this.state.files} caption="test" /> */}
                        {/* <Grid container direction="row" spacing={3}> */}
                        <ThumbnailInputs/>
                        {/* </Grid> */}
                        </div>
                    </Grid>
                </Grid>
                  
                </div>
        );
    } 
}

