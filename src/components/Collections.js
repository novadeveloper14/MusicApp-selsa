import React from 'react'
import { Link } from 'react-router-dom';

const collections = () => {
  return (
    <article>
           
            <div id="coll-buttons">
                <a href="#">My collection</a>
                <a href="#">Likes</a>
            </div>
            <div id="collections-saved">
                <div class="collection">
                    <div class="text1c">
                        <b>Limits</b>
                        <span>John watts</span>
                    </div>
                    <div class="text2c">
                        <p>300k likes</p>
                        <i class="fas fa-play"></i>
                    </div>
                </div>

                <div class="collection" >
                    <div class="text1c">
                        <b>Un Verano Sin Ti</b>
                        <span>Conejo malo</span>
                    </div>
                    <div class="text2c">
                        <p>10.3m likes</p>
                        <i class="fas fa-play"></i>
                    </div>
                </div>

                <div class="collection" >
                    <div class="text1c">
                        <b>Harry's House</b>
                        <span>Harry estilos css</span>
                    </div>
                    <div class="text2c">
                        <p>5.3m likes</p>
                        <i class="fas fa-play"></i>
                    </div>
                </div>

                <div class="collection" >
                    <div class="text1c">
                        <b>MOTOMAMI+</b>
                        <span>la Rosalia</span>
                    </div>
                    <div class="text2c">
                        <p>4.3m likes</p>
                        <i class="fas fa-play"></i>
                    </div>
                </div>
                
            </div>

        </article>
  )
}

export default collections
