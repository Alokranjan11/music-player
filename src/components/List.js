import React, { useState, useEffect } from "react";
import song from "../data.json";
import "./List.css";
import CurrentPlay from "./CurrentPlay";

const List = () => {
    const [songList, setSongList] = useState();
    const [currentPlaying, setCurrentPlaying] = useState(song[1]);
    const [fullScreenPage, setFullScreenPage] = useState(true);

    useEffect(() => {
        // console.log(song)
        setSongList(song);
    }, []);

    const playMySong = (getMySong) => {
        setCurrentPlaying(getMySong);
        let modifiedSongList = [];
        songList.forEach((data) => {
            if(data.id === getMySong.id){
                modifiedSongList.push(data)
               return data.selected = !data.selected
            };
            data.selected = false;
            modifiedSongList.push(data)
        });
        setSongList(modifiedSongList)
    };
    const openFullScreenSong = () => {
        setFullScreenPage(false);
    };
    const closeFullScreenSong = () => {
        setFullScreenPage(true);
    };

    return (
        <>
            <div className="list">
                <div className="listContent">
                    {songList &&
                        songList.map((data) => {
                            return (
                                <div className="songList" key={data.id}>
                                    <img src={data.artwork} alt="songpic" />
                                    <div className="songName">
                                        <span>{data.title}</span>
                                        <span id="artistName">{data.artist}</span>
                                    </div>
                                    {!data.selected ? (
                                        <i onClick={() => playMySong(data)} className="fas fa-play"></i>
                                    ) : (
                                        <i className="fas fa-pause" onClick={() => playMySong(data)}></i>
                                    )}
                                    {/* <i onClick={()=>playMySong(data)} className="fas fa-play"></i> */}
                                    {/* <i class="fas fa-pause"></i> */}
                                </div>
                            );
                        })}
                </div>
            </div>
            {songList && (
                <CurrentPlay
                    playSong={currentPlaying}
                    showfullScreenPage={fullScreenPage}
                    openFullScreenSong={() => openFullScreenSong()}
                    closeFullScreenSong={() => {
                        closeFullScreenSong();
                    }}
                ></CurrentPlay>
            )}
        </>
    );
};

export default List;
