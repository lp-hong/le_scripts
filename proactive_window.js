lpTag.events.bind({
    appName: "LP_OFFERS",
    eventName: "OFFER_IMPRESSION",
    func:  function (data, eventInfo) {
        if( data.windowId == 2512100730 ) {
          lpTag.taglets.rendererStub.click(data.engagementId);
        }
    },
    async: true,
    triggerOnce: true
});
