  function open_modal(option) {

    console.log("Option: " + option);

    switch (option) {
          case 1: {
              console.log("Inside case1");
              $('#c1').modal('show');
              break;
            };
          case 2: {
              $('#c2').modal('show');
              break;
            };
          case 3: {
              $('#c7').modal('show');
              break;
            };
          case 4: {
              $('#c8').modal('show');
              break;
            };
          case 12: {
              $('#c3').modal('show');
              $("#selectpicker").val(0);
              break;
            };
          case 13: {
              $('#c4').modal('show');
              $("#selectpicker").val(0);
              break;
            };
          case 15: {
              $('#c5').modal('show');
              $("#selectpicker").val(0);
              break;
            };
          case 16: {
              $('#c6').modal('show');
              $("#selectpicker").val(0);
              break;
            };
          case 17: {
              $('#c9').modal('show');
              $("#selectpicker").val(0);
              break;
          };
          case 18: {
              $('#c10').modal('show');
              $('#selectpicker').val(0);
              break;
          };
    }
  }


  function component_selected() {

    var e = document.getElementById("selectpicker");
    options_chooser = e.selectedIndex;
    //alert(options_chooser);
    open_modal(options_chooser);

  }
