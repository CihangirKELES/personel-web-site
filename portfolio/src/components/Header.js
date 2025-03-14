import React, { useContext } from 'react';
import { myContext } from '../context/myContext';

const Header = () => {
  const { english, languageHandler, darkModeHandler, theme } = useContext(myContext);

  //tema değiş. kont.
  const handleDarkModeChange = (e) => {
    darkModeHandler(e.target.checked ? 'dark' : 'light');
  };

  return (
    <div className="items-center justify-end text-xs flex flex-row pt-8">
      <div className="flex justify-end flex-row ps-3 pe-6">
        <p
          onClick={languageHandler}
          className="font-inter font-bold text-base leading-5 tracking-wider text-white"
        >
          {english ? (
            <span className="dark:text-[#777777]">
              <span className="font-inter font-bold text-base leading-5 tracking-wider text-[#CBF281] hover:text-[#BAB2E7] dark:hover:text-white dark:text-[#BAB2E7]">
                TÜRKÇE </span> 'YE GEÇ
            </span>
          ) : (
            <span className="dark:text-[#777777]">
              {'SET TO ' }
              <span className="font-inter font-bold text-base leading-5 tracking-wider text-[#CBF281] hover:text-[#BAB2E7] dark:hover:text-white dark:text-[#BAB2E7]">
                ENGLISH
              </span>
            </span>
          )}
        </p>
      </div>

      <div className="dark-mode flex items-center ps-4">
        <input
          type="checkbox"
          id="dark-mode__switch"
          checked={theme === 'dark'}
          onChange={handleDarkModeChange}
        />
        <label htmlFor="dark-mode__switch"> </label>

        <p className="font-inter font-bold text-base leading-4 tracking-wider pl-1 text-[#4731D3] dark:text-[#D9D9D9]">
          {theme === 'dark' 
            ? (!english ? 'DARK MODE' : 'GECE MODU') 
            : (english ? 'DARK MODE' : 'GECE MODU')}
        </p>
      </div>
    </div>
  );
};

export default Header;
