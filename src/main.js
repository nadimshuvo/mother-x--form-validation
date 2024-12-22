$(document).ready(function () {

    function validateApiKey() {
      var apiKey = $("#API-key").val();

    if (apiKey === "") {
      $(".w-form-fail").show();
      return;
    }

    $(".validate-form").hide();
    $(".api-setup-form").show();
    $(".w-form-fail").hide();
    $(".current-icon").hide();
    $(".success-icon").show();
      
    $(".inactive-state-2").hide();
    $(".current-icon-2").show();
      
    // Change class from 'step-title inactive' to 'step-title active'
    $(".step-title.inactive").removeClass("inactive").addClass("active");
    }
    
    function copyInputValueFrom1toFrom2() {
        var copyText = $("#API-key").val();
        $("#API-key-2").val(copyText);        
    }

    // Form 1 - on click event for submit button

   $('input[type="submit"].form-submit.w-button[value="Validate"]').on(
     "click",
     function (event) {
       event.preventDefault();
         validateApiKey();
         copyInputValueFrom1toFrom2();
     }
   );
    
    // Form 2
    $('input[type="submit"].form-submit.w-button[value="Publish"]').on(
      "click",
      function (event) {
          event.preventDefault();
          
        if($("#API-key-2").val() === "") {
            $(".w-form-fail").show();
            return;
          }
          $(".w-form-fail").hide();
          $(".w-form-done").show();
          $(".current-icon-2").hide();
          $(".success-icon-2").show();
          
      }
    );


});
