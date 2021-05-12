function updateRate() {
    var rate = document.getElementById("myrange").value;
    document.getElementById("val").innerText = rate + "%";
    document.getElementById("myrange").oninput = function () {
        document.getElementById("val").innerText = this.value;
    }

}

function compute() {
    var principal = document.querySelector("#principal").value;
    if (principal <= 0) {
        window.alert("Enter positive principal");
        return document.getElementById("principal").focus();
    }

    var rate = document.querySelector("#myrange").value;
    var years = document.querySelector("#yrs").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    document.getElementById("res").style.marginLeft = "41.5%";
    document.querySelector("#result").innerHTML = "\<br\><br\>If you deposit <mark>" + principal + "</mark>,\<br\><br\>at an interest rate of <mark>" + rate + "%</mark>\<br\><br\>You will receive an amount of <mark>" + interest + "</mark>,\<br\><br\>in the year <mark>" + year + "</mark>\<br\>";
}
