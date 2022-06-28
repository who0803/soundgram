import React, { useState } from 'react'
import Card from '../Card';
import "./index.css"
import style from 'styles/common.module.scss'
import mainStyle from 'styles/pages/Main.module.css'

const Contents = (props) => {

  return (
    <div className={[style.contents, mainStyle.contents].join(" ")}>
      <div className={[style.con_in, mainStyle.con_in, style.clear].join(" ")}>
        <Card info={[props.info[0], "left"]}/>  
        {
          props.info[1] == undefined // props로 하나만 넘어오면
            ? 
            <div class="section right no_content">
              <img src="images/no_content.png" alt="콘텐츠 없음" />
            </div>
            : <Card info={[props.info[1], "right"]}/>  
            // info = [{title: '최근 올라온 부정글', tableId: 'negative_table', className: 'sec_ngtv sec_c01'}, "right"]
        }
        
      </div>
    </div>
  )
}

export default Contents