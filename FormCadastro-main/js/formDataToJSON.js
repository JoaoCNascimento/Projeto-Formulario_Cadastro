function serialize(form) {
    var json = {};
    var data = new FormData(form);
    var keys = data.keys();
    for (var key = keys.next(); !key.done; key = keys.next()) {
        var values = data.getAll(key.value);
        json[key.value] = values.length == 1 ? values[0] : values;
    }
    return json;
}

var form = document.querySelector("form");
var enviar = document.getElementById("btn-register");
enviar.addEventListener("click", function (e) {

    e.preventDefault();
    var json = serialize(form);
    console.log(json);

});