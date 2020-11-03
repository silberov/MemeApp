import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = { searchedValue: '' }
    }
    handleChange = (event) => {
        this.setState({searchedValue: event.target.value})
        console.log(event.target.value)
        //this.props.onSearch(this.state.searchedValue)
        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("event", event.target.searchedValue)
        this.props.onSearch(this.state.searchedValue)
    }

    render() {
        console.log("search", this.props);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="search" />
                    <input type="submit" value="submit" />
                </form>
            </div>
        );
    }
}

export default SearchBar;