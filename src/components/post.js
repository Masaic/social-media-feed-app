import React from 'react';

function Post(props) {
    return <div>
        <img src={props.post.imgurl}></img>
        <h3>{props.post.post}</h3>
    </div>
}

export default Post;