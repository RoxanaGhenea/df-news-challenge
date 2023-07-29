import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';

const Navigate = ({ to }) => {
    const navigate = useNavigate();
    navigate(to);
    navigate(0);
    return <></>
}

Navigate.propTypes = {
    to: PropTypes.string.isRequired,
}

export default Navigate;

