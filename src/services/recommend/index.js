import {instance} from '../index'

const httpGetSwiper = (num=0) =>{
    return instance({
        url:`banner?type=${num}`,
        method:"get"
    })
}

const httpGetHotRecommended = (limit) =>{
    return instance({
        url:'personalized',
        method:"get",
        params:{
            limit
        }
    })
}


const httpGetEnterSinger = (offset=0,limit=6) =>{
    return instance({
        url:"top/artists",
        method:'get',
        params:{
            offset,limit
        }
    })
}


export {
    httpGetSwiper,
    httpGetHotRecommended,
    httpGetEnterSinger
}