import styled from "styled-components";

const BottomStyle = styled.div`
    background-color: #f2f2f2;
    height: 200px;
    border-top: 1px solid #bbb;
    display: flex;
    justify-content: center;
    .bottom{
        /* background-color: red; */
        width: 90%;
        display: flex;
        .bottom-left{
            /* background-color: aliceblue; */
            flex: 1;
            margin: 42px;
            .ul-now{
                display: flex;
                justify-content: center;
                align-items: center;
                color: #bbb;
                li{
                    margin-right: 5px;
                    margin-top: 6px;
                }
            }
        }
       
    }
`

export {
    BottomStyle
}