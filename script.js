// Prayer topics with countries and Korean text
const prayerTopics = [
    {
        country: "JAPAN",
        countryKo: "일본",
        verse: "Seeds of the Kingdom",
        reference: "만나는 영혼들의 마음이 복음의 씨앗을 받을 줄은 받이 되도록 기도합니다",
        prayerPoints: [
            "또 비유를 들어 이르시되",
            "천국은 마치 사람이 자기 밭에 갖다",
            "심은 겨자씨 한 알 같으니",
            "이는 모든 씨보다 작은 것이로되",
            "자란 후에는 풀보다 커서",
            "나무가 되매 공중의 새들이 와서",
            "그 가지에 깃들이느니라"
        ]
    },
    {
        country: "KOREA",
        countryKo: "한국",
        verse: "Light to the Nations",
        reference: "한국 교회가 세계의 빛이 되도록 기도합니다",
        prayerPoints: [
            "너희는 세상의 빛이라",
            "산 위에 있는 동네가",
            "숨겨지지 못할 것이요",
            "사람이 등불을 켜서",
            "말 아래에 두지 아니하고",
            "등경 위에 두나니",
            "이러므로 집 안 모든 사람에게 비치느니라"
        ]
    },
    {
        country: "CHINA",
        countryKo: "중국",
        verse: "Harvest is Plentiful",
        reference: "중국의 영혼들이 추수되도록 기도합니다",
        prayerPoints: [
            "이에 제자들에게 이르시되",
            "추수할 것은 많되",
            "일꾼이 적으니",
            "그러므로 추수하는 주인에게",
            "청하여 추수할 일꾼들을",
            "보내 주소서 하라 하시니라"
        ]
    },
    {
        country: "THAILAND",
        countryKo: "태국",
        verse: "Go and Make Disciples",
        reference: "태국에 제자들이 세워지도록 기도합니다",
        prayerPoints: [
            "그러므로 너희는 가서",
            "모든 민족을 제자로 삼아",
            "아버지와 아들과 성령의 이름으로",
            "세례를 베풀고",
            "내가 너희에게 분부한",
            "모든 것을 가르쳐 지키게 하라"
        ]
    },
    {
        country: "VIETNAM",
        countryKo: "베트남",
        verse: "The Good News",
        reference: "베트남에 복음이 전파되도록 기도합니다",
        prayerPoints: [
            "내가 복음을 부끄러워하지 아니하노니",
            "이 복음은 모든 믿는 자에게",
            "구원을 주시는",
            "하나님의 능력이 됨이라",
            "먼저는 유대인에게요",
            "그리고 헬라인에게로다"
        ]
    },
    {
        country: "MONGOLIA",
        countryKo: "몽골",
        verse: "Streams in the Desert",
        reference: "몽골에 생명수가 흐르도록 기도합니다",
        prayerPoints: [
            "보라 내가 새 일을 행하리니",
            "이제 나타낼 것이라",
            "너희가 그것을 알지 못하겠느냐",
            "반드시 내가 광야에 길을",
            "사막에 강을 내리니",
            "내가 택한 백성이 나를 찬송하게 하려 함이라"
        ]
    },
    {
        country: "PHILIPPINES",
        countryKo: "필리핀",
        verse: "Joy in the Lord",
        reference: "필리핀 교회에 기쁨이 넘치도록 기도합니다",
        prayerPoints: [
            "주 안에서 항상 기뻐하라",
            "내가 다시 말하노니 기뻐하라",
            "너희 관용을 모든 사람에게 알게 하라",
            "주께서 가까우시니라",
            "아무 것도 염려하지 말고",
            "모든 일에 기도와 간구로 하라"
        ]
    },
    {
        country: "INDIA",
        countryKo: "인도",
        verse: "Many Nations",
        reference: "인도의 수많은 민족이 주님을 알도록 기도합니다",
        prayerPoints: [
            "이 천국 복음이",
            "모든 민족에게 증언되기 위하여",
            "온 세상에 전파되리니",
            "그제야 끝이 오리라",
            "주의 이름을 부르는 자마다",
            "구원을 받으리라"
        ]
    },
    {
        country: "MYANMAR",
        countryKo: "미얀마",
        verse: "Peace and Hope",
        reference: "미얀마에 평화와 소망이 임하도록 기도합니다",
        prayerPoints: [
            "평강의 하나님이",
            "친히 너희를 온전히 거룩하게 하시고",
            "너희의 온 영과 혼과 몸이",
            "우리 주 예수 그리스도께서",
            "강림하실 때에",
            "흠 없게 보전되기를 원하노라"
        ]
    },
    {
        country: "CAMBODIA",
        countryKo: "캄보디아",
        verse: "Healing and Restoration",
        reference: "캄보디아의 치유와 회복을 위해 기도합니다",
        prayerPoints: [
            "여호와께서 상심한 자를 고치시며",
            "그들의 상처를 싸매시는도다",
            "그는 마음이 상한 자를 고치시며",
            "그들의 아픔을 싸매시는도다",
            "주께서 온유한 자를 붙드시고",
            "악인을 땅에 엎으시는도다"
        ]
    },
    {
        country: "LAOS",
        countryKo: "라오스",
        verse: "Open Doors",
        reference: "라오스에 복음의 문이 열리도록 기도합니다",
        prayerPoints: [
            "볼지어다 내가 네 앞에",
            "열린 문을 두었으되",
            "능히 닫을 사람이 없으리라",
            "내가 네 행위를 아노니",
            "네가 적은 능력을 가지고도",
            "내 말을 지키며 내 이름을 배반하지 아니하였도다"
        ]
    },
    {
        country: "TAIWAN",
        countryKo: "대만",
        verse: "Strong Foundation",
        reference: "대만 교회의 견고한 기초를 위해 기도합니다",
        prayerPoints: [
            "그러므로 누구든지",
            "나의 이 말을 듣고 행하는 자는",
            "그 집을 반석 위에 지은",
            "지혜로운 사람 같으리니",
            "비가 내리고 창수가 나고",
            "바람이 불어도 무너지지 아니하느니라"
        ]
    },
    {
        country: "NEPAL",
        countryKo: "네팔",
        verse: "Mountain Faith",
        reference: "네팔의 산들에서 찬양이 울려퍼지도록 기도합니다",
        prayerPoints: [
            "너희가 만일 믿음이 있고",
            "의심하지 아니하면",
            "이 산더러 들려",
            "바다에 던져지라 하여도",
            "그대로 되리라",
            "기도할 때에 무엇이든지 믿고 구하면 다 받으리라"
        ]
    },
    {
        country: "MALAYSIA",
        countryKo: "말레이시아",
        verse: "Unity in Diversity",
        reference: "말레이시아의 다양성 속 연합을 위해 기도합니다",
        prayerPoints: [
            "몸은 하나인데 많은 지체가 있고",
            "몸의 지체가 많으나",
            "한 몸임과 같이",
            "그리스도도 그러하니라",
            "우리가 유대인이나 헬라인이나",
            "다 한 성령으로 세례를 받아 한 몸이 되었느니라"
        ]
    },
    {
        country: "SINGAPORE",
        countryKo: "싱가포르",
        verse: "City on a Hill",
        reference: "싱가포르가 아시아의 등대가 되도록 기도합니다",
        prayerPoints: [
            "너희는 세상의 빛이라",
            "산 위에 있는 동네가",
            "숨겨지지 못할 것이요",
            "이같이 너희 빛이",
            "사람 앞에 비치게 하여",
            "그들로 너희 착한 행실을 보고 하늘에 계신 아버지께 영광을 돌리게 하라"
        ]
    }
];

