let username = localStorage.getItem("username");
        
if(!username){
    window.location.href = "index.html";
}
document.getElementsByClassName("username")[0].innerText = username;
document.getElementsByClassName("username")[1].innerText = username;
 


function openModal(title, content, buttonText) {
document.getElementById("modal-title").innerText = title;
document.getElementById("modal-content").innerText = content;
document.getElementById("confirm-button").innerText = buttonText;

document.getElementById("confirm-button").onclick = function (e) {
    let amount = document.getElementById("amount-input").value;
    let balanceElement = document.getElementById("myBalance");
    let balance = parseFloat(balanceElement.innerText);
     
    e.preventDefault();
    if (amount === "" || amount <= 0) {
        alert("Please enter a valid amount!");
        return;
    }

    amount = parseFloat(amount);

    if (title === "Deposit") {
        balance += amount;
        alert(`Deposit of $${amount} successful!`);
    } else if (title === "Withdraw") {
        if (amount > balance) {
            alert("Insufficient balance!");
            return;
        }
        balance -= amount;
        alert(`Withdrawal of $${amount} successful!`);
    }
    
    balanceElement.innerText = balance.toFixed(2);
    document.getElementById("amount-input").value = "";
    document.getElementById("my_modal_3").close();
};

document.getElementById("my_modal_3").showModal();
}