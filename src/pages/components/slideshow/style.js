import style from 'styled-components'

const Root = style.div`
    .Swiper-box{
        width:100%;
        height:259px;
        padding:0px 140px 0px 170px;
        background-repeat:no-repeat;
        background-size:100% 100%;
        position:relative;
        
        .SwiperFind{
        width:100px
        }
        
    }
    
   
    .Swiper-box::before{    
        content:'';
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:260px;
        background-image: url(${props => props.imgback + '?imageView&blur=40x20'});
        background-repeat:no-repeat;
        z-index:-1;
        background-size:cover;
}
        
    
    .swiper-zoom-container-derive{
         width:900px;
         background: rgba(0,0,0,0); 
    }
    
    .item-goole-swiper{
          width:250px;
          height:259px;
          background-color:gray;
    }
`

export {
    Root
}