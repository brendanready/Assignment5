/*
        Brendan Ready
        Assignment 5
        FEWD 2
*/


// Practice with Forms and the DOM Event Model

// STEP 1
/*
function writeMessage() {
    alert("I have been clicked");
}
*/

// STEP 2
/*
step2_Btn.onclick = function() {
    alert("I have been clicked");
};
*/

// STEP 3
/*
step3_Btn.addEventListener('click', writeMessage, false);

function writeMessage() {
    alert('I have been clicked');
}
*/

// STEP 4
/*
step4_Btn.addEventListener('click', function() {alert('I have been clicked')}, false)
*/

// STEP 5
/*
See <head> section of index.html
*/

// STEP 6
/*
step6_Link.addEventListener('click', function(event) {
    event.preventDefault();
    alert('You clicked on a link for Google');
});
*/

// STEP 7
/*
step7_Btn.addEventListener('click', function() {
    step7_Btn.disabled = true;
    alert(step7_TextBox.value);
}, false);
*/

// STEP 8
/*
step8_Btn.addEventListener('click', newpage, false);

function newpage() {
    window.open('newpage.html', 'gg', 'width=300, height=300, resizeable=yes');
}
*/


// STEP 9
/*
var timer;

Start_Btn.addEventListener('click', function() {
    timer = setInterval(showText, 2000);
}, false);

Stop_Btn.addEventListener('click', function() {
    clearInterval(timer);
}, false);

function showText() {
    console.log('Learning JavaScript is fun!');
}
*/

// STEP 10
/*
select_Btn.addEventListener('click', function() {
    alert(dropDownList.value);
}, false);
*/