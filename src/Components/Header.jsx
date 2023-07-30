import * as React from "react";
import "./Header.css";
import PropTypes from 'prop-types';

const NavBar = ({ sections, searchValue, setSearch, showSearch }) => {
    const [searchText, setSearchText] = React.useState(searchValue);
    const sectionComponents = React.useMemo(() => {
        const components = sections.map(section => {
            const link = "/home?section=" + section;
            return <li className="nav-item" key={section}>
                <a className="nav-link" aria-current="page" href={link}>{section}</a>
            </li>
        })
        components.push(
            <li className="nav-item" key='Others'>
                <a className="nav-link" aria-current="page" href='/home?section=Others'>Others</a>
            </li>
        )
        return components;
    }, [sections]);

    const onTextChange = React.useCallback((e) => setSearchText(e.target.value), [setSearchText]);
    const onSearchClick = React.useCallback(() => setSearch(searchText), [searchText, setSearch]);

    return (
        <nav className="navbar navbar-expand-lg bg-black">
            <div className="container-fluid">
                <a className="navbar-brand" href="/home?">NewsHub</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {sectionComponents}
                    </ul>
                    {showSearch && <div className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" value={searchText} aria-label="Search" onChange={onTextChange} />
                        <button className="btn btn-outline-light" onClick={onSearchClick}>Search</button>
                    </div>}
                </div>
            </div>
        </nav>
    )
}

NavBar.propTypes = {
    sections: PropTypes.arrayOf(PropTypes.string.isRequired),
    searchValue: PropTypes.string.isRequired,
    setSearch: PropTypes.func,
    showSearch: PropTypes.bool.isRequired,
}

export default NavBar;