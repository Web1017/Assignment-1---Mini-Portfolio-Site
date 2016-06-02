// look into favicon
//IIFE - Immediately invoked Expression 

(function () {
    "use strict";  //doesnt allow variables to be redeclared
    // Define Array of HTML elements
    var paragraphElements = [];

    paragraphElements[0] = document.getElementById("ParagraphOne");
    paragraphElements[1] = document.getElementById("ParagraphTwo");
    paragraphElements[2] = document.getElementById("ParagraphThree");
    paragraphElements[3] = document.getElementById("ParagraphFour");

    var paragraphs = [];

    //Page Data
    paragraphs[0] = "Life is a series of experiences, each one of which makes us bigger, even though sometimes it is hard to realize this. For the world was built to develop character, and we must learn that the setbacks and grieves which we endure help us in our marching onward. - Henry Ford";

   
    paragraphs[1] = "Second step of the sentence. You can view what will be added to this page, and see the new features";
    paragraphs[2] = "My personal goal is to gain more knowledge and experience in life in order to succeed. With more interest and practise, I hope to gain more than before. My personal ambition has shown me that I am capable of doing more with my life and being able to expand my horizon in terms of knowledge and skills, which will guide me toward my future ";
    
    paragraphs[3] = "my favorite market";

    //check if paragraph exists   

    var paragraphElementsLength = paragraphElements.length - 1; // counting from 3 to 1, descending order
    for (var index = paragraphElementsLength; index >= 0; index--) {
        //   console.log(index);
        //   console.error("This is an error");       //provides error
        if (paragraphElements[index]) {
            paragraphElements[index].innerHTML = paragraphs[index];
        }
    }



})();