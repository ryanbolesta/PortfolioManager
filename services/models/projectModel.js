import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for notes
 */
const ProjectScheme = new Schema({
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startYear: {
        type: String,
        default: "2019"
    },
    endYear: {
        type: String,
        default: "2019"
    }
});

export default mongoose.model('Project', ProjectScheme);