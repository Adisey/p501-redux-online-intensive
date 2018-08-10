/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 05.08.2018
 * Time: 10:44
 */

//Core
import { all, call } from 'redux-saga/effects';

// Wathers
import { watcherPosts } from '../bus/posts/saga/watchers';
import { watchAuth } from '../bus/auth/saga/watchers';
import { watchAuthL } from '../bus/login/saga/watchers';

export function* rootSaga () {
    yield all([call(watcherPosts), call(watchAuth), call(watchAuthL)]);
}
