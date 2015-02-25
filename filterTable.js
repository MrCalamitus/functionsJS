/*
 * Busqueda de elementos dentro de una tabla
 *
 * create by Luis Ortiz 
 * MrCalamitus 
 *function int(tableID,element) 
 *@param tableID name id for html table
 *@param elements array elementos
 *          index (int : columnas de la tabla iniciando desde cero)
 *          palabra (string : palabra a buscar)
 *          
 * example : 
 * ele = [{"index":0,"palabra":""},{"index":1,"palabra":"0"},{"index":2,"palabra":"c"}];                
 */

filterTable = {
    init: function(tableID, elements) {
        table = document.getElementById(tableID);
        elements = table.getElementsByTagName('tr');

        for (index in elements) {
            element = elements[index];
            display = '';
            for (index2 in ele) {
                terms = ele[index2].palabra.toLowerCase().split(" ");
                elementtd = element.childNodes[(ele[index2].index * 2) + 1];
                for (var i = 0; i < terms.length; i++) {
                    if (elementtd.innerHTML.replace(/<[^>]+>/g, "").toLowerCase().indexOf(terms[i]) < 0) {
                        display = 'none';
                    }
                }
            }
            element.style.display = display;
        }
    },
    hidden: function(element) {
        element.style.display = "none";
    },
    show: function(element) {
        element.style.display = "block";
    }
};