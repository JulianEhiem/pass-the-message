//(function() {
////Select the input element
//const form = document.querySelector('#message-form')
////Set up Submit Button
//form.addEventListener('submit', function(e){
//    // prevent the form's default submission action
//    e.preventDefault()
//    //Get user's input from from
//    const message = document.querySelector('#message')
//    const feedback = document.querySelector('.feedback')
//    const messageContent = document.querySelector('.message-content')
//
//    if (message.value === ''){
//        feedback.classList.add('show')
//        setTimeout(function(){
//        feedback.classList.remove('show')
//        }, 2000)
//    } else {
//        //Change message content and clear the message input
//        messageContent.textContent = message.value
//        message.value = ''
//    }
//})
//})()

const input = document.querySelector("#message");
const submit = document.querySelector("#messageSubmit");
const previousText = document.querySelector(".previousMessage");
const error = document.querySelector(".error-message");

submit.addEventListener("click", passMessage);

function passMessage(e) {
  e.preventDefault();
  if (input.value.length === 0) {
    error.innerHTML = "Please Enter a Value";
  } else {
    previousText.innerHTML = input.value;
    error.innerHTML = "";
  }

  resetCard();
}

function resetCard() {
  if (input.value.length !== 0) {
    input.value = "";
  }
}
