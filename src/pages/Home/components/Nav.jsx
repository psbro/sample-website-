import React from 'react'
import styled from "styled-components"
import { motion } from "framer-motion"
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Nav = () => {
    return (
        <Nav_Desc>

            <Left_Side>
                <MenuIcon style={{ height: "24px", width: "24px", marginTop: "auto", marginBottom: "auto" }} />
            </Left_Side>

            <Right_Side>
                <ShoppingCartIcon style={{ height: "24px", width: "24px", marginTop: "auto", marginBottom: "auto" }} />
                <NotificationsIcon style={{ height: "24px", width: "24px", marginTop: "auto", marginBottom: "auto" }} />
            </Right_Side>

        </Nav_Desc>
    )
}

export default Nav;

const Nav_Desc = styled(motion.div)`
width: 100vw;
min-height: 83px;
background: rgba(255, 255, 255, 0.47);
box-shadow: 0px 4px 14px rgba(24, 160, 251, 0.12);
backdrop-filter: blur(2px);
border-radius: 0px 0px 14px 14px;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
text-align: center;
`

const Left_Side = styled(motion.div)`
display: flex;
justify-content: center;
width: 15%;
text-align: center;
margin-right: 2.5rem;
`

const Right_Side = styled(motion.div)`
display: flex;
justify-content: space-around;
width: 20%;
text-align: center;
margin-left: 4rem;
`