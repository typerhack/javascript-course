/**
 * Done: Update the text in the "Formatted Text" section as a user types in the textarea
 * Done TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * Done: Add an .underline class to "Formatted Text" when Underline button is clicked
 * Done: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */


/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */
function updateText() {
    // CODE GOES HERE
    let inputText = document.querySelector(".form-control");
    document.querySelector("#text-output").innerText = inputText.value;

}

/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function insite HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
function makeBold(elem) {
    //CODE GOES HERE
    document.querySelector("#text-output").classList.toggle("bold");
    elem.classList.toggle("active");
}

/**
 * Toggle the italic class for the output text
 */
function makeItalic(elem) {
        //CODE GOES HERE
    document.querySelector("#text-output").classList.toggle("italic");
    elem.classList.toggle("active");
}

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
function makeUnderline(elem) {
    //CODE GOES HERE
    /** 
     * document.querySelector("#text-output").classList.toggle("underline");
     * elem.classList.toggle("active");
    */
    if (document.querySelector("#text-output").classList.contains("underline")) {
        document.querySelector("#text-output").classList.remove("underline");      
        elem.classList.remove("active");  
    }else{
        document.querySelector("#text-output").classList.add("underline");
        elem.classList.add("active");
    }
    
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
function alignText(elem, alignType) {
    // CODE GOES HERE
    // Remove all active classes
    let listBtn = document.querySelectorAll(".align");
    listBtn.forEach((item)=>{
        if(item.classList.contains("active")){
            item.classList.remove("active");
        }
    })

    elem.classList.add("active");
    // Align Types: Left, Right , Center
    document.querySelector("#text-output").style.textAlign = alignType;

}