/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder*/

/*
    {file:string,action:string,actionSet:string}
*/

function hostScript(obj){
    switch(obj.funcType){
        case "AIAction":
            AIdropped(obj);
        break;

        default:
        
        break;
    }
    return true;
}

function AIdropped(obj){
    try{
        var file = new File(obj.file);
        app.open(file);
        app.doScript(obj.action,obj.actionSet);/*action , set*/
    }catch(e){
        alert(e);
    }
}
