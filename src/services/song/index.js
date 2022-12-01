import {instance} from '../index'


// 获取歌曲
 const getSong = (ids=33894312) =>{
    return instance({
        url:`song/detail?ids=${ids}`
    })
}

// 播放歌曲
 const getPlaySong = (id=33894312) =>{
    return instance({
        url:`song/url/v1?id=${id}&level=exhigh`,
    })
}


export{
    getSong,
    getPlaySong
}