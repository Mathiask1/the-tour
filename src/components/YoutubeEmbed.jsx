import React from "react";
import PropTypes from "prop-types";
import "../styles/Frontpage.css";

const YoutubeEmbed = ({ embedId }) => (
  <div id="youtube-vid-div" >
    <iframe
      id="youtube-vid-iframe"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
