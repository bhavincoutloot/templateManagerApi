function displayLogs() {

    $.ajax({
          type: 'POST',
          url: "/test/getLogs",
          success: function(data) {;
            //console.log("Template Data: " + JSON.stringify(data.temp, undefined, 2));
            //console.log(JSON.stringify(temp_data, undefined, 2));
            //console.log(Object.keys(data.temp));
            console.log(JSON.stringify(data, undefined, 2));

            var logData = '';

            data.logs.forEach(function(log) {

                        logData += '<li class="list-group-item"><div class="no_margin"><div class="no_margin"><div><b>Template ID : '+log.tempId+'</b></div><div>Category : '+log.name+'</div><div>Date : '+log.date+'</div><div>Log : '+log.log+'</div></div><div class="row no_margin"><div class="col-md-4"></div><div class="col-md-8"><div style="float:right;"><div class="row no_margin" style="cursor: pointer"><div class="list_button" style="margin-left:5px;" onclick="resetTemplate('+ log._id +');">Undo</div></div></div></div></div></div></li>';
            });

            $('#templateList').hide();
            $('#pagesList').hide();
            $('#componentList').hide();
            $('#searchInput').hide();
            $('#main_header').hide();

            $('#logsList').append(logData);
            $('#logsList').show();

          }
      });


}

  function resetTemplate(id) {

    $.ajax({
          type: 'POST',
          url: "/test/removeLog",
          data: { 'id':id },
          success: function(data) {

            alert(data.status);
            $('#refresh').click();
          }
      });

  }
