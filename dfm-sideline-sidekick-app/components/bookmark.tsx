import { TouchableOpacity } from "react-native";
import { BookmarkIcon, BookmarkTag } from '../icons/bookmarkIcon';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from "react";
import {getAllBookmarks, createBookmark, deleteBookmark} from './bookmarkRoutes'


type bookmarkProps = {
    PageName: string;
  };

export const Bookmark: React.FC<bookmarkProps> = ({ PageName }) =>{
    const [selectedItemId, setSelectedItemId] = useState(0);

    const handleBookmarkClick = () => {
        selectedItemId === 0 ? (
            createBookmark(PageName),
            setSelectedItemId(1)
        ) : (
            getAllBookmarks(),
            deleteBookmark(PageName),
            setSelectedItemId(0)
        );
    };

    return (
        <TouchableOpacity
        onPress={() => {
          handleBookmarkClick();
        }}
      >
        {selectedItemId === 1 ? <BookmarkTag fillColor={"#001F3F"}/>: <BookmarkIcon fillColor={"#001F3F"}/>}
          
        </TouchableOpacity>
    );
  };
