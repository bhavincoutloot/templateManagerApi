function process_c5() {
        alert("c5");

        var component = {};

        var c5_list_header = $("#c5_list_header").val();
        var c5_list_subHeader = $("#c5_list_subHeader").val();
        var c5_key = $("#c5_key").val();
        var c5_answers = $("#c5_answers").val();

        var answer = JSON.parse(c5_answers);
        console.log(answer);

        alert(c5_list_header + "|" + c5_list_subHeader + "|" + c5_key);


        component.componentId = "C5";


        if ($('#c5_iscompulsory').is(':checked')) {
          component.compulsory = 1;

        } else {
          component.compulsory = 0;
        }


        component.key = c5_key;
        component.componentDetails = {};


        component.componentDetails.header = $("#c5_list_header").val();
        component.componentDetails.subHeader = $("#c5_list_subHeader").val();
        component.componentDetails.data = answer;

        var currentTemplate = [];
        console.log(component);
        currentTemplate.push(component);
         if(pageInsertIndex == -1) template.push(currentTemplate);
        else template.splice(pageInsertIndex, 0, currentTemplate);
       
        console.log("FinalTemplate =>", template);


        $("#c5_close").click();
        $('#componentPicker').css('display', 'none');
        $('#pagesList').empty();


        displayPagesOfTemplate(template);


      }

      function add_c5_currentPage() {
        alert("c5");

        var component = {};

        var c5_list_header = $("#c5_list_header").val();
        var c5_list_subHeader = $("#c5_list_subHeader").val();
        var c5_key = $("#c5_key").val();
        var c5_answers = $("#c5_answers").val();

        var answer = JSON.parse(c5_answers);
        console.log(answer);

        alert(c5_list_header + "|" + c5_list_subHeader + "|" + c5_key);


        component.componentId = "C5";


        if ($('#c5_iscompulsory').is(':checked')) {
          component.compulsory = 1;

        } else {
          component.compulsory = 0;
        }


        component.key = c5_key;
        component.componentDetails = {};


        component.componentDetails.header = $("#c5_list_header").val();
        component.componentDetails.subHeader = $("#c5_list_subHeader").val();
        component.componentDetails.data = answer;


        console.log(component);

        var index = template.indexOf(currPage);
        currPage.push(component);
        template[index] = currPage;

        //template[template.length - 1].push(component);
        console.log("FinalTemplate =>", template);

        $("#c5_close").click();
        $('#componentPicker').css('display', 'none');
        $('#pagesList').empty();


        displayPagesOfTemplate(template);

      }
