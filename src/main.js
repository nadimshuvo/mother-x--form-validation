$(document).ready(function () {

    function validateApiKey() {
      var apiKey = $("#API-key").val();

    if (apiKey === "") {
      $(".w-form-fail").show();
      $("#API-key").addClass("input-error").focus();
      return;
    }

    $(".validate-form").hide();
    $(".api-setup-form").show();
    $(".w-form-fail").hide();
    $(".current-icon").hide();
    $(".success-icon").show();

    $(".line").css("background-color", "#2f17dd");
    $(".inactive-state-2").hide();
    $("success-icon-2").show();
      
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
      }
    );

    // Copy text to clipboard on click of copy icon - Form 2 Embed code
    $(".copy-icon").on("click", function () {
      var codeText = $("#embed-code code").text();
      var tempInput = $("<textarea>");
      $("body").append(tempInput);
      tempInput.val(codeText).select();
      document.execCommand("copy");
      tempInput.remove();
      $(".copied-to-clipboard").show();
      setTimeout(function () {
        $(".copied-to-clipboard").hide();
      }, 1000);
    });

});
  