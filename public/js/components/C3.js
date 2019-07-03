function c3_validation_checkbox() {

        if ($('#c3_validation').is(':checked')) {
          document.getElementById("c3_validationText").disabled = false;
          document.getElementById("c3_to_date").disabled = false;
          document.getElementById("c3_from_date").disabled = false;

        } else {

          document.getElementById("c3_validationText").disabled = true;
          document.getElementById("c3_to_date").disabled = true;
          document.getElementById("c3_from_date").disabled = true;
        }


      }


function process_c3() {

        var component = {};

        var c3_list_header = $("#c3_list_header").val();
        var c3_list_subHeader = $("#c3_list_subHeader").val();
        var c3_key = $("#c3_key").val();

        alert(c3_list_header + "|" + c3_list_subHeader + "|" + c3_key);



        component.componentId = "C3";


        if ($('#c3_iscompulsory').is(':checked')) {
          component.compulsory = 1;

        } else {
          component.compulsory = 0;
        }


        component.key = c3_key;
        component.componentDetails = {};


        component.componentDetails.header = $("#c3_list_header").val();
        component.componentDetails.subHeader = $("#c3_list_subHeader").val();
        component.componentDetails.validation = []
        if ($('#c3_validation').is(':checked')) {

          if ($('#c3_to_validation').is(':checked') && $('#c3_from_validation').is(':checked')) {
            // alert("empty array");
            // component.componentDetails.validationText = $("#c3_validationText").val();

            var to_date = "";
            var from_date = "";
            component.componentDetails.validation.push(from_date);
            component.componentDetails.validation.push(to_date);

            component.componentDetails.validationText = $("#c3_validationText").val();

          } else if ($('#c3_to_validation').is(':checked')) {
            alert("empty to");
            var to_date = "";
            var from_date = $("#c3_from_date").val();
            component.componentDetails.validation.push(from_date);
            component.componentDetails.validation.push(to_date);

            component.componentDetails.validationText = $("#c3_validationText").val();

          } else if ($('#c3_from_validation').is(':checked')) {
            alert("empty from");
            var to_date = $("#c3_to_date").val();
            var from_date = "";
            component.componentDetails.validation.push(from_date);
            component.componentDetails.validation.push(to_date);

            component.componentDetails.validationText = $("#c3_validationText").val();

          } else {
            alert("empty none");
            var to_date = $("#c3_to_date").val();
            var from_date = $("#c3_from_date").val();

            component.componentDetails.validation.push(from_date);
            component.componentDetails.validation.push(to_date);
            component.componentDetails.validationText = $("#c3_validationText").val();
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

        $("#c3_close").click();
        $('#componentPicker').css('display', 'none');
        $('#pagesList').empty();


        displayPagesOfTemplate(template);

/*        $("#c3_close").click();
        $("#c3_list_header").val("");
        $("#c3_list_subHeader").val("");
        $("#c3_key").val("");
        $("#c3_list_header").val("");
        $("#c3_list_subHeader").val("");
        $("#c3_validationText").val("");
        $("#c3_to_date").val("");
        $("#c3_from_date").val(""); */


      }


      function add_c3_currentPage() {
        console.log("template length - ", template.length);
        var tempLength = template.length;

        var component = {};

        var c3_list_header = $("#c3_list_header").val();
        var c3_list_subHeader = $("#c3_list_subHeader").val();
        var c3_key = $("#c3_key").val();

        alert(c3_list_header + "|" + c3_list_subHeader + "|" + c3_key);



        component.componentId = "C3";


        if ($('#c3_iscompulsory').is(':checked')) {
          component.compulsory = 1;

        } else {
          component.compulsory = 0;
        }


        component.key = c3_key;
        component.componentDetails = {};


        component.componentDetails.header = $("#c3_list_header").val();
        component.componentDetails.subHeader = $("#c3_list_subHeader").val();
        component.componentDetails.validation = []
        if ($('#c3_validation').is(':checked')) {

          if ($('#c3_to_validation').is(':checked') && $('#c3_from_validation').is(':checked')) {
            alert("empty array");
            component.componentDetails.validationText = $("#c3_validationText").val();

          } else if ($('#c3_to_validation').is(':checked')) {
            alert("empty to");
            var to_date = "";
            var from_date = $("#c3_from_date").val();
            component.componentDetails.validation.push(to_date);
            component.componentDetails.validation.push(from_date);
            component.componentDetails.validationText = $("#c3_validationText").val();

          } else if ($('#c3_from_validation').is(':checked')) {
            alert("empty from");
            var to_date = $("#c3_to_date").val();
            var from_date = "";
            component.componentDetails.validation.push(to_date);
            component.componentDetails.validation.push(from_date);
            component.componentDetails.validationText = $("#c3_validationText").val();

          } else {
            alert("empty none");
            var to_date = $("#c3_to_date").val();
            var from_date = $("#c3_from_date").val();
            component.componentDetails.validation.push(to_date);
            component.componentDetails.validation.push(from_date);
            component.componentDetails.validationText = $("#c3_validationText").val();
          }


        } else {
          component.componentDetails.validationText = "";
        }


        var index = template.indexOf(currPage);
        currPage.push(component);
        template[index] = currPage;

        //template[tempLength - 1].push(component);
        console.log("FinalTemplate =>", template);


        $("#c3_close").click();
        $('#componentPicker').css('display', 'none');
        $('#pagesList').empty();


        displayPagesOfTemplate(template);


/*        $("#c3_close").click();
        $("#c3_list_header").val("");
        $("#c3_list_subHeader").val("");
        $("#c3_key").val("");
        $("#c3_list_header").val("");
        $("#c3_list_subHeader").val("");
        $("#c3_validationText").val("");
        $("#c3_to_date").val("");
        $("#c3_from_date").val(""); */


      }