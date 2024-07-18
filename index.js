const buttons = Array.from(document.querySelectorAll("button"));
const field = document.querySelector(".display__field");
const specialXters = ["/", "+", ".", "*"];
let output = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let targetValue = e.target.dataset.value;

    if (targetValue === "=" && output !== "") {
      output = eval(output.replace("%", "/100"));
    } else if (targetValue === "DEL") {
      output = output.toString().slice(0, -1);
    } else if (targetValue === "AC") {
      output = "";
    } else if (output === "" && specialXters.includes(targetValue)) return;
    else {
      output += targetValue;
    }
    field.value = output;
  });
});
