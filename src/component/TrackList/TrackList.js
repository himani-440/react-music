import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

class TrackList extends React.Component {
    render() {
        return (
            <div>{this.props.track ?
                <div className="TrackList">
                    {this.props.track.map(track => {
                        return (
                            <Track
                                track={track}
                                key={track.id}
                                onAdd={this.props.onAdd}
                                isRemoval={this.props.isRemoval}
                                onRemove={this.props.onRemove}
                            />
                        );
                    })}
                </div>
                : null}</div>
        );
    }
}
export default TrackList;