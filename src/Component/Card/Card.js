import React from "react";
// import Movie from "../../img/Movie1.jpg";
import { ButtonBookmark } from "../Button/ButtonBookmark";
import { useData } from "../Utils/DataUseContext";
import { apiUrlImgSm } from "../../Contants";
import { Link } from "react-router-dom";

export const Card = (props) => {
  const { data, updateData } = useData();

  const bookMarkonClick = (isBookmarked) => {
    console.log(isBookmarked);
    const newData = isBookmarked ? data - 1 : data + 1;
    updateData(newData);
  };

  return (
    <div className="Card h-72 aspect-[3/4] bg-slate-600 relative group overflow-hidden">
      <Link to={`/movie/${props.id}`}>
        <div>
          <div
            style={{
              "--image": `url(${apiUrlImgSm + props.background})`,
              height: "100%",
              width: "100%",
            }}
            className="bg-[image:var(--image)] bg-cover group-hover:scale-125 duration-300"
          ></div>
          <div className="absolute bottom-[30] left-[50] text-slate-200">
            <span>{props.title}</span>
          </div>
        </div>
      </Link>
      <div style={{ position: "absolute", top: 0, right: 0, margin: "7px" }}>
        <ButtonBookmark onClick={bookMarkonClick} />
      </div>
    </div>
  );
};
