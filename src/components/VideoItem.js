import React from "react";
import "../style/VideoItem.css";
class VideoItem extends React.Component {
  onVideoSelected = () => {
    console.log(this.props.video);
    this.props.onVideoSelect(this.props.video);
  };
  render() {
    return (
      <div className="video-item item" onClick={this.onVideoSelected}>
        <img
          className="ui image"
          src={this.props.video.snippet.thumbnails.medium.url}
          alt={this.props.video.snippet.title}
        />
        <div className="content">
          <div className="header">{this.props.video.snippet.title}</div>
          <b>
            <i className="user icon" />
            {this.props.video.snippet.channelTitle}
          </b>
        </div>
      </div>
    );
  }
}

export default VideoItem;
