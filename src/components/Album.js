import React from 'react'
import { Link } from 'react-router-dom';
import imagen from "../images/fondo-album.jpg"

const album = () => {
  return (
    <article>
            <div id="top-content-album">
                <img src={imagen} alt="album, Tomorrow's tunes"/>
                <div id="top-content-text">
                    <h1>Tomorrow's tunes</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis molestias accusantium provident aperiam nisi nam! dick venenatis</p>
                    <span>64 songs ~ 16 hrs+</span>
                    <div id="top-content-buttons">
                        <a href="#"><i class="fas fa-play-circle"></i> Play all</a>
                        <a href="#"><i class="material-symbols-outlined">library_music</i> Add to collections</a>
                        <a href="#"><i class="fas fa-heart"></i> <b>like</b></a>
                    </div>
                </div>
            </div>
            <div id="music-list">
                <div class="list-song">
                    <div class="image-heart">
                        <img src={imagen} alt="Let me love you"/>
                        <i class="fas fa-heart"></i>
                    </div>
                    <div class="text1">
                        <span>Let me love you</span>
                        <span>Single</span>
                    </div>
                    <div class="text2">
                        <p>4:17</p>
                        <i class="fas fa-ellipsis-v"></i>
                    </div>
                </div>
                <div class="list-song">
                    <div class="image-heart">
                        <img src={imagen} alt="Watin man go do"/>
                        <i class="fas fa-heart"></i>
                    </div>
                    <div class="text1">
                        <span>Watin man go do</span>
                        <span>African giant</span>
                    </div>
                    <div class="text2">
                        <p>2:30</p>
                        <i class="fas fa-ellipsis-v"></i>
                    </div>
                </div>
                <div class="list-song">
                    <div class="image-heart">
                        <img src={imagen} alt="Stand strong"/>
                        <i class="fas fa-heart"></i>
                    </div>
                    <div class="text1">
                        <span>Stand strong</span>
                        <span>Single</span>
                    </div>
                    <div class="text2">
                        <p>2:02</p>
                        <i class="fas fa-ellipsis-v"></i>
                    </div>
                </div>
                <div class="list-song">
                    <div class="image-heart">
                        <img src={imagen} alt="Closa"/>
                        <i class="fas fa-heart"></i>
                    </div>
                    <div class="text1">
                        <span>Closa</span>
                        <span>Obi datti</span>
                    </div>
                    <div class="text2">
                        <p>3:23</p>
                        <i class="fas fa-ellipsis-v"></i>
                    </div>
                </div>
                <div class="list-song">
                    <div class="image-heart">
                        <img src={imagen} alt="Let me love you"/>
                        <i class="fas fa-heart"></i>
                    </div>
                    <div class="text1">
                        <span>Let me love you</span>
                        <span>Single</span>
                    </div>
                    <div class="text2">
                        <p>4:17</p>
                        <i class="fas fa-ellipsis-v"></i>
                    </div>
                </div>
                <div class="list-song">
                    <div class="image-heart">
                        <img src={imagen} alt="Let me love you (remix)"/>
                        <i class="fas fa-heart"></i>
                    </div>
                    <div class="text1">
                        <span>Let me love you </span>
                        <span>Single</span>
                    </div>
                    <div class="text2">
                        <p>5:17</p>
                        <i class="fas fa-ellipsis-v"></i>
                    </div>
                </div>
                <div class="list-song">
                    <div class="image-heart">
                        <img src={imagen} alt="Watin man go do (remix)"/>
                        <i class="fas fa-heart"></i>
                    </div>
                    <div class="text1">
                        <span>Watin man go do </span>
                        <span>African giant</span>
                    </div>
                    <div class="text2">
                        <p>2:30</p>
                        <i class="fas fa-ellipsis-v"></i>
                    </div>
                </div>
                <div class="list-song">
                    <div class="image-heart">
                        <img src={imagen} alt="Stand strong (remix)"/>
                        <i class="fas fa-heart"></i>
                    </div>
                    <div class="text1">
                        <span>Stand strong (remix)</span>
                        <span>Single</span>
                    </div>
                    <div class="text2">
                        <p>2:02</p>
                        <i class="fas fa-ellipsis-v"></i>
                    </div>
                </div>
                
               
            </div>

        </article>
  )
}

export default album
