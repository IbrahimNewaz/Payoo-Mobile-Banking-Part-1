document.getElementById('btn-addMoney')
    .addEventListener('click', function (e) {
        e.preventDefault(); //for stoping form refreshing //

        const PinNumber = 7378;

        // Selecting user input //
        const pickBank = document.getElementById('select-Bank').value;
        const acNumber = document.getElementById('ac-Number').value;
        const addAmount = parseInt(document.getElementById('add-Amount').value);
        const homePinNumber = parseInt(document.getElementById('home-pinNumber').value);

        // account number checking //
        if (acNumber.length < 11) {
            alert("Please Provide Valid Account Number")
            return;
        }

        // pin number checking //
        if (homePinNumber != PinNumber) {
            alert("Invalid Pin Number")
            return;
        }


        // Balance deposit transaction //
        const currentBalance = parseInt(document.getElementById('Balance').innerText);
        const NewcurentBalance = addAmount + currentBalance;
        document.getElementById('Balance').innerText = NewcurentBalance;

    })


    // toggling feature //

document.getElementById('addmoney-btn')
.addEventListener('click' , function(){
    document.getElementById('cashout-parent').style.display = 'none';
    document.getElementById('addmoney-parent').style.display = 'block';
})

document.getElementById('cashout-btn')
.addEventListener('click' , function(){
    document.getElementById('addmoney-parent').style.display = 'none';
    document.getElementById('cashout-parent').style.display = 'block';
})