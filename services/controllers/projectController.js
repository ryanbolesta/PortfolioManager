import mongoose from 'mongoose'; 
import project from '../models/projectModel.js';

exports.getProject = (req, res) => {
    project.findById(req.params.projectId, (err, project) => {
        if (err) {
            res.send(err);
        }

        res.json(project);
    });
};

exports.getAllProjects = (req, res) => {
    project.find({}, (err, projects) => {
        if (err) {
            res.send(err);
        }

        res.json(projects);
    });
};

exports.createProject = (req, res) => {
    console.log("create endpoint called");
    const newProject = new project(req.body);
    console.log("newProject created: ", newProject);
    newProject.save((err, project) => {
        console.log("saving project");
        if (err) {
            res.send(err);
        }
        console.log("send response");
        res.json(project);
        console.log("response sent");
    });
};

exports.updateProject = (req, res) => {
    project.findOneAndUpdate({
        _id: req.params.projectId
    }, req.body,
        (err, project) => {
            if (err) {
                res.send(err);
            }

            res.json(project);
        });
};

exports.deleteProject = (req, res) => {
    project.remove({
        _id: req.params.projectId
    }, (err) => {
        if (err) {
            res.send(err);
        }

        res.json({
            message: `project ${req.params.projectId} successfully deleted`
        });
    });
};