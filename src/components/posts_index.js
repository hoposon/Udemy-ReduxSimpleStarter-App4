import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { fetchPosts } from '../actions';


class PostsIndex extends Component {

    // lifecycle method that is called by React if it finds it
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            )
        });
    }
    
    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>  
                    <ul className="list-group">
                        {this.renderPosts()}
                    </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {posts: state.posts};
}


export default connect(mapStateToProps, { fetchPosts })(PostsIndex);

// export default connect(null, { fetchPosts })(PostsIndex);
// ES6 for
// export default connect(null, {fetchPosts: fetchPosts })(PostsIndex);
// we are also not using the same think that we used before
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ fetchWeather }, dispatch);
// }

// export default connect(null, mapDispatchToProps)(SearchBar);
