import style from 'styled-components'


const Root = style.div`
        height:54px;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        justify-content: center;
        align-items: center;
        border-bottom:3px solid #c20c0c;
      
        
        .DivOne{
          width:300px;
          display: grid;
          grid-template-columns: repeat(2,1fr);
          justify-content: center;
          align-center:center;
          cursor:pointer; 
          
          img{
            margin-left:10px;
            margin-top:8px;  
            color:#333333;      
          }
            
          span{
            margin-left:5px;
            font-size:20px;
          }  
          
          .DivTwo{
            display: grid;
            grid-template-columns: repeat(10,auto);
            justify-content: center;
            align-center:center;
            div{
             width:30px;
             margin-top:10px;
             font-size:12px;
             display: grid;
             justify-content: center;
             align-center:center;
             cursor:pointer;
             color:#666666;
            }
            
            span{
                font-size:2px;
                margin:8px 4px 4px 0px ;
            }
          }
   }
   
   
     .DivThree{
           margin-top:5px;
         .right-end{
             text-align: end;
             margin-right: 5px;
             font-size:12px;
             cursor:pointer;
             text-decoration:underline;
          }
          
          
       }
        
`

export {
    Root
}