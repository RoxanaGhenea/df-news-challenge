import PropTypes from 'prop-types';
import HeadlineItem from './HeadlineItem';
import HeadlineListStyle from './HeadlineList.css';

const HeadlineList = ({headlineData}) => {

    let headlineTable = [];
    headlineData.forEach(headline => {
        headlineTable.push(<HeadlineItem {...headline} key={headline.id} />)
    });
    const middlePosition = Math.ceil(headlineTable.length / 2);
    const headlineColumn1 = headlineTable.slice(0, middlePosition);
    const headlineColumn2 = headlineTable.slice(-middlePosition);

    return (
        <>
            <div className='row'>
                <div className='col-6'>
                    {headlineColumn1}
                </div>
                <div className='col-6'>
                    {headlineColumn2}
                </div>
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
}

export default HeadlineList;