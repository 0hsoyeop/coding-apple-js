// 3개의 상품 제목, 가격을 html에 전부 꽂아넣어
var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];

// 상품 제목은 card-body 안에 있는 h5 태그에 넣기
// 상품 가격은 card-body 안에 있는 p 태그에 넣기

// 상품 제목은 product[0].title
// 상품 가격은 product[0].price

// card-body 안에 있는 h5 태그 찾기
// document.querySelectorAll('.card-body')[0].children[0].innerHTML = products[0].title;
// document.querySelectorAll('.card-body')[1].children[0].innerHTML = products[1].title;
// document.querySelectorAll('.card-body')[2].children[0].innerHTML = products[2].title;

// document.querySelectorAll('.card-body')[0].children[1].innerHTML = `가격: ${products[0].price}`;
// document.querySelectorAll('.card-body')[1].children[1].innerHTML = `가격: ${products[1].price}`;
// document.querySelectorAll('.card-body')[2].children[1].innerHTML = `가격: ${products[2].price}`;

document.querySelectorAll('.card-body h5')[0].innerHTML = products[0].title;
document.querySelectorAll('.card-body h5')[1].innerHTML = products[1].title;
document.querySelectorAll('.card-body h5')[2].innerHTML = products[2].title;

document.querySelectorAll('.card-body p')[0].innerHTML = `가격: ${products[0].price}`;
document.querySelectorAll('.card-body p')[1].innerHTML = `가격: ${products[1].price}`;
document.querySelectorAll('.card-body p')[2].innerHTML = `가격: ${products[2].price}`;

// select에서 change 했을 때 value가 셔츠이면, shirt 클래스를 보여준다. 
$('.form-select').on('input', function() {
    document.querySelectorAll('.form-select')[0].addEventListener('change', function() {
        if (document.querySelectorAll('.form-select')[0].value == '셔츠') {
            document.querySelectorAll('.form-group')[1].classList.remove('shirt');
        } else if (document.querySelectorAll('.form-select')[0].value == '모자') {
            document.querySelectorAll('.form-group')[1].classList.add('shirt');
        }
        
    })
})