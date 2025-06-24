const countersContainer = document.getElementById('countersContainer');

let manaArray = ["Lands", "Plains", "Islands", "Swamp", "Mountain", "Forest"];
let buttonSubmit = document.getElementById('submit');


// Create 5 counters
for (let i = 0; i <= 5; i++) {
  const counterDiv = document.createElement('div');
  counterDiv.className = 'counter';

  const counterDivInside = document.createElement('div')

  const label = document.createElement('label');
  label.htmlFor = `numberInput${i}`;
  //label.textContent = `Number ${i}:`;
  label.textContent = `${manaArray[i]}:`;

  const input = document.createElement('input');
  //input.type = 'number';
  input.id = `numberInput${i}`;
  if(i==0){
    input.value = '17';
  }else{
    input.value = '0';
  }
  //input.readOnly = true;

  const decrementBtn = document.createElement('button');
  decrementBtn.className = 'btn';
  decrementBtn.textContent = '-';

  const incrementBtn = document.createElement('button');
  incrementBtn.className = 'btn';
  incrementBtn.textContent = '+';

  // Event listeners for increment and decrement
  incrementBtn.addEventListener('click', () => {
    input.value = parseInt(input.value, 10) + 1;
  });

  decrementBtn.addEventListener('click', () => {
    input.value = input.value > 0 ? parseInt(input.value, 10) - 1 : 0;
  });

  // Append elements to counterDiv
  counterDiv.appendChild(label);
  counterDiv.appendChild(input);
  counterDiv.appendChild(decrementBtn);
  counterDiv.appendChild(incrementBtn);

  // Append counterDiv to container
  countersContainer.appendChild(counterDiv);
}



buttonSubmit.addEventListener('click', ()=>{
  let sum = 0
  //let mana = (colors * lands) / manaTotal;  
  //return mana.toFixed(2);
  //return Math.round(mana);

  for(let i = 1; i<= 5; i++){
    //sum = sum + parseInt(document.getElementById(`numberInput${i}`).value);
    sum = sum + parseInt(document.getElementById(`numberInput${i}`).value);
  }
  console.log(sum)
  let lands = document.getElementById(`numberInput${0}`).value;
  let mana = []; 
  let y = 0; 
  for(let i = 1; i <= 5; i++){
    let x = document.getElementById(`numberInput${i}`).value; 
    let x2 = document.getElementById(`numberInput${i}`).value; 
    
    x = Math.round((x * lands)/sum); 
    x2 = ((x2 * lands)/sum).toFixed(2); 
    document.getElementById(`mana${i}`).innerText = `${x} || ${x2}`;
    //mana.push(x); 
    //y=y+x; 
  }
  console.log(mana, y)
});

