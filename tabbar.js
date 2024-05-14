// // tab-button 클래스의 0번째 버튼을 클릭하면, 모든 요소에서 orange 클래스를 제거한다.
// $('.tab-button').eq(0).on('click', function() {
//     document.getElementsByClassName('tab-button')[0].classList.remove('orange');
//     document.getElementsByClassName('tab-button')[1].classList.remove('orange');
//     document.getElementsByClassName('tab-button')[2].classList.remove('orange');

//     document.getElementsByClassName('tab-content')[0].classList.remove('show');
//     document.getElementsByClassName('tab-content')[1].classList.remove('show');
//     document.getElementsByClassName('tab-content')[2].classList.remove('show');

//     // ornage 클래스를 부착한다. 
//     document.getElementsByClassName('tab-button')[0].classList.add('orange');
//     document.getElementsByClassName('tab-content')[0].classList.add('show');
// })

// // tab-button 클래스의 1번째 버튼을 클릭하면, 모든 요소에서 orange 클래스를 제거한다.
// $('.tab-button').eq(1).on('click', function() {
//     document.getElementsByClassName('tab-button')[0].classList.remove('orange');
//     document.getElementsByClassName('tab-button')[1].classList.remove('orange');
//     document.getElementsByClassName('tab-button')[2].classList.remove('orange');

//     document.getElementsByClassName('tab-content')[0].classList.remove('show');
//     document.getElementsByClassName('tab-content')[1].classList.remove('show');
//     document.getElementsByClassName('tab-content')[2].classList.remove('show');

//     // ornage 클래스를 부착한다. 
//     document.getElementsByClassName('tab-button')[1].classList.add('orange');
//     document.getElementsByClassName('tab-content')[1].classList.add('show');
// })

// // tab-button 클래스의 1번째 버튼을 클릭하면, 모든 요소에서 orange 클래스를 제거한다.
// $('.tab-button').eq(2).on('click', function() {
//     document.getElementsByClassName('tab-button')[0].classList.remove('orange');
//     document.getElementsByClassName('tab-button')[1].classList.remove('orange');
//     document.getElementsByClassName('tab-button')[2].classList.remove('orange');

//     document.getElementsByClassName('tab-content')[0].classList.remove('show');
//     document.getElementsByClassName('tab-content')[1].classList.remove('show');
//     document.getElementsByClassName('tab-content')[2].classList.remove('show');

//     // ornage 클래스를 부착한다. 
//     document.getElementsByClassName('tab-button')[2].classList.add('orange');
//     document.getElementsByClassName('tab-content')[2].classList.add('show');
// })

for (let i=0; i< $('.tab-button').length; i++) {
    $('.tab-button').eq(i).on('click', function() {
        $('.tab-button').removeClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-button').eq(i).addClass('orange');
        $('.tab-content').eq(i).addClass('show');
    })
}