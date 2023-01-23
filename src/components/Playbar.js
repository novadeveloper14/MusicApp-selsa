import React from 'react'
import image from "../images/Rectangle 15.png"

const Playbar = () => {
  return (
    <div id="bar-song">
            <div id="song-current">
                <img src={image} alt="Seasons in"/>
                <div>
                    <b>Seasons in</b>
                    <span>James</span>
                </div>
            </div>
            <div id="song-buttons">
                <div id="buttons-bar">
                    <i class="material-symbols-outlined">shuffle</i>
                    <i class="material-symbols-outlined">skip_previous</i>
                    <i class="material-symbols-outlined">play_arrow</i>
                    <i class="material-symbols-outlined">skip_next</i>
                    <i class="material-symbols-outlined">repeat_one</i>
                </div>
                <div id="range-bar">
                    <input type="range" value="33" max="100" min="0" disabled/>
                </div>
            </div>
            <div id="song-volume">
                <i class="material-symbols-outlined">volume_up</i>
                <input type="range" value="50" max="100" min="0"/>
            </div>
        </div>
  )
}

export default Playbar
