import React from 'react'
import { Router as RT, Scene, Actions } from 'react-native-router-flux'

import List from './components/List'
import PostDetail from './components/PostDetail'
import PostNew from './components/PostNew'
import PostEdit from './components/PostEdit'

const Router = (props) => {

    return (
        <RT sceneStyle={{ paddingTop: 65 }}>
            <Scene
                key="list"
                component={List}
                title="Lista de Posts"
                rightTitle="Novo"
                onRight={() => Actions.postNew()}
            />
            <Scene
                key="postDetail"
                component={PostDetail}
                title="Post"
                rightTitle="Editar"
                onRight={() => Actions.postEdit()}
            />
            <Scene key="postNew" component={PostNew} title="Novo Post" />
            <Scene key="postEdit" component={PostEdit} title="Editar Post" />
        </RT>
    )
}

export default Router