(function () {
  var links = document.querySelectorAll('.email-obfuscate');
  for (var i = 0; i < links.length; i++) {
    var el = links[i];
    var user = el.getAttribute('data-user');
    var domain = el.getAttribute('data-domain');
    if (user && domain) {
      el.setAttribute('href', 'mailto:' + user + '@' + domain);
    }
  }
})();
