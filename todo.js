// Create a "close" button and append it to each list item
const myNodelist = document.getElementsByTagName("LI");
let i;
for(let i = 0; i < myNodelist.length ; i++){
     const span = document.createElement('SPAN');
     const txt = document.createTextNode('\u00D7');
     span.className = 'close';
     span.appendChild(txt);
     myNodelist[i].appendChild(span);
}
// Create a new list item when clicking on the "Add" button
     document.getElementById('add').addEventListener('click', function() {
     const inputValue = document.getElementById('input-box').value;
     const li = document.createElement('li');
     const text = document.createTextNode(inputValue);
     li.appendChild(text);
     if(inputValue === ''){
          alert('You must write something!');
     } else {
          document.getElementById('list').appendChild(li);
     }
     document.getElementById('input-box').value = '';

     var span = document.createElement("SPAN");
     var txt = document.createTextNode("\u00D7");
     span.className = "close";
     span.appendChild(txt);
     li.appendChild(span);

     for (i = 0; i < close.length; i++) {
     close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
     }
     }
     });

// Click on a close button to hide the current list item
     var close = document.getElementsByClassName("close");
     for (let i = 0; i < close.length; i++) {
     close[i].onclick = function() {
     var div = this.parentElement;
     div.style.display = "none";
     }
     }