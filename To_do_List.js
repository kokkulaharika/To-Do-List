// Selecting Dom Elements
const taskinput=document.getElementById("input");
const taskbtn=document.getElementById("button");
const tasklist=document.getElementById("listing");

// Event Listeners for adding a task
taskbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const tasktext=taskinput.value.trim();
    console.log("tasktext: ",tasktext);

  // Check if input is empty or not
    if (tasktext===""){
        alert('please enter a task!');
        return;
    }

    //Creating a new List Item
    const listitem=document.createElement('li');
    listitem.style.display = "flex";
    listitem.style.fontSize="20px";
    listitem.style.justifyContent="space-between";
    listitem.style.alignItems = "center";
    listitem.style.padding = "8px 12px";
    listitem.style.margin = "5px 0";
    listitem.style.backgroundColor = "rgb(215, 235, 32)";
    listitem.style.borderRadius = "5px";
    const taskspan=document.createElement('span');
    taskspan.textContent=tasktext;

    // Creating a delete Button
    const deletebtn=document.createElement('button');
    deletebtn.textContent='Remove';
    deletebtn.style.color='red';
    deletebtn.style.marginRight='500px';
    deletebtn.style.fontSize='20px';
    deletebtn.style.backgroundColor = "#f40b22ff";
    deletebtn.style.border = "none";
    deletebtn.style.padding = "5px 10px";
    deletebtn.style.color = "#f9f9f9ff";
    deletebtn.style.borderRadius = "5px";
    deletebtn.style.cursor = "pointer";

    //Event Listeners for Deleting a task
    deletebtn.addEventListener('click',()=>{
         listitem.remove();
    });

    //Append task text and delete button to the list
    listitem.appendChild(taskspan);
    listitem.appendChild(deletebtn);

    //Append the list item to task list
     tasklist.appendChild(listitem);
     
     //clear the input field
     taskinput.value="";
});