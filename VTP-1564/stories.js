////// FASHION FOR WOMEN  /////////////////////////////////////////////////////////

var story1 = [
    { m: "Hello!", wait: 500},
    { m: "I'm Alex :)", wait: 1000},
    { m: "You can talk to me by selecting one of the options below.", wait: 2500},
    { question: "Give it a try!", answers: [
        { m: "Hi! :D", opt: "Hi :D", next:"hi"},
    ] , wait: 1000},
    { label: "hi", m: "That's great! *handok*", wait: 1000},
    { m: "I'm here to scout out some fashion articles for you. *dress* *shoe*", wait: 2500},
    { question: "What are you most interested in?", answers: [
        { m: "Hottest deals *fire*, please.", opt: "Hottest deals *fire*", next:"hottest_deals"},
        { m: "Lowest prices *moneyface*, please.", opt: "Lowest prices *moneyface*", next:"lowest_prices"},
    ]},
    //Hottest deals
    { label: "hottest_deals", m: "Hottest deals. Got it."},
    { m: "There you go", images: ["fashion1.jpg", "fashion2.jpg"], wait: 3000},
    { question: "Would you like me to get you some more?", answers : [
        { m: "Yes, please!", opt: "Yes, please!", next:"yes_1"},
        { m: "No, I'm good", opt: "No, I'm good", next:"no"},
    ]},
    { label: "yes_1", m: "On my way!", wait: 1000},
    { question: "Here you go", images: ["fashion3.jpg", "fashion4.jpg"], wait: 3000, answers : [
        { m: "Cool! *thumbsup*", opt: "Cool! *thumbsup*", next:"cool_1"},
    ]},

    //Lowest prices
    { label: "lowest_prices", m: "Lowest prices. Got it."},
    { m: "There you go", images: ["fashion5.jpg", "fashion6.jpg"], wait: 3000},
    { question: "Would you like me to get you some more?", answers : [
        { m: "Yes, please!", opt: "Yes, please!", next:"yes_2"},
        { m: "No, I'm good", opt: "No, I'm good", next:"no"},
    ]},
    { label: "yes_2", m: "On my way!", wait: 1000},
    { question: "Here you go", images: ["fashion7.jpg", "fashion8.jpg"], wait: 3000, answers : [
        { m: "Cool! *thumbsup*", opt: "Cool! *thumbsup*", next:"cool_1"},
    ]},

    //Endings
    { label: "cool_1", m: "They are, right?", wait: 1000},
    { m: "There's a lot more on our Wish app."},
    { m: "You should give it a try! *fingerright* *phone*", next: "end"},

    { label: "no", m: "That's cool. *angel*", wait: 1000},
    { m: "Maybe you can have a look on our Wish app."},
    { question: "There are millions of trending items from $1! *moneybag* *dollar* ", answers : [
        { m: "Cool! *thumbsup*", opt: "Cool! *thumbsup*", next:"cool_3"},
    ], wait: 2000},
    { label: "cool_3", m: "I know, right?", wait: 1000},
    { m: "You should give it a try!"},
    { m: "Happy shopping! *shopping*", next: "end"},
];

////// MAKEUP /////////////////////////////////////////////////////////

