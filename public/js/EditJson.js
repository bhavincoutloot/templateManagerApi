  function editJson(id) {

      /*console.log("Inside Duplicate Temp ID: " + id);
      templateId = id;

      $.ajax({ 
          type: 'POST',
          url: "http://localhost:3000/test/getTemplate",
          data: { 'tempId':id },
          success: function(data) {
            var temp_data = data.temp;
            //console.log("Template Data: " + JSON.stringify(data.temp, undefined, 2));
            //console.log(JSON.stringify(temp_data, undefined, 2));
            //console.log(Object.keys(data.temp));
            console.log(JSON.stringify(temp_data, undefined, 2));
            template = temp_data.component;
            var data = JSON.stringify(template, undefined, 10);
            console.log(data);
            $('#jsonData').val(data);
            $('#templateList').hide();
            $('#jsonData').css('display', 'block');
            $('#searchInput').css('display', 'none');
            $('#update_json').css('visibility', 'visible');
            dest = "template";
            //displayPagesToEdit(temp_data.component);
          }
      });*/

      $('#pagesList').hide();

      var data = JSON.stringify(template, undefined, 10);
            //console.log(data);
      $('#jsonData').val(data);
      $('#templateList').hide();
      $('#jsonData').css('display', 'block');
      $('#searchInput').css('display', 'none');
      $('#update_json').css('visibility', 'visible');
      dest = "template";

  }

  function updateJson() {

    template = JSON.parse($('#jsonData').val());
    log += "Json updated of Template: " + templateId;
    console.log("Updated: " + JSON.stringify(template, undefined, 2));
    $('#add_new_template').css('visibility', 'visible');
    $('#jsonData').css('display', 'none');
    displayPagesOfTemplate(template);
    //addNewTemplate();
  }