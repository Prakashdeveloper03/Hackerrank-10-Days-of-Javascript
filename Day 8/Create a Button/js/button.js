let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  let current_value = this.innerHTML;
  this.innerHTML = parseInt(current_value) + 1;
});
