const title = document.querySelector("#title");

title.innerHTML = "Hi! From JS";
title.style.color = 'red'

document.title = 'I own you now';

/*
1. id 속성을 가진 요소를 찾아 객체 반환하기
const title = document.getElementById("title");
2. 내용수정
title.innerHTML = "Hi! From JS"
3.색상변경
title.style.color = "red"
4. 타이틀 변경
document.title = 'I own you now'

이처럼 각종 html 문서를 감지하고 추가하고 변경하는 등의 것들을 js로 객체화 하는 것을 통해 바꿀 수 있다.

document.queryselector()
정의 : queryselector는 특정 name이나 id를 제한하지 않고 css선택자를 사용하여 요소를 찾을 수 있다.

객체를
id로 찾고싶다면 "#title"
class로 찾고 싶다면 ".title"
*/