import {Component} from 'react';

class Article extends Component {
    render() {
        console.log(this.props)
        return (
            <article>{this.props.prof}; {this.props.male}</article>
        )
    }
};

export default Article;