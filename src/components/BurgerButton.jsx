import React from 'react'
import styled from 'styled-components'

function BurgerButton(props) {
  return (
    <Burger>
      <div onClick={props.handleClick} className={`icon nav-icon ${props.clicked ? 'open' : ''}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Burger>
  )
}

export default BurgerButton

const Burger = styled.div`
  .nav-icon {
    width: 35px;
    height: 30px;
    margin: 10px 10px;
    position: relative;
    cursor: pointer;
    display: inline-block;
  }

  .nav-icon span {
    background-color: #F2F2F2;
    position: absolute;
    transition: .3s cubic-bezier(.8, .5, .2, 1.4);
    width: 100%;
    height: 4px;
    transition-duration: 500ms;
  }

  .nav-icon span:nth-child(1) {
    top: 0px;
    left: 0px;
  }

  .nav-icon span:nth-child(2) {
    top: 13px;
    left: 0px;
    opacity: 1;
  }

  .nav-icon span:nth-child(3) {
    bottom: 0px;
    left: 0px;
  }

  .nav-icon.open span:nth-child(1) {
    transform: rotate(45deg);
    top: 13px;
  }

  .nav-icon.open span:nth-child(2) {
    opacity: 0;
  }
  .nav-icon.open span:nth-child(3) {
    transform: rotate(-45deg);
    top: 13px;
  }
`