import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class Video extends Component {
    render () {
        return (
        <div className='player-wrapper'>
            <ReactPlayer
            className='react-player fixed-bottom'
            url= 'videos/ipv4.mp4'
            width='100%'
            height='100%'
            controls = {true}
            volume = '1'


            />
        </div>
        )
    }
}

export default Video;
