import React from 'react'

export const RepositoryItem = ({name, fullname, linkToRepo}) => {
  return (
    <div>
      <h2>{name}</h2>
      <h4>Nome completo:</h4>
      <a
      href={linkToRepo}
      target='_blank'
      rel="noreferrer" >
        {fullname}
      </a>
    </div>
  )
}
