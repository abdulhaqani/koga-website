import React, { useState, useEffect } from 'react';
import { Grid, Embed } from 'semantic-ui-react';
//import '../scss/video.scss';

const VideoGrid = ({ videos }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update the screen width state
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    // Event listener to update the screen width on window resize
    window.addEventListener('resize', updateScreenWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []); // Empty dependency array to run the effect only once

  const desiredWidth = 400; // Width of each video

  const calculateColumns = () => {
    // Calculate the number of columns based on screen width
    console.log(Math.floor(screenWidth / desiredWidth));
    return Math.floor(screenWidth / desiredWidth);
  };

  const gridColumns = calculateColumns();

  console.log(gridColumns);
  return (
    <Grid columns={2} stackable>
      {videos.map((video) => (
        <Grid.Column
          key={video.id}
          className="video-grid"
          style={{
            padding: '2%',
            minWidth: `${desiredWidth}px`,
            width: '100%',
          }}
        >
          <Embed
            id={video.id}
            source="youtube"
            active={true}
            iframe={{
              allowFullScreen: true,
              style: { width: '100%' },
            }}
          />
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default VideoGrid;
