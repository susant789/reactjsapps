import React,{useState} from 'react'
import styled from 'styled-components'

function Card({img,heading,price}) {

    const [card,setCard] = useState(false);

    return (
        <Cards>
            <FrontSide close={!card}>
                <img src={img} alt="" />
                <Heading>{heading}</Heading>
                <List>
                    <li className="card-list">7 days</li>
                    <li className="card-list">full safety</li>
                    <li className="card-list">food provided</li>
                    <li className="card-list">camp provided</li>
                    <li className="card-list">born fire</li>
                </List>
                <Fbtn onClick={()=>setCard(true)} className="navbtn">Price &gt;&gt;</Fbtn>
            </FrontSide>
            <BackSide show={card} className="center">
                <Bbtn onClick={()=>{setCard(false)}} className="navbtn">&lt;&lt; Back</Bbtn>
                <Bh><span>$</span>{price}</Bh>
                <Bbtn2 className="backbtn">Booking</Bbtn2>
            </BackSide>
        </Cards>
    )
}

const Cards = styled.div`
    width:30rem;
    position:relative;
    .navbtn{
        padding:.5rem 1rem;
        font-size:1.2rem;
        text-transform:uppercase;
        border:none;
        letter-spacing:.1rem;
        background:#fff;
        color:#000;
    }
    perspective:100rem;
`;
const FrontSide = styled.div`
    text-align:center;
    position:relative;
    background:#ddd;
    border-radius:.5rem;
    img{
        width:100%;
        border-radius:.5rem .5rem 0 0;
    };
    transition:opacity .4s,transform .4s;
    z-index:${props => props.close ? '10':'0'};
    opacity:${props => props.close ? '1':'.5'};
    transform:${props => props.close ? 'translateX(0) translateZ(0)':'translateZ(-5rem) translateX(3rem)'};
`;

const Heading = styled.h2`
    text-transform:uppercase;
    font-size:3rem;
    color:#fff;
    text-shadow:0 .1rem 1rem #777;
    position:absolute;
    top:30%;
    right:1rem;
`;
const List = styled.ul`
    margin:.3rem 0 1rem 0;
    .card-list{
        text-transform:capitalize;
        width:80%;
        margin:auto;
        font-size:1.5rem;
        font-weight:400;
        color:white;
        border-bottom:.1rem solid #555;
        padding-top:.1rem;
        padding-bottom:.3rem;
    }
`;
const Fbtn = styled.button`
    margin-bottom:1rem;
`;
const BackSide = styled.div`
    position:absolute;
    top:0;
    left:0;
    background:var(--primary-color);
    width:100%;
    height:100%;
    flex-direction:column;
    border-radius:.5rem;
    transition:opacity .4s,transform .4s;
    justify-content:space-evenly;
    transform:${props => props.show ? 'translateZ(0) translateX(0)':'translateZ(-5rem) translateX(3rem)'};
    opacity:${props => props.show ? '1':'.5'};
    z-index:${props => props.show ? '10':'0'};
`;
const Bbtn = styled.button`
    position:absolute;
    top:.5rem;
    left:.5rem;
`;
const Bh = styled.div`
    font-size:5rem;
    text-transform:uppercase;
    font-weight:800;
    color:#fff;
    span{
        position:relative;
        top:0.6rem;
        margin-right:1rem;
    };
`;
const Bbtn2 = styled.button`
    background:#fff;
    padding:1rem 3rem;
    border-radius:5rem;
    font-size:2rem;
    border:none;
    text-transform:uppercase;
`;

export default Card
