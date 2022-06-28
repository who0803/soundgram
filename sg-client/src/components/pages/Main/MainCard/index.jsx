import React, { useEffect, useState } from "react";
import mainStyle from "styles/pages/Main.module.css";
import {drawT100Chart, drawt100WeekChart} from 'utils/main_utils'

// 받아온 데이터로 차트 만들 예정
const LeftChart = () => {
    let channelIdToName, channelIds, data;
    let [portalTodayDonutChart, setPortalTodayDonutChart] = useState(); //브랜드 검색 평판 today 전체
    let [portalTodayDonutCharts, setPortalTodayDonutCharts] = useState([]); //브랜드 검색 평판 today 채널별

    // ajax 요청하고 차트 그리기
    useEffect(() => {
        channelIdToName = {
            news: "뉴스",
            cafe: "카페",
            blog: "블로그",
            jisik_in: "지식인",
            video: "동영상",
        };
        channelIds = {
            뉴스: "news",
            카페: "cafe",
            블로그: "blog",
            지식인: "jisik_in",
            동영상: "video",
        };
        data = [
            { channel_id: "news", rate: { rate: 2 } },
            { channel_id: "news", rate: { rate: 2 } },
            { channel_id: "news", rate: { rate: 2 } },
            { channel_id: "news", rate: { rate: 3 } },
            { channel_id: "news", rate: { rate: 3 } },
            { channel_id: "news", rate: { rate: 3 } },
            { channel_id: "news", rate: { rate: 3 } },
            { channel_id: "news", rate: { rate: 3 } },
            { channel_id: "news", rate: { rate: 3 } },
            { channel_id: "news", rate: { rate: 3 } },
            { channel_id: "news", rate: { rate: 3 } },
            { channel_id: "news", rate: { rate: 3 } },
            { channel_id: "news", rate: { rate: 3 } },
            { channel_id: "news", rate: { rate: 3 } },
            { channel_id: "news", rate: { rate: 4 } },
            { channel_id: "news", rate: { rate: 4 } },
            { channel_id: "news", rate: { rate: 4 } },
            { channel_id: "news", rate: { rate: 4 } },
            { channel_id: "news", rate: { rate: 4 } },

            { channel_id: "cafe", rate: { rate: 1 } },
            { channel_id: "cafe", rate: { rate: 1 } },
            { channel_id: "cafe", rate: { rate: 1 } },
            { channel_id: "cafe", rate: { rate: 2 } },
            { channel_id: "cafe", rate: { rate: 2 } },
            { channel_id: "cafe", rate: { rate: 2 } },
            { channel_id: "cafe", rate: { rate: 3 } },
            { channel_id: "cafe", rate: { rate: 3 } },
            { channel_id: "cafe", rate: { rate: 3 } },
            { channel_id: "cafe", rate: { rate: 3 } },
            { channel_id: "cafe", rate: { rate: 3 } },
            { channel_id: "cafe", rate: { rate: 3 } },
            { channel_id: "cafe", rate: { rate: 3 } },
            { channel_id: "cafe", rate: { rate: 3 } },
            { channel_id: "cafe", rate: { rate: 4 } },
            { channel_id: "cafe", rate: { rate: 4 } },
            { channel_id: "cafe", rate: { rate: 4 } },
            { channel_id: "cafe", rate: { rate: 4 } },
            { channel_id: "cafe", rate: { rate: 4 } },

            { channel_id: "blog", rate: { rate: 2 } },
            { channel_id: "blog", rate: { rate: 2 } },
            { channel_id: "blog", rate: { rate: 2 } },
            { channel_id: "blog", rate: { rate: 2 } },
            { channel_id: "blog", rate: { rate: 2 } },
            { channel_id: "blog", rate: { rate: 2 } },
            { channel_id: "blog", rate: { rate: 3 } },
            { channel_id: "blog", rate: { rate: 3 } },
            { channel_id: "blog", rate: { rate: 3 } },
            { channel_id: "blog", rate: { rate: 3 } },
            { channel_id: "blog", rate: { rate: 3 } },
            { channel_id: "blog", rate: { rate: 3 } },
            { channel_id: "blog", rate: { rate: 3 } },
            { channel_id: "blog", rate: { rate: 3 } },
            { channel_id: "blog", rate: { rate: 4 } },
            { channel_id: "blog", rate: { rate: 4 } },
            { channel_id: "blog", rate: { rate: 4 } },
            { channel_id: "blog", rate: { rate: 4 } },
            { channel_id: "blog", rate: { rate: 4 } },

            { channel_id: "jisik_in", rate: { rate: 2 } },
            { channel_id: "jisik_in", rate: { rate: 2 } },
            { channel_id: "jisik_in", rate: { rate: 2 } },
            { channel_id: "jisik_in", rate: { rate: 2 } },
            { channel_id: "jisik_in", rate: { rate: 2 } },
            { channel_id: "jisik_in", rate: { rate: 2 } },
            { channel_id: "jisik_in", rate: { rate: 2 } },
            { channel_id: "jisik_in", rate: { rate: 2 } },
            { channel_id: "jisik_in", rate: { rate: 2 } },
            { channel_id: "jisik_in", rate: { rate: 3 } },
            { channel_id: "jisik_in", rate: { rate: 3 } },
            { channel_id: "jisik_in", rate: { rate: 3 } },
            { channel_id: "jisik_in", rate: { rate: 3 } },
            { channel_id: "jisik_in", rate: { rate: 3 } },
            { channel_id: "jisik_in", rate: { rate: 3 } },
            { channel_id: "jisik_in", rate: { rate: 3 } },
            { channel_id: "jisik_in", rate: { rate: 3 } },
            { channel_id: "jisik_in", rate: { rate: 3 } },
            { channel_id: "jisik_in", rate: { rate: 4 } },

            { channel_id: "video", rate: { rate: 2 } },
            { channel_id: "video", rate: { rate: 2 } },
            { channel_id: "video", rate: { rate: 2 } },
            { channel_id: "video", rate: { rate: 3 } },
            { channel_id: "video", rate: { rate: 3 } },
            { channel_id: "video", rate: { rate: 3 } },
            { channel_id: "video", rate: { rate: 3 } },
            { channel_id: "video", rate: { rate: 3 } },
            { channel_id: "video", rate: { rate: 3 } },
            { channel_id: "video", rate: { rate: 3 } },
            { channel_id: "video", rate: { rate: 3 } },
            { channel_id: "video", rate: { rate: 3 } },
            { channel_id: "video", rate: { rate: 4 } },
            { channel_id: "video", rate: { rate: 4 } },
            { channel_id: "video", rate: { rate: 4 } },
            { channel_id: "video", rate: { rate: 4 } },
            { channel_id: "video", rate: { rate: 4 } },
            { channel_id: "video", rate: { rate: 4 } },
            { channel_id: "video", rate: { rate: 4 } },
        ];
        let [chart, chartArr] = drawT100Chart(data, channelIds, channelIdToName);
        setPortalTodayDonutChart(chart);
        setPortalTodayDonutCharts(chartArr);
    }, []);

    //console.log(portalTodayDonutCharts.length);
    //console.log(portalTodayDonutChart)

    return (
        <div className={mainStyle.left}>
            <div className={[mainStyle.l_top, mainStyle.tit]}>
                <h3>브랜드 검색 평판</h3>
                <select className={mainStyle.keyword} id="keyword">
                    <option value="" data-class="">
                        키워드를 선택하세요.
                    </option>
                    {/* <?php foreach($keyword_array as $keyword => $class) : ?> */}
                    <option
                        value="<?=$keyword?>"
                        data-naver="<?=$class['네이버']?>"
                        data-daum="<?=$class['다음']?>"
                        data-google="<?=$class['구글']?>"
                    ></option>
                    {/* <?php endforeach;?> */}
                </select>
                <div className={mainStyle.grp_ref}>
                    <span>
                        <b></b>긍정
                    </span>
                    <span>
                        <b></b>부정
                    </span>
                    <span>
                        <b></b>중립
                    </span>
                    <span>
                        <b></b>무관
                    </span>
                </div>
            </div>
            <div className={mainStyle.l_mid}>
                <div className={mainStyle.m_left} id="t100_chart_total">
                    {portalTodayDonutChart}
                </div>
                <div className={mainStyle.m_right}>
                    {/* <ul className="show_t100 hidden"> 원래 이거였음*/}
                    <ul className="show_t100">
                        {
                            portalTodayDonutCharts.map((e, i) => {
                                return (
                                    <li key={i}>
                                        <div
                                            className={mainStyle.t100_chart}
                                            id={`t100_chart_${i}`}
                                        >
                                            {portalTodayDonutCharts[i]}
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    {/* <ul className="no_data"> */}
                    <ul className="no_data hidden">
                        해당 채널에 없는 키워드입니다.
                    </ul>
                </div>
            </div>
            <div className={mainStyle.l_bottom}>
                <span>- TODAY -</span>
            </div>
        </div>
    );
};

const RightChart = () => {
    let data;
    let [portalWeeklyLineChart, setPortalWeeklyLineChart] = useState(); //브랜드 검색 편판 Weekly


    
    useEffect(() => {
        data = {
            2165685: {1: 2, 2: 21, 3: 51, 4: 21, 5: 0, time: '2022-04-09'},
            2166019: {1: 2, 2: 22, 3: 50, 4: 21, 5: 0, time: '2022-04-09'},
            2167436: {1: 2, 2: 22, 3: 49, 4: 22, 5: 0, time: '2022-04-10'},
            2168318: {1: 2, 2: 21, 3: 47, 4: 25, 5: 0, time: '2022-04-10'},
            2169031: {1: 2, 2: 21, 3: 47, 4: 25, 5: 0, time: '2022-04-11'},
            2169289: {1: 2, 2: 24, 3: 45, 4: 24, 5: 0, time: '2022-04-11'},
            2171548: {1: 3, 2: 23, 3: 46, 4: 23, 5: 0, time: '2022-04-12'},
            2171954: {1: 3, 2: 23, 3: 43, 4: 26, 5: 0, time: '2022-04-12'},
            2172463: {1: 3, 2: 23, 3: 43, 4: 26, 5: 0, time: '2022-04-12'},
            2173155: {1: 3, 2: 23, 3: 44, 4: 25, 5: 0, time: '2022-04-13'},
            2174456: {1: 3, 2: 24, 3: 45, 4: 23, 5: 0, time: '2022-04-14'},
            2175057: {1: 3, 2: 25, 3: 46, 4: 21, 5: 0, time: '2022-04-14'},
            2175110: {1: 3, 2: 24, 3: 45, 4: 23, 5: 0, time: '2022-04-14'},
            2175380: {1: 2, 2: 24, 3: 46, 4: 23, 5: 0, time: '2022-04-14'},
            2176566: {1: 2, 2: 25, 3: 45, 4: 23, 5: 0, time: '2022-04-15'},
        }
        setPortalWeeklyLineChart(drawt100WeekChart(data))
    }, []);
    return (    
        <div className={mainStyle.right}>
            <div
                className={[mainStyle.r_top, mainStyle.claer].join(" ")}
                id="r_top_portals"
            >
                {/* <?php if (substr($PORTAL_G_FLAG, 1, 1)) : ?> */}
                <button
                    type="button"
                    className={[mainStyle.t100_tab, mainStyle.google].join(" ")}
                    data-class="구글"
                >
                    <span>Google</span>
                </button>
                {/* <?php endif; ?> */}
                <button
                    type="button"
                    className={[mainStyle.t100_tab, mainStyle.daum].join(" ")}
                    data-class="다음"
                >
                    <span>Daum</span>
                </button>
                <button
                    type="button"
                    className={[
                        mainStyle.t100_tab,
                        mainStyle.naver,
                        mainStyle.active,
                    ].join(" ")}
                    data-class="네이버"
                >
                    <span>NAVER</span>
                </button>
            </div>
            <div className={mainStyle.r_mid} id="t100_week_chart">{portalWeeklyLineChart}</div>
            <div className={mainStyle.r_bottom}>
                <span>- WEEKLY -</span>
            </div>
        </div>
    );
};

export { LeftChart, RightChart };
