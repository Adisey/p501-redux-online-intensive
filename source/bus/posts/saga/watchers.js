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
import { type } from '../types';

// Workers
import { createPost, fillPosts, removePost, likePost, unLikePost } from './workers';

function* watcherFillPosts () {
    yield takeEvery(type.FETCH_POSTS_ASYNC, fillPosts);
}
function* watcherCratePost () {
    yield takeEvery(type.CREATE_POST_ASYNC, createPost);
}
function* watcherRemovePost () {
    yield takeEvery(type.REMOVE_POST_ASYNC, removePost);
}
function* watcherLikePost () {
    yield takeEvery(type.LIKE_POST_ASYNC, likePost);
}
function* watcherUnLikePost () {
    yield takeEvery(type.UNLIKE_POST_ASYNC, unLikePost);
}
export function* watcherPosts () {
    yield all([
        call(watcherCratePost),
        call(watcherFillPosts),
        call(watcherRemovePost),
        call(watcherLikePost),
        call(watcherUnLikePost)
    ]);
}
