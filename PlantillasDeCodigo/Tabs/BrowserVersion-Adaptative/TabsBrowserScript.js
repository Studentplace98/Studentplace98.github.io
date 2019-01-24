function openBVA(evt, tab,url) {
  // Declare all variables
  var i, tabcontent, tablinks;
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontentBVA");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinksBVA");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tab).style.display = "block";
  evt.currentTarget.className += " active";
  clicksBVA(url);
	
}

function clicksBVA(url){
var web,bar;
  web=document.getElementById("sourceBVA");
  web.setAttribute("href",url);
  web=document.getElementById("sourcemBVA");
  web.setAttribute("href",url);
  //web.innerText=url; //inserta el texto del enlace
  bar=document.getElementById("search-barBVA");
  bar.setAttribute("value",url);
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpenBVA").click();


/*
   selElmnt = x[0].getElementsByTagName("select")[0];
   var z=selElmnt.options[2];
    console.log(z.value);
    
    values[i]=z;
*/


/*-------Changes for the movil version----------------*/
var x, i, j, selElmnt, a, b, c,h,values=[],z;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-selectBVA");
function url_valueBVA(){
    selElmnt = x[0].getElementsByTagName("select")[0];
    for(i=0;i<selElmnt.length;i++){
    values.push(selElmnt.options[i].value);
    }
}
url_valueBVA();
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selectedBVA");
  a.setAttribute("id", "border-conersBVA");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-itemsBVA select-hideBVA");
  //console.log(selElmnt.innerHTML);
  for (j = 1; j < selElmnt.length; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    //console.log(c.innerHTML);
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            y = this.parentNode.getElementsByClassName("same-as-selectedBVA");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selectedBVA");
            this.setAttribute("onclick", "openBVA(event, 'BTab"+i+"','"+values[i]+"')");
            break;
          }
        }
       h.click();
      this.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelectBVA(this);
    this.nextSibling.classList.toggle("select-hideBVA");
    this.classList.toggle("select-arrow-activeBVA");
  });
}

function closeAllSelectBVA(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-itemsBVA");
  y = document.getElementsByClassName("select-selectedBVA");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-activeBVA");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hideBVA");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelectBVA);
