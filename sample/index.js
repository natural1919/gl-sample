var openWindow = null;

function gen_node(template_id_string, params_object){
    var template_node = document.getElementById(template_id_string);
    var warper_node = document.createElement("div");
    var template_generate = _.template(template_node.innerText);
    warper_node.innerHTML =  template_generate(params_object);
    return warper_node;
}


window.onload = function(){
    openWindow = document.getElementById("openWindow");
    openWindow.onclick = function(){
        console.log("Click");
        
        /*
        var hello = document.getElementById("hello");
        var warp = document.createElement("div");
        warp.innerHTML = hello.innerText;
        document.body.appendChild(warp);

        var box = document.getElementById("box");
        var box_gen = _.template(box.innerText);
        var boxWarper = document.createElement("div");
        boxWarper.innerHTML = box_gen({ width: 100, height: 100 });
        document.body.appendChild(boxWarper);
        */
        
        document.body.appendChild(gen_node("box", {width: 200, height: 200}))

    }
}