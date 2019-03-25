import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom'
import FullPost from '../../containers/FullPost/FullPost';

import NewPost from '../../containers/NewPost/NewPost';
import Posts from '../../containers/Posts/Posts';
import classes from './Blog.css'

class Blog extends Component {

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                exact
                                to="/"
                                // activeClassName="my-active"
                                // activeStyle={{
                                //     color: '#fa923f',
                                //     textDecoration: 'underline'
                                // }}
                                >Home</NavLink></li>
                            <li><NavLink to="/new-post">New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/" exact component={Posts}/>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/:id" exact component={FullPost}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;