import Contents from 'components/pages/Main/Contents'
import Main from 'components/pages/Main'
import DefaultLayout from 'layouts/DefaultLayout'
import useIsMobile from 'hooks/useIsMobile'
import {SnsBox, LatelyRateBox, NewsBox, SnsLatelyBox, ComLatelyBox, KeywordConBox} from 'components/pages/Main/Card/contentboxes'
// import commonStyle from 'styles/common.module.css'



const MainPage = () => {
	let isMobile = useIsMobile()
  // 여기서 데이터 받아오고 그 데이터를 통해서 차트를 뿌려줌
  const MAIN_CONTENTS = [
		//$AUTH_P_LATELY_ALL ?
		{
			title: "포털별 브랜드 최신 평판",
			chartId: "portal_chart"
		} //: null,
		,{
			title: "최근 올라온 부정글",
			// link: "common_lately.php?class=n&rate=2",
			tableId: "negative_table",
			className: "sec_ngtv sec_c01"
		},
		//$AUTH_P_LATELY_ALL ?
		{
			title: "포털사이트 최신글 평판 현황",
			link: "common_lately_progress.php?class=n",
			className: "sec_repu",
			conBox: <LatelyRateBox id={"lately_week_chart"}/> // id
		} //: null,
    //$AUTH_P_LATELY_ALL ?
		,{
			title: "포털사이트 최신 뉴스",
			link: "common_lately.php?type=news&class=n",
			className: "sec_ngtv sec_c01 p_news",
			conBox: <NewsBox id={"news_table"}/>  // id
			
		} //: null,
    //$KEYWORD_SEARCH_FLAG.match(/1/) ?
		,{
			title: "네이버 키워드 검색 현황",
			link: "keyword_progress.php",
			conBox: <KeywordConBox id={"keyword_chart"}/>,  // id
			className: "sec_kwd"
			
		} //: null,
		//$AUTH_SNS_LATELY_ALL ?
		,{
			title: "SNS 최신글 현황",
			link: "common_lately.php?class=s&channel=i",
			conBox: <SnsLatelyBox chart_id={"sns_lately_chart"} table_id={"sns_lately_table"}/>, // chart_id,table_id
			className: "sec_ngtv"
			
		} //: null,
		//$AUTH_SNS_PROGRESS ?
		,{
			title: "SNS 최신 평판 추이",
			link: "common_lately_progress.php?class=s&channel=i",
			conBox: <SnsBox id={"sns_week_chart"} type={"sns_week"}/>, // , type
			className: "sec_sns"
			
		} //: null,
		//$COMMUNITY_FLAG.substr(1, 1) ?
		,{
			title: "커뮤니티 최신글 현황",
			link: "common_lately.php?class=c",
			conBox: <ComLatelyBox chart_id={"com_lately_chart"} table_id={"com_lately_table"}/>,  // chart_id,table_id
			className: "sec_ngtv"
			
		} //: null,
		//$COMMUNITY_FLAG.substr(1, 1) ?
		,{
			title: "커뮤니티 최신 글 평판 추이",
			link: "common_lately_progress.php?class=c",
			chartId: "week_com_chart"
			
		} //: null,
		// $CHANNEL_SELF_FLAG.substr(2, 1) ?
		// {
		// 	title: "유튜브 최신 댓글",
		// 	link: "common_inchannel_comments.php",
		// 	conBox: ytBox("yt_chart","yt_table"),
		// 	className: "sec_ngtv"
			
		// } : null,
		// $AUTH_SNS_PROGRESS_MY.substr(0, 1) ?
		// {
		// 	title: "자사 SNS 채널 구독자 현황",
		// 	link: "common_inchannel_progress.php",
		// 	conBox: snsBox("sns_chart", "sns"),
		// 	chartId: "sns_chart"
		// } : null,
		// $REVIEW_N_FLAG.substr(0, 1) ?
		// {
		// 	title: "네이버 플레이스 최근 리뷰",
		// 	link: "common_review.php?channel=naver",
		// 	conBox: naverLatelyBox("n", "naver_lately_chart"),
		// 	className: "sec_rrv",
		// } : null,
		// $REVIEW_K_FLAG.substr(0, 1) ?
		// {
		// 	title: "카카오맵 최근 리뷰",
		// 	link: "common_review.php?channel=kakao",
		// 	conBox: reviewBox("k"),
		// 	className: "sec_rrv"
			
		// } : null,
		// $REVIEW_G_FLAG.substr(0, 1) ?
		// {
		// 	title: "구글지도 최근 리뷰",
		// 	link: "common_review.php?channel=google",
		// 	conBox: reviewBox("g"),
		// 	className: "sec_rrv"
			
		// } : null,
		// $REVIEW_M_FLAG.substr(0, 1) ?
		// {
		// 	title: "모두닥 최근 리뷰",
		// 	link: "common_review.php?channel=modoodoc",
		// 	conBox: reviewBox("m"),
		// 	className: "sec_rrv"
			
		// } : null,
		// $MKT_SELF_FLAG.substr($MKT_SELF_FLAG, 0, 1) ?
		// {
		// 	title: "오늘의 콘텐츠 노출 현황",
		// 	link: "mkt_brand_daily.php",
		// 	conBox: mktConBox(),
		// 	className: "sec_snow"
			
		// } : null,
		// $MKT_CMP_FLAG.substr(0, 1) ?
		// {
		// 	title: "오늘의 경쟁 현황",
		// 	link: "mkt_zone_daily.php",
		// 	conBox: zoneConBox(),
		// 	className: "portal_chart"
			
		// } : null,
		// $dev_level == 1 && $CHANNEL_SELF_FLAG.substr(0, 1) ?
		// {
		// 	title: "유튜브 구독자 현황",
		// 	link: "common_inchannel_progress.php",
		// 	chartId: "youtube_chart"
			
		// } : null,
	];

  // MAIN_CONTENTS 배열의 정보에 따라서 컴포넌트를 넣어줌
  function addContents(){
    let mainContents = [];
    for(let i=0; i<MAIN_CONTENTS.length; i++){
		if(i++ <MAIN_CONTENTS.length)	// 두개씩
			mainContents.push(<Contents info={[MAIN_CONTENTS[i-1],MAIN_CONTENTS[i]]}/>)
			//mainContents += baseContainer(MAIN_CONTENTS[i-1],MAIN_CONTENTS[i]);
		else	// 하나만
			mainContents.push(<Contents info={[MAIN_CONTENTS[i-1],null]}/>)
			//mainContents += baseContainer(MAIN_CONTENTS[i-1], null);
	}
    console.log(mainContents)
    return mainContents
  }

  return (
    <DefaultLayout>
      <Main />
      {addContents()}
    </DefaultLayout>
  )
}




export default MainPage
