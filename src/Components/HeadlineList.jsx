import PropTypes from 'prop-types';
import HeadlineItem from './HeadlineItem';
import { useSearchParams } from 'react-router-dom';
import * as React from 'react';
import './HeadlineList.css';

const HeadlineList = ({ headlineData, sections, searchValue, setShowSearch }) => {
    const [searchParams, _] = useSearchParams();

    const sectionFilter = React.useMemo(() => searchParams.get('section'), []);

    const searchedHeadlineData = React.useMemo(() => headlineData.filter(
        headline => headline.fields.headline.toLowerCase().indexOf(searchValue.toLowerCase()) != -1
    ), [headlineData, searchValue]);
    const sectionHeadlineData = React.useMemo(() => searchedHeadlineData.filter(headline =>
        sectionFilter == null ||
        headline.sectionName === sectionFilter ||
        (sectionFilter == 'Others' && !sections.includes(headline.sectionName))
    ), [searchedHeadlineData, sectionFilter]);
    const headlinesTable = React.useMemo(() => sectionHeadlineData.map(headline => {
        return <HeadlineItem {...headline} key={headline.id} setShowSearch={setShowSearch} />;
    }), [sectionHeadlineData]);

    return (
        <>
            <div className='headline-list'>
                {headlinesTable}
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