import './styles/list.scss'

import React, { useRef, useState } from 'react'

import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import { ListItem } from './ListItem'

import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";


export const List = () => {

    // const listRef = useRef()

    // const [slideNum, setSlideNum] = useState(0)
    // const [isMoved, setIsMoved] = useState(false)

    // // const breakpoints =[]

    // const handleClick = (dir) => {
    //     setIsMoved(true)
    //     const distance = listRef.current.getBoundingClientRect().x - 50
    //     if (dir === 'left' && slideNum > 0) {
    //         setSlideNum(slideNum - 1)
    //         listRef.current.style.transform = `translateX(${distance + 230}px)`
    //     }
    //     else {
    //         if (slideNum < 5) {
    //             setSlideNum(slideNum + 1)
    //             listRef.current.style.transform = `translateX(${distance - 230}px)`
    //         }
    //     }
    //     console.log(listRef.current.getBoundingClientRect())
    //     console.log(listRef.current.style.transform)
    // }
   

    return (
        <div className='list'>
            <span className="listTitle">Continue To Watch</span>

            {/* <div> */}

                {/* <ArrowBackIosOutlined
                    className='slideArrow left'
                    onClick={() => handleClick('left')}
                    style={{ display: !isMoved && 'none' }}
                /> */}

                    {/* <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb} autoPlay> */}

                    <Carousel showArrows={true}   className="wrapper" setThumbs = {false}>
                        

                        <div className = 'container'>
                        <ListItem index = {0}/>
                        <ListItem index = {1}/>
                        <ListItem index = {2}/>
                        <ListItem index = {3}/>
                        </div>

                        <div className = 'container'>
                        <ListItem index = {0}/>
                        <ListItem index = {1}/>
                        <ListItem index = {2}/>
                        <ListItem index = {3}/>
                        </div>

                    </Carousel>


{/* 
                <ArrowForwardIosOutlined className='slideArrow right'
                 onClick={() => handleClick('right')} 
                 /> */}
            {/* </div> */}

        </div>
    )
}
