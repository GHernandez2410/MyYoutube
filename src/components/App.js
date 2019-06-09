import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import ReproductionQueue from './ReproductionQueue';

class App extends React.Component {
    state = { videos: [] , selectedVideo: null, queue: [], MybackgroundColor: '323639' }; 

    componentDidMount() {
        this.onTermSubmit('j cole');
    };

    onTermSubmit = async(term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0]});
    };

    onVideoSelect =  (video) => {
        this.setState({selectedVideo: video});
    };

    changeBackground = () => {
        if(document.body.style.backgroundColor === 'grey'){
            document.body.style.backgroundColor = 'white';
        } else {
            document.body.style.backgroundColor = 'grey';
        }
    }

    addToQueue = (video) => {
        var queue = this.state.queue;
        queue.push(video);
        this.setState({queue:queue});
    }

    /* programarAviso = (video) => {      
        setTimeout(function(){setSongFromQueue(this.state.queue[this.state.queue.lenght])},3000); // 3000ms = 3s    	
    } */

    render() {
        return (
        <div className="ui container">
            <div className="ui grid">
                <div className="eleven wide column">
                    <SearchBar onFormSubmit={this.onTermSubmit}/>
                </div>
                <div className="five wide coulmn toogle" >
                    <div className="ui toggle checkbox" >
                        <input type="checkbox" name="public" onChange={this.changeBackground}/>
                        <label>Cinema mode</label>
                    </div>
                </div>
                
            </div>
            <div className="ui grid">
                <div className="eleven wide column">
                    <ReproductionQueue onVideoSelect={this.onVideoSelect} queue={this.state.queue} style={{MybackgroundColor: '323639'}}/>
                </div>
            </div>
            <div className="ui grid">           
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} addToQueue={this.addToQueue}/>
                    </div>
            </div>
        </div>
        );
    }
}


export default App;