import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppContainer from './containers/App';
import './App.css';

const styles = {
  appContainer: {
    flex: 1,
    minHeight: '100vh',
    flexGrow: 1,
    padding: 0,
    margin: 0
  }
};

type Props = {
  classes: {
    appContainer: string;
  };
};

class App extends React.Component<Props> {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.appContainer}>
        <AppContainer />
      </div>
    );
  }
}

export default withStyles(styles)(App);
