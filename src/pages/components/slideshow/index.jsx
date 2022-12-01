import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, EffectFade} from "swiper";
import {connect, useSelector} from 'react-redux';
import {getSwiper} from "../../../store/reducers/recommend/activeCreate";

import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Root} from './style'

function ImgSwiper(props) {
    const {getAuthDataSwiper} = props
    const [imgBack, setImgBack] = useState()
    const [imgIndex, setImgIndex] = useState(7)


    useLayoutEffect(() => {
      getAuthDataSwiper()
    }, [getAuthDataSwiper])

    const swiper = useSelector((state) => {
        return state.recommend.swiper
    })

    useEffect((e) => {
        setImgBack(swiper[imgIndex]?.imageUrl)
    }, [swiper,imgIndex])


    return (
        <Root imgback={imgBack}>
            <div className={'Swiper-box'}>
                <div className={'Swiper-back'} style={{width:'1106px'}}>
                    <Swiper
                        style={{
                            width:"1106px",
                            "--swiper-navigation-color": "baock",
                        }}

                        className={'SwiperFind'}
                        spaceBetween={30}
                        navigation={true}
                        loop={true}
                        effect={"fade"}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[EffectFade, Navigation, Pagination]}
                        onSlideChange={(e) => {
                            setImgIndex(e.realIndex);
                            setImgBack(swiper[e.realIndex]?.imageUrl);
                        }}
                    >
                       <div>
                           {
                               swiper.map((item, index) => {
                                   return (
                                       <SwiperSlide
                                           className={'swiper-zoom-container swiper-zoom-container-derive'}
                                           key={index}>
                                           <img src={item.imageUrl}
                                                alt={'img'}
                                                style={{
                                                    width: '700px',
                                                    height: '100%',
                                                    marginLeft: '-10px',
                                                }}/>
                                           <div
                                               className={'item-goole-swiper'}
                                           >
                                               <img src="https://s2.music.126.net/style/web2/img/index/download.png"
                                                    alt="1"/>
                                           </div>
                                       </SwiperSlide>
                                   )
                               })
                           }
                       </div>
                    </Swiper>
                </div>
            </div>
        </Root>
    );
}

const mapStateToProps = (state) => {
    const {swiper} = state.recommend
    return {
        swiper
    }
}

const mapDispatchToProps = (display) => {
    return {
        getAuthDataSwiper() {
            display(getSwiper())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImgSwiper);