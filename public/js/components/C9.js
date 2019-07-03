function process_c9() {

        alert("c9");

        var component = {};

        var c9_key = $("#c9_key").val();

        component.componentId = "C9";

        if ($('#c9_iscompulsory').is(':checked')) {
          component.compulsory = 1;

        } else {
          component.compulsory = 0;
        }


        component.key = c9_key;
        component.componentDetails = {};

        var currentTemplate = [];
        console.log(component);
        currentTemplate.push(component);
        if(pageInsertIndex == -1) template.push(currentTemplate);
        else template.splice(pageInsertIndex, 0, currentTemplate);
       
        console.log("FinalTemplate =>", template);


        $("#c9_close").click();
        $('#componentPicker').css('display', 'none');
        $('#pagesList').empty();


       displayPagesOfTemplate(template);


      }


      function add_c9_currentPage() {

        alert("c9");

        var component = {};

        var c9_key = $("#c9_key").val();

        component.componentId = "C9";

        if ($('#c9_iscompulsory').is(':checked')) {
          component.compulsory = 1;

        } else {
          component.compulsory = 0;
        }


        component.key = c9_key;
        component.componentDetails = {};

        console.log(component);

        var index = template.indexOf(currPage);
        currPage.push(component);
        template[index] = currPage;

        //template[template.length - 1].push(component);

        console.log("FinalTemplate =>", template);

        $("#c9_close").click();
        $('#componentPicker').css('display', 'none');
        $('#pagesList').empty();


        displayPagesOfTemplate(template);

      }
