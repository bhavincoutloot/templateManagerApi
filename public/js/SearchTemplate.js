  function searchFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("listContainer");
    li = $(".list-group-item");
    for (i = 0; i < li.length; i++) {
        outerDiv = li[i].getElementsByTagName("div")[0];
        innerDiv = outerDiv.getElementsByTagName("div")[0];
        id = innerDiv.getElementsByTagName("div")[0];
        category = innerDiv.getElementsByTagName("div")[1];
        //console.log("Cat: " + category.innerText + category.textContent);
        txtValue = category.textContent || category.innerText;
        txtValue2 = id.textContent || id.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}