import React, { Component } from 'react';
import axios from '../../axios'

import './FullPost.css';

class FullPost extends Component {

    state = {loadedPost: null}

    componentDidUpdate() {
        // If nothing is selected
        if (this.props.id === null) {
            // And there is currently a post displayed
            if (this.state.loadedPost != null) {
                // Get rid of the disoplayed post.
                this.setState({loadedPost: null})
            }
            // We do not want to display anything.
            return;
        }
        // If we have a post in the UI, but it hasn't changed, no need to fetch it from
        // the backend.
        if (this.state.loadedPost != null && this.state.loadedPost.id === this.props.id) {
            return;
        }
        // The post changed, so fetch it from the backend.
        axios.get("/posts/" + this.props.id)
            .then(response => this.setState({loadedPost: response.data}))
    }

    deletePostHandler = () => {
        axios.delete("/posts/" + this.state.loadedPost.id)
            .then(response => console.log(response))
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={{textAlign: 'center'}}>Loading...</p>;
        }
        if (this.state.loadedPost != null && this.state.loadedPost.id === this.props.id) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;