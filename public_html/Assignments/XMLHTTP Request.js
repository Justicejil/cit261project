/* 
sandbox
 */

var xhr = new xhrXMLHttpRequest();

xhr.open("GET", "textfile.txt", false);

xhr.send(null);

alert(xhr.responseText + "My CIT261 break steps understanding mode");

var status = xhr.status;

if((status >=200 && status < 300)||
status === 304) {
    alert(xhr.responseTest);
} else {
    alert("Seem to have some ups and downs");
}
