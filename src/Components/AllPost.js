import React from 'react';
import {connect} from 'react-redux'
class AllPost extends React.Component {
    render() {
    return (<>{this.props.addpost.post}</>);
    }
}

const select = state => state;
export default connect(select)(AllPost);