
var exists = 0;
var current_cell = null; // the currently selected cell
var subTabla1 = [];
var subTabla2 = [];
var subTabla3 = [];
var subTabla4 = [];
var subTabla5 = [];
var subTabla6 = [];
var subTabla7 = [];
var subTabla8 = [];
var subTabla9 = [];
var arrayTotal = [];
var tablafinal = [];
var scoreT = 0;
var id

function initialize() {
    var col, row;
    for (row = 0; row <= 8; row++) { //recorrer toda la tabla y asigna evento onclick y classname a todas las td
        for (col = 0; col <= 8; col++) {
            var cell = document.getElementById('cell_' + col + '_' + row);
            if (!parseInt(cell.innerHTML) || parseInt(cell.innerHTML)) { //hice este or para poner el evento select a todas las celdas
                // cell is empty or not empty
                cell.onclick = selectCell;
                cell.className = 'tofill';
            }
        }

    }
    document.onkeydown = keyPress;
    //document.onkeydown = keyPress;
    DefinirSubtablas();
}

function DefinirSubtablas() {
    var col, fil;
    subTabla1.clear;
    subTabla2.clear;
    subTabla3.clear;
    subTabla4.clear;
    subTabla5.clear;
    subTabla6.clear;
    subTabla7.clear;
    subTabla8.clear;
    subTabla9.clear;
    //<tr> 1
    for (col = 0; col <= 2; col++) {
        for (fil = 0; fil <= 2; fil++) {
            subTabla1.push('cell_' + col + '_' + fil);
        }
    }
    arrayTotal.push(subTabla1);
    for (col = 3; col <= 5; col++) {
        for (fil = 0; fil <= 2; fil++) {
            subTabla2.push('cell_' + col + '_' + fil);
        }
    }
    arrayTotal.push(subTabla2);
    for (col = 6; col <= 8; col++) {
        for (fil = 0; fil <= 2; fil++) {
            subTabla3.push('cell_' + col + '_' + fil);
        }
    }
    arrayTotal.push(subTabla3);
    //<tr> 2
    for (col = 0; col <= 2; col++) {
        for (fil = 3; fil <= 5; fil++) {
            subTabla4.push('cell_' + col + '_' + fil);
        }
    }
    arrayTotal.push(subTabla4);
    for (col = 3; col <= 5; col++) {
        for (fil = 3; fil <= 5; fil++) {
            subTabla5.push('cell_' + col + '_' + fil);
        }
    }
    arrayTotal.push(subTabla5);
    for (col = 6; col <= 8; col++) {
        for (fil = 3; fil <= 5; fil++) {
            subTabla6.push('cell_' + col + '_' + fil);
        }
    }
    arrayTotal.push(subTabla6);
    //<tr> 3
    for (col = 0; col <= 2; col++) {
        for (fil = 6; fil <= 8; fil++) {
            subTabla7.push('cell_' + col + '_' + fil);
        }
    }
    arrayTotal.push(subTabla7);
    for (col = 3; col <= 5; col++) {
        for (fil = 6; fil <= 8; fil++) {
            subTabla8.push('cell_' + col + '_' + fil);
        }
    }
    arrayTotal.push(subTabla8);
    for (col = 6; col <= 8; col++) {
        for (fil = 6; fil <= 8; fil++) {
            subTabla9.push('cell_' + col + '_' + fil);
        }
    }
    //arrayTotal.push(subTabla9);

}
function buscarSubtabla() {
    var tabla = [];
    var col = current_cell.id.substring(5, 6);
    var fila = current_cell.id.substring(8, 7);
    if (col >= 0 && col <= 2) {
        if (fila >= 0 && fila <= 2)
            return tabla = subTabla1.slice();
        else if (fila >= 3 && fila <= 5)
            return tabla = subTabla4.slice();
        else
            return tabla = subTabla7.slice();


    }
    if (col >= 3 && col <= 5) {
        if (fila >= 0 && fila <= 2)
            return tabla = subTabla2.slice();
        else if (fila >= 3 && fila <= 5)
            return tabla = subTabla5.slice();
        else
            return tabla = subTabla8.slice();

    }
    if (col >= 6 && col <= 8) {
        if (fila >= 0 && fila <= 2)
            return tabla = subTabla3.slice();
        else if (fila >= 3 && fila <= 5)
            return tabla = subTabla6.slice();
        else
            return tabla = subTabla9.slice();
    }
}

// mouse button event handler
function selectCell() {
    if (current_cell != null && current_cell.className != 'validate') {
        current_cell.className = 'tofill';

    }

    current_cell = this;
    if (current_cell.className != 'validate') {
        current_cell.className = 'selected';
    }
    tablafinal.clear;
    tablafinal = buscarSubtabla();

}

