if (10 === 5) {
    console.log("Hi");
} else if ("10" === "10"){
    console.log("lalala");
} else {
    console.log("Ho");
}



if (20 > 5 || "Hansol" === "Hansol"){
    console.log("Yes");
} else {
    console.log("No");
}



const age = prompt("How old are you");

if(age >= 18 && age <= 21){
    console.log('you can drink but you should not');
} else if(age > 21){
    console.log('go ahead');
} else {
    console.log('too young');
}

/*
- if, else는 기본적으로 프로그래밍에서 어떻게 모든게 잘 동작하는지 보여주는 것이다.
- 조건이란 이게 뭐든 참을 의미 하면 뭐든 넣을 수 있다는 것을 의미.
- 피연산자란 다른 조건들을 합치게 하는 것이다.
- ===는 같음을 의미
- &&는 and를 의미. 조건을 모두 충족할 때
- ||는 or을 의미. 조건 중 하나를 충족할 때
*/