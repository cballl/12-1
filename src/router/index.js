import Attention from "../pages/attention";
import DownloadClientEnd from "../pages/download-client-end";
import FindMusic from "../pages/find-music";
import MusicPerson from "../pages/music-person";
import MyMusic from "../pages/my-music";
import ShoppingMall from "../pages/shopping-mall";

import RankingList from "../pages/find-music/chile-pages/ranking-list";
import Recommend from "../pages/find-music/chile-pages/recommend";

const routers = [
  {
    name:"发现音乐",
    path:"/*",
    component:FindMusic,
    child:[
      {
        name:"推荐",
        path:"/*/recommend",
        component:Recommend
      },
      {
        name:"歌单",
        path:"/*/song-list",
        component:RankingList
      },
      {
        name:"排行榜",
        path:"/*/rankingList",
        component:RankingList
      },
    ]
  },
  {
    name:"我是音乐人",
    path:"/musicPerson",
    component:MusicPerson
  },
  {
    name:"关注",
    path:"/attention",
    component:Attention
  },
  {
    name:"下载客户端",
    path:"/downloadClientEnd",
    component:DownloadClientEnd
  },
  {
    name:"我的音乐",
    path:"/myMusic",
    component:MyMusic
  },
  {
    name:"商城",
    path:'/shoppingMall',
    component:ShoppingMall
  }
]


export  default  routers