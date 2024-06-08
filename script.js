const userInput = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");



const convertToRoman = (num) =>{
    const a = [
      ['M',1000],
      ['CM',900],
      ['D',500],
      ['CD',400],
      ['C',100],
      ['XC',90],
      ['L',50],
      ['XL',40],
      ['X',10],
      ['IX',9],
      ['V',5],
      ['IV',4],
      ['I',1]
    ];
    const res = [];
    a.forEach(function(arr) {
      while(num >= arr[1]){
        res.push(arr[0]);
        num -= arr[1];
      }
    }
    )
    return res.join('');
};

const isValid = (str, num) =>{
  let errText = '';
  if(!str || str.match(/[e.]/g)){
    errText = "Please enter a valid number";
  }
  else if(num < 1){
    errText = "Please enter a number greater than or equal to 1";
  }
  else if(num > 3999){
    errText = "Please enter a number less than or equal to 3999";
  }
  else return true;

  // Handle error text and output styling
  output.innerText = errText;
  output.classList.add('alert');

  return false;
}


userInput.addEventListener("keydown",(e) =>{
  if(e.key == 'Enter'){
    updateUI();
    userInput.value = "";
  }
});

btn.addEventListener("click", ()=>{
  updateUI();
  userInput.value = "";
})

const updateUI = () => {
  const str = userInput.value;
  const num = parseInt(str,10);

  output.classList.remove('hidden');
  output.innerText = '';
  output.classList.remove('alert');

  if(isValid(str, num)){
    output.innerText = convertToRoman(num);
  }
};
