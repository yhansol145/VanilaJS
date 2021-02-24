function sayHello(name, age){
    console.log('Hello!', name, " you have ", age, " years of age.");
}


sayHello("Hansol", 29);

/*
- console은 object다.
- console.log, alert 등을 내장함수(built-in function)이라고 한다.
- 함수는 어떤 걸 수행하려는 한 부분으로, 원하는 만큼 쓸 수 있다.
- 함수를 쓸 땐, funcition 함수명() {}
- log도 함수인데, console object 안에 있는 함수라는 의미이다.
- 함수명() 괄호 안에 들어가는 단어를 인자(argument)라고 한다. 또는 parameter.
- argument는 변수와 비슷하다. 함수 안에서 사용하게 될 이름이다.
- argument를 사용하는 것이 외부에 있는 데이터를 읽는 함수를 만드는 방법이다.
*/