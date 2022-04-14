$( function(){
   $("#dialog").dialog({
       modal : true,
       height : 300,
       width : 400,
       draggable: false,
       closeOnEscape: false,
       open: function() {
        $('.ui-widget-overlay').addClass('custom-overlay');
        $(".ui-dialog-titlebar-close").hide();
        $("#mainContainer").hide();
      },
      hide : {
          effect: "fadeOut",
          duration : 1000
      },
      buttons: {
          Start: function(){
             $(this).dialog("close");
          }
      },
       close: function() {
        $("#mainContainer").show();
       }
   });
   $("#dialog2").dialog({
      modal: true,
      draggable: false,
      autoOpen: false,
      open: function() {
        $('.ui-widget-overlay').addClass('custom-overlay');
        $(".ui-dialog-titlebar-close").hide();
      },
      show: {
          effect: "blind",
          duration: 1000
      },
      buttons: {
          Continue: function(){
              newBoard();
              $(this).dialog("close");
          }
      }
   });
   $("#dialog3").dialog({
    modal: true,
    draggable: false,
    autoOpen: false,
    open: function() {
      $('.ui-widget-overlay').addClass('custom-overlay');
      $(".ui-dialog-titlebar-close").hide();
    },
    show: {
        effect: "blind",
        duration: 1000
    },
    buttons: {
        Close: function(){
            $(this).dialog("close");
        }
    }
   });
});