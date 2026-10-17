const addToLocalStorage = () => {
  const inputId = document.getElementById("input-id");
  const id = inputId.value;
  console.log(id);
  const inputField = document.getElementById("input-value");
  const value = inputField.value;
  console.log(value);

  if (id && value) {
    localStorage.setItem(id, value);
  }
  inputId.value = "";
  inputField.value = "";
};
