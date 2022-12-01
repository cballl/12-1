import style from 'styled-components'


const Root = style.div`

.Root-index{
    width:248ox;
    height:151px;
    background-image: url(${props => props.imgUrl});
    background-position:4px 157px;
    display: grid;
    grid-template-columns: repeat(1,1fr);
    grid-template-rows: repeat(2.75px);
    justify-items: center;
    align-items:center;
    span{
       display: block;
       width:208px;
       height:46px;
       font-size:12px;
       color:#666666;
    }
    
    // div{
        Button {
            width:130px;
            height:38px;
           background:#e6252c;
        }
    // }
    
}    

`

export {
    Root
}