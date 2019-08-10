/* load the portfolio instances */

function createItem(title, imageSource, description, tagString) {
    let itemwrapper = document.createElement("div");
    itemwrapper.className = "item-wrapper";

    let item = document.createElement("div");
    item.className = "item " + tagString; /* Join with spaces */
    itemwrapper.appendChild(item);

    let imageDiv = document.createElement("div");
    imageDiv.className = "image";
    /* append image source to imageDiv */
    let textContainer = document.createElement("div");
    textContainer.className = "text-container";

    item.appendChild(imageDiv);
    item.appendChild(textContainer);

    let titleDiv = document.createElement("div");
    titleDiv.className = "title";
    titleDiv.innerHTML = title;

    let descriptDiv = document.createElement("div");
    descriptDiv.className = "description"
    descriptDiv.innerHTML = description;

    let tagDiv = document.createElement("div");
    tagDiv.className = "tag-container";

    textContainer.appendChild(titleDiv);
    textContainer.appendChild(descriptDiv);
    textContainer.appendChild(tagDiv);

    let tagArray = tagString.split(" ");
    let i;
    for (i = 0; i < tagArray.length; i++) {
        let tagItem = document.createElement("div");
        tagItem.className = "tag-item";
        tagItem.innerHTML = tagArray[i];
        tagItem.id = tagArray[i];
        tagDiv.appendChild(tagItem);
    }
}

/* collect and coloring the tags */

function includes(item, array) {
    return (array.indexOf(item) != -1);
}
/* is there a better way to do this? */

/* portfolio tag filtering */

var select_pool = document.getElementsByClassName('item-wrapper');
var buttonContainer = document.getElementById('tag-button');

// array of tags

var tags = [
    { tag: "research", text: "Research", color: "navy" }, 
    { tag: "game", text: "Game Design", color: "green" },
    { tag: "front-end", text: "Front End", color: "teal" },
    { tag: "back-end", text: "Back End", color: "brown" },
    { tag: "social-change", text: "Social Change", color: "purple" },
    { tag: "pixel-art", text: "Pixel Art", color: "rgb(185, 107, 120)" },
    { tag: "datavis", text: "Data Visualization", color: "orange" }
];

//iterate over all existing tags in portfoliotags.js

for (let k = 0; k < tags.length; k++) {
    let tempColor = tags[k].color;
    let tempTag = tags[k].tag;
    let tempText = tags[k].text;

    //create the buttons

    let tagButton = document.createElement('button');
    tagButton.className = "tag";
    tagButton.id = tempTag;
    tagButton.innerHTML = tempText;
    buttonContainer.appendChild(tagButton);

    //create the tags by the classes on the wrapper

    let toTag = document.querySelectorAll('.item-wrapper.'+tempTag);
    for (let i = 0; i < toTag.length ; i++){
        let tagItem = document.createElement('div');
        tagItem.innerHTML = tempText;
        tagItem.className = ('tag-item '+tempTag);
        let container = toTag[i].querySelector('.tag-container')
        container.append(tagItem);
        console.log(tagItem);
    }

    let tagsToColor = document.querySelectorAll('.tag-item.'+tempTag);

    tagButton.style.borderColor = tempColor;
    tagButton.style.color = tempColor;

    for (let j = 0; j < tagsToColor.length; j++) {
        tagsToColor[j].style.backgroundColor = tempColor;
    }

    tagButton.addEventListener("click", function () {
        filterSelection(this.id);
        this.classList.toggle('pressed');

        if (includes('pressed', this.className.split(" "))) {
            this.style.backgroundColor = tempColor;
            this.style.color = 'white';
        } else{
            this.style.borderColor = tempColor;
            this.style.color = tempColor;
            this.style.backgroundColor = 'transparent';
        }
    });
}

for (let i = 0; i < select_pool.length; i++) {
    //select_pool[i].addEventListener
}

function filterSelection(tag) {

    let button = document.getElementById(tag);
    let classArray = button.className.split(" ");
    let allButtons = document.getElementsByClassName("pressed");

    if (includes("pressed", classArray)) {
        showAll(select_pool);
    } else {
        if (tag == "all") {
            showAll(select_pool);
            return;
        }

        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].classList.toggle("pressed");
        }

        for (i = 0; i < select_pool.length; i++) {
            if (select_pool[i].className.indexOf(tag) > -1) {
                showSelection(select_pool[i]);
            } else {
                hideSelection(select_pool[i]);
            }
        }
    }
}

function showAll(select_pool) {
    let i;

    for (i = 0; i < select_pool.length; i++) {
        let classArray;

        classArray = select_pool[i].className.split(" ");

        let index = classArray.indexOf("hidden");
        if (index > -1) {
            classArray.splice(index, 1);
            select_pool[i].className = classArray.join(" ");
        }
    }
}

function showSelection(item) {
    let classArray;

    classArray = item.className.split(" ");

    let index = classArray.indexOf("hidden");
    if (index > -1) {
        classArray.splice(index, 1);
    }

    item.className = classArray.join(" ");
}

function hideSelection(item) {
    let classArray;

    classArray = item.className.split(" ");

    if (includes("hidden", classArray)) {
        return;
    } else {
        item.className = item.className + " hidden";
    }
}

/* Searching for items */

function searchFunction() {
    let input = getElementById("search-input");

    //fix this part as fit
    for (i = 0; i < select_pool.length; i++) {
        if (select_pool[i].className.indexOf(tag) > -1) {
            showSelection(select_pool[i]);
        } else {
            hideSelection(select_pool[i]);
        }
    }
}