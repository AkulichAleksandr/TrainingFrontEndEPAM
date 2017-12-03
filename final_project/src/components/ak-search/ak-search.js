import React from 'react';
import './ak-search.css';

export class Search extends React.Component {
    constructor(props){
        super(props);
        this.curFilter = this.curFilter.bind(this);
    }
    curFilter(event){
        this.props.searchCallback(event.target.value);
      }

    render() {
        return (
            <div className="ak-search">
                <form className="ak-search__item">
                    <input className="ak-search__input" type="text" placeholder="Search Input" size="10" onChange={this.curFilter}/>
                    <input className="ak-search__button" type="button" value="Search" />
                </form>
            </div>
        );
    }
}