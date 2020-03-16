import React, { FC, useState } from 'react'

import InputTextComponent from '@/components/InputTextComponent'
import InputPassComponent from '@/components/InputPassComponent'
import ButtonComponent from '@/components/ButtonComponent'

const LoginContainar: FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <>
      <div className="l-login-containar">
        <div className="l-login-containar__inner">
          <div className="l-login-containar__left">
          </div>
          <div className="l-login-containar__right">
            <div className="c-login-box">
              <h1 className="c-login-box__ttl">
                サインイン
              </h1>
              <div className="c-login-box__input">
                <p className="c-login-box__label">ユーザー名</p>
                <InputTextComponent str={username} fn={(string: string) => setUsername(string)} />
              </div>
              <div className="c-login-box__input">
                <p className="c-login-box__label">パスワード</p>
                <InputPassComponent str={password} fn={(string: string) => setPassword(string)} />
              </div>
              <div className="c-login-box__submit">
                <ButtonComponent str='ログインする'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginContainar
