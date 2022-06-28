import {MONTHS, RATE_COLOR, SNS_COLOR, eDate, yDate, yDate7, sDate7, sDate14, sDate90, YAXIS_MIN_MAX, STATES} from 'chart/common.js'
import {
    setAllRateDoughnutChart,
    setRateByChannelDoughnutChart,
    setRateAreaChart
} from "chart/custom.js";
export function drawT100Chart(data, channelIds, channelIdToName) {
    let allRatesChart;
    const allRates = [0, 0, 0, 0, 0]; // 0 사용 X, 1 긍정, 2 부정, 3 중립, 4 무관
    const channelData = {};
    if (channelIds == null) {
        channelIds = "";
    }
    const channelIdList = Object.values(channelIds);
    channelIdList.forEach(
        (channel) => (channelData[channel] = [0, 0, 0, 0, 0])
    );
    // data formatting
    data.forEach((row) => {
        channelData[row.channel_id][Number(row.rate.rate)]++;
        allRates[Number(row.rate.rate)]++;
    });
    //console.log(channelData)
    //console.log(allRates)
    // 왼쪽 차트
    allRatesChart = setAllRateDoughnutChart("t100_chart_total",allRates, '100%',false)

    // 오른쪽 차트
    let chartArr = [];
    let htmlIdx = 0;
    for (let key in channelIdToName) {
        //console.log(key, channelIdToName[key]);
        if (channelIdList.includes(key)) {
            //$(`#t100_chart_${htmlIdx}`).removeClass('none'); // useState로 바꿈
            // portalTodayDonutCharts.push(setRateByChannelDoughnutChart(`t100_chart_${htmlIdx}`, channelData[key], channelIdToName[key]));

            //setPortalTodayDonutCharts([...portalTodayDonutCharts, setRateByChannelDoughnutChart(`t100_chart_${htmlIdx}`, channelData[key], channelIdToName[key])])
            chartArr.push(
                setRateByChannelDoughnutChart(
                    `t100_chart_${htmlIdx}`,
                    channelData[key],
                    channelIdToName[key]
                )
            );
            //console.log(htmlIdx, portalTodayDonutCharts, setRateByChannelDoughnutChart(`t100_chart_${htmlIdx}`, channelData[key], channelIdToName[key]))
        } else {
            //$(`#t100_chart_${htmlIdx}`).addClass('none');   // useState로 바꿈
            // portalTodayDonutCharts.push(setRateByChannelDoughnutChart(`t100_chart_${htmlIdx}`, [0,0,0,0,0], channelIdToName[key]));

            chartArr.push(
                setRateByChannelDoughnutChart(
                    `t100_chart_${htmlIdx}`,
                    [0, 0, 0, 0, 0],
                    channelIdToName[key]
                )
            );
            //setPortalTodayDonutCharts([...portalTodayDonutCharts, setRateByChannelDoughnutChart(`t100_chart_${htmlIdx}`, [0,0,0,0,0], channelIdToName[key])])
        }
        htmlIdx++;
    }

    //console.log(portalTodayDonutChart)
    //console.log(arr)
    return [allRatesChart, chartArr];
}

export function drawt100WeekChart(data) {
        
    //console.log(data)
    const timeList = [];
    for (let dt = new Date(sDate7); dt <= new Date(eDate); dt.setDate(dt.getDate() + 1))
        timeList[new Date(dt).toISOString().slice(0, 10)] = {1: 0, 2: 0, 3: 0, 4: 0, }; // 긍정, 부정, 중립 타부 무관

    // timeList    
    // 2022-04-09: {1: 0, 2: 0, 3: 0, 4: 0}
    // 2022-04-10: {1: 0, 2: 0, 3: 0, 4: 0}
    // 2022-04-11: {1: 0, 2: 0, 3: 0, 4: 0}
    // 2022-04-12: {1: 0, 2: 0, 3: 0, 4: 0}
    // 2022-04-13: {1: 0, 2: 0, 3: 0, 4: 0}
    // 2022-04-14: {1: 0, 2: 0, 3: 0, 4: 0}
    // 2022-04-15: {1: 0, 2: 0, 3: 0, 4: 0}

    const dateList = Array.from(Object.keys(timeList)).map((item) => `${item.split("-")[1]}월 ${item.split("-")[2]}일`);
    // dateList : ['04월 09일', '04월 10일', '04월 11일', '04월 12일', '04월 13일', '04월 14일', '04월 15일']
    
    const rate = { 1: [], 2: [], 3: [], 4: [] };
    const rateData = {};

    if (data != null)
        for (let d in data) rateData[data[d]["time"]] = data[d];

    for (let key in timeList) {
        if (rateData[key]) {
            let total = 0;
            for (let i = 1; i <= 4; i++) total += rateData[key][i];

            rate[1].push(Math.round(rateData[key][1]));
            rate[2].push(Math.round(rateData[key][2]));
            rate[3].push(Math.round(rateData[key][3]));
            rate[4].push(Math.round(rateData[key][4]));
        } else {
            rate[1].push(0);
            rate[2].push(0);
            rate[3].push(0);
            rate[4].push(0);
        }
    }

    const name = ["", "긍정", "부정", "중립", "무관"];
    const chartData = Object.keys(rate).map((key) => {
        return { name: name[key], data: rate[key] };
    });

    return setRateAreaChart("t100_week_chart", "", chartData, dateList, RATE_COLOR, 275, "100%", false)
}

// 차트 그리는 함수
export function drawProgressWeekChart(res, id) {
    const timeList = [];
    for (
        let dt = new Date(sDate7);
        dt <= new Date(eDate);
        dt.setDate(dt.getDate() + 1)
    )
        timeList[new Date(dt).toISOString().slice(0, 10)] = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
        }; // 긍정, 부정, 중립 타부 무관

    const dateList = Object.keys(timeList).map(
        (item) => `${item.split("-")[1]}월 ${item.split("-")[2]}일`
    );
    // data formatting
    res.data.forEach((row) => {
        const rowDate = row.date;
        if (!timeList[rowDate]) return;

        // 같은 날짜에 채널구분없이 평판 합계를 구함
        for (let i = 1; i <= 4; i++) {
            timeList[rowDate][i] += Number(row[i]);
        }
    });

    const rate = { 1: [], 2: [], 3: [], 4: [] };
    for (let key in timeList) {
        rate[1].push(timeList[key][1]);
        rate[2].push(timeList[key][2]);
        rate[3].push(timeList[key][3]);
        rate[4].push(timeList[key][4]);
    }
    const name = ["", "긍정", "부정", "중립", "무관"];
    const data = Object.keys(rate).map((key) => {
        return { name: name[key], data: rate[key] };
    });

    return setRateAreaChart(id, "", data, dateList, RATE_COLOR, 0, 0, false);
}
