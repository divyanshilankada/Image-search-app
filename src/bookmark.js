import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './bookmark.css';
import {useLocation} from "react-router-dom";


function Bookmark() {

    const location = useLocation();
    const bookmarks = location.state
    console.log(bookmarks);

  return (
    <div className="bookmark_container">
       <div className='bookmark_box'>
            <h1>Bookmarks</h1>
            <div className='bookmark_images'>
                {bookmarks.length === 0 ? <></> : bookmarks.map((bookmark, i) => 
                
                    <img key={i} src={bookmark}></img>
                
                )}
            </div>
       </div>
    </div>
  );
}

export default Bookmark;
