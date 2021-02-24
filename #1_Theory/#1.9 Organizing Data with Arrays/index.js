const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", true];

console.log(daysOfWeek[2]);

/*
camel case
기본 문법 : 변수명의 처음 시작은 무조건 소문자로 쓴다.
변수명 중간에 스페이스가 필요하면 스페이스 대신 단어 첫글자를 대문자로 쓴다.
스페이스가 없더라도 이상한 문자 넣으면 안됨 . 이라던가, / 같은 것들

const daysOfWeek = "a" (o)
const treakOrTreat = "b" (o)
const days.of.week = "a" (x)
const treak/or/treat = "b" (x)

데이터를 정렬하려면 어떻게 하면 좋을까?
1.Array
리스트같이 데이터를 저장하는 곳. Array는 여러 데이터들을 하나로 묶는 역할을 한다.
실행하는 방법은 간단한데, 데이터를 [] 부호로 감싸면 된다.
데이터( = String,True or False, Number, Float...)

const daysOfWeek = ["mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const wat = [true, false, 20000, 2.4];

변수 안에 변수를 넣어도 문제되지 않는다.

const something = "something"
const daysOfWeek = ["mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const wat = [true, false, 20000, 2.4, something];

Array는 자기만의 규칙을 가지고 있는데 0부터 숫자를 세기 때문에 원하는 결과값에 -1을 한
숫자로 찾아야 원하는 값을 찾을 수 있다.

월요일 console.log(daysOfWeek[0]);
금요일 console.log(daysOfWeek[4]);
*/