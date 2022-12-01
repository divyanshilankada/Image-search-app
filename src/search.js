import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './search.css';

function Search() {

    const [imageDetails, setImageDetails] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [searchData, setSearchData] = useState([]);
    const [bookmarkData, setBookmarkData] = useState([]);

    useEffect(() => {

        //e.preventDefault();
      fetch('https://api.unsplash.com/photos/?client_id=RFvBrIezqSrvTvZCY5daeYUlmnpxOwAbsKdbg5hu_Vs')
        .then(response => response.json())
        .then(data => setImageDetails(data))
        .then(error => console.log(error));

    },[]);

    console.log(imageDetails);

    function handleSearchInput(e)
    {
        let input = e.target.value;
        //console.log(input);
        setSearchValue(input);
    }

    function handleSubmit()
    {

        let arr = [];
        console.log("submit");

        let search = searchValue.toLowerCase();

        if(searchValue !== "")
        {

            console.log("not empty search value");

            for(let i=0; i<imageDetails.length; i++)
            {
                if(imageDetails[i].alt_description !== null)
                {
                    let alt_desc = imageDetails[i].alt_description.split(" ");

    
                    for(let j=0 ; j<alt_desc.length; j++)
                    {
                        console.log(alt_desc, search);
                        
                        if(alt_desc[j].toLowerCase() == search)
                        {
                            console.log("search exist");
                            arr.push(imageDetails[i]);
                            break;
                        }
                    }
                }
                
            }
        }
        else
        {
            setSearchData([]);
        }

        setSearchData([...arr])
    }

    function handleBookmark(e)
    {
        let arr = bookmarkData;
        let flag = true;

        for(let i=0; i<arr.length; i++)
        {
            if(arr[i] === e.target.id)
            {
                flag = false;
            }
        }

        if(flag)
        {
            arr.push(e.target.id);
            setBookmarkData([...arr]);
        }
        
    }

    console.log(bookmarkData);


  return (
    <div className="App">
        <div className='photo_search_container'>
            <div className='photo_search_box'>
                <header className='photo_search_header'>
                    <h1>React Photo Search</h1>
                    <Link to="/bookmark" state={bookmarkData} className='bookmark_link'>Bookmarks</Link>
                </header>

                <div className='search_input_container'>
                    <input type="text" className='search_box' placeholder='Search' value={searchValue} onChange={handleSearchInput}></input>
                    <button className='submit_button' onClick={handleSubmit}>Submit</button>
                </div>

                <div className='images_box'>
                    {searchData.length === 0 ? <></> : searchData.map((image,i) => 

                         <div className='images' id={image.id} onClick={handleBookmark} key={i} >
                            <img id={image.id} key={i} src={image.urls.full} alt={image.alt_description}></img>
                            <p className='hide' id={image.urls.full} >Add to Bookmark</p>
                         </div>
                    
                    )}
                    
                </div>
            </div>
        </div>
    </div>
  );
}

export default Search;
