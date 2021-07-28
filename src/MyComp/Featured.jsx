import React from 'react'

import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './styles/featured.scss'

export const Featured = ({ type }) => {
    return (
        <div className='featured' >

            <div className="category">
                {type && (
                    <>
                        <span>{type === 'movies' ? 'Movies' : 'Series'}</span>

                        <select name="genre" id="genre">

                            <option>Genre</option>
                            <option value="adventure">Adventure</option>
                            <option value="horror">Horror</option>
                            <option value="comedy">Comedy</option>
                            <option value="18">18+</option>
                            <option value="catoons">Cartoons</option>
                            <option value="action">Action</option>
                            <option value="romantic">Romantic</option>
                            <option value="old">Old Bollywood</option>

                        </select>
                    </>
                )}

            </div>

            <div className="info">

                <img src='player.jpg' alt='' />


                <span className="desc">
                  <p>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium natus sed exercitationem sequi id dolore, dolores atque facilis rerum, ab nesciunt ipsa distinctio nihil aut, excepturi reiciendis totam aperiam qui fugit. Autem, qui.</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, voluptates cumque facilis accusamus consectetur quas quo? Ex, corrupti! Libero doloremque magnam sapiente voluptas, veniam earum non? Iure doloribus nobis sunt saepe quia nostrum tempora debitis velit, quidem esse! Delectus quod placeat veritatis! Corporis, qui?</p>
                </span>

                <div className="buttons">

                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>

                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>

            </div>


        </div>
    )
}
