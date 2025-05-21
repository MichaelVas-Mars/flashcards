function redirect(){
const selectOption = document.querySelector('input[name = "language"]:checked').value;
window.location.href = selectOption;
}