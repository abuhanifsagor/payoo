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
    let historyBox =document.getElementById('history');
    

     
    e.preventDefault();

    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
    const formattedTime = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: true });

    const dateTime = `${formattedDate} ${formattedTime}`;


    if (amount === "" || amount <= 0) {
        alert("Please enter a valid amount!");
        return;
    }

    amount = parseFloat(amount);

    if (title === "Deposit") {
        balance += amount;
        alert(`Deposit of $${amount} successful!`);
        const depositHisotry = document.createElement('div');
        depositHisotry.classList.add('history-items',   'flex', 'justify-between' ,'p-2',  'rounded-lg', 'bg-white');

        depositHisotry.innerHTML = `
        
        
                 <div  class="text-xs font-bold"> ${dateTime} </div>
                 <div class="text-xs font-bold text-green-500"> <b>+ $</b> ${amount} </div>
                                       
        `;

        historyBox.appendChild(depositHisotry)
        
    } else if (title === "Withdraw") {
        if (amount > balance) {
            alert("Insufficient balance!");
            return;
        }
        balance -= amount;
        alert(`Withdrawal of $${amount} successful!`);
        
        const depositHisotry = document.createElement('div');
        depositHisotry.classList.add('history-items',   'flex', 'justify-between' ,'p-2',  'rounded-lg', 'bg-white');

        depositHisotry.innerHTML = `
        
        
                 <div  class="text-xs font-bold">  ${dateTime}</div>
                 <div class="text-xs font-bold text-red-500"> <b>- $</b> ${amount} </div> 
                                       
        `;

        historyBox.appendChild(depositHisotry)
    }
    
    balanceElement.innerText = balance.toFixed(2);
    document.getElementById("amount-input").value = "";
    document.getElementById("my_modal_3").close();

};

document.getElementById("my_modal_3").showModal();
}