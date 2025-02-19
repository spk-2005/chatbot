const { NlpManager } = require('node-nlp');

const manager = new NlpManager({ languages: ['en', 'te'] });





// Name-related intents in English
manager.addDocument('en', 'What is your name?', 'query.chatname');
manager.addDocument('en', 'Who are you?', 'query.chatname');
manager.addDocument('en', 'What should I call you?', 'query.chatname');
manager.addDocument('en', 'Tell me your name', 'query.chatname');
manager.addDocument('en', 'What\'s your name?', 'query.chatname');
manager.addDocument('en', 'Can you tell me who you are?', 'query.chatname');

// Name-related intents in Telugu
manager.addDocument('te', 'మీ పేరు ఏమిటి?', 'query.chatname');
manager.addDocument('te', 'మీరు ఎవరు?', 'query.chatname');
manager.addDocument('te', 'నేను మిమ్మల్ని ఏమని పిలవాలి?', 'query.chatname');
manager.addDocument('te', 'మీ పేరు చెప్పండి', 'query.chatname');
manager.addDocument('te', 'మీరెవరో చెప్పగలరా?', 'query.chatname');




// Add time and date related intents
manager.addDocument('en', 'What time is it?', 'query.time');
manager.addDocument('en', 'Tell me the time', 'query.time');
manager.addDocument('en', 'Current time', 'query.time');


manager.addDocument('en', 'What is today\'s date?', 'query.date');
manager.addDocument('en', 'What is the date today?', 'query.date');
manager.addDocument('en', 'Tell me today\'s date', 'query.date');

manager.addDocument('en', 'What day is it today?', 'query.day');
manager.addDocument('en', 'Which day is it?', 'query.day');

manager.addDocument('en', 'What month is it?', 'query.month');
manager.addDocument('en', 'Which month are we in?', 'query.month');

manager.addDocument('en', 'What year is it?', 'query.year');
manager.addDocument('en', 'Which year are we in?', 'query.year');

manager.addDocument('en', 'What season is it?', 'query.season');
manager.addDocument('en', 'Which season are we in?', 'query.season');

// General information queries
manager.addDocument('en', 'What is the weather like?', 'query.weather');
manager.addDocument('en', 'How is the weather today?', 'query.weather');
manager.addDocument('en', 'Weather forecast', 'query.weather');

manager.addDocument('en', 'Tell me a fact about farming', 'query.farming_fact');
manager.addDocument('en', 'Share an agricultural fact', 'query.farming_fact');

manager.addDocument('en', 'Tell me about the market prices', 'query.market_prices');
manager.addDocument('en', 'What are the current crop prices?', 'query.market_prices');

// Telugu versions
manager.addDocument('te', 'ఇప్పుడు సమయం ఎంత?', 'query.time');
manager.addDocument('te', 'సమయం చెప్పండి', 'query.time');

manager.addDocument('te', 'ఈరోజు తేదీ ఏంటి?', 'query.date');
manager.addDocument('te', 'నేటి తేదీ ఏంటి?', 'query.date');

manager.addDocument('te', 'ఈరోజు ఏ రోజు?', 'query.day');
manager.addDocument('te', 'నేడు ఏ రోజు?', 'query.day');

manager.addDocument('te', 'ఏ నెల నడుస్తోంది?', 'query.month');
manager.addDocument('te', 'ప్రస్తుతం ఏ నెల?', 'query.month');

manager.addDocument('te', 'ఈ సంవత్సరం ఏది?', 'query.year');
manager.addDocument('te', 'ప్రస్తుతం ఏ సంవత్సరం?', 'query.year');

manager.addDocument('te', 'ఇప్పుడు ఏ ఋతువు?', 'query.season');
manager.addDocument('te', 'ప్రస్తుతం ఏ కాలం?', 'query.season');

manager.addDocument('te', 'వాతావరణం ఎలా ఉంది?', 'query.weather');
manager.addDocument('te', 'నేటి వాతావరణం ఎలా ఉంది?', 'query.weather');

manager.addDocument('te', 'వ్యవసాయం గురించి ఒక విషయం చెప్పండి', 'query.farming_fact');
manager.addDocument('te', 'వ్యవసాయ విషయం చెప్పండి', 'query.farming_fact');

manager.addDocument('te', 'మార్కెట్ ధరలు ఎలా ఉన్నాయి?', 'query.market_prices');
manager.addDocument('te', 'ప్రస్తుత పంట ధరలు ఏమిటి?', 'query.market_prices');



