import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import ChartComponent from '@/components/ChartComponent'
import {Helmet, HelmetProvider } from 'react-helmet-async'

const DetailContainar: FC = () => {
  return (
    <>
      <HelmetProvider >
        <Helmet>
          <title>詳細ページ</title>
        </Helmet>
        <div className="l-container">
          <div className="l-container__inner">
            <ul>
              <li>
                <Link to="/">
                  TOPページ
                </Link>
              </li>
              <li>
                詳細ページ
              </li>
            </ul>
            <div className="c-class-box">
              <div className="c-class-box__main">
                <h2>
                  会社名
                </h2>
                <div className="c-class-box__score">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                </div>
                <p>
                  会社の概要です会社の概要です会社の概要です会社の概要です会社の概要です会社の概要です会社の概要です会社の概要です会社の概要です会社の概要です会社の概要です会社の概要です会社の概要です会社の概要です会社の概要です会社の概要です会社の概要です
                </p>
              </div>
              <div className="c-class-box__right">
                <ChartComponent />
              </div>
              <div className="c-class-box__review">
                <h3>
                  レビュー
                </h3>
                <div>
                  <h4>
                    名前
                  </h4>
                  <img src="" alt="アイコン"/>
                  <p>
                    ****年**月**日
                  </p>
                  <p>
                    レビュー内容
                    レビュー内容
                    レビュー内容
                    レビュー内容
                    レビュー内容
                    レビュー内容
                    レビュー内容
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HelmetProvider>
    </>
  )
}

export default DetailContainar
