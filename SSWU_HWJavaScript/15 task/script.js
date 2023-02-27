const time = 5000; 
let timer;

const resetTimer = e => {
  console.log(e);
  clearTimeout(timer);
  timer = setTimeout(showAlert, time);
};

const showAlert = () => {
  confirm('Ви ще тут?') ? resetTimer() : window.close();
};

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();

  const list = document.querySelector(".list");

  const userInput = document.querySelector('.input').value;
  const aCounter = userInput.match(/[a]/gi).length;

  userInput.split(' ').forEach((word, i, arr) => {
    if (i === 0) word = word.toUpperCase();
    if (i >= arr.length - 2) word = word[0].toLowerCase() + word.slice(1);
    
    const li = document.createElement("li");
    li.textContent = word;
    list.appendChild(li);
  });

  alert(`Загальна кілкість літер а: ${aCounter}`);

  console.log(aCounter);

  console.log(userInput);

  timer = setTimeout(showAlert, time);

  
  document.addEventListener('click', resetTimer);
  document.addEventListener('scroll', resetTimer);
  document.addEventListener('mousemove', resetTimer);
  document.addEventListener('keydown', resetTimer);
  
});
