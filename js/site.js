function getValues() {
    let userString = document.getElementById('userString').value;
    let finalAnswer = checkForPalindrome(userString);
    displayString(finalAnswer);
}

function checkForPalindrome(input) {
    let revString = '';
    let answer = 'no';
    for (let i = input.length - 1; i >= 0; i--) {
        revString += input[i];
    }
    if (revString == input) {
        answer = 'yes';
    }
    let output = [revString, answer];
    return output;
}

function displayString(output) {
    document.getElementById('results').textContent = output[0];
    if (output[1] == 'yes') {
        document.getElementById('result').textContent = 'Sure is';
        document.getElementById('alert').classList.add('alert-success');
    } else {   
        document.getElementById('result').textContent = 'Not a chance';
        document.getElementById('alert').classList.add('alert-danger');
    }
    document.getElementById('alert').classList.remove('invisible');
}