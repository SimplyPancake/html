picX = [92, 81];
picY = [81, 47];
picX[92] = "https://goo.gl/8cm9HU";
picY[81] = "https://goo.gl/8cm9HU";

picX[81] = "https://goo.gl/azAT2j";
picY[47] = "https://goo.gl/azAT2j";

picX[81] = "https://goo.gl/htsTmk";
picY[3] = "https://goo.gl/htsTmk";

console.log("Please ignore the errors, HTML is being a retard again...");
// ----------------------------------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------------------------------
function logCoords() {
    var cX = event.clientX; var cY = event.clientY;
    //Krijg variabelen als 'clientsizeX' en 'clientsizeY'
    //Zie: https://i.stack.imgur.com/6xPdH.png    We gaan 'windowWidth' gebruiken
    var wWidth = window.innerWidth;
    var wHeight = window.innerHeight;
    //Nu krijg ik ook de windowWidth en Height. Hier wordt de app op gebaseerd.
    var coords1 = "client - X: " + cX + ", Y coords: " + cY;
    var coords3 = "window size: - X: " + wWidth + ", Y: " + wHeight;
    var percentX = Math.round(cX / wWidth * 100);
    var percentY = Math.round(cY / wHeight * 100);
    fpercentX = percentX
    fpercentY = percentY
    var coords4 = "X: " + percentX + "%, Y: " + percentY  + "%";
    //Het percentage is de relatie tussen de X  en Y coords van het browser-window en de size van het browser-window

    console.clear();
    console.log(coords1);
    console.log(coords3);
    console.log(coords4);
    // call array name and desired value to be closet
    // console.log(closest(arrayNummer,dichtbijzijnste nummer));
}
// ----------------------------------------------------------------------------------------------------------------
function changePic(){
// yes.
}
