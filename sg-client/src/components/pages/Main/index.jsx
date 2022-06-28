import React, { useState } from 'react'
import style from 'styles/common.module.scss'
import mainStyle from 'styles/pages/Main.module.css'
import * as dateFns from "date-fns";
import {LeftChart, RightChart} from './MainCard/index';
const Main = () => {
  const today = dateFns.format(new Date(), "yyyy-MM-dd HH:mm")

  return (
    <>
      <div className={[style.contents, mainStyle.contents, style.con01, mainStyle.con01].join(" ")}>
        <div className={[style.con_in, mainStyle.con_in].join(" ")}>
          <div className={mainStyle.main_tit}>
            <div className={mainStyle.brand_name}>
              <span className={mainStyle.h_t}></span>
              <h2>
                <img src="<?=$customer_logo?>" alt="브랜드로고" />
                <span className={[mainStyle.name_txt, mainStyle.on].join(" ")}>회사이름</span>
              </h2>
            </div>
            <p>기준 : {today}</p>
          </div>
          <div className={[style.section, mainStyle.section].join(" ")}>
            <div className={[style.section_in, mainStyle.section_in].join(" ")}>
              {/* 이부분 */}
              <LeftChart/>
              {/* 이부분 */}
              <RightChart/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main