import {Lista} from './lista.js';
import {bootbox_prompt,bootbox_alert} from './dialog.js';

let lista=null;

export async function insertar_al_inicio(){
    var canvas=document.getElementById('tutorial');
    if(lista==null){
        lista=new Lista(canvas);
    }
    
    var DATO = await bootbox_prompt("ingrese valor de nodo");

    if(DATO==null || DATO==''){
        return;
    }

    try{
        if(lista.buscar(DATO) == true){
            throw new Error("El nodo ya se ingreso anteriormente.");
        }
        lista.inserta_inicio(DATO);
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO);
    }catch(e){
        await bootbox_alert(e.message);
    }

}////////////////////////////////////////////////////////
export async function insertar_al_final(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }

    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        var DATO = await bootbox_prompt("ingrese valor de nodo");
        if(DATO==null){
            return;
        }
        if(lista.buscar(DATO) == true){
            throw new Error("El nodo ya se ingreso anteriormente.");
        }
        lista.inserta_final(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
    }catch(e){
        await bootbox_alert(e.message);
    }

}//////////////////////////////////////////////////////////
export async function insertar_antes_x(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }

    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        var DATO = await bootbox_prompt("ingrese valor de DATO");
        if(DATO==null || DATO==''){
            return;
        }
        if(lista.buscar(DATO) == true){
            throw new Error("El nodo ya se ingreso anteriormente.");
        }
        var X = await bootbox_prompt("ingrese valor de X");
        lista.inserta_antes_X(DATO,X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
    }catch(e){
        await bootbox_alert(e.message);
    }

}/////////////////////////////////////////////////////////
export async function insertar_despues_x(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        var DATO = await bootbox_prompt("ingrese valor de DATO");
        if(DATO==null || DATO==''){
            return;
        }
        if(lista.buscar(DATO) == true){
            throw new Error("El nodo ya se ingreso anteriormente.");
        }
        var X = await bootbox_prompt("ingrese valor de X");
        lista.inserta_despues_X(DATO,X);
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO);
    }catch(e){
        await bootbox_alert(e.message);
    }

}/////////////////////////////////////////////////////////
export async function eliminar_inicio(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        lista.elimina_inicio();
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
        await bootbox_alert("El nodo inicial se elimino satisfactoriamente.");
    }catch(e){
        await bootbox_alert(e.message);
    }    

}/////////////////////////////////////////////////////////
export async function eliminar_ultimo(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }

    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        lista.elimina_ultimo();
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
        await bootbox_alert("El nodo final se elimino satisfactoriamente.");
    }catch(e){
        await bootbox_alert(e.message);
    }

}/////////////////////////////////////////////////////////
export async function eliminar_x(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }

    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        var X = await bootbox_prompt("ingrese valor de X");
        lista.elimina_X(X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
        await bootbox_alert("El nodo "+X+" se elimino satisfactoriamente.");
    }catch(e){
        await bootbox_alert(e.message);
    }

}/////////////////////////////////////////////////////////
export async function eliminar_antes_x(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }

    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        var X = await bootbox_prompt("ingrese valor de X");
        lista.elimina_antes_X(X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
        await bootbox_alert("El nodo anterior a "+X+" se elimino satisfactoriamente.");
    }catch(e){
        await bootbox_alert(e.message);
    }

}/////////////////////////////////////////////////////////
export async function eliminar_despues_x(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }

    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        var X = await bootbox_prompt("ingrese valor de X");
        lista.elimina_despues_X(X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
        await bootbox_alert("El nodo posterior a "+X+" se elimino satisfactoriamente.");
    }catch(e){
        await bootbox_alert(e.message);
    }

}/////////////////////////////////////////////////////////