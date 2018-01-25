import React from 'react'

function Comment({comment}){
    return(
           <div className="arcticle__comment">
	           	<div className="comment__user">{comment.user}</div>
	           	<div className="comment__text">{comment.text}</div>
           </div>
    )
}

export default Comment;