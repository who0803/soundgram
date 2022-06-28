import React, { useEffect, useState } from 'react'
import commonStyle from 'styles/common.module.scss'
import mainStyle from 'styles/pages/Main.module.css'
import {drawKeywordChart, drawTwtChart} from "chart/dashboard";
import {drawProgressWeekChart} from "utils/main_utils"

// 기본 차트
export const ChartBox = ({ children, chartId }) => {
    return (
        <div id={chartId}>{children}</div>
    )
}

// 기본 테이블
export const TableBox = ({ children, tableId }) => {
    let [response, setResponse] = useState();
    useEffect(() => {
        let res = {
            data: [
                {   // 0
                    channel: "네이버카페",
                    contents: {
                        channel: "맘스홀릭 베이비 (300만 엄마들의 임신, 육아 지식in 카페)",
                        contents: "07이였어요 혼합하다가 완분으로 간지5일정도 되었고 조리원에서부터아이엠마더먹어서 바꿀까하다가 스트레스 받을까해서 그대로아이엠마더로 먹고 있어요 평소에...",
                        create_date: "2022-05-03 11:33:00",
                        title: "분유 바꿔야할까요?",
                        url: "http://cafe.naver.com/imsanbu/60732623",
                        writer: "Daaaand",
                    }
                },
                {   // 1
                    channel: "네이버카페",
                    contents: {
                        channel: "맘스홀릭 베이비 (300만 엄마들의 임신, 육아 지식in 카페)",
                        contents: "26일남아남양임페리얼xo - 압타밀 - 노발락 AC 배앓이때문에 위에 대로 분유 바꾸고 방금전에 처음으로 노발락 AC먹였는데 생각보다 많이 게워내네요 ㅠㅠ 그전 분유는 게워도...",
                        create_date: "2022-05-03 11:21:00",
                        title: "노발락 AC먹고 게우는 아기 있나요? 배앓이 때문에 분유 바꿨는데 게워서 당황스러워여 ㅠㅠㅠ",
                        url: "http://cafe.naver.com/imsanbu/60732392",
                        writer: "루루바바",
                    }

                },
                {   // 2
                    channel: "네이버카페",
                    contents: {
                        channel: "대구맘 365 - 결혼, 임신, 출산, 육아, 교육,성형,부동산,DIY",
                        contents: "현재 109일된 아기예요 완분아기이고임페리얼먹이고 있어용 단계업기준이 100일 이후 7키로 이상이면 단계업 시켜주면된다고해서 ㅠㅠ 100일 지나자 마자 단계업...",
                        create_date: "2022-05-03 11:11:00",
                        title: "백일아기 분유 단계용 ㅠㅠ",
                        url: "http://cafe.naver.com/dgmom365/5828735",
                        writer: "달서v도원",
                    }

                },
                {   // 3
                    channel: "네이버카페",
                    contents: {
                        channel: "맘스홀릭 베이비 (300만 엄마들의 임신, 육아 지식in 카페)",
                        contents: "임페리얼수유중인 109일 아기예요 ㅠ 100일이후 7키로 넘으면 단계 업 시켜주라고 해서 단계업 했는데 이후 수유량도 확 줄고 엄청 자주 개워내고 ㅠㅠㅠㅠ 포동포동...",
                        create_date: "2022-05-03 10:48:00",
                        title: "분유 단계업 이후요 ㅠㅠ",
                        url: "http://cafe.naver.com/imsanbu/60731830",
                        writer: "이대루",
                    }
                },
                {   // 4
                    channel: "네이버카페",
                    contents: {
                        channel: "맘스홀릭 베이비 (300만 엄마들의 임신, 육아 지식in 카페)",
                        contents: "조리원에서아이엠마더1단계 먹이고 있는데 트름도 잘 시키고 하는데 누워서 조금만 지나면 게워내내요 ㅠㅠ 몸무게는 잘 늘고 있긴 한데 문제 없는거겟죠?ㅠㅠ 분유가 안...",
                        create_date: "2022-05-03 10:43:00",
                        title: "신생아 분유게워냄",
                        url: "http://cafe.naver.com/imsanbu/60731763",
                        writer: "psun0643",
                    }
                },
                {   // 5
                    channel: "네이버카페",
                    contents: {
                        channel: "맘스홀릭 베이비 (300만 엄마들의 임신, 육아 지식in 카페)",
                        contents: "07이였어요 혼합하다가 완분으로 간지5일정도 되었고 조리원에서부터아이엠마더먹어서 바꿀까하다가 스트레스 받을까해서 그대로아이엠마더로 먹고 있어요 평소에...",
                        create_date: "2022-05-03 11:33:00",
                        title: "분유 바꿔야할까요?",
                        url: "http://cafe.naver.com/imsanbu/60732623",
                        writer: "Daaaand",
                    }
                },
                {   // 6
                    channel: "네이버카페",
                    contents: {
                        channel: "맘스홀릭 베이비 (300만 엄마들의 임신, 육아 지식in 카페)",
                        contents: "26일남아남양임페리얼xo - 압타밀 - 노발락 AC 배앓이때문에 위에 대로 분유 바꾸고 방금전에 처음으로 노발락 AC먹였는데 생각보다 많이 게워내네요 ㅠㅠ 그전 분유는 게워도...",
                        create_date: "2022-05-03 11:21:00",
                        title: "노발락 AC먹고 게우는 아기 있나요? 배앓이 때문에 분유 바꿨는데 게워서 당황스러워여 ㅠㅠㅠ",
                        url: "http://cafe.naver.com/imsanbu/60732392",
                        writer: "루루바바",
                    }

                },
                {   // 7
                    channel: "네이버카페",
                    contents: {
                        channel: "대구맘 365 - 결혼, 임신, 출산, 육아, 교육,성형,부동산,DIY",
                        contents: "현재 109일된 아기예요 완분아기이고임페리얼먹이고 있어용 단계업기준이 100일 이후 7키로 이상이면 단계업 시켜주면된다고해서 ㅠㅠ 100일 지나자 마자 단계업...",
                        create_date: "2022-05-03 11:11:00",
                        title: "백일아기 분유 단계용 ㅠㅠ",
                        url: "http://cafe.naver.com/dgmom365/5828735",
                        writer: "달서v도원",
                    }

                },
                {   // 8
                    channel: "네이버카페",
                    contents: {
                        channel: "맘스홀릭 베이비 (300만 엄마들의 임신, 육아 지식in 카페)",
                        contents: "임페리얼수유중인 109일 아기예요 ㅠ 100일이후 7키로 넘으면 단계 업 시켜주라고 해서 단계업 했는데 이후 수유량도 확 줄고 엄청 자주 개워내고 ㅠㅠㅠㅠ 포동포동...",
                        create_date: "2022-05-03 10:48:00",
                        title: "분유 단계업 이후요 ㅠㅠ",
                        url: "http://cafe.naver.com/imsanbu/60731830",
                        writer: "이대루",
                    }
                },
                {   // 9
                    channel: "네이버카페",
                    contents: {
                        channel: "맘스홀릭 베이비 (300만 엄마들의 임신, 육아 지식in 카페)",
                        contents: "조리원에서아이엠마더1단계 먹이고 있는데 트름도 잘 시키고 하는데 누워서 조금만 지나면 게워내내요 ㅠㅠ 몸무게는 잘 늘고 있긴 한데 문제 없는거겟죠?ㅠㅠ 분유가 안...",
                        create_date: "2022-05-03 10:43:00",
                        title: "신생아 분유게워냄",
                        url: "http://cafe.naver.com/imsanbu/60731763",
                        writer: "psun0643",
                    }
                },
                {   // 10
                    channel: "네이버카페",
                    contents: {
                        channel: "맘스홀릭 베이비 (300만 엄마들의 임신, 육아 지식in 카페)",
                        contents: "07이였어요 혼합하다가 완분으로 간지5일정도 되었고 조리원에서부터아이엠마더먹어서 바꿀까하다가 스트레스 받을까해서 그대로아이엠마더로 먹고 있어요 평소에...",
                        create_date: "2022-05-03 11:33:00",
                        title: "분유 바꿔야할까요?",
                        url: "http://cafe.naver.com/imsanbu/60732623",
                        writer: "Daaaand",
                    }
                },
                {   // 11
                    channel: "네이버카페",
                    contents: {
                        channel: "맘스홀릭 베이비 (300만 엄마들의 임신, 육아 지식in 카페)",
                        contents: "26일남아남양임페리얼xo - 압타밀 - 노발락 AC 배앓이때문에 위에 대로 분유 바꾸고 방금전에 처음으로 노발락 AC먹였는데 생각보다 많이 게워내네요 ㅠㅠ 그전 분유는 게워도...",
                        create_date: "2022-05-03 11:21:00",
                        title: "노발락 AC먹고 게우는 아기 있나요? 배앓이 때문에 분유 바꿨는데 게워서 당황스러워여 ㅠㅠㅠ",
                        url: "http://cafe.naver.com/imsanbu/60732392",
                        writer: "루루바바",
                    }

                },
                {   // 12
                    channel: "네이버카페",
                    contents: {
                        channel: "대구맘 365 - 결혼, 임신, 출산, 육아, 교육,성형,부동산,DIY",
                        contents: "현재 109일된 아기예요 완분아기이고임페리얼먹이고 있어용 단계업기준이 100일 이후 7키로 이상이면 단계업 시켜주면된다고해서 ㅠㅠ 100일 지나자 마자 단계업...",
                        create_date: "2022-05-03 11:11:00",
                        title: "백일아기 분유 단계용 ㅠㅠ",
                        url: "http://cafe.naver.com/dgmom365/5828735",
                        writer: "달서v도원",
                    }

                },
                {   // 13
                    channel: "네이버카페",
                    contents: {
                        channel: "맘스홀릭 베이비 (300만 엄마들의 임신, 육아 지식in 카페)",
                        contents: "임페리얼수유중인 109일 아기예요 ㅠ 100일이후 7키로 넘으면 단계 업 시켜주라고 해서 단계업 했는데 이후 수유량도 확 줄고 엄청 자주 개워내고 ㅠㅠㅠㅠ 포동포동...",
                        create_date: "2022-05-03 10:48:00",
                        title: "분유 단계업 이후요 ㅠㅠ",
                        url: "http://cafe.naver.com/imsanbu/60731830",
                        writer: "이대루",
                    }
                },
                {   // 14
                    channel: "네이버카페",
                    contents: {
                        channel: "맘스홀릭 베이비 (300만 엄마들의 임신, 육아 지식in 카페)",
                        contents: "조리원에서아이엠마더1단계 먹이고 있는데 트름도 잘 시키고 하는데 누워서 조금만 지나면 게워내내요 ㅠㅠ 몸무게는 잘 늘고 있긴 한데 문제 없는거겟죠?ㅠㅠ 분유가 안...",
                        create_date: "2022-05-03 10:43:00",
                        title: "신생아 분유게워냄",
                        url: "http://cafe.naver.com/imsanbu/60731763",
                        writer: "psun0643",
                    }
                },
                {   // 15
                    channel: "네이버카페",
                    contents: {
                        channel: "맘스홀릭 베이비 (300만 엄마들의 임신, 육아 지식in 카페)",
                        contents: "07이였어요 혼합하다가 완분으로 간지5일정도 되었고 조리원에서부터아이엠마더먹어서 바꿀까하다가 스트레스 받을까해서 그대로아이엠마더로 먹고 있어요 평소에...",
                        create_date: "2022-05-03 11:33:00",
                        title: "분유 바꿔야할까요?",
                        url: "http://cafe.naver.com/imsanbu/60732623",
                        writer: "Daaaand",
                    }
                },
                {   // 16
                    channel: "네이버카페",
                    contents: {
                        channel: "맘스홀릭 베이비 (300만 엄마들의 임신, 육아 지식in 카페)",
                        contents: "26일남아남양임페리얼xo - 압타밀 - 노발락 AC 배앓이때문에 위에 대로 분유 바꾸고 방금전에 처음으로 노발락 AC먹였는데 생각보다 많이 게워내네요 ㅠㅠ 그전 분유는 게워도...",
                        create_date: "2022-05-03 11:21:00",
                        title: "노발락 AC먹고 게우는 아기 있나요? 배앓이 때문에 분유 바꿨는데 게워서 당황스러워여 ㅠㅠㅠ",
                        url: "http://cafe.naver.com/imsanbu/60732392",
                        writer: "루루바바",
                    }

                },
                {   // 17
                    channel: "네이버카페",
                    contents: {
                        channel: "대구맘 365 - 결혼, 임신, 출산, 육아, 교육,성형,부동산,DIY",
                        contents: "현재 109일된 아기예요 완분아기이고임페리얼먹이고 있어용 단계업기준이 100일 이후 7키로 이상이면 단계업 시켜주면된다고해서 ㅠㅠ 100일 지나자 마자 단계업...",
                        create_date: "2022-05-03 11:11:00",
                        title: "백일아기 분유 단계용 ㅠㅠ",
                        url: "http://cafe.naver.com/dgmom365/5828735",
                        writer: "달서v도원",
                    }

                },
                {   // 18
                    channel: "네이버카페",
                    contents: {
                        channel: "맘스홀릭 베이비 (300만 엄마들의 임신, 육아 지식in 카페)",
                        contents: "임페리얼수유중인 109일 아기예요 ㅠ 100일이후 7키로 넘으면 단계 업 시켜주라고 해서 단계업 했는데 이후 수유량도 확 줄고 엄청 자주 개워내고 ㅠㅠㅠㅠ 포동포동...",
                        create_date: "2022-05-03 10:48:00",
                        title: "분유 단계업 이후요 ㅠㅠ",
                        url: "http://cafe.naver.com/imsanbu/60731830",
                        writer: "이대루",
                    }
                },
                {   // 19
                    channel: "네이버카페",
                    contents: {
                        channel: "맘스홀릭 베이비 (300만 엄마들의 임신, 육아 지식in 카페)",
                        contents: "조리원에서아이엠마더1단계 먹이고 있는데 트름도 잘 시키고 하는데 누워서 조금만 지나면 게워내내요 ㅠㅠ 몸무게는 잘 늘고 있긴 한데 문제 없는거겟죠?ㅠㅠ 분유가 안...",
                        create_date: "2022-05-03 10:43:00",
                        title: "신생아 분유게워냄",
                        url: "http://cafe.naver.com/imsanbu/60731763",
                        writer: "psun0643",
                    }
                },
                {   // 20
                    channel: "네이버카페",
                    contents: {
                        channel: "맘스홀릭 베이비 (300만 엄마들의 임신, 육아 지식in 카페)",
                        contents: "07이였어요 혼합하다가 완분으로 간지5일정도 되었고 조리원에서부터아이엠마더먹어서 바꿀까하다가 스트레스 받을까해서 그대로아이엠마더로 먹고 있어요 평소에...",
                        create_date: "2022-05-03 11:33:00",
                        title: "분유 바꿔야할까요?",
                        url: "http://cafe.naver.com/imsanbu/60732623",
                        writer: "Daaaand",
                    }
                },
                {   // 21
                    channel: "네이버카페",
                    contents: {
                        channel: "맘스홀릭 베이비 (300만 엄마들의 임신, 육아 지식in 카페)",
                        contents: "26일남아남양임페리얼xo - 압타밀 - 노발락 AC 배앓이때문에 위에 대로 분유 바꾸고 방금전에 처음으로 노발락 AC먹였는데 생각보다 많이 게워내네요 ㅠㅠ 그전 분유는 게워도...",
                        create_date: "2022-05-03 11:21:00",
                        title: "노발락 AC먹고 게우는 아기 있나요? 배앓이 때문에 분유 바꿨는데 게워서 당황스러워여 ㅠㅠㅠ",
                        url: "http://cafe.naver.com/imsanbu/60732392",
                        writer: "루루바바",
                    }

                },
                {   // 22
                    channel: "네이버카페",
                    contents: {
                        channel: "대구맘 365 - 결혼, 임신, 출산, 육아, 교육,성형,부동산,DIY",
                        contents: "현재 109일된 아기예요 완분아기이고임페리얼먹이고 있어용 단계업기준이 100일 이후 7키로 이상이면 단계업 시켜주면된다고해서 ㅠㅠ 100일 지나자 마자 단계업...",
                        create_date: "2022-05-03 11:11:00",
                        title: "백일아기 분유 단계용 ㅠㅠ",
                        url: "http://cafe.naver.com/dgmom365/5828735",
                        writer: "달서v도원",
                    }

                },
                {   // 23
                    channel: "네이버카페",
                    contents: {
                        channel: "맘스홀릭 베이비 (300만 엄마들의 임신, 육아 지식in 카페)",
                        contents: "임페리얼수유중인 109일 아기예요 ㅠ 100일이후 7키로 넘으면 단계 업 시켜주라고 해서 단계업 했는데 이후 수유량도 확 줄고 엄청 자주 개워내고 ㅠㅠㅠㅠ 포동포동...",
                        create_date: "2022-05-03 10:48:00",
                        title: "분유 단계업 이후요 ㅠㅠ",
                        url: "http://cafe.naver.com/imsanbu/60731830",
                        writer: "이대루",
                    }
                },
                {   // 24
                    channel: "네이버카페",
                    contents: {
                        channel: "맘스홀릭 베이비 (300만 엄마들의 임신, 육아 지식in 카페)",
                        contents: "조리원에서아이엠마더1단계 먹이고 있는데 트름도 잘 시키고 하는데 누워서 조금만 지나면 게워내내요 ㅠㅠ 몸무게는 잘 늘고 있긴 한데 문제 없는거겟죠?ㅠㅠ 분유가 안...",
                        create_date: "2022-05-03 10:43:00",
                        title: "신생아 분유게워냄",
                        url: "http://cafe.naver.com/imsanbu/60731763",
                        writer: "psun0643",
                    }
                },
                {   // 25
                    channel: "네이버카페",
                    contents: {
                        channel: "맘스홀릭 베이비 (300만 엄마들의 임신, 육아 지식in 카페)",
                        contents: "07이였어요 혼합하다가 완분으로 간지5일정도 되었고 조리원에서부터아이엠마더먹어서 바꿀까하다가 스트레스 받을까해서 그대로아이엠마더로 먹고 있어요 평소에...",
                        create_date: "2022-05-03 11:33:00",
                        title: "분유 바꿔야할까요?",
                        url: "http://cafe.naver.com/imsanbu/60732623",
                        writer: "Daaaand",
                    }
                },
                {   // 26
                    channel: "네이버카페",
                    contents: {
                        channel: "맘스홀릭 베이비 (300만 엄마들의 임신, 육아 지식in 카페)",
                        contents: "26일남아남양임페리얼xo - 압타밀 - 노발락 AC 배앓이때문에 위에 대로 분유 바꾸고 방금전에 처음으로 노발락 AC먹였는데 생각보다 많이 게워내네요 ㅠㅠ 그전 분유는 게워도...",
                        create_date: "2022-05-03 11:21:00",
                        title: "노발락 AC먹고 게우는 아기 있나요? 배앓이 때문에 분유 바꿨는데 게워서 당황스러워여 ㅠㅠㅠ",
                        url: "http://cafe.naver.com/imsanbu/60732392",
                        writer: "루루바바",
                    }

                },
                {   // 27
                    channel: "네이버카페",
                    contents: {
                        channel: "대구맘 365 - 결혼, 임신, 출산, 육아, 교육,성형,부동산,DIY",
                        contents: "현재 109일된 아기예요 완분아기이고임페리얼먹이고 있어용 단계업기준이 100일 이후 7키로 이상이면 단계업 시켜주면된다고해서 ㅠㅠ 100일 지나자 마자 단계업...",
                        create_date: "2022-05-03 11:11:00",
                        title: "백일아기 분유 단계용 ㅠㅠ",
                        url: "http://cafe.naver.com/dgmom365/5828735",
                        writer: "달서v도원",
                    }

                },
                {   // 28
                    channel: "네이버카페",
                    contents: {
                        channel: "맘스홀릭 베이비 (300만 엄마들의 임신, 육아 지식in 카페)",
                        contents: "임페리얼수유중인 109일 아기예요 ㅠ 100일이후 7키로 넘으면 단계 업 시켜주라고 해서 단계업 했는데 이후 수유량도 확 줄고 엄청 자주 개워내고 ㅠㅠㅠㅠ 포동포동...",
                        create_date: "2022-05-03 10:48:00",
                        title: "분유 단계업 이후요 ㅠㅠ",
                        url: "http://cafe.naver.com/imsanbu/60731830",
                        writer: "이대루",
                    }
                },
                {   // 29
                    channel: "네이버카페",
                    contents: {
                        channel: "맘스홀릭 베이비 (300만 엄마들의 임신, 육아 지식in 카페)",
                        contents: "조리원에서아이엠마더1단계 먹이고 있는데 트름도 잘 시키고 하는데 누워서 조금만 지나면 게워내내요 ㅠㅠ 몸무게는 잘 늘고 있긴 한데 문제 없는거겟죠?ㅠㅠ 분유가 안...",
                        create_date: "2022-05-03 10:43:00",
                        title: "신생아 분유게워냄",
                        url: "http://cafe.naver.com/imsanbu/60731763",
                        writer: "psun0643",
                    }
                },


            ]
        }
        setResponse(res);
    }, [])
    console.log(response)
    return (
        <div className={mainStyle.sec_table}>
            <table id={tableId}>
                <tbody>
                    {
                       response?.data.map((e, i) => {
                           return (
                            <tr role={"row"} className={i%2==0?'even':'odd'}>
                                <td className={mainStyle.iconarea}><span>{e.channel}</span></td>
                                <td className={mainStyle.txtarea}>
                                    <p className={mainStyle.tit_text}>
                                        <a className='link' href={e.contents.url} target="_blank">{e.contents.title}</a>
                                    </p>
                                    <ul>
                                        <li>{e.contents.channel}</li>
                                        <li>{e.contents.writer}</li>
                                        <li>{e.contents.create_date.replaceAll('-','.').slice(0,10)}</li>
                                    </ul>
                                </td>
                            </tr>
                           )
                       }) 
                    }
                </tbody>
            </table>
        </div>
    )
}

