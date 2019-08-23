lpTag.events.bind({
  appName: "LP_OFFERS",
  eventName: "OFFER_DISPLAY",
  func:  function (data, eventInfo) {
    if( data.engagementName.indexOf("FAQ Proactive") > -1 ) {
      engagementButton = document.getElementById('faqproactive');
      if ( engagementButton ) {
        engagementButton.click();
      }
    }
  },
  async: true,
  triggerOnce: false
});
