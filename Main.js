console.log("Hello World, I hate this and I'm in a constant state of pain.");
//JS test to change color of a particular text
function changeColor(newColor) {
    const  element = document.getElementById("first_text");
    element.style.color = newColor;
};

// current year
const currentYear = new Date().getFullYear();
document.getElementById("yearDisplay").textContent = currentYear;



//loading faster than HTML rn, or I am using this line of code because I'm not sure if it is.
document.addEventListener("DOMContentLoaded", function() {
    //event for button
    document.getElementById("buttonalert").addEventListener("click", function() {
        //ALERTTT
        alert("HI EVERYONE AND CO!!!");
    });
});


//HOVER BUTTON
document.addEventListener("DOMContentLoaded", function() {
    // Get the button element by ID
    const button = document.getElementById("hoverbutton");

    // Set up event listeners for mouseover and mouseout
    button.addEventListener("mouseover", function() {
        button.textContent = "Mouse ON MEEEE!";
    });

    button.addEventListener("mouseout", function() {
        button.textContent = "Hover OVER ME NOW";
    });
});



//counter for monkeys
let count = 1;

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("buttoncount");
    const textElement = document.getElementById("textcount");

    button.onclick = function() {
        count = count + 1;
        textElement.textContent = count + ' Monkey @()@';

        //if even then it will be white, iff odd it will be YELLOW
        if (count % 2 === 0) {
            textElement.style.color = 'white';
        } else {
            textElement.style.color = 'yellow';
        }
    };
});


//for loops?
document.addEventListener("DOMContentLoaded", function() {
    const numbersList = document.getElementById("numbers");

    for (let i = 0; i < 100; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = i % 2 === 0 ? 'odd' : 'even';
        numbersList.appendChild(listItem);
    }
});

//for changing the backgound color of the website
document.addEventListener('DOMContentLoaded', function() {
    // Function to change the background color
    function changeBackgroundColor(color) {
        document.body.style.backgroundColor = color;
    }

    // Event listeners for the buttons
    document.getElementById('whitebutton').addEventListener('click', function() {
        changeBackgroundColor('white');
    });

    document.getElementById('redbutton').addEventListener('click', function() {
        changeBackgroundColor('red');
    });

    document.getElementById('darkgreybutton').addEventListener('click', function() {
        changeBackgroundColor('darkgrey');
    });
});

