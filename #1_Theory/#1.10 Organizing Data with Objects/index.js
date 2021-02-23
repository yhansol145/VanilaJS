const HansolInfo = {
    name: "Hansol",
    age: 29,
    gender: "Male",
    insHandsome: true,
    favMovies: ["Along the gods", "LOTR", "Inception"],
    favFood: [
        {
            name: "Kimchi",
            fatty: false
        }, 
        {
            name: "Cheeseburger",
            fatty: true
        }
    ]
}

console.log(HansolInfo.gender); 

HansolInfo.gender = "Female";

console.log(HansolInfo.gender);

console.log(HansolInfo);

/*
실제 객체를 만들어 저장하는 방식. 쉽게말해 label을 저장하고 싶은 data에 준다고 보면 된다.
실행하기 위해서 데이터를 {} 부호로 감싼다.

const foodInfo = {
name:"Cheese",
shelfLife:"20231111"
newProduct:false
}

*"Cheese" 앞의 name은 텍스트가 아닌 변수를 의미한다. (텍스트는 ""안에 서술해야 됨.)

Object는 원하는 결과값을 찾으려면 내가 지정한 정보의 라벨을 입력하면 된다.

치즈 console.log(foodnfo.name)
유통기한 console.log(foodnfo.shelfLife)

원한다면 변수의 값을 변경할 수 있다.

const foodInfo = {
name:"Cheese",
shelfLife:"20231111"
newProduct:false
}

foodInfo.newProduct = true

*foodInfo 안의 값은 수정할 수 있지만, foodInfo 라는 큰 틀을 바꿀 수는 없다.

Array와 Object는 서로 포함시킬 수 있다.

const foodInfo = {
name:"Cheese",
shelfLife:"20231111"
newProduct:false
salesStore: ["GS market", "E mart", "CU"]
}

자바스크립트 기본 문법 :
정보를 정열할 때 데이터와 데이터 사이에 , 를 꼭 써준다.
String을 쓸 때 "를 앞 뒤에 꼭 넣어줘야 한다.
콘솔로그를 읽는 것 잊지 말기.
JS는 말썽이 나도 HTML/CSS는 타격을 받지 않으니 참고.
*/