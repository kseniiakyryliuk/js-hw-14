//Завдання 1. функцій вищого порядку filter, reduce, map
//Завдання 2
//Функції колбеки
let array=[6,1,2,3,4,5,6,7,7,5,2,1,4,5,8,9,10];
console.log(array);
let secondArray=[];
secondArray=array.filter(p=>p>5);
console.log(secondArray);

let text='HTML, CSS, JS,TS, VUE, ANGULAR, REACT';
if(text.includes('JS')) console.log('This string include "JS" ');
else console.log('This string doesn`t include "JS" ');


//Завдання 3
/* event loop - життєвий цикл
Event Loop - это специальный механизм на уровне движка js, 
который координирует работу трёх сущностей: 
Call Stack (стэк вызовов), 
Web API (API, предоставляемый браузером), 
Callback Queue (очередь колбэков).
*/

/* таски
Макро: setTimeout, setImmediate, setInterval, I/O, UI rendering.
Микро: Promise, process.nextTick, queueMicrotask, и на фронте у нас есть наблюдатель за DOM-элементами — MutationObserver.
*/
       setInterval(time, 3000);
       setTimeout(()=>
       {
        console.log('hello');
       }, 500);       

function time(){
    const today = new Date(); 
  let hours=today.getHours();
  let minutes=today.getMinutes();
  let seconds=today.getSeconds();
  console.log(hours+":"+minutes+":"+seconds);
}

function sun(){
   
}




