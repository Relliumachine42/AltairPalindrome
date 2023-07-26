function getValues() {
    let userString = document.getElementById('userString').value;
    userString = userString.replaceAll(/[^a-z0-9]/gi, '').toLowerCase();
    let finalAnswer = checkForPalindrome(userString);
    displayString(finalAnswer);
}

function checkForPalindrome(input) {
    let revString = '';
    for (let i = input.length - 1; i >= 0; i--) {
        revString += input[i];
    }
    let palObj = {
        check: (revString == input),
        reversed: revString
    };
    return palObj;
}

function displayString(output) {
    document.getElementById('alert').classList.remove('alert-danger','alert-success');
    document.getElementById('results').textContent = output.reversed;
    if (output.check == true) {
        document.getElementById('result').textContent = 'Sure is';
        document.getElementById('alert').classList.add('alert-success');
    } else {   
        document.getElementById('result').textContent = 'Not a chance';
        document.getElementById('alert').classList.add('alert-danger');
    }
    document.getElementById('alert').classList.remove('invisible');
}