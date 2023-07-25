"use client";
import React, { useState } from "react";
import BookCategory from "@/mocks/BookCategory.json";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  const [searchName, setSearchName] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  return (
    <div className="flex items-center bg-primaryLight rounded-full">
      <form className="flex items-center ml-4 gap-10">
        <input
          className="bg-transparent focus:outline-none p-2 w-[600px]"
          type="text"
          placeholder="Search Products..."
          onChange={(e) => {
            setSearchName(e.target.value);
          }}
        />
        <select
          id="book"
          name="bookCategorys"
          onChange={(e) => {
            setSearchCategory(e.target.value);
          }}
          className="bg-transparent focus:outline-none w-32"
        >
          {BookCategory.map((category, i) => {
            return (
              <option key={i} value={category.name}>
                {category.name}
              </option>
            );
          })}
        </select>
        <button
          type="submit"
          className="px-12 bg-primary text-white rounded-full h-12"
        >
          <AiOutlineSearch className={"w-5 h-5"} />
        </button>
      </form>
    </div>
  );
};

export default Search;
