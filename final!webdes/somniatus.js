$(function() {
    $('#dates').change(function(){
      $('.day').hide();
      $('#' + $(this).val()).show();
    }).change();
  });

  $(".dropdown button").click(function() {
    $("#dates :selected")[this.id]().prop("selected", true).change(); 
    console.log([this.id] + " clicked");
});