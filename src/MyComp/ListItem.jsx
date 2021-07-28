import { useState } from 'react'

import { IconButton, Paper, Typography } from '@material-ui/core'
import { Add, PlayCircleFilledRounded, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import './styles/listitem.scss'
import { Link } from 'react-router-dom'




export const ListItem = ({ index }) => {

    const [isHovered, setIsHovered] = useState(false)

    const trailer = 'trailer.mp4'
    const [watch, setWatch] = useState(false)

    return (
        <>
            <div
                className='listItem'
                // style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >

                <div className="thumbnail" >

                    <IconButton className='playBtn' component={Link} to='/watch'>
                        <PlayCircleFilledRounded />
                    </IconButton>

                    <Link to='/watch'> <video src={trailer} autoPlay={true} loop /></Link>
                </div>

                {isHovered &&
                    <>
                        {/* <video src={trailer} autoPlay={true} loop /> */}

                        <div className="itemInfo">


                            <div className="icons">
                                <IconButton className='playBtn' component={Link} to='/watch'>
                                  Play  <PlayCircleFilledRounded />
                                </IconButton>

                                <Add className='icon' />
                                <ThumbUpAltOutlined className='icon' />
                                <ThumbDownAltOutlined className='icon' />


                            </div>

                            <div className="itemDetails">
                                <span>1 hout 3 min</span>
                                <span className='limit'> 16+</span>
                                <span>1990</span>
                            </div>

                            <div className="desc">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eaque beatae architecto rerum sit voluptates facilis omnis laudantium ab sint excepturi nihil sunt libero facere aut, repudiandae ducimus perferendis dolorem maxime dolore, iusto, expedita quasi amet deserunt! Omnis molestiae quo sint sapiente, reiciendis quisquam temporibus, harum ipsum labore hic nam quia vel neque dignissimos facere ad molestias eos </p>
                            </div>

                            <div className="genre">Action</div>

                        </div>
                    </>
                }

            </div>

        </>
    )
}
