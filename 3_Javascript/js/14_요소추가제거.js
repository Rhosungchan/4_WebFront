document.getElementById("add").addEventListener("click", () => {

    const div = document.createElement("div");

    div.classList.add("row");

    const input = document.createElement("input");

    input.classList.add("in");

    input.setAttribute("type", "number");

    const span = document.createElement("span");

    span.classList.add("remove");

    span.innerHTML = "&times;";

    span.addEventListener("click", function () {
        this.parentElement.remove();
    });

    div.append(input, span);

    document.querySelector(".container").append(div);

    input.focus();


});


const remove = document.getElementsByClassName("remove");

for (let item of remove) {

    item.addEventListener("click", function () {

        alert("삭제")
    });

}

document.getElementById("calc").addEventListener("click", () => {

    const inputList = document.getElementsByClassName("in");

    let sum = 0;

    for (let item of inputList) {
        sum += Number(item.value);
    };

    alert("합계 : " + sum);



});