// DOM Elements
const drawScreen = document.getElementById('draw-screen');
const loadingScreen = document.getElementById('loading-screen');
const resultScreen = document.getElementById('result-screen');
const drawBtn = document.getElementById('draw-btn');
const downloadBtn = document.getElementById('download-btn');
const countryName = document.getElementById('country-name');
const verseReference = document.getElementById('verse-reference');
const verseText = document.getElementById('verse-text');
const prayerPointsList = document.getElementById('prayer-points-list');

// Configuration constants
const CONFIG = {
    DRAW_ANIMATION_DELAY: 2000,
    SCREEN_TRANSITION_DELAY: 300
};

// Current state
let currentTopic = null;
let lastDrawnIndex = -1;

// Initialize
function init() {
    // Event listeners
    drawBtn.addEventListener('click', handleDraw);
    if (downloadBtn) {
        downloadBtn.addEventListener('click', downloadImage);
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyPress);

    // Validate data
    if (!prayerTopics || prayerTopics.length === 0) {
        console.error('No prayer topics available');
        drawBtn.disabled = true;
    }
}

// Handle draw button click
function handleDraw() {
    // Switch to loading screen
    switchScreen(drawScreen, loadingScreen);

    // Simulate drawing animation
    setTimeout(() => {
        drawRandomTopic();
        displayResult();
        switchScreen(loadingScreen, resultScreen);
    }, CONFIG.DRAW_ANIMATION_DELAY);
}

