 function searchCategoryFunction() {
    var div, input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("categoryInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("categoryListContainer");
    div = ul.getElementsByTagName("div");
    li = div[0].getElementsByTagName("li");
    console.log(li);
    for (i = 0; i < li.length; i++) {
        console.log("Cat: " + li[i].innerText + li[i].textContent);
        txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
  }


  function getCategoryName() {

    return new Promise((resolve, reject) => {

        $.ajax({
                url: '/test/getCategoryList',
                type: 'POST',
                dataType: 'json',
                success: function(data) {

                  console.log(data);

                  var catList = data.categories;

//                  if(!catList == 'None') {

                      var listData = '';
                      var index = 0;
                      catList.forEach(function(item) {
                        listData += '<li id='+index+' onclick=selectCategory(this.id)>' + item + '</li>';
                        index++;
                      });
                      $('#categoryList').append(listData);

                      $('#modalCategoryList').modal('toggle');
                      resolve("Success");

                  //} else {
                    //alert("Can't fetch Category List!");
                    //reject("Failed");
                    //$('#refresh').click();
                  //}
                }
      });

    });
  }


function selectCategory(id) {
  var text = $('#'+id+'').text()
  var str = text.split('-');

  $('#modalCategoryList').modal('toggle');

                  var component = updatablePage[currComponentIndex];
                  var componentIndex = currComponentIndex;

                  var updatedComponent = {};

                          updatedComponent['componentId'] = $('#component_id_' + (componentIndex+1)).val();
                          if(component.componentId == "C6") updatedComponent['key'] = $('#component_key').val();
                          else updatedComponent['key'] = component.key;

                          updatedComponent['componentDetails'] = {};

                        updatedComponent.componentDetails.header = ($('#component_header_' + (componentIndex+1)).val() ? $('#component_header_' + (componentIndex+1)).val() : "");
                        updatedComponent.componentDetails.subHeader = ($('#component_subheader_' + (componentIndex+1)).val() ? $('#component_subheader_' + (componentIndex+1)).val() : "");



                        updatedComponent.componentDetails.dataUrl = "";
                        updatedComponent.componentDetails.searchUrl = "";
                        updatedComponent.componentDetails.data = [];

                        var itemCount = 0;

                        component.componentDetails.data.forEach(function(item) {

                            if ($("#component_data_"+componentIndex+"_"+itemCount+"").val() != "" ||
                                $("#component_data_title_"+componentIndex+"_"+itemCount+"").val()) {


                                var dataItem = {};
                                dataItem.displaySubTitle = $("#component_data_subtitle_"+componentIndex+"_"+itemCount+"").val();
                                dataItem.displayIcon = updatablePage[componentIndex].componentDetails.data[itemCount].displayIcon;


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


                        var dataItem = {};
                        dataItem.displaySubTitle = "";
                        dataItem.displayIcon = ""

                        dataItem.displayId = str[1].trim();
                        dataItem.displayTitle = str[0].trim();

                        updatedComponent.componentDetails.data.push(dataItem);

                      var pageLoc = updatablePages.indexOf(updatablePage);
                      updatablePage[componentIndex] = updatedComponent;
                      updatablePages[pageLoc] = updatablePage;


                      console.log("New: "+JSON.stringify(updatablePages, undefined, 2));

                      $('#pagesList').empty();
                      $('#componentList').empty();

                      $('#add_template').css('visibility', 'hidden');
                      $('#loader').css('display', 'hidden');

                      log += 'New data added to Component No. ' + (componentIndex+1) + ' of Page No. ' + (pageLoc+1) + ' of Template ' + templateId + ' ,  ';

                      displayComponentsAfterEdit(pageLoc);
}


async  function addDataInComponent(componentIndex) {

      //console.log(JSON.stringify(currPage[componentIndex], undefined, 2));

      var component = updatablePage[componentIndex];

      currComponentIndex = componentIndex;

      var status = await getCategoryName();

      /*
      var updatedComponent = {};

        updatedComponent['componentId'] = component.componentId;
        updatedComponent['key'] = component.key;
        updatedComponent['componentDetails'] = {};

      updatedComponent.componentDetails.header = $('#component_header').val();
      updatedComponent.componentDetails.subHeader = $('#component_subheader').val();


        updatedComponent.componentDetails.dataUrl = "";
        updatedComponent.componentDetails.searchUrl = "";
        updatedComponent.componentDetails.data = [];

        var itemCount = 0;

        component.componentDetails.data.forEach(function(item) {

            if ($("#component_data_"+componentIndex+"_"+itemCount+"").val() != "" ||
                $("#component_data_title_"+componentIndex+"_"+itemCount+"").val()) {


                var dataItem = {};
                dataItem.displaySubTitle = $("#component_data_subtitle_"+componentIndex+"_"+itemCount+"").val();
                dataItem.displayIcon = updatablePage[componentIndex].componentDetails.data[itemCount].displayIcon;


                dataItem.displayId = $("#component_data_"+componentIndex+"_"+itemCount+"").val();
                dataItem.displayTitle = $("#component_data_title_"+componentIndex+"_"+itemCount+"").val();

                updatedComponent.componentDetails.data.push(dataItem);

            } /* else {

                dataItem.displayId = "";
                dataItem.displayTitle = "";
            } */

  //          console.log($("#component_data_"+itemCount+"").val());
            /*
            itemCount++;
        });

        var dataItem = {};
        dataItem.displaySubTitle = "";
        dataItem.displayIcon = ""

        dataItem.displayId = "";
        dataItem.displayTitle = "";

        updatedComponent.componentDetails.data.push(dataItem);

      var pageLoc = updatablePages.indexOf(updatablePage);
      updatablePage[componentIndex] = updatedComponent;
      updatablePages[pageLoc] = updatablePage;


      console.log("New: "+JSON.stringify(allPages, undefined, 2));

      $('#pagesList').empty();
      $('#componentList').empty();

      $('#refresh').css('visibility', 'hidden');
      $('#add_template').css('visibility', 'hidden');

      log += 'New data added to Component No. ' + (componentIndex+1) + ' of Page No. ' + (pageLoc+1) + ' of Template ' + templateId + ' ,  ';

      displayEditedComponents(pageLoc);
*/
      //displayPagesToEdit(allPages);
  }
