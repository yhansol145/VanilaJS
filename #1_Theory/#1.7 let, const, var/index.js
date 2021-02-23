var a = 221;
var b = a - 5;
a = 4;
console.log(b, a);

/*
var는 변수 선언 방식에 있어서 큰 단점을 가지고 있다.

var name = 'bathingape'
console.log(name) // bathingape

var name = 'javascript'
console.log(name) // javascript
변수를 한 번 더 선언했음에도 불구하고, 에러가 나오지 않고 각기 다른 값이 출력되는 것을 볼 수 있다.

이는 유연한 변수 선언으로 간단한 테스트에는 편리 할 수 있겠으나, 코드량이 많아 진다면 어디에서 어떻게 사용 될지도 파악하기 힘들뿐더러 값이 바뀔 우려가 있다.

그래서 ES6 이후, 이를 보완하기 위해 추가 된 변수 선언 방식이 let 과 const 이다.

위의 코드에서 변수 선언 방식만 바꿔보자.

let name = 'bathingape'
console.log(name) // bathingape

let name = 'javascript'
console.log(name)
// Uncaught SyntaxError: Identifier 'name' has already been declared
name이 이미 선언 되었다는 에러 메세지가 나온다. (const도 마찬가지)

변수 재선언이 되지 않는다.
*/