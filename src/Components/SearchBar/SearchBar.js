import React from 'react';

import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }

        this.seacrh = this.seacrh.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    seacrh() {
        this.props.onSearch(this.state.term);
    }

    handleTermChange(event) {
        this.setState({term: event.target.value});
    }

    render() {
        return(
            <div className="SearchBar">
                <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
                <button className="SearchButton"onClick={this.seacrh}>SEARCH</button>
            </div>
        )
    }
}

export default SearchBar;