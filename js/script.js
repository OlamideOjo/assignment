document.getElementById('demo1').innerHTML = 'Welcome to my class';
document.getElementById('demo1').style.fontSize = '50px'; 
document.getElementById('demo1').style.color = 'brown'; 


document.getElementById('demo2').innerHTML = 'See you tommorrow';
document.getElementById('demo2').style.fontSize = '50px'; 
document.getElementById('demo2').style.color = 'brown'; 


function myFunction(){
    document.getElementById('increase').style.fontSize= '55px';
}

document.getElementById('S/N').innerHTML = 'SN';
document.getElementById('Name').innerHTML = 'Name';
document.getElementById('Email').innerHTML = 'Email';

document.getElementById('1').innerHTML = '1';
document.getElementById('first').innerHTML = 'Tomilola';
document.getElementById('mail1').innerHTML = 'tomilolaojo45@gmail.com';

document.getElementById('2').innerHTML = '2';
document.getElementById('second').innerHTML = 'Olamide';
document.getElementById('mail2').innerHTML = 'tomilolaojo45@gmail.com';

document.getElementById('3').innerHTML = '3';
document.getElementById('third').innerHTML = 'Audrey';
document.getElementById('mail3').innerHTML = 'tomilolaojo45@gmail.com';



document.getElementById('demo').style.display = 'none';

document.getElementById('change').innerHTML = 'Come back soon';

document.getElementById('bgcolour').style.color = 'brown'; 



// var email = document.getElementById('email')


function submit(){
    var fname = document.getElementById('fname');
    var email = document.getElementById('email');
    if (fname.value==""){
        document.getElementById('fnameerror').innerHTML = 'Fullname field cannot be empty';
    }
     else if(email.value==""){
        document.getElementById('emailerror').innerHTML = 'Email field cannot be empty';
    }
    else{
        document.getElementById('success').innerHTML = 'Your form has been submitted successfully';
    }


}

// assignment 1
function changeText() {
    document.getElementById('demoo').innerHTML = 'Hello, Word!';
}


// assignment 2
function changeBgColor() {
    document.getElementById('colorDiv').style.backgroundColor = 'brown';
}


// assignment 3
function submitForm(){
    var phone = document.getElementById('phone');
    if (phone.value.length<11){
        document.getElementById('errorSpan').innerHTML = 'Please enter up to 11 digits.'
    }
    else{
        document.getElementById('formSuccess').innerHTML = 'Your phone number has been submitted successfully';
    }
}

function displayImage(imageSrc){
    document.getElementById('mainImage').src =imageSrc
}

function toggleDiv(){
    if (document.getElementById('toggleDiv').style.display='block'){
        document.getElementById('toggleDiv').style.display='none';
    }
    else{
        document.getElementById('toggleDiv').style.display='block';
    }
}

// function showDiv(){
//     document.getElementById('toggleDiv').style.display='block';
// }

// document.getElementById('less').style.display='none';

// function show(){
//     document.getElementById('less').style.display='block';
// }
// function showLess(){
//     document.getElementById('less').style.display='none';
// }

document.getElementById('less').style.display='none';

function show(){
    var lessElement = document.getElementById('less');
    var showMoreLink = document.getElementById('showMore');

    lessElement.style.display = 'block'
    showMoreLink.style.display = 'none'

    lessElement.addEventListener('click', function(){
        lessElement.style.display = 'none'
        showMoreLink.style.display = 'inline';  // Make sure it's inline to maintain layout
    })
}