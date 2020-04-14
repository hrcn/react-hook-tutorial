import React from 'react';

import ChatAPI from '/somewhere';

export default class FriendStatus extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isOnline: null };
      this.handleStatusChange = this.handleStatusChange.bind(this);
    }
  
    // set up a subscription in componentDidMount, and clean it up in componentWillUnmount
    componentDidMount() {
      ChatAPI.subscribeToFriendStatus(
        this.props.friend.id,
        this.handleStatusChange
      );
    }

    componentWillUnmount() {
      ChatAPI.unsubscribeFromFriendStatus(
        this.props.friend.id,
        this.handleStatusChange
      );
    }

    handleStatusChange(status) {
      this.setState({
        isOnline: status.isOnline
      });
    }
  
    render() {
      if (this.state.isOnline === null) {
        return 'Loading...';
      }
      return this.state.isOnline ? 'Online' : 'Offline';
    }
}