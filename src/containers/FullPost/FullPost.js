import React, { Component } from 'react';
import axios from '../../axios'

import './FullPost.css';

class FullPost extends Component {

    state = {loadedPost: null}

    getPostId = () => {
        console.log(this.props.match.params.id)
        return Number(this.props.match.params.id)
    }

    loadData = () => {
        // If nothing is selected
        if (this.getPostId() === null) {
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
        if (this.state.loadedPost != null && this.state.loadedPost.id === this.getPostId()) {
            return;
        }
        // The post changed, so fetch it from the backend.
        axios.get("/posts/" + this.getPostId())
            .then(response => {
                this.setState({loadedPost: response.data})
            })
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    deletePostHandler = () => {
        axios.delete("/posts/" + this.state.loadedPost.id)
            .then(response => console.log(response))
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.getPostId() === null) {
            post = <p style={{textAlign: 'center'}}>Loading...</p>;
        }
        // if (this.state.loadedPost) {
        //     console.log(this.state.loadedPost.id);
        // }
        if (this.state.loadedPost !== null && this.state.loadedPost.id === this.getPostId()) {
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