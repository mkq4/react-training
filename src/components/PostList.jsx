import React from 'react'
import PostItem from './PostItem'
const PostList = ({posts, remove}) => {
    return (
        <>
            <h1 style={{textAlign: 'center'}}>List Title</h1>
            {posts.map((el, index) => <PostItem remove={remove} data={el} number={index + 1} key={el.id}/>)}
        </>
    )
}

export default PostList