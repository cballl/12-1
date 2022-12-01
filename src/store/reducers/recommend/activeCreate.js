import {getSlideshow, getEaarydayRecommend, getEnterSinger} from '../../activeType'
import {httpGetEnterSinger, httpGetHotRecommended, httpGetSwiper} from '../../../services/recommend/index'
// 获取轮播图
const getSwiper = (data) => {
    return (display, getState) => {
        httpGetSwiper().then(res => {
            display({type: getSlideshow, res})
        })
        return getState()
    }
}

 // 获取每日推荐
const getEaarydayRecommendAsync = async (limit) => {
    try {
        const result = await httpGetHotRecommended(limit)
        return {type: getEaarydayRecommend, result}
    } catch (err) {
        new Error(err)
    }
}

// 获取入驻歌手
const getEnterSigenAsync = async () =>{
    try {
        const result = await httpGetEnterSinger()
        return {type: getEnterSinger, result}
    } catch (err) {
        new Error(err)
    }

}



export {
    getSwiper,
    getEaarydayRecommendAsync,
    getEnterSigenAsync
}