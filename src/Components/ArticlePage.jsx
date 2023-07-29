import { useParams } from 'react-router-dom';
import PropTypes from "prop-types";
import Article from './Article';

const ArticlePage = ({ headlineData }) => {

    const { id } = useParams();
    const findArticleId = headlineData.find((idToFind) => idToFind.id === id);

    return (
        <>
            {findArticleId && <Article article={findArticleId} />}
            {!findArticleId && <div>Article not found!</div>}
        </>
    )
}

ArticlePage.propTypes = {
    headlineData: PropTypes.arrayOf(
        PropTypes.shape({
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
        })
    ),
}

export default ArticlePage;