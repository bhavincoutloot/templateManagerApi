function displayPagesOfTemplate(pages) {

	//$('#add_new_template').css('visibility', 'visible');
    //$('#componentPicker').css('display', 'none');
    
    $('#add_template').css('display', 'none');
    $('#display_logs').css('display', 'none');
    $('#save_changes').css('visibility', 'visible');
	$('#add_page').css('visibility', 'visible');
	$('#edit_json').css('visibility', 'visible');
	$('#update_json').css('visibility', 'hidden');
	$('#searchInput').css('display', 'none');

    	template = pages;

    	console.log("Inside Pages of Temp");

          var templatePages = ''
          var pageCount = 1;
    
          allPages = pages;
    
          pages.forEach(function(page) {
    
              //console.log(page[0].componentId);
              //console.log(page[0].componentDetails.header);
    
              pageComponents = '';
              pageDetails = '';
    
              if(page[0].componentId == 'C1' || page[0].componentId == 'C2' || page[0].componentId == 'C7' || page[0].componentId == 'C8' ) {
                pageComponents = page[0].componentId;
                pageDetails = page[0].componentDetails.header;
    
                 templatePages += '<li class="list-group-item"><div class="no_margin"><div class="no_margin"><div><b>Page No. : '+pageCount+'</b></div><div>Components : '+pageComponents+'</div><div>Component Details : '+pageDetails+'</div></div><div class="row no_margin"><div><div class="row no_margin" style="cursor: pointer"><div class="list_button" style="margin-left:5px;" onclick="displayComponentsOfPage('+ (pageCount-1) +');">Edit</div><div class="list_button" style="margin-left:5px;" onclick="deletePage('+ (pageCount-1) +');">Delete</div><div class="list_button" style="margin-left:5px;" onclick="addPageAbove('+ (pageCount-1) +');">Add Above</div><div class="list_button" style="margin-left:5px;" onclick="moveUp('+ (pageCount-1) +');">Up</div><div class="list_button" style="margin-left:5px;" onclick="moveDown('+ (pageCount-1) +');">Down</div></div></div></div></div></li>';

              } else {
    
                page.forEach(function(component) {
    
                    pageComponents += component.componentId + ', ';
                    pageDetails += component.componentDetails.header + ', ';
    
                });
    
				templatePages += '<li class="list-group-item"><div class="no_margin"><div class="no_margin"><div><b>Page No. : '+pageCount+'</b></div><div>Components : '+pageComponents+'</div><div>Component Details : '+pageDetails+'</div></div><div class="row no_margin"><div><div class="row no_margin" style="cursor: pointer"><div class="list_button" style="margin-left:5px;" onclick="displayComponentsOfPage('+ (pageCount-1) +');">Edit</div><div class="list_button" style="margin-left:5px;" onclick="deletePage('+ (pageCount-1) +');">Delete</div><div class="list_button" style="margin-left:5px;" onclick="addPageAbove('+ (pageCount-1) +');">Add Above</div><div class="list_button" style="margin-left:5px;" onclick="addComponentsToPage('+ (pageCount-1) +');">Add Component</div><div class="list_button" style="margin-left:5px;" onclick="moveUp('+ (pageCount-1) +');">Up</div><div class="list_button" style="margin-left:5px;" onclick="moveDown('+ (pageCount-1) +');">Down</div></div></div></div></div></li>';
              }
    
              pageCount++;
    
          });
          //console.log(pages);
    
          $('#templateList').hide();
          $('#componentList').hide();
          $('#selectComponentList').hide();
    
          //$('#refresh').hide();     
    
	      $('#pagesList').empty();
          $('#pagesList').append(templatePages);
          $('#pagesList').show();
    
          dest = "templates";
          $('#back_button').css('visibility', 'visible');
}


function moveUp(pageIndex) {

	if(pageIndex > 0) {

		var element = template[pageIndex];
	    template.splice(pageIndex, 1);
    	template.splice(pageIndex-1, 0, element);
	}
	displayPagesOfTemplate(template);
}

function moveDown(pageIndex) {

	if(pageIndex < (template.length - 1)) {

		var element = template[pageIndex];
	    template.splice(pageIndex, 1);
    	template.splice(pageIndex+1, 0, element);
	}
	displayPagesOfTemplate(template);
}