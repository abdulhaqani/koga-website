import React, { useState, useEffect } from 'react';
import { Grid, Embed } from 'semantic-ui-react';
import '../scss/default.scss';
import '../scss/video.scss';

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
  const desiredHeight = 225; // Width of each video

  const calculateColumns = () => {
    // Calculate the number of columns based on screen width
    console.log(Math.floor(screenWidth / desiredWidth));
    return Math.floor(screenWidth / desiredWidth);
  };

  const calculateVideoWidth = () => {
    if (screenWidth < 800) {
      return '98%'; // Set video width to 100% when screen width is less than desired width
    } else if (screenWidth < 1400) {
      return '50%'; // Use the default width when screen width is greater than or equal to desired width
    } else {
      return '33%';
    }
  };

  console.log(screenWidth);
  return (
    <Grid columns={2} stackable>
      {videos.map((video) => (
        <Grid.Column
          key={video.id}
          className="video-grid"
          style={{
            minWidth: `${desiredWidth}px`,
            minHeight: `${desiredHeight}px`,
            width: calculateVideoWidth(),
            padding: '2%',
            margin: 'auto',
          }}
        >
          <p className="video-label center">{video.label}</p>
          <Embed
            id={video.id}
            source="youtube"
            active={true}
            iframe={{
              allowFullScreen: true,
              style: {
                width: '100%',
                borderStyle: 'inset',
                borderWidth: '1px',
              },
            }}
          />
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default VideoGrid;
