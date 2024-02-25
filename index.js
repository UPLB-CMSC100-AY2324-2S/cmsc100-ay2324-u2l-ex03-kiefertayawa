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

function storePassword(name, password1, password2){ //function to store the password to an object and to print different prompts depending on the error
    if(password1.length<8 || password2.length<8){
        return "Insufficient Number of Strings!";
    }

    if(password1.length !== password2.length){
        return "Wrong Password!";
    }

    if(!validatePassword(password1, password2)){
        return "Invalid Password!";
    } else {
        const reversedPassword = reversePassword(password1); 
        return { name: name, newpassword: reversedPassword }; //returns an object containing name and new passwords
    }
}

console.log(storePassword("John", "Pass1234", "Pass1234")); // returns {name: "John", newpassword:"4321ssaP"}
console.log(storePassword("John", "pass1234", "pass1234")); // prompts “Invalid Password!”
console.log(storePassword("John", "pass1234", "pass1234567")); //prompts “Wrong Password!”
console.log(storePassword("John", "pass1", "pass1")); //prompts “Insufficient Number of Strings!”