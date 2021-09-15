import React, {useState} from 'react'
import * as S from './styled'
import {useGithub} from '../hooks'

export const Header = () => {
  const [input, setInput] = useState()
  const {getUser} = useGithub()

  function subimitGetUser() {
    if (!input) return

    return getUser(input)
  }

  return (
    <S.Wrapper>
      <input
      type='text'
      value={input}
      onChange={({target}) => setInput(target.value)}
      placeholder='Digite o @ do usuário'></input>

      <button type='submit' onClick={subimitGetUser}>Buscar <span></span></button>
    </S.Wrapper>
  )
}
