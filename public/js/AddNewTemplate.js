 function process_name() {
   
    template_name = $('#modal_input').val();

    if (template_name) {
        
      $('#pagesList').empty();
      $('#componentList').empty();
      $('#take_template_name_modal').modal('hide');
      $('#main_header').hide();
      $('#searchInput').hide();
      if (template != []) displayPagesOfTemplate(template);

      $('#add_template').css('display', 'none');
      $('#add_page').css('visibility', 'visible');

      $('#add_new_template').css('visibility', 'visible');

      $('#add_page').on('click', function() {
          $('#page_modal').modal('toggle');
      });
    
    } else alert("Please enter template name");
  }



  //------------------------------------------------------------
    

  var items = [];

  function addNewPage() {

    items = [];
    var listItems = "";

    for(var key in selectableComponents) {
      if( selectableComponents.hasOwnProperty(key)) items.push(key);
    }

    var itemIndex = 0;
    items.forEach(function(item) {

      listItems += '<li class="list-group-item"><div class="no_margin"><div id="innerDiv" class="no_margin"><div><b>Page : '+item+'</b></div></div><div class="row no_margin"><div class="col-md-4"></div><div class="col-md-8"><div style="float:right;"><div class="row no_margin" style="cursor: pointer"><div class="list_button" style="margin-left:0px;" onclick="useThisPage('+itemIndex+')">Use</div></div></div></div></div></li>';
      itemIndex++;
    });

    $('#selectComponentList').empty();
    $('#selectComponentList').append(listItems);
    $('#selectComponentList').show();

    $('[id=add_component]').css('visibility', 'hidden');
    $('[id=save_component]').css('visibility', 'visible');
    $('[id = complete_screen]').prop('disabled', false);

    addComponents();
  }


  function addComponentsToPage(index) {


    items = [];
    var listItems = "";
    pageInsertIndex = index;

    for(var key in selectableComponents) {
      if( selectableComponents.hasOwnProperty(key)) items.push(key);
    }

    var itemIndex = 0;
    items.forEach(function(item) {

      var itemId = selectableComponents[item][0].componentId;

      if (singlePageComponents.includes(itemId)) {itemIndex++; return;}

      listItems += '<li class="list-group-item"><div class="no_margin"><div id="innerDiv" class="no_margin"><div><b>Component : '+item+'</b></div></div><div class="row no_margin"><div class="col-md-4"></div><div class="col-md-8"><div style="float:right;"><div class="row no_margin" style="cursor: pointer"><div class="list_button" style="margin-left:0px;" onclick="useThisComponent('+itemIndex+')">Use</div></div></div></div></div></li>';
      itemIndex++;
    });

    $('#selectComponentList').empty();
    $('#selectComponentList').append(listItems);
    $('#selectComponentList').show();

    currPage = allPages[index];
    $('[id=save_component]').css('visibility', 'hidden');
    $('[id=add_component]').css('visibility', 'visible');
    $('[id = complete_screen]').prop('disabled', true);

    addComponents();
  }



  function addComponents() {

      $('#page_modal').modal('hide');
      $('#templateList').hide();
      $('#pagesList').hide();
      $('#componentList').hide();
      $('#main_header').hide();
      $('#searchInput').hide();

      $('#componentPicker').css('display', 'block');

      console.log("Template: " + JSON.stringify(template, undefined, 2));
  }


  function deletePage(index) {

    if(confirm("Are you sure? Do you want to delete this page?")) {
        log += ' Page No. ' + (index+1) + ' deleted , ';
        allPages.splice(index, 1);
    }
    $('#pagesList').empty(); 
    displayPagesOfTemplate(allPages);

  }


  function useThisPage(itemIndex) {

    var currentTemplate = selectableComponents[items[itemIndex]];

    if(pageInsertIndex == -1) template.push(currentTemplate);
    else template.splice(pageInsertIndex, 0, currentTemplate);
    

    $('#componentPicker').css('display', 'none');

    console.log("Index: " + pageInsertIndex);
    console.log("Temp:"+JSON.stringify(template, undefined, 2));

    displayPagesOfTemplate(template);

  }

  function useThisComponent(itemIndex) {

    var component = selectableComponents[items[itemIndex]];
  
    template[pageInsertIndex].push(component[0]);

    $('#componentPicker').css('display', 'none');

    console.log("Updated: " + JSON.stringify(template, undefined, 2));

    displayPagesOfTemplate(template);
  }