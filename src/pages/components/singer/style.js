import styled from 'styled-components'


const Root = styled.div`
    .Root-index{
        margin-top:20px;
        padding:0 20px 0 20px;
    }
    
    
    .Root-index-header{
        display:flex;
        justify-content: space-between;
        padding:0px 2px 0px 2px;
        margin-bottom:10px;
        & div:nth-child(1) {
            font-weight: bold;
        }
        
         & div:nth-child(2) {
            cursor: pointer;
        }
    }
    
    
     .Root-index-right:hover{
     background-color: #f4f4f4;cursor: pointer;
     }
    
    
    .Root-index-right{
        width:210px;
        height:60px;
        margin-top:20px;
        display:grid;
        grid-template-columns: repeat(2,62px 150px);
        background-color: #fafafa;
         
       border: 1px solid #e9e9e9;
            & div:nth-child(1) {
                // background-color: #fafafa;
           }
       
            & div:nth-child(2) {
               display:grid;
               width:140px;
               grid-template-columns: repeat(1,1fr);
               grid-template-rows: repeat(2.1fr);
               justify-items:center;
               align-items:center;
               & div:nth-child(2){
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
             }
         }
    }
    
    

    
`


export {
    Root
}