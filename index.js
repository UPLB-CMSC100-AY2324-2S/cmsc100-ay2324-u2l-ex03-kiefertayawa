/*
Kiefer L. Tayawa
2022 - 05397
CMSC 100 - U2L
*/

function validatePassword(password1, password2){ //function for validating passwords
    if(password1 !== password2){ //returns false if password doesn't match
        return false;
    }

    if(password1.length<8){ //returns false if length of password is less than 8
        return false;
    }

    let hasNumber = false; 
    let hasUpperCase = false;
    let hasLowerCase = false;
    
    for(let char of password1){ //returns true if there is atleast 1 number, 1 uppercase letter, and 1 lowercase letter in password
        if(!isNaN(parseInt(char))){ //converts char into int and checks if it is not number (using isNaN)
            hasNumber = true;
        } else if (char === char.toUpperCase()){
            hasUpperCase = true;
        } else if (char === char.toLowerCase()){
            hasLowerCase = true;
        }
    }

    return hasNumber && hasUpperCase && hasLowerCase;
}

function reversePassword(password){ //function for reversing password
    let reversedPassword = "";
    for(let i = password.length-1; i >= 0; i--){ //loops through the password string in reversed order
        reversedPassword += password[i];
    }
    return reversedPassword;
}