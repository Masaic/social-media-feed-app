import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions';
import Post from './post';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgurl: '',
            post: ''
        };
    }

    handleImgurlChange = (event) => {
        this.setState({ imgurl: event.target.value });
    }

    handlePostChange = (event) => {
        this.setState({ post: event.target.value });
    }

    handleClickPost = () => {
        const newPost = {
            imgurl: this.state.imgurl,
            post: this.state.post
        }
        this.props.addPost(newPost);
    }

    renderList = () => {
        return this.props.postList.map((ele, index) => {
            return <Post key={index} post={ele}></Post>
        });
    }

    render() {
        return <div className="container text-center">
            <form>
                <div className="form-label-group">
                    <label>
                        img URL 
                <input className="myInput" type="text" name="imgurl" value={this.state.imgurl} onChange={this.handleImgurlChange} />
                    </label>
                </div>
                <div className="form-label-group">
                    <label>
                        Post
                <input className="myInput" type="text" name="post" value={this.state.post} onChange={this.handlePostChange} />
                    </label>
                </div>
                <button type="button" onClick={this.handleClickPost}>New Post</button>
            </form>
            {this.renderList()}
        </div>
    }

}

const mapStateToProps = (state) => {
    return {
        postList: state.postList,
    };
}

export default connect(mapStateToProps, { addPost })(App);