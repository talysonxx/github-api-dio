import React from 'react'
import * as S from './styled'
import {RepositoryItem} from '../repository-item'

export const Respositories = () => {
  return (
    <S.WrapperTabs
      selectedTabClassName='is-selected'
      selectedTabPanelClassName='is-selected'>
        <S.WrapperTabList>
          <S.WrapperTab>Repositories</S.WrapperTab>
          <S.WrapperTab>Starred</S.WrapperTab>
        </S.WrapperTabList>

        <S.WrapperTabPanel>
          <RepositoryItem
          name='recriando interface netflix'
          fullname='talysonxx/recriando-interface-netflix'
          linkToRepo='https://github.com/talysonxx/recriando-interface-netflix'/>
        </S.WrapperTabPanel>
        <S.WrapperTabPanel>
        <RepositoryItem
        name='carousel'
        fullname='talysonxx/carousel'
        linkToRepo='https://github.com/talysonxx/carousel'/>
        </S.WrapperTabPanel>
    </S.WrapperTabs>
  )
}
