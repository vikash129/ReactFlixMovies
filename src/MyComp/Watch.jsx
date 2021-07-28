import { IconButton } from '@material-ui/core'
import { ArrowBackOutlined } from '@material-ui/icons'

import React from 'react'
import { Link } from 'react-router-dom'
import './styles/watch.scss'

export const Watch = () => {
    return (
        <div className = 'watch'>
                <IconButton className="back" component = {Link} to = '/home'>
                <ArrowBackOutlined/>
                Home
                </IconButton>
            <video src="trailer.mp4"  autoPlay progress = {'true'} controls />
        </div>
    )
}
