import React from "react";
import "./CurrentPlay.css";

const CurrentPlay = ({playSong,showfullScreenPage,openFullScreenSong,closeFullScreenSong}) => {
    return (
        <>
            <div className="songPage">
                {showfullScreenPage ? (
                    <div onClick={() => openFullScreenSong()} className="song">
                        <img src={playSong.artwork} alt="songpic" />
                        <div className="songNamePlay">
                            <span>{playSong.title}</span>
                            <span id="singerName">{playSong.artist}</span>
                        </div>
                        <audio controls>
                            <source src={playSong.url} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                ) : (
                    <div className="homeFullSong" style={{ backgroundImage: `url(${playSong.artwork})` }}>
                        <div className="fullViewSong">
                            <i onClick={() => closeFullScreenSong()} className="fas fa-times"></i>
                            <img src={playSong.artwork} alt="songpic" />
                            <div className="songNamePlayFullView">
                                <span>{playSong.title}</span>
                                <span id="singerNameFullView">{playSong.artist}</span>
                            </div>
                            <audio controls>
                                <source src={playSong.url} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default CurrentPlay;
