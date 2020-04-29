'use strict';
const htmlStr = {
  newStr: ''
};





function getDogImage(num) {
    

  for(let i = 0; i < num; i++) {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(responseJson => {
        makeImageString(responseJson.message);
        console.log(htmlStr.newStr);
      });
  }
  // console.log(htmlStr.newStr);
  // render(htmlStr.newStr);
}

function makeImageString(str) {
  
  htmlStr.newStr = `${htmlStr.newStr}<br>
  <img src='${str}'>`;
  console.log(htmlStr.newStr);
  $('.images').html(htmlStr.newStr);
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let value = Number($('.js-text-input').val());
    
    if(isValidNumber(value)) {
      console.log('Entered valid number');
      getDogImage(value);
    } else {
      console.log('Please enter a valid number');
    }
    
  });
}

function isValidNumber(num) {
  
  return (Number(num) <= 50 && Number(num) >= 0 && /^\d+$/.test(Number(num)));
}

// function render(str){
//   console.log(htmlStr.newStr);
// //   $('.images').html(str);
// }

$(function() {
  console.log('App loaded! Waiting for submit!');
  //render();
  watchForm();
});