const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const RATE_COLOR = ['#37CDE8', '#F64F69', '#ffe066',  '#dddddd']; // 긍정, 부정, 중립 무관
const SNS_COLOR = ['#625BD9', '#C70000', '#32AEE5', '#284896']; // 인스타그램, 유튜브, 트위터, 페이스북

/**
 * 날짜
 */
 String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
 String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
 Number.prototype.zf = function(len){return this.toString().zf(len);};
 function getToday(){
   const today = new Date();
   return `${today.getFullYear()}-${(today.getMonth()+1).zf(2)}-${(today.getDate()).zf(2)}`;
 }
 let eDate = getToday();
 let yDate = new Date(eDate);
 let yDate7 = new Date(eDate);
 let sDate7 = new Date(eDate);
 let sDate14 = new Date(eDate);
 let sDate90 = new Date(eDate);
 yDate.setDate(yDate.getDate()-1); // 하루 전 
 yDate = yDate.toISOString().slice(0,10);
 yDate7.setDate(yDate7.getDate()-8); // 8일 전
 yDate7 = yDate7.toISOString().slice(0,10);
 sDate7.setDate(sDate7.getDate()-6); // 일주일 전 
 sDate7 = sDate7.toISOString().slice(0,10);
 sDate14.setDate(sDate14.getDate()-13);  // 2주전
 sDate14 = sDate14.toISOString().slice(0,10);
 sDate90.setDate(sDate90.getDate()-90);  // 2주전
 sDate90 = sDate90.toISOString().slice(0,10);

/**
 * 차트 공통 옵션
 */
// y축 간격 일정하게 조절
const YAXIS_MIN_MAX = {
    min: function(min){
        if(min == "1.7976931348623157e+308") min = 0
        return min < 5 ? 0: min
    },
    max: function(max) {
        const maxValue = parseInt(max.toFixed(0))
        return maxValue > 4 ? maxValue : 5;
    },
    tickAmount: 5,
    labels: { //소수점 삭제
        formatter: function(val) {
            return val.toFixed(0);
        }
    },
}

// states 설정 lighten | none | darken  
// (lighten 으로 설정 시 회색이 흰색이 되는 문제 발생)
const STATES  = {
    normal: {
        filter: {
            type: 'none',
            value: 0,
        }
    },
    hover: {
        filter: {
            type: 'darken',
            value: 0.8,
        }
    },
    active: {
        allowMultipleDataPointsSelection: false,
        filter: {
            type: 'darken',
            value: 1,
        }
    },
}

export {MONTHS, RATE_COLOR, SNS_COLOR, eDate, yDate, yDate7, sDate7, sDate14, sDate90, YAXIS_MIN_MAX, STATES}