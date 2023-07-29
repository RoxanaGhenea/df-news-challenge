import PropTypes from 'prop-types';
import HeadlineItem from './HeadlineItem';
import { useSearchParams } from 'react-router-dom';
import './HeadlineList.css';

const HeadlineList = ({ headlineData, sections, searchValue, setShowSearch }) => {
    let headlineTable = [];
    const [searchParams, _] = useSearchParams();
    const sectionFilter = searchParams.get('section');
    headlineData.forEach(headline => {
        if (sectionFilter != null && sections.includes(sectionFilter) && headline.sectionName != sectionFilter) return;
        if (sectionFilter != null && sectionFilter == 'Others' && sections.includes(headline.sectionName)) return;
        if (headline.fields.headline.toLowerCase().indexOf(searchValue.toLowerCase()) === -1) return;
        headlineTable.push(<HeadlineItem {...headline} key={headline.id} setShowSearch={setShowSearch} />)
    });

    return (
        <>
            <div className='headline-list'>
                {headlineTable}
            </div>
        </>
    )
}

HeadlineList.propTypes = {
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
    sections: PropTypes.arrayOf(PropTypes.string.isRequired),
    searchValue: PropTypes.string.isRequired,
    setShowSearch: PropTypes.func.isRequired,
}

export default HeadlineList;