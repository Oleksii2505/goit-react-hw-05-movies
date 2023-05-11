import React, { useState } from "react";
import Notiflix from 'notiflix';
import { FaSistrix } from 'react-icons/fa';
import {
    SearchBarHeader,
    SearchForm,
    SearchInput,
    SearchFormBtn,
    SearchFormBtnLabel,
  } from './SearchForm.styled';

export const SearchBar = ({onSubmit}) => {
    const [searchQuery, setSearchQuery] = useState("");

    const onChange = ({ target }) => {
        setSearchQuery(target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchQuery.trim() === "") {
            Notiflix.Notify.warning('Enter title of movie to search');
            return;
          }
        onSubmit(searchQuery);
        
    }

    return (
      <SearchBarHeader>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormBtn type="submit" className="button">
            <FaSistrix size="24px" fill="#fff" />
            <SearchFormBtnLabel className="button-label">
              Search
            </SearchFormBtnLabel>
          </SearchFormBtn>

          <SearchInput
            type="text"
            autoComplete="off"
            name="search"
            autoFocus
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={onChange}
          />
        </SearchForm>
      </SearchBarHeader>
    )

}