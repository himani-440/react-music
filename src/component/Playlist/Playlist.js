import React from "react";

import "./Playlist.css";

import TrackList from "../TrackList/TrackList";

class PlayList extends React.Component{

    handlenameChange = (event) => {
        this.props.onNameChange(event.target.value);
    }

    render() {
        return(
            <div className="PlayList">
                <input onChange={this.handlenameChange} defaultValue={"New Playlist"}/>
                <TrackList track={this.props.PlayListTracks}
                isRemoval={true}
                onRemove={this.props.onRemove}/>
                <button className="Playlist-save" onClick={this.props.onSave}>Save to Spotify</button>
            </div>
        );
    }
}
export default PlayList;