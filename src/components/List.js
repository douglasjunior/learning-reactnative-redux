import React, { Component } from 'react'
import {
    Text,
    View,
    ScrollView
} from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Actions, ActionConst } from 'react-native-router-flux'

import ListItem from './ListItem'

class List extends Component {

    state = {}

    componentDidMount() {
        this.setState({
            loading: true
        })
        this.props.fetchPosts(() => {
            this.setState({
                loading: false
            })
        });
    }

    componentDidUpdate() {
        console.log("List.componentDidUpdate")
    }

    onItemPress(item) {
        Actions.postDetail({ postId: item.id, type: ActionConst.PUSH });
    }

    render() {
        const { posts } = this.props;

        if (this.state.loading || !posts) {
            return (
                <Text>Carregando...</Text>
            )
        }

        const itemsPosts = posts.map((post, index) => (
            <ListItem key={post.id} item={post} onItemPress={this.onItemPress.bind(this)} />
        ));

        return (
            <ScrollView>
                {itemsPosts}
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.all
    }
}

import { fetchPosts } from '../actions'

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchPosts: fetchPosts
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List)