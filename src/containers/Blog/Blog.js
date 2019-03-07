import React, { Component } from 'react';
import axios from 'axios'

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {posts: [], selectedPostId: null, error: false}

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
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

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id})
    }

    render () {
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
            <div>
                <section className="Posts">
                    {content}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;