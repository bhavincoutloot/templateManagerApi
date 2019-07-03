function process_c10() {

  var component = {};

  var c10_list_header = $("#c10_list_header").val();
  var c10_list_subHeader = $("#c10_list_subHeader").val();
  var c10_key = $("#c10_key").val();
  var c10_type = $("#c10_type").val();
  var c10_limit = $('#c10_limit').val();

//        alert(c10_list_header + "|" + c10_list_subHeader + "|" + c10_key);



  component.componentId = "C10";


  if ($('#c10_iscompulsory').is(':checked')) {
    component.compulsory = 1;

  } else {
    component.compulsory = 0;
  }


  component.key = c10_key;
  component.componentDetails = {};


  component.componentDetails.header = $("#c10_list_header").val();
  component.componentDetails.subHeader = $("#c10_list_subHeader").val();
  component.componentDetails.data = [];
  component.componentDetails.type = c10_type;
  component.componentDetails.limit = c10_limit;


  var currentPage = [];
  console.log(component);
  currentPage.push(component);
          if(pageInsertIndex == -1) template.push(currentPage);
        else template.splice(pageInsertIndex, 0, currentPage);
  console.log("FinalTemplate =>", JSON.stringify(template, undefined, 2));

  var count = 1;

  //pageComponents += '<li class="list-group-item"><div class="no_margin"><div class="no_margin"><div><b>Component No. : '+count+'</b></div><div>Component ID : '+component.componentId+'</div><div>Header : '+component.componentDetails.header+'</div><div>DataUrl : '+component.componentDetails.dataUrl+'</div></div></li>';


//        $('#componentList').append(template);
//        var node = document.createElement("LI");                 // Create a <li> node
//        node.appendChild(template);                              // Append the text to <li>
//        document.getElementById("myList").innerHTML = template;
//        $('#componentList').show();

  $("#c10_close").click();
  $('#componentPicker').css('display', 'none');
  $('#pagesList').empty();


  displayPagesOfTemplate(template);

}


function add_c10_currentPage() {

  var component = {};

  var c10_list_header = $("#c10_list_header").val();
  var c10_list_subHeader = $("#c10_list_subHeader").val();
  var c10_key = $("#c10_key").val();
  var c10_type = $("#c10_type").val();
  var c10_limit = $('#c10_limit').val();

//  alert(c10_list_header + "|" + c10_list_subHeader + "|" + c10_key);



  component.componentId = "C10";


  if ($('#c10_iscompulsory').is(':checked')) {
    component.compulsory = 1;

  } else {
    component.compulsory = 0;
  }


  component.key = c10_key;
  component.componentDetails = {};


  component.componentDetails.header = $("#c10_list_header").val();
  component.componentDetails.subHeader = $("#c10_list_subHeader").val();
  component.componentDetails.data = [];
  component.componentDetails.type = c10_type;
  component.componentDetails.limit = c10_limit;


  console.log(component);


  var index = template.indexOf(currPage);
  currPage.push(component);
  template[index] = currPage;

  //template[template.length - 1].push(component);
  console.log("FinalTemplate =>", template);

  $("#c10_close").click();

  $('#componentPicker').css('display', 'none');
  $('#pagesList').empty();


  displayPagesOfTemplate(template);

  //displayComponents(template[template.length-1]);

}