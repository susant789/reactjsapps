import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section 
            title="Model S"
            img="model-s.jpg"
            desc="Order online for Home delivery"
            lbtn="Custom Order"
            rbtn="Existing Inventory"/>
            <Section 
            title="Model Y"
            img="model-y.jpg"
            desc="Order online for Home delivery"
            lbtn="Custom Order"
            rbtn="Existing Inventory"/>
            <Section 
            title="Model 3"
            img="model-3.jpg"
            desc="Order online for Home delivery"
            lbtn="Custom Order"
            rbtn="Existing Inventory"/>
            <Section 
            title="Model X"
            img="model-x.jpg"
            desc="Order online for Home delivery"
            lbtn="Custom Order"
            rbtn="Existing Inventory"/>
            <Section 
            title="Lowest cost Solar Panels in America"
            img="solar-panel.jpg"
            desc="Money back guarentee"
            lbtn="Order now"
            rbtn="Learn more"/>
            <Section 
            title="Solar for new roofs"
            img="solar-roof.jpg"
            desc="Solar roof costs less than a new roof"
            lbtn="Order now"
            rbtn="Existing Inventory"/>
            <Section 
            title="Accessories"
            img="accessories.jpg"
            desc="Order online for Home delivery"
            lbtn="Order now"/>
        </Container>
    )
}

export default Home

const Container = styled.div`
    height:100vh;
    }
`