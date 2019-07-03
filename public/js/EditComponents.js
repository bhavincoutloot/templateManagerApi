
  function editComponentOfPage(componentIndex) {

      //console.log(JSON.stringify(currPage[componentIndex], undefined, 2));

      var component = currPage[componentIndex];


      var updatedComponent = {};

        updatedComponent['componentId'] = $('#component_id_' + (componentIndex+1)).val();
        if(component.componentId == "C6") updatedComponent['key'] = $('#component_key').val();
        else updatedComponent['key'] = component.key;

        updatedComponent['componentDetails'] = {};

      updatedComponent.componentDetails.header = ($('#component_header_' + (componentIndex+1)).val() ? $('#component_header_' + (componentIndex+1)).val() : "");
      updatedComponent.componentDetails.subHeader = ($('#component_subheader_' + (componentIndex+1)).val() ? $('#component_subheader_' + (componentIndex+1)).val() : "");


      if(component.componentId == "C10") { 
        updatedComponent.componentDetails.limit = $('#component_limit_' + (componentIndex+1)).val();
        updatedComponent.componentDetails.type = $('#component_type_' + (componentIndex+1)).val();        
      }

      if(typeof $('#component_dataurl').val() !== 'undefined') {
        
        updatedComponent.componentDetails.dataUrl = $('#component_dataurl_' + (componentIndex+1)).val();
        updatedComponent.componentDetails.searchUrl = $('#component_searchurl_' + (componentIndex+1)).val();
        
        updatedComponent.componentDetails.data = [];


      } else { 

        updatedComponent.componentDetails.dataUrl = ""; 
        updatedComponent.componentDetails.searchUrl = ""; 
        updatedComponent.componentDetails.data = [];

        var itemCount = 0;

        if(component.componentDetails.hasOwnProperty('data') && component.componentDetails.data.length > 0) {

            component.componentDetails.data.forEach(function(item) {

                if ($("#component_data_"+componentIndex+"_"+itemCount+"").val() != "" ||
                    $("#component_data_title_"+componentIndex+"_"+itemCount+"").val() != "") {
                    

                    var dataItem = {};
                    dataItem.displaySubTitle = $("#component_data_subtitle_"+componentIndex+"_"+itemCount+"").val();
                    //dataItem.displayIcon = item.displayIcon;

                    dataItem.displayIcon = updatablePage[componentIndex].componentDetails.data[itemCount].displayIcon;

                    console.log("Icons: " + updatablePage[componentIndex].componentDetails.data[itemCount].displayIcon);

                    dataItem.displayId = $("#component_data_"+componentIndex+"_"+itemCount+"").val();
                    dataItem.displayTitle = $("#component_data_title_"+componentIndex+"_"+itemCount+"").val();

                    updatedComponent.componentDetails.data.push(dataItem);

                } /* else {
                    
                    dataItem.displayId = "";
                    dataItem.displayTitle = "";
                } */

      //          console.log($("#component_data_"+itemCount+"").val());
                
                itemCount++;
            });

            while(itemCount < updatablePage[componentIndex].componentDetails.data.length) {

                if ($("#component_data_"+componentIndex+"_"+itemCount+"").val() != "" ||
                    $("#component_data_title_"+componentIndex+"_"+itemCount+"").val() != "") {
                    

                    var dataItem = {};
                    dataItem.displaySubTitle = $("#component_data_subtitle_"+componentIndex+"_"+itemCount+"").val();
                    //dataItem.displayIcon = item.displayIcon;

                    dataItem.displayIcon = updatablePage[componentIndex].componentDetails.data[itemCount].displayIcon;

                    dataItem.displayId = $("#component_data_"+componentIndex+"_"+itemCount+"").val();
                    dataItem.displayTitle = $("#component_data_title_"+componentIndex+"_"+itemCount+"").val();

                    updatedComponent.componentDetails.data.push(dataItem);
                }
                itemCount++;
            }

          }
        }
/*
      console.log($('#component_header').val());
      console.log($('#component_subheader').val());
      console.log($('#component_dataurl').val());

      console.log(allPages.indexOf(currPage));
*/
//      console.log("Old: " + JSON.stringify(component, undefined, 2));
//      console.log("New: " + JSON.stringify(updatedComponent, undefined, 2));

      console.log("OldData: "+JSON.stringify(allPages, undefined, 2));

      var pageLoc = allPages.indexOf(currPage);
      currPage[componentIndex] = updatedComponent;
      allPages[pageLoc] = currPage;

      console.log("Loc: " + pageLoc);

      console.log("NewData: "+JSON.stringify(allPages, undefined, 2));

      $('#pagesList').empty();
      $('#componentList').empty();

      $('#save_changes').css('visibility', 'visible');
      $('#add_template').css('visibility', 'hidden');

      log += 'Data Updated of Component No. ' + (componentIndex+1) + ' of Page No. ' + (pageLoc+1) + ' of Template ' + templateId + ' ,  ';

      displayPagesOfTemplate(allPages);

      //displayPagesToEdit(allPages);
  }


  function moveComponentDown(index) {

    if(index < (currPage.length - 1)) {

      var element = currPage[index];
      currPage.splice(index, 1);
      currPage.splice(index+1, 0, element);
    
    }
    displayComponentsOfPage(allPages.indexOf(currPage));
  }


  function moveComponentUp(index) {

    if(index > 0) {

      var element = currPage[index];
      currPage.splice(index, 1);
      currPage.splice(index-1, 0, element);
    
    }
    displayComponentsOfPage(allPages.indexOf(currPage));
  }
