import React from "react";
import styled from "styled-components";



const CarrouselContainer = styled.div`

`
const ImgContainer = styled.img`
    width: 1240px;
    height: 415px;
    corner-radius: 25px;
`


function LogementDetails() {
   return (

       <div>
           <CarrouselContainer>
               <figure>
                   <ImgContainer src={"*"} alt={"*"} />
                   <ImgContainer src={"*"} alt={"*"} />
                   <ImgContainer src={"*"} alt={"*"} />
                   <ImgContainer src={"*"} alt={"*"} />
               </figure>

           </CarrouselContainer>
       </div>
   )
}
export default LogementDetails