var story3 = [
    { m: "Hello!", wait: 500},
    { m: "I'm Alex :)", wait: 1000},
    { m: "You can talk to me by selecting one of the options below.", wait: 2500},
    { question: "Give it a try!", answers: [
        { m: "Hi! :D", opt: "Hi :D", next:"hi"},
    ] , wait: 1000},
    { label: "hi", m: "That's great! *handok*", wait: 1000},
    { m: "I'm here to scout out some makeup articles for you. *lipstick* *nails*", wait: 2500},
    { question: "What are you most interested in?", answers: [
        { m: "Hottest deals *fire*, please.", opt: "Hottest deals *fire*", next:"hottest_deals"},
        { m: "Lowest prices *moneyface*, please.", opt: "Lowest prices *moneyface*", next:"lowest_prices"},
    ]},
    //Hottest deals
    { label: "hottest_deals", m: "Hottest deals. Got it."},
    { m: "There you go", images: ["makeup1.jpg", "makeup2.jpg"], wait: 3000},
    { question: "Would you like me to get you some more?", answers : [
        { m: "Yes, please!", opt: "Yes, please!", next:"yes_1"},
        { m: "No, I'm good", opt: "No, I'm good", next:"no"},
    ]},
    { label: "yes_1", m: "On my way!", wait: 1000},
    { question: "Here you go", images: ["makeup3.jpg", "makeup4.jpg"], wait: 3000, answers : [
        { m: "Cool! *thumbsup*", opt: "Cool! *thumbsup*", next:"cool_1"},
    ]},

    //Lowest prices
    { label: "lowest_prices", m: "Lowest prices. Got it."},
    { m: "There you go", images: ["makeup5.jpg", "makeup6.jpg"], wait: 3000},
    { question: "Would you like me to get you some more?", answers : [
        { m: "Yes, please!", opt: "Yes, please!", next:"yes_2"},
        { m: "No, I'm good", opt: "No, I'm good", next:"no"},
    ]},
    { label: "yes_2", m: "On my way!", wait: 1000},
    { question: "Here you go", images: ["makeup7.jpg", "makeup8.jpg"], wait: 3000, answers : [
        { m: "Cool! *thumbsup*", opt: "Cool! *thumbsup*", next:"cool_1"},
    ]},

    //Endings
    { label: "cool_1", m: "They are, right?", wait: 1000},
    { m: "There's a lot more on our Wish app."},
    { m: "You should give it a try! *fingerright* *phone*", next: "end"},

    { label: "no", m: "That's cool. *angel*", wait: 1000},
    { m: "Maybe you can have a look on our Wish app."},
    { question: "There are millions of trending items from $1! *moneybag* *dollar* ", answers : [
        { m: "Cool! *thumbsup*", opt: "Cool! *thumbsup*", next:"cool_3"},
    ], wait: 2000},
    { label: "cool_3", m: "I know, right?", wait: 1000},
    { m: "You should give it a try!"},
    { m: "Happy shopping! *shopping*", next: "end"},
];

////// WATCHES FOR WOMEN /////////////////////////////////////////////////////////
var story5 = [
    { m: "Hello!", wait: 500},
    { m: "I'm Alex :)", wait: 1000},
    { m: "You can talk to me by selecting one of the options below.", wait: 2500},
    { question: "Give it a try!", answers: [
        { m: "Hi! :D", opt: "Hi :D", next:"hi"},
    ] , wait: 1000},
    { label: "hi", m: "That's great! *handok*", wait: 1000},
    { m: "I'm here to scout out some watches for you. *watch* *present*", wait: 2500},
    { question: "What are you most interested in?", answers: [
        { m: "Hottest deals *fire*, please.", opt: "Hottest deals *fire*", next:"hottest_deals"},
        { m: "Lowest prices *moneyface*, please.", opt: "Lowest prices *moneyface*", next:"lowest_prices"},
    ]},
    //Hottest deals
    { label: "hottest_deals", m: "Hottest deals. Got it."},
    { m: "There you go", images: ["watchw1.jpg", "watchw4.jpg"], wait: 3000},
    { question: "Would you like me to get you some more?", answers : [
        { m: "Yes, please!", opt: "Yes, please!", next:"yes_1"},
        { m: "No, I'm good", opt: "No, I'm good", next:"no"},
    ]},
    { label: "yes_1", m: "On my way!", wait: 1000},
    { question: "Here you go", images: ["watchw2.jpg", "watchw3.jpg"], wait: 3000, answers : [
        { m: "Cool! *thumbsup*", opt: "Cool! *thumbsup*", next:"cool_1"},
    ]},

    //Lowest prices
    { label: "lowest_prices", m: "Lowest prices. Got it."},
    { m: "There you go", images: ["watchw1.jpg", "watchw5.jpg"], wait: 3000},
    { question: "Would you like me to get you some more?", answers : [
        { m: "Yes, please!", opt: "Yes, please!", next:"yes_2"},
        { m: "No, I'm good", opt: "No, I'm good", next:"no"},
    ]},
    { label: "yes_2", m: "On my way!", wait: 1000},
    { question: "Here you go", images: ["watchw6.jpg", "watchw7.jpg"], wait: 3000, answers : [
        { m: "Cool! *thumbsup*", opt: "Cool! *thumbsup*", next:"cool_1"},
    ]},

    //Endings
    { label: "cool_1", m: "They are, right?", wait: 1000},
    { m: "There's a lot more on our Wish app."},
    { m: "You should give it a try! *fingerright* *phone*", next: "end"},

    { label: "no", m: "That's cool. *angel*", wait: 1000},
    { m: "Maybe you can have a look on our Wish app."},
    { question: "There are millions of trending items from $1! *moneybag* *dollar* ", answers : [
        { m: "Cool! *thumbsup*", opt: "Cool! *thumbsup*", next:"cool_3"},
    ], wait: 2000},
    { label: "cool_3", m: "I know, right?", wait: 1000},
    { m: "You should give it a try!"},
    { m: "Happy shopping! *shopping*", next: "end"},
];

