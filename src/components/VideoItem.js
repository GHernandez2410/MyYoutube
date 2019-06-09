import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect, addToQueue}) => {
    
    return(
        <div className="ui special cards">
            <div className="card" style={{background: 323639}} >
                <div className="blurring dimmable image">
                    <div className="ui dimmer">
                        <div className="content">
                            <div className="center">
                                <div className="ui inverted button">Add Friend</div>
                            </div>
                        </div>
                    </div>
                    <div onClick={()=>onVideoSelect(video)} className="video-item">
                        <img 
                            alt={video.snippet.title} 
                            className="ui image" 
                            src={video.snippet.thumbnails.medium.url}
                        />       
                    </div>
                </div>
                <div className="content">
                    <div className="header">
                        {video.snippet.title}
                    </div>
                </div>
                <div className="extra content" onClick={()=>addToQueue(video)} >
                    <a>
                        <i className="plus circle icon"></i>
                        Add to queue
                    </a>
                </div>
            </div>
        </div>
        
    ) 
};

export default VideoItem;