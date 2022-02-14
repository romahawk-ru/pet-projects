let uppercasebtn = document.getElementById("upper-case");
let lowercasebtn = document.getElementById("lower-case");
let propercasebtn = document.getElementById("proper-case");
let sentencecasebtn = document.getElementById("sentence-case");

// convert the content of textarea to uppercase
function convertToUpper(){
    let text = document.getElementById("source").value;
    document.getElementById("source").value = text.toUpperCase();
}

// convert the content of textarea to lowercase
function convertToLower(){
    let text = document.getElementById("source").value;
    document.getElementById("source").value = text.toLowerCase();
}

// convert the content of textarea to proper case
function convertToProper(){
    let text = document.getElementById("source").value.toLowerCase(); //declare local var with source string & convert to lowercase
    let array = text.split(" "); //convert string to array
    //convert the new array back to string by join() with " " as separator & assign the local var with converted string to source text
    document.getElementById("source").value = array.map(function properCase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)  //every index 0 in a string is converted to uppercase + the rest of the string from index 1 to end is added
    }).join(" ");
}

/* this wasn't accepted for some reason, although it works & takes into account a variety of possible punctuation marks at the end of the sentence
function convertToSentence(){
    let text = document.getElementById("source").value.toLowerCase(); //declare local var with source string & convert to lowercase
    let s = text.replaceAll(/([\?\.\!]\s)(\w)/g, text => text.toUpperCase()); //find all matches to regex of punctuation + space + first letter & convert them to uppercase
    document.getElementById("source").value = s.charAt(0).toUpperCase() + s.slice(1)
}*/

function convertToSentence(){
    let array = document.getElementById("source").value.toLowerCase().split(". ");
    document.getElementById("source").value = array.map(function sentenceCase(string){
        return string.charAt(0).toUpperCase() + string.slice(1)
    }).join(". ");
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.
document.getElementById("save-text-file").addEventListener("click", function(){
    // Generate download of hello.txt file with some content
    var text = document.getElementById("source").value;
    var filename = "text.txt";

    download(filename, text);
}, false);


uppercasebtn.addEventListener("click", convertToUpper);
lowercasebtn.addEventListener("click", convertToLower);
propercasebtn.addEventListener("click", convertToProper);
sentencecasebtn.addEventListener("click", convertToSentence);

