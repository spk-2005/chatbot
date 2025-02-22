const { NlpManager } = require('node-nlp');

const manager = new NlpManager({ languages: ['en', 'te'] });



manager.addDocument('en', 'I want to sell my products', 'farmer.sell');
manager.addDocument('te', 'నేను నా ఉత్పత్తులను అమ్మాలనుకుంటున్నాను', 'farmer.sell');

manager.addDocument('en', 'I have products to sell', 'farmer.sell');
manager.addDocument('te', 'నా దగ్గర అమ్మడానికి ఉత్పత్తులు ఉన్నాయి', 'farmer.sell');

manager.addDocument('en', 'How can I sell my produce?', 'farmer.sell');
manager.addDocument('te', 'నేను నా పంటను ఎలా అమ్మగలను?', 'farmer.sell');

manager.addDocument('en', 'I want to list my products', 'farmer.sell');
manager.addDocument('te', 'నేను నా ఉత్పత్తులను జాబితా చేయాలనుకుంటున్నాను', 'farmer.sell');

manager.addDocument('en', 'I have harvest ready to sell', 'farmer.sell');
manager.addDocument('te', 'నా దగ్గర అమ్మడానికి పంట సిద్ధంగా ఉంది', 'farmer.sell');

// Quantity Intents - English & Telugu
manager.addDocument('en', 'I have 10 tons of wheat', 'farmer.quantity');
manager.addDocument('te', 'నా దగ్గర 10 టన్నుల గోధుమలు ఉన్నాయి', 'farmer.quantity');

manager.addDocument('en', 'I have 5 tonnes of rice', 'farmer.quantity');
manager.addDocument('te', 'నా దగ్గర 5 టన్నుల బియ్యం ఉంది', 'farmer.quantity');

manager.addDocument('en', 'We harvested 20 tons of potatoes', 'farmer.quantity');
manager.addDocument('te', 'మేము 20 టన్నుల బంగాళాదుంపలు పండించాము', 'farmer.quantity');

manager.addDocument('en', 'There are 15 tons of corn available', 'farmer.quantity');
manager.addDocument('te', 'నా దగ్గర 15 టన్నుల మొక్కజొన్న ఉంది', 'farmer.quantity');

manager.addDocument('en', 'I have 1000 kg of vegetables', 'farmer.quantity');
manager.addDocument('te', 'నా దగ్గర 1000 కేజీల కూరగాయలు ఉన్నాయి', 'farmer.quantity');

// Product Type Intents - English & Telugu
manager.addDocument('en', 'I grow organic vegetables', 'farmer.product.type');
manager.addDocument('te', 'నేను సేంద్రియ కూరగాయలు పండిస్తాను', 'farmer.product.type');

manager.addDocument('en', 'We produce wheat', 'farmer.product.type');
manager.addDocument('te', 'మేము గోధుమలు పండిస్తాము', 'farmer.product.type');

manager.addDocument('en', 'I farm rice', 'farmer.product.type');
manager.addDocument('te', 'నేను వరి సాగు చేస్తాను', 'farmer.product.type');

manager.addDocument('en', 'We harvest corn', 'farmer.product.type');
manager.addDocument('te', 'మేము మొక్కజొన్న పండిస్తాము', 'farmer.product.type');

manager.addDocument('en', 'I cultivate potatoes', 'farmer.product.type');
manager.addDocument('te', 'నేను బంగాళాదుంపలు పండిస్తాను', 'farmer.product.type');

// Add Responses - English & Telugu
manager.addAnswer('en', 'farmer.sell', 'I\'ll help you list your products. Please tell me what type of produce you have and the quantity.');
manager.addAnswer('te', 'farmer.sell', 'మీ ఉత్పత్తులను జాబితా చేయడానికి నేను సహాయం చేస్తాను. దయచేసి మీరు ఏ రకమైన పంట మరియు ఎంత పరిమాణం ఉందో చెప్పండి.');

manager.addAnswer('en', 'farmer.quantity', 'I\'ll redirect you to our product listing page where you can enter the exact quantity and set your price. Click here: [PRODUCT_LISTING_URL]');
manager.addAnswer('te', 'farmer.quantity', 'మీరు ఖచ్చితమైన పరిమాణాన్ని మరియు ధరను నమోదు చేయగల మా ఉత్పత్తి జాబితా పేజీకి మిమ్మల్ని మళ్లిస్తాను. ఇక్కడ క్లిక్ చేయండి: [PRODUCT_LISTING_URL]');

