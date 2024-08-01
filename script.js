function submit() {
    const inp1 = document.getElementById("input1");
    const inp2 = document.getElementById("input2");
    const sel = document.getElementById("sel");
    const dateinp = document.getElementById("date1");
    const data=document.getElementById("data");

    if (inp1.value === "") {
        alert("Enter the Expense Name...");
        return false;
    }
    else if (inp2.value === "") {
        alert("Enter the Amount...");
        return false;
    }
    else if (sel.value === "opt1") {
        alert("Select a Category...");
        return false;
    }
    else if (dateinp.value === "") {
        alert("Select the date...");
        return false;
    }

    const trow=document.createElement("tr");
    const tname=document.createElement("td");
    const tamount=document.createElement("td");
    const tcategory=document.createElement("td");
    const tdate=document.createElement("td");
    const taction=document.createElement("td");

    const reset=document.createElement("button");
    reset.textContent="Reset";
    reset.onclick=function(){
        inp1.value="";
        inp2.value="";
        sel.value="Select One";
        dateinp.value="";
    }
    
    const del=document.createElement("button");
    del.textContent="Delete";
    del.onclick=function(){
        trow.remove();
    }

    tname.textContent=inp1.value;
    tamount.textContent=inp2.value;
    tcategory.textContent=sel.value;
    tdate.textContent=dateinp.value;

    trow.appendChild(tname);
    trow.appendChild(tamount);
    trow.appendChild(tcategory);
    trow.appendChild(tdate);
    taction.appendChild(reset);
    taction.appendChild(del);
    trow.appendChild(taction);
    data.appendChild(trow);

    const tot=document.getElementById("data1");
    tot.innerHTML="Total: "+inp2.value;

    return false;
}



