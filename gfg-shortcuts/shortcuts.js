const currURL = window.location.toString();
if (currURL.includes("geeksforgeeks.org/problems/")) {
  document.addEventListener("keydown", (e) => {
    //compile
    if (e.ctrlKey && e.key == "'") {
      document.querySelector(".problems_compile_button__Lfluz").click();
    }
    //Submit
    else if (e.ctrlKey && e.key == "Enter") {
      document.querySelector(".problems_submit_button__6QoNQ").click();
    }
    //Custom input
    else if (e.ctrlKey && (e.key == "i" || e.key=="I")) {
      document.querySelector(".problems_custom_input__ediyL").click();
      setTimeout(() => {
        document.querySelector(".problems_custom_input_textarea__T9IDk").focus();
      }, 400);
    }
  });
}
