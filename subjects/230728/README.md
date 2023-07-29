## 230728 과제 

### webAPI의 dialog box인 alert(), confirm() 메소드는 window나 document 없이 바로 사용할 수 있는 이유 

- JS에서 alert(), confirm() 등의 함수는 브라우저의 window 객체의 메서드이다. 
- 웹 브라우저 환경에서 JS 코드를 실행하면, window 객체는 전역 객체 (global object)가 된다. 
- 따라서 window 객체의 메서드와 프로퍼티는 자동적으로 전역 범위에 있게 되므로, window 키워드 없이 직접 호출할 수 있다.
- 즉, window.alert('Hello, World!');는 alert('Hello, World!');와 동일한 결과를 출력한다
- Node.js와 같은 브라우저가 아닌 환경에서는 window 객체가 존재하지 않아서, alert()나 confirm() 메서드를 사용할 수 없다.