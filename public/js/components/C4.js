 function process_c4() {

        var component = {};

        var c4_list_header = $("#c4_list_header").val();
        var c4_list_subHeader = $("#c4_list_subHeader").val();
        var c4_key = $("#c4_key").val();

//        alert(c4_list_header + "|" + c4_list_subHeader + "|" + c4_key);



        component.componentId = "C4";


        if ($('#c4_iscompulsory').is(':checked')) {
          component.compulsory = 1;

        } else {
          component.compulsory = 0;
        }


        component.key = c4_key;
        component.componentDetails = {};


        component.componentDetails.header = $("#c4_list_header").val();
        component.componentDetails.subHeader = $("#c4_list_subHeader").val();

        var currentPage = [];
        console.log(component);
        currentPage.push(component);

        if(pageInsertIndex == -1) template.push(currentPage);
        else template.splice(pageInsertIndex, 0, currentPage);
        console.log("FinalTemplate =>", JSON.stringify(template, undefined, 2));

        var count = 1;

        //pageComponents += '<li class="list-group-item"><div class="no_margin"><div class="no_margin"><div><b>Component No. : '+count+'</b></div><div>Component ID : '+component.componentId+'</div><div>Header : '+component.componentDetails.header+'</div><div>DataUrl : '+component.componentDetails.dataUrl+'</div></div></li>';


//        $('#componentList').append(template);
//        var node = document.createElement("LI");                 // Create a <li> node
//        node.appendChild(template);                              // Append the text to <li>
//        document.getElementById("myList").innerHTML = template;
//        $('#componentList').show();

        $("#c4_close").click();
        $('#componentPicker').css('display', 'none');
        $('#pagesList').empty();


        displayPagesOfTemplate(template);

      }


      function add_c4_currentPage() {

        var component = {};

        var c4_list_header = $("#c4_list_header").val();
        var c4_list_subHeader = $("#c4_list_subHeader").val();
        var c4_key = $("#c4_key").val();

        alert(c4_list_header + "|" + c4_list_subHeader + "|" + c4_key);



        component.componentId = "C4";


        if ($('#c4_iscompulsory').is(':checked')) {
          component.compulsory = 1;

        } else {
          component.compulsory = 0;
        }


        component.key = c4_key;
        component.componentDetails = {};


        component.componentDetails.header = $("#c4_list_header").val();
        component.componentDetails.subHeader = $("#c4_list_subHeader").val();


        console.log(component);


        var index = template.indexOf(currPage);
        currPage.push(component);
        template[index] = currPage;

        //template[template.length - 1].push(component);
        console.log("FinalTemplate =>", template);

        $("#c4_close").click();

        $('#componentPicker').css('display', 'none');
        $('#pagesList').empty();


        displayPagesOfTemplate(template);

        //displayComponents(template[template.length-1]);

      }