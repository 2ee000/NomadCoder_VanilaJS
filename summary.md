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
> eventListener : event를 listen(js에게 무슨event를 listen하고싶은지 알려줘야함)
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