// Handle draw again - return to home
function handleDrawAgain() {
    switchScreen(resultScreen, drawScreen);
    // Remove country-specific background
    resultScreen.removeAttribute('data-country');
}

// Display the result
function displayResult() {
    if (!currentTopic) return;

    // Set country-specific background
    const countryId = currentTopic.country.toLowerCase().replace(/\s+/g, '');
    resultScreen.setAttribute('data-country', countryId);

    // Display country name
    countryName.textContent = currentTopic.country;

    // Display verse reference (subtitle)
    verseReference.textContent = currentTopic.verse;

    // Display main verse text at bottom
    verseText.textContent = currentTopic.reference;

    // Display prayer points
    prayerPointsList.innerHTML = '';
    currentTopic.prayerPoints.forEach(point => {
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
    }, CONFIG.SCREEN_TRANSITION_DELAY);
}

// Draw a random prayer topic (prevents consecutive duplicates)
function drawRandomTopic() {
    if (!prayerTopics || prayerTopics.length === 0) {
        console.error('No prayer topics available');
        return;
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * prayerTopics.length);
    } while (randomIndex === lastDrawnIndex && prayerTopics.length > 1);

    lastDrawnIndex = randomIndex;
    currentTopic = prayerTopics[randomIndex];
}

// Keyboard shortcuts handler
function handleKeyPress(e) {
    // Ignore if user is typing in an input
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
    }

    if (drawScreen.classList.contains('active')) {
        // SPACE or ENTER to draw
        if (e.code === 'Space' || e.code === 'Enter') {
            e.preventDefault();
            handleDraw();
        }
    } else if (resultScreen.classList.contains('active')) {
        // SPACE or ENTER to draw again
        if (e.code === 'Space' || e.code === 'Enter') {
            e.preventDefault();
            handleDrawAgain();
        }
        // ESC to go back
        if (e.code === 'Escape') {
            e.preventDefault();
            handleDrawAgain();
        }
    }
}

// Download image functionality
async function downloadImage() {
    if (!currentTopic) return;

    try {
        // Use html2canvas library
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
        script.onload = async () => {
            const resultCard = document.querySelector('.result-card');

            // Temporarily hide the download button
            if (downloadBtn) {
                downloadBtn.style.display = 'none';
            }

            const canvas = await html2canvas(resultCard, {
                backgroundColor: null,
                scale: 2,
                logging: false,
                useCORS: true
            });

            // Show the button again
            if (downloadBtn) {
                downloadBtn.style.display = '';
            }

            // Convert to blob and download
            canvas.toBlob((blob) => {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                const countryName = currentTopic.country.toLowerCase();
                link.download = `his-plan-${countryName}-${Date.now()}.png`;
                link.href = url;
                link.click();
                URL.revokeObjectURL(url);
            });
        };
        document.head.appendChild(script);
    } catch (error) {
        console.error('Failed to download image:', error);
        alert('이미지 저장에 실패했습니다. 다시 시도해주세요.');
    }
}

// Initialize the app
init();