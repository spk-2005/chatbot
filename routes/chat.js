const express = require('express');
const User = require('../models/Users');
const manager = require('../services/nlpservice');

const router = express.Router();



const navigationLinks = {
    farmer: {
        dashboard: "https://krushikalpa.netlify.app/farmeraccount",
        products: "https://krushikalpa.netlify.app/products",
        wastage: "https://krushikalpa.netlify.app/wastage",
        pesticides: "https://krushikalpa.netlify.app/fpesticides",
        prices: "https://krushikalpa.netlify.app/fprices",
        guidance: "https://krushikalpa.netlify.app/farminguidence"
    },
    consumer: {
        dashboard: "https://krushikalpa.netlify.app/consumerdashboard",
        products: "https://krushikalpa.netlify.app/cproducts",
        wastage: "https://krushikalpa.netlify.app/wastage",
        prices: "https://krushikalpa.netlify.app/cprices"
    }
};


const conversationResponses = {
    'greeting.howareyou': {
        en: "I'm doing well, thank you! How can I help you today?",
        te: "నేను బాగున్నాను, ధన్యవాదాలు! నేను మీకు ఎలా సహాయపడగలను?"
    },
    'greeting.night': {
        en: "Good night! Have a peaceful rest.",
        te: "శుభరాత్రి! మంచిగా విశ్రాంతి తీసుకోండి."
    },
    'greeting.afternoon': {
        en: "Good afternoon! How may I assist you today?",
        te: "శుభ మధ్యాహ్నం! నేను మీకు ఎలా సహాయపడగలను?"
    },
    'gratitude.thanks': {
        en: "You're welcome! Is there anything else I can help you with?",
        te: "స్వాగతం! మరేదైనా సహాయం కావాలా?"
    },
    'farewell.bye': {
        en: "Goodbye! Have a great time. Feel free to come back if you need any assistance.",
        te: "వీడ్కోలు! మంచి సమయం గడపండి. ఏదైనా సహాయం కావాలంటే తిరిగి రండి."
    },
    'greeting.pleasure': {
        en: "The pleasure is mine! How can I assist you today?",
        te: "నాకు కూడా చాలా సంతోషంగా ఉంది! నేను మీకు ఎలా సహాయపడగలను?"
    },
    'wishes.good_day': {
        en: "Thank you! I hope you have a wonderful day too!",
        te: "ధన్యవాదాలు! మీకు కూడా మంచి రోజు గడవాలని కోరుకుంటున్నాను!"
    }
};


