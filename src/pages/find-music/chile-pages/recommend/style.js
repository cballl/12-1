import style from 'styled-components'

const Root = style.div`
       .panelDiv{
         background-color: #f5f5f5;
         
         .panlDiv-index{
            width:1406px;
            display:grid;
            grid-template-columns: 700px 254px;
            justify-content:center;
            margin-left: 16px;
            
            .tab-index{
               padding:0 20px 0 20px;
              background-color: #ffffff;
            }
         }
         
         .right-index{
            background-color: #ffffff;
             border-left:1px solid red;
             border-right:1px solid red;
         }
         
       }
           
   

`
export {Root}