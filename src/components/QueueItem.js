import React from 'react';

const QueueItem = ({videoInQueue, onVideoSelect}) => {
    return (
            <div className="step" style={{background: 323639}}>
                <div onClick={()=>onVideoSelect(videoInQueue)} className="video-item">
                    <img 
                        alt={videoInQueue.snippet.title} 
                        className="ui avatar image" 
                        src={videoInQueue.snippet.thumbnails.medium.url}
                    />
                    <div className="content">
                        <div className="title">{videoInQueue.snippet.title}</div>
                    </div>  
                </div>
            </div> 
    )
}

export default QueueItem;