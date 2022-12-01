import styled from 'styled-components'


const backImg =require('../../assets/img/statbar.png')
const Root = styled.div`
      .Root-index {
        width:100%;
        height: 54px;
        position:fixed;
        bottom: 0px;
        background-image: url(${props => props.img});
        display: flex;
        //align-items: center;
      }
      
  .Root-index-row{
    display: flex;
    align-items: center;
  }
  
  
  
  
  .img-play-left{
    width: 40px;
    height: 40px;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-position: 10px -128px;
    background-size: 157px;
  }

  .img-play-center {
    width: 40px;
    height: 40px;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-position: 4px -209px;
    background-size: 157px;
  }


  .img-play-right{
    width: 40px;
    height: 40px;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-position: -74px -128px;
    background-size: 157px;
  }


  .img-box-index {
    width:700px;
    height: 200px;
    display: grid;
    grid-template-columns: repeat(2,40px 654px);
    margin-left: 20px;
    
    & div:nth-child(1){
     margin-top: 10px;
      width: 500px;
    }
    & div:nth-child(2){
  
    }
  }
  
  
  
  .img-box-index-span{
    display: flex;
    margin-top: 5px;
  }
  
  .box-icon-span{
      color: aliceblue;
      font-size: 10px;
      margin-left: 7px;
    cursor: pointer;
  }
  
  .box-icon-span-tow{
    display: inline-block;
    width: 20px;
    height: 19px;
    margin-left: 3px;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-position: 1px -48px;
    background-size: 135px;
    cursor: pointer;
  }
  
  .box-icon-span-three{
    display: inline-block;
    width: 20px;
    height: 19px;
    margin-left: 3px;
    margin-top: -2px;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-position: -94px -85px;
    background-size: 135px;
        cursor: pointer;
  }
  
  
  .box-img-back{
    width: 400px;
    height: 11px;
    display: flex;
    justify-items: center;
    background-image: url(${backImg});
    background-repeat: no-repeat;
    background-position: 2px 2px;
    background-size: 441px;
  }



 .showShucai{
   .ant-slider-rail {
     background-color: #ffff;
    }
   
   .ant-slider-track{
     background-color: #c70c0c;
     margin-top: -10.5px;
   }
   
   .ant-slider-handle{
     border: 5px solid #ffff;
     margin-top: -15px;
   }
   
  }
  
  .ant-slider{
    margin-top: 100px;
  }
  
  
  
  .time-div-span{
    margin-left: 144px;
    span{
      color: red;
    }
  }
  
  
  
  
  
  
`
export {
    Root
}