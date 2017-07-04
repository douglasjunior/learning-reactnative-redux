import React, { Component } from 'react'
import {
    Text,
    View,
    ScrollView,
    TextInput,
    Button
} from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import PostForm from './PostForm'

class PostNew extends Component {

    componentDidMount() {
        const { changePostTitle, changePostBody } = this.props;
        changePostTitle('');
        changePostBody('');
    }

    onOkPress = () => {
        const { createPost, title, body } = this.props;

        createPost({ title, body });

        Actions.pop()
    }

    onCancelPress = () => {
        Actions.pop()
    }

    render() {
        return (
            <PostForm {...this.props} onCancelPress={this.onCancelPress} onOkPress={this.onOkPress} />
        )
    }
}

const mapStateToProps = ({ postForm }) => ({
    title: postForm.title,
    body: postForm.body
})

import { changePostTitle, changePostBody, createPost } from '../actions'

const mapDispatchToProps = {
    changePostTitle,
    changePostBody,
    createPost
}

export default connect(mapStateToProps, mapDispatchToProps)(PostNew)