// Capture keyboard key presses. If the key pressed is a digit
// then add it to the current cell. If it is a space then empty
// the current cell.
function keyPress(evt) {
    if (current_cell == null)
        return;
    var key, key1;
    if (evt) {
        // firefox or chrome
        key = evt.key;
        key1 = evt.keyCode;
    }
    else {
        // IE
        key = String.fromCharCode(event.keyCode);
    }
    if (key1 == 8 || key1 == 46) {
        VerificarBorrar();
        current_cell.innerHTML = '';
    }

    else if (key1 >= 49 && key1 <= 57) {
        scoreT++;
        VerificarFila(key);
        VerificarColumna(key);
        VerificarSubTabla(key);
        current_cell.innerHTML = key;
        document.getElementById("score").innerHTML = scoreT;
    }
    else if (key1 == 67) {
        borrarTodo();
    }


}
function VerificarFila(key) {

    exists = 0
    for (var i = 0; i < 9; i++) //recorro la fila del current cell
    {
        var cell = "cell_" + i + "_" + (current_cell.id.substring(current_cell.id.length, 7));
        if (document.getElementById(cell).innerHTML == key) {
            // console.log("cannot...");

            document.getElementById(cell).className = 'validate';
            current_cell.className = 'validate';
            scoreT--;
            //exists= exists + 1
        }

    }

}
function VerificarColumna(key) {
    for (var i = 0; i < 9; i++) //recorro la columna del current cell
    {
        var cell = "cell_" + (current_cell.id.substring(5, 6)) + "_" + i; //aca saco el substring ej:_0_ para recorrer solo las columnas
        if (document.getElementById(cell).innerHTML == key) {
            // console.log("cannot...");

            document.getElementById(cell).className = 'validate';
            current_cell.className = 'validate';
            scoreT--;
        }
    }
}
function VerificarSubTabla(key) {

    for (var i = 0; i < 9; i++) {
        var cell = tablafinal[i];
        if (document.getElementById(cell).innerHTML == key) {
            document.getElementById(cell).className = 'validate';
            current_cell.className = 'validate';
            scoreT--;
        }
    }
}
function VerificarBorrar() {
    var valor = current_cell.innerHTML;
    for (var i = 0; i < 9; i++) //recorro la fila del current cell
    {
        var cell = "cell_" + i + "_" + (current_cell.id.substring(current_cell.id.length, 7));
        if (document.getElementById(cell).innerHTML == valor) {
            // console.log("cannot...");

            document.getElementById(cell).className = 'tofill';
            current_cell.className = 'tofill';
            //exists= exists + 1
        }

    }
    for (var i = 0; i < 9; i++) //recorro la columna del current cell
    {
        var cell = "cell_" + (current_cell.id.substring(5, 6)) + "_" + i; //aca saco el substring ej:_0_ para recorrer solo las columnas
        if (document.getElementById(cell).innerHTML == valor) {
            // console.log("cannot...");

            document.getElementById(cell).className = 'tofill';
            current_cell.className = 'tofill';
        }
    }
    for (var i = 0; i < 9; i++) {
        var cell = tablafinal[i];
        if (document.getElementById(cell).innerHTML == valor) {
            document.getElementById(cell).className = 'tofill';
            current_cell.className = 'tofill';
        }
    }
}
function borrarTodo() {
    for (var i = 0; i <= 8; i++) {
        for (var j = 0; j <= 8; j++) {
            var cel = "cell_" + i + "_" + j;
            document.getElementById(cel).innerHTML = '';
            document.getElementById(cel).className = 'tofill';
        }
    }
    
    
}

// section timer
var startTime = 0
var start = 0
var end = 0
var diff = 0
var timerID = 0
function chrono() {
    end = new Date()
    diff = end - start
    diff = new Date(diff)
    var msec = diff.getMilliseconds()
    var sec = diff.getSeconds()
    var min = diff.getMinutes()
    var hr = diff.getHours() - 1
    if (min < 10) {
        min = "0" + min
    }
    if (sec < 10) {
        sec = "0" + sec
    }
    if (msec < 10) {
        msec = "00" + msec
    }
    else if (msec < 100) {
        msec = "0" + msec
    }
    document.getElementById("chronotime").innerHTML = hr + ":" + min + ":" + sec + ":" + msec
    timerID = setTimeout("chrono()", 10)
    if (min >= 3) {
        chronoStop()
        showPopup()
        chronoReset()
        chronoStopReset()
        borrarTodo()
        document.getElementById("pointAcum").innerHTML = scoreT
    }
}
function chronoStart() {
    document.chronoForm.startstop.value = "stop!"
    document.chronoForm.startstop.onclick = chronoStop
    document.chronoForm.reset.onclick = chronoReset
    start = new Date()
    chrono()
}
function chronoContinue() {
    document.chronoForm.startstop.value = "stop!"
    document.chronoForm.startstop.onclick = chronoStop
    document.chronoForm.reset.onclick = chronoReset
    start = new Date() - diff
    start = new Date(start)
    chrono()
}
function chronoReset() {
    document.getElementById("chronotime").innerHTML = "0:00:00:000"
    start = new Date()
}
function chronoStopReset() {
    borrarTodo()
    document.getElementById("chronotime").innerHTML = "0:00:00:000"
    document.chronoForm.startstop.onclick = chronoStart
}
function chronoStop() {
    document.chronoForm.startstop.value = "start!"
    document.chronoForm.startstop.onclick = chronoContinue
    document.chronoForm.reset.onclick = chronoStopReset
    clearTimeout(timerID)
    borrarTodo()
}


// section popup
function showPopup() {
    $('.hover_bkgr_fricc').show();
}
function hidePopup() {
    $('.hover_bkgr_fricc').hide();
}

// section login

function login() {
    var usertext = document.getElementById("s-user").value
    var passtext = document.getElementById("s-pass").value
    //var usertext = $("#s-user").html();
    //var passtext = $("#s-pass").html();
    if (usertext == "" && passtext == "") {
        alert('Completez les champs user et password')
    }
    else {
        $(function () {
            $.ajax({
                type: "POST",
                url: "DataSudoku.aspx/getUser",
                data:JSON.stringify({ user: usertext, pass: passtext }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: OnSuccess,
                failure: function (response) {
                    alert('fail');
                },
                error: function (response) {
                    //alert('error'+ response);
                }
            });
        });
    }
}

function OnSuccess(response) {

    resp = JSON.parse(response.d);
    
    if (resp == null) {
        alert('Entrez un compte valide')
    }
    else {
        var UserN = resp.userSudoku
        id = resp.id
        var point = resp.score
        document.getElementById("userProfil").innerHTML = "Bienvenu " + UserN
        document.getElementById("scoreHeader").innerHTML="Score "+point
    }
 

}






