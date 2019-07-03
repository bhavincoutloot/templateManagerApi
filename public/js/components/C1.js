      function c1_data_checkbox() {
        if ($('#c1_data_checkbox').is(':checked')) {
          $("#data_url_input").attr("placeholder", "Enter data url");
          if ($('#c1_key').val()) {
            //console.log("base_url/" + $('#c1_key').val());
            $("#data_url_input").val("base_url/" + $('#c1_key').val());
          }
          else {
            alert("Enter Key");
            $('#c1_data_checkbox').prop('checked', false);
            $("#data_url_input").attr("placeholder", "Click here to add manual data");
          }
        }
        else {
          $("#data_url_input").attr("placeholder", "Click here to add manual data");
          $("#data_url_input").val("");
        }
      }


            function add_inline_data_clicked() {
        console.log("clicked");
        if ($('#c1_data_checkbox').is(':checked')) {

        } else {
          $('#add_inline_data').modal('show');

        }
      }


      function c1_search_checkbox() {
        if ($('#c1_search_checkbox').is(':checked')) {
          $("#c1_search_url_input").show();
          $("#c1_search_url_input").attr("placeholder", "Enter Search Url");
          if ($('#c1_key').val()) {
            //console.log("base_url/" + $('#c1_key').val());
            $("#c1_search_url_input").val("base_url/" + $('#c1_key').val());
          }
          else {
            alert("Enter Key");
            $('#c1_search_checkbox').prop('checked', false);
          }
        }
        else {
          $("#c1_search_url_input").attr("placeholder", "Enter Search Url");
          $("#c1_search_url_input").hide();
        }
      }


            function add_item_to_list() {
        if ($("#list_display_header").val()) {
          var data_item = {};
          var sub_title = 0, icon = 0;

          data_item.displayId = ($("#list_display_header").val() ? $("#list_display_header").val() : "");
          data_item.displayTitle = ($("#list_display_header").val() ? $("#list_display_header").val() : "");
          data_item.displaySubTitle = ($("#list_display_subHeader").val() ? $("#list_display_subHeader").val() : "");

          if ($("#list_display_icon").val()) {
            data_item.displayIcon = $("#list_display_icon").val();
          }
          else data_item.displayIcon = "";


          console.log("dataItem", data_item);
          c1_inline_data.push(data_item)
          console.log("c1_inline_data", c1_inline_data);

          $("#C1_data_model").click();
          $("#list_display_header").val("");
          $("#list_display_subHeader").val("");
          $("#list_display_icon").val("");



          //}
        }
      }


            function emptyC1Data() {
        c1_inline_data.length = 0;
      }

      function emptyC1Element() {

        $("#c1_list_header").val("");
        $("#c1_list_subHeader").val("");
        $("#c1_key").val("");
        $("#data_url_input").val("");
        $("#c1_search_url_input").val("");
        c1_inline_data = [];

      }


      function process_c1() {
        var currentTemplate = []
        var page = {};

        var c1_list_header = $("#c1_list_header").val();
        var c1_list_subheader = $("#c1_list_subHeader").val();
        var c1_key = $("#c1_key").val();
        var data_url_input = $("#data_url_input").val();
        var c1_search_url_input = $("#c1_search_url_input").val();


        page.componentId = "C1";
        page.key = c1_key;
        page.componentDetails = {};

        page.componentDetails.header = c1_list_header;
        page.componentDetails.subHeader = c1_list_subheader;


        if ($('#c1_data_checkbox').is(':checked')) {

          page.componentDetails.dataUrl = data_url_input;
          page.componentDetails.data = [];

        } else {

          page.componentDetails.dataUrl = "null";
          page.componentDetails.data = c1_inline_data;

        }

        if ($('#c1_search_checkbox').is(':checked')) {
          page.componentDetails.searchUrl = c1_search_url_input;
        } else {
          page.componentDetails.searchUrl = "null";
        }

        currentTemplate.push(page);

        if(pageInsertIndex == -1) template.push(currentTemplate);
        else template.splice(pageInsertIndex, 0, currentTemplate);

        $("#C1_Close").click();

        $('#componentPicker').css('display', 'none');
        $('#pagesList').empty();


        displayPagesOfTemplate(template);



        emptyC1Element();
        console.log("FinalTemplate =>", template);
        //console.log("c1_inline_data =>",c1_inline_data);

      }