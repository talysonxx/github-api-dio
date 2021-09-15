import styled from 'styled-components'

export const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  // padding: 5px;
  margin: 20px 0;

  input {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 35px;
    padding: 5px;
    margin-right: 20px;
    font-size: 14px;
  }
  button {
    color: #ffff;
    background-color: #1a73e8;
    padding: 10px 15px;
    border-radius: 4px;
    width: 10%;
    text-align: center;
    transition-duration: 0.2s;
  }
  button:hover {
    background-color: #2b7de9;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
  }
  button:active {
    background-color: #3d6ba8;
  }
  button span {
    transition: 0.2s;
    position: relative;
  }
  // test
  button span:after {
    content: '-';
    position: absolute;
    opacity 0;
    top: 0;
    right: -25px;
    transition: 0.2s;
  }
  button:hover span {
    padding-right: 25px;
  }
  button:hover span:after {
    opacity: 1;
    right: 0;
  }
`
