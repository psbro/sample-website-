import React from 'react'
import Nav from './components/Nav'
import styled from "styled-components"
import { motion } from "framer-motion"
import pic9 from "../../assets/images/pic9.png"
import pic10 from "../../assets/images/pic10.png"
import pic11 from "../../assets/images/pic11.png"

const Home = () => {
    return (
        <>
            <Home_Section>
                <Nav />

                <Home_Content>

                    <About_Cont>
                        <h1>
                            About Diana
                        </h1>

                        <h2>
                            A Platform that looks out for you
                        </h2>

                        <p>
                            Diana empowers you to understand how your body works so you can look and feel your best
                        </p>

                        <h6>

                        </h6>
                    </About_Cont>

                    <Philosophy_Cont>

                        <h1>
                            Our Philosophy
                        </h1>

                        <h3>
                            Sustainable wellness is a big-picture inside out approach
                        </h3>

                        <h5>
                            Diana is on a mission to create thoughtful, science-backed solutions for women who want to make informed decisions about their health and wellness.
                        </h5>

                        <h5 style={{ top: "4.2rem" }}>
                            That's why we’ve created an integrated ecosystem of:
                        </h5>

                        <div className="details">
                           
                           <div className="vector1">
                            <img src={pic9} alt="" />
                           </div>

                           <div className="para1">
                           Consciously formulated products that deliver feel-good results fast 
                           </div>

                           <div className="vector2">
                           <img src={pic10} alt="" />
                           </div>

                           <div className="para2">
                            In-app mood and period tracking options that help you cultivate a deeper connection with your mind and body
                           </div>

                           <div className="vector3">
                           <img src={pic11} alt="" />
                           </div>

                           <div className="para3">
                           In-app consultation portals that connect you with compassionate wellness experts
                           </div>

                        </div>

                        <h6>
                        Consider us your nerdy ally who spends their time perfecting products that work because they want you to feel your best everyday.
                        </h6>


                    </Philosophy_Cont>

                </Home_Content>
            </Home_Section>

        </>
    )
}

export default Home;

const Home_Section = styled(motion.div)`
width: 100vw;
height: 1500px;

/* border: 3px solid black; */
`

const Home_Content = styled(motion.div)`
background: linear-gradient(180deg, #FFF6FB 0%, #E7F6FC 33.33%, rgba(213, 224, 255, 0) 100%);
width: 100vw;
/* border: 3px solid black; */
height: 1200px;
@media(max-width: 400px){
    height: 1500px;
}
justify-content: center;
text-align: center;
`

const About_Cont = styled(motion.div)`
width: 100vw;
text-align: center;
height: 300px;

h1{
font-family: 'Oswald', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 33px;
line-height: 30px;
color: #1B1B50;
position: relative;
top: 2.5rem
}

h2{
    position: relative;
    top: 4.5rem;
    font-family: 'Quicksand', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
   line-height: 22px;
   text-align: center;
   color: #1B1B50;
}

p{
position: relative;
top: 5.5rem;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 25px;
color: #000000;
}

h6{
position: relative;
top: 7.5rem;
height: 0px;
border: 1px solid #000000;
width: 297px;
 margin-left: auto;
margin-right: auto;
/* margin-top: 2.5rem; */
background-color: #000000;
}
`

const Philosophy_Cont = styled(motion.div)`
/* border: 3px solid black; */
width: 100vw;
text-align: center;
height: 500px;

h1{
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 33px;
color: #1B1B50;
}

h3{
font-family: 'Oswald', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 33px;
line-height: 44px;
color: #1B1B50;
position: relative;
top: 2.3rem;
}

h5{
    font-family: 'DM Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 29px;
   text-align: center;
   color: #1B1B50;
   position: relative;
   top: 3.8rem;
}

.details{

 
  justify-content: center; 
  /* border: 3px solid black; */
  height: 600px;
  position: relative;
  top: 4.4rem;
  text-align: center;

  .vector1{
    height: 64px;
   width: 70px;
   position: relative;
   top: 2.5rem;
   margin-left: auto;
   margin-right: auto;

   img{
    height: 64px;
   width: 70px;
   }

  }

  .para1{
font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 29px;
color: #1B1B50;
position: relative;
top: 4rem;
margin-left: auto;
margin-right: auto;
  }

  .vector2{
    height: 64px;
   width: 70px;
   position: relative;
   top: 7.5rem;
   margin-left: auto;
   margin-right: auto;

   img{
    height: 64px;
   width: 70px;
   }

  }

  .para2{
font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 29px;
color: #1B1B50;
position: relative;
top: 9rem;
margin-left: auto;
margin-right: auto;
  }

  .vector3{
    height: 64px;
   width: 70px;
   position: relative;
   top: 12.5rem;
   margin-left: auto;
   margin-right: auto;

   img{
    height: 64px;
   width: 70px;
   }
  }

  .para3{
font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 29px;
color: #1B1B50;
position: relative;
top: 14rem;
margin-left: auto;
margin-right: auto;
  }

  }

  h6{
font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 29px;
color: #1B1B50;
position: relative;
top: 10rem;
  }


`


