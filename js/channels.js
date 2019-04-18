var messageObject1 = {
    own: true,
    createdOn: new Date() , /* month 0 is jan. */
    expiresOn:  new Date(Date.now() + 15 * 60 * 1000), /* month 0 is jan. */
    createdBy: "vocally.clearly.crawled",
    text: "Testin this dummy message",
    jqueryObject : null,
    update : function ()  {
        var expiresIn = ((this.expiresOn - Date.now()) / 1000 / 60);
        expiresIn = parseFloat(expiresIn.toFixed(1));
          this.jqueryObject.find("em").empty();
          this.jqueryObject.find("em").text(expiresIn + ' min. left');
          if(expiresIn < 5) this.jqueryObject.find("em").css("color","red");
           else this.jqueryObject.find("em").css("color","black");

    }
   
};

var yummy = {
    name: "#Yummy",
    createdOn: new Date(2016, 03, 01), /* month 0 is jan. */
    createdBy: "minus.plus.yummy",
    starred: false,
    expiresIn: 100,
    messageCount: 999,
    messages : []           // #10 #message s property in #chl object
};

var sevencontinents = {
    name: "#SevenContinents",
    createdOn: new Date(2016, 03, 02), /* month 0 is jan. */
    createdBy: "cheeses.yard.applies",
    starred: true,
    expiresIn: 60,
    messageCount: 5,
    messages : []           // #10 #message s property in #chl object

};

var killerapp = {
    name: "#KillerApp",
    createdOn: new Date(2016, 08, 30), /* month 0 is jan. */
    createdBy: "lodge.bits.fake",
    starred: false,
    expiresIn: 1,
    messageCount: 10351,
    messages : []           // #10 #message s property in #chl object

};

var firstpersononmars = {
    name: "#FirstPersonOnMars",
    createdOn: new Date(2016, 08, 28), /* month 0 is jan. */
    createdBy: "snipped.atom.grid",
    starred: true,
    expiresIn: 30003,
    messageCount: 2424,
    messages : []           // #10 #message s property in #chl object

};

var octoberfest = {
    name: "#Octoberfest",
    createdOn: new Date(2016, 08, 25), /* month 0 is jan. */
    createdBy: "vocally.clearly.crawled",
    starred: false,
    expiresIn: 60,
    messageCount: 321,
    messages : []           // #10 #message s property in #chl object

};