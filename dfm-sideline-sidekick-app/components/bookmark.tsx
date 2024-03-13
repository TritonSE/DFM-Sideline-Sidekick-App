import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";

import { BookmarkIcon, BookmarkTag } from "../icons/bookmarkIcon";

import { createBookmark, deleteBookmark, findBookmark } from "./bookmarkRoutes";

type bookmarkProps = {
  item: object | undefined;
};

export const Bookmark: React.FC<bookmarkProps> = ({ item }) => {
  const [selectedItemId, setSelectedItemId] = useState(0);

  useEffect( ()=>{
    async function checkExistence() {
      const exists = await findBookmark(item);
      if (exists) {
        setSelectedItemId(1);
      }
    }
    void checkExistence();
  }, []);

  const handleBookmarkClick = () => {
    if (selectedItemId === 0) {
      void createBookmark(item);
      setSelectedItemId(1);
    } else {
      void deleteBookmark(item);
      setSelectedItemId(0);
    };
  };

  return (
    <TouchableOpacity
      onPress={() => {
        handleBookmarkClick();
      }}
    >
      {selectedItemId === 1 ? (
        <BookmarkTag fillColor={"#001F3F"} />
      ) : (
        <BookmarkIcon fillColor={"#001F3F"} />
      )}
    </TouchableOpacity>
  );
};
