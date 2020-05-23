import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import styles from './styles';
import { withStyles } from '@material-ui/core';


class App extends Component {
  render() {
    console.log("props",this.props)
    const{classes}=this.props;
    return (
      <div >
        <Button variant="contained" color="secondary">Default</Button>
        <div className={classes.box}>
          <div className={classes.shape}>A</div>
          <div className={classes.shape}>B</div>
          <div className={classes.shape}>C</div>
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(App);
