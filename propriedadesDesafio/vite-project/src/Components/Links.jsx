import React from 'react'

const Links = (links) => {
  return (
    <a href={links.link} id={links.id}>{links.caminho}</a>
  )
}

export default Links
