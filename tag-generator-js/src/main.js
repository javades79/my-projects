'use strict';


function applyContent() {
  const selectedTag = document.getElementById("tagInput").value;
  const content = document.getElementById("contentInput").value;
  const outputElement = document.getElementById("output");

  function generator() {
    outputElement.innerHTML = "<" + selectedTag + ">" + content + "</" + selectedTag + ">";
  };

  if (selectedTag){
    generator();

  } else { 
      alert('Empty value, pls fill input :');
  }
  
};

///////////////////////////////////////////////////////////////////////////////
// const div = document.createElement("div");
// let divEl = document.querySelector('.div');
// let tagNames = '';
// tagNames += prompt('please choose tag name : ');

// const p = document.createElement("p");

// let paragraph = document.querySelector('.p');
// let parag = '';

// if (tagNames === 'div'){
//     div.textContent = prompt('choose value div : ');
//     tagNames = divEl.append(div);
    
// } else if (tagNames === 'p') {
//     p.textContent = prompt('choose value p : ');
//     parag = paragraph.append(p);
// } else {
//     alert('wrong value');
// }
