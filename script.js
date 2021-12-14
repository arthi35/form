// var button=document.getElementById('click');
// function click(){
var form=document.createElement('form');
form.setAttribute('action','submit')
var label=document.createElement('label');
label.setAttribute('for','firstname');
label.setAttribute('for','Middlename');
label.setAttribute('for','lastname');
label.setAttribute('for','email');
form.append(label);

var i1=document.createElement('input');
i1.setAttribute('type','text');
i1.setAttribute('name','firstname');
i1.setAttribute('placeholder','firstname');
form.append(i1);
var i4=document.createElement('input');
i4.setAttribute('type','text');
i4.setAttribute('name','Middlename');
i4.setAttribute('placeholder','Middlename');
form.append(i4);
var i2=document.createElement('input');
i2.setAttribute('type','text');
i2.setAttribute('name','lastname');
i2.setAttribute('placeholder','lastname');
form.append(i2);
var i3=document.createElement('input');
i3.setAttribute('type','text');
i3.setAttribute('name','E-mail');
i3.setAttribute('placeholder','E-mail');
form.append(i3);
// var submit=document.createElement('input');
// submit.setAttribute("type","submit");
// submit.setAttribute("value","submit");
// submit.append(form)
function click(){
    let result=document.getElementById("main1").value;
    console.log(result);
    }
document.body.append(form);
// }