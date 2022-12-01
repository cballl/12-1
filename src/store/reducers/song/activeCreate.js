import {getSong, getPlaySong} from '../../../services/song/index'
import {getSongPlaySiteType, getSongType} from '../../activeType'

// 获取歌曲
const getSongAsync = async (ids) => {
    try {
        const result = await getSong(ids)
        return {type: getSongType, result: result.songs}
    } catch (err) {
        console.log(err)
    }
}

// 歌曲的播放地址
const getPlaySongSiteAsync = async (id) => {
    try {
        const result = await getPlaySong(id)
        return {type:getSongPlaySiteType,songPlaySite:result.data}
    } catch (err) {
        console.log(err)
    }
}


export {
    getSongAsync,
    getPlaySongSiteAsync
}