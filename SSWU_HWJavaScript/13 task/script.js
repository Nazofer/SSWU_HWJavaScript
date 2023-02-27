const validateInput = () => {
  const textarea = document.querySelector('.text');
  const inputText = textarea.value;
  let outputText = '';
  const words = inputText.split(' ');

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    // Lowercase all letters except the first letter of the first word
    if (i === 0) {
      word = word.charAt(0) + word.substring(1).toLowerCase();
    } else {
      word = word.toLowerCase();
    }
    word = word.replace(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          '[contacts forbidden]'
        );
    word = word.replace(
      /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/gi,
      '[link forbidden]'
    ); //регулярку брав на https://regexr.com/

    

    if (/^\d{3,}$/.test(word)) {
      continue;
    }

    outputText += word + ' ';
  }

  if (outputText.length > inputText.length) {
    setTimeout(() => {
      if (confirm('Do you need help?')) {
        alert('Please contact customer support.');
      }
    }, 5000);
  } else {
    textarea.value = outputText.trim();
  }
};
