'use strict';
const htmlStr = {
  newStr: ''
};

// Check if responseJson.message.length === 0
// If it is, return message stating that breed is not found
// Else
// Iterate through every message and print all returned images.



function getDogImage(str) {
    
    fetch(`https://dog.ceo/api/breed/${str}/images`)
        .then(response => {
            if (response.ok) {
                return response.json();
              }
              throw new Error(response.statusText);
        })
        .then(responseJson => {

            console.log('Valid breed');

            let randomIndex = Math.floor(Math.random() * (responseJson.message.length-1));
            makeImageString(responseJson.message[randomIndex]);
            

            // console.log(htmlStr.newStr);
            // $('.images').html(htmlStr.newStr);

        });
  // console.log(htmlStr.newStr);
  // render(htmlStr.newStr);
}

function makeImageString(str) {
  
    htmlStr.newStr = `<br>
    <img src='${str}'>`;
    console.log(htmlStr.newStr);
    $('.images').html(htmlStr.newStr);
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let value = $('.js-text-input').val();
    
    console.log(value);
    getDogImage(value);

    
  });
}

// function isValidNumber(num) {
  
//   return (Number(num) <= 50 && Number(num) >= 0 && /^\d+$/.test(Number(num)));
// }

//  function render(str){
//    console.log(htmlStr.newStr);
//     $('.images').html(str);
//  }

$(function() {
  console.log('App loaded! Waiting for submit!');
  //render();
  watchForm();
});