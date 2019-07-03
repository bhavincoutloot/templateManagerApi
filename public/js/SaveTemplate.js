 function addNewTemplate() {

    console.log("Saving New Template: ");
    console.log("Final: " + JSON.stringify(template, undefined, 2));
    console.log("Log: " + log);
    //alert("Saving " + template_name);
    //$('#refresh').click();

    var newTemplate = {
      name : template_name,
      component : template,
      generatedLog : log
    }

    var strNewTemplate = JSON.stringify(newTemplate);

    console.log("Sending: " + strNewTemplate);

    $.ajax({
          type: 'POST',
          url: "/test/addTemplate",
          data: { strNewTemplate },
          success: function(data) {

              alert(data.status);
              $('#refresh').click();
          }
      });

  }
