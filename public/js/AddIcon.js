
  function changeIcon(componentIndex, dataItemIndex) {

      //console.log(JSON.stringify(currPage[componentIndex], undefined, 2));

//      $('#loader').css('display', 'block');


      //console.log("Old: "+JSON.stringify(component, undefined, 2));

      var filesSelected = $("#component_change_data_icon_"+componentIndex+"_"+dataItemIndex+"").prop('files');

     //console.log("Files: " + JSON.stringify(filesSelected, undefined, 2));

        if (filesSelected.length > 0) {

          var fileToLoad = filesSelected[0];
          var fileReader = new FileReader();

          fileReader.onload = function(fileLoadedEvent) {
            var srcData = fileLoadedEvent.target.result; // <--- data: base64
            
            sendImage(srcData).then(function(url) {

              console.log("Received URL:" + url);


              var component = JSON.parse(JSON.stringify(updatablePage[componentIndex]));
        
              component.componentDetails.data[dataItemIndex].displayIcon = url;

              var pageLoc = updatablePages.indexOf(updatablePage);
              updatablePage[componentIndex] = component;
              updatablePages[pageLoc] = updatablePage;

              console.log("Old: "+JSON.stringify(currPage, undefined, 2));
              console.log("New: "+JSON.stringify(updatablePage, undefined, 2));

//              if(allPages == updatablePages) console.log("Same!");

  //            $('#loader').css('display', 'none');

//              $('#pagesList').empty();
//              $('#componentList').empty();

              $('#add_template').css('visibility', 'hidden');

              log += 'Icon Changed of Data Item No.'+ (dataItemIndex+1) +' of Component No. ' + (componentIndex+1) + ' of Page No. ' + (pageLoc+1) + ' of Template ' + templateId + ' ,  ';

              displayComponentsAfterEdit(pageLoc); 
            });
          }
        }
        fileReader.readAsDataURL(fileToLoad);
  }

  function sendImage(imgData) {

      return new Promise(function(resolve, reject) {
        
          $.ajax({                    
            url: 'http://206.189.137.129:3300/tickets/uploadImage',     
            type: 'POST', 
            data : {
              imageBase64 : imgData 
            },
            dataType: 'json',                   
            success: function(data) {

              resolve(data.image);
    //          $('#url').val(data.image);
            } 
        });

      });
  }