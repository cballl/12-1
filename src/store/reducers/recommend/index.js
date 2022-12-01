import {
    getSlideshow,
    getEaarydayRecommend,
    getEnterSinger
} from '../../activeType'

const recommendData = {
    swiper:[],
    sunRecommend:[],
    singer:[]
}

const recommend = (state=recommendData,action) =>{
    switch (action.type) {
         case getSlideshow :
            return {...state,swiper: action.res.banners}
        case getEaarydayRecommend :
            return {...state,sunRecommend:action.result.result}
        case getEnterSinger :
            return {...state,singer: action.result.artists}
        default:
            return state
    }
}

export default  recommend