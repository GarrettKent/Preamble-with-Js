//function parsing The Preamble
//return count of words beginning with 't'
//return count of words ending with 'e'
//return count of words beginning with 't' and ending in 'e'


//Assigned my global variables for the preamble and for the count of each specified word.
var preamble = "we the people of the united states in order to form a more perfect union establish justice insure domestic tranquility provide for the common defence promote the general welfare and secure the blessings of liberty to ourselves and our posterity do ordain and establish this constitution for the united states of america";
let countT = 0;
let countE = 0;
let countTE = 0;
let message;

//split my preamble variable into an array, then used forEach method
preamble.split(" ").forEach(function(word) {
    if((word[word.length -1]) === 'e' && word[0] === 't'){
        //counts the occurances each time a successful words passes through thr argument
        countTE++

        //included a message to append to HTML page
        message = " words begin with T and ends with E"

        //appended the count and message to a div and wrote it in console
        console.log(countTE + ' words begin with T and ends with E')
        document.getElementById("countTE").innerHTML = countTE + message
    }
    
    else if((word[word.length -1]) === 'e'){
        countE++
        message = " words end with E"
        console.log(countE + ' words end with E')
        document.getElementById("countE").innerHTML = countE + message
    }
    
    else if(word[0] === 't'){
        countT++
        message = " words begin with T"
        console.log(countT + ' words begin with T')
        document.getElementById("countT").innerHTML = countT + message
    }
});

