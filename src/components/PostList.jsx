import React from 'react'
import PostItem from './PostItem'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
const PostList = ({posts, remove}) => {
    if(!posts.length) {
        return (
            <h1 style={{ textAlign: "center" }}>нет ничерта</h1>
        )
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>List Title</h1>
            <TransitionGroup>
                {posts.map((el, index) => 
                    <CSSTransition
                    key={el.id}
                    timeout={500}
                    classNames='post'
                    >
                        <PostItem remove={remove} data={el} number={index + 1}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}

export default PostList