// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router-dom';

// Routes
import Private from './Private';
import Public from './Public';

// Components
import { Loading } from '../components';

// Actions
import { authAction } from '../bus/auth/actions';
import { socketActions } from '../bus/socket/action';

// WebSocket
import { joinSocketChannel, socket } from '../init/socket';

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.get('isAuthenticated'),
        isInitialized:   state.auth.get('isInitialized'),
    };
};

const mapDispatchToProps = {
    initializedAsync: authAction.initializedAsync,
    ...socketActions,
};

@hot(module)
@withRouter
@connect(
    mapStateToProps,
    mapDispatchToProps
)
export default class App extends Component {
    componentDidMount () {
        const { initializedAsync, listenConnection } = this.props;

        initializedAsync();
        listenConnection();
        joinSocketChannel();
    }

    componentWillUnmount () {
        socket.removeListener('connect');
        socket.removeListener('disconnect');
    }
    render () {
        const { isAuthenticated, isInitialized, listenPosts } = this.props;

        if (!isInitialized) {
            return <Loading />;
        }

        return isAuthenticated ? <Private listenPosts = { listenPosts } /> : <Public />;
    }
}