const organicResponses = {
    'organic.farming.definition': {
        en: "Organic farming is an agricultural system that avoids synthetic chemicals and genetically modified organisms, aiming for sustainability and healthier food.",
        te: "జైవిక వ్యవసాయం అనేది రసాయనికాలు మరియు జన్యు మార్పిడి ఉన్న ఆహారాలను నివారించడానికి వ్యవసాయ వ్యవస్థ, దీని లక్ష్యం స్థిరత్వం మరియు ఆరోగ్యకరమైన ఆహారం."
    },
    'organic.farming.principles': {
        en: "The core principles of organic farming are health, ecology, fairness, and care, focusing on ecological balance and sustainable practices.",
        te: "జైవిక వ్యవసాయానికి కేంద్ర భావనలు ఆరోగ్యం, పర్యావరణం, న్యాయం మరియు శ్రద్ధ ఇవి, ఇవి పర్యావరణ సంతులనం మరియు సుస్థిరమైన అభ్యాసాలను ధ్యానంగా ఉంచుతూ ఉన్నాయి."
    },
    'organic.farming.benefits': {
        en: "Organic farming benefits include environmental protection, biodiversity conservation, healthier food, and economic gains for farmers.",
        te: "జైవిక వ్యవసాయం ప్రయోజనాలు పర్యావరణ రక్షణ, జైవవైవిధ్య సంరక్షణ, ఆరోగ్యకరమైన ఆహారం మరియు రైతుల ఆర్థిక లాభాలు ఉన్నాయి."
    },
    'organic.farming.practices': {
        en: "Practices in organic farming include crop rotation, composting, green manure, natural pest control, and mulching.",
        te: "జైవిక వ్యవసాయంలో అభ్యాసాలు పంట రొటేషన్, కాంపోస్టింగ్, గ్రీన్ మాన్యూర్, ప్రకృతి దోమ నియంత్రణ మరియు మల్చింగ్ ఉన్నాయి."
    },
    'organic.farming.challenges': {
        en: "Challenges of organic farming include higher labor costs, lower yields, limited access to organic inputs, and market access issues.",
        te: "జైవిక వ్యవసాయ సమస్యలు అధిక కార్మిక ఖర్చులు, తక్కువ దిగుబడులు, కృషి కోసం పరిమితమైన సాదారణ ఇన్పుట్లు మరియు మార్కెట్ అక్సెస్ సమస్యలు ఉన్నాయి."
    },
    'organic.farming.cost': {
        en: "The cost of organic farming can be higher due to labor-intensive practices, certification fees, and the need for organic inputs. However, it often results in premium prices for products.",
        te: "జైవిక వ్యవసాయ ఖర్చులు కార్మిక ఆధారిత అభ్యాసాలు, సర్టిఫికేషన్ ఫీజులు మరియు జైవిక ఇన్పుట్ల అవసరం వల్ల ఎక్కువగా ఉండవచ్చు. అయితే, ఇది సాధారణంగా ఉత్పత్తుల కోసం ప్రీమియం ధరలు తీసుకొస్తుంది."
    },
    'organic.farming.certification': {
        en: "Organic certification involves a process of ensuring that farming practices meet specific standards set by recognized bodies, such as USDA Organic or EU Organic. This ensures that consumers are getting truly organic products.",
        te: "జైవిక సర్టిఫికేషన్ అనేది వ్యవసాయ అభ్యాసాలు గుర్తింపు పొందిన సంస్థలచే ఏర్పాటు చేసిన నిర్దిష్ట ప్రమాణాలు పాటిస్తున్నాయని నిర్ధారించే ప్రక్రియ. ఇది వినియోగదారులకు నిజమైన జైవిక ఉత్పత్తులు అందుతున్నాయని నిర్ధారిస్తుంది."
    },
    'organic.farming.economics': {
        en: "Economically, organic farming may require higher upfront investment but can lead to higher long-term returns due to premium pricing. It can also benefit from government subsidies or organic program incentives.",
        te: "ఆర్థికంగా, జైవిక వ్యవసాయం ప్రారంభ పెట్టుబడులు ఎక్కువ అవసరం చేయవచ్చు కానీ ప్రీమియం ధరల కారణంగా దీర్ఘకాలిక లాభాలు పొందవచ్చు. ఇది ప్రభుత్వ సబ్సిడీలు లేదా జైవిక కార్యక్రమ ప్రోత్సాహకాలను కూడా ఉపయోగించవచ్చు."
    },
    'organic.farming.technology': {
        en: "Technological advancements in organic farming include the use of precision agriculture, drones, soil health monitoring, and natural pest control technologies, which improve yields and sustainability.",
        te: "జైవిక వ్యవసాయంలో సాంకేతిక అభివృద్ధులు ప్రిసిషన్ వ్యవసాయం, డ్రోన్లు, మట్టి ఆరోగ్య పరిశీలన మరియు ప్రకృతి దోమ నియంత్రణ సాంకేతికతలు ఉపయోగించడం ద్వారా దిగుబడులను మరియు సుస్థిరతను మెరుగుపరుస్తాయి."
    },
    'organic.farming.sustainability': {
        en: "Organic farming is considered more sustainable than conventional methods due to its focus on preserving soil health, conserving water, and using fewer chemical inputs. It also promotes biodiversity.",
        te: "జైవిక వ్యవసాయం సాంప్రదాయ పద్ధతులతో పోల్చితే ఎక్కువ సుస్థిరమైనది అని పరిగణించబడుతుంది, ఎందుకంటే ఇది మట్టి ఆరోగ్యం సంరక్షణ, నీటి సంరక్షణ మరియు రసాయనిక ఇన్పుట్లను తగ్గించడం మీద దృష్టి పెట్టింది. ఇది జైవవైవిధ్యాన్ని కూడా ప్రోత్సహిస్తుంది."
    },
    'organic.farming.global_trends': {
        en: "Globally, organic farming has been growing rapidly, driven by consumer demand for healthier and environmentally-friendly products. The organic food market is expanding in many countries, including the US, Europe, and Asia.",
        te: "ప్రపంచవ్యాప్తంగా, జైవిక వ్యవసాయం వేగంగా పెరుగుతుంది, ఆరోగ్యకరమైన మరియు పర్యావరణపరమైన ఉత్పత్తులకు వినియోగదారుల డిమాండ్ పెరుగుతున్న నేపథ్యంలో. జైవిక ఆహార మార్కెట్ అనేక దేశాలలో పెరుగుతోంది, ఇందులో అమెరికా, యూరప్ మరియు ఆసియా ఉన్నాయి."
    },
    'organic.farming.history': {
        en: "Organic farming has roots in traditional farming practices that predate the widespread use of synthetic pesticides and fertilizers. It gained formal recognition in the early 20th century, particularly through the works of pioneers like Rudolf Steiner and Sir Albert Howard.",
        te: "జైవిక వ్యవసాయం సాంప్రదాయ వ్యవసాయ పద్ధతులలో మూలాలు కలిగి ఉంటుంది, ఇవి సింథటిక్ పెస్టిసైడ్లు మరియు ఎరువుల విస్తృత వాడకానికి ముందు ఉన్నాయి. ఇది 20వ శతాబ్దం ప్రారంభంలో అధికారిక గుర్తింపును పొందింది, ముఖ్యంగా రూడోల్ స్టీన్ మరియు సర్ ఆల్‌బర్ట్ హోవర్డ్ వంటి ప్రాదేశికుల పని ద్వారా."
    }
};


