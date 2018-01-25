import React, {Component} from 'react'
import Comment from './comment'

class Articles extends Component{
    state = {isOpen : false};
    render(){
        const article = this.props.article;
        const comments = article.comments && this.state.isOpen ? <div className="arcticle__comments">{article.comments && article.comments.map((comment, idx) => <Comment key = {idx} comment = {comment}/>)}</div> : null;
        const button = article.comments ? <button onClick={this.toggleOpen}>{this.state.isOpen ? 'Close Comment' : 'Open Comment'}</button> : null;

        return(
            <article className="article">
                <div className="arcticle__title">{article.title}</div>
                <div className="arcticle__date">{article.date}</div>
                <div className="arcticle__text">{article.text}</div>
                {button}
                {comments}
            </article>
        )
    }
    toggleOpen = () => {
        this.setState({ isOpen : !this.state.isOpen })
    }
}

export default Articles;