////// FASHION FOR MEN /////////////////////////////////////////////////////////
var story2 = [
    { m: "Hello!", wait: 500},
    { m: "I'm Alex :)", wait: 1000},
    { m: "You can talk to me by selecting one of the options below.", wait: 2500},
    { question: "Give it a try!", answers: [
        { m: "Hi! :D", opt: "Hi :D", next:"hi"},
    ] , wait: 1000},
    { label: "hi", m: "That's great! *handok*", wait: 1000},
    { m: "I'm here to scout out some fashion articles for you. *tie* *suit*", wait: 2500},
    { question: "What are you most interested in?", answers: [
        { m: "Hottest deals *fire*, please.", opt: "Hottest deals *fire*", next:"hottest_deals"},
        { m: "Lowest prices *moneyface*, please.", opt: "Lowest prices *moneyface*", next:"lowest_prices"},
    ]},
    //Hottest deals
    { label: "hottest_deals", m: "Hottest deals. Got it."},
    { m: "There you go", images: ["fashionm1.jpg", "fashionm2.jpg"], wait: 3000},
    { question: "Would you like me to get you some more?", answers : [
        { m: "Yes, please!", opt: "Yes, please!", next:"yes_1"},
        { m: "No, I'm good", opt: "No, I'm good", next:"no"},
    ]},
    { label: "yes_1", m: "On my way!", wait: 1000},
    { question: "Here you go", images: ["fashionm3.jpg", "fashionm4.jpg"], wait: 3000, answers : [
        { m: "Cool! *thumbsup*", opt: "Cool! *thumbsup*", next:"cool_1"},
    ]},

    //Lowest prices
    { label: "lowest_prices", m: "Lowest prices. Got it."},
    { m: "There you go", images: ["fashionm5.jpg", "fashionm6.jpg"], wait: 3000},
    { question: "Would you like me to get you some more?", answers : [
        { m: "Yes, please!", opt: "Yes, please!", next:"yes_2"},
        { m: "No, I'm good", opt: "No, I'm good", next:"no"},
    ]},
    { label: "yes_2", m: "On my way!", wait: 1000},
    { question: "Here you go", images: ["fashionm7.jpg", "fashionm8.jpg"], wait: 3000, answers : [
        { m: "Cool! *thumbsup*", opt: "Cool! *thumbsup*", next:"cool_1"},
    ]},

    //Endings
    { label: "cool_1", m: "They are, right?", wait: 1000},
    { m: "There's a lot more on our Wish app."},
    { m: "You should give it a try! *fingerright* *phone*", next: "end"},

    { label: "no", m: "That's cool. *angel*", wait: 1000},
    { m: "Maybe you can have a look on our Wish app."},
    { question: "There are millions of trending items from $1! *moneybag* *dollar* ", answers : [
        { m: "Cool! *thumbsup*", opt: "Cool! *thumbsup*", next:"cool_3"},
    ], wait: 2000},
    { label: "cool_3", m: "I know, right?", wait: 1000},
    { m: "You should give it a try!"},
    { m: "Happy shopping! *shopping*", next: "end"},
];

