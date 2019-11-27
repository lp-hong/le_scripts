//hide on start
lpTag.events.bind({
    appName: "LP_OFFERS",
    eventName: "OFFER_DISPLAY",
    func:  function (data, eventInfo) {
      console.log(data);
      console.log(eventInfo);
    },
    async: true,
    triggerOnce: true
});


//unhide on close
lpTag.events.bind({
    appName: "LP_OFFERS",
    eventName: "OFFER_CLOSED",
    func:  function (data, eventInfo) {
        if( data.engagementId == 1783539130) {
            $(".LPMcontainer[role='button']").css('display', 'block');
        }
    },
    async: true,
    triggerOnce: true
});
