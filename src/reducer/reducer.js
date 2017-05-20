import {combineReducers} from 'redux';
import articlesReducer from './articles.reducer';
import commentsReducer from './comments.reducer';
import usersReducer from './users.reducer';

export default combineReducers ({
        articles: articlesReducer,
        comments: commentsReducer,
        users: usersReducer
});
