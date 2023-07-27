import PropTypes from 'prop-types';

const HeadlineItem = ({id, sectionName, webPublicationDate, webUrl, apiUrl, fields: { headline, byline, thumbnail } }) => {
    const issueDate = new Date(webPublicationDate).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
  
    return (
        <>
            <div>{issueDate}</div>
            <img src={thumbnail} alt="Thumbnail" />
            <div>{headline}</div>
            <div>{byline}</div>
            
        </>
    )
}

HeadlineItem.propTypes = {
    id: PropTypes.string.isRequired,
    sectionName: PropTypes.string.isRequired,
    webPublicationDate: PropTypes.string.isRequired,
    webUrl: PropTypes.string.isRequired,
    apiUrl: PropTypes.string.isRequired,
    fields: PropTypes.shape({
      headline: PropTypes.string.isRequired,
      byline: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
  };

export default HeadlineItem;