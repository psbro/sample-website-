import React from 'react'
import styled from "styled-components"
import { motion } from "framer-motion"
import pic5 from "../../assets/images/pic5.png"
import pic6 from "../../assets/images/pic6.png"
import pic7 from "../../assets/images/pic7.png"
import pic8 from "../../assets/images/pic8.jpeg"

const Page4 = () => {
    return (
        <Page_Section>
            <h1>
                Track your Mood
            </h1>



        
            <p>
            All days and all moods are not made equal. But we can only improve what we measure. Track your mood and vitals (including skin and hair health) so you can take better care of yourself every day.
            </p>
          
            

            <button>
                Track your mood on the app
            </button>

            <Img_Cont>
            <div className="img1">
                <img src={pic5} alt="" />
            </div>
            <div className="img2">
                <img src={pic6} alt="" />
            </div>
            <div className="img3">
                <img src={pic7} alt="" />
            </div>
            <div className="img4">
                <img src={pic8} alt="" />
            </div>
            </Img_Cont>
        </Page_Section>
    )
}

export default Page4;

const Page_Section = styled(motion.div)`
width: 100vw;
height: 130vh;
text-align: center;
justify-content: center;

h1{
font-family: 'Oswald', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 43px;
color: #000000;
position: relative;
top: 6rem;

@media(max-width: 400px){
    position: relative;
    top: 9rem;
}
}


 
    

p{
font-family: 'DM Sans';
font-style: normal;
font-weight: lighter;
font-size: 14px;
line-height: 29px;
color: rgba(0, 0, 0, 0.8);
position: relative;
top: 8rem;
margin-left: auto;
margin-right: auto;

@media(max-width: 400px){
    position: relative;
    top: 11rem;
}
}



button{
position: relative;
top: 10rem;
width: 315px;
height: 66px;
background: linear-gradient(288.62deg, #6E8CF6 42.36%, rgba(110, 213, 246, 0.93) 115.74%);
box-shadow: 0px 2px 16px rgba(71, 222, 255, 0.33);
border-radius: 70px;
outline: none;
border: none;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 19px;
line-height: 30px;
text-align: center;
color: #FFFFFF;
@media(max-width: 400px){
    position: relative;
    top: 13rem;
}

@media(max-width: 350px){
    width: 285px;
    font-size: 15px;
}
}


`
const Img_Cont = styled(motion.div)`
  width: 100vw;
  height: 400px;
  /* border: 3px solid black; */
  position: relative;
  top: 15rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  .img1{
    width: 134px;
    height: 134px;

   img{
    width: 134px;
    height: 134px;
   }
   
  }

  .img2{
    width: 134px;
    height: 134px;

   img{
    width: 134px;
    height: 134px;
   }
   
  }

  .img3{
    width: 134px;
    height: 134px;

   img{
    width: 134px;
    height: 134px;
   }
   
  }

  .img4{
    width: 164px;
   height: 164px;
   img{
    width: 134px;
    height: 134px;
   }
  }

  @media(max-width: 345px){
    .img1{
        width: 144px;
    }

    .img2{
        width: 144px;
    }

    .img3{
        width: 144px;
    }

    .img4{
        width: 144px;
    }
  }
`