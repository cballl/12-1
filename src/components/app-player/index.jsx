import React, {useEffect, useRef, useState} from 'react';
import {Slider} from "antd";

import {getSongAsync, getPlaySongSiteAsync} from '../../store/reducers/song/activeCreate'

import {Root} from './style'
import img from '../../assets/img/playbar.png'
import {useDispatch, useSelector} from "react-redux";
import dayjs from "dayjs";

function Player(props) {
    const dispatch = useDispatch()
    const playSong = useRef()
    const [isTrue, setIsTrue] = useState(false)
    const [timeSong, setSongTime] = useState()
    // const [currentTime, setCurrentTime] = useState()
     const [data,setData] = useState()

    useEffect(() => {
        getSongAsync().then(res => {
            dispatch(res)
        })
        getPlaySongSiteAsync().then(res => {
            dispatch(res)
        })
    }, [dispatch])

    const selector = useSelector((state) => {
        return state.song
    })
    const {songPlaySite} = useSelector(state => {
        return state.song
    })

    const item = selector.songData[0]
    const songData = songPlaySite[0]


    const handerEvent = (e) =>{
       const item = e / 100 * data * 10;
       console.log(item )
        if(!isNaN(item)){
            playSong.current.currentTime = item
        }
        setData(e)
    }

    const playEvent = (e) => {
        if (!isTrue) {
            playSong.current.src = songData.url
            playSong.current.play()
            setIsTrue(true)
        } else {
            playSong.current.pause()
            setIsTrue(false)
        }
        let golob = ((timeSong * 1000 ) / (item?.dt * 100)) * 10
        setData(golob)
    }

    const monitorUpdate = (e) => {
         setSongTime(e.target.currentTime * 1000)
    }

    return (
        <Root img={img}>
            <audio ref={playSong} onTimeUpdate={e => monitorUpdate(e)}></audio>
            <div
                className={'Root-index'}
            >
                <div className={'Root-index-row'}>
                    <div className={'img-play-left'}></div>
                    <div className={'img-play-center'} onClick={e => playEvent()}></div>
                    <div className={'img-play-right'}></div>
                </div>
                <div className={'img-box-index'}>
                    <div>
                        <img src={item?.al?.picUrl} alt="" style={{
                            width: '30px',
                            height: '35px',
                            cursor: 'pointer'
                        }}/>
                    </div>
                    <div>
                        <div className={'img-box-index-span'}>
                            <span className={'box-icon-span'}>{item?.name}</span>
                            <span className={'box-icon-span-tow'}></span>
                            <span style={{
                                color: "#ffff",
                                fontSize: '12px',
                                marginLeft: "7px",
                                cursor: 'pointer'
                            }}>{item?.ar[0].name}</span>
                            <span className={'box-icon-span-three'}></span>
                            <div className={'time-div-span'}>
                                <span>
                                    {
                                        dayjs(timeSong).format('mm:ss')
                                    }
                                </span>
                                <span> / </span>
                                <span>{dayjs(item?.dt).format('mm:ss') || '00:00'}</span>
                            </div>
                        </div>
                        <div className={'box-img-back'}>
                            <Slider
                                value={data}
                                className={'showShucai'}
                                onChange={handerEvent}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Root>
    );
}

export default Player;