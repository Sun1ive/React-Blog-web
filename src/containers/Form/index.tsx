import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as T from './index.d';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
};

const Form: React.FunctionComponent<T.Props> = ({ classes }) => {
  return <div />;
};

export default withStyles(styles)(Form);
