import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState<string | "">("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchInput) {
      navigate(`/search/${searchInput}`);
      setSearchInput("");
    }
  };

  return (
    <header className=" w-full  ">
      <form action="" onSubmit={handleFormSubmit}>
        <div className=" rounded-lg bg-Second h-9 flex mx-2 my-1">
          <input
            type="text"
            className="w-[80%] h-full outline-none text-center bg-transparent text-Text"
            placeholder="Search Recipe"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button
            type="submit"
            className="border-l rounded-r-lg border-Third text-white h-full w-[20%] flex justify-center items-center transition duration-300 ease-in-out transform hover:bg-bodyBg hover:border hover:border-black hover:scale-105 active:scale-75"
          >
            <FaSearch className="h-5 w-5" />
          </button>
        </div>
      </form>
    </header>
  );
}

export default SearchBar;
