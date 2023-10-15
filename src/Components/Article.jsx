import PropTypes from "prop-types";
import * as React from 'react';
import './Article.css';

const Article = ({ article }) => {
    const issueDate = React.useMemo(() => new Date(article.webPublicationDate).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }), [article.webPublicationDate]);
    return (
        <div className="article">
            <div className='section-name'>{article.sectionName}</div>
            <div className="image-container">
                <img className="image-container" src={article.fields.thumbnail} alt="Thumbnail" />
            </div>
            <div className='article-title'>{article.fields.headline}</div>
            {article.fields.bodyText}
            <div className='article-info'>
                <div className='author'>By {article.fields.byline}</div>
                <div className='date'>{issueDate}</div>
            </div>
        </div>
    )
}

Article.propTypes = {
    article: PropTypes.shape({
        id: PropTypes.string.isRequired,
        sectionName: PropTypes.string.isRequired,
        webPublicationDate: PropTypes.string.isRequired,
        webUrl: PropTypes.string.isRequired,
        apiUrl: PropTypes.string.isRequired,
        fields: PropTypes.shape({
            headline: PropTypes.string.isRequired,
            byline: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            bodyText: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired
}

export default Article;