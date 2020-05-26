import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../../constants';
import TaskList from './../../componets/TaskList';
import TaskForm from './../../componets/TaskForm';
const listTask = [
    {
        id: 1,
        title: "read book",
        description: 'ABC',
        status: 0
    },
    {
        id: 2,
        title: "IN PROGRESS",
        description: 'ABC 123',
        status: 1
    },
    {
        id: 3,
        title: "COMPLETED",
        description: 'ABC 567',
        status: 2
    },
    {
        id: 4,
        title: "read book 890",
        description: 'ABC 890',
        status: 0
    },
]

class TaskBoard extends Component {
    state = {
        open: false
    }
    renderBoard() {
        let xhtml = null;
        xhtml = (
            <Grid container spacing={3}>
                {
                    STATUSES.map((status, index) => {
                        const taskFiltered = listTask.filter(task => task.status === status.value)
                        return (
                            <TaskList tasks={taskFiltered} status={status} key={index} />
                        )
                    })
                }
            </Grid>
        )
        return xhtml;
    }
    handleClose = () => {
        this.setState({
            open: false
        })
    };
    handleClickOpen = () => {
        this.setState({
            open: true
        })
    };
    renderForm() {
        const { open } = this.state;
        let xhtml = null;
        xhtml = (
           <TaskForm open={open} onClose={this.handleClose} />
        );
        return xhtml;
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.TaskBoard}>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.handleClickOpen}><AddIcon />Thêm mới</Button>
                {this.renderBoard()}
                {this.renderForm()}
            </div>

        );
    }
}

export default withStyles(styles)(TaskBoard);