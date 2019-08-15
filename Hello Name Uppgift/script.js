let input = document.getElementById('name');
let button = document.getElementById('button');

button.addEventListener('click', onButtonClick);

function onButtonClick() {
   if (value.length <= 0) {
      alert('eyy')
   } else {
      alert('Hello ' + input.value)
   }










   /*

   function onButtonClick() {
      let hour = new Date().getHours();
      if (hour < 18) {
         alert('Good day ' + input.value);
      } else {
         alert('Good evening ' + input.value);
      }
   }

   */