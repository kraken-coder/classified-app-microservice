import React from 'react'


import styled from 'styled-components'
import Login from './Login/Login'



const Root = () => {
    return (

        <Wrapper>
          <Container>
            <Content>
                content
            </Content>
            <Sidebar>
                <Login />
            </Sidebar>
          </Container>
        </Wrapper>
    )
}



const Container = styled.div`
display: flex;
flex-flow: row nowrap;
margin: auto;
width: 80rem;
`
const Content  = styled.div`
flex: 1;
margin-right: 1rem;
`
const Sidebar = styled.div`
flex: 0 auto;
width: 10rem;
`

const Wrapper =  styled.div`
box-sizing: border-box;
height: 100vh;
padding:  1rem;
width: 100%;  

`
export default Root
