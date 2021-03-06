//hide on start
var hide = lpTag.events.bind({
    appName: "LP_OFFERS",
    eventName: "OFFER_DISPLAY",
    func:  function (data, eventInfo) {
        if(data.engagementId == 1770275130) {
            $(".LPMcontainer[role='button']").css('display', 'none');
        }
    },
    async: true,
    triggerOnce: false
});


//unhide on close
lpTag.events.bind({
    appName: "LP_OFFERS",
    eventName: "OFFER_CLOSED",
    func:  function (data, eventInfo) {
        lpTag.events.unbind(hide);
        if( data.engagementId == 1783539130) {
            $(".LPMcontainer[role='button']").css('display', 'block');
        }
    },
    async: true,
    triggerOnce: true
});
