/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 05.08.2018
 * Time: 11:29
 */

// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { CREATE_POST_ASYNC } from '../types';

// Workers
import { createPost } from './workers';

function* watcherCratePost () {
    yield takeEvery(CREATE_POST_ASYNC, createPost);
}
export function* watcherPosts () {
    yield all([call(watcherCratePost)]);
}