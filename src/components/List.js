import React, { useState, useEffect } from "react";
import song from "../data.json";
import "./List.css";
import CurrentPlay from "./CurrentPlay";

const List = () => {
    const [songList, setSongList] = useState();
    const [currentPlaying, setCurrentPlaying] = useState(song[0]);
    const [fullScreenPage, setFullScreenPage] = useState(true);

    useEffect(() => {
        // console.log(song)
        setSongList(song);
    }, []);

    const playMySong = (event,getMySong) => {
        event.stopPropagation();
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
    const openCurrentSong=(e,data)=>{
        playMySong(e,data);
        openFullScreenSong()
    }

    return (
        <>
            <div className="list">
                <div className="listContent">
                    {songList &&
                        songList.map((data) => {
                            return (
                                <div className="songList" key={data.id} onClick={(e)=>openCurrentSong(e,data)}>
                                    <img src={data.artwork} alt="songpic" />
                                    <div className="songName">
                                        <span>{data.title}</span>
                                        <span id="artistName">{data.artist}</span>
                                    </div>
                                    {!data.selected ? (
                                        <i onClick={(e) => playMySong(e,data)} className="fas fa-play"></i>
                                    ) : (
                                        <i className="fas fa-pause" onClick={(e) => playMySong(e,data)}></i>
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
