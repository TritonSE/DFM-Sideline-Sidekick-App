import React from 'react';
import styles from './SearchBarStyles';
import searchIcon from '../icons/ic_search_grey.png'
import Image from 'next/image';

interface SearchBarProps {
  onClear: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onClear }) => {
  return (
    <div>
      <div style={styles.searchSection}>
        <div>
            <Image src={searchIcon} alt="Search" style={styles.searchIcon} />
        </div>
              <input
          style={styles.input}
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default SearchBar;
