import React from 'react';

const Artist = (props) => {
  return (
    <div className="artist">
      <img src={props.ArtistImage} className="artist" alt="ArtistImage" />
    </div>
  );
};

export default Artist;
