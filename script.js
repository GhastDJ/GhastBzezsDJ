function captchaCode() {
    var Numb1, Numb2, Numb3, Numb4, Code;     
    Numb1 = (Math.ceil(Math.random() * 10)-1).toString();
    Numb2 = (Math.ceil(Math.random() * 10)-1).toString();
    Numb3 = (Math.ceil(Math.random() * 10)-1).toString();
    Numb4 = (Math.ceil(Math.random() * 10)-1).toString();
    
    Code = Numb1 + Numb2 + Numb3 + Numb4;
    $("#captcha span").remove();
    $("#captcha input").remove();
    $("#captcha").append("<span id='code'>" + Code + "</span><input type='button' onclick='captchaCode();'>");
  }
  
  $(function() {
    captchaCode();
    
    $('#contactForm').submit(function(){
      var captchaVal = $("#code").text();
      var captchaCode = $(".captcha").val();
      if (captchaVal == captchaCode) {
        $(".captcha").css({
          "color" : "#609D29"
        });
      }
      else {
        $(".captcha").css({
          "color" : "#CE3B46"
        });
      }
      
      var emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,10})+$/;   
      var emailText = $(".email").val();
      if (emailFilter.test(emailText)) {
        $(".email").css({
          "color" : "#609D29"
        });
      }
      else {
        $(".email").css({
          "color" : "#CE3B46"
        });
      }
      
      var nameFilter = /^([a-zA-Z \t]{3,15})+$/;
      var nameText = $(".name").val();
      if (nameFilter.test(nameText)) {
        $(".name").css({
          "color" : "#609D29"
        });
      }
      else {
        $(".name").css({
          "color" : "#CE3B46"
        });
      }
      
      var messageText = $(".message").val().length;
      if (messageText > 50) {
        $(".message").css({
          "color" : "#609D29"
        });
      }
      else {
        $(".message").css({
          "color" : "#CE3B46"
        });
      }
      
      if ((captchaVal !== captchaCode) || (!emailFilter.test(emailText)) || (!nameFilter.test(nameText)) || (messageText < 50)) {
        return false;
      }
      if ((captchaVal == captchaCode) && (emailFilter.test(emailText)) && (nameFilter.test(nameText)) && (messageText > 50)) {
        $("#contactForm").css("display", "none");
        $("#form").append("<h2>Message sent!</h2>");
        return false;
      }
    });       
  });


  




/* Please ❤ this if you like it! */


(function($) { "use strict";
		
	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }
	
	//Navigation

	var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};
		init();
	}();

	
	//Switch light/dark
	
	$("#switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("light");
			$("#switch").addClass("switched");
		}
	});
	
})(jQuery); 


'use strict';
const tabs = document.querySelectorAll('[data-id]');
const contents = document.querySelectorAll('[data-content]');
let id = 0;

tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
        tabs[id].classList.remove('active');
        tab.classList.add('active');
        id = tab.getAttribute('data-id');
        contents.forEach(function (box) {
            box.classList.add('hide');
            if (box.getAttribute('data-content') == id){
                box.classList.remove('hide');
                box.classList.add('show');
            }
        });
    });
});