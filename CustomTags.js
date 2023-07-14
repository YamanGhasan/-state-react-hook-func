import React, { useState } from "react";
import "./CustomTags.css";
import CustomizeTagsPic from './CustomizeTagsPic.png'
function ModalTags (){
  

  const favoriteSection= () =>{
    if (favorites.length > 0){
 
  return(
<>
 <span className="itemTitle">Favorites</span>
 
          {favorites.map((item, index) => {
            return (
              <ul className="list-group list-group-flush">
              <div className="rowContainer">
              <div className="title">{item}</div>
              <div className="btnsContainer">
              <Star isSelected={true}
                  onClick={() => {
                    deleteItemFromFavorite(index);
                    setPopularTags((current) => [...current, item]);
                    }}/>
                </div>
              </div>
              </ul>
            );
          })}    
             </>
    
            )}}
 
 
  const Star = ({ isSelected, onClick }) => {
    return (
      <div className="start">
        <button type="button" aria-label="btnName" className="buttonItem" onClick={() => onClick()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isSelected ? "gold" : "gray"}
            className="bi bi-star-fill"
            width="20"
            height="20"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        </button>
      </div>
    );
  };
  
  const XButton = ({ isSelected, onClick }) => {
    return (
      <button type="button" aria-label="btnName" className="buttonItem" onClick={() => onClick()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={isSelected ? "red" : "gray"}
          className="bi bi-x-circle"
          width="20"
          height="20"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>
    );
  };

  const [popularTags, setPopularTags] = useState([
    "9gag",
    "china",
    "messi",
    "elon musk",
    "superman",
    "logo",
    "9gag den deutschen",
    "german",
    "qatar 2022",
  ]);

  const [otherTags, setOtherTags] = useState([
    "anime",
    "girl",
    "school",
    "pubg",
    "overwatch",
    "ask 9gag",
    "comic",
    "cozy",
    "drawing",
    "movie tv ",
    "resident evil",
    "among us",
    "ask 9gag",
    "anime wallpaper",
    "fortnite",
    "girl celebrity",
  ]);

  const [favorites, setFavorites] = useState([]);
  const [hidden, setHidden] = useState([]);

  const filterArrayFromFavorite = (selectedIndex) => {
    setPopularTags((current) => current.filter((item, index) => index !== selectedIndex)
    );
  };

  const deleteItemFromFavorite = (selectedIndex) => {
    setFavorites((current) => current.filter((item, index) => index !== selectedIndex)
    );
  };

  const filterArrayFromOtherFavorite = (selectedIndex) => {
    setOtherTags((current) => current.filter((item, index) => index !== selectedIndex)
    );
  };
  const filterArrayFromothertagstofav = (selectedIndex) => {
    setOtherTags((current) => current.filter((item, index) => index !== selectedIndex)
    );
  };
  const filterArrayFromhidden = (selectedIndex) => {
    setHidden((current) => current.filter((item, index) => index !== selectedIndex)
    );
    
  };
  
  return (
    <>
 <div className="modalbutton">

      <button type="button" className="butn flex-container" data-bs-toggle="modal" data-bs-target="#exampleModal">
     <img src={CustomizeTagsPic} className="ctag"></img>
      </button>
    
      </div>
      <div className="modal fade " id="exampleModal" aria-hidden="true" role="dialog" tabindex="-1" aria-labelledby="exampleModalLabel" >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Customize with Tags</h5>
               
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
    <div className="modal-body">
    {favoriteSection()}
    </div>

            <div className="modal-body">
              <span  className="itemTitle">Explore Popular Tags</span>
              <ul className="list-group list-group-flush">
                {popularTags.map((item, index) => {
                  return (
                    <div className="rowContainer">
                      <div className="title">{item}</div>
                      <div className="btnsContainer">
                        <XButton
                          onClick={() => {
                            filterArrayFromFavorite(index);
                            setHidden((current) => [...current, item]);
                          }}
                        />
                        <Star
                          onClick={() => {
                            filterArrayFromFavorite(index);
                            setFavorites((current) => [...current, item]);
                          }}
                        />

                      </div>
                    </div>
                  );
                })}
              </ul>
            </div>
            <hr></hr>
            <div className="modal-body">
              <span  className="itemTitle">Other Tags</span>
              <ul className="list-group list-group-flush">
                {otherTags.map((item, index) => {
                  return (
                    <div className="rowContainer">
                      <div className="title">{item}</div>
                      <div className="btnsContainer">
                      <XButton
                          onClick={() => {
                            filterArrayFromOtherFavorite(index);
                            setHidden((current) => [...current,item]);
                          }}
                        />
                        <Star
                          onClick={() => {
                            filterArrayFromothertagstofav(index);
                            setFavorites((current) => [...current, item]);
                          }}
                        />

                      </div>
                    </div>
                  );
                })}
              </ul>
            </div>
            <hr></hr>
            <div className="modal-body">
              <span  className="itemTitle">Hidden</span>
              {hidden.map((item, index) => {
                return (
                  <div className="rowContainer">
                    <div className="title">{item}</div>
                    <div className="btnsContainer">
                      <XButton isSelected={true}
                        onClick={() => {
                          filterArrayFromhidden(index);
                          setPopularTags((current) => [...current, item]);
                        }}
                      />
                    </div>
                  </div>
                );
              })}
              <p>Posts from these tags will be filtered from Home page.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
  
export default ModalTags;
