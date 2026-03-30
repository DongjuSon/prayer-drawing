// Prayer topics with Bible verses and missionary target countries
const prayerTopics = [
    {
        verse: "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.",
        reference: "Matthew 28:19",
        country: {
            name: "Afghanistan",
            flag: "🇦🇫",
            description: "A nation in need of hope and peace. Less than 0.1% of the population are Christians, and they face severe persecution.",
            prayerPoints: [
                "For protection and courage for secret believers",
                "For peace and stability in the region",
                "For opportunities to share the Gospel safely",
                "For refugees to encounter Christ"
            ]
        }
    },
    {
        verse: "Ask the Lord of the harvest, therefore, to send out workers into his harvest field.",
        reference: "Matthew 9:38",
        country: {
            name: "North Korea",
            flag: "🇰🇵",
            description: "One of the most closed nations to the Gospel. Christians face extreme persecution, yet an underground church perseveres.",
            prayerPoints: [
                "For the underground church's strength and perseverance",
                "For prisoners in labor camps who are believers",
                "For a political opening that allows religious freedom",
                "For missionaries at the borders to reach defectors"
            ]
        }
    },
    {
        verse: "And this gospel of the kingdom will be preached in the whole world as a testimony to all nations.",
        reference: "Matthew 24:14",
        country: {
            name: "Yemen",
            flag: "🇾🇪",
            description: "Amid civil war and humanitarian crisis, Yemen remains largely unreached with very few known Christians.",
            prayerPoints: [
                "For humanitarian aid workers to bring both physical and spiritual help",
                "For peace and end to the civil conflict",
                "For the small number of believers to find fellowship",
                "For Gospel radio and media to reach people"
            ]
        }
    },
    {
        verse: "How beautiful on the mountains are the feet of those who bring good news.",
        reference: "Isaiah 52:7",
        country: {
            name: "Somalia",
            flag: "🇸🇴",
            description: "One of the most dangerous places for Christians, with virtually no openly practicing Christians in the country.",
            prayerPoints: [
                "For secret believers to find strength and community",
                "For safety and stability in the nation",
                "For Somali refugees abroad to hear the Gospel",
                "For boldness among missionaries to reach this nation"
            ]
        }
    },
    {
        verse: "The harvest is plentiful but the workers are few.",
        reference: "Luke 10:2",
        country: {
            name: "Iran",
            flag: "🇮🇷",
            description: "Despite intense persecution, the Iranian church is one of the fastest-growing in the world, particularly through house churches.",
            prayerPoints: [
                "For protection of house church leaders",
                "For continued growth despite persecution",
                "For prisoners of faith to be released",
                "For a governmental change allowing religious freedom"
            ]
        }
    },
    {
        verse: "But you will receive power when the Holy Spirit comes on you; and you will be my witnesses.",
        reference: "Acts 1:8",
        country: {
            name: "Saudi Arabia",
            flag: "🇸🇦",
            description: "Home to Islam's holiest sites, Christianity is forbidden, yet foreign workers create opportunities for witness.",
            prayerPoints: [
                "For foreign Christian workers to be bold witnesses",
                "For Saudi seekers to find Jesus",
                "For religious freedom to eventually come",
                "For protection of secret believers"
            ]
        }
    },
    {
        verse: "For I am not ashamed of the gospel, because it is the power of God that brings salvation.",
        reference: "Romans 1:16",
        country: {
            name: "Libya",
            flag: "🇱🇾",
            description: "After years of civil war, Libya remains unstable with very few Christians and limited missionary access.",
            prayerPoints: [
                "For peace and reconstruction after conflict",
                "For protection of Christian refugees and migrants",
                "For opportunities for missionaries to enter and serve",
                "For Libyan seekers to encounter the Gospel"
            ]
        }
    },
    {
        verse: "I will make you fishers of men.",
        reference: "Matthew 4:19",
        country: {
            name: "Algeria",
            flag: "🇩🇿",
            description: "The church in Algeria is growing despite government restrictions and pressure on converts from Islam.",
            prayerPoints: [
                "For converts facing family and social persecution",
                "For church buildings that have been closed to reopen",
                "For wisdom for church leaders",
                "For more workers to disciple new believers"
            ]
        }
    },
    {
        verse: "Do not be afraid; keep on speaking, do not be silent.",
        reference: "Acts 18:9",
        country: {
            name: "Maldives",
            flag: "🇲🇻",
            description: "With 100% Muslim population by law, there are virtually no known Christian citizens, and evangelism is illegal.",
            prayerPoints: [
                "For foreign workers to share their faith wisely",
                "For Maldivians studying abroad to encounter Jesus",
                "For freedom of religion to be established",
                "For the first Maldivian churches to be planted"
            ]
        }
    },
    {
        verse: "Go into all the world and preach the gospel to all creation.",
        reference: "Mark 16:15",
        country: {
            name: "Turkmenistan",
            flag: "🇹🇲",
            description: "One of the most isolated and repressive countries, with tight government control over all religious activities.",
            prayerPoints: [
                "For the small underground church to grow",
                "For political change that allows religious freedom",
                "For Christian resources to reach believers",
                "For boldness among secret believers"
            ]
        }
    },
    {
        verse: "Pray also for me, that whenever I speak, words may be given me so that I will fearlessly make known the mystery of the gospel.",
        reference: "Ephesians 6:19",
        country: {
            name: "Mauritania",
            flag: "🇲🇷",
            description: "An Islamic republic where Christianity is barely present and evangelism is prohibited.",
            prayerPoints: [
                "For the handful of believers to find courage",
                "For safe places for believers to meet",
                "For missionaries working at the borders",
                "For breakthrough in this resistant nation"
            ]
        }
    },
    {
        verse: "All the ends of the earth will remember and turn to the Lord.",
        reference: "Psalm 22:27",
        country: {
            name: "Bhutan",
            flag: "🇧🇹",
            description: "This Buddhist kingdom has very few Christians, and evangelism is officially illegal, though the church is slowly growing.",
            prayerPoints: [
                "For the small Christian community to grow in faith",
                "For wisdom in sharing faith in this context",
                "For government officials to see Christianity positively",
                "For more missionaries to have access"
            ]
        }
    },
    {
        verse: "Night and day we pray most earnestly that we may see you again.",
        reference: "1 Thessalonians 3:10",
        country: {
            name: "Laos",
            flag: "🇱🇦",
            description: "Though officially atheist, the Buddhist-majority nation restricts Christianity and believers face harassment.",
            prayerPoints: [
                "For persecuted believers in rural areas",
                "For church buildings that have been closed",
                "For religious freedom to expand",
                "For training of local pastors and leaders"
            ]
        }
    },
    {
        verse: "The Lord is not slow in keeping his promise... not wanting anyone to perish.",
        reference: "2 Peter 3:9",
        country: {
            name: "Morocco",
            flag: "🇲🇦",
            description: "While relatively moderate, Morocco officially forbids evangelism and most Christians are expatriates.",
            prayerPoints: [
                "For the growing number of Moroccan believers",
                "For families who have disowned converted loved ones",
                "For more opportunities to share the Gospel",
                "For legal recognition of Christianity"
            ]
        }
    },
    {
        verse: "The Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor.",
        reference: "Luke 4:18",
        country: {
            name: "Comoros",
            flag: "🇰🇲",
            description: "One of the world's least-evangelized nations, with Islam as the state religion and almost no Christians.",
            prayerPoints: [
                "For the first Comorian churches to be established",
                "For believers to be protected and encouraged",
                "For creative access strategies for missionaries",
                "For Gospel resources in the Comorian language"
            ]
        }
    },
    {
        verse: "I have other sheep that are not of this sheep pen. I must bring them also.",
        reference: "John 10:16",
        country: {
            name: "Mali",
            flag: "🇲🇱",
            description: "Facing Islamist insurgency in the north, Christians in Mali face increasing pressure and violence.",
            prayerPoints: [
                "For protection of Christian communities from extremists",
                "For peace and stability",
                "For believers to remain strong amid threats",
                "For continued church growth despite challenges"
            ]
        }
    },
    {
        verse: "Devote yourselves to prayer, being watchful and thankful.",
        reference: "Colossians 4:2",
        country: {
            name: "Uzbekistan",
            flag: "🇺🇿",
            description: "Government surveillance and control make it difficult for Christians, though the church is slowly growing.",
            prayerPoints: [
                "For registered churches to operate freely",
                "For house churches meeting in secret",
                "For reduced government harassment",
                "For more Christian literature and resources"
            ]
        }
    },
    {
        verse: "May the Lord make your love increase and overflow for each other and for everyone else.",
        reference: "1 Thessalonians 3:12",
        country: {
            name: "Brunei",
            flag: "🇧🇳",
            description: "Sharia law strictly limits Christian practice, with severe penalties for evangelism and conversion from Islam.",
            prayerPoints: [
                "For Christian expatriate workers",
                "For local believers to worship safely",
                "For religious freedom laws to change",
                "For opportunities for witness through service"
            ]
        }
    },
    {
        verse: "Pray continually, give thanks in all circumstances.",
        reference: "1 Thessalonians 5:17-18",
        country: {
            name: "Pakistan",
            flag: "🇵🇰",
            description: "Christians face severe persecution, including blasphemy laws used against them, yet the church continues to grow.",
            prayerPoints: [
                "For justice for those falsely accused under blasphemy laws",
                "For protection from extremist attacks on churches",
                "For courage for believers amid persecution",
                "For church leaders to have wisdom and boldness"
            ]
        }
    },
    {
        verse: "May the God of hope fill you with all joy and peace as you trust in him.",
        reference: "Romans 15:13",
        country: {
            name: "Eritrea",
            flag: "🇪🇷",
            description: "Only four Christian denominations are recognized; others face imprisonment and harsh treatment.",
            prayerPoints: [
                "For thousands of imprisoned believers to be released",
                "For courage for believers in military service",
                "For religious freedom to be restored",
                "For comfort for families of imprisoned Christians"
            ]
        }
    }
];