const soilCropRecommendations = {
    alluvial: {
        en: "Alluvial soil is great for crops like Rice, Wheat, and Cotton.",
        te: "ఆలీవియల్ మట్టిలో అరణ్యాలు, గోధుమలు మరియు పత్తి వంటి పంటలు మంచి వృద్ధి చెందతాయి."
    },
    black: {
        en: "Black soil is ideal for crops like Cotton, Groundnut, and Soybean.",
        te: "బ్లాక్ మట్టిలో పత్తి, పల్లీలు మరియు సోయాబీన్ వంటి పంటలు చాలా ఉత్తమంగా పండిస్తాయి."
    },
    saline: {
        en: "Saline soil may require salt-tolerant crops like Barley and Cotton.",
        te: "పెరుగుతున్న ఉప్పు పంటలకు ఉప్పు సహనం ఉన్న పంటలు అవసరం అవుతాయి, ఉదాహరణకు బార్లీ మరియు పత్తి."
    },
    sandy: {
        en: "Sandy soil is good for Peanuts, Watermelon, and Carrots.",
        te: "పలువురు మట్టిలో పల్లీలు, తరిగిపోతున్న పప్పులు మరియు గాజులు వంటి పంటలు మంచి వృద్ధి చెందుతాయి."
    },
    clay: {
        en: "Clay soil works well for Paddy, Lettuce, and Cabbage.",
        te: "క్లే మట్టి పనికొచ్చే పంటలు పడి, లెట్టియస్ మరియు కాబేజి."
    },
    laterite: {
        en: "Laterite soil is suitable for Cashew, Tea, Coffee, and Rubber.",
        te: "లేటరైట్ మట్టి ఆవకాయ, టీ, కాఫీ మరియు రబ్బరు పంటలకు అనువైనది."
    }
};

