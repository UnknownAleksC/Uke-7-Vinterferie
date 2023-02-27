/* MODEL */
const mainDiv = document.getElementById('app');
const sliderDiv = document.getElementById('sliderDiv');
let mazeModel = {
    size: 0,
    rows: []
};

/* VIEW */
updateView();
function updateView() {
    let html = '';
    for (let rowCounter = 0; rowCounter < mazeModel.size.length; rowCounter++) {
        mazeModel.rows[rowCounter] = createRow(rowCounter);
    }
    numValue();
    // mainDiv.innerHTML = html;
}

/* CONTROLLER */
function createRow(num) {
    let htmlRow =
        '<tr>' +
        createCells(num) +
        '</tr>';
    return htmlRow;
}

function createCells(rowNum) {
    for (let cellCounter = 0; cellCounter < mazeModel.size.length; cellCounter++) {
        mazeModel.rows[rowNum][cellCounter] += { isHigh: isHigh(rowNum), isWide: isWide(cellCounter), isOpen: isOpen(rowNum, cellCounter), };
    }
}

function isHigh(rowNum) {
    if (rowNum % 2 !== 0) return true;
    else return false;
}

function isWide(cellNum) {
    if (cellNum % 2 === 0) return true;
    else return false;
}

function isOpen(rowNum, cellNum) {
    if (rowNum === 0 && cellNum % 2 !== 0) {
        let rowHasOpening = false;
        let randomNum = Math.random() * 1;
        for (let i = 0; i < mazeModel.rows[rowNum].length; i++) {
            if (mazeModel.rows[rowNum][i].isOpen === true) rowHasOpening === true;
        }
        if (rowHasOpening === false && randomNum < 0.25) return true;
        else if (rowHasOpening === false && mazeModel.size === mazeModel.size - 1) return true;
    }
}

function numValue(sliderNum) {
    sliderDiv.innerHTML = sliderNum.value;
    mazeModel.size = 3 + (2 * sliderNum.value);
}