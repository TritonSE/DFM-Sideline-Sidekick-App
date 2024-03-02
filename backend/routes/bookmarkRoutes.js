import { LocalStorage } from "node-localstorage";
const localStorage = new LocalStorage("./bookmarks");

function createBookmark(name) {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  bookmarks.push({ PageName: name });
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function deleteBookmark(name) {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  const index = bookmarks.findIndex((bookmark) => bookmark.PageName === name);

  if (index !== -1) {
    bookmarks.splice(index, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  } else {
    console.log("Bookmark not found!");
  }
}

function getAllBookmarks() {
  return JSON.parse(localStorage.getItem("bookmarks")) || [];
}

/* uncomment for testing purposes!! 
createBookmark('Example Page');
deleteBookmark('Example Page');
const bookmarks = getAllBookmarks();
console.log(bookmarks);
*/
