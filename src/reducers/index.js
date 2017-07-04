import { combineReducers } from 'redux'

import PostsReducer from './PostsReducer'
import PostFormReducer from './PostFormReducer'

export default combineReducers({
    posts: PostsReducer,
    postForm: PostFormReducer
})