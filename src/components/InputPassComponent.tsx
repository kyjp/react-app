import React, { FC, useState } from 'react'

interface inputPassProps {
  str: string,
  fn?: (string: string) => void
}

const InputPassComponent: FC<inputPassProps> = ({
  str,fn
}) => {
  const [string, setString] = useState(str)
  return (
    <>
      <input
        type="password"
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

export default InputPassComponent
