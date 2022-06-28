import React, { useEffect, useState } from 'react'
import style from 'styles/common.module.scss'
import mainStyle from 'styles/pages/Main.module.css'
import {drawProtalChart} from "chart/dashboard";
import {drawProgressWeekChart} from "utils/main_utils"
import {ChartBox, TableBox, MoreLink} from './contentboxes'
const Card = (props) => {

  let [contentBox, setContentBox] = useState();
  let [moreLink, setMoreLink] = useState("");

  // 차트 분기
  useEffect(() => {
    // 1. 차트가 존재하는 경우
    if(props.info[0].hasOwnProperty('chartId')) {
      //console.log("chartId11")
      if (props.info[0].chartId == "portal_chart") {
        const portalList = [];
        const portalListKo = [];
        portalList.push("Naver");
        portalListKo.push("네이버");
        portalList.push("Daum");
        portalListKo.push("다음");
        portalList.push("Google");
        portalListKo.push("구글");
        let data = {
          data: [
            {1: 0, 2: 0, 3: 0, 4: '1', 5: 0, no: 1, date: '2022-04-17', channel: '구글뉴스', total: 1},
            {1: 0, 2: '3', 3: '20', 4: '32', 5: 0, no: 2, date: '2022-04-17', channel: '네이버블로그', total: 55},
            {1: 0, 2: 0, 3: '1', 4: 0, 5: 0, no: 3, date: '2022-04-17', channel: '네이버동영상', total: 1},
            {1: 0, 2: 0, 3: '1', 4: 0, 5: 0, no: 4, date: '2022-04-17', channel: '다음블로그', total: 1},
            {1: 0, 2: '3', 3: '2', 4: '4', 5: 0, no: 5, date: '2022-04-17', channel: '네이버지식인', total: 9},
            {1: 0, 2: 0, 3: 0, 4: '1', 5: 0, no: 6, date: '2022-04-17', channel: '네이버뉴스', total: 1},
            {1: 0, 2: '12', 3: '20', 4: '116', 5: 0, no: 7, date: '2022-04-17', channel: '네이버카페', total: 148},
            {1: 0, 2: 0, 3: '2', 4: 0, 5: 0, no: 8, date: '2022-04-16', channel: '네이버동영상', total: 2},
            {1: 0, 2: 0, 3: 0, 4: '4', 5: 0, no: 9, date: '2022-04-16', channel: '네이버뉴스', total: 4},
            {1: 0, 2: '23', 3: '7', 4: '11', 5: 0, no: 10, date: '2022-04-16', channel: '네이버지식인', total: 41},
            {1: 0, 2: '6', 3: '28', 4: '70', 5: 0, no: 11, date: '2022-04-16', channel: '네이버블로그', total: 104},
            {1: 0, 2: '31', 3: '85', 4: '264', 5: 0, no: 12, date: '2022-04-16', channel: '네이버카페', total: 380},
            {1: 0, 2: 0, 3: '1', 4: '1', 5: 0, no: 13, date: '2022-04-15', channel: '구글통합검색', total: 2},
            {1: 0, 2: 0, 3: '3', 4: '1', 5: 0, no: 14, date: '2022-04-15', channel: '네이버동영상', total: 4},
            {1: 0, 2: 0, 3: '7', 4: '2', 5: 0, no: 15, date: '2022-04-15', channel: '구글뉴스', total: 9},
            {1: 0, 2: 0, 3: 0, 4: '8', 5: 0, no: 16, date: '2022-04-15', channel: '구글이미지', total: 8},
            {1: 0, 2: 0, 3: 0, 4: '3', 5: 0, no: 17, date: '2022-04-15', channel: '다음뉴스', total: 3},
            {1: 0, 2: 0, 3: '4', 4: '28', 5: 0, no: 18, date: '2022-04-15', channel: '네이버뉴스', total: 32},
            {1: 0, 2: '22', 3: '7', 4: '6', 5: 0, no: 19, date: '2022-04-15', channel: '네이버지식인', total: 35},
            {1: 0, 2: 0, 3: 0, 4: '2', 5: 0, no: 20, date: '2022-04-15', channel: '다음블로그', total: 2},
            {1: '6', 2: '42', 3: '95', 4: '324', 5: 0, no: 21, date: '2022-04-15', channel: '네이버카페', total: 467},
            {1: 0, 2: '8', 3: '27', 4: '88', 5: 0, no: 22, date: '2022-04-15', channel: '네이버블로그', total: 123},
            {1: 0, 2: '3', 3: '15', 4: '1', 5: 0, no: 23, date: '2022-04-14', channel: '구글뉴스', total: 19},
            {1: 0, 2: 0, 3: '1', 4: '4', 5: 0, no: 24, date: '2022-04-14', channel: '구글통합검색', total: 5},
            {1: 0, 2: 0, 3: 0, 4: '7', 5: 0, no: 25, date: '2022-04-14', channel: '구글이미지', total: 7},
            {1: 0, 2: '22', 3: '6', 4: '18', 5: 0, no: 26, date: '2022-04-14', channel: '네이버지식인', total: 46},
            {1: '3', 2: '64', 3: '158', 4: '330', 5: 0, no: 27, date: '2022-04-14', channel: '네이버카페', total: 555},
            {1: 0, 2: '1', 3: '4', 4: '22', 5: 0, no: 28, date: '2022-04-14', channel: '다음뉴스', total: 27},
            {1: 0, 2: 0, 3: 0, 4: '12', 5: 0, no: 29, date: '2022-04-14', channel: '다음블로그', total: 12},
            {1: 0, 2: '3', 3: '13', 4: '60', 5: 0, no: 30, date: '2022-04-14', channel: '네이버뉴스', total: 76},
            {1: 0, 2: '8', 3: '40', 4: '101', 5: 0, no: 31, date: '2022-04-14', channel: '네이버블로그', total: 149},
            {1: 0, 2: 0, 3: '1', 4: 0, 5: 0, no: 32, date: '2022-04-13', channel: '다음카페', total: 1},
            {1: 0, 2: 0, 3: 0, 4: '14', 5: 0, no: 33, date: '2022-04-13', channel: '구글이미지', total: 14},
            {1: 0, 2: 0, 3: 0, 4: '1', 5: 0, no: 34, date: '2022-04-13', channel: '네이버동영상', total: 1},
            {1: 0, 2: '2', 3: '13', 4: '24', 5: 0, no: 35, date: '2022-04-13', channel: '네이버뉴스', total: 39},
            {1: 0, 2: '1', 3: 0, 4: '4', 5: 0, no: 36, date: '2022-04-13', channel: '구글뉴스', total: 5},
            {1: 0, 2: 0, 3: '5', 4: '14', 5: 0, no: 37, date: '2022-04-13', channel: '다음뉴스', total: 19},
            {1: 0, 2: 0, 3: 0, 4: '6', 5: 0, no: 38, date: '2022-04-13', channel: '구글통합검색', total: 6},
            {1: 0, 2: '26', 3: '11', 4: '11', 5: 0, no: 39, date: '2022-04-13', channel: '네이버지식인', total: 48},
            {1: 0, 2: 0, 3: '1', 4: 0, 5: 0, no: 40, date: '2022-04-13', channel: '구글연관어', total: 1},
            {1: 0, 2: 0, 3: 0, 4: '8', 5: 0, no: 41, date: '2022-04-13', channel: '다음블로그', total: 8},
            {1: 0, 2: '10', 3: '27', 4: '87', 5: 0, no: 42, date: '2022-04-13', channel: '네이버블로그', total: 124},
            {1: '7', 2: '48', 3: '127', 4: '274', 5: 0, no: 43, date: '2022-04-13', channel: '네이버카페', total: 456},
            {1: 0, 2: 0, 3: '1', 4: 0, 5: 0, no: 44, date: '2022-04-12', channel: '다음카페', total: 1},
            {1: 0, 2: 0, 3: '2', 4: '21', 5: 0, no: 45, date: '2022-04-12', channel: '구글뉴스', total: 23},
            {1: 0, 2: 0, 3: 0, 4: '31', 5: 0, no: 46, date: '2022-04-12', channel: '구글동영상', total: 31},
            {1: 0, 2: 0, 3: 0, 4: '20', 5: 0, no: 47, date: '2022-04-12', channel: '구글통합검색', total: 20},
            {1: 0, 2: 0, 3: 0, 4: '10', 5: 0, no: 48, date: '2022-04-12', channel: '구글이미지', total: 10},
            {1: '5', 2: '42', 3: '126', 4: '286', 5: 0, no: 49, date: '2022-04-12', channel: '네이버카페', total: 459},
            {1: 0, 2: '2', 3: 0, 4: '23', 5: 0, no: 50, date: '2022-04-12', channel: '다음뉴스', total: 25},
            {1: 0, 2: '2', 3: '5', 4: '15', 5: 0, no: 51, date: '2022-04-12', channel: '네이버뉴스', total: 22},
            {1: 0, 2: 0, 3: 0, 4: '12', 5: 0, no: 52, date: '2022-04-12', channel: '다음블로그', total: 12},
            {1: 0, 2: '8', 3: '29', 4: '94', 5: 0, no: 53, date: '2022-04-12', channel: '네이버블로그', total: 131},
            {1: 0, 2: '28', 3: '8', 4: '10', 5: 0, no: 54, date: '2022-04-12', channel: '네이버지식인', total: 46},
            {1: 0, 2: 0, 3: 0, 4: '7', 5: 0, no: 55, date: '2022-04-12', channel: '네이버동영상', total: 7},
            {1: 0, 2: 0, 3: 0, 4: '1', 5: 0, no: 56, date: '2022-04-11', channel: '다음카페', total: 1},
            {1: 0, 2: 0, 3: '1', 4: '7', 5: 0, no: 57, date: '2022-04-11', channel: '다음뉴스', total: 8},
            {1: 0, 2: 0, 3: '1', 4: '6', 5: 0, no: 58, date: '2022-04-11', channel: '네이버동영상', total: 7},
            {1: 0, 2: 0, 3: 0, 4: '20', 5: 0, no: 59, date: '2022-04-11', channel: '구글뉴스', total: 20},
            {1: 0, 2: 0, 3: 0, 4: '26', 5: 0, no: 60, date: '2022-04-11', channel: '구글동영상', total: 26},
            {1: 0, 2: 0, 3: 0, 4: '3', 5: 0, no: 61, date: '2022-04-11', channel: '구글통합검색', total: 3},
            {1: '6', 2: '39', 3: '118', 4: '358', 5: 0, no: 62, date: '2022-04-11', channel: '네이버카페', total: 521},
            {1: 0, 2: 0, 3: 0, 4: '3', 5: 0, no: 63, date: '2022-04-11', channel: '구글이미지', total: 3},
            {1: 0, 2: 0, 3: 0, 4: '2', 5: 0, no: 64, date: '2022-04-11', channel: '다음블로그', total: 2},
            {1: 0, 2: 0, 3: '4', 4: '31', 5: 0, no: 65, date: '2022-04-11', channel: '네이버뉴스', total: 35},
            {1: 0, 2: '7', 3: '35', 4: '119', 5: 0, no: 66, date: '2022-04-11', channel: '네이버블로그', total: 161},
            {1: 0, 2: '20', 3: '6', 4: '15', 5: 0, no: 67, date: '2022-04-11', channel: '네이버지식인', total: 41},
          ]
        }
        //setContentBox(<div id={props.info[0].chartId}>{drawProtalChart(data, "portal_chart", portalList, portalListKo)}</div>);
        setContentBox(<ChartBox chartId={props.info[0].chartId}>{drawProtalChart(data, "portal_chart", portalList, portalListKo)}</ChartBox>);
      }
      else if (props.info[0].chartId == "week_com_chart") {
        let response = {
          data: [
            {1: 0, 2: 0, 3: 0, 4: '14', 5: 0, no: 1, date: '2022-04-12', channel: 'COM전체', total: 14},
            {1: 0, 2: 0, 3: 0, 4: '26', 5: 0, no: 2, date: '2022-04-11', channel: 'COM전체', total: 26}
          ]
        }
        //setContentBox(<div id={props.info[0].chartId}>{drawProgressWeekChart(response,"week_com_chart")}</div>);
        setContentBox(<ChartBox chartId={props.info[0].chartId}>{drawProgressWeekChart(response,"week_com_chart")}</ChartBox>);
      }
      //console.log("chartId22")
    }

    // 2. 테이블이 존재하는 경우
    if(props.info[0].hasOwnProperty('tableId')) {
      //console.log("tableId11")
      setContentBox(<TableBox tableId={props.info[0].tableId}></TableBox>); 
      //console.log("tableId22")
    }
      
      //setContentBox(<div className="sec_table"><table id={props.info[0].tableId}></table></div>); 

    // 3. 추가적인 컨텐츠가 존재하는 경우
    if(props.info[0].hasOwnProperty('conBox'))
      setContentBox(props.info[0].conBox); 

    if(props.info[0].hasOwnProperty('link'))
      setMoreLink(<MoreLink link={props.info[0].link}></MoreLink>);
      //setMoreLink(<span><a href={props.info[0].link} className="btn_more">more</a></span>);
  }, [])
  
  // props.info[0].className 
  // ? console.log(...props.info[0].className.split(" ").map(e=>mainStyle[e]))
  // : console.log(111)
  let [secName, setSecName] = useState(props.info[0].className ? props.info[0].className.split(" ").map(e=>mainStyle[e]) : [undefined])
  return (
    <div className={[style.section, mainStyle[props.info[1]]].join(" ")}>
      <div className={[mainStyle.sec_in, ...secName].join(" ")}>
        <div>
          <div className={mainStyle.tit}>
            <h3>{props.info[0].title}</h3>
            {moreLink}
          </div>
          <div className={mainStyle.con_box}>{contentBox}</div>
        </div>
      </div>
    </div>
  )
}




export default Card