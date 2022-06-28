import {MONTHS, RATE_COLOR, SNS_COLOR, eDate, yDate, yDate7, sDate7, sDate14, sDate90, YAXIS_MIN_MAX, STATES} from 'chart/common.js'
import ApexChart from 'react-apexcharts'

/**
 * 모든 차트에 공통으로 사용되는 설정들은 chart.common.js 에 정의!!
 */

/**
 * 전체 평판 도넛 차트
 */

export function setAllRateDoughnutChart(elementId, allData, chartWidth = '350px',showLegend = true) {
    // const parentNode = document.getElementById(elementId);
    // parentNode.innerHTML = "";



    // 기존 코드
    // const allChart = new ApexCharts(document.getElementById(elementId), options);
    // allChart.render();

    // 이건 뭘까
    // const labelNodeList = document.getElementsByClassName('apexcharts-legend');
    // labelNodeList[0].style.top = null;
    // const labelList = Array.from(labelNodeList)

    // labelList.forEach((element)=>{
    //     const channel = element.innerHTML.replaceAll(className, "");

    //     element.innerHTML = `${className} <tspan style="font-weight: bold;">${channel}</tspan>`})
    
    // console.log(labelList)
    console.log('allData : ', allData)
    console.log('RATE_COLOR : ', RATE_COLOR)
    console.log(eDate, sDate7)
    
    const timeList = [];
    for(let dt=new Date(sDate7); dt<=new Date(eDate); dt.setDate(dt.getDate()+1))
        timeList[(new Date(dt)).toISOString().slice(0,10)] = { 1:0, 2:0, 3:0, 4:0 };  // 긍정, 부정, 중립 타부 무관
    console.log('timeList : ',timeList)
    console.log(Array.from(Object.keys(timeList)).map((item) => `${item.split("-")[1]}월 ${item.split("-")[2]}일`))
    return (
        <ApexChart
            type="donut"
            series={allData.splice(1)} 
            options = {{
                // series: allData.splice(1),
                colors: RATE_COLOR,
                chart: {
                    type: 'donut',
                    // height: '100%',
                    width: chartWidth,
                    toolbar: {
                        show: false
                    }
                },
                labels: ['긍정', '부정', '중립', '무관'],
                plotOptions: {
                    pie: {
                        donut: {
                            labels: {
                                show: true,
                                name:{
                                    offsetY: 25,
                                },
                                value: {
                                    color: '#F64F69',
                                    fontSize: '24px',
                                    offsetY: -15,
                                    fontWeight: 600,
                                },
                                total: {
                                    show: true,
                                    showAlways: true,
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    label: '전체 부정글',
                                    color: '#F64F69',
                                    formatter: function (val) {
                                        return val.config.series[1]
                                        
                                    },
                                }
                            }
                        }
                    }
                },
                stroke: {
                    width: 2,
                    curve: 'smooth'
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    opacity: 1,
                },
                legend: {
                    show: showLegend,
                    position: 'right',
                    horizontalAlign: 'center',
                    offsetY: 120,
                    onItemClick: {
                        toggleDataSeries: false
                    },
                },
                states: STATES,
            }}
        />
    );
}


/**
 * Main Dashboard 오늘의 브랜드 검색 평판
 */

export function setRateByChannelDoughnutChart(elementId, allData, title) {
    // const parentNode = document.getElementById(elementId);
    // parentNode.innerHTML = "";

    // const allChart = new ApexCharts(document.getElementById(elementId), options);

    // allChart.render();
    return (
        <ApexChart 
            type="donut"
            series={allData.splice(1)} 
            options = {{
                // series: allData.splice(1),
                colors: RATE_COLOR,
                chart: {
                    type: 'donut',
                    height: '130px',
                    width: '100%',
                    toolbar: {
                        show: false
                    }
                },
                labels: ['긍정', '부정', '중립', '무관'],
                plotOptions: {
                    pie: {
                        donut: {
                            size: 75,
                            labels: {
                                show: true,
                                name: {
                                    show:false
                                },
                                value: {
                                    color: '#F64F69',
                                },
                                total: {
                                    show: true,
                                    showAlways: true,
                                    label: '부정',
                                    color: '#F64F69',
                                    formatter: function (val) {
                                        return val.config.series[1]
                                    },
                                }
                            }
                        }
                    }
                },
                title:{
                    text: title,
                    align: 'bottom'
                },
                stroke: {
                    width: 2,
                    curve: 'smooth'
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    opacity: 1,
                },
                legend: {
                    show: false
                },
                states: STATES,
            }}
        />
    );
}



/**
 * 통계분석 신규 글 등록 추이 
 */
export function setRateAreaChart(elementId, dateFormat, series, days, colors, height=0, width=0, zoom=true) {
    // const parentNode = document.getElementById(elementId);
    // if(!parentNode) return
    // parentNode.innerHTML = "";
    const xaxis = {
        "categories": days,
        "labels": {}
    }
    const x = {};    

    if(dateFormat!=""){
        xaxis["labels"]["format"] = dateFormat;
        xaxis['labels']['showDuplicates'] = false;
        xaxis["type"] = 'datetime';
        x["format"] = dateFormat;
    }
    // console.log(days)

    const options = {
        chart: {
            type: 'area',
            stacked: true,
            events: {
                beforeZoom: (e, {xaxis}) => {
                    let maindifference = Math.abs(new Date(days[0]).valueOf() - new Date(days[days.length-1]).valueOf());
                    let zoomdifference = xaxis.max - xaxis.min ;
                    if( zoomdifference > maindifference ) {
                        return  {
                            // dont zoom out any further
                            xaxis: {
                                min: days[0],
                                max: days[days.length-1],
                            }
                        }
                    }
                    else {
                        return {
                            // keep on zooming
                            xaxis: {
                                min: xaxis.min,
                                max: xaxis.max
                                
                            }
                        }
                    }
                }
            },    
            toolbar:{
                show : zoom
            },
            zoom: {
                enabled: zoom,
                stroke: {
                    width: 1
                }
            }
        },
        colors: colors,
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [20, 100, 100, 100]
            },
        },
        markers: {
            size: 4,
            hover: {
                size: 9
            }
        },
        legend: {
            show:false,
            position: 'top',
            horizontalAlign: 'left'
        },
        xaxis,
        yaxis:{          
            ...YAXIS_MIN_MAX,
        },
        tooltip: {
            x
        },
        grid: {
            padding:{
                right: 40
            }
        },
        states: STATES,
    };

    if(height==0){
        options['chart']['height'] = 300;
    }else{
        options['chart']['height'] = height;
    }
    if(width!=0){
        options['chart']['width'] = width;
    }

    // const allChart = new ApexCharts(document.getElementById(elementId), options);

    // allChart.render();
    return (
        <ApexChart 
            type="area"
            series={series} 
            options={options}
        />
    );

}