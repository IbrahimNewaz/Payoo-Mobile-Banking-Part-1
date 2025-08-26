// for add mony btn activet //
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
        // for add money //
        const currentBalance = parseInt(document.getElementById('Balance').innerText);
        const NewcurentBalance = addAmount + currentBalance;
        document.getElementById('Balance').innerText = NewcurentBalance;
    })

// for cash out btn activet //
document.getElementById('btn-withdrawMoney')
    .addEventListener('click', function (e) {
        e.preventDefault(); //for stoping form refreshing //

        const PinNumber = 7378;

        // Selecting user input //
        const agentNumber = document.getElementById('agent-Number').value;
        const cahoutAmount = parseInt(document.getElementById('withdraw-Amount').value);
        const withdrawPinNumber = parseInt(document.getElementById('withdraw-pinNumber').value);

        // account number checking //
        if (agentNumber.length < 11) {
            alert("Please Provide Valid Account Number")
            return;
        }

        // pin number checking //
        if (withdrawPinNumber != PinNumber) {
            alert("Invalid Pin Number")
            return;
        }


        // Balance deposit transaction //
        // for cash out money //
        const currentBalance = parseInt(document.getElementById('Balance').innerText);
        const NewcurentBalance = currentBalance - cahoutAmount;
        document.getElementById('Balance').innerText = NewcurentBalance;
    })


// get bonus btn activet //
document.getElementById('btn-bonusMoney')
    .addEventListener('click', function (e) {
        e.preventDefault(); //for stoping form refreshing //

        const couPon = 676869;
        const bonus = 1000;

        // Selecting user input //
        const luckyCoupon = parseInt(document.getElementById('coupon-Number').value);


        // account number checking //
        if (luckyCoupon.length <6 && luckyCoupon !== couPon) {
            alert("Please Provide Valid Coupon Number")
            return;
        }

        // Balance deposit transaction //
        // for cash out money //
        const currentBalance = parseInt(document.getElementById('Balance').innerText);
        const NewcurentBalance = currentBalance + bonus;
        document.getElementById('Balance').innerText = NewcurentBalance;
    })

// for transfer cash btn activet //
document.getElementById('btn-transferMoney')
    .addEventListener('click', function (e) {
        e.preventDefault(); //for stoping form refreshing //

        const PinNumber = 7378;

        // Selecting user input //
        const userNumber = document.getElementById('user-Number').value;
        const transferAmount = parseInt(document.getElementById('transfer-Amount').value);
        const transferPinNumber = parseInt(document.getElementById('transfer-pinNumber').value);

        // account number checking //
        if (userNumber.length < 11) {
            alert("Please Provide Valid Account Number")
            return;
        }

        // pin number checking //
        if (transferPinNumber != PinNumber) {
            alert("Invalid Pin Number")
            return;
        }


        // Balance deposit transaction //
        // for cash out money //
        const currentBalance = parseInt(document.getElementById('Balance').innerText);
        const NewcurentBalance = currentBalance - transferAmount;
        document.getElementById('Balance').innerText = NewcurentBalance;
    })

// btn-payBill for pay bill btn activet //
document.getElementById('btn-payBill')
    .addEventListener('click', function (e) {
        e.preventDefault(); //for stoping form refreshing //

        const PinNumber = 7378;

        // Selecting user input //
        const payBillBank = document.getElementById('paybill-Bank').value;
        const BilleracNumber = document.getElementById('BillerAC-Number').value;
        const billAmount = parseInt(document.getElementById('bill-Amount').value);
        const payPinNumber = parseInt(document.getElementById('pay-pinNumber').value);

        // account number checking //
        if (BilleracNumber.length < 11) {
            alert("Please Provide Valid Account Number")
            return;
        }

        // pin number checking //
        if (payPinNumber != PinNumber) {
            alert("Invalid Pin Number")
            return;
        }


        // Balance deposit transaction //
        // for pay bill money //
        const currentBalance = parseInt(document.getElementById('Balance').innerText);
        const NewcurentBalance = currentBalance - billAmount;
        document.getElementById('Balance').innerText = NewcurentBalance;
    })





// toggling feature //
// add money //
document.getElementById('addmoney-btn')
    .addEventListener('click', function () {
        document.getElementById('payBill-parent').style.display = 'none';
        document.getElementById('getBonus-parent').style.display = 'none';
        document.getElementById('cashout-parent').style.display = 'none';
        document.getElementById('transfer-parent').style.display = 'none';
        document.getElementById('addmoney-parent').style.display = 'block';
    })

// cash-out //
document.getElementById('cashout-btn')
    .addEventListener('click', function () {
        document.getElementById('payBill-parent').style.display = 'none';
        document.getElementById('getBonus-parent').style.display = 'none';
        document.getElementById('addmoney-parent').style.display = 'none';
        document.getElementById('transfer-parent').style.display = 'none';
        document.getElementById('cashout-parent').style.display = 'block';
    })

// transfer money //
document.getElementById('transfer-btn')
    .addEventListener('click', function () {
        document.getElementById('payBill-parent').style.display = 'none';
        document.getElementById('getBonus-parent').style.display = 'none';
        document.getElementById('addmoney-parent').style.display = 'none';
        document.getElementById('cashout-parent').style.display = 'none';
        document.getElementById('transfer-parent').style.display = 'block';
    })

// get bonus //
document.getElementById('bonus-btn')
    .addEventListener('click', function () {
        document.getElementById('payBill-parent').style.display = 'none';
        document.getElementById('addmoney-parent').style.display = 'none';
        document.getElementById('cashout-parent').style.display = 'none';
        document.getElementById('transfer-parent').style.display = 'none';
        document.getElementById('getBonus-parent').style.display = 'block';

    })


// pay bill //
document.getElementById('payBill-btn')
    .addEventListener('click', function () {
        document.getElementById('addmoney-parent').style.display = 'none';
        document.getElementById('cashout-parent').style.display = 'none';
        document.getElementById('transfer-parent').style.display = 'none';
        document.getElementById('getBonus-parent').style.display = 'none';
        document.getElementById('payBill-parent').style.display = 'block';

    })
