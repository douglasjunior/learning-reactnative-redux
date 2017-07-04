import React, { Component } from 'react'
import {
    Text,
    View,
    ScrollView
} from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

class PostDetail extends Component {

    state = {}

    componentDidMount() {
        this.props.fetchPost(this.props.postId);
    }

    componentDidUpdate() {
        if (this.props.popScene)
            Actions.pop();
    }

    render() {
        const { post } = this.props;

        if (!post) {
            return (
                <Text>Carregando...</Text>
            )
        }

        return (
            <View>
                <Text style={{ fontSize: 20, textAlign: "center", fontWeight: "bold", padding: 8 }}>{post.title}</Text>
                <Text style={{ padding: 8 }}>{post.body}</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.posts.selected
    }
}

import { fetchPost } from '../actions'

const mapDispatchToProps = {
    fetchPost
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
