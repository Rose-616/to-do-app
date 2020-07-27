var list =document.getElementById('list');
 function addItem(){
     var input= document.getElementById('inpu');
     var li = document.createElement('li');
     var liText =document.createTextNode(input.value);
     
     li.appendChild(liText)

     //del button
     var delBtn = document.createElement('button')
     var btnText = document.createTextNode('DELETE');
     delBtn.appendChild(btnText);

     //edit button
    //  var editBtn =document.createElement('button');
     var editIcon = document.createElement('i')
     var icon2 = editIcon.setAttribute("class","fa fa-pencil-square-o");
     var icon3 =editIcon.setAttribute("aria-hidden","true");
    //  editBtn.appendChild(editIcon);
     li.appendChild(editIcon);

     var editButton = editIcon.setAttribute("onclick",'edit(this)')
     var lisText =li.setAttribute('class',"size")
  

     
     var editText = document.createTextNode('EDIT');
    


     li.appendChild(delBtn)
    
     var btn = delBtn.setAttribute("onclick","del(this)");
     var btn2 = delBtn.setAttribute('class','color')
     list.appendChild(li)
     input.value=""
    
    
 }


 function del(h){
    h.parentNode.remove();
 }

 function delAll(){
     list.innerHTML=''
 }
 function edit(e){
  var a= prompt('enter updated value',e.parentNode.firstChild.nodeValue);
  e.parentNode.firstChild.nodeValue= a;

 }