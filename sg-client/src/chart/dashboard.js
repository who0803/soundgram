import {MONTHS, RATE_COLOR, SNS_COLOR, eDate, yDate, yDate7, sDate7, sDate14, sDate90, YAXIS_MIN_MAX, STATES} from 'chart/common.js'
import ApexChart from 'react-apexcharts'

export function drawProtalChart(res, id, portalList, portalListKo){
    // const parentNode = document.getElementById(id);
    // parentNode.innerHTML = "";
        
    const options = {
        chart: {
            type: 'bar',
            stacked: true,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: true
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 10,
                columnWidth: '50%'
            },
        },
        xaxis: {
            type: 'category',
            categories: [],
        },
        yaxis: {
            ...YAXIS_MIN_MAX,
        },
        legend: {
            position: 'bottom'
        },
        states: STATES,
    };

    options['xaxis']['categories'] = portalList;

    const rates = [{name:"긍정",data: Array(portalList.length).fill(0)},
                {name:"부정",data: Array(portalList.length).fill(0)},
                {name:"중립",data: Array(portalList.length).fill(0)},
                {name:"무관",data: Array(portalList.length).fill(0)}];

    res.data.forEach((row) => {
      let addNum = 0;
      portalListKo.forEach((portal, index) => {
          if(row.channel.indexOf(portal) != -1) addNum = index;
      })

      for(let i=0;i<4;i++)
        rates[i]['data'][addNum] += Number(row[i+1]);
    });
    

    //options['series'] = rates;
    options['colors'] = RATE_COLOR;

    // const allChart = new ApexCharts(parentNode, options);
    // allChart.render();
    window.dispatchEvent(new Event('resize'))
    return (
        <ApexChart 
            type="bar"
            series={rates} 
            options={options}
            height={300}
        />
    );
}



export function drawKeywordChart(response){
    const keys = new Set(response['data'] ? response['data'].map((item) => item['keyword']) : []);
    //let dateList = Array.from(Object.keys(timeList)).map(item => `${item.split('-')[1]}월 ${item.split('-')[2]}일`)
        
    const options = {
        chart: {
            type: 'line',
            shadow: {
                enabled: false,
                color: '#000',
                top: 3,
                left: 2,
                blur: 3,
                opacity: 1
            },    
            toolbar:{
                show : true
            },
            zoom: {
                enabled: true
            }
        },
        colors: ['#00B050', '#FFC000', '#5B9BD5'],
        stroke: {
            width: 4,   
            curve: 'straight'
        },
        series : [{}],
        xaxis: {
            type: 'category',
            categories: [],
        },
        title: {
            text: '',
            align: 'left',
            style: {
                fontSize: "16px",
                color: '#666'
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
            },
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.3
            },
        },
        markers: {
            size: 4,
            opacity: 0.9,
            colors: ["#FFA41B"],
            strokeColor: "#fff",
            strokeWidth: 2,
            
            hover: {
                size: 7,
            }
        },
        yaxis: {
            ...YAXIS_MIN_MAX,
            title: {
                text: '',
            },                
        },
        dataLabels: {},
        tooltip: {},
    }

    options['series'] = Array.from(keys).map(key => {
      return { name: key, data: []}
    })

    options['series'].forEach((item) => {
      item['data'] = (response['data']?.filter(d => d.keyword === item['name']).map(d => Math.ceil(d['keywordcnt']))).reverse()
    })

    options['xaxis']['categories'] = (response['data']?.map((item) => {
      let dateFormat = (item['issue_date'].split(' ')[0]).split('-')
      return `${dateFormat[1]}월 ${dateFormat[2]}일`
    })).reverse()

    options['chart']['zoom']['enabled']=false;
    options['chart']['toolbar']['show']=false;
  
    // const parentNode = document.getElementById("keyword_chart");
    // parentNode.innerHTML = "";
    // const allChart = new ApexCharts(parentNode, options);
    // allChart.render();
    window.dispatchEvent(new Event('resize'))
    
    return (
        <ApexChart 
            type="line"
            series={options['series']} 
            options={options}
            width='100%'
            height={300}
        />
    );
  }


export function drawTwtChart(data){
    // console.log(elementId, data);
    //if (data) {
        const rates = {1:"긍정", 2:"부정", 3:"중립", 4:"무관" };
        let count = {"긍정":0, "부정":0, "중립":0, "무관":0};
    
        data.forEach(item => {
            count[rates[item.rate.rate]]++;
        });
    
        const options = {
            series: [],
            chart: {
                type: 'bar',
                stacked: true,
                stackType: '100%',
                toolbar:{
                    show : false
                },
                offsetX: -10
            },
            dataLabels: {
                formatter: function (val) {
                    if (val > 1) {
                        return val.toFixed(0)+"%"
                    }
                },
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        hideOverflowingLabels: true
                    },
                },
            },
            states: STATES,
            stroke: {
                show: false,
                width: 0,
                colors: ['#fff']
            },
            xaxis: {
                categories: ["최근 100개"],
                labels:{
                    show:false
                },
                axisBorder: {
                    show: false
                }
            },
            yaxis: {
                labels:{
                    show:false 
                },
                axisBorder: {
                    show: false
                }
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val+"개";
                    }
                }
            },
            fill: {
                opacity: 1
            },
            grid:{
                show:false,
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }, 
            },
            legend: {
                show:false
            }
        };
    
    
        options['series'] = Array.from(Object.keys(count)).map(key => {
            return { name: key, data: [count[key]]}
        })
    
        options['colors'] = RATE_COLOR;
    
        window.dispatchEvent(new Event('resize'))
        return (
            <ApexChart 
                type="bar"
                series={options['series']} 
                options={options}
                height={85}
                width='100%'
            />
        );
    // }
    // else return undefined
}
  