import { useDispatch } from "react-redux";
import { queryActions } from "../../store";
import { useRef, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

function Search({ onHandleSearchFocused }) {
  const dispatch = useDispatch();
  const timerRef = useRef(null);
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    const { value } = event.target;
    clearTimeout(timerRef.current);

    if (value.length >= 3) {
      timerRef.current = setTimeout(() => {
        dispatch(queryActions.setQuery(value));
      }, 400);
    }
  };

  // to do autofocus in search input field
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="mt-1 flex items-center max-w-[600px] mx-auto animate-fadeIn">
      <div className="relative mx-auto w-[70%]">
        <input
          className="max-h-8 w-full rounded-md border-slate-800 bg-gray-800 px-3 py-2 text-slate-400 opacity-60 shadow-sm backdrop-blur-sm placeholder:italic placeholder:text-slate-400 focus:border-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-700 sm:text-sm"
          placeholder="Search Movies"
          type="text"
          name="search"
          onChange={handleInputChange}
          ref={inputRef}
        />
        <AiOutlineClose
          onClick={onHandleSearchFocused}
          className="absolute right-2 top-1 cursor-pointer text-2xl text-slate-400"
        />
      </div>
    </div>
  );
}

export default Search;
