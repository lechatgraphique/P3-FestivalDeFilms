function nextModal() {
    $('#exampleModalCenter').modal('hide');
    $('#exampleModalCenter1').modal('show');
}

(function(){

    var popupCenter = function(url, title, width, height){
        var popupWidth = width || 640;
        var popupHeight = height || 320;
        var windowLeft = window.screenLeft || window.screenX;
        var windowTop = window.screenTop || window.screenY;
        var windowWidth = window.innerWidth || document.documentElement.clientWidth;
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
        var popupLeft = windowLeft + windowWidth / 2 - popupWidth / 2 ;
        var popupTop = windowTop + windowHeight / 2 - popupHeight / 2;
        var popup = window.open(url, title, 'scrollbars=yes, width=' + popupWidth + ', height=' + popupHeight + ', top=' + popupTop + ', left=' + popupLeft);
        popup.focus();
        return true;
    };

    document.querySelector('.share_facebook').addEventListener('click', function(e){
        e.preventDefault();
        var url = this.getAttribute('data-url');
        var shareUrl = "https://www.facebook.com/sharer/sharer.php?" + encodeURIComponent(url);
        popupCenter(shareUrl, "Partager sur facebook");
    });

    document.querySelector('.share_linkedin').addEventListener('click', function(e){
        e.preventDefault();
        var url = this.getAttribute('data-url');
        var shareUrl = "https://www.linkedin.com/shareArticle?url=" + encodeURIComponent(url);
        popupCenter(shareUrl, "Partager sur Linkedin");
    });

})();

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1);
      if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
  }
  function createAcceptCookie() {
    var cookieBanner = document.getElementById("cookie-banner");
    document.cookie = "accepted_cookie_policy=yes; expires=" + setExpiryDate() + ";";
    cookieBanner.classList.add("accepted-cookie-policy");
  }
  function setExpiryDate() {
    var d = new Date();
    d.setFullYear(d.getFullYear() + 1);
    return d.toUTCString();
  }
  var isCookieSet = getCookie("accepted_cookie_policy");
  if (isCookieSet === "") {
    document.getElementById("cookie-button").addEventListener("click", createAcceptCookie);
  } else {
    document.getElementById("cookie-banner").classList.add("accepted");
  }