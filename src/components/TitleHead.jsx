import React from 'react'

const TitleHead = (props) => {
  return (
    <>
    <h3 className={props.className}>{props.title}</h3>
    </>
  )
}

export default TitleHead