import React from 'react';
import QueueItem from './QueueItem';

const ReproductionQueue = ({queue, onVideoSelect}) => {

    const reproductionQueue = queue.map((videoInQueue) => {
        return (
            <QueueItem videoInQueue={videoInQueue} onVideoSelect={onVideoSelect}/>
        ) 
    });
    //props.videos
    return <div className="ui mini steps" style={{overflowX: 'auto',background: 323639}}>{reproductionQueue}</div>
};

export default ReproductionQueue;