import React, { Component } from 'react';

class Detail extends Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
    
  }
  render() {
    const { location } = this.props;
    console.log(location.state.title);
    
    return (
      <div>
        { location.state.title }
      </div>
    );
  }
}

export default Detail;