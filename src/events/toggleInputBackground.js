export default  function toggleInputBackground (input) {
  input.addEventListener("focusin", () => {
    input.classList.add('focus')
  });
  
  input.addEventListener("focusout", () => {
    if(input.value) {
      input.classList.add('focus')
    } else {
      input.classList.remove('focus')
    }
});
}
