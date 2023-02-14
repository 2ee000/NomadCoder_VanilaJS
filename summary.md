<!--
강조 : **내용**
취소 : ~~내용~~
코드 사용 : ```사용 언어
            내용
            '''
블록 넣기 : > ~ >>>>
밑줄(구분선) :  ***, ---
체크박스 : [], [x]
-->
# 1 INTRODUCTION
### JavaScript
> 10일만에 만들어짐<br>
> 브라우저에 내장되어있어 따로 설치 필요없음<br>
> 모든 브라우저에 내장되어있음<br>
> **Front-end 개발자가 사용할 수 있는 유일한 프로그래밍 언어**(Back-end에서도 사용 가능)<br>
> HTML의 Element들을 JavaSCript를 통해 변경하고, 읽을 수 있음<br>
> 실시간, 3D, 머신러닝 등 여러 분야에서 사용 가능<br>
> 기술을 좀 더 가다듬어 깊게 배우고 싶다면 FrameWork

### FrameWork
> 개발에 도움을 줌<br>
>> React Native  : JavaScript만으로 Android와 IOS App을 만들 수 있게 해줌<br>
>> Electron : JavaScript, HTML, CSS로 Desktop App을 만들 수 있게 해줌

---

# 2 WELCOME TO JAVASCRIPT
### HTML / CSS / JavaScript
> 브라우저는 HTML을 열고, HTML은 CSS와 JavaScript를 가져옴(접착제 기능)<br>
> JavaScript 파일이나 CSS파일은 브라우저에서 여는게 아님<br>
> 일반적으로 JavaScript 파일은 맨 앞에서 가져오는 CSS와 다르게 맨 끝에서 가져옴(선언)<br>
> ```html
> <!DOCTYPE html>
> <html lang="en">
>   <head>
>     <meta charset="UTF-8">
>     <meta http-equiv="X-UA-Compatible" content="IE=edge">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <link rel="stylesheet" href="style.css"/>
>     <title>Momonetum</title>
>   </head>
>   <body>
>     <script src="app.js"></script>  
>   </body>
> </html>
> ```

### Data Type
> integer : full number(정수)<br>
> ```js
> 입력 : 1 + 1
> 출력 : 2
> ```
> float : 소수<br>
> ```js
> 입력 : 0.5 + 1
> 출력 : 1.5
> ```
> string : text(문자), 처음부터 끝까지모두 글자로 이뤄져있음(따옴표 사용)<br>
> ```js
> 입력 : "hello" + ":)" or 'hello' + ':)'
> 출력 : hello:)
> ```
> variable : 값을 저장하거나 유지하는 역할<br>
> 　　　 　이름을 정할 때 공백이 없어야함<br>
> 　　　 　js에서는 veryLongVariableName과 같이 사용하지만(낙타같이 생겨 camelcase라고 부름),<br>
> 　　　 　python에서는 very_long_variable_name과 같이 사용<br>
> boolean : true와 false로 이루어짐(따옴표 사용x)<br>
> **null** : 아무것도 없음을 의미, 변수에 아무것도 없다는 것을 뜻함(null != false)(따옴표 사용x)<br>
> **undefined** : 값이 정의되지 않음, 메모리 안에 존재하지만 값이 없음(따옴표 사용x)

### Variable
> **const** : constant(상수)로 항상 변하지 않는 값을 의미(재선언 금지, 재할당 금지)
> ```js
> const a = b;
> const a = c;          재선언 x
> 
> a = c;                재할당 x
> ```
> **let** : 새로운 것을 생성할 때 사용(재선언 금지, 재할당 가능)
> ```js
> let a = b;
> let a = c;            재선언 x
>
> a = c;                재할당 o
> ```
> **var** : 잘 사용하지 않는다(재선언 가능, 재할당 가능)
> ```js
> var a = b;
> var a = c;            재선언 o
> 
> a = d;                재할당 o
> ```
> 가능한 const, 가끔 let, 최대한 사용하지 않음 var

### Array(배열)
> 리스트와 비슷한 객체로서 순회와 변형 작업을 수행하는 매서드를 갖음<br>
> JavaScript의 Array는 길이와 각 요소의 자료형이 고정되어있지않음<br>
> **대괄호([])** 를 사용하여 묶어주고 각각의 항목은 쉼표로 분리함
> ```js
> 입력 : const exemple = [1, 2, "hello", true, null];
>        console.log(exemple);
> 출력 : (5) [1, 2, 'hello', true, null]
> ```
> **[]** : 인덱스를 통해 배열 항목에 접근(0부터 시작)<br>
> ```js
> console.log(배열[인덱스]);
> ```
> **push** : Array에 새로운 항목을 추가
> ```js
> 배열.push("추가할 항목");
> ```

### Object
> property(특성)를 가진 데이터를 저장해주며, **중괄호({})** 를 사용하여 묶어준다<br>
> object 안에서는 '='를 사용하지않고, ':'를 사용<br>
> 한 개의 property를 작성한 후 콤마(,)를 사용하여 다른 property를 이어서 작성함
> ```js
> const player = {
>   name: "2ee",
>   points: 10,
>   fat: false,
> };
>
> 입력 : console.log(player);
> 출력 : {name: "2ee", points: 10, fat: false}
>
> 입력 : console.log(player.name); or console.log(player["name"]);
> 출력 : 2ee
> ```
> 선언된 object를 바꾸는 것은 불가능하나(const이기 때문) property를 바꾸는 것은 가능
> ```js
> 입력 : player.points = 22;
>        console.log(player.points);
> 출력 : 22
> ```
> property추가 가능
> ```js
> 입력 : player.age = 24;
>        console.log(player);
> 출력 : {name: "2ee", points: 22, fat: false, age: 24}
> ```

### Function
> 반복해서 사용할 수 있는 코드조각으로, 어떤 코드를 캡슐화하여 여러번 실행할 수 있게 해줌
> ```js
> function sayHello() {
>   console.log("Hello!");
> }
> 
> 입력 : sayHello();
> 출력 : "Hello!"
> ```
> function의 괄호 안의 매개변수에서 argument를 받을 수 있음<br>
> 또한 argument는 하나만 받을 수 있는것이 아니고 여러개도 받을 수 있음
> ```js
> function sayHello(name, age) {
>   console.log("Hello! my name is " + name + " and I'm " + age);
> }
> 
> 입력 : sayHello("2ee", 24);
> 출력 : Hello! my name is 2ee and I'm 24
> ```
> function의 값은 function 안에서만 존재함<br>
> 객체 안에 함수를 정의할 때는 functionName: function() {}의 형태로 사용
> ```js
> const player = {
>   name: "2ee",
>   sayHello: function (otherPersonsName) {
>     console.log("Hello! " + otherPersonName + " nice to meet you!");
>   },
> };
> console.log(player.name);
> player.sayHello("Seo");
> 
> 출력 : 2ee
>        Hello! Seo nice to meet you!

### console.log
> 콘솔에 결과를 보여주기 위한 것

### console.dir
> element 내부를 보여주기 위한 것

### Return
> 함수 실행을 종료하고, 주어진 값을 함수 호출 지점으로 반환<br>
> console화면이 아닌 데이터를 받아 사용하거나 화면에 결과를 출력하기 위해 returns 사용<br>
> variable에 function을 할당하면 variable은 function의 return value를 가지게 됨<br>
> **한번 return하면 function은 끝나게됨**
> function은 계속 남아있는것이 아니고 실행되고나면 사라지고, 마지막에 결과를 남김
> ```js
> const calculator = {
>   plus: function(a, b){
>     return a + b;
>   },
>   minus: function(a, b){
>     return a - b;
>   },
> };
> 
> const pluseResult = calculator.plus(2, 3);
> console.log(pluseResult);
> 
> 출력 : 5

### prompt(message, default)
> 사용자에게 창을 띄워 값을 받음<br>
> message의 기본값은 string(숫자를 입력해도 string이라고 뜸)<br>
> prompt();를 사용하면 답을 할 때까지 JavaScript 코드의 실행을 멈춤(매우 오래된 방법)<br>
> 잘 사용하지 않음(message가 이쁘지 않음, CSS적용 불가)

### typeof
> variable(변수)의 type을 보는 방법

### parseInt()
> string을 number로 변환<br>
> 숫자가 아닐 경우 변환이 안됨(NaN : not a number)

### inNaN()
> 하나의 argument(인자)를 주면 number인지 아닌지 알려줌(boolean을 반환함)<br>
> 숫자 입력 : false<br>
> 문자 입력 : true

### Conditional(조건문)
> condition은 boolean으로 판별 가능해야함
> ```js
> if(조건) {
>   조건이 참일 때 실행코드
> }
> else {
>   조건이 거짓일 때 실행코드
> }
> ```
> if, else if, else
> ```js
> if(조건1) {
>   조건1이 참일 때 실행코드
> }
> else if(조건2) {
>   조건1이 거짓이고 조건2가 참일 때 실행코드
> }
> else {
>   조건1, 2 둘 다 만족하지 않을 때 실행코드
> }
> ```
> || : (also) 또는의 의미로 하나라도 true면 true반환, 모두 false일 때 false반환
> ```js
> true || true = true
> false || true = true
> true || false = true
> false || false = false
> ```
> && : (and) 그리고의 의미로 모두 true여야 true반환, 하나라도 false면 false반환
> ```js
> true && true = true
> false && true = false
> true && false = false
> false && false = false
> ```
> ==, ===, !=, <, <=, >, >=
> ```js
> == : 같다(값을 비교, binaryCode로 구분)
> === : 같다(값과 유형을 비교)
> != or !==: 다르다
> a < b : a는 b보다 작다
> a <= b : a는 b보다 작거나 같다
> a > b : a는 b보다 크다
> a >= b : a는 b보다 크거나 같다
> ```
---
# 3 JAVASCRIPT ON THE BROWSER
### JavaScript
> HTML과 연결되어있음<br>
> HTML element를 가지고 오지만, HTML 자체를 보여주지는 않음(object를 보여줌)<br>
> JavaScript에서 HTML을 읽어올 뿐만 아니라, HTML을 변경 및 추가할 수 있음

### Document
> 브라우저에 존재하는 object<br>
> 접근할 수 있는 HTML을 가리키는 객체<br>
> JavaScript의 관점으로 HTML을 보여줌
> ```js
> 입력 : document.title;
> 출력 : <title>제목</title>에 입력한 내용
> ```
> getElementById : id로 element를 찾음(잘 사용하지않음)
> ```js
> 입력 : document.getElementById("아이디");
> 출력 : <h1 id="아이디">내용</h1>
> ```
> getElementsByClassName : class로 element를 찾음(array)
> ```js
> 입력 : document.getElementsByClassName("클래스");
> 출력 : HTMLCollection('클래스'를 가진 element 개수) [종류.클래스, 종류.클래스]
>        0: 종류.클래스
>        1: 종류.클래스
>        
> ex. HTMLCollection(3) [h1.title, h1.title, h1.title]
>     ▶ 0: h1.title
>     ▶ 1: h1.title
>     ▶ 2: h1.title
>      length: 3
>     ▶ [[Prototype]]: HTMLCollection
> ```
> getElementsByTagName : tag로 element를 찾음(array)
> ```js
> document.getElementsByTagName("태그");
> ```
> **querySelector** : element를 CSS 방식으로 검색<br>
> 　　　　　　  단 하나의 element를 return(여러개가 있을 경우 첫 번째 element만 가져옴)<br>
> 　　　　　　  querySelector == getElementById
> ```js
> document.querySelector("");
> 
> ex.html
>    <div class="디브">
>       <h1>내용</h1>
>    </div>
> ex.js
>    입력 : document.querySelector(".디브 h1");
>    출력 : <h1>내용</h1>
> ```
> querySelectorAll : elemet를 CSS 방식으로 검색<br>
> 　　　　　　　　 querySelector과 다르게 selector 안의 조건에 부합하는 모든 element를 가져옴

### Event
> 어떤 행위를 하는 것을 뜻함(모든 event는 js가 listen할 수 있음)<br>
> eventListener : event를 listen(js에게 무슨event를 listen하고싶은지 알려줘야함)<br>
> addEventListener() : event들을 listen할 수 있음
> ```js
> ex.
> const title = document.querySelector("div.hello:first-child h1");
> function handleTitleClick() {
>   title.style.color = "blue";
> }
> title.addEventListener("click", handleTitleClick);
> //여기에서 handleTitleClick()을 사용하면 클릭을 하지 않아도 파란색으로 변함
> 
> // click하면 handleTitleClick이라는 function이 동작하길 원함
> // 그래서 handleTitleClick 함수에 ()를 넣지 않은것
> // 즉, js가 대신 실행시켜주길 바라는것!
> 
> function이 js에게 넘겨주고 유저가 title을 click할 경우 js가 실행버튼을 대신 눌러주길 바라는것<br>
> (직접 handleTitleClick(); 하는 것이 아님)<br>
> 함수에서 ()이 두 괄호를 추가함으로써 실행버튼을 누를 수 있는것
> ```
> 사용 가능한 element : console.dir을 통해 element출력 → property 이름 앞에 on이 붙어있다면 event listener<br>
> 　　　　 　　　　　  사용할 땐 on을 제외한 이름 사용(onabort대신 abort사용)<br>
> 찾고싶은 element이름 + mdn 구글 검색 : listen하고싶은 event를 찾는 방법(ex. h1 html element mdn)<br>
> 　　　　　　　　　　　　　　 　　　　JavaScript의 element를 원하기 때문에 링크에 'Web APIs' 문장이<br>
> 　　　　　　　　　　　　　　 　　　　포함된 페이지를 찾음(js관점의 HTML Heading Element란 의미)
> ```js
> title.onclick = handleMouseEnter;
> title.addEventListener("mouseenter", handleMouseEnter);
> 위 두 코드는 동일하나 addEventListener을 선호하는 이유는
> removeEventListener을 통해 event listener을 제거할 수 있기 때문
> ```
> document가 JavaScript에서 기본적으로 제공되듯이 window도 기본적으로 제공<br>
> document의 head, title, body는 중요하기때문에 document.body.style~은 허용이 되지만<br>
> h1, div 등은 호출이 안돼 querySelector이나 getElementByID로 호출해야함

### CSS in JavaScript
> style에 적합한 도구는 CSS, animation에 적합한 도구는 JavaScript
> currentColor : getter로써, 최근 color값을 복사하는 역할(const로 선언하는 것이 적절)<br>
> newColor : setter로써, 변수에 대입된 색상값을 h1.style.color에 최종적응로 할당하는 역할<br>
> 　　　　　(값이 변경될 수 있다는 것을 염두해두기 위해 let으로 선언하는 것이 적절)<br>
> ```js
> const h1 = document.querySelector("div.hello:first-child h1");
> 
> function handleTitleClick() {
>   const currentColor = h1.style.color;  // currentColor : 현재 h1의 color값
>   let newColor;                         // 값이 변경될 수 있는 newColor는 let으로 선언
>   if ( currentColor === "blue") {       // 만약 h1이 파란색이라면
>     newColor = "tomato";
>   } else {                              // 그렇지 않다면(파란색이 아니라면)
>     newColor = "blue";
>   }
>   h1.style.color = newColor;            // h1에 newColor 대입
> }
> 
> h1.addEventListener("click", handleTitleClick);
> ```
> (참고) 함수 내에서 선언된 변수는 함수 밖에서 존재하지않음, 그렇기 때문에 const CurrentColor로<br>
> 　　　변수 선언을 하더라도, 함수가 호출될 때 마다 새로운 값을 받을 수 있음<br>
> classList : class를 목록으로 작업할 수 있게끔 허용해줌<br>
> 　 　　　js에서 건드리는건 HTML element가 가지고있는 또하나의 요소 사용하는 것<br>
> 　　 　　= element의 class내용물을 조작하는 것을 허용한다는 뜻<br>
> className : 이전 class를 상관하지않고 모든걸 교체함<br>
> contains : 우리가 명시한 class가 HTML element의 class에 포함되어 있는지 말해줌<br>
> remove : 명시한 class name 제거<br>
> add : 명시한 class name 추가<br>
> **toggle** : 토큰이 존재하면 토큰 제거, 존재하지 않으면 토큰 추가(class name 존재유무 확인)
---
# 4 LOGIN
### length
> string의 길이를 구함
> ```js
> string.length
> ```

### maxlength
> 최대 n글자까지 입력할 수 있음
> ```js
> <input type="text" id="userId" maxlength="n"/>
> ```

### required
> form data가 서버로 제출되기 전 반드시 채워져 있어야 하는 입력 필드 명시<br>
> boolean 속성으로 명시하지 않으면 속성값이 자동으로 false값을 가지게 되며, 명시하면 자동으로 true값을 가짐<br>
> required속성이 동작하는 요소의 type 속성값 : checkbox, date, emamil, file, number, password,<br>
> 　　　　　　　　　　　　　　　　　　　　 pickers, radio, search, tel, text, url

### form
> 입력 후 클릭이 아닌 enter를 눌러도 form은 submit되기때문에 반드시 form안에 input을 넣어야 함<br>
> ~~form안에 input을 쓰고 enter나 submit을 누르면 자동으로 제출됨(click이 필요없고 form을 submit하는것이 중요)
> -> 브라우저가 새로고침하지않고 user정보를 저장~~

### preventDefault
> from을 submit했을 때 브라우저가 기본적으로 새로고침을 하는것을 막아줌<br>
> 브라우저의 기본 동작을 막아줌(어떤 event의 기본행동이든지 발생되지 않도록 막음)<br>
> EventListener함수의 '첫번째 argument'안에 있는 함수로 첫 argument는 지금 막 실행된 event들에 대한 정보를 갖고있음<br>
> js는 기본적으로 argument를 담아서 함수를 호출하는데, 이 argument가 기본정보들을 제공하고있음
> ```js
> function onLoginSubmit(event) {
>   event.preventDefault(); // event object는 기본적으로 preventDefault함수를 갖고있음
>   console.log(event);
> }
> ```

### 변수 + string
> "string" + 변수
> ```js
> "Hello" + username;
> ```
> 'string ${변수}`
> ```js
> `Hello ${username}`;
> ```

### add & remove
> 추가 : classList.add.('classname');<br>
> 삭제 : classList.remove.('classname');

### local storage
> 브라우저에 뭔가를 저장한 후 나중에 가져올 수 있음<br>
> setItem : local storage에 정보 저장<br>
> getItem : local storage에 저장된 정보를 불러옴<br>
> removeItem : local storage에 저장된 정보를 불러옴
> ```js
> ex. localStorage.setItem("key", value);
>     localStorage.getItem("key");
>     localStorage.removeItem("key");
> ```

### 반복되는 string
> 반복되는 string들은 대문자 변수로 저장<br>
> -> 실수를 만들고싶지 않은 string이라는 사실을 기억하고 상기시키기 좋음
---
# 5 CLOCK
###