// DOM Elements
const drawScreen = document.getElementById('draw-screen');
const loadingScreen = document.getElementById('loading-screen');
const resultScreen = document.getElementById('result-screen');
const drawBtn = document.getElementById('draw-btn');
const drawAgainBtn = document.getElementById('draw-again-btn');
const verseText = document.getElementById('verse-text');
const verseReference = document.getElementById('verse-reference');
const countryFlag = document.getElementById('country-flag');
const countryName = document.getElementById('country-name');
const countryDescription = document.getElementById('country-description');
const prayerPointsList = document.getElementById('prayer-points-list');

// Current drawn topic
let currentTopic = null;

// Initialize
function init() {
    drawBtn.addEventListener('click', handleDraw);
    drawAgainBtn.addEventListener('click', handleDrawAgain);
}

// Handle draw button click
function handleDraw() {
    // Switch to loading screen
    switchScreen(drawScreen, loadingScreen);

    // Simulate drawing animation (2 seconds)
    setTimeout(() => {
        drawRandomTopic();
        displayResult();
        switchScreen(loadingScreen, resultScreen);
    }, 2000);
}

// Handle draw again button click
function handleDrawAgain() {
    switchScreen(resultScreen, drawScreen);
}

// Draw a random prayer topic
function drawRandomTopic() {
    const randomIndex = Math.floor(Math.random() * prayerTopics.length);
    currentTopic = prayerTopics[randomIndex];
}

// Display the result
function displayResult() {
    if (!currentTopic) return;

    // Display verse
    verseText.textContent = `"${currentTopic.verse}"`;
    verseReference.textContent = `— ${currentTopic.reference}`;

    // Display country info
    countryFlag.textContent = currentTopic.country.flag;
    countryName.textContent = currentTopic.country.name;
    countryDescription.textContent = currentTopic.country.description;

    // Display prayer points
    prayerPointsList.innerHTML = '';
    currentTopic.country.prayerPoints.forEach(point => {
        const li = document.createElement('li');
        li.textContent = point;
        prayerPointsList.appendChild(li);
    });
}

// Switch between screens
function switchScreen(fromScreen, toScreen) {
    fromScreen.classList.remove('active');
    setTimeout(() => {
        toScreen.classList.add('active');
    }, 300);
}

// Prevent duplicate draws (ensure randomness)
let lastDrawnIndex = -1;

function drawRandomTopic() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * prayerTopics.length);
    } while (randomIndex === lastDrawnIndex && prayerTopics.length > 1);

    lastDrawnIndex = randomIndex;
    currentTopic = prayerTopics[randomIndex];
}

// Initialize the app
init();
