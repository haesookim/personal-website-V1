/* portfolio tag filtering */

function filterSelection(tag) {
    let select_pool;
    let i;

    select_pool = document.getElementsByClassName('item');

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
    let i;

    classArray = item.className.split(" ");

    for (i = 0; i < classArray.length; i++) {
        if (classArray[i] === "hidden") {
            return;
        }
    }
    item.className = item.className + " hidden";
}