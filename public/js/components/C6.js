 function process_c6() {

        alert("c6");

        var component = {};

        var c6_list_header = $("#c6_list_header").val();
        var c6_list_subHeader = $("#c6_list_subHeader").val();
        var c6_key = $("#c6_key").val();
        var c6_answers = $("#c6_answers").val();

        var answer = JSON.parse(c6_answers);
        console.log(answer);

        alert(c6_list_header + "|" + c6_list_subHeader + "|" + c6_key);


        component.componentId = "C6";


        if ($('#c6_iscompulsory').is(':checked')) {
          component.compulsory = 1;

        } else {
          component.compulsory = 0;
        }


        component.key = c6_key;
        component.componentDetails = {};


        component.componentDetails.header = $("#c6_list_header").val();
        component.componentDetails.subHeader = $("#c6_list_subHeader").val();
        component.componentDetails.data = answer;


        var currentTemplate = [];
        console.log(component);
        currentTemplate.push(component);
        
        if(pageInsertIndex == -1) template.push(currentTemplate);
        else template.splice(pageInsertIndex, 0, currentTemplate);
       
        console.log("FinalTemplate =>", template);

        $("#c6_close").click();
        $('#componentPicker').css('display', 'none');
        $('#pagesList').empty();


        displayPagesOfTemplate(template);


      }


      function add_c6_currentPage() {

        alert("c6");

        var component = {};

        var c6_list_header = $("#c6_list_header").val();
        var c6_list_subHeader = $("#c6_list_subHeader").val();
        var c6_key = $("#c6_key").val();
        var c6_answers = $("#c6_answers").val();

        var answer = JSON.parse(c6_answers);
        console.log(answer);

        alert(c6_list_header + "|" + c6_list_subHeader + "|" + c6_key);


        component.componentId = "C6";


        if ($('#c6_iscompulsory').is(':checked')) {
          component.compulsory = 1;

        } else {
          component.compulsory = 0;
        }


        component.key = c6_key;
        component.componentDetails = {};


        component.componentDetails.header = $("#c6_list_header").val();
        component.componentDetails.subHeader = $("#c6_list_subHeader").val();
        component.componentDetails.data = answer;



        console.log(component);

        var index = template.indexOf(currPage);
        currPage.push(component);
        template[index] = currPage;

        //template[template.length - 1].push(component);

        console.log("FinalTemplate =>", template);

        $("#c6_close").click();
        $('#componentPicker').css('display', 'none');
        $('#pagesList').empty();


        displayPagesOfTemplate(template);

      }
