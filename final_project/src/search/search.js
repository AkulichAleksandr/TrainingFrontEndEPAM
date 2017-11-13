import React, { Component } from 'react';
import './search.css';

export class Search extends Component {
    constructor(props){
        super(props);
        this.curFilter = this.curFilter.bind(this);
    }
    curFilter(event){
        let curArray = this.props.data.filter((item) => {
           let curAbbr = item.Abbr.toUpperCase();
           let inputVal = event.target.value.toUpperCase();
           return curAbbr.indexOf(inputVal) === 0;
        });
        this.props.searchCallback(curArray);
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