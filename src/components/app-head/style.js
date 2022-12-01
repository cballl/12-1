import style from "styled-components";

const DivIndex = style.div`
       height:80px;
       width:90px;
       background-color: #242424;
       display: grid;
       grid-template-columns: repeat(8,100%);
       
       .NavLink {
            color: #ccc;
            display: grid;
            justify-items: center;
            align-items:center;
            position: relative;
            
           span {
             position: absolute;
             left:56px;
             top:21px;
              img{
                 width:20px;
                 height:10px
               }
           }
         } 
         
        .NavLink:hover{
           color: red;
           background-color: #000000;
        }
       
        .rightDiv{
           display: grid;
           grid-template-columns: repeat(3,auto);
           align-items: center;
           margin-left:20%;   
          
            
            & div:nth-child(1){
               color:red;
               width:190px;
               height:30px;
               background-color: #ffffff;
               border-radius: 20px 20px 20px 20px;
               display: grid;
               grid-template-columns: repeat(2,auto);
               justify-items: center;
               align-items: center;
               & input {
                    width:90%
               }
             }
             
              & div:nth-child(2){
                width:110px;
                height:30px;
                margin-left:15%;
                color:#cccccc;
                border:1px solid #494949;
                border-radius: 15px 15px 15px 15px;
                display: grid;
                justify-items: center;
                align-items:center;
                cursor: pointer;
              }
              
               & div:nth-child(2):hover{
                    color:#ffff;
                    border:1px solid #ffff
               }
               
                & div:nth-child(3){
                    width:50px;
                    color:#494949;
                    margin-left:45px    
                }
               
                & div:nth-child(3):hover{
                   color:#ffff;
                   cursor:pointer;
                   text-decoration: underline;
               }
             
             
             
         }
         
      
   
`;


const Root = style.div`
       background-color: #242424;
       display: grid;
       grid-template-columns: 200px 1fr; 
       align-items:center;
       padding-left: 180px;
          @media (max-width: 1200px) {
            padding-left: 0px;
        }
       div{
         img{
            width:177px;
            height:40px
         }
       }
      
`

const FatherRoot =style.div`
       .fatherIndex{
         display: grid;
         grid-template-columns: 347px 90px 90px 90px 90px 90px;
         justify-items: center;
         background-color: red;
       }
`



const FatherRootTwo =style.div`
         height:29px;
         display: grid;
         grid-template-columns:380px 90px 90px 90px 90px 90px;
         justify-items: center;
         align-items:center;
         background-color: #c20c0c;
         
         .NavLink-two{
            width:60px;
            height:23px;
            font-size:12px;
            color:#ffff;
            border-radius: 12px 12px 12px 12px;
            display: grid;
            justify-items: center;
            align-items:center;
         }
           .NavLink-two:hover{
            width:60px;
            height:23px;
            font-size:12px;
            border-radius: 12px 12px 12px 12px;
            background-color: #9b0909;
            color:#ffff;
            display: grid;
            justify-items: center;
            align-items:center;
           }
         
         
          @media (max-width: 1200px) {
            display: grid;
            grid-template-columns:202px 90px 90px 90px 90px 90px;
        }
`

export {
    DivIndex,
    Root,
    FatherRoot,
    FatherRootTwo
}