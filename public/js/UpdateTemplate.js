function saveChanges() {

      console.log(templateId);

      console.log("Sending Data: " + allPages);

      var updatedTemplate = {
        name : templateName,
        component : allPages
      };


      var tempData = {
        'id' : templateId,
        'log' : log,
        'temp' : updatedTemplate
      };

      $('#save_changes').css('visibility', 'hidden');
      $('#add_template').css('visibility', 'visible');

      //$('#loader').css('display', 'block');

      var strTempData = JSON.stringify(tempData);

      $.ajax({
          type: 'POST',
          url: "/test/updateTemplate",
          data: {strTempData},
          success: function(data) {

              //$('#loader').css('display', 'none');
              //console.log(data.status);
              alert(data.status);
              $('#refresh').click();
          }
      })


     // location.reload();

     console.log(strTempData);

//      console.log(JSON.stringify(tempData, undefined, 2));
  }
