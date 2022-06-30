import React from "react";

class VideoDetail extends React.Component {
  showContent() {
    if (!this.props.video) return "no video selected yet";
    else return this.props.video.snippet.title;
  }
  render() {
    if (!this.props.video) return "no video selected yet";
    return (
      <div>
        <div className="ui embed">
          <iframe
            src={`https://www.youtube.com/embed/${this.props.video.id.videoId}`}
            title="video player"
          />
        </div>
        <h4>{this.props.video.snippet.title}</h4>
        <p>{this.props.video.snippet.description}</p>
      </div>
    );
  }
}

export default VideoDetail;
