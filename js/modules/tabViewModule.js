(function() {

  var tabs = function(options) {
    var el = document.querySelector(options.el);
    var cardLinks = el.querySelectorAll(options.cardLinks);
    var cardContent = el.querySelectorAll(options.cardContent);
    var activeIndex = 0;
    var initCalled = false;

    var init = function() {
      if (!initCalled) {
        initCalled = true;
        for (var i = 0; i < cardLinks.length; i++) {
          var link = cardLinks[i];
          handleClick(link, i);
        }
      }
    };

    var handleClick = function(link, index) {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        goToTab(index);
      });
    };

    var goToTab = function(index) {
      if (
        index !== activeIndex &&
        index >= 0 &&
        index <= cardLinks.length
      ) {
        cardLinks[activeIndex].classList.remove("is-active");
        cardLinks[index].classList.add("is-active");
        cardContent[activeIndex].classList.remove("is-active");
        cardContent[index].classList.add("is-active");
        activeIndex = index;
      }
    };

    return {
      init: init,
      goToTab: goToTab
    };
  };

  window.tabs = tabs;
})();

var familyFriendly = tabs({
  el: "#family-friendly",
  cardLinks: ".link",
  cardContent: ".card"
});

familyFriendly.init();

var newNeutrals = tabs({
  el: "#new-neutrals",
  cardLinks: ".link",
  cardContent: ".card"
});

newNeutrals.init();
