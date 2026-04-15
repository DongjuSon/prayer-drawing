// Prayer cards - 8 countries × 3 prayers each = 24 cards
const prayerCards = [
    // 인도 (India) - 3 cards
    {
        country: "인도",
        topic: "Goodness of God",
        topicVerse: "너희는 여호와의 선하심을 맛보아 알지어다 그에게 피하는 자는 복이 있도다 (시편 34:8)",
        prayer: "모든 시간 속에서 하나님의 계획하심을 따라 나아갈 수 있도록"
    },
    {
        country: "인도",
        topic: "Goodness of God",
        topicVerse: "너희는 여호와의 선하심을 맛보아 알지어다 그에게 피하는 자는 복이 있도다 (시편 34:8)",
        prayer: "그 가운데 우릴 향한 마음과 부르심이 잘 세워질 수 있도록"
    },
    {
        country: "인도",
        topic: "Goodness of God",
        topicVerse: "너희는 여호와의 선하심을 맛보아 알지어다 그에게 피하는 자는 복이 있도다 (시편 34:8)",
        prayer: "선교사님과 아이들에게 위로와 하나님이 함께 하신다는 확신의 시간이 될 수 있도록"
    },
    // 인도네시아 (Indonesia) - 3 cards
    {
        country: "인도네시아",
        topic: "END, AND",
        topicVerse: "[마26:13] 내가 진실로 너희에게 이르노니 온 천하에 어디서든지 이 복음이 전파되는 곳에서는 이 여자가 행한 일도 말하여 그를 기억하리라 하시니라",
        prayer: "낯선 환경과 일정 속에서 지치거나 흔들리기보다 서로를 격려하며 하나의 팀으로 서도록"
    },
    {
        country: "인도네시아",
        topic: "END, AND",
        topicVerse: "[마26:13] 내가 진실로 너희에게 이르노니 온 천하에 어디서든지 이 복음이 전파되는 곳에서는 이 여자가 행한 일도 말하여 그를 기억하리라 하시니라",
        prayer: "더운 날씨 속에서 선교팀의 몸과 마음의 건강 지켜주시도록"
    },
    {
        country: "인도네시아",
        topic: "END, AND",
        topicVerse: "[마26:13] 내가 진실로 너희에게 이르노니 온 천하에 어디서든지 이 복음이 전파되는 곳에서는 이 여자가 행한 일도 말하여 그를 기억하리라 하시니라",
        prayer: "오랜 시간 낯선 문화와 환경 속에서 사역하시는 선교사님께 새 힘과 기쁨을 부어주시고, 영적으로 소진되시지 않도록"
    },
    // 일본 (Japan) - 3 cards
    {
        country: "일본",
        topic: "Seeds of the Kingdom",
        topicVerse: "또 비유를 들어 이르시되 천국은 마치 사람이 자기 밭에 갖다 심은 겨자씨 한 알 같으니 이는 모든 씨보다 작은 것이로되 자란 후에는 풀보다 커서 나무가 되매 공중의 새들이 와서 그 가지에 깃들이느니라 (마 13:31~32)",
        prayer: "만나는 영혼들의 마음이 복음의 씨앗을 받을 좋은 밭이 되도록"
    },
    {
        country: "일본",
        topic: "Seeds of the Kingdom",
        topicVerse: "또 비유를 들어 이르시되 천국은 마치 사람이 자기 밭에 갖다 심은 겨자씨 한 알 같으니 이는 모든 씨보다 작은 것이로되 자란 후에는 풀보다 커서 나무가 되매 공중의 새들이 와서 그 가지에 깃들이느니라 (마 13:31~32)",
        prayer: "모든 팀원들이 결과에 대한 부담보다 사랑과 순종으로 씨앗을 심는 마음을 갖도록"
    },
    {
        country: "일본",
        topic: "Seeds of the Kingdom",
        topicVerse: "또 비유를 들어 이르시되 천국은 마치 사람이 자기 밭에 갖다 심은 겨자씨 한 알 같으니 이는 모든 씨보다 작은 것이로되 자란 후에는 풀보다 커서 나무가 되매 공중의 새들이 와서 그 가지에 깃들이느니라 (마 13:31~32)",
        prayer: "이번 선교를 통해 심겨진 작은 씨앗들이 시간이 지나 하나님 나라의 나무로 자라도록"
    },
    // 우간다 (Uganda) - 3 cards
    {
        country: "우간다",
        topic: "Clean Vessels",
        topicVerse: "(딤후2:20-21) 큰 집에는 금 그릇과 은 그릇뿐 아니라 나무 그릇과 질그릇도 있어 귀하게 쓰는 것도 있고 천하게 쓰는 것도 있나니 그러므로 누구든지 이런 것에서 자기를 깨끗하게 하면 귀히 쓰는 그릇이 되어 거룩하고 주인의 쓰심에 합당하며 모든 선한 일에 준비함이 되리라",
        prayer: "모든 팀원이 깨끗한 그릇이 되어 하나님의 선하심을 나타내는 통로가 되게 하소서"
    },
    {
        country: "우간다",
        topic: "Clean Vessels",
        topicVerse: "(딤후2:20-21) 큰 집에는 금 그릇과 은 그릇뿐 아니라 나무 그릇과 질그릇도 있어 귀하게 쓰는 것도 있고 천하게 쓰는 것도 있나니 그러므로 누구든지 이런 것에서 자기를 깨끗하게 하면 귀히 쓰는 그릇이 되어 거룩하고 주인의 쓰심에 합당하며 모든 선한 일에 준비함이 되리라",
        prayer: "예배에 능한 팀이 되게 하셔서 거룩함과 순전함으로 주님의 이름만을 높여드리게 하소서"
    },
    {
        country: "우간다",
        topic: "Clean Vessels",
        topicVerse: "(딤후2:20-21) 큰 집에는 금 그릇과 은 그릇뿐 아니라 나무 그릇과 질그릇도 있어 귀하게 쓰는 것도 있고 천하게 쓰는 것도 있나니 그러므로 누구든지 이런 것에서 자기를 깨끗하게 하면 귀히 쓰는 그릇이 되어 거룩하고 주인의 쓰심에 합당하며 모든 선한 일에 준비함이 되리라",
        prayer: "우간다를 사랑으로 품게 하시고 행하는 모든 일을 통해 그리스도의 사랑과 은혜가 전해지게 하소서"
    },
    // 베트남 (Vietnam) - 3 cards
    {
        country: "베트남",
        topic: "Deep to Deep",
        topicVerse: "주의 폭포 소리에 깊은 바다가 서로 부르며 주의 모든 파도와 물결이 나를 휩쓸었나이다 (시 42:7)",
        prayer: "전 팀원이 하나의 깊은 바다처럼 연결되어, 지치지 않는 기쁨과 뜨거운 사랑으로 끝까지 하나 됨을 이루도록"
    },
    {
        country: "베트남",
        topic: "Deep to Deep",
        topicVerse: "주의 폭포 소리에 깊은 바다가 서로 부르며 주의 모든 파도와 물결이 나를 휩쓸었나이다 (시 42:7)",
        prayer: "우리의 발걸음이 머무는 곳마다 생명의 강물이 흘러 넘쳐 영혼이 살아나고 말씀이 회복되도록"
    },
    {
        country: "베트남",
        topic: "Deep to Deep",
        topicVerse: "주의 폭포 소리에 깊은 바다가 서로 부르며 주의 모든 파도와 물결이 나를 휩쓸었나이다 (시 42:7)",
        prayer: "선교사님과 사역자 분들이 깊은 안식과 평안 가운데 날마다 쏟아지는 폭포수 같은 새 힘을 경험하시도록"
    },
    // 네팔 (Nepal) - 3 cards
    {
        country: "네팔",
        topic: "Press On",
        topicVerse: "푯대를 향하여 그리스도 예수 안에서 하나님이 위에서 부르신 부름의 상을 위하여 달려가노라 (빌3:14)",
        prayer: "모든 팀원이 선교의 목적을 분명히 붙들고, 끝까지 한마음으로 준비하고 나아가게 하소서"
    },
    {
        country: "네팔",
        topic: "Press On",
        topicVerse: "푯대를 향하여 그리스도 예수 안에서 하나님이 위에서 부르신 부름의 상을 위하여 달려가노라 (빌3:14)",
        prayer: "어린이사역, 문화사역, 센터보수의 모든 일정 가운데 하나님께서 먼저 일하시고 현지에 꼭 필요한 은혜를 허락하소서"
    },
    {
        country: "네팔",
        topic: "Press On",
        topicVerse: "푯대를 향하여 그리스도 예수 안에서 하나님이 위에서 부르신 부름의 상을 위하여 달려가노라 (빌3:14)",
        prayer: "네팔 땅 가운데 복음의 문을 열어 주시고, 만나는 영혼들과 공동체 위에 예수 그리스도의 사랑이 깊이 전해지게 하소서"
    },
    // 상주 (Sangju) - 3 cards
    {
        country: "상주",
        topic: "Faith from Hearing",
        topicVerse: "그러나 그들이 다 복음을 순종하지 아니하였도다 이사야가 이르되 주여 우리가 전한 것을 누가 믿었나이까 하였으니 그러므로 믿음은 들음에서 나며 들음은 그리스도의 말씀으로 말미암았느니라 그러나 내가 말하노니 그들이 듣지 아니하였느냐 그렇지 아니하니 그 소리가 온 땅에 퍼졌고 그 말씀이 땅 끝까지 이르렀도다 하였느니라 (롬 10:16~18)",
        prayer: "복음을 전하는 일에 부끄러워하지 않고 담대히 나의 하나님, 우리의 하나님을 전하는 청년들이 될 수 있도록"
    },
    {
        country: "상주",
        topic: "Faith from Hearing",
        topicVerse: "그러나 그들이 다 복음을 순종하지 아니하였도다 이사야가 이르되 주여 우리가 전한 것을 누가 믿었나이까 하였으니 그러므로 믿음은 들음에서 나며 들음은 그리스도의 말씀으로 말미암았느니라 그러나 내가 말하노니 그들이 듣지 아니하였느냐 그렇지 아니하니 그 소리가 온 땅에 퍼졌고 그 말씀이 땅 끝까지 이르렀도다 하였느니라 (롬 10:16~18)",
        prayer: "복음은 들음에서 나고, 들음은 그리스도의 말씀에서 말미암았다는 말씀을 믿음으로 나아가 상주 땅의 많은 이들이 복음을 들을 수 있도록"
    },
    {
        country: "상주",
        topic: "Faith from Hearing",
        topicVerse: "그러나 그들이 다 복음을 순종하지 아니하였도다 이사야가 이르되 주여 우리가 전한 것을 누가 믿었나이까 하였으니 그러므로 믿음은 들음에서 나며 들음은 그리스도의 말씀으로 말미암았느니라 그러나 내가 말하노니 그들이 듣지 아니하였느냐 그렇지 아니하니 그 소리가 온 땅에 퍼졌고 그 말씀이 땅 끝까지 이르렀도다 하였느니라 (롬 10:16~18)",
        prayer: "성령님의 권능으로 말미암아 복음을 전할 때에 청년들을 통해서 일하시는 하나님의 크신 능력을 경험할 수 있도록"
    },
    // 당진 (Dangjin) - 3 cards
    {
        country: "당진",
        topic: "Remember Me!",
        topicVerse: "이르되 예수여 당신의 나라에 임하실 때에 나를 기억하소서 하니 (눅 23:42)",
        prayer: "우리가 만나게 될 어린이들이 하나님 복음을 들고 당진 땅에서 찬양하는 믿음의 자녀로 거듭나게 하시길"
    },
    {
        country: "당진",
        topic: "Remember Me!",
        topicVerse: "이르되 예수여 당신의 나라에 임하실 때에 나를 기억하소서 하니 (눅 23:42)",
        prayer: "팀 인원 전체가 하나님 안에서 하나 되게 하시고 안전 지켜주시길"
    },
    {
        country: "당진",
        topic: "Remember Me!",
        topicVerse: "이르되 예수여 당신의 나라에 임하실 때에 나를 기억하소서 하니 (눅 23:42)",
        prayer: "사역에 담기는 모든 사람들이 '주님 나를 기억하소서' 라고 선포하는 시간이 되길"
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
let currentCard = null;
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
    if (!prayerCards || prayerCards.length === 0) {
        console.error('No prayer cards available');
        drawBtn.disabled = true;
    }
}

// Handle draw button click
function handleDraw() {
    // Switch to loading screen
    switchScreen(drawScreen, loadingScreen);

    // Simulate drawing animation
    setTimeout(() => {
        drawRandomCard();
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
    if (!currentCard) return;

    // Set country-specific background
    const countryId = currentCard.country.toLowerCase().replace(/\s+/g, '');
    resultScreen.setAttribute('data-country', countryId);

    // Display country name
    countryName.textContent = currentCard.country;

    // Display topic (subtitle)
    verseReference.textContent = currentCard.topic;

    // Display topic verse at bottom
    verseText.textContent = currentCard.topicVerse;

    // Display single prayer request
    prayerPointsList.innerHTML = '';
    const li = document.createElement('li');
    li.textContent = currentCard.prayer;
    prayerPointsList.appendChild(li);
}

// Switch between screens
function switchScreen(fromScreen, toScreen) {
    fromScreen.classList.remove('active');
    setTimeout(() => {
        toScreen.classList.add('active');
    }, CONFIG.SCREEN_TRANSITION_DELAY);
}

// Draw a random prayer card (prevents consecutive duplicates)
function drawRandomCard() {
    if (!prayerCards || prayerCards.length === 0) {
        console.error('No prayer cards available');
        return;
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * prayerCards.length);
    } while (randomIndex === lastDrawnIndex && prayerCards.length > 1);

    lastDrawnIndex = randomIndex;
    currentCard = prayerCards[randomIndex];
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
    if (!currentCard) return;

    try {
        // Use html2canvas library
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
        script.onload = async () => {
            const resultCard = document.querySelector('.result-card');
            const cardFooter = document.querySelector('.card-footer');

            // Temporarily hide the card footer (including download button)
            if (cardFooter) {
                cardFooter.style.display = 'none';
            }

            const canvas = await html2canvas(resultCard, {
                backgroundColor: null,
                scale: 2,
                logging: false,
                useCORS: true
            });

            // Show the footer again
            if (cardFooter) {
                cardFooter.style.display = '';
            }

            // Convert to blob and download
            canvas.toBlob((blob) => {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                const countryName = currentCard.country.replace(/\s+/g, '-').toLowerCase();
                const timestamp = new Date().toISOString().slice(0, 10);
                link.download = `prayer-${countryName}-${timestamp}.png`;
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
