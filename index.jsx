console.log("%c100,000","background-color:red;line-height:80px;border-radius:50%;border: 20px dashed transparent;background-image: linear-gradient(#ddd,#ddd),repeating-conic-gradient(black 10%,black 15%,orange 16%,orange 20%);background-origin: border-box;background-clip: content-box,border-box;font-size:20px")
console.log("%c✡","outline:1px solid black;font-size:100px;border-top:30px solid blue;border-bottom:30px solid blue;padding-left:100px;padding-right:100px;color:blue",'\npray for Israel')
console.log("%cd","color:transparent;font-size:100px;padding-left:100px;padding-right:100px;background-image:linear-gradient(to bottom,blue,blue 50%,yellow 51%,yellow);line-height:170px",'pray for Ukraine')
// const imgcode=data[0].img
// console.log(window.innerWidth,window.innerHeight)
const mcode=(
    <React.Fragment>
        <div className="chop">100,000</div>
        <div className="chop">100,000</div>
        <div className="chop">100,000</div>
        <div className="chop">100,000</div>
        <b>What is game?</b>
    </React.Fragment>
)
ReactDOM.render(mcode,document.querySelectorAll('.each')[0])
const data=[
    {title:'BLACK JACK',desc:'플레잉 카드로 즐길 수 있는 카지노 게임류의 일종이다. 21에 가까이 만들면 이기는 게임이다.딜러에게 카드를 한장씩 받아 21에 가까운 수를 만드는 사람이 이기며 21을 초과하면 지는 게임.',img:'https://extrabetamerica.imgix.net/shutterstock_1912987084_40fb028413.jpg',clip:'https://www.youtube.com/embed/PljDuynF-j0',link:''},
    {title:'ROULETTE',desc:'룰렛(roulette)은 주로 카지노에서 행해지는 도박의 한 종류며 테이블 게임으로 분류된다. 플레이어가 원하는 곳에 칩을 베팅하고, 딜러는 사발 모양의 회전 기구에 쇠구슬을 떨어뜨려서 그 쇠구슬이 멈춘 숫자에 따라 승패 및 배당이 결정된다.',img:'https://maryland.livecasinohotel.com/-/media/images/maryland/gaming-images/table-games/maryland_gaming_tables_roulette_800x536.ashx',clip:'https://www.youtube.com/embed/Gcy3_HhFbyY',link:''},
    {title:'SLOT MACHINE',desc:'카지노 등 도박시설에 배치되어 있는 도박기기 중 하나이다. 화폐나 칩을 넣고 레버를 당기거나 버튼을 누르면 화면에 있는 무늬가 돌아가는데, 크레딧의 라인과 당첨의 조합이 일치하면 돈을 따고, 그렇지 않은 경우 돈을 잃는다.',img:'https://www.leelanausandscasino.com/images/content/interior/hot_ice.jpg',clip:'https://www.youtube.com/embed/dRPcJyisLUI',link:''},
]
function Code(a) {
    const know=function () {
        window.open(`${data[a.num].clip}`,'',`width=${window.innerWidth/2},height=${window.innerHeight/2},top=${window.innerHeight/4},left=${window.innerWidth/4}`)
    }
    const gogo=function () {
        window.open('','',`width=${window.innerWidth},height=${window.innerHeight}`)
    }
    return(
        <React.Fragment>
            <h1>{data[a.num].title}</h1>
            <div className="bx">
                <p>{data[a.num].desc}</p>
                <img src={`${data[a.num].img}`} alt="game" />
                <div className="aa" onClick={know}>show how to play</div>
                <div className="bb" onClick={gogo}>go to play test game</div>
            </div>
        </React.Fragment>
    )
}
ReactDOM.render(<Code num="0"/>,document.querySelectorAll('.game')[0])
ReactDOM.render(<Code num="1"/>,document.querySelectorAll('.game')[1])
ReactDOM.render(<Code num="2"/>,document.querySelectorAll('.game')[2])
const li=document.querySelectorAll('.li')
let page=0
li.forEach((a,b)=>{
    a.onclick=function () {
        page=b
        window.scrollTo(window.innerWidth*page,0)
    }
})
const shdt=[
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIboodX14wCxyAFgqyoTt1pwBJV36V5_qB4Q&usqp=CAU',name:'국제규격 마카오 카지노칩 포커칩 컬러칩 100P 세트',price:'13300'},
    {img:'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B000C0ZABW&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=automaticpoke-20&language=en_US',name:'부드러운 고급 마술카드 글래모어 너겟 명품 카지노 스타일 보드게임 트럼프카드',price:'11000'},
    {img:'https://www.eventprophire.com/wp-content/uploads/2018/10/SN4693-Wheel-of-Fortune-Party-Game-Black-Frame-_event_prop_hire_284_Optimised.jpg',name:'대형 뽑기 룰렛판 행사용 돌려돌려 돌림판',price:'23230'},
    {img:'https://i.ytimg.com/vi/tveZIrxgJoQ/maxresdefault.jpg',name:'슬롯 머신 저금통 중형사이즈 복불복게임',price:'10000'},
]
const upcode=function (q,w) {
    let hcode=q.map(m=>`<tr>
        <td><img src="${m.img}"></td>
        <td>${m.name}</td>
        <td>${m.price}</td>
    </tr>`)
    w.innerHTML=`
        <table>
            <thead>
                <tr>
                    <th>이미지</th>
                    <th>상품명</th>
                    <th>가격(원)</th>
                </tr>
            </thead>
            <tbody>
                ${hcode.join('')}
            </tbody>
        </table>
    `
}
// console.log(ucode)
// let lcode=(
//     <React.Fragment>
//         <table>
//             <thead>
//                 <tr>
//                     <th>이미지</th>
//                     <th>상품명</th>
//                     <th>가격</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {upcode()}
//             </tbody>
//         </table>
//     </React.Fragment>
// )
// console.log(lcode)
upcode(shdt,document.querySelectorAll('.each')[4])
// ReactDOM.render(upcode(),document.querySelectorAll('.each')[4])