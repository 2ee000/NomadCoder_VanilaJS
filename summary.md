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
> 실시간, 3D, 머신러닝 등 여러 분야에서 사용 가능<br>
> 기술을 좀 더 가다듬어 깊게 배우고 싶다면 FrameWork<br>
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
> **var** : (재선언 가능, 재할당 가능)
> ```js
> var a = b;
> var a = c;            재선언 o
> 
> a = d;                재할당 o
> ```
