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
                <img src={`${data[a.num].img}`} alt="blackjack" />
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
    {img:'data:image/jpeg;base64,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',name:'국제규격 마카오 카지노칩 포커칩 컬러칩 100P 세트',price:'13300'},
    {img:'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B000C0ZABW&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=automaticpoke-20&language=en_US',name:'부드러운 고급 마술카드 글래모어 너겟 명품 카지노 스타일 보드게임 트럼프카드',price:'11000'},
    {img:'https://www.eventprophire.com/wp-content/uploads/2018/10/SN4693-Wheel-of-Fortune-Party-Game-Black-Frame-_event_prop_hire_284_Optimised.jpg',name:'대형 뽑기 룰렛판 행사용 돌려돌려 돌림판',price:'23230'},
    {img:'https://i.ytimg.com/vi/tveZIrxgJoQ/maxresdefault.jpg',name:'슬롯 머신 저금통 중형사이즈 복불복게임',price:'10000'},
]
let ucode=shdt.map(k=>
    <tr>
        <td>{k.img}</td>
        <td>{k.name}</td>
        <td>{k.price}</td>
    </tr>
)
// console.log(ucode)
let lcode=(
    <React.Fragment>
        <table>
            <thead>
                <tr>
                    <th>이미지</th>
                    <th>상품명</th>
                    <th>가격</th>
                </tr>
            </thead>
            <tbody>
                {ucode}
            </tbody>
        </table>
    </React.Fragment>
)
// console.log(lcode)
// ReactDOM.render(lcode,document.querySelectorAll('.each')[4])