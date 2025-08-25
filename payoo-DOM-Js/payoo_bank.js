// log in button functionality //
document.getElementById('btn-login')
    .addEventListener('click', function (e) {
        e.preventDefault();

        const mobileNumber = 12345678910;
        const pinNumber = 7378;

        const mobileNumberValue = document.getElementById('phone-Number').value;
        const mobileNumberConvert = parseInt(mobileNumberValue);

        const pinNumberValue = document.getElementById('pin-Number').value;
        const pinNumberConvert = parseInt(pinNumberValue);

        if (mobileNumberConvert === mobileNumber && pinNumberConvert === pinNumber) {
            console.log('All value is valid');
        }
        else {
            console.log('Invaild input');
        }



    })