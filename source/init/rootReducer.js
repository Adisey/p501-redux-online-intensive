/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 31.07.2018
 * Time: 16:56
 */

// Core
import { combineReducers } from 'redux';

// Reducers

import { authReducer as auth } from '../bus/auth/reducer';
import { loginReducer as login } from '../bus/login/reducer';
import { postsReducer as posts } from '../bus/posts/reducer';
import { profileReducer as profile } from '../bus/profile/reducer';
import { uiReducer as ui } from '../bus/ui/reducer';

export const rootReducer = combineReducers({
    auth,
    login,
    posts,
    profile,
    ui,
});