manager.addDocument('en', 'How are you?', 'greeting.howareyou');
manager.addDocument('en', 'How are you doing?', 'greeting.howareyou');
manager.addDocument('en', 'How is it going?', 'greeting.howareyou');
manager.addDocument('en', 'What\'s up?', 'greeting.howareyou');

manager.addDocument('en', 'Good night', 'greeting.night');
manager.addDocument('en', 'Have a good night', 'greeting.night');
manager.addDocument('en', 'Sleep well', 'greeting.night');

manager.addDocument('en', 'Good afternoon', 'greeting.afternoon');
manager.addDocument('en', 'Have a good afternoon', 'greeting.afternoon');

manager.addDocument('en', 'Thank you', 'gratitude.thanks');
manager.addDocument('en', 'Thanks a lot', 'gratitude.thanks');
manager.addDocument('en', 'I appreciate it', 'gratitude.thanks');
manager.addDocument('en', 'Thanks for your help', 'gratitude.thanks');

manager.addDocument('en', 'Goodbye', 'farewell.bye');
manager.addDocument('en', 'Bye', 'farewell.bye');
manager.addDocument('en', 'See you later', 'farewell.bye');
manager.addDocument('en', 'Take care', 'farewell.bye');

manager.addDocument('en', 'Nice to meet you', 'greeting.pleasure');
manager.addDocument('en', 'Pleased to meet you', 'greeting.pleasure');
manager.addDocument('en', 'Great to meet you', 'greeting.pleasure');

manager.addDocument('en', 'Have a great day', 'wishes.good_day');
manager.addDocument('en', 'Have a nice day', 'wishes.good_day');
manager.addDocument('en', 'Enjoy your day', 'wishes.good_day');

manager.addDocument('te', 'ఎలా ఉన్నారు?', 'greeting.howareyou');
manager.addDocument('te', 'బాగున్నారా?', 'greeting.howareyou');
manager.addDocument('te', 'క్షేమంగా ఉన్నారా?', 'greeting.howareyou');

manager.addDocument('te', 'శుభరాత్రి', 'greeting.night');
manager.addDocument('te', 'మంచి రాత్రి', 'greeting.night');
manager.addDocument('te', 'మంచిగా నిద్రపొండి', 'greeting.night');

manager.addDocument('te', 'శుభ మధ్యాహ్నం', 'greeting.afternoon');
manager.addDocument('te', 'మంచి మధ్యాహ్నం', 'greeting.afternoon');

manager.addDocument('te', 'ధన్యవాదాలు', 'gratitude.thanks');
manager.addDocument('te', 'చాలా ధన్యవాదాలు', 'gratitude.thanks');
manager.addDocument('te', 'మీ సహాయానికి ధన్యవాదాలు', 'gratitude.thanks');

manager.addDocument('te', 'వీడ్కోలు', 'farewell.bye');
manager.addDocument('te', 'సెలవు', 'farewell.bye');
manager.addDocument('te', 'మళ్ళీ కలుద్దాం', 'farewell.bye');
manager.addDocument('te', 'జాగ్రత్తగా ఉండండి', 'farewell.bye');

manager.addDocument('te', 'మిమ్మల్ని కలవడం చాలా సంతోషం', 'greeting.pleasure');
manager.addDocument('te', 'మిమ్మల్ని కలిసి ఆనందంగా ఉంది', 'greeting.pleasure');

manager.addDocument('te', 'శుభదినం', 'wishes.good_day');
manager.addDocument('te', 'మంచి రోజు గడవాలని కోరుకుంటున్నాను', 'wishes.good_day');


manager.addDocument('en', 'Hello', 'greeting.hello');
manager.addDocument('en', 'Hi', 'greeting.hello');
manager.addDocument('en', 'Hey', 'greeting.hello');
manager.addDocument('en', 'Good morning', 'greeting.morning');
manager.addDocument('en', 'Good evening', 'greeting.evening');
manager.addDocument('en', 'My details', 'user.details');
manager.addDocument('en', 'Alluvial', 'soil.alluvial');
manager.addDocument('en', 'Black', 'soil.black');
manager.addDocument('en', 'Saline', 'soil.saline');
manager.addDocument('en', 'What crops are suitable for my soil?', 'soil.query');


