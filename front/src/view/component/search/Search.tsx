import React from 'react';

import {FiSearch} from "react-icons/fi";

import classNames from 'classnames/bind';
import css from './Search.scss';

const cx = classNames.bind(css);

export interface ISearch {
    action : (value : string) => {}
}

const Search = ( args : ISearch) => {
    const submitHandler = args.action;

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        const value = e.target.searchValue.value;
        submitHandler(value);
    };

    return (
        <form className={cx('searchForm')} onSubmit={(e)=>{searchSubmitHandler(e)}}>
            <input 
                name="searchValue"
                placeholder="검색하기"
                type="text"
                className={cx('searchInput')}
            >
            </input>
            <button type="submit" ><FiSearch size={25} style={{color:'grey'}}/></button>
        </form>
    );
};

export default Search;