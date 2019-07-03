
function displayComponentsOfPage(pageIndex) {

	      components = allPages[pageIndex];

//      $('#save_changes').css('visibility', 'hidden');

    

    //  console.log(components);

      currPage = allPages[pageIndex];


      updatablePages = JSON.parse(JSON.stringify(allPages));
      updatablePage = JSON.parse(JSON.stringify(currPage));


      var pageComponents = '';
      var count = 1;

      //console.log("Original: " + currPage);

      components.forEach(function(component) {

          if(component.componentDetails.hasOwnProperty('data') && component.componentDetails.data.length > 0) {
          
            if (component.componentId == "C10") {

              pageComponents += '<li class="list-group-item" ><div class="no_margin"><div class="no_margin"><div class="m-2"><b>Component No. : '+count+'</b></div><div class="m-2">Component ID : '+component.componentId+'</div><div class="m-2">Header : <input id="component_header_'+count+'" type="text" value="'+component.componentDetails.header+'" /></div><div class="m-2">Sub-Header : <input id="component_subheader_'+count+'" type="text" value="'+component.componentDetails.subHeader+'" /></div><div class="m-2">Key : <input id="component_key_'+count+'" type="text" value="'+component.key+'" /></div><div class="m-2">Limit : <input id="component_limit_'+count+'" type="text" value="'+component.componentDetails.limit+'" /></div><div class="m-2">Type : <input id="component_type_'+count+'" type="text" value="'+component.componentDetails.type+'" /></div><div style="float:right;"><div class="list_button" style="margin-left:5px;" onclick="removeComponent('+(pageIndex)+', '+(count-1)+');">Remove</div></div></div><br><table id="data_table">';

            } else {
             
              pageComponents += '<li class="list-group-item" ><div class="no_margin"><div class="no_margin"><div class="m-2"><b>Component No. : '+count+'</b></div><div class="m-2">Component ID : <input id="component_id_'+count+'" type="text" value="'+component.componentId+'" /></div><div class="m-2">Header : <input id="component_header_'+count+'" type="text" value="'+component.componentDetails.header+'" /></div><div class="m-2">Sub-Header : <input id="component_subheader_'+count+'" type="text" value="'+component.componentDetails.subHeader+'" /></div><div class="m-2">Key : <input id="component_key_'+count+'" type="text" value="'+component.key+'" /></div><div style="float:right;"><div class="list_button" style="margin-left:5px;" onclick="removeComponent('+(pageIndex)+', '+(count-1)+');">Remove</div></div></div><br><table id="data_table">';
      
            }
            
            var dataItems = '<tr> <td> Title </td> <td> Id </td> <td> Sub Title </td> <td> Icon </td> </tr>';
            var itemCount = 0;

            component.componentDetails.data.forEach(function(item) {


                dataItems += '<tr> <td><input id="component_data_title_'+(count-1)+'_'+itemCount+'" type="text" value="'+item.displayTitle+'" /></td> <td><input id="component_data_'+(count-1)+'_'+itemCount+'" type="text" value="'+item.displayId+'" /></td> <td><input id="component_data_subtitle_'+(count-1)+'_'+itemCount+'" type="text" value="'+item.displaySubTitle+'" /></td> <td><a id="component_data_icon_'+(count-1)+'_'+itemCount+'" href="'+ (item.displayIcon ? item.displayIcon : "#" ) + '"> '+ (item.displayIcon ? "Click to show Icon" : "No Image to display" ) +' </a></td><td><input onchange="changeIcon('+(count-1)+','+itemCount+')" id="component_change_data_icon_'+(count-1)+'_'+itemCount+'" type="file" /></td> </tr>';

                console.log(item.displayIcon ? item.displayIcon : '#');

                itemCount++;
            });

            pageComponents += dataItems + '</table><div class="row no_margin"><div><div><div class="row no_margin" style="cursor: pointer"><div style="float:left"><div class="list_button" style="margin-left:5px; display:inline-block;" onclick="editComponentOfPage('+(count-1)+');">Save</div><div class="list_button" style="margin-left:5px; display:inline-block;" onclick="addDataInComponent('+(count-1)+');">Add Data</div><div class="list_button" style="margin-left:5px; display:inline-block;" onclick="moveComponentUp('+(count-1)+');">Up</div><div class="list_button" style="margin-left:5px; display:inline-block;" onclick="moveComponentDown('+(count-1)+');">Down</div></div></div></div></div></div></div></li>';


          } else {

            if (component.componentId == "C10") {

              pageComponents += '<li class="list-group-item" ><div class="no_margin"><div class="no_margin"><div class="m-2"><b>Component No. : '+count+'</b></div><div class="m-2">Component ID : '+component.componentId+'</div><div class="m-2">Header : <input id="component_header_'+count+'" type="text" value="'+component.componentDetails.header+'" /></div><div class="m-2">Sub-Header : <input id="component_subheader_'+count+'" type="text" value="'+component.componentDetails.subHeader+'" /></div><div class="m-2">Key : <input id="component_key_'+count+'" type="text" value="'+component.key+'" /></div><div class="m-2">Limit : <input id="component_limit_'+count+'" type="text" value="'+component.componentDetails.limit+'" /></div><div class="m-2">Type : <input id="component_type_'+count+'" type="text" value="'+component.componentDetails.type+'" /></div><div style="float:right;"><div class="list_button" style="margin-left:5px;" onclick="removeComponent('+(pageIndex)+', '+(count-1)+');">Remove</div></div></div><div class="row no_margin"><div><div><div class="row no_margin" style="cursor: pointer"><div style="float:left"><div class="list_button" style="margin-left:5px; display:inline-block;" onclick="editComponentOfPage('+(count-1)+');">Save</div><div class="list_button" style="margin-left:5px; display:inline-block;" onclick="moveComponentUp('+(count-1)+');">Up</div><div class="list_button" style="margin-left:5px; display:inline-block;" onclick="moveComponentDown('+(count-1)+');">Down</div></div></div></div></div></div></div></li>';

            } else {

              pageComponents += '<li class="list-group-item"><div class="no_margin"><div class="no_margin"><div class="m-2"><b>Component No. : '+count+'</b></div><div class="m-2">Component ID : <input id="component_id_'+count+'" type="text" value="'+component.componentId+'" /></div><div class="m-2">Header : <input id="component_header_'+count+'" type="text" value="'+component.componentDetails.header+'" /></div><div class="m-2">Sub-Header : <input id="component_subheader_'+count+'" type="text" value="'+component.componentDetails.subHeader+'" /></div><div class="m-2">Key : <input id="component_key_'+count+'" type="text" value="'+component.key+'" /></div><div class="m-2">DataUrl : <input id="component_dataurl_'+count+'" type="text" value="'+component.componentDetails.dataUrl+'" /></div><div class="m-2">SearchUrl : <input id="component_searchurl_'+count+'" type="text" value="'+component.componentDetails.searchUrl+'" /></div><div class="row no_margin"><div><div><div class="row no_margin" style="cursor: pointer"><div style="float:left"><div class="list_button" style="margin-left:5px;" onclick="editComponentOfPage('+(count-1)+');">Save</div><div class="list_button" style="margin-left:5px;" onclick="removeComponent('+(pageIndex)+', '+(count-1)+');">Remove</div><div class="list_button" style="margin-left:5px; display:inline-block;" onclick="moveComponentUp('+(count-1)+');">Up</div><div class="list_button" style="margin-left:5px; display:inline-block;" onclick="moveComponentDown('+(count-1)+');">Down</div></div></div></div></div></div></div></li>';
              
            }
          }

          count++;
      });

      $('#templateList').hide();
      $('#pagesList').hide();

      //$('#componentPicker').css('visibility', 'visible');
      $('#componentList').empty();
      $('#componentList').append(pageComponents);
      $('#componentList').show();
      $('#data_table').DataTable();

      dest = "pages";
      $('#back_button').css('visibility', 'visible');
}



function displayComponentsAfterEdit(pageIndex) {

      components = updatablePages[pageIndex];

//      console.log(components);
      $('#save_changes').css('visibility', 'hidden');

      var pageComponents = '';
      var count = 1;

            components.forEach(function(component) {

          if(component.componentDetails.hasOwnProperty('data') && component.componentDetails.data.length > 0) {
          
            if (component.componentId == "C10") {

              pageComponents += '<li class="list-group-item" ><div class="no_margin"><div class="no_margin"><div class="m-2"><b>Component No. : '+count+'</b></div><div class="m-2">Component ID : '+component.componentId+'</div><div class="m-2">Header : <input id="component_header_'+count+'" type="text" value="'+component.componentDetails.header+'" /></div><div class="m-2">Sub-Header : <input id="component_subheader_'+count+'" type="text" value="'+component.componentDetails.subHeader+'" /></div><div class="m-2">Key : <input id="component_key_'+count+'" type="text" value="'+component.key+'" /></div><div class="m-2">Limit : <input id="component_limit_'+count+'" type="text" value="'+component.componentDetails.limit+'" /></div><div class="m-2">Type : <input id="component_type_'+count+'" type="text" value="'+component.componentDetails.type+'" /></div><div style="float:right;"><div class="list_button" style="margin-left:5px;" onclick="removeComponent('+(pageIndex)+', '+(count-1)+');">Remove</div></div></div><br><table id="data_table">';

            } else {
             
              pageComponents += '<li class="list-group-item" ><div class="no_margin"><div class="no_margin"><div class="m-2"><b>Component No. : '+count+'</b></div><div class="m-2">Component ID : <input id="component_id_'+count+'" type="text" value="'+component.componentId+'" /></div><div class="m-2">Header : <input id="component_header_'+count+'" type="text" value="'+component.componentDetails.header+'" /></div><div class="m-2">Sub-Header : <input id="component_subheader_'+count+'" type="text" value="'+component.componentDetails.subHeader+'" /></div><div class="m-2">Key : <input id="component_key_'+count+'" type="text" value="'+component.key+'" /></div><div style="float:right;"><div class="list_button" style="margin-left:5px;" onclick="removeComponent('+(pageIndex)+', '+(count-1)+');">Remove</div></div></div><br><table id="data_table">';
      
            }
            
            var dataItems = '<tr> <td> Title </td> <td> Id </td> <td> Sub Title </td> <td> Icon </td> </tr>';
            var itemCount = 0;

            component.componentDetails.data.forEach(function(item) {


                dataItems += '<tr> <td><input id="component_data_title_'+(count-1)+'_'+itemCount+'" type="text" value="'+item.displayTitle+'" /></td> <td><input id="component_data_'+(count-1)+'_'+itemCount+'" type="text" value="'+item.displayId+'" /></td> <td><input id="component_data_subtitle_'+(count-1)+'_'+itemCount+'" type="text" value="'+item.displaySubTitle+'" /></td> <td><a id="component_data_icon_'+(count-1)+'_'+itemCount+'" href="'+ (item.displayIcon ? item.displayIcon : "#" ) + '"> '+ (item.displayIcon ? "Click to show Icon" : "No Image to display" ) +' </a></td><td><input onchange="changeIcon('+(count-1)+','+itemCount+')" id="component_change_data_icon_'+(count-1)+'_'+itemCount+'" type="file" /></td> </tr>';

                console.log(item.displayIcon ? item.displayIcon : '#');

                itemCount++;
            });

            pageComponents += dataItems + '</table><div class="row no_margin"><div><div><div class="row no_margin" style="cursor: pointer"><div style="float:left"><div class="list_button" style="margin-left:5px; display:inline-block;" onclick="editComponentOfPage('+(count-1)+');">Save</div><div class="list_button" style="margin-left:5px; display:inline-block;" onclick="addDataInComponent('+(count-1)+');">Add Data</div><div class="list_button" style="margin-left:5px; display:inline-block;" onclick="moveComponentUp('+(count-1)+');">Up</div><div class="list_button" style="margin-left:5px; display:inline-block;" onclick="moveComponentDown('+(count-1)+');">Down</div></div></div></div></div></div></div></li>';


          } else {

            if (component.componentId == "C10") {

              pageComponents += '<li class="list-group-item" ><div class="no_margin"><div class="no_margin"><div class="m-2"><b>Component No. : '+count+'</b></div><div class="m-2">Component ID : '+component.componentId+'</div><div class="m-2">Header : <input id="component_header_'+count+'" type="text" value="'+component.componentDetails.header+'" /></div><div class="m-2">Sub-Header : <input id="component_subheader_'+count+'" type="text" value="'+component.componentDetails.subHeader+'" /></div><div class="m-2">Key : <input id="component_key_'+count+'" type="text" value="'+component.key+'" /></div><div class="m-2">Limit : <input id="component_limit_'+count+'" type="text" value="'+component.componentDetails.limit+'" /></div><div class="m-2">Type : <input id="component_type_'+count+'" type="text" value="'+component.componentDetails.type+'" /></div><div style="float:right;"><div class="list_button" style="margin-left:5px;" onclick="removeComponent('+(pageIndex)+', '+(count-1)+');">Remove</div></div></div><div class="row no_margin"><div><div><div class="row no_margin" style="cursor: pointer"><div style="float:left"><div class="list_button" style="margin-left:5px; display:inline-block;" onclick="editComponentOfPage('+(count-1)+');">Save</div><div class="list_button" style="margin-left:5px; display:inline-block;" onclick="moveComponentUp('+(count-1)+');">Up</div><div class="list_button" style="margin-left:5px; display:inline-block;" onclick="moveComponentDown('+(count-1)+');">Down</div></div></div></div></div></div></div></li>';

            } else {

              pageComponents += '<li class="list-group-item"><div class="no_margin"><div class="no_margin"><div class="m-2"><b>Component No. : '+count+'</b></div><div class="m-2">Component ID : <input id="component_id_'+count+'" type="text" value="'+component.componentId+'" /></div><div class="m-2">Header : <input id="component_header_'+count+'" type="text" value="'+component.componentDetails.header+'" /></div><div class="m-2">Sub-Header : <input id="component_subheader_'+count+'" type="text" value="'+component.componentDetails.subHeader+'" /></div><div class="m-2">Key : <input id="component_key_'+count+'" type="text" value="'+component.key+'" /></div><div class="m-2">DataUrl : <input id="component_dataurl_'+count+'" type="text" value="'+component.componentDetails.dataUrl+'" /></div><div class="m-2">SearchUrl : <input id="component_searchurl_'+count+'" type="text" value="'+component.componentDetails.searchUrl+'" /></div><div class="row no_margin"><div><div><div class="row no_margin" style="cursor: pointer"><div style="float:left"><div class="list_button" style="margin-left:5px;" onclick="editComponentOfPage('+(count-1)+');">Save</div><div class="list_button" style="margin-left:5px; display:inline-block;" onclick="moveComponentUp('+(count-1)+');">Up</div><div class="list_button" style="margin-left:5px; display:inline-block;" onclick="moveComponentDown('+(count-1)+');">Down</div></div></div></div></div></div></div></li>';
              
            }
          }

          count++;
      });

      $('#templateList').hide();
      $('#pagesList').hide();

      //$('#componentPicker').css('visibility', 'visible');
      $('#componentList').empty();
      $('#componentList').append(pageComponents);
      $('#componentList').show();
      $('#data_table').DataTable();

      dest = "pages";
      $('#back_button').css('visibility', 'visible');
}
