document.getElementById('check-btn').addEventListener('click', () => {
    const numberv = document.getElementById('user-input').value;
  const resultv = document.getElementById('results-div');

  document.getElementById('clear-btn').addEventListener('click', () => {
    resultv.innerHTML = "";
  })

  if (numberv === "") {
    alert("Please provide a phone number") 
  } else {
    var isValid = validator(numberv);

    if (isValid) {
      resultv.textContent = "Valid US number: " + numberv;
    } else {
      resultv.textContent = "Invalid US number: " + numberv;
    }
  };
  
  function validator(num) {
    return /^\d{3}-\d{3}-\d{4}$|^1 \d{3}-\d{3}-\d{4}$|^1 \(\d{3}\) \d{3}-\d{4}$|^1\(\d{3}\)\d{3}-\d{4}$|^1 \d{3} \d{3} \d{4}$|^\d{10}$|^\d{3}-\d{3}-\d{4}$|^\(\d{3}\)\d{3}-\d{4}|\d{3} \d{3} \d{4}$/.test(num);
  }
});