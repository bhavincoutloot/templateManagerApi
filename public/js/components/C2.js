
      function c2_data_checkbox() {
        if ($('#c2_data_checkbox').is(':checked')) {
          $("#c2_data_url_input").attr("placeholder", "Enter data url");
          if ($('#c2_key').val()) {
            //console.log("base_url/" + $('#c1_key').val());
            $("#c2_data_url_input").val("base_url/" + $('#c2_key').val());
          }
          else {
            alert("Enter Key");
            $('#c2_data_checkbox').prop('checked', false);
            $("#c2_data_url_input").attr("placeholder", "Click here to add manual data");
          }
        }
        else {
          $("#c2_data_url_input").attr("placeholder", "Click here to add manual data");
          $("#c2_data_url_input").val("");
        }
      }


            function c2_add_inline_data_clicked() {
        console.log("clicked");
        if ($('#c2_data_checkbox').is(':checked')) {

        } else {
          $("#c2_data_url_input").val("");
          $("#c2_list_display_subHeader").val("");
          $('#c2_add_inline_data').modal('show');

        }
      }


                  function c2_add_item_to_list() {

        var data_item = {};

        data_item.displayId = ($("#c2_list_display_header").val() ? $("#c2_list_display_header").val() : "");
        data_item.displayTitle = ($("#c2_list_display_header").val() ? $("#c2_list_display_header").val() : "");
        data_item.displaySubTitle = ($("#c2_list_display_subHeader").val() ? $("#c2_list_display_subHeader").val() : "");

        if ($("#c2_list_display_icon").val()) {
          data_item.displayIcon = $("#c2_list_display_icon").val();
        }
        else data_item.displayIcon = "";


        console.log("c2dataItem", data_item);
        c2_inline_data.push(data_item)
        console.log("c1_inline_data", c2_inline_data);

        $("#c2_data_model").click();
        $("#c2_list_display_header").val("");
        $("#c2_list_display_icon").val("");


      }



            function emptyC2Element() {
        $("#c2_list_header").val("");
        $("#c2_list_subHeader").val("");
        $("#c2_key").val("");
        $("#c2_data_url_input").val("");
        $("#c2_search_url_input").val("");
        c2_inline_data = [];
      }


      function process_c2() {
        var page = {};

        var c2_list_header = $("#c2_list_header").val();
        var c2_list_subheader = $("#c2_list_subHeader").val();
        var c2_key = $("#c2_key").val();
        var c2_data_url_input = $("#c2_data_url_input").val();
        var c2_search_url_input = $("#c2_search_url_input").val();


        alert(c2_list_header);
        alert(c2_key);
        alert(c2_data_url_input);
        alert(c2_search_url_input);



        page.componentId = "C2";
        page.key = c2_key;
        page.componentDetails = {};

        page.componentDetails.header = c2_list_header;
        page.componentDetails.subheader = c2_list_subheader;


        if ($('#c2_data_checkbox').is(':checked')) {

          page.componentDetails.dataUrl = c2_data_url_input;
          page.componentDetails.data = [];

        } else {

          page.componentDetails.dataUrl = "null";
          page.componentDetails.data = c2_inline_data;

        }

        if ($('#c1_search_checkbox').is(':checked')) {
          page.componentDetails.searchUrl = c2_search_url_input;
        } else {
          page.componentDetails.searchUrl = "null";
        }


        console.log($('#c1_data_checkbox').is(':checked'));


        var currentTemplate = [];
        console.log("=>", page);
        currentTemplate.push(page);
        if(pageInsertIndex == -1) template.push(currentTemplate);
        else template.splice(pageInsertIndex, 0, currentTemplate);
        console.log("finalArray", template);
        $("#c2_Close").click();

        $('#componentPicker').css('display', 'none');
        $('#pagesList').empty();


        displayPagesOfTemplate(template);


        emptyC2Element();

        console.log("FinalTemplate =>", template);
        console.log('c2_inline_data', c2_inline_data);


      }