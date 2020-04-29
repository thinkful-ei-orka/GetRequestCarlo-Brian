'use strict';

function makeImageString(str) {
  
}

function getDogImage(num) {
    console.log(num);
    console.log(typeof num);

  for(let i = 0; i < num; i++) {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson.message);
      });
  }
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let value = Number($('.js-text-input').val());
    console.log(value);
    console.log(typeof value);

    if(isValidNumber(value)) {
      console.log('Entered valid number');
      getDogImage(value);
    } else {
      console.log('Please enter a valid number');
    }
    
  });
}

function isValidNumber(num) {
  console.log('Ran isValidNumber');
  return (Number(num) <= 50 && Number(num) >= 0 && /^\d+$/.test(Number(num)));
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});