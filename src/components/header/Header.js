import React, {useState} from 'react'
import * as S from './styled'

export const Header = () => {
  const [input, setInput] = useState('')

  return (
    <S.Wrapper>
      <input type='text' value={input} onChange={({target}) => setInput(target.value)} placeholder='Digite o @ do usuário'></input>
      <button type='submit' onClick={() => alert(input)}>Buscar <span></span></button>
    </S.Wrapper>
  )
}
