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

var tagButtonList = [];

function addTag(tagString) {
}

function includes(item, array) {
    return (array.indexOf(item) != -1);
}
/* is there a better way to do this? */

/* portfolio tag filtering */

function activateButton(btnName) {
    let button = document.getElementById(btnName);

    button.classList.toggle("pressed");
}

var select_pool = document.getElementsByClassName('item-wrapper');

function filterSelection(tag) {

    let button = document.getElementById(tag);
    let classArray = button.className.split(" ");

    if (includes("pressed", classArray)) {
        showAll(select_pool);
        /* Reserve this for when I'm flipping them
        
        for (i = 0; i < select_pool.length; i++) {
            if (select_pool[i].className.indexOf(tag) > -1) {
                hideSelection(select_pool[i]);
            }
        }*/
        /* remove filter */
    } else {
        if (tag == "all") {
            showAll(select_pool);
            return;
        }

        for (i = 0; i < select_pool.length; i++) {
            if (select_pool[i].className.indexOf(tag) > -1) {
                showSelection(select_pool[i]);
            } else {
                hideSelection(select_pool[i]);
            }
        }
    }
    activateButton(tag);
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

function toggleDesc(id){
    let parent = document.querySelector("#"+id);
    let desc = parent.querySelector(".long-description");

    desc.classList.toggle("visible");
    console.log(desc.innerHTML);
}

/* Searching for items */

function searchFunction(){
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