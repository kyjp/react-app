import React, { FC, useState } from 'react'

interface buttonProps {
  str: string,
  fn?: () => void
}

const ButtonComponent: FC<buttonProps> = ({
  str, fn
}) => {
  const [string, setString] = useState(str)
  return (
    <>
      <button type="button" className="c-button" onClick={() => {
        if (fn) {
          fn()
        }
      }}>
        { string }
      </button>
    </>
  )
}

export default ButtonComponent
