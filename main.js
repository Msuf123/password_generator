function genreate(){
let letters='a s d f g h j k l m n b v c x z q w e r t y u i o p'
new_letters=letters.split(" ")
let cap_letters=[]
for(i=0;i<new_letters.length;i++){
    cap_letters.push(new_letters[i].toUpperCase())
}

let numbers=[0,1,2,3,4,5,6,7,8,9]
let special_char=['!','#','$']
let password=[]
let possible_combination=[new_letters,cap_letters,numbers,special_char]
for(i=0;i<10;i++){
    let n=Math.round(Math.random()*3)
    if(n===0){
        password.push(new_letters[Math.round(Math.random()*25)])
        
    }
    else if(n===1){
        password.push(cap_letters[Math.round(Math.random()*25)])
        
    }
    else if(n===2){
        password.push(numbers[Math.round(Math.random()*9)])
        
    }
    else if(n===3){
        password.push(special_char[Math.round(Math.random()*2)])
        
    }
    else{
        password.push(cap_letters[Math.round(Math.random()*25)])
        
    }
}
console.log(password.join(''))
let a=password.join('')
span.innerHTML=a;
}
let span=document.getElementById('ans');
let button=document.getElementById('button');
button.addEventListener("click",genreate)
