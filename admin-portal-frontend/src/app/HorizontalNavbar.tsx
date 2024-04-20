'use client'

import React from 'react';
import SearchBar from './SearchBar';
import Image from 'next/image';
import IconSearch from './icons/ic_search.png';
import styles from './HorizontalNavBarStyles'

const HorizontalNavBar: React.FC = () => {
    return (
        <div style={styles.container}>

            <div style={styles.logoContainer}>
                <div style={styles.logoBackground}>
                    <Image
                        src={IconSearch}
                        alt="Image"
                        width={18}
                        height={18}
                        style={{ filter: 'invert(100%)' }}
                    />
                </div>
                <span style={styles.logoText}>Sideline Sidekick</span>
            </div>


            <div style={styles.searchBarContainer}>
                <SearchBar onClear={() => {}} />
            </div>

            <div style={styles.profileContainer}>
                <div style={styles.profileBackground}>
                    <span style={styles.profileLogoText}>PN</span>
                </div>
                <span style={styles.profileText}>Profile Name</span>
            </div>
        </div>
    );
};

export default HorizontalNavBar;