manager.addDocument('te', 'హలో', 'greeting.hello');
manager.addDocument('te', 'హాయ్', 'greeting.hello');
manager.addDocument('te', 'నమస్కారం', 'greeting.hello');
manager.addDocument('te', 'శుభోదయం', 'greeting.morning');
manager.addDocument('te', 'శుభ సాయంత్రం', 'greeting.evening');
manager.addDocument('te', 'నా వివరాలు', 'user.details');
manager.addDocument('te', 'ఆలివియల్', 'soil.alluvial');
manager.addDocument('te', 'బ్లాక్', 'soil.black');
manager.addDocument('te', 'ఉప్పు', 'soil.saline');
manager.addDocument('te', 'నా మట్టి కోసం ఏ పంటలు అనుకూలం?', 'soil.query');


manager.addDocument('en', 'What is organic farming?', 'organic.farming.definition');
manager.addDocument('en', 'Tell me about organic farming.', 'organic.farming.definition');
manager.addDocument('en', 'Explain organic farming.', 'organic.farming.definition');
manager.addDocument('en', 'What are the principles of organic farming?', 'organic.farming.principles');
manager.addDocument('en', 'Tell me the key principles of organic farming.', 'organic.farming.principles');
manager.addDocument('en', 'What is the basis of organic farming?', 'organic.farming.principles');
manager.addDocument('en', 'What are the benefits of organic farming?', 'organic.farming.benefits');
manager.addDocument('en', 'How is organic farming good for the environment?', 'organic.farming.benefits');
manager.addDocument('en', 'Why should I choose organic farming?', 'organic.farming.benefits');
manager.addDocument('en', 'What practices are involved in organic farming?', 'organic.farming.practices');
manager.addDocument('en', 'How do you do organic farming?', 'organic.farming.practices');
manager.addDocument('en', 'Tell me about crop rotation in organic farming.', 'organic.farming.practices');
manager.addDocument('en', 'What are the challenges of organic farming?', 'organic.farming.challenges');
manager.addDocument('en', 'Tell me the problems in organic farming.', 'organic.farming.challenges');
manager.addDocument('en', 'Why is organic farming difficult?', 'organic.farming.challenges');
manager.addDocument('en', 'What is the cost of organic farming?', 'organic.farming.cost');
manager.addDocument('en', 'Tell me about the cost of organic farming.', 'organic.farming.cost');
manager.addDocument('en', 'How much does organic farming cost?', 'organic.farming.cost');
manager.addDocument('en', 'What is the cost involved in organic farming?', 'organic.farming.cost');
manager.addDocument('en', 'What technologies are used in organic farming?', 'organic.farming.technology');
manager.addDocument('en', 'Tell me about the technology in organic farming.', 'organic.farming.technology');
manager.addDocument('en', 'What are the new technologies in organic farming?', 'organic.farming.technology');
manager.addDocument('en', 'How does technology help in organic farming?', 'organic.farming.technology');
manager.addDocument('en', 'What is the role of technology in organic farming?', 'organic.farming.technology');
manager.addDocument('en', 'How sustainable is organic farming?', 'organic.farming.sustainability');
manager.addDocument('en', 'Tell me about the sustainability of organic farming.', 'organic.farming.sustainability');
manager.addDocument('en', 'Why is organic farming considered sustainable?', 'organic.farming.sustainability');
manager.addDocument('en', 'How is organic farming beneficial to the environment?', 'organic.farming.sustainability');
manager.addDocument('en', 'What are the global trends in organic farming?', 'organic.farming.global_trends');
manager.addDocument('en', 'Tell me about the global trends in organic farming.', 'organic.farming.global_trends');
manager.addDocument('en', 'What are the global trends of organic farming?', 'organic.farming.global_trends');



manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయం ఏమిటి?', 'organic.farming.definition');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయం గురించి చెప్పండి.', 'organic.farming.definition');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయం వివరణ ఇవ్వండి.', 'organic.farming.definition');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయానికి ప్రమాణాలు ఏమిటి?', 'organic.farming.principles');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయానికి ప్రధాన ప్రమాణాలు ఏమిటి?', 'organic.farming.principles');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయం యొక్క బేసిస్ ఏమిటి?', 'organic.farming.principles');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయానికి లాభాలు ఏమిటి?', 'organic.farming.benefits');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయం పర్యావరణానికి ఎలా మంచి?', 'organic.farming.benefits');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయాన్ని ఎందుకు ఎంచుకోవాలి?', 'organic.farming.benefits');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయంలో పాటించాల్సిన ప్రక్రియలు ఏమిటి?', 'organic.farming.practices');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయం ఎలా చేయాలి?', 'organic.farming.practices');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయంలో క్రాప్ రోటేషన్ గురించి చెప్పండి.', 'organic.farming.practices');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయంలో సవాళ్లు ఏమిటి?', 'organic.farming.challenges');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయంలో సమస్యలు ఏమిటి?', 'organic.farming.challenges');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయం ఎందుకు కష్టం?', 'organic.farming.challenges');

manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయం ఏమిటి?', 'organic.farming.definition');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయం గురించి చెప్పండి.', 'organic.farming.definition');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయం వివరణ ఇవ్వండి.', 'organic.farming.definition');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయానికి ప్రమాణాలు ఏమిటి?', 'organic.farming.principles');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయానికి ప్రధాన ప్రమాణాలు ఏమిటి?', 'organic.farming.principles');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయం యొక్క బేసిస్ ఏమిటి?', 'organic.farming.principles');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయానికి లాభాలు ఏమిటి?', 'organic.farming.benefits');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయం పర్యావరణానికి ఎలా మంచి?', 'organic.farming.benefits');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయాన్ని ఎందుకు ఎంచుకోవాలి?', 'organic.farming.benefits');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయంలో పాటించాల్సిన ప్రక్రియలు ఏమిటి?', 'organic.farming.practices');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయం ఎలా చేయాలి?', 'organic.farming.practices');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయంలో క్రాప్ రోటేషన్ గురించి చెప్పండి.', 'organic.farming.practices');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయంలో సవాళ్లు ఏమిటి?', 'organic.farming.challenges');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయంలో సమస్యలు ఏమిటి?', 'organic.farming.challenges');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయం ఎందుకు కష్టం?', 'organic.farming.challenges');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయం ఖర్చులు ఏమిటి?', 'organic.farming.cost');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయం యొక్క ఖర్చుల గురించి చెప్పండి.', 'organic.farming.cost');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయం చేయడానికి ఎంత ఖర్చు అవుతుంది?', 'organic.farming.cost');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయం చేసే ఖర్చులు ఏమిటి?', 'organic.farming.cost');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయంలో ఉపయోగించే సాంకేతికతలు ఏమిటి?', 'organic.farming.technology');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయంలో సాంకేతికత గురించి చెప్పండి.', 'organic.farming.technology');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయంలో కొత్త సాంకేతికతలు ఏమిటి?', 'organic.farming.technology');
manager.addDocument('te', 'సాంకేతికత ఆర్గానిక్ వ్యవసాయానికి ఎలా సహాయపడుతుంది?', 'organic.farming.technology');
manager.addDocument('te', 'ఆర్గానిక్ వ్యవసాయంలో సాంకేతికత యొక్క పాత్ర ఏమిటి?', 'organic.farming.technology');
manager.addDocument('te', 'జైవిక వ్యవసాయం ఎంత సుస్థిరమైనది?', 'organic.farming.sustainability');
manager.addDocument('te', 'జైవిక వ్యవసాయం యొక్క సుస్థిరత గురించి చెప్పండి.', 'organic.farming.sustainability');
manager.addDocument('te', 'జైవిక వ్యవసాయం సుస్థిరమైనది ఎందుకు పరిగణించబడుతుంది?', 'organic.farming.sustainability');
manager.addDocument('te', 'జైవిక వ్యవసాయం పర్యావరణానికి ఎలా మంచిది?', 'organic.farming.sustainability');
manager.addDocument('te', 'ప్రపంచవ్యాప్తంగా జైవిక వ్యవసాయంపై ట్రెండ్స్ ఏమిటి?', 'organic.farming.global_trends');
manager.addDocument('te', 'ప్రపంచవ్యాప్తంగా జైవిక వ్యవసాయంపై ట్రెండ్స్ గురించి చెప్పండి.', 'organic.farming.global_trends');
manager.addDocument('te', 'ప్రపంచవ్యాప్తంగా జైవిక వ్యవసాయం ట్రెండ్స్ ఏమిటి?', 'organic.farming.global_trends');




const trainModel = async () => {
    await manager.train();
    manager.save();
    console.log("NLP Model trained and saved.");
};

trainModel();

module.exports = manager;
