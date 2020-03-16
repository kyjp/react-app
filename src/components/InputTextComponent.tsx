import React, { FC, useState } from 'react'

interface inputTextProps {
  str: string,
  fn?: (string: string) => void
}

const InputTextComponent: FC<inputTextProps> = ({
  str, fn
}) => {
  const [string, setString] = useState(str)
  return (
    <>
      <input
        type="text"
        value={string}
        onChange={e => {
          setString(e.target.value)
          if (fn) {
            fn(e.target.value)
          }
        }}
        className="c-input-text"
      />
    </>
  )
}

export default InputTextComponent
