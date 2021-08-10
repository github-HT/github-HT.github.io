import * as React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Home from './home/Home'

export interface IRoutesProps {
}

export interface IRoutesState {
}

export default class Index extends React.Component<IRoutesProps, IRoutesState> {
  constructor(props: IRoutesProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}></Route>
      </Router>
    );
  }
}