router.post('/chat', async (req, res) => {
    const { message, email, language = 'en' } = req.body;  // Default to English if no language is specified

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.json({ response: "Sorry, I couldn't find your details. Please check your email and try again." });
        }

        const response = await manager.process(language, message.toLowerCase());  // Process based on language
        let botResponse = '';

        const soilType = user.landDetails.soilType ? user.landDetails.soilType.toLowerCase() : null;
        const userType = user.userType === 'farmer' ? 'farmer' : 'consumer';
        switch (response.intent) {
            case 'farmer.sell':
                botResponse = language === 'te' 
                    ? "మీ ఉత్పత్తులను జాబితా చేయడానికి నేను సహాయం చేస్తాను. దయచేసి మీరు ఏ రకమైన పంట మరియు ఎంత పరిమాణం ఉందో చెప్పండి."
                    : "I'll help you list your products. Please tell me what type of produce you have and the quantity.";
                break;

            case 'farmer.quantity':
                botResponse = language === 'te' 
                    ? `మీరు ఖచ్చితమైన పరిమాణాన్ని మరియు ధరను నమోదు చేయగల మా ఉత్పత్తి జాబితా పేజీకి మిమ్మల్ని మళ్లిస్తాను. ఇక్కడ క్లిక్ చేయండి:<a href="${navigationLinks[userType].products}" target="_blank">Products</a>`
                    : `I'll redirect you to our product listing page where you can enter the exact quantity and set your price. Click here: <a href="${navigationLinks[userType].products}" target="_blank">Products</a>`;
                break;

            case 'farmer.product.type':
                botResponse = language === 'te' 
                    ? "చాలా బాగుంది! దయచేసి మీ దగ్గర ఉన్న పరిమాణాన్ని తెలియజేయండి."
                    : "Excellent! Please specify the quantity you have available.";
                break;

            case 'farmer.dashboard':
                botResponse = `Here is your dashboard: <a href="${navigationLinks[userType].dashboard}" target="_blank">Dashboard</a>`;
                break;

            case 'farmer.products':
                botResponse = `Check products now: <a href="${navigationLinks[userType].products}" target="_blank">Products</a>`;
                break;

            case 'farmer.soil.recommendation':
                botResponse = soilType && soilCropRecommendations[soilType] 
                    ? soilCropRecommendations[soilType][language]
                    : (language === 'te' ? "మీ మట్టి రకం గుర్తించబడలేదు." : "Your soil type is not identified.");
                break;



            case 'farmer.dashboard':
                botResponse = `Here is your dashboard  <a href="${navigationLinks[userType].dashboard}"  style={{textDecoration:'none'}} target="_blank">Dashboard</a>`;
                break;

            case 'farmer.products':
                botResponse = `Check  products Now  <a href="${navigationLinks[userType].products}"  style={{textDecoration:'none'}} target="_blank">Products</a>`;
                break;

            case 'farmer.wastage':
                botResponse = `Sell your farm waste here  <a href="${navigationLinks[userType].wastage}"  style={{textDecoration:'none'}} target="_blank">Sell Now</a>`;
                break;

            case 'farmer.pesticides':
                botResponse = `Buy pesticides here: <a href="${navigationLinks[userType].pesticides}" style={{textDecoration:'none'}}  target="_blank">Pesticides</a>`;
                break;

            case 'farmer.prices':
                botResponse = `Check the latest prices here: <a href="${navigationLinks[userType].prices}" style={{textDecoration:'none'}}  target="_blank">See Now</a>`;
                break;

            case 'farmer.guidance':
                botResponse = `Get farming guidance here: (${navigationLinks[userType].guidance}" style={{textDecoration:'none'}}  target="_blank">Take Now</a>`;
                break;

            case 'consumer.dashboard':
                botResponse = `Access your dashboard here: <a href="${navigationLinks[userType].dashboard}"  style={{textDecoration:'none'}} target="_blank">Dashboard</a>`;
                break;

            case 'consumer.products':
                botResponse = `View available products here: <a href="${navigationLinks[userType].products}"  style={{textDecoration:'none'}} target="_blank">Buy Now</a>`;
                break;

            case 'consumer.prices':
                botResponse = `Check the latest market prices here: <a href="${navigationLinks[userType].prices}" style={{textDecoration:'none'}}target="_blank">See Now</a>`;
                break;

            case 'consumer.wastage':
                botResponse = `Sell your waste here: <a href="${navigationLinks[userType].wastage}"style={{textDecoration:'none'}} target="_blank">Sell Now</a>`;
                break;




            case 'greeting.hello':
                botResponse = language === 'te'
                    ? `హలో, ${user.name}! మీకు ఎలా సహాయం చేయగలను?`
                    : `Hello, ${user.name}! How can I assist you today?`;
                break;
            case 'greeting.morning':
                botResponse = language === 'te'
                    ? `శుభోదయం, ${user.name}! మీరు ఎలా సహాయం కావాలి?`
                    : `Good morning, ${user.name}! How can I help you today?`;
                break;
            case 'greeting.evening':
                botResponse = language === 'te'
                    ? `శుభ సాయంత్రం, ${user.name}! నేను ఎలా సహాయం చేయగలను?`
                    : `Good evening, ${user.name}! How can I assist you today?`;
                break;
            case 'user.details':
                botResponse = language === 'te'
                    ? `మీ పేరు ${user.name}. మీరు ${user.landDetails.acres} ఎకరాల భూమి కలిగి ఉన్నారు.`
                    : `Your name is ${user.name}. You have ${user.landDetails.acres} acres of land.`;

                if (soilType) botResponse += language === 'te' ? `\nమీ భూమి ${soilType} మట్టితో ఉంది.` : `\nYour land has ${soilType} soil.`;
                if (user.landDetails.primaryCrops) botResponse += language === 'te' ? `\nమీ ప్రాథమిక పంటలు ${user.landDetails.primaryCrops}.` : `\nYour primary crops are ${user.landDetails.primaryCrops}.`;
                if (user.previousInvestment > 0) botResponse += language === 'te' ? `\nమీరు ₹${user.previousInvestment} పెట్టుబడి పెట్టారు.` : `\nYou have made an investment of ₹${user.previousInvestment}.`;
                break;
            case 'soil.alluvial':
            case 'soil.black':
            case 'soil.saline':
            case 'soil.sandy':
            case 'soil.clay':
            case 'soil.laterite':
                botResponse = soilCropRecommendations[response.intent.split('.')[1]][language];
                break;
            case 'soil.query':
                if (soilType && soilCropRecommendations[soilType]) {
                    botResponse = language === 'te'
                        ? `మీ భూమి మట్టికి అనుగుణంగా (${soilType}), మీరు పుట్టించే పంటలు: ${soilCropRecommendations[soilType].te}`
                        : `Based on your soil type (${soilType}), you can grow: ${soilCropRecommendations[soilType].en}`;
                } else {
                    botResponse = language === 'te'
                        ? `మీ పేరు ${user.name}. మీరు ${user.landDetails.acres} ఎకరాల భూమి కలిగి ఉన్నారు.\n\nమీ భూమి మట్టిని మీరు ఇంకా అప్‌డేట్ చేయలేదు. దయచేసి మీ ప్రొఫైల్‌ను అప్‌డేట్ చేయండి.`
                        : `Your name is ${user.name}. You have ${user.landDetails.acres} acres of land.\n\nI see that you haven't mentioned your soil type yet. Please update your profile with your soil type to get accurate suggestions.`;
                }
                break;
                case 'organic.farming.definition':
        botResponse = organicResponses['organic.farming.definition'][language];
        break;
    case 'organic.farming.principles':
        botResponse = organicResponses['organic.farming.principles'][language];
        break;
    case 'organic.farming.benefits':
        botResponse = organicResponses['organic.farming.benefits'][language];
        break;
    case 'organic.farming.practices':
        botResponse = organicResponses['organic.farming.practices'][language];
        break;
    case 'organic.farming.challenges':
        botResponse = organicResponses['organic.farming.challenges'][language];
        break;
    case 'organic.farming.cost':
            botResponse = organicResponses['organic.farming.challenges'][language];
            break;
    case 'organic.farming.certification':
                botResponse = organicResponses['organic.farming.challenges'][language];
                break;
    case 'organic.farming.economics':
                    botResponse = organicResponses['organic.farming.challenges'][language];
                    break;
                    case 'organic.farming.technology':
                        botResponse = organicResponses['organic.farming.challenges'][language];
                        break;
                case 'organic.farming.sustainability':
                            botResponse = organicResponses['organic.farming.challenges'][language];
                            break;
                case 'organic.farming.global_trends':
                                botResponse = organicResponses['organic.farming.challenges'][language];
                                break;
                case 'organic.farming.history':
                      botResponse = organicResponses['organic.farming.challenges'][language];
                    break;
            // Inside your switch statement, add these cases:
case 'greeting.howareyou':
    botResponse = conversationResponses['greeting.howareyou'][language];
    break;

case 'greeting.night':
    botResponse = conversationResponses['greeting.night'][language];
    break;

case 'greeting.afternoon':
    botResponse = conversationResponses['greeting.afternoon'][language];
    break;

case 'gratitude.thanks':
    botResponse = conversationResponses['gratitude.thanks'][language];
    break;

case 'farewell.bye':
    botResponse = conversationResponses['farewell.bye'][language];
    break;

case 'greeting.pleasure':
    botResponse = conversationResponses['greeting.pleasure'][language];
    break;

case 'wishes.good_day':
    botResponse = conversationResponses['wishes.good_day'][language];
    break;

// You can also personalize responses by including the user's name
case 'greeting.personal':
    botResponse = language === 'te' 
        ? `నమస్కారం ${user.name}! మీ రోజు ఎలా గడుస్తోంది?`
        : `Hi ${user.name}! How is your day going?`;
    break;

case 'farewell.personal':
    botResponse = language === 'te'
        ? `మళ్ళీ కలుద్దాం ${user.name}! జాగ్రత్తగా ఉండండి.`
        : `See you later ${user.name}! Take care.`;
    break;

case 'greeting.morning.personal':
    botResponse = language === 'te'
        ? `శుభోదయం ${user.name}! ఈరోజు మీకు మంచి రోజుగా ఉండాలని కోరుకుంటున్నాను.`
        : `Good morning ${user.name}! Wishing you a great day ahead.`;
    break;

case 'greeting.evening.personal':
    botResponse = language === 'te'
        ? `శుభ సాయంత్రం ${user.name}! మీ రోజు బాగా గడిచిందని ఆశిస్తున్నాను.`
        : `Good evening ${user.name}! Hope you had a good day.`;
    break;

case 'greeting.night.personal':
    botResponse = language === 'te'
        ? `శుభరాత్రి ${user.name}! మంచి నిద్ర పట్టాలని కోరుకుంటున్నాను.`
        : `Good night ${user.name}! Have a peaceful sleep.`;
    break;

case 'gratitude.thanks.personal':
    botResponse = language === 'te'
        ? `${user.name}, మీ ధన్యవాదాలకు చాలా సంతోషం! మరేదైనా సహాయం కావాలంటే తప్పకుండా అడగండి.`
        : `${user.name}, you're welcome! Feel free to ask if you need any further assistance.`;
    break;

case 'greeting.afternoon.personal':
    botResponse = language === 'te'
        ? `శుభ మధ్యాహ్నం ${user.name}! మీకు ఎలా సహాయపడగలను?`
        : `Good afternoon ${user.name}! How may I assist you?`;
    break;

case 'weather.inquiry':
    botResponse = language === 'te'
        ? `${user.name}, మీ ప్రాంతంలో వాతావరణ సమాచారం తెలుసుకోవడానికి ఆసక్తిగా ఉన్నారా?`
        : `${user.name}, would you like to know about the weather conditions in your area?`;
    break;

case 'crop.status':
    botResponse = language === 'te'
        ? `${user.name}, మీ పంటల పరిస్థితి ఎలా ఉంది? ఏదైనా సహాయం కావాలా?`
        : `${user.name}, how are your crops doing? Do you need any assistance?`;
    break;

case 'general.wellbeing':
    botResponse = language === 'te'
        ? `${user.name}, మీరు మరియు మీ కుటుంబం క్షేమంగా ఉన్నారా?`
        : `${user.name}, hope you and your family are doing well?`;
    break;
    case 'query.time':
        {
            const now = new Date();
            const timeString = now.toLocaleTimeString(language === 'te' ? 'te-IN' : 'en-US');
            botResponse = language === 'te' 
                ? `ప్రస్తుత సమయం ${timeString}`
                : `The current time is ${timeString}`;
        }
        break;
    
    case 'query.date':
        {
            const now = new Date();
            const dateString = now.toLocaleDateString(language === 'te' ? 'te-IN' : 'en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            botResponse = language === 'te'
                ? `నేటి తేదీ ${dateString}`
                : `Today's date is ${dateString}`;
        }
        break;
    
    case 'query.day':
        {
            const days = {
                en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                te: ['ఆదివారం', 'సోమవారం', 'మంగళవారం', 'బుధవారం', 'గురువారం', 'శుక్రవారం', 'శనివారం']
            };
            const dayIndex = new Date().getDay();
            botResponse = language === 'te'
                ? `నేడు ${days.te[dayIndex]}`
                : `Today is ${days.en[dayIndex]}`;
        }
        break;
    
    case 'query.month':
        {
            const months = {
                en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                te: ['జనవరి', 'ఫిబ్రవరి', 'మార్చి', 'ఏప్రిల్', 'మే', 'జూన్', 'జూలై', 'ఆగస్టు', 'సెప్టెంబర్', 'అక్టోబర్', 'నవంబర్', 'డిసెంబర్']
            };
            const monthIndex = new Date().getMonth();
            botResponse = language === 'te'
                ? `ప్రస్తుతం ${months.te[monthIndex]} నెల నడుస్తోంది`
                : `The current month is ${months.en[monthIndex]}`;
        }
        break;
    
    case 'query.season':
        {
            const seasons = {
                en: {
                    spring: 'Spring',
                    summer: 'Summer',
                    monsoon: 'Monsoon',
                    autumn: 'Autumn',
                    winter: 'Winter'
                },
                te: {
                    spring: 'వసంత ఋతువు',
                    summer: 'వేసవి కాలం',
                    monsoon: 'వర్షాకాలం',
                    autumn: 'శరద్ ఋతువు',
                    winter: 'శీతాకాలం'
                }
            };
            const month = new Date().getMonth();
            let season;
            // Simplified season logic for India
            if (month >= 2 && month <= 3) season = 'spring';
            else if (month >= 4 && month <= 5) season = 'summer';
            else if (month >= 6 && month <= 8) season = 'monsoon';
            else if (month >= 9 && month <= 10) season = 'autumn';
            else season = 'winter';
    
            botResponse = language === 'te'
                ? `ప్రస్తుతం ${seasons.te[season]} నడుస్తోంది`
                : `The current season is ${seasons.en[season]}`;
        }
        break;
    
    case 'query.farming_fact':
        {
            const facts = {
                en: [
                    "India is the world's largest producer of pulses.",
                    "Organic farming can reduce carbon dioxide emissions by up to 50%.",
                    "Crop rotation helps maintain soil fertility naturally.",
                    "Bees are responsible for pollinating about one-third of the world's crops."
                ],
                te: [
                    "భారతదేశం ప్రపంచంలోనే అత్యధిక పప్పు ధాన్యాల ఉత్పత్తిదారు.",
                    "సేంద్రీయ వ్యవసాయం కార్బన్ డై ఆక్సైడ్ ఉద్గారాలను 50% వరకు తగ్గించగలదు.",
                    "పంట మార్పిడి సహజంగా నేల సారవంతాన్ని కాపాడుతుంది.",
                    "ప్రపంచంలోని మూడవ వంతు పంటల పరాగసంపర్కానికి తేనెటీగలు కారణం."
                ]
            };
            const randomIndex = Math.floor(Math.random() * facts[language].length);
            botResponse = facts[language][randomIndex];
        }
        break;
    
    case 'query.weather':
        botResponse = language === 'te'
            ? `${user.name}, మీ ప్రాంతపు వాతావరణ సమాచారం కోసం, దయచేసి మీ ప్రాంతం పేరును నమోదు చేయండి.`
            : `${user.name}, to get weather information for your area, please specify your location.`;
        break;
    
    case 'query.market_prices':
        botResponse = language === 'te'
            ? `${user.name}, ప్రస్తుత మార్కెట్ ధరల కోసం, దయచేసి మీరు ఏ పంట ధరలు తెలుసుకోవాలనుకుంటున్నారో చెప్పండి.`
            : `${user.name}, to check current market prices, please specify which crop you're interested in.`;
        break;

        case 'query.chatname':
            {
                const names = {
                    en: [
                        "I'm Chittee. the robot . speed 1 tera hz . memory 1 zeta byte, your agricultural assistant. I'm here to help you with farming-related queries.",
                        "My name is Chittee. the robot. speed 1 tera hz . memory 1 zeta byte I'm a virtual assistant specialized in agricultural information.",
                        "I'm Chittee. the robot .speed 1 tera hz . memory 1 zeta byte, your digital farming companion. How can I assist you today?"
                    ],
                    te: [
                        "నేను కృషిమిత్ర, మీ వ్యవసాయ సహాయకుడిని. వ్యవసాయానికి సంబంధించిన ప్రశ్నలకు సహాయపడటానికి నేను ఇక్కడ ఉన్నాను.",
                        "నా పేరు కృషిమిత్ర. నేను వ్యవసాయ సమాచారంలో ప్రత్యేకత కలిగిన వర్చువల్ అసిస్టెంట్ ని.",
                        "నేను కృషిమిత్ర, మీ డిజిటల్ వ్యవసాయ సహచరుడిని. నేను మీకు ఎలా సహాయపడగలను?"
                    ]
                };
                
                // Get a random response for variety
                const randomIndex = Math.floor(Math.random() * names[language].length);
                botResponse = names[language][randomIndex];
            }
            break;

            default:
                botResponse = language === 'te'
                    ? "క్షమించాలి, నేను మీ సందేశాన్ని అర్థం చేసుకోలేదు. దయచేసి మరింత స్పష్టంగా అడగండి."
                    : "Sorry, I didn't understand your message. Could you please clarify?";
                break;
        }

        res.json({ response: botResponse });

    } catch (error) {
        console.error(error);
        res.status(500).json({ response: "An error occurred while processing your request." });
    }
});

module.exports = router;
