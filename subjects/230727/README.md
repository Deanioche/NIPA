### 7월 27일 과제

### 1. html 문서 앞에 `<script>` 태그 내에 js코드를 작성했고, 문서가 로드 되기 전에 script의 element를 가져오지 못한 상태에서 console.log로 디버그하여 개발자도구에 확인해보았을때는 왜 element를 가져와졌는지 이유에 대해서 알아보기. 

> [**문제의 html 코드**](./subject.html)

- html은 코드를 순차적으로 해석하고 실행한다.
- 첫번째 `<script>`의 코드는 `<body>` 태그의 내용이 읽히기 전에 실행된다.
- 여기서 `document.getElementsByTagName("li")`의 반환 데이터이 담기는 `selectedItem`에는 HTMLCollection 객체가 할당되는데, 이 객체는 실시간으로 업데이트되는 노드 리스트를 제공한다.
- `<body>`의 내용이 읽히기 전에는 `<li>` 태그가 없기 때문에 `selectedItem`은 빈 HTMLCollection을 가지고 `length`도 0이 출력된다. 
  - 하지만 이후에 페이지가 완전히 로드되고 `<li>` 태그들이 읽히면 객체가 자동으로 업데이트되므로, 객체를 열어보면 `<li>` 태그가 들어있는 것을 확인할 수 있다.
  
    https://github.com/Deanioche/NIPA/assets/66513003/828ba099-01c6-408a-ba1b-348054e30642
    
- 보통 이런 코드는 `<body>` 태그의 마지막 부분에 위치 해야한다.
- 아니면 `window.onload` 이벤트 핸들러 안에 포함시킨다.
  - `window.onload` 이벤트는 웹 페이지의 모든 리소스(이미지, 스크립트, CSS 등)의 로드가 완료되면 실행된다.

### 2. Web-API를 이용하여 본인의 웹사이트의 기능을 구현한 후 코드와 작동되는 화면을 영상 또는 스크린샷을 찍어서 첨부하기

> [**웹사이트 코드**](/web_basic/)
