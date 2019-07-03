
      function c7_data_checkbox() {
        if ($('#c7_data_checkbox').is(':checked')) {
          $("#c7_data_url_input").attr("placeholder", "Enter data url");
          if ($('#c7_key').val()) {
            //console.log("base_url/" + $('#c1_key').val());
            $("#c7_data_url_input").val("base_url/" + $('#c7_key').val());
          }
          else {
            alert("Enter Key");
            $('#c7_data_checkbox').prop('checked', false);
            $("#c7_data_url_input").attr("placeholder", "Click here to add manual data");
          }
        }
        else {
          $("#c7_data_url_input").attr("placeholder", "Click here to add manual data");
          $("#c7_data_url_input").val("");
        }
      }


            function c7_add_inline_data_clicked() {
        console.log("clicked");
        if ($('#c7_data_checkbox').is(':checked')) {

        } else {
          $("#c7_data_url_input").val("");
          $("#c7_list_display_subHeader").val("");
          $('#c7_add_inline_data').modal('show');

        }
      }



      function c7_add_item_to_list() {

        var data_item = {};

        data_item.displayId = ($("#c7_list_display_header").val() ? $("#c7_list_display_header").val() : "");
        data_item.displayTitle = ($("#c7_list_display_header").val() ? $("#c7_list_display_header").val() : "");
        data_item.displaySubTitle = ($("#c7_list_display_subHeader").val() ? $("#c7_list_display_subHeader").val() : "");

        if ($("#c7_list_display_icon").val()) {
          data_item.displayIcon = $("#c7_list_display_icon").val();
        }
        else data_item.displayIcon = "";


        console.log("c7dataItem", data_item);
        c7_inline_data.push(data_item)
        console.log("c7_inline_data", c7_inline_data);

        $("#c7_data_model").click();
        $("#c7_list_display_header").val("");
        $("#c7_list_display_icon").val("");


      }



      function emptyC7Element() {
        $("#c7_list_header").val("");
        $("#c7_list_subHeader").val("");
        $("#c7_key").val("");
        $("#c7_data_url_input").val("");
        $("#c7_search_url_input").val("");
        c7_inline_data = [];
      }


      


      



      function process_c7() {
        var page = {};

        var c7_list_header = $("#c7_list_header").val();
        var c7_list_subheader = $("#c7_list_subHeader").val();
        var c7_key = $("#c7_key").val();
        var c7_data_url_input = $("#c7_data_url_input").val();
        var c7_search_url_input = $("#c7_search_url_input").val();


        alert(c7_list_header);
        alert(c7_key);
        alert(c7_data_url_input);
        alert(c7_search_url_input);



        page.componentId = "C7";
        page.key = c7_key;
        page.componentDetails = {};

        page.componentDetails.header = c7_list_header;
        page.componentDetails.subheader = c7_list_subheader;


        if ($('#c7_data_checkbox').is(':checked')) {

          page.componentDetails.dataUrl = c7_data_url_input;
          page.componentDetails.data = [];

        } else {

          page.componentDetails.dataUrl = "null";
          page.componentDetails.data = c7_inline_data;

        }

        if ($('#c1_search_checkbox').is(':checked')) {
          page.componentDetails.searchUrl = c7_search_url_input;
        } else {
          page.componentDetails.searchUrl = "null";
        }


        console.log($('#c7_data_checkbox').is(':checked'));


        var currentTemplate = [];
        console.log("=>", page);
        currentTemplate.push(page);
         if(pageInsertIndex == -1) template.push(currentTemplate);
        else template.splice(pageInsertIndex, 0, currentTemplate);
       
        console.log("finalArray", template);
        $("#c7_Close").click();

        $('#componentPicker').css('display', 'none');
        $('#pagesList').empty();


        displayPagesOfTemplate(template);


        emptyC7Element();

        console.log("FinalTemplate =>", template);
        console.log('c7_inline_data', c7_inline_data);


      }
