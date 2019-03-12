import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import classes from './Posts.module.css'

import axios from '../../axios'

class Posts extends Component {

    state = {posts: [], selectedPostId: null, error: false}

    componentDidMount() {
        axios.get("/posts")
            .then(response => {
                const posts = response.data.slice(0, 4)
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: "Max"
                    }
                })
                this.setState({posts: updatedPosts})
            })
            .catch(error => {
                this.setState({error: true})
            })
    }
    
    render() {
        let content = <p style={{textAlign: 'center'}}>There was an error loading the posts.</p>;
        if (!this.state.error) {
            content = this.state.posts.map(post => {
                return (
                    <Post 
                        key={post.id}
                        author={post.author}
                        title={post.title}
                        clicked={ () => this.postSelectedHandler(post.id) }
                    />
                )
            })
        }

        return (
            <section className={classes.Posts}>
                {content}
            </section>
        )
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id})
    }
};

export default Posts;