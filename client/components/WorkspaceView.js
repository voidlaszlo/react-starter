import React from 'react';
import _ from 'underscore';
import WorkspaceViewItem from './WorkspaceViewItem';

let WorkspaceView = React.createClass({
  render() {
    if (this.props.errorMessage) {
      return (
        <div>{this.props.errorMessage}</div>
      );
    }

    if (_.isEmpty(this.props.workspace)) {
      return (
        <div>
          <img src="dist/img/ajax-loader.gif" />
        </div>
      );
    }

    return (
      <div>
        <ul>
        {this.props.workspace.Views.map((view) => {
          return (
            <WorkspaceViewItem key={view} data={view}/>
          );
        })}
        </ul>
      </div>
    );
  }
});

export default WorkspaceView;
