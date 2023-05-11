import React from 'react'

const StarRating = ({rate, handleRating}) => {
  const Stars =(s) => {
    let tabStar = [];
    for (let i = 0; i < 5; i++) {
      if (i <= s){tabStar.push(<span onClick={()=>handleRating(i)} className="gold-star" > ★</span>);}
      else (tabStar.push(<span onClick={()=>handleRating(i)} className="black-star"> ★</span>))
    } return tabStar;
  };
  return (
    <div>{Stars(rate)}</div>
  )
};

export default StarRating