manager.addAnswer('en', 'farmer.product.type', 'Excellent! Please specify the quantity you have available.');
manager.addAnswer('te', 'farmer.product.type', 'చాలా బాగుంది! దయచేసి మీ దగ్గర ఉన్న పరిమాణాన్ని తెలియజేయండి.');

// Entity Recognition - Telugu Products
manager.addNamedEntityText('product', 'grain', ['te'], ['గోధుమలు', 'బియ్యం', 'మొక్కజొన్న', 'వరి']);
manager.addNamedEntityText('product', 'vegetable', ['te'], ['బంగాళాదుంపలు', 'టమాటాలు', 'ఉల్లిపాయలు', 'కారెట్లు']);
manager.addNamedEntityText('unit', 'weight', ['te'], ['టన్ను', 'టన్నులు', 'కేజీ', 'కిలోలు', 'కిలోగ్రాములు']);

// Composite Patterns - Telugu
manager.addDocument('te', 'నా దగ్గర %product% అమ్మడానికి ఉంది', 'farmer.product.type');
manager.addDocument('te', 'నేను %product% అమ్మాలనుకుంటున్నాను', 'farmer.product.type');
manager.addDocument('te', 'నా దగ్గర %number% %unit% %product% ఉంది', 'farmer.quantity');





// Name-related intents
manager.addDocument('en', 'What is your name?', 'query.chatname');
manager.addDocument('en', 'Who are you?', 'query.chatname');
manager.addDocument('en', 'What should I call you?', 'query.chatname');
manager.addDocument('en', 'Tell me your name', 'query.chatname');
manager.addDocument('en', 'What\'s your name?', 'query.chatname');
manager.addDocument('en', 'Can you tell me who you are?', 'query.chatname');

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



// 🔹 Krushi Kalpa Site Navigation - **Farmer**
manager.addDocument('en', 'Where is my dashboard?', 'farmer.dashboard');
manager.addDocument('en', 'How do I access my dashboard?', 'farmer.dashboard');
manager.addDocument('te', 'నా డాష్‌బోర్డ్ ఎక్కడ ఉంది?', 'farmer.dashboard');

manager.addDocument('en', 'Where can I see my products?', 'farmer.products');
manager.addDocument('te', 'నా ఉత్పత్తులు ఎక్కడ చూడాలి?', 'farmer.products');

manager.addDocument('en', 'How do I sell my farm waste?', 'farmer.wastage');
manager.addDocument('te', 'నా వ్యవసాయ వ్యర్థాలను ఎలా అమ్మాలి?', 'farmer.wastage');

manager.addDocument('en', 'Where can I buy pesticides?', 'farmer.pesticides');
manager.addDocument('te', 'నేను పురుగుమందులు ఎక్కడ కొనుగోలు చేయగలను?', 'farmer.pesticides');

manager.addDocument('en', 'How can I check the latest prices?', 'farmer.prices');
manager.addDocument('te', 'తాజా ధరలు ఎలా చూడగలను?', 'farmer.prices');

manager.addDocument('en', 'Where can I get farming guidance?', 'farmer.guidance');
manager.addDocument('te', 'వ్యవసాయ మార్గదర్శకాన్ని ఎక్కడ పొందవచ్చు?', 'farmer.guidance');


// 🔹 Krushi Kalpa Site Navigation - **Consumer**
manager.addDocument('en', 'Where is my consumer dashboard?', 'consumer.dashboard');
manager.addDocument('te', 'నా వినియోగదారు డాష్‌బోర్డ్ ఎక్కడ ఉంది?', 'consumer.dashboard');

manager.addDocument('en', 'Where can I see consumer products?', 'consumer.products');
manager.addDocument('te', 'నాకు అందుబాటులో ఉన్న ఉత్పత్తులు ఎక్కడ చూడగలను?', 'consumer.products');

manager.addDocument('en', 'How do I check prices as a consumer?', 'consumer.prices');
manager.addDocument('te', 'వినియోగదారుగా ధరలను ఎలా తనిఖీ చేయాలి?', 'consumer.prices');



const trainModel = async () => {
    await manager.train();
    manager.save();
    console.log("NLP Model trained and saved.");
};

trainModel();

module.exports = manager;
