//select the element containing the name
const text = document.querySelector('.name');
//get  text  content
const content = text.textContent;

//Split text into an array
const splitText = content.split("");
text.textContent="";

//  console.log(splitText)


// text.addEventListener('click', function (){

//added a span elememt to each latter in the word
  for(let i = 0;  i < splitText.length; i++)  {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
   
   }

   let character = 0;
   
   let timer = setInterval(onTick, 50);
   
   function onTick(){
     const span = text.querySelectorAll('span')[character];
     span.classList.add('fade');
     
     character++
     if(character === splitText.length){
       complete();
       return;
     }
   }
    function complete(){
     clearInterval(timer);
     timer = null;
    }
    
// } )


