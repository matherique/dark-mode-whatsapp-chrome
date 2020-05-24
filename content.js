const hora = (new Date).getHours();
if (hora >= 18 || hora < 9) {
  document.querySelector("body").classList.add("dark")
} 