////// WATCHES FOR MEN /////////////////////////////////////////////////////////
var story4 = [
    { m: "Hello!", wait: 500},
    { m: "I'm Alex :)", wait: 1000},
    { m: "You can talk to me by selecting one of the options below.", wait: 2500},
    { question: "Give it a try!", answers: [
        { m: "Hi! :D", opt: "Hi :D", next:"hi"},
    ] , wait: 1000},
    { label: "hi", m: "That's great! *handok*", wait: 1000},
    { m: "I'm here to scout out some watches for you. *watch* *present*", wait: 2500},
    { question: "What are you most interested in?", answers: [
        { m: "Hottest deals *fire*, please.", opt: "Hottest deals *fire*", next:"hottest_deals"},
        { m: "Lowest prices *moneyface*, please.", opt: "Lowest prices *moneyface*", next:"lowest_prices"},
    ]},
    //Hottest deals
    { label: "hottest_deals", m: "Hottest deals. Got it."},
    { m: "There you go", images: ["watchm1.jpg", "watchm2.jpg"], wait: 3000},
    { question: "Would you like me to get you some more?", answers : [
        { m: "Yes, please!", opt: "Yes, please!", next:"yes_1"},
        { m: "No, I'm good", opt: "No, I'm good", next:"no"},
    ]},
    { label: "yes_1", m: "On my way!", wait: 1000},
    { question: "Here you go", images: ["watchm3.jpg", "watchm4.jpg"], wait: 3000, answers : [
        { m: "Cool! *thumbsup*", opt: "Cool! *thumbsup*", next:"cool_1"},
    ]},

    //Lowest prices
    { label: "lowest_prices", m: "Lowest prices. Got it."},
    { m: "There you go", images: ["watchm5.jpg", "watchm6.jpg"], wait: 3000},
    { question: "Would you like me to get you some more?", answers : [
        { m: "Yes, please!", opt: "Yes, please!", next:"yes_2"},
        { m: "No, I'm good", opt: "No, I'm good", next:"no"},
    ]},
    { label: "yes_2", m: "On my way!", wait: 1000},
    { question: "Here you go", images: ["watchm7.jpg", "watchm8.jpg"], wait: 3000, answers : [
        { m: "Cool! *thumbsup*", opt: "Cool! *thumbsup*", next:"cool_1"},
    ]},

    //Endings
    { label: "cool_1", m: "They are, right?", wait: 1000},
    { m: "There's a lot more on our Wish app."},
    { m: "You should give it a try! *fingerright* *phone*", next: "end"},

    { label: "no", m: "That's cool. *angel*", wait: 1000},
    { m: "Maybe you can have a look on our Wish app."},
    { question: "There are millions of trending items from $1! *moneybag* *dollar* ", answers : [
        { m: "Cool! *thumbsup*", opt: "Cool! *thumbsup*", next:"cool_3"},
    ], wait: 2000},
    { label: "cool_3", m: "I know, right?", wait: 1000},
    { m: "You should give it a try!"},
    { m: "Happy shopping! *shopping*", next: "end"},
];

////// GADGETS /////////////////////////////////////////////////////////
var story6 = [
    { m: "Hello!", wait: 500},
    { m: "I'm Alex :)", wait: 1000},
    { m: "You can talk to me by selecting one of the options below.", wait: 2500},
    { question: "Give it a try!", answers: [
        { m: "Hi! :D", opt: "Hi :D", next:"hi"},
    ] , wait: 1000},
    { label: "hi", m: "That's great! *handok*", wait: 1000},
    { m: "I'm here to scout out some gadgets for you. *martian* *phone*", wait: 2500},
    { question: "What are you most interested in?", answers: [
        { m: "Hottest deals *fire*, please.", opt: "Hottest deals *fire*", next:"hottest_deals"},
        { m: "Lowest prices *moneyface*, please.", opt: "Lowest prices *moneyface*", next:"lowest_prices"},
    ]},
    //Hottest deals
    { label: "hottest_deals", m: "Hottest deals. Got it."},
    { m: "There you go", images: ["gadget1.jpg", "gadget2.jpg"], wait: 3000},
    { question: "Would you like me to get you some more?", answers : [
        { m: "Yes, please!", opt: "Yes, please!", next:"yes_1"},
        { m: "No, I'm good", opt: "No, I'm good", next:"no"},
    ]},
    { label: "yes_1", m: "On my way!", wait: 1000},
    { question: "Here you go", images: ["gadget3.jpg", "gadget4.jpg"], wait: 3000, answers : [
        { m: "Cool! *thumbsup*", opt: "Cool! *thumbsup*", next:"cool_1"},
    ]},

    //Lowest prices
    { label: "lowest_prices", m: "Lowest prices. Got it."},
    { m: "There you go", images: ["gadget7.jpg", "gadget6.jpg"], wait: 3000},
    { question: "Would you like me to get you some more?", answers : [
        { m: "Yes, please!", opt: "Yes, please!", next:"yes_2"},
        { m: "No, I'm good", opt: "No, I'm good", next:"no"},
    ]},
    { label: "yes_2", m: "On my way!", wait: 1000},
    { question: "Here you go", images: ["gadget5.jpg", "gadget8.jpg"], wait: 3000, answers : [
        { m: "Cool! *thumbsup*", opt: "Cool! *thumbsup*", next:"cool_1"},
    ]},

    //Endings
    { label: "cool_1", m: "They are, right?", wait: 1000},
    { m: "There's a lot more on our Wish app."},
    { m: "You should give it a try! *fingerright* *phone*", next: "end"},

    { label: "no", m: "That's cool. *angel*", wait: 1000},
    { m: "Maybe you can have a look on our Wish app."},
    { question: "There are millions of trending items from $1! *moneybag* *dollar* ", answers : [
        { m: "Cool! *thumbsup*", opt: "Cool! *thumbsup*", next:"cool_3"},
    ], wait: 2000},
    { label: "cool_3", m: "I know, right?", wait: 1000},
    { m: "You should give it a try!"},
    { m: "Happy shopping! *shopping*", next: "end"},
];