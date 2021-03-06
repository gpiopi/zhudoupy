// GA wrapper
var rpi_tracker = {
  track_event: function(category, action, opt_label) {
    __gaTracker("send", "event", category, action, opt_label);
  },

  set_dimension: function(number, value) {
    __gaTracker("set", "dimension" + number, value);
  }
};

// GA event tracking
(function($) {
  $(function() {
    // KEY EVENTS - See a.2 of measurement and reporting plan

    // 2.2, 2.3
    $("#commentform").submit(function() {
      var url = [
        location.protocol,
        "//",
        location.host,
        location.pathname
      ].join("");

      if ($("#comment_parent").val() && $("#comment_parent").val() != "0") {
        rpi_tracker.track_event("blog", "reply to blog comment", url);
      } else {
        rpi_tracker.track_event("blog", "comment on blog post", url);
      }
    });

    // 3.1
    $(".downloads .dl-torrent, .downloads .dl-zip").click(function() {
      var filename_parts = $(this).attr("href").split("/");
      var filename = filename_parts[filename_parts.length - 1];
      var action = $(this).hasClass("dl-zip")
        ? "download zip"
        : "download torrent";

      rpi_tracker.track_event("downloads", action, filename);
    });

    // 4.1
    $("li.community a").click(function() {
      rpi_tracker.track_event(
        "community",
        "click community out-link",
        $(this).attr("href")
      );
    });

    // 10

    // 12
    $("#mc-embedded-subscribe-form").submit(function() {
      rpi_tracker.set_dimension("3", "subscriber");
      rpi_tracker.track_event(
        "email subscription",
        "opt in to education e-newsletter",
        ""
      );
    });

    // 13
    $("#menu-social-icons .facebook a").click(function() {
      rpi_tracker.track_event(
        "social subscription",
        "click through to raspberry pi on facebook",
        $(this).attr("href")
      );
    });

    // 14
    $("#menu-social-icons .twitter a").click(function() {
      rpi_tracker.track_event(
        "social subscription",
        "click through to raspberry pi on twitter",
        $(this).attr("href")
      );
    });

    // 15
    $("#menu-social-icons .googleplus a").click(function() {
      rpi_tracker.track_event(
        "social subscription",
        "click through to raspberry pi on googleplus",
        $(this).attr("href")
      );
    });

    // 16
    $("#menu-social-icons .github a").click(function() {
      rpi_tracker.track_event(
        "social subscription",
        "click through to raspberry pi on github",
        $(this).attr("href")
      );
    });

    // 17
    $("#menu-social-icons .githublearning a").click(function() {
      rpi_tracker.track_event(
        "social subscription",
        "click through to raspberry pi learning on github",
        $(this).attr("href")
      );
    });

    // 18
    $("#menu-social-icons .youtube a").click(function() {
      rpi_tracker.track_event(
        "social subscription",
        "click through to raspberry pi on youtube",
        $(this).attr("href")
      );
    });

    // 19
    $("#menu-social-icons .vimeo a").click(function() {
      rpi_tracker.track_event(
        "social subscription",
        "click through to raspberry pi on vimeo",
        $(this).attr("href")
      );
    });

    // 20
    $('a[href^="mailto:"]').click(function() {
      rpi_tracker.track_event(
        "enquiry",
        "click enquiry email link",
        $(this).attr("href").replace("mailto:", "")
      );
    });
  });
})(jQuery);
