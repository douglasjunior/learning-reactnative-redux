import React from 'react'
import { Router as RT, Scene } from 'react-native-router-flux'

import List from './components/List'
import PostDetail from './components/PostDetail'

const Router = (props) => {

    return (
        <RT sceneStyle={{ paddingTop: 65 }}>
            <Scene key="list" component={List} title="Lista de Posts" />
            <Scene key="postDetail" component={PostDetail} title="Post" />
        </RT>
    )
}

export default Router