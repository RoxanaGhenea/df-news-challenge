import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import * as React from 'react';
import './HeadlineItem.css';

const HeadlineItem = ({ id, sectionName, webPublicationDate, fields: { headline, byline, thumbnail }, setShowSearch }) => {
  const issueDate = React.useMemo(() => new Date(webPublicationDate).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }), [webPublicationDate]);

  const onArticleClick = React.useCallback(() => setShowSearch(false), [setShowSearch]);

  return (
    <div className='header-container'>
      <img className='news-image' src={thumbnail} alt="Thumbnail" />
      <div className='info-panel'>
        <div className='section-name'>{sectionName}</div>
        <NavLink className='article-summary' to={`/article/${id}`} onClick={onArticleClick}>{headline}</NavLink>
        <div className='details-row'>
          <div className='author'>By {byline}</div>
          <div className='date'>{issueDate}</div>
        </div>
      </div>
    </div>
  )
}

HeadlineItem.propTypes = {
  id: PropTypes.string.isRequired,
  sectionName: PropTypes.string.isRequired,
  webPublicationDate: PropTypes.string.isRequired,
  fields: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    byline: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  setShowSearch: PropTypes.func.isRequired,
};

export default HeadlineItem;