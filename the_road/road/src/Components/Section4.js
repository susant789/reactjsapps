import React from 'react'
import styled from 'styled-components'
import background1 from "../images/contact-us-bg.png"

function Section4() {
    return (
        <Contact>
            <Heading>CONTACT US</Heading>
            <Contact_form>
                <Input_group>
                    <label>name</label>
                    <input type="text" placeholder="Enter your name"/>
                </Input_group>
                <Input_groups >
                    <Input_group className="contact-info">
                        <label>email</label>
                        <input type="text" placeholder="Email"/>
                    </Input_group>
                    <Input_group className="contact-info">
                        <label>phone</label>
                        <input type="text" placeholder="Phone"/>
                    </Input_group>
                </Input_groups>
                <Input_group>
                        <label>suggestion</label>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Enter your suggestion"></textarea>
                </Input_group>
                <input type="submit" value="submit"/>
            </Contact_form>
        </Contact>
    )
}

const Contact = styled.div`
    padding:11rem 0;
    text-align:center;
    background-size:cover;
    background-image:url(${background1});
    background-position:center;
    background-repeat:no-repeat;
    animation:contact-bg 50s infinite;
`;
const Heading = styled.h1`
    color:#fff;
    font-size:5rem;
    letter-spacing:.3rem;
    text-transform:uppercase;
    margin-bottom:2rem;
`;
const Contact_form = styled.form`
    width:70rem;
    margin:auto;
    padding:4rem;
    background:rgba(255,255,255,.95);
    border-radius:.3rem;
    >input{
        width:100%;
        height:5rem;
        margin-top:1rem;
        background:#999;
        outline:none;
        border:none;
        font-size:2rem;
        text-transform:uppercase;
        color:#fff;
        border-radius:.3rem;
        transition:all .3s;
        &:hover{
            background:grey;
        }
    }
`;
const Input_group = styled.div`
    display:flex;
    flex-direction:column;
    margin:1rem 0;
    position:relative;
    input,textarea{
        padding:3rem 1rem 1rem 1rem;
        text-transform:uppercase;
        border-radius:.3rem;
        outline:none;
        border:.1rem solid transparent;
        background:#999;
        color:#ddd;
        transition:all .3s;

        &:hover{
            border:.1rem solid black;
        }
    };
    label{
        text-transform:uppercase;
        font-size:1.4rem;
        font-weight:700;
        position:absolute;
        top:.5rem;
        left:1.1rem;
    }
    textarea{
        max-width:100%;
        max-height:10rem;
    }
`;
const Input_groups = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    flex-direction:row;

    .contact-info{
        width:48%;

    }
`;

export default Section4
