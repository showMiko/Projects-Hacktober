let myLead = []
//myLead = JSON.stringify(myLead); // JSON.parse() turn string into an array and JSON.stringify() turn array into a string

const inputEL = document.getElementById("input-el");  //const make variable constant so that it can't be reassigned
const ulEL = document.getElementById("ul-el");
const saved = document.getElementById("save-btn");
const deleted = document.getElementById("delete-btn");
const saved_tab = document.getElementById("save-tab-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage)
{
    myLead = leadsFromLocalStorage;
    render(myLead);
}

saved_tab.addEventListener("click",function(){
    //grab the url of current tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){  //active tab: the tab which is opened at that time,
        myLead.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify( myLead ));
        render(myLead);
    }); 
})


function render(leads){
    let listItems = "";
    for ( let i = 0; i < leads.length; i++)
    {
        // listItems += "<li><a target = '_blank' href=' " + leads[i] + " '>" + leads[i] + "</a></li> "; //to make list in ul through js and put values in it, we use "<li>" "</li>" and to use those as html tags we use innerHTML
        //template strings: use ``.create new lines(line break) in b/w a string, both in input and output time, use no + only ${}
        listItems += `
            <li>
                <a target = '_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;
        //create element
       //set text content
       //append to ul
    //    const listel = document.createElement("li");
    //    listel.textContent = myLead[i];
    //    ulEL.append(li);
    }

    ulEL.innerHTML = listItems;
}


//event listener
saved.addEventListener("click", function(){
    myLead.push(inputEL.value); //.value to get data from input field
    inputEL.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLead) ); //localStorage store only strings.
    render(myLead);
})

deleted.addEventListener("dblclick", function(){
    localStorage.clear();
    myLead = [];
    render(myLead); //clear ulEL
})



