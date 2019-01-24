function openTL(evt, tab) {
  // Declare all variables
  var i, tabcontent, tablinks;
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("Ltabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("Ltablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tab).style.display = "block";
  evt.currentTarget.className += " active";
	
}

/*-------Changes for the movil version----------------*/
var x, i, j, selElmnt, a, b, c,h,inic=0,closeList;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("Lcustom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  console.log(selElmnt);
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "Lselect-selected Lborder-coners");
  if (inic==0){
            a.setAttribute("id", "defaultOpenTL");
            a.setAttribute("onclick", "openTL(event, 'LTab1')");
    inic=inic+1;
   }
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "Lselect-items Lselect-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("Lsame-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "Lsame-as-selected");
            this.setAttribute("onclick", "openTL(event, 'LTab"+i+"')");
            
            break;
          }
        }
       h.click();
      this.click();
        console.log(h);
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeList=this;
    closeAllSelectTL(closeList);
    this.nextSibling.classList.toggle("Lselect-hide");
    this.classList.toggle("Lselect-arrow-active");
  });
}

function closeAllSelectTL(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("Lselect-items");
  y = document.getElementsByClassName("Lselect-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("Lselect-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("Lselect-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelectTL);
window.addEventListener('load', LoadDefaultPage, false);
function LoadDefaultPage() {
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpenTL").click();
closeAllSelectTL(closeList);
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("Lselect-items");
  y = document.getElementsByClassName("Lselect-selected");
  for (i = 0; i < y.length; i++) {
      y[i].classList.remove("Lselect-arrow-active");
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("Lselect-hide");
    }
  }
}
