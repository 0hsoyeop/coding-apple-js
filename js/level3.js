// car2에 저장된 상품명, 가격을 찾아서 변수에 넣고, 변수를 화면에 출력하자.
// - 1. 상품명 찾아서 변수 name에 저장하기 
// - 2. 가격 찾아서 변수 price에 저장하기

// var car2 = { name : '소나타', price : 50000 };

// document.querySelector('.product').innerHTML = car2.name;
// document.querySelector('.price').innerHTML = car2.price;

//car2 에 있는 50000 이라는 데이터를 뽑아서 html의 가격표시부분에 꽂아넣고 싶으면 코드를 어떻게 짜야할까요?
var car2 = { name : '소나타', price : [50000, 3000, 4000] };

document.querySelector('.product').innerHTML = car2.name;
document.querySelector('.price').innerHTML = car2.price[0];
