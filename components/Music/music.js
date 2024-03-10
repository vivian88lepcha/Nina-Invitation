import React, { useState, useEffect } from "react";
import Sound from 'react-sound';
import BithdaySong from '../../public/music/HappyBirthdayToYou.mp3'

const PlaySound = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        // Start playing the sound on page load
        setIsPlaying(false);
    }, []);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    }

    return (
        <div className="col-lg-12">
            <div className="header-menu">
                <ul className="smothscroll">
                    <button onClick={togglePlay}>
                        {!isPlaying ? <i className="ti-music-alt"></i>: <i className="ti-control-pause"></i>}
                    </button>
                </ul>
            </div>
            <Sound
                url={BithdaySong}
                playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.PAUSED}
                loop={true}
            />
        </div>


    )
}

export default PlaySound;
