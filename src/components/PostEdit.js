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

class PostEdit extends Component {

    componentDidMount() {
        const { changePostTitle, changePostBody, selected } = this.props;
        changePostTitle(selected.title);
        changePostBody(selected.body);
    }

    onCancelPress = () => {
        Actions.pop();
    }

    onOkPress = () => {
        const { updatePost, selected, title, body } = this.props;

        updatePost({
            id: selected.id,
            title,
            body
        })

        Actions.pop();
    }

    onDeletePress = () => {
        const { deletePost, selected } = this.props;

        deletePost({ id: selected.id });

        Actions.pop({ refresh: { popScene: true } });
    }

    render() {
        const { post } = this.props;

        return (
            <View>
                <PostForm {...this.props}
                    onCancelPress={this.onCancelPress} onOkPress={this.onOkPress} />
                <Button title="EXCLUIR" onPress={this.onDeletePress} />
            </View>
        )
    }
}

const mapStateToProps = ({ posts, postForm }) => ({
    selected: posts.selected,
    title: postForm.title,
    body: postForm.body,
})

import { changePostTitle, changePostBody, updatePost, deletePost } from '../actions'

const mapDispatchToProps = {
    changePostTitle,
    changePostBody,
    updatePost,
    deletePost
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit)