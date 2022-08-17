var main=document.createElement("form");
main.setAttribute("class","form");

var firstname= labelt("label","for","fname","Firstname");
var b1= linebreak("br");
var fin =inp("input","for" , "text","id","fname");
var b2=linebreak("br");
var lastname= labelt("label","for","lname","Lastname");
var b3=linebreak("br");
var lin= inp("input","for","text","id","lname");
var b4=linebreak("br");
var address= labelt("label","for","address","Address");
var b5=linebreak("br");
var addressin= inp("input","for","text","id","address");
var b6=linebreak("br");
var pincode= labelt("label","for","pin","Pincode");
var b7=linebreak("br");
var pinin= inp("input","for","number","id","pin");
var b8=linebreak("br");
var gender= labelt("label","for","gender","Gender");
var b9=linebreak("br");
var genderin= inp("input","for","text","id","gender");

var b10=linebreak("br");
var food= labelt("label","for","food","Food");
var b11=linebreak("br");
var foodin= inp("input","for","text","id","food");
var b12=linebreak("br");
var state= labelt("label","for","state","State");
var b13=linebreak("br");
var statein= inp("input","for","text","id","state");
var b14=linebreak("br");
var country= labelt("label","for","country","Country");
var b15=linebreak("br");
var countryin= inp("input","for","text","id","country");
var b16=linebreak("br");
var submit=inp("button","type","submit","id","button");
submit.innerHTML="Submit";
submit.addEventListener("click",addrow);

main.append(firstname, b1,fin,b2,lastname,b3,lin,b4,address,b5,addressin,b6,pincode,b7,pinin,b8,gender,b9,genderin,b10,food,b11,foodin,b12,state,b13,statein,b14,country,b15,countryin,b16,submit);


function labelt(tagn, tagattri, tagattrival, con) {
    var lab = document.createElement(tagn);
    lab.setAttribute(tagattri, tagattrival);
    lab.innerHTML = `${con}<sup>*</sup>`;
    return lab;
}
 
function inp(tagn, tagattri, tagattrival, tagattri1, tagattrival1) {
    var give = document.createElement(tagn);
    give.setAttribute(tagattri, tagattrival);
    give.setAttribute(tagattri1, tagattrival1);
    return give;
}

function linebreak(brk)
{
    var bk=document.createElement(brk);
    return bk;
}

var list1=[];
var list2=[];
var list3=[];
var list4=[];
var list5=[];
var list6=[];
var list7=[];
var list8=[];
var n=1;
var x=0;


var table=document.createElement("table");
    table.classList.add("table", "table-striped");
    table.id="mytable";

    var thead=document.createElement("thead");
    thead.id="thead";

    table.appendChild(thead);

    var headrow=document.createElement("tr");
    
    

    var heading=["Firstname","Lastname","Address","Pincode","Gender","Food","State","country"];
    heading.forEach(ele=>{
        var thelement=document.createElement("th");
        thelement.innerHTML=ele;
        headrow.append(thelement);
        thelement.setAttribute("scope","col");
    });
    thead.append(headrow);

    document.body.append(main,table);

function addrow(){
    var row = document.getElementById("mytable");
    var newrow = row.insertRow(n);

    list1[x] = document.getElementById("fname").value;
    list2[x] = document.getElementById("lname").value;
    list3[x] = document.getElementById("address").value;
    list4[x] = document.getElementById("pin").value;
    list5[x] = document.getElementById("gender").value;
    list6[x] = document.getElementById("food").value;
    list7[x] = document.getElementById("state").value;
    list8[x] = document.getElementById("country").value;

    var cel1 = newrow.insertCell(0);
    var cel2 = newrow.insertCell(1);
    var cel3 = newrow.insertCell(2);
    var cel4 = newrow.insertCell(3);
    var cel5 = newrow.insertCell(4);
    var cel6 = newrow.insertCell(5);
    var cel7 = newrow.insertCell(6);
    var cel8 = newrow.insertCell(7);

    cel1.innerHTML=list1[x];
    cel2.innerHTML=list2[x];
    cel3.innerHTML=list3[x];
    cel4.innerHTML=list4[x];
    cel5.innerHTML=list5[x];
    cel6.innerHTML=list6[x];
    cel7.innerHTML=list7[x];
    cel8.innerHTML=list8[x];

    x++;
    n++;

} 
 
