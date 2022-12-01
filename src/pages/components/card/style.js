import style from 'styled-components'


const Root = style.div`
    margin-top:10px;
         
       
    .cart-index-main{
       display: grid;
       grid-template-columns: repeat(4,150px);
       grid-template-rows: repeat(2,160px);
       grid-column-gap: 20px;
         grid-row-gap: 98px;
     }
       
    .cart-index{
           background-size: 160px; 
           width:100%;
           height:100%;
           position: relative;
           
    }
    
      .cartBottom{
           width:100%;
           height:25px;
           color:white;
           background: rgba(53, 60, 64, 0.9);
           display: grid;
           grid-template-columns: repeat(3,1fr);
           justify-items: center;
           align-items: center;
           position: absolute;
           bottom: 0px;

        }
    
`

export {
    Root
}