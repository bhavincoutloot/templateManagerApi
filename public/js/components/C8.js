      function c8_validation_checkbox() {

        if ($('#c8_validation').is(':checked')) {
          document.getElementById("c8_validationText").disabled = false;
          document.getElementById("c8_to_date").disabled = false;
          document.getElementById("c8_from_date").disabled = false;

        } else {

          document.getElementById("c8_validationText").disabled = true;
          document.getElementById("c8_to_date").disabled = true;
          document.getElementById("c8_from_date").disabled = true;
        }


      }


function process_c8() {

        var component = {};

        var c8_list_header = $("#c8_list_header").val();
        var c8_list_subHeader = $("#c8_list_subHeader").val();
        var c8_key = $("#c8_key").val();

        alert(c8_list_header + "|" + c8_list_subHeader + "|" + c8_key);



        component.componentId = "C8";


        if ($('#c8_iscompulsory').is(':checked')) {
          component.compulsory = 1;

        } else {
          component.compulsory = 0;
        }


        component.key = c8_key;
        component.componentDetails = {};


        component.componentDetails.header = $("#c8_list_header").val();
        component.componentDetails.subHeader = $("#c8_list_subHeader").val();
        component.componentDetails.validation = []
        if ($('#c8_validation').is(':checked')) {

          if ($('#c8_to_validation').is(':checked') && $('#c8_from_validation').is(':checked')) {
            // alert("empty array");
            // component.componentDetails.validationText = $("#c8_validationText").val();

            var to_date = "";
            var from_date = "";
            component.componentDetails.validation.push(from_date);
            component.componentDetails.validation.push(to_date);

            component.componentDetails.validationText = $("#c8_validationText").val();

          } else if ($('#c8_to_validation').is(':checked')) {
            alert("empty to");
            var to_date = "";
            var from_date = $("#c8_from_date").val();
            component.componentDetails.validation.push(from_date);
            component.componentDetails.validation.push(to_date);

            component.componentDetails.validationText = $("#c8_validationText").val();

          } else if ($('#c8_from_validation').is(':checked')) {
            alert("empty from");
            var to_date = $("#c8_to_date").val();
            var from_date = "";
            component.componentDetails.validation.push(from_date);
            component.componentDetails.validation.push(to_date);

            component.componentDetails.validationText = $("#c8_validationText").val();

          } else {
            alert("empty none");
            var to_date = $("#c8_to_date").val();
            var from_date = $("#c8_from_date").val();

            component.componentDetails.validation.push(from_date);
            component.componentDetails.validation.push(to_date);
            component.componentDetails.validationText = $("#c8_validationText").val();
          }


        } else {
          component.componentDetails.validationText = "";
        }

        var currentTemplate = [];
        console.log("component", component);
        currentTemplate.push(component);
         if(pageInsertIndex == -1) template.push(currentTemplate);
        else template.splice(pageInsertIndex, 0, currentTemplate);
       
        console.log("FinalTemplate =>", template);


        $("#c8_close").click();
        $('#componentPicker').css('display', 'none');
        $('#pagesList').empty();


        displayPagesOfTemplate(template);



/*        $("#c8_close").click();
        $("#c8_list_header").val("");
        $("#c8_list_subHeader").val("");
        $("#c8_key").val("");
        $("#c8_list_header").val("");
        $("#c8_list_subHeader").val("");
        $("#c8_validationText").val("");
        $("#c8_to_date").val("");
        $("#c8_from_date").val(""); */


      }



      function add_c8_currentPage() {
        console.log("template length - ", template.length);
        var tempLength = template.length;

        var component = {};

        var c8_list_header = $("#c8_list_header").val();
        var c8_list_subHeader = $("#c8_list_subHeader").val();
        var c8_key = $("#c8_key").val();

        alert(c8_list_header + "|" + c8_list_subHeader + "|" + c8_key);



        component.componentId = "C8";


        if ($('#c8_iscompulsory').is(':checked')) {
          component.compulsory = 1;

        } else {
          component.compulsory = 0;
        }


        component.key = c8_key;
        component.componentDetails = {};


        component.componentDetails.header = $("#c8_list_header").val();
        component.componentDetails.subHeader = $("#c8_list_subHeader").val();
        component.componentDetails.validation = []
        if ($('#c8_validation').is(':checked')) {

          if ($('#c8_to_validation').is(':checked') && $('#c8_from_validation').is(':checked')) {
            alert("empty array");
            component.componentDetails.validationText = $("#c8_validationText").val();

          } else if ($('#c8_to_validation').is(':checked')) {
            alert("empty to");
            var to_date = "";
            var from_date = $("#c8_from_date").val();
            component.componentDetails.validation.push(from_date);
            component.componentDetails.validation.push(to_date);

            component.componentDetails.validationText = $("#c8_validationText").val();

          } else if ($('#c8_from_validation').is(':checked')) {
            alert("empty from");
            var to_date = $("#c8_to_date").val();
            var from_date = "";
            component.componentDetails.validation.push(from_date);
            component.componentDetails.validation.push(to_date);

            component.componentDetails.validationText = $("#c8_validationText").val();

          } else {
            alert("empty none");
            var to_date = $("#c8_to_date").val();
            var from_date = $("#c8_from_date").val();
            component.componentDetails.validation.push(from_date);
            component.componentDetails.validation.push(to_date);

            component.componentDetails.validationText = $("#c8_validationText").val();
          }


        } else {
          component.componentDetails.validationText = "";
        }


        var index = template.indexOf(currPage);
        currPage.push(component);
        template[index] = currPage;

        //template[tempLength - 1].push(component);
        console.log("FinalTemplate =>", template);


        $("#c8_close").click();
        $('#componentPicker').css('display', 'none');
        $('#pagesList').empty();


        displayPagesOfTemplate(template);



/*        $("#c8_close").click();
        $("#c8_list_header").val("");
        $("#c8_list_subHeader").val("");
        $("#c8_key").val("");
        $("#c8_list_header").val("");
        $("#c8_list_subHeader").val("");
        $("#c8_validationText").val("");
        $("#c8_to_date").val("");
        $("#c8_from_date").val(""); */


      }