import React from 'react'
import { Link } from 'react-router-dom';
import imagen from "../images/fondo-album.jpg"

const index = () => {
  return (
    <article>
            <div id="content-top">
                <div id="banner">
                    <div id="banner-text">
                        <span>Currated playlist</span>
                        <h1>R & B Hits</h1>
                        <p>All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit, <br/> and so much more</p>
                        <div id="banner-likes">
                            <div id="banner-persons">
                                <img src={imagen} alt="person1"/>
                                <img src={imagen} alt="person2"/>
                                <img src={imagen} alt="person3"/>
                                <img src={imagen} alt="person4"/>
                                <img src={imagen} alt="person5"/>
                            </div>
                            <span><i class="fas fa-heart"></i> 33k Likes</span>
                        </div>
                    </div>
                    <div id="imagen-banner">
                        <img src={imagen} alt="black men singing"/>
                    </div>
                </div>
                <div id="top-charts">
                    <h2>Top charts</h2>
                    <div>
                    <a href="#">
                        <div class="top-chart">
                        <img src={imagen} alt="Golden age of 80s"/>
                        <div class="chart-text">
                            <b>Golden age of 80s</b>
                            <span>Sean swadder</span>
                            <b>2:34:45</b>
                        </div>
                        <i class="fas fa-heart"></i>
                        </div>
                    </a>
                    <a href="#">
                        <div class="top-chart">
                        <img src={imagen} alt="Reggae 'n' blues"/>
                        <div class="chart-text">
                            <b>Reggae "n" blues</b>
                            <span>Dj YK mule</span>
                            <b>1:02:42</b>
                        </div>
                        <i class="fas fa-heart"></i>
                        </div>
                    </a>
                    <a href="#">
                        <Link to="/MusicApp-selsa/album">
                        <div class="top-chart">
                        <img src={imagen} alt="Tomorrow's tunes"/>
                        <div class="chart-text">
                            <b>Tomorrow's tunes</b>
                            <span>Obi Datti</span>
                            <b>2:01:25</b>
                        </div>
                        <i class="fas fa-heart"></i>
                        </div>
                        </Link>
                    </a>
                </div>
                </div>
            </div>
            <div id="new-releases">
                <h2>New releases.</h2>
                <div id="albums">
                    <div class="album">
                        <div>
                            <img src={imagen} alt="Life in a bubble"/>
                        </div>
                        <span>Life in a bubble</span>
                    </div>
                    <div class="album">
                        <div>
                            <img src={imagen} alt="Mountain"/>
                        </div>
                        <span>Mountain</span>
                    </div>
                    <div class="album">
                        <div>
                            <img src={imagen} alt="Limits"/>
                        </div>
                        <span>Limits</span>
                    </div>
                    <div class="album">
                        <div>
                            <img src={imagen} alt="Everything’s black"/>
                        </div>
                        <span>Everything’s black</span>
                    </div>
                    <div class="album">
                        <div>
                            <img src={imagen} alt="Cancelled"/>
                        </div>
                        <span>Cancelled</span>
                    </div>
                    <div class="album">
                        <div>
                            <img src={imagen} alt="Nomad"/>
                        </div>
                        <span>Nomad</span>
                    </div>
                    <div class="album">
                        <div>
                            <img src={imagen} alt="Blind"/>
                        </div>
                        <span>Blind</span>
                    </div>
                    
                    
                </div>
            </div>
            <div id="new-releases">
                <h2>Popular in your area</h2>
                <div id="albums">
                    <div class="album">
                        <div>
                            <img src={imagen} alt="Un Verano Sin Ti"/>
                        </div>
                        <span>Un Verano Sin Ti</span>
                    </div>
                    <div class="album">
                        <div>
                            <img src={imagen} alt="Harry's House"/>
                        </div>
                        <span>Harry's House</span>
                    </div>
                    <div class="album">
                        <div>
                            <img src={imagen} alt="Dawn FM (Alternate World)"/>
                        </div>
                        <span>Dawn FM</span>
                    </div>
                    <div class="album">
                        <div>
                            <img src={imagen} alt="Midnights (3am Edition)"/>
                        </div>
                        <span>Midnights</span>
                    </div>
                    <div class="album">
                        <div>
                            <img src={imagen} alt="Dharma +"/>
                        </div>
                        <span>Dharma +</span>
                    </div>
                    <div class="album">
                        <div>
                            <img src={imagen} alt="WHO HURT YOU? (Deluxe)"/>
                        </div>
                        <span>WHO HURT YOU?</span>
                    </div>
                    <div class="album">
                        <div>
                            <img src={imagen} alt="MOTOMAMI +"/>
                        </div>
                        <span>MOTOMAMI +</span>
                    </div>
                    
                    
                </div>
            </div>
        </article>
  )
}

export default index
