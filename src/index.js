import _ from 'lodash'
import printMe from './print.js'

function component () {
    let elm = document.createElement('div');
    elm.innerHTML = 'Hello !' 
    return elm;
}

function addText (text) {
    let node = document.createElement('div')
    node.innerHTML = text
    document.body.appendChild( node )
}

function init () {

}

window.onload = function(){
    document.body.appendChild( component() );
    printMe();
}