// 더보기
export const MoreLink = ({link}) => {
    return (
        <span><a href={link} className="btn_more">more</a></span>
    )
}

//SNS 최신글 현황에서 SNS 버튼 생성
export const SnsBox = (props) => {
    // id, type
    let [chart, setChart] = useState();
    useEffect(() => {
        let response = {
            data: [
                {
                    1: 0,
                    2: "1",
                    3: "7",
                    4: "29",
                    5: 0,
                    no: 1,
                    date: "2022-04-16",
                    channel: "전체",
                    total: 37,
                },
                {
                    1: 0,
                    2: "2",
                    3: "17",
                    4: "49",
                    5: 0,
                    no: 2,
                    date: "2022-04-15",
                    channel: "전체",
                    total: 68,
                },
                {
                    1: 0,
                    2: "1",
                    3: "13",
                    4: "52",
                    5: 0,
                    no: 3,
                    date: "2022-04-14",
                    channel: "전체",
                    total: 66,
                },
                {
                    1: 0,
                    2: "2",
                    3: "13",
                    4: "72",
                    5: 0,
                    no: 4,
                    date: "2022-04-13",
                    channel: "전체",
                    total: 87,
                },
                {
                    1: 0,
                    2: 0,
                    3: "14",
                    4: "42",
                    5: 0,
                    no: 5,
                    date: "2022-04-12",
                    channel: "전체",
                    total: 56,
                },
                {
                    1: 0,
                    2: "1",
                    3: "9",
                    4: "47",
                    5: 0,
                    no: 6,
                    date: "2022-04-11",
                    channel: "전체",
                    total: 57,
                },
            ],
        };
        setChart(drawProgressWeekChart(response, "sns_week_chart"));
    }, []);
    return (
        <>
            <div className={[mainStyle.sns_tab, props.type].join(" ")}>
                <div className={"sns_tab_in"}>
                    {/* {
            $sns_flag?.substr(1, 1) ? (
              <button type="button" class="sns_chart_btn active" data-channel='i'>
                <i class="remixicon-instagram-fill"></i>
              </button>)
              : null
          }   
          {
            $sns_flag?.substr(2, 1) ? (
              <button type="button" class="sns_chart_btn" data-channel='f'>
                <i class="remixicon-facebook-box-fill"></i>
              </button>)
              : null
          }
          {
            $sns_flag?.substr(3, 1) ? (
              <button type="button" class="sns_chart_btn" data-channel='t'>
                <i class="remixicon-twitter-fill"></i>
              </button>)
              : null
          }
          {
            $sns_flag?.substr(0, 1) ? (
              <button type="button" class="sns_chart_btn" data-channel='y'>
                <i class="remixicon-youtube-fill"></i>
              </button>)
              : null
          } */}
                </div>
            </div>
            <div id={props.id}>{chart}</div>
        </>
    );
};

// 네이버, 다음, 구글 포털 탭 버튼 생성
// 포털사이트 최신글 평판 현황
export const LatelyRateBox = (props) => {
    // id
    let [chart, setChart] = useState();
    useEffect(() => {
        let response = {
            data: [
                {
                    1: 0,
                    2: "16",
                    3: "47",
                    4: "162",
                    5: 0,
                    no: 1,
                    date: "2022-04-17",
                    channel: "전체",
                    total: 225,
                },
                {
                    1: 0,
                    2: "60",
                    3: "122",
                    4: "349",
                    5: 0,
                    no: 2,
                    date: "2022-04-16",
                    channel: "전체",
                    total: 531,
                },
                {
                    1: "6",
                    2: "72",
                    3: "136",
                    4: "447",
                    5: 0,
                    no: 3,
                    date: "2022-04-15",
                    channel: "전체",
                    total: 661,
                },
                {
                    1: "3",
                    2: "97",
                    3: "218",
                    4: "509",
                    5: 0,
                    no: 4,
                    date: "2022-04-14",
                    channel: "전체",
                    total: 827,
                },
                {
                    1: "7",
                    2: "86",
                    3: "178",
                    4: "398",
                    5: 0,
                    no: 5,
                    date: "2022-04-13",
                    channel: "전체",
                    total: 669,
                },
                {
                    1: "5",
                    2: "80",
                    3: "168",
                    4: "420",
                    5: 0,
                    no: 6,
                    date: "2022-04-12",
                    channel: "전체",
                    total: 673,
                },
                {
                    1: "6",
                    2: "66",
                    3: "164",
                    4: "530",
                    5: 0,
                    no: 7,
                    date: "2022-04-11",
                    channel: "전체",
                    total: 766,
                },
            ],
        };
        setChart(drawProgressWeekChart(response, "lately_week_chart"));
    }, []);
    return (
        <>
            <div className={mainStyle.portal_tab}>
                {
                    //$PORTAL_N_FLAG?.substr(0, 1) ? (
                    <button
                        type="button"
                        className={["p_chart_btn", mainStyle.active].join(" ")}
                        data-class="n"
                    >
                        <span>NAVER</span>
                    </button> //)
                    //: null
                }
                {
                    //$PORTAL_D_FLAG?.substr(0, 1) ? (
                    <button
                        type="button"
                        className={"p_chart_btn"}
                        data-class="d"
                    >
                        <span>Daum</span>
                    </button> //)
                    //: null
                }
                {
                    //$PORTAL_G_FLAG?.substr(0, 1) ? (
                    <button
                        type="button"
                        className={"p_chart_btn"}
                        data-class="g"
                    >
                        <span>Google</span>
                    </button> //)
                    //: null
                }
            </div>
            <div id={props.id}>{chart}</div>
        </>
    );
};

//포털사이트 최신 뉴스에서 네이버, 다음, 구글 버튼 생성
export const NewsBox = (props) => {
    let [response, setResponse] = useState();
    useEffect(() => {
        let res = {
            data: [
                {   // 0
                    channel: "네이버뉴스",
                    contents: {
                        channel: "더밸류뉴스",
                        create_date: "2022-05-02 20:14:47",
                        title: "[Oh! 타임머신] _하트시그널_ 김현우, 3번째 음주운전 천만원 _벌금형_(과거사 재조명)",
                        url: "http://m.news.naver.com/read?mode=LSD&mid=sec&sid1=106&oid=109&aid=0004605900",
                        writer: "김나연 기자",
                    }
                },
                {   // 1
                    channel: "네이버뉴스",
                    contents: {
                        channel: "OSEN",
                        create_date: "2022-05-03 05:01:10",
                        title: "[CEO탐구] 문진섭 서울우유 조합장, 지난해도 우유 시장 1위, 비결은...",
                        url: "http://www.thevaluenews.co.kr/m/view.php?idx=168916",
                        writer: "",
                    }
                },
                {   // 2
                    channel: "네이버뉴스",
                    contents: {
                        channel: "경남도민신문",
                        create_date: "2022-05-02 19:14:47",
                        title: "허(虛)를 실(實)로 보이게 한다",
                        url: "http://www.gndomin.com/news/articleView.html?idxno=313751",
                        writer: "",
                    }
                },
                {   // 3
                    channel: "네이버뉴스",
                    contents: {
                        channel: "톱스타뉴스",
                        create_date: "2022-05-02 19:14:47",
                        title: "_생방송투데이_ 서울 문정동 물냉면·비빔냉면 _차가워 너무나_…_자족식당_ 삼척 문어해물탕·문어비빔밥 맛집 위치는?",
                        url: "http://www.topstarnews.net/news/articleView.html?idxno=14689187",
                        writer: "",
                    }
                },
                {   // 4
                    channel: "네이버뉴스",
                    contents: {
                        channel: "서울경제",
                        create_date: "2022-05-02 17:58:37",
                        title: "[로터리] 공정거래 동의의결제도 활성화 돼야",
                        url: "http://m.news.naver.com/read?mode=LSD&mid=sec&sid1=004&oid=011&aid=0004049335",
                        writer: "박효정 기자",
                    }
                },
                {   // 5
                    channel: "네이버뉴스",
                    contents: {
                        channel: "더밸류뉴스",
                        create_date: "2022-05-02 20:14:47",
                        title: "[Oh! 타임머신] _하트시그널_ 김현우, 3번째 음주운전 천만원 _벌금형_(과거사 재조명)",
                        url: "http://m.news.naver.com/read?mode=LSD&mid=sec&sid1=106&oid=109&aid=0004605900",
                        writer: "김나연 기자",
                    }
                },
                {   // 6
                    channel: "네이버뉴스",
                    contents: {
                        channel: "OSEN",
                        create_date: "2022-05-03 05:01:10",
                        title: "[CEO탐구] 문진섭 서울우유 조합장, 지난해도 우유 시장 1위, 비결은...",
                        url: "http://www.thevaluenews.co.kr/m/view.php?idx=168916",
                        writer: "",
                    }
                },
                {   // 7
                    channel: "네이버뉴스",
                    contents: {
                        channel: "경남도민신문",
                        create_date: "2022-05-02 19:14:47",
                        title: "허(虛)를 실(實)로 보이게 한다",
                        url: "http://www.gndomin.com/news/articleView.html?idxno=313751",
                        writer: "",
                    }
                },
                {   // 8
                    channel: "네이버뉴스",
                    contents: {
                        channel: "톱스타뉴스",
                        create_date: "2022-05-02 19:14:47",
                        title: "_생방송투데이_ 서울 문정동 물냉면·비빔냉면 _차가워 너무나_…_자족식당_ 삼척 문어해물탕·문어비빔밥 맛집 위치는?",
                        url: "http://www.topstarnews.net/news/articleView.html?idxno=14689187",
                        writer: "",
                    }
                },
                {   // 9
                    channel: "네이버뉴스",
                    contents: {
                        channel: "서울경제",
                        create_date: "2022-05-02 17:58:37",
                        title: "[로터리] 공정거래 동의의결제도 활성화 돼야",
                        url: "http://m.news.naver.com/read?mode=LSD&mid=sec&sid1=004&oid=011&aid=0004049335",
                        writer: "박효정 기자",
                    }
                },
                {   // 10
                    channel: "네이버뉴스",
                    contents: {
                        channel: "더밸류뉴스",
                        create_date: "2022-05-02 20:14:47",
                        title: "[Oh! 타임머신] _하트시그널_ 김현우, 3번째 음주운전 천만원 _벌금형_(과거사 재조명)",
                        url: "http://m.news.naver.com/read?mode=LSD&mid=sec&sid1=106&oid=109&aid=0004605900",
                        writer: "김나연 기자",
                    }
                },
                {   // 11
                    channel: "네이버뉴스",
                    contents: {
                        channel: "OSEN",
                        create_date: "2022-05-03 05:01:10",
                        title: "[CEO탐구] 문진섭 서울우유 조합장, 지난해도 우유 시장 1위, 비결은...",
                        url: "http://www.thevaluenews.co.kr/m/view.php?idx=168916",
                        writer: "",
                    }
                },
                {   // 12
                    channel: "네이버뉴스",
                    contents: {
                        channel: "경남도민신문",
                        create_date: "2022-05-02 19:14:47",
                        title: "허(虛)를 실(實)로 보이게 한다",
                        url: "http://www.gndomin.com/news/articleView.html?idxno=313751",
                        writer: "",
                    }
                },
                {   // 13
                    channel: "네이버뉴스",
                    contents: {
                        channel: "톱스타뉴스",
                        create_date: "2022-05-02 19:14:47",
                        title: "_생방송투데이_ 서울 문정동 물냉면·비빔냉면 _차가워 너무나_…_자족식당_ 삼척 문어해물탕·문어비빔밥 맛집 위치는?",
                        url: "http://www.topstarnews.net/news/articleView.html?idxno=14689187",
                        writer: "",
                    }
                },
                {   // 14
                    channel: "네이버뉴스",
                    contents: {
                        channel: "서울경제",
                        create_date: "2022-05-02 17:58:37",
                        title: "[로터리] 공정거래 동의의결제도 활성화 돼야",
                        url: "http://m.news.naver.com/read?mode=LSD&mid=sec&sid1=004&oid=011&aid=0004049335",
                        writer: "박효정 기자",
                    }
                },
                {   // 15
                    channel: "네이버뉴스",
                    contents: {
                        channel: "더밸류뉴스",
                        create_date: "2022-05-02 20:14:47",
                        title: "[Oh! 타임머신] _하트시그널_ 김현우, 3번째 음주운전 천만원 _벌금형_(과거사 재조명)",
                        url: "http://m.news.naver.com/read?mode=LSD&mid=sec&sid1=106&oid=109&aid=0004605900",
                        writer: "김나연 기자",
                    }
                },
                {   // 16
                    channel: "네이버뉴스",
                    contents: {
                        channel: "OSEN",
                        create_date: "2022-05-03 05:01:10",
                        title: "[CEO탐구] 문진섭 서울우유 조합장, 지난해도 우유 시장 1위, 비결은...",
                        url: "http://www.thevaluenews.co.kr/m/view.php?idx=168916",
                        writer: "",
                    }
                },
                {   // 17
                    channel: "네이버뉴스",
                    contents: {
                        channel: "경남도민신문",
                        create_date: "2022-05-02 19:14:47",
                        title: "허(虛)를 실(實)로 보이게 한다",
                        url: "http://www.gndomin.com/news/articleView.html?idxno=313751",
                        writer: "",
                    }
                },
                {   // 18
                    channel: "네이버뉴스",
                    contents: {
                        channel: "톱스타뉴스",
                        create_date: "2022-05-02 19:14:47",
                        title: "_생방송투데이_ 서울 문정동 물냉면·비빔냉면 _차가워 너무나_…_자족식당_ 삼척 문어해물탕·문어비빔밥 맛집 위치는?",
                        url: "http://www.topstarnews.net/news/articleView.html?idxno=14689187",
                        writer: "",
                    }
                },
                {   // 19
                    channel: "네이버뉴스",
                    contents: {
                        channel: "서울경제",
                        create_date: "2022-05-02 17:58:37",
                        title: "[로터리] 공정거래 동의의결제도 활성화 돼야",
                        url: "http://m.news.naver.com/read?mode=LSD&mid=sec&sid1=004&oid=011&aid=0004049335",
                        writer: "박효정 기자",
                    }
                },
                {   // 20
                    channel: "네이버뉴스",
                    contents: {
                        channel: "더밸류뉴스",
                        create_date: "2022-05-02 20:14:47",
                        title: "[Oh! 타임머신] _하트시그널_ 김현우, 3번째 음주운전 천만원 _벌금형_(과거사 재조명)",
                        url: "http://m.news.naver.com/read?mode=LSD&mid=sec&sid1=106&oid=109&aid=0004605900",
                        writer: "김나연 기자",
                    }
                },
                {   // 21
                    channel: "네이버뉴스",
                    contents: {
                        channel: "OSEN",
                        create_date: "2022-05-03 05:01:10",
                        title: "[CEO탐구] 문진섭 서울우유 조합장, 지난해도 우유 시장 1위, 비결은...",
                        url: "http://www.thevaluenews.co.kr/m/view.php?idx=168916",
                        writer: "",
                    }
                },
                {   // 22
                    channel: "네이버뉴스",
                    contents: {
                        channel: "경남도민신문",
                        create_date: "2022-05-02 19:14:47",
                        title: "허(虛)를 실(實)로 보이게 한다",
                        url: "http://www.gndomin.com/news/articleView.html?idxno=313751",
                        writer: "",
                    }
                },
                {   // 23
                    channel: "네이버뉴스",
                    contents: {
                        channel: "톱스타뉴스",
                        create_date: "2022-05-02 19:14:47",
                        title: "_생방송투데이_ 서울 문정동 물냉면·비빔냉면 _차가워 너무나_…_자족식당_ 삼척 문어해물탕·문어비빔밥 맛집 위치는?",
                        url: "http://www.topstarnews.net/news/articleView.html?idxno=14689187",
                        writer: "",
                    }
                },
                {   // 24
                    channel: "네이버뉴스",
                    contents: {
                        channel: "서울경제",
                        create_date: "2022-05-02 17:58:37",
                        title: "[로터리] 공정거래 동의의결제도 활성화 돼야",
                        url: "http://m.news.naver.com/read?mode=LSD&mid=sec&sid1=004&oid=011&aid=0004049335",
                        writer: "박효정 기자",
                    }
                },
                {   // 25
                    channel: "네이버뉴스",
                    contents: {
                        channel: "더밸류뉴스",
                        create_date: "2022-05-02 20:14:47",
                        title: "[Oh! 타임머신] _하트시그널_ 김현우, 3번째 음주운전 천만원 _벌금형_(과거사 재조명)",
                        url: "http://m.news.naver.com/read?mode=LSD&mid=sec&sid1=106&oid=109&aid=0004605900",
                        writer: "김나연 기자",
                    }
                },
                {   // 26
                    channel: "네이버뉴스",
                    contents: {
                        channel: "OSEN",
                        create_date: "2022-05-03 05:01:10",
                        title: "[CEO탐구] 문진섭 서울우유 조합장, 지난해도 우유 시장 1위, 비결은...",
                        url: "http://www.thevaluenews.co.kr/m/view.php?idx=168916",
                        writer: "",
                    }
                },
                {   // 27
                    channel: "네이버뉴스",
                    contents: {
                        channel: "경남도민신문",
                        create_date: "2022-05-02 19:14:47",
                        title: "허(虛)를 실(實)로 보이게 한다",
                        url: "http://www.gndomin.com/news/articleView.html?idxno=313751",
                        writer: "",
                    }
                },
                {   // 28
                    channel: "네이버뉴스",
                    contents: {
                        channel: "톱스타뉴스",
                        create_date: "2022-05-02 19:14:47",
                        title: "_생방송투데이_ 서울 문정동 물냉면·비빔냉면 _차가워 너무나_…_자족식당_ 삼척 문어해물탕·문어비빔밥 맛집 위치는?",
                        url: "http://www.topstarnews.net/news/articleView.html?idxno=14689187",
                        writer: "",
                    }
                },
                {   // 29
                    channel: "네이버뉴스",
                    contents: {
                        channel: "서울경제",
                        create_date: "2022-05-02 17:58:37",
                        title: "[로터리] 공정거래 동의의결제도 활성화 돼야",
                        url: "http://m.news.naver.com/read?mode=LSD&mid=sec&sid1=004&oid=011&aid=0004049335",
                        writer: "박효정 기자",
                    }
                },


            ]
        }
        setResponse(res);
    }, [])
    console.log(response)
    // id
    return (
        <>
            <div className={mainStyle.portal_tab}>
                {
                    //$PORTAL_N_FLAG?.substr(0, 1) ? (
                    <button
                        type="button"
                        className={["news_table_btn", mainStyle.active].join(
                            " "
                        )}
                        data-class="n"
                    >
                        <span>NAVER</span>
                    </button> //)
                    //: null
                }
                {
                    //$PORTAL_D_FLAG?.substr(0, 1) ? (
                    <button
                        type="button"
                        className={"news_table_btn"}
                        data-class="d"
                    >
                        <span>Daum</span>
                    </button> //)
                    //: null
                }
                {
                    //$PORTAL_G_FLAG?.substr(0, 1) ? (
                    <button
                        type="button"
                        className={"news_table_btn"}
                        data-class="g"
                    >
                        <span>Google</span>
                    </button> //)
                    //: null
                }
            </div>
            <div className={mainStyle.sec_table}>
                <table id={props.id}>
                    <tbody>
                        {
                            response?.data.map((e, i) => {
                                return (
                                    <tr role={"row"} className={i%2==0?'even':'odd'}>
                                        <td className={mainStyle.iconarea}><span>{e.channel}</span></td>
                                        <td className={mainStyle.txtarea}>
                                            <p className={mainStyle.tit_text}>
                                                <a className='link' href={e.contents.url} target="_blank">{e.contents.title}</a>
                                            </p>
                                            <ul>
                                                <li>{e.contents.channel}</li>
                                                <li>{e.contents.writer}</li>
                                                <li>{e.contents.create_date.replaceAll('-','.').slice(0,10)}</li>
                                            </ul>
                                        </td>
                                    </tr>
                                )
                            }) 
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

//SNS 최신글 현황에서 SNS별 구분 탭, 최신글 리스트 테이블 생성
export const SnsLatelyBox = (props) => {
    // chart_id,table_id
    const rateArray = { 1: { type: "긍정", className: "btn_posi" }, 
                        2: { type: "부정", className: "btn_ngtv" }, 
                        3: { type: "중립", className: "btn_nut" }, 
                        4: { type: "무관", className: "btn_irr" } };
    let [response, setResponse] = useState();
    useEffect(() => {
        let res = {
            data: [
                {   // 0
                    channel: "인스타그램",
                    contents: {
                        channel: "joykim_bebe",
                        create_date: "2022-05-03 18:56:38",
                        title: "...",
                        url: "http://www.instagram.com/p/CdG1P7MvISZ/",
                        writer: "joykim_bebe",
                    },
                    rate: {rate: '4', contentsId: '2071965', type: 'rate'}
                },
                {   // 1
                    channel: "인스타그램",
                    contents: {
                        channel: "y_seol_a",
                        create_date: "2022-05-03 16:40:48",
                        title: "엄마가 너를 위해 더 노력할게요즘 엄마 인생에 너 없는 순간은 상상도 할...",
                        url: "http://www.instagram.com/p/CdGls_APwJ7/",
                        writer: "y_seol_a",
                    },
                    rate: {rate: '3', contentsId: '2071966', type: 'rate'}
                },
                {   // 2
                    channel: "인스타그램",
                    contents: {
                        channel: "selly_jha",
                        create_date: "2022-05-03 16:40:48",
                        title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유남양유업 멸...",
                        url: "http://www.instagram.com/p/CdGcu_gBT8J/",
                        writer: "selly_jha",
                    },
                    rate: {rate: '3', contentsId: '2071866', type: 'rate'}
                },
                {   // 3
                    channel: "인스타그램",
                    contents: {
                        channel: "hhee86",
                        create_date: "2022-05-03 16:40:48",
                        title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유고소하면서도...",
                        url: "http://www.instagram.com/p/CdGccFtlyDX/",
                        writer: "hhee86",
                    },
                    rate: {rate: '2', contentsId: '2071867', type: 'rate'}
                },
                {   // 4
                    channel: "인스타그램",
                    contents: {
                        channel: "chocochanele",
                        create_date: "2022-05-03 15:03:58",
                        title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유우유를 너무...",
                        url: "http://www.instagram.com/p/CdGan1nJkXB/",
                        writer: "chocochanele",
                    },
                    rate: {rate: '2', contentsId: '2071867', type: 'rate'}
                },
                {   // 5
                    channel: "인스타그램",
                    contents: {
                        channel: "joykim_bebe",
                        create_date: "2022-05-03 18:56:38",
                        title: "...",
                        url: "http://www.instagram.com/p/CdG1P7MvISZ/",
                        writer: "joykim_bebe",
                    },
                    rate: {rate: '4', contentsId: '2071965', type: 'rate'}
                },
                {   // 6
                    channel: "인스타그램",
                    contents: {
                        channel: "y_seol_a",
                        create_date: "2022-05-03 16:40:48",
                        title: "엄마가 너를 위해 더 노력할게요즘 엄마 인생에 너 없는 순간은 상상도 할...",
                        url: "http://www.instagram.com/p/CdGls_APwJ7/",
                        writer: "y_seol_a",
                    },
                    rate: {rate: '3', contentsId: '2071966', type: 'rate'}
                },
                {   // 7
                    channel: "인스타그램",
                    contents: {
                        channel: "selly_jha",
                        create_date: "2022-05-03 16:40:48",
                        title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유남양유업 멸...",
                        url: "http://www.instagram.com/p/CdGcu_gBT8J/",
                        writer: "selly_jha",
                    },
                    rate: {rate: '3', contentsId: '2071866', type: 'rate'}
                },
                {   // 8
                    channel: "인스타그램",
                    contents: {
                        channel: "hhee86",
                        create_date: "2022-05-03 16:40:48",
                        title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유고소하면서도...",
                        url: "http://www.instagram.com/p/CdGccFtlyDX/",
                        writer: "hhee86",
                    },
                    rate: {rate: '2', contentsId: '2071867', type: 'rate'}
                },
                {   // 9
                    channel: "인스타그램",
                    contents: {
                        channel: "chocochanele",
                        create_date: "2022-05-03 15:03:58",
                        title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유우유를 너무...",
                        url: "http://www.instagram.com/p/CdGan1nJkXB/",
                        writer: "chocochanele",
                    },
                    rate: {rate: '2', contentsId: '2071867', type: 'rate'}
                },
                {   // 10
                    channel: "인스타그램",
                    contents: {
                        channel: "joykim_bebe",
                        create_date: "2022-05-03 18:56:38",
                        title: "...",
                        url: "http://www.instagram.com/p/CdG1P7MvISZ/",
                        writer: "joykim_bebe",
                    },
                    rate: {rate: '4', contentsId: '2071965', type: 'rate'}
                },
                {   // 11
                    channel: "인스타그램",
                    contents: {
                        channel: "y_seol_a",
                        create_date: "2022-05-03 16:40:48",
                        title: "엄마가 너를 위해 더 노력할게요즘 엄마 인생에 너 없는 순간은 상상도 할...",
                        url: "http://www.instagram.com/p/CdGls_APwJ7/",
                        writer: "y_seol_a",
                    },
                    rate: {rate: '3', contentsId: '2071966', type: 'rate'}
                },
                {   // 12
                    channel: "인스타그램",
                    contents: {
                        channel: "selly_jha",
                        create_date: "2022-05-03 16:40:48",
                        title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유남양유업 멸...",
                        url: "http://www.instagram.com/p/CdGcu_gBT8J/",
                        writer: "selly_jha",
                    },
                    rate: {rate: '3', contentsId: '2071866', type: 'rate'}
                },
                {   // 13
                    channel: "인스타그램",
                    contents: {
                        channel: "hhee86",
                        create_date: "2022-05-03 16:40:48",
                        title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유고소하면서도...",
                        url: "http://www.instagram.com/p/CdGccFtlyDX/",
                        writer: "hhee86",
                    },
                    rate: {rate: '2', contentsId: '2071867', type: 'rate'}
                },
                {   // 14
                    channel: "인스타그램",
                    contents: {
                        channel: "chocochanele",
                        create_date: "2022-05-03 15:03:58",
                        title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유우유를 너무...",
                        url: "http://www.instagram.com/p/CdGan1nJkXB/",
                        writer: "chocochanele",
                    },
                    rate: {rate: '2', contentsId: '2071867', type: 'rate'}
                },
                {   // 15
                    channel: "인스타그램",
                    contents: {
                        channel: "joykim_bebe",
                        create_date: "2022-05-03 18:56:38",
                        title: "...",
                        url: "http://www.instagram.com/p/CdG1P7MvISZ/",
                        writer: "joykim_bebe",
                    },
                    rate: {rate: '4', contentsId: '2071965', type: 'rate'}
                },
                {   // 16
                    channel: "인스타그램",
                    contents: {
                        channel: "y_seol_a",
                        create_date: "2022-05-03 16:40:48",
                        title: "엄마가 너를 위해 더 노력할게요즘 엄마 인생에 너 없는 순간은 상상도 할...",
                        url: "http://www.instagram.com/p/CdGls_APwJ7/",
                        writer: "y_seol_a",
                    },
                    rate: {rate: '3', contentsId: '2071966', type: 'rate'}
                },
                {   // 17
                    channel: "인스타그램",
                    contents: {
                        channel: "selly_jha",
                        create_date: "2022-05-03 16:40:48",
                        title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유남양유업 멸...",
                        url: "http://www.instagram.com/p/CdGcu_gBT8J/",
                        writer: "selly_jha",
                    },
                    rate: {rate: '3', contentsId: '2071866', type: 'rate'}
                },
                {   // 18
                    channel: "인스타그램",
                    contents: {
                        channel: "hhee86",
                        create_date: "2022-05-03 16:40:48",
                        title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유고소하면서도...",
                        url: "http://www.instagram.com/p/CdGccFtlyDX/",
                        writer: "hhee86",
                    },
                    rate: {rate: '2', contentsId: '2071867', type: 'rate'}
                },
                {   // 19
                    channel: "인스타그램",
                    contents: {
                        channel: "chocochanele",
                        create_date: "2022-05-03 15:03:58",
                        title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유우유를 너무...",
                        url: "http://www.instagram.com/p/CdGan1nJkXB/",
                        writer: "chocochanele",
                    },
                    rate: {rate: '2', contentsId: '2071867', type: 'rate'}
                },
                {   // 20
                    channel: "인스타그램",
                    contents: {
                        channel: "joykim_bebe",
                        create_date: "2022-05-03 18:56:38",
                        title: "...",
                        url: "http://www.instagram.com/p/CdG1P7MvISZ/",
                        writer: "joykim_bebe",
                    },
                    rate: {rate: '4', contentsId: '2071965', type: 'rate'}
                },
                {   // 21
                    channel: "인스타그램",
                    contents: {
                        channel: "y_seol_a",
                        create_date: "2022-05-03 16:40:48",
                        title: "엄마가 너를 위해 더 노력할게요즘 엄마 인생에 너 없는 순간은 상상도 할...",
                        url: "http://www.instagram.com/p/CdGls_APwJ7/",
                        writer: "y_seol_a",
                    },
                    rate: {rate: '3', contentsId: '2071966', type: 'rate'}
                },
                {   // 22
                    channel: "인스타그램",
                    contents: {
                        channel: "selly_jha",
                        create_date: "2022-05-03 16:40:48",
                        title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유남양유업 멸...",
                        url: "http://www.instagram.com/p/CdGcu_gBT8J/",
                        writer: "selly_jha",
                    },
                    rate: {rate: '3', contentsId: '2071866', type: 'rate'}
                },
                {   // 23
                    channel: "인스타그램",
                    contents: {
                        channel: "hhee86",
                        create_date: "2022-05-03 16:40:48",
                        title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유고소하면서도...",
                        url: "http://www.instagram.com/p/CdGccFtlyDX/",
                        writer: "hhee86",
                    },
                    rate: {rate: '2', contentsId: '2071867', type: 'rate'}
                },
                {   // 24
                    channel: "인스타그램",
                    contents: {
                        channel: "chocochanele",
                        create_date: "2022-05-03 15:03:58",
                        title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유우유를 너무...",
                        url: "http://www.instagram.com/p/CdGan1nJkXB/",
                        writer: "chocochanele",
                    },
                    rate: {rate: '2', contentsId: '2071867', type: 'rate'}
                },
                {   // 25
                    channel: "인스타그램",
                    contents: {
                        channel: "joykim_bebe",
                        create_date: "2022-05-03 18:56:38",
                        title: "...",
                        url: "http://www.instagram.com/p/CdG1P7MvISZ/",
                        writer: "joykim_bebe",
                    },
                    rate: {rate: '4', contentsId: '2071965', type: 'rate'}
                },
                {   // 26
                    channel: "인스타그램",
                    contents: {
                        channel: "y_seol_a",
                        create_date: "2022-05-03 16:40:48",
                        title: "엄마가 너를 위해 더 노력할게요즘 엄마 인생에 너 없는 순간은 상상도 할...",
                        url: "http://www.instagram.com/p/CdGls_APwJ7/",
                        writer: "y_seol_a",
                    },
                    rate: {rate: '3', contentsId: '2071966', type: 'rate'}
                },
                {   // 27
                    channel: "인스타그램",
                    contents: {
                        channel: "selly_jha",
                        create_date: "2022-05-03 16:40:48",
                        title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유남양유업 멸...",
                        url: "http://www.instagram.com/p/CdGcu_gBT8J/",
                        writer: "selly_jha",
                    },
                    rate: {rate: '3', contentsId: '2071866', type: 'rate'}
                },
                {   // 28
                    channel: "인스타그램",
                    contents: {
                        channel: "hhee86",
                        create_date: "2022-05-03 16:40:48",
                        title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유고소하면서도...",
                        url: "http://www.instagram.com/p/CdGccFtlyDX/",
                        writer: "hhee86",
                    },
                    rate: {rate: '2', contentsId: '2071867', type: 'rate'}
                },
                {   // 29
                    channel: "인스타그램",
                    contents: {
                        channel: "chocochanele",
                        create_date: "2022-05-03 15:03:58",
                        title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유우유를 너무...",
                        url: "http://www.instagram.com/p/CdGan1nJkXB/",
                        writer: "chocochanele",
                    },
                    rate: {rate: '2', contentsId: '2071867', type: 'rate'}
                },
            ]
        }
        setResponse(res);
    }, [])
    console.log(response)
    return (
        <>
            <div className={[mainStyle.sns_tab, "sns_lately"].join(" ")}>
                {
                    //$SNS_I_FLAG?.substr(0, 1) ? (
                    <button
                        type="button"
                        className={["sns_chart_btn", mainStyle.active].join(
                            " "
                        )}
                        data-channel="i"
                    >
                        <i class="remixicon-instagram-fill"></i>
                    </button> //)
                    //: null
                }
                {
                    //$SNS_F_FLAG?.substr(0, 1) ? (
                    <button
                        type="button"
                        className={"sns_chart_btn"}
                        data-channel="f"
                    >
                        <i className={"remixicon-facebook-box-fill"}></i>
                    </button> //)
                    //: null
                }
                {
                    //$SNS_T_FLAG?.substr(0, 1) ? (
                    <button
                        type="button"
                        className={"sns_chart_btn"}
                        data-channel="t"
                    >
                        <i className={"remixicon-twitter-fill"}></i>
                    </button> //)
                    //: null
                }
                {
                    //$SNS_Y_FLAG?.substr(0, 1) ? (
                    <button
                        type="button"
                        className={"sns_chart_btn"}
                        data-channel="y"
                    >
                        <i className={"remixicon-youtube-fill"}></i>
                    </button> //)
                    //: null
                }
            </div>
            <div id={mainStyle[props.chart_id]}>{response ? drawTwtChart(response.data) : null}</div>
            <div className={mainStyle.sec_tbox}>
                <div id={mainStyle.sns_lately_table_wrapper}>
                    <table id={props.table_id}>
                        <tbody>
                            {
                                response?.data.map((e, i) => {
                                    return (
                                        <tr role={"row"} className={i%2==0?'even':'odd'}>
                                            <td className={'rp_icon'}><span className={[commonStyle[rateArray[e.rate.rate].className], commonStyle.on].join(" ")}>{rateArray[e.rate.rate].type}</span></td>
                                            <td className={mainStyle.txtarea}>
                                                <p className={mainStyle.tit_text}>
                                                    <a className='link' href={e.contents.url} target="_blank">{e.contents.title}</a>
                                                </p>
                                                <ul>
                                                    <li>{e.contents.channel}</li>
                                                    <li>{e.contents.writer}</li>
                                                    <li>{e.contents.create_date.replaceAll('-','.').slice(0,10)}</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    )
                                }) 
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

//커뮤니티 최신글 현황 리스트 테이블 생성
export const ComLatelyBox = (props) => {
    // chart_id,table_id
    // chart_id,table_id
    const rateArray = { 1: { type: "긍정", className: "btn_posi" }, 
                        2: { type: "부정", className: "btn_ngtv" }, 
                        3: { type: "중립", className: "btn_nut" }, 
                        4: { type: "무관", className: "btn_irr" } };
    let [response, setResponse] = useState();
    useEffect(() => {
        let res = {
            data: [
            {   // 0
                channel: "인스타그램",
                contents: {
                    channel: "joykim_bebe",
                    create_date: "2022-05-03 18:56:38",
                    title: "...",
                    url: "http://www.instagram.com/p/CdG1P7MvISZ/",
                    writer: "joykim_bebe",
                },
                rate: {rate: '4', contentsId: '2071965', type: 'rate'}
            },
            {   // 1
                channel: "인스타그램",
                contents: {
                    channel: "y_seol_a",
                    create_date: "2022-05-03 16:40:48",
                    title: "엄마가 너를 위해 더 노력할게요즘 엄마 인생에 너 없는 순간은 상상도 할...",
                    url: "http://www.instagram.com/p/CdGls_APwJ7/",
                    writer: "y_seol_a",
                },
                rate: {rate: '3', contentsId: '2071966', type: 'rate'}
            },
            {   // 2
                channel: "인스타그램",
                contents: {
                    channel: "selly_jha",
                    create_date: "2022-05-03 16:40:48",
                    title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유남양유업 멸...",
                    url: "http://www.instagram.com/p/CdGcu_gBT8J/",
                    writer: "selly_jha",
                },
                rate: {rate: '3', contentsId: '2071866', type: 'rate'}
            },
            {   // 3
                channel: "인스타그램",
                contents: {
                    channel: "hhee86",
                    create_date: "2022-05-03 16:40:48",
                    title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유고소하면서도...",
                    url: "http://www.instagram.com/p/CdGccFtlyDX/",
                    writer: "hhee86",
                },
                rate: {rate: '2', contentsId: '2071867', type: 'rate'}
            },
            {   // 4
                channel: "인스타그램",
                contents: {
                    channel: "chocochanele",
                    create_date: "2022-05-03 15:03:58",
                    title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유우유를 너무...",
                    url: "http://www.instagram.com/p/CdGan1nJkXB/",
                    writer: "chocochanele",
                },
                rate: {rate: '2', contentsId: '2071867', type: 'rate'}
            },
            {   // 5
                channel: "인스타그램",
                contents: {
                    channel: "joykim_bebe",
                    create_date: "2022-05-03 18:56:38",
                    title: "...",
                    url: "http://www.instagram.com/p/CdG1P7MvISZ/",
                    writer: "joykim_bebe",
                },
                rate: {rate: '4', contentsId: '2071965', type: 'rate'}
            },
            {   // 6
                channel: "인스타그램",
                contents: {
                    channel: "y_seol_a",
                    create_date: "2022-05-03 16:40:48",
                    title: "엄마가 너를 위해 더 노력할게요즘 엄마 인생에 너 없는 순간은 상상도 할...",
                    url: "http://www.instagram.com/p/CdGls_APwJ7/",
                    writer: "y_seol_a",
                },
                rate: {rate: '3', contentsId: '2071966', type: 'rate'}
            },
            {   // 7
                channel: "인스타그램",
                contents: {
                    channel: "selly_jha",
                    create_date: "2022-05-03 16:40:48",
                    title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유남양유업 멸...",
                    url: "http://www.instagram.com/p/CdGcu_gBT8J/",
                    writer: "selly_jha",
                },
                rate: {rate: '3', contentsId: '2071866', type: 'rate'}
            },
            {   // 8
                channel: "인스타그램",
                contents: {
                    channel: "hhee86",
                    create_date: "2022-05-03 16:40:48",
                    title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유고소하면서도...",
                    url: "http://www.instagram.com/p/CdGccFtlyDX/",
                    writer: "hhee86",
                },
                rate: {rate: '2', contentsId: '2071867', type: 'rate'}
            },
            {   // 9
                channel: "인스타그램",
                contents: {
                    channel: "chocochanele",
                    create_date: "2022-05-03 15:03:58",
                    title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유우유를 너무...",
                    url: "http://www.instagram.com/p/CdGan1nJkXB/",
                    writer: "chocochanele",
                },
                rate: {rate: '2', contentsId: '2071867', type: 'rate'}
            },
            {   // 10
                channel: "인스타그램",
                contents: {
                    channel: "joykim_bebe",
                    create_date: "2022-05-03 18:56:38",
                    title: "...",
                    url: "http://www.instagram.com/p/CdG1P7MvISZ/",
                    writer: "joykim_bebe",
                },
                rate: {rate: '4', contentsId: '2071965', type: 'rate'}
            },
            {   // 11
                channel: "인스타그램",
                contents: {
                    channel: "y_seol_a",
                    create_date: "2022-05-03 16:40:48",
                    title: "엄마가 너를 위해 더 노력할게요즘 엄마 인생에 너 없는 순간은 상상도 할...",
                    url: "http://www.instagram.com/p/CdGls_APwJ7/",
                    writer: "y_seol_a",
                },
                rate: {rate: '3', contentsId: '2071966', type: 'rate'}
            },
            {   // 12
                channel: "인스타그램",
                contents: {
                    channel: "selly_jha",
                    create_date: "2022-05-03 16:40:48",
                    title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유남양유업 멸...",
                    url: "http://www.instagram.com/p/CdGcu_gBT8J/",
                    writer: "selly_jha",
                },
                rate: {rate: '3', contentsId: '2071866', type: 'rate'}
            },
            {   // 13
                channel: "인스타그램",
                contents: {
                    channel: "hhee86",
                    create_date: "2022-05-03 16:40:48",
                    title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유고소하면서도...",
                    url: "http://www.instagram.com/p/CdGccFtlyDX/",
                    writer: "hhee86",
                },
                rate: {rate: '2', contentsId: '2071867', type: 'rate'}
            },
            {   // 14
                channel: "인스타그램",
                contents: {
                    channel: "chocochanele",
                    create_date: "2022-05-03 15:03:58",
                    title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유우유를 너무...",
                    url: "http://www.instagram.com/p/CdGan1nJkXB/",
                    writer: "chocochanele",
                },
                rate: {rate: '2', contentsId: '2071867', type: 'rate'}
            },
            {   // 15
                channel: "인스타그램",
                contents: {
                    channel: "joykim_bebe",
                    create_date: "2022-05-03 18:56:38",
                    title: "...",
                    url: "http://www.instagram.com/p/CdG1P7MvISZ/",
                    writer: "joykim_bebe",
                },
                rate: {rate: '4', contentsId: '2071965', type: 'rate'}
            },
            {   // 16
                channel: "인스타그램",
                contents: {
                    channel: "y_seol_a",
                    create_date: "2022-05-03 16:40:48",
                    title: "엄마가 너를 위해 더 노력할게요즘 엄마 인생에 너 없는 순간은 상상도 할...",
                    url: "http://www.instagram.com/p/CdGls_APwJ7/",
                    writer: "y_seol_a",
                },
                rate: {rate: '3', contentsId: '2071966', type: 'rate'}
            },
            {   // 17
                channel: "인스타그램",
                contents: {
                    channel: "selly_jha",
                    create_date: "2022-05-03 16:40:48",
                    title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유남양유업 멸...",
                    url: "http://www.instagram.com/p/CdGcu_gBT8J/",
                    writer: "selly_jha",
                },
                rate: {rate: '3', contentsId: '2071866', type: 'rate'}
            },
            {   // 18
                channel: "인스타그램",
                contents: {
                    channel: "hhee86",
                    create_date: "2022-05-03 16:40:48",
                    title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유고소하면서도...",
                    url: "http://www.instagram.com/p/CdGccFtlyDX/",
                    writer: "hhee86",
                },
                rate: {rate: '2', contentsId: '2071867', type: 'rate'}
            },
            {   // 19
                channel: "인스타그램",
                contents: {
                    channel: "chocochanele",
                    create_date: "2022-05-03 15:03:58",
                    title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유우유를 너무...",
                    url: "http://www.instagram.com/p/CdGan1nJkXB/",
                    writer: "chocochanele",
                },
                rate: {rate: '2', contentsId: '2071867', type: 'rate'}
            },
            {   // 20
                channel: "인스타그램",
                contents: {
                    channel: "joykim_bebe",
                    create_date: "2022-05-03 18:56:38",
                    title: "...",
                    url: "http://www.instagram.com/p/CdG1P7MvISZ/",
                    writer: "joykim_bebe",
                },
                rate: {rate: '4', contentsId: '2071965', type: 'rate'}
            },
            {   // 21
                channel: "인스타그램",
                contents: {
                    channel: "y_seol_a",
                    create_date: "2022-05-03 16:40:48",
                    title: "엄마가 너를 위해 더 노력할게요즘 엄마 인생에 너 없는 순간은 상상도 할...",
                    url: "http://www.instagram.com/p/CdGls_APwJ7/",
                    writer: "y_seol_a",
                },
                rate: {rate: '3', contentsId: '2071966', type: 'rate'}
            },
            {   // 22
                channel: "인스타그램",
                contents: {
                    channel: "selly_jha",
                    create_date: "2022-05-03 16:40:48",
                    title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유남양유업 멸...",
                    url: "http://www.instagram.com/p/CdGcu_gBT8J/",
                    writer: "selly_jha",
                },
                rate: {rate: '3', contentsId: '2071866', type: 'rate'}
            },
            {   // 23
                channel: "인스타그램",
                contents: {
                    channel: "hhee86",
                    create_date: "2022-05-03 16:40:48",
                    title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유고소하면서도...",
                    url: "http://www.instagram.com/p/CdGccFtlyDX/",
                    writer: "hhee86",
                },
                rate: {rate: '2', contentsId: '2071867', type: 'rate'}
            },
            {   // 24
                channel: "인스타그램",
                contents: {
                    channel: "chocochanele",
                    create_date: "2022-05-03 15:03:58",
                    title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유우유를 너무...",
                    url: "http://www.instagram.com/p/CdGan1nJkXB/",
                    writer: "chocochanele",
                },
                rate: {rate: '2', contentsId: '2071867', type: 'rate'}
            },
            {   // 25
                channel: "인스타그램",
                contents: {
                    channel: "joykim_bebe",
                    create_date: "2022-05-03 18:56:38",
                    title: "...",
                    url: "http://www.instagram.com/p/CdG1P7MvISZ/",
                    writer: "joykim_bebe",
                },
                rate: {rate: '4', contentsId: '2071965', type: 'rate'}
            },
            {   // 26
                channel: "인스타그램",
                contents: {
                    channel: "y_seol_a",
                    create_date: "2022-05-03 16:40:48",
                    title: "엄마가 너를 위해 더 노력할게요즘 엄마 인생에 너 없는 순간은 상상도 할...",
                    url: "http://www.instagram.com/p/CdGls_APwJ7/",
                    writer: "y_seol_a",
                },
                rate: {rate: '3', contentsId: '2071966', type: 'rate'}
            },
            {   // 27
                channel: "인스타그램",
                contents: {
                    channel: "selly_jha",
                    create_date: "2022-05-03 16:40:48",
                    title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유남양유업 멸...",
                    url: "http://www.instagram.com/p/CdGcu_gBT8J/",
                    writer: "selly_jha",
                },
                rate: {rate: '3', contentsId: '2071866', type: 'rate'}
            },
            {   // 28
                channel: "인스타그램",
                contents: {
                    channel: "hhee86",
                    create_date: "2022-05-03 16:40:48",
                    title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유고소하면서도...",
                    url: "http://www.instagram.com/p/CdGccFtlyDX/",
                    writer: "hhee86",
                },
                rate: {rate: '2', contentsId: '2071867', type: 'rate'}
            },
            {   // 29
                channel: "인스타그램",
                contents: {
                    channel: "chocochanele",
                    create_date: "2022-05-03 15:03:58",
                    title: "#할인구매@namyang.today#맛있는우유gt#남양멸균우유우유를 너무...",
                    url: "http://www.instagram.com/p/CdGan1nJkXB/",
                    writer: "chocochanele",
                },
                rate: {rate: '2', contentsId: '2071867', type: 'rate'}
            },
            ]
        }
        setResponse(res);
    }, [])
    // console.log(response)
    return (
        <>
            <div id={mainStyle[props.chart_id]}>{response ? drawTwtChart(response.data) : null}</div>
            <div className={mainStyle.sec_tbox}>
                <div id={mainStyle.com_lately_table_wrapper}>
                    <table id={props.table_id}>
                        <tbody>
                            {
                                response?.data.map((e, i) => {
                                    return (
                                        <tr role={"row"} className={i%2==0?'even':'odd'}>
                                            <td className={'rp_icon'}><span className={[commonStyle[rateArray[e.rate.rate].className], commonStyle.on].join(" ")}>{rateArray[e.rate.rate].type}</span></td>
                                            <td className={mainStyle.txtarea}>
                                                <p className={mainStyle.tit_text}>
                                                    <a className='link' href={e.contents.url} target="_blank">{e.contents.title}</a>
                                                </p>
                                                <ul>
                                                    <li>{e.contents.channel}</li>
                                                    <li>{e.contents.writer}</li>
                                                    <li>{e.contents.create_date.replaceAll('-','.').slice(0,10)}</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    )
                                }) 
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

// function 반복문() {
//   let arr = [];
//   while($kw = $result_keyword.fetch_assoc()) {
//     arr.push(<option value={$kw['keyword_name']}>{$kw['keyword_name']}</option>)
//   }
//   return arr;
// }
//네이버 키워드 검색현황 키워드 설정, 그래프 생성
export const KeywordConBox = (props) => {
    // id
    let [chart, setChart] = useState();
    useEffect(() => {
        let data = {
            data: [
                {
                    no: { no: 1 },
                    issue_date: "2022-04-14 00:00:00",
                    keyword: "남양유업회장",
                    keywordcnt: "94.1176",
                    content: { memo: "이슈없음", cnt_id: "5844" },
                    delete: "5844",
                },
                {
                    no: { no: 2 },
                    issue_date: "2022-04-13 00:00:00",
                    keyword: "남양유업회장",
                    keywordcnt: "64.7059",
                    content: { memo: "이슈없음", cnt_id: "5841" },
                    delete: "5841",
                },
                {
                    no: { no: 3 },
                    issue_date: "2022-04-12 00:00:00",
                    keyword: "남양유업회장",
                    keywordcnt: "52.9412",
                    content: { memo: "이슈없음", cnt_id: "5835" },
                    delete: "5835",
                },
                {
                    no: { no: 4 },
                    issue_date: "2022-04-11 00:00:00",
                    keyword: "남양유업회장",
                    keywordcnt: "76.4706",
                    content: { memo: "이슈없음", cnt_id: "5832" },
                    delete: "5832",
                },
                {
                    no: { no: 5 },
                    issue_date: "2022-04-10 00:00:00",
                    keyword: "남양유업회장",
                    keywordcnt: "94.1176",
                    content: { memo: "이슈없음", cnt_id: "5829" },
                    delete: "5829",
                },
                {
                    no: { no: 6 },
                    issue_date: "2022-04-09 00:00:00",
                    keyword: "남양유업회장",
                    keywordcnt: "100",
                    content: { memo: "이슈없음", cnt_id: "5825" },
                    delete: "5825",
                },
            ],
        };
        setChart(drawKeywordChart(data));
    }, []);
    return (
        <>
            <div className={mainStyle.kwd_wrap}>
                <select className={"naver_keyword"}>
                    {/* {
              반복문()
            } */}
                </select>
            </div>
            <div>
                <table id={props.id}>{chart}</table>
            </div>
        </>
    );
};
