import React from 'react';

class SearchBar extends React.Component {
    state = { term : '', backgroungColor:''};

    onInputChange = (event) => {
        this.setState({term: event.target.value});
        document.body.style.backgroundColor = this.state.backgroundColor;
    };

    onFormSubmit = (event) => {
        //es un arrow function porque se llama de un callback function que se le pasa un elemento de un hijo
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className="row">
                <div className="search-bar search-margin ui segment" style={{background: 323639}}>
                    <form onSubmit={this.onFormSubmit} className="ui form">
                        <div className="field" style={{background: 323639}}>
                            <label>Video Seach</label>
                            <div className="ui icon input">
                                <i className="search icon"></i>
                                <input type="text" value={this.state.term} onChange={this.onInputChange}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;