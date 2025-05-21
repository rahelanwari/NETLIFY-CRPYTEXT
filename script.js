// BIP39 word list (abbreviated version for demo purposes)
const supabaseUrl = 'https://cryptext.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // anon key
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

const API_URL = "https://cryptext-backend2.onrender.com"; // Vervang door jouw echte Render-URL

     const wordList = [
    "abandon", "ability", "able", "about", "above", "absent", "absorb", "abstract", "absurd", "abuse",
    "access", "accident", "account", "accuse", "achieve", "acid", "acoustic", "acquire", "across", "act",
    "action", "actor", "actress", "actual", "adapt", "add", "addict", "address", "adjust", "admit",
    "adult", "advance", "advice", "aerobic", "affair", "afford", "afraid", "again", "age", "agent",
    "agree", "ahead", "aim", "air", "airport", "aisle", "alarm", "album", "alcohol", "alert",
    "alien", "all", "alley", "allow", "almost", "alone", "alpha", "already", "also", "alter",
    "always", "amateur", "amazing", "among", "amount", "amused", "analyst", "anchor", "ancient", "anger",
    "angle", "angry", "animal", "ankle", "announce", "annual", "another", "answer", "antenna", "antique",
    "anxiety", "any", "apart", "apology", "appear", "apple", "approve", "april", "arch", "arctic",
    "area", "arena", "argue", "arm", "armed", "armor", "army", "around", "arrange", "arrest",
    "arrive", "arrow", "art", "artefact", "artist", "artwork", "ask", "aspect", "assault", "asset",
    "assist", "assume", "asthma", "athlete", "atom", "attack", "attend", "attitude", "attract", "auction",
    "audit", "august", "aunt", "author", "auto", "autumn", "average", "avocado", "avoid", "awake",
    "aware", "away", "awesome", "awful", "awkward", "axis", "baby", "bachelor", "bacon", "badge",
    "bag", "balance", "balcony", "ball", "bamboo", "banana", "banner", "bar", "barely", "bargain",
    "barrel", "base", "basic", "basket", "battle", "beach", "bean", "beauty", "because", "become",
    "beef", "before", "begin", "behave", "behind", "believe", "below", "belt", "bench", "benefit",
    "best", "betray", "better", "between", "beyond", "bicycle", "bid", "bike", "bind", "biology",
    "bird", "birth", "bitter", "black", "blade", "blame", "blanket", "blast", "bleak", "bless",
    "blind", "blood", "blossom", "blouse", "blue", "blur", "blush", "board", "boat", "body",
    "boil", "bomb", "bone", "bonus", "book", "boost", "border", "boring", "borrow", "boss",
    "bottom", "bounce", "box", "boy", "bracket", "brain", "brand", "brass", "brave", "bread",
    "breeze", "brick", "bridge", "brief", "bright", "bring", "brisk", "broccoli", "broken", "bronze",
    "broom", "brother", "brown", "brush", "bubble", "buddy", "budget", "buffalo", "build", "bulb",
    "bulk", "bullet", "bundle", "bunker", "burden", "burger", "burst", "bus", "business", "busy",
    "butter", "buyer", "buzz", "cabbage", "cabin", "cable", "cactus", "cage", "cake", "call",
    "calm", "camera", "camp", "can", "canal", "cancel", "candy", "cannon", "canoe", "canvas",
    "canyon", "capable", "capital", "captain", "car", "carbon", "card", "cargo", "carpet", "carry",
    "cart", "case", "cash", "casino", "castle", "casual", "cat", "catalog", "catch", "category",
    "cattle", "caught", "cause", "caution", "cave", "ceiling", "celery", "cement", "census", "century",
    "cereal", "certain", "chair", "chalk", "champion", "change", "chaos", "chapter", "charge", "chase",
    "chat", "cheap", "check", "cheese", "chef", "cherry", "chest", "chicken", "chief", "child",
    "chimney", "choice", "choose", "chronic", "chuckle", "chunk", "churn", "cigar", "cinnamon", "circle",
    "citizen", "city", "civil", "claim", "clap", "clarify", "claw", "clay", "clean", "clerk",,
    "clever", "click", "client", "cliff", "climb", "clinic", "clip", "clock", "clog", "close",
    "cloth", "cloud", "clown", "club", "clump", "cluster", "clutch", "coach", "coast", "coconut",
    "code", "coffee", "coil", "coin", "collect", "color", "column", "combine", "come", "comfort",
    "comic", "common", "company", "concert", "conduct", "confirm", "congress", "connect", "consider", "control",
    "convince", "cook", "cool", "copper", "copy", "coral", "core", "corn", "correct", "cost",
    "cotton", "couch", "country", "couple", "course", "cousin", "cover", "coyote", "crack", "cradle",
    "craft", "cram", "crane", "crash", "crater", "crawl", "crazy", "cream", "credit", "creek",
    "crew", "cricket", "crime", "crisp", "critic", "crop", "cross", "crouch", "crowd", "crucial",
    "cruel", "cruise", "crumble", "crunch", "crush", "cry", "crystal", "cube", "culture", "cup",
    "cupboard", "curious", "current", "curtain", "curve", "cushion", "custom", "cute", "cycle", "dad",
    "damage", "damp", "dance", "danger", "daring", "dash", "daughter", "dawn", "day", "deal",
    "debate", "debris", "decade", "december", "decide", "decline", "decorate", "decrease", "deer", "defense",
    "define", "defy", "degree", "delay", "deliver", "demand", "demise", "denial", "dentist", "deny",
    "depart", "depend", "deposit", "depth", "deputy", "derive", "describe", "desert", "design", "desk",
    "despair", "destroy", "detail", "detect", "develop", "device", "devote", "diagram", "dial", "diamond",
    "diary", "dice", "diesel", "diet", "differ", "digital", "dignity", "dilemma", "dinner", "dinosaur",
    "direct", "dirt", "disagree", "discover", "disease", "dish", "dismiss", "disorder", "display", "distance",
    "divert", "divide", "divorce", "dizzy", "doctor", "document", "dog", "doll", "dolphin", "domain",
    "donate", "donkey", "donor", "door", "dose", "double", "dove", "draft", "dragon", "drama",
    "drastic", "draw", "dream", "dress", "drift", "drill", "drink", "drip", "drive", "drop",
    "drum", "dry", "duck", "dumb", "dune", "during", "dust", "dutch", "duty", "dwarf",
    "dynamic", "eager", "eagle", "early", "earn", "earth", "easily", "east", "easy", "echo",
    "ecology", "economy", "edge", "edit", "educate", "effort", "egg", "eight", "either", "elbow",
    "elder", "electric", "elegant", "element", "elephant", "elevator", "elite", "else", "embark", "embody",
    "embrace", "emerge", "emotion", "employ", "empower", "empty", "enable", "enact", "end", "endless",
    "endorse", "enemy", "energy", "enforce", "engage", "engine", "enhance", "enjoy", "enlist", "enough",
    "enrich", "enroll", "ensure", "enter", "entire", "entry", "envelope", "episode", "equal", "equip",
    "era", "erase", "erode", "erosion", "error", "erupt", "escape", "essay", "essence", "estate",
    "eternal", "ethics", "evidence", "evil", "evoke", "evolve", "exact", "example", "excess", "exchange",
    "excite", "exclude", "excuse", "execute", "exercise", "exhaust", "exhibit", "exile", "exist", "exit",
    "exotic", "expand", "expect", "expire", "explain", "expose", "express", "extend", "extra", "eye",
    "eyebrow", "fabric", "face", "faculty", "fade", "faint", "faith", "fall", "false", "fame",
    "family", "famous", "fan", "fancy", "fantasy", "farm", "fashion", "fat", "fatal", "father",
    "fatigue", "fault", "favorite", "feature", "february", "federal", "fee", "feed", "feel", "female",
    "fence", "festival", "fetch", "fever", "few", "fiber", "fiction", "field", "figure", "file",
    "film", "filter", "final", "find", "fine", "finger", "finish", "fire", "firm", "first",
    "fiscal", "fish", "fit", "fitness", "fix", "flag", "flame", "flash", "flat", "flavor",
    "flee", "flight", "flip", "float", "flock", "floor", "flower", "fluid", "flush", "fly",
    "foam", "focus", "fog", "foil", "fold", "follow", "food", "foot", "force", "forest",
    "forget", "fork", "fortune", "forum", "forward", "fossil", "foster", "found", "fox", "fragile",
    "frame", "frequent", "fresh", "friend", "fringe", "frog", "front", "frost", "frown", "frozen",
    "fruit", "fuel", "fun", "funny", "furnace", "fury", "future", "gadget", "gain", "galaxy",
    "gallery", "game", "gap", "garage", "garbage", "garden", "garlic", "garment", "gas", "gasp",
    "gate", "gather", "gauge", "gaze", "general", "genius", "genre", "gentle", "genuine", "gesture",
    "ghost", "giant", "gift", "giggle", "ginger", "giraffe", "girl", "give", "glad", "glance",
    "glare", "glass", "glide", "glimpse", "globe", "gloom", "glory", "glove", "glow", "glue",
    "goat", "goddess", "gold", "good", "goose", "gorilla", "gospel", "gossip", "govern", "gown",
    "grab", "grace", "grain", "grant", "grape", "grass", "gravity", "great", "green", "grid",
    "grief", "grit", "grocery", "group", "grow", "grunt", "guard", "guess", "guide", "guilt",
    "guitar", "gun", "gym", "habit", "hair", "half", "hammer", "hamster", "hand", "happy",
    "harbor", "hard", "harsh", "harvest", "hat", "have", "hawk", "hazard", "head", "health",
    "heart", "heavy", "hedgehog", "height", "hello", "helmet", "help", "hen", "hero", "hidden",
    "high", "hill", "hint", "hip", "hire", "history", "hobby", "hockey", "hold", "hole",
    "holiday", "hollow", "home", "honey", "hood", "hope", "horn", "horror", "horse", "hospital",
    "host", "hotel", "hour", "hover", "hub", "huge", "human", "humble", "humor", "hundred",
    "hungry", "hunt", "hurdle", "hurry", "hurt", "husband", "hybrid", "ice", "icon", "idea",
    "identify", "idle", "ignore", "ill", "illegal", "illness", "image", "imitate", "immense", "immune",
    "impact", "impose", "improve", "impulse", "inch", "include", "income", "increase", "index", "indicate",
    "indoor", "industry", "infant", "inflict", "inform", "inhale", "inherit", "initial", "inject", "injury",
    "inmate", "inner", "innocent", "input", "inquiry", "insane", "insect", "inside", "inspire", "install",
    "intact", "interest", "into", "invest", "invite", "involve", "iron", "island", "isolate", "issue",
    "item", "ivory", "jacket", "jaguar", "jar", "jazz", "jealous", "jeans", "jelly", "jewel",
    "job", "join", "joke", "journey", "joy", "judge", "juice", "jump", "jungle", "junior",
    "junk", "just", "kangaroo", "keen", "keep", "ketchup", "key", "kick", "kid", "kidney",
    "kind", "kingdom", "kiss", "kit", "kitchen", "kite", "kitten", "kiwi", "knee", "knife",
    "knock", "know", "lab", "label", "labor", "ladder", "lady", "lake", "lamp", "language",
    "laptop", "large", "later", "latin", "laugh", "laundry", "lava", "law", "lawn", "lawsuit",
    "layer", "lazy", "leader", "leaf", "learn", "leave", "lecture", "left", "leg", "legal",
    "legend", "leisure", "lemon", "lend", "length", "lens", "leopard", "lesson", "letter", "level",
    "liar", "liberty", "library", "license", "life", "lift", "light", "like", "limb", "limit",
    "link", "lion", "liquid", "list", "little", "live", "lizard", "load", "loan", "lobster",
    "local", "lock", "logic", "lonely", "long", "loop", "lottery", "loud", "lounge", "love",
    "loyal", "lucky", "luggage", "lumber", "lunar", "lunch", "luxury", "lyrics", "machine", "mad",
    "magic", "magnet", "maid", "mail", "main", "major", "make", "mammal", "man", "manage",
    "mandate", "mango", "mansion", "manual", "maple", "marble", "march", "margin", "marine", "market",
    "marriage", "mask", "mass", "master", "match", "material", "math", "matrix", "matter", "maximum",
    "maze", "meadow", "mean", "measure", "meat", "mechanic", "medal", "media", "melody", "melt",
    "member", "memory", "mention", "menu", "mercy", "merge", "merit", "merry", "mesh", "message",
    "metal", "method", "middle", "midnight", "milk", "million", "mimic", "mind", "minimum", "minor",
    "minute", "miracle", "mirror", "misery", "miss", "mistake", "mix", "mixed", "mixture", "mobile",
    "model", "modify", "mom", "moment", "monitor", "monkey", "monster", "month", "moon", "moral",
    "more", "morning", "mosquito", "mother", "motion", "motor", "mountain", "mouse", "move", "movie",
    "much", "muffin", "mule", "multiply", "muscle", "museum", "mushroom", "music", "must", "mutual",
    "myself", "mystery", "myth", "naive", "name", "napkin", "narrow", "nasty", "nation", "nature",
    "near", "neck", "need", "negative", "neglect", "neither", "nephew", "nerve", "nest", "net",
    "network", "neutral", "never", "news", "next", "nice", "night", "noble", "noise", "nominee",
    "noodle", "normal", "north", "nose", "notable", "note", "nothing", "notice", "novel", "now",
    "nuclear", "number", "nurse", "nut", "oak", "obey", "object", "oblige", "obscure", "observe",
    "obtain", "obvious", "occur", "ocean", "october", "odor", "off", "offer", "office", "often",
    "oil", "okay", "old", "olive", "olympic", "omit", "once", "one", "onion", "online",
    "only", "open", "opera", "opinion", "oppose", "option", "orange", "orbit", "orchard", "order",
    "ordinary", "organ", "orient", "original", "orphan", "ostrich", "other", "outdoor", "outer", "output",
    "outside", "oval", "oven", "over", "own", "owner", "oxygen", "oyster", "ozone", "pact",
    "paddle", "page", "pair", "palace", "palm", "panda", "panel", "panic", "panther", "paper",
    "parade", "parent", "park", "parrot", "party", "pass", "patch", "path", "patient", "patrol",
    "pattern", "pause", "pave", "payment", "peace", "peanut", "pear", "peasant", "pelican", "pen",
    "penalty", "pencil", "people", "pepper", "perfect", "permit", "person", "pet", "phone", "photo",
    "phrase", "physical", "piano", "picnic", "picture", "piece", "pig", "pigeon", "pill", "pilot",
    "pink", "pioneer", "pipe", "pistol", "pitch", "pizza", "place", "planet", "plastic", "plate",
    "play", "please", "pledge", "pluck", "plug", "plunge", "poem", "poet", "point", "polar",
    "pole", "police", "pond", "pony", "pool", "popular", "portion", "position", "possible", "post",
    "potato", "pottery", "poverty", "powder", "power", "practice", "praise", "predict", "prefer", "prepare",
    "present", "pretty", "prevent", "price", "pride", "primary", "print", "priority", "prison", "private",
    "prize", "problem", "process", "produce", "profit", "program", "project", "promote", "proof", "property",
    "prosper", "protect", "proud", "provide", "public", "pudding", "pull", "pulp", "pulse", "pumpkin",
    "punch", "pupil", "puppy", "purchase", "purity", "purpose", "purse", "push", "put", "puzzle",
    "pyramid", "quality", "quantum", "quarter", "question", "quick", "quit", "quiz", "quote", "rabbit",
    "raccoon", "race", "rack", "radar", "radio", "rail", "rain", "raise", "rally", "ramp",
    "ranch", "random", "range", "rapid", "rare", "rate", "rather", "raven", "raw", "razor",
    "ready", "real", "reason", "rebel", "rebuild", "recall", "receive", "recipe", "record", "recycle",
    "reduce", "reflect", "reform", "refuse", "region", "regret", "regular", "reject", "relax", "release",
    "relief", "rely", "remain", "remember", "remind", "remove", "render", "renew", "rent", "reopen",
    "repair", "repeat", "replace", "report", "require", "rescue", "resemble", "resist", "resource", "response",
    "result", "retire", "retreat", "return", "reunion", "reveal", "review", "reward", "rhythm", "rib",
    "ribbon", "rice", "rich", "ride", "ridge", "rifle", "right", "rigid", "ring", "riot",
    "ripple", "risk", "ritual", "rival", "river", "road", "roast", "robot", "robust", "rocket",
    "romance", "roof", "rookie", "room", "rose", "rotate", "rough", "round", "route", "royal",
    "rubber", "rude", "rug", "rule", "run", "runway", "rural", "sad", "saddle", "sadness",
    "safe", "sail", "salad", "salmon", "salon", "salt", "salute", "same", "sample", "sand",
    "satisfy", "satoshi", "sauce", "sausage", "save", "say", "scale", "scan", "scare", "scatter",
    "scene", "scheme", "school", "science", "scissors", "scorpion", "scout", "scrap", "screen", "script",
    "scrub", "sea", "search", "season", "seat", "second", "secret", "section", "security", "seed",
    "seek", "segment", "select", "sell", "seminar", "senior", "sense", "sentence", "series", "service",
    "session", "settle", "setup", "seven", "shadow", "shaft", "shallow", "share", "shed", "shell",
    "sheriff", "shield", "shift", "shine", "ship", "shiver", "shock", "shoe", "shoot", "shop",
    "short", "shoulder", "shove", "shrimp", "shrug", "shuffle", "shy", "sibling", "sick", "side",
    "siege", "sight", "sign", "silent", "silk", "silly", "silver", "similar", "simple", "since",
    "sing", "siren", "sister", "situate", "six", "size", "skate", "sketch", "ski", "skill",
    "skin", "skirt", "skull", "slab", "slam", "sleep", "slender", "slice", "slide", "slight",
    "slim", "slogan", "slot", "slow", "slush", "small", "smart", "smile", "smoke", "smooth",
    "snack", "snake", "snap", "sniff", "snow", "soap", "soccer", "social", "sock", "soda",
    "soft", "solar", "soldier", "solid", "solution", "solve", "someone", "song", "soon", "sorry",
    "sort", "soul", "sound", "soup", "source", "south", "space", "spare", "spatial", "spawn",
    "speak", "special", "speed", "spell", "spend", "sphere", "spice", "spider", "spike", "spin",
    "spirit", "split", "spoil", "sponsor", "spoon", "sport", "spot", "spray", "spread", "spring",
    "spy", "square", "squeeze", "squirrel", "stable", "stadium", "staff", "stage", "stairs", "stamp",
    "stand", "start", "state", "stay", "steak", "steel", "stem", "step", "stereo", "stick",
    "still", "sting", "stock", "stomach", "stone", "stool", "story", "stove", "strategy", "street",
    "strike", "strong", "struggle", "student", "stuff", "stumble", "style", "subject", "submit", "subway",
    "success", "such", "sudden", "suffer", "sugar", "suggest", "suit", "summer", "sun", "sunny",
    "sunset", "super", "supply", "supreme", "sure", "surface", "surge", "surprise", "surround", "survey",
    "suspect", "sustain", "swallow", "swamp", "swap", "swarm", "swear", "sweet", "swift", "swim",
    "swing", "switch", "sword", "symbol", "symptom", "syrup", "system", "table", "tackle", "tag",
    "tail", "talent", "talk", "tank", "tape", "target", "task", "taste", "tattoo", "taxi",
    "teach", "team", "tell", "ten", "tenant", "tennis", "tent", "term", "test", "text",
    "thank", "that", "theme", "then", "theory", "there", "they", "thing", "this", "thought",
    "three", "thrive", "throw", "thumb", "thunder", "ticket", "tide", "tiger", "tilt", "timber",
    "time", "tiny", "tip", "tired", "tissue", "title", "toast", "tobacco", "today", "toddler",
    "toe", "together", "toilet", "token", "tomato", "tomorrow", "tone", "tongue", "tonight", "tool",
    "tooth", "top", "topic", "topple", "torch", "tornado", "tortoise", "toss", "total", "tourist",
    "toward", "tower", "town", "toy", "track", "trade", "traffic", "tragic", "train", "transfer",
    "trap", "trash", "travel", "tray", "treat", "tree", "trend", "trial", "tribe", "trick",
    "trigger", "trim", "trip", "trophy", "trouble", "truck", "true", "truly", "trumpet", "trust",
    "truth", "try", "tube", "tuition", "tumble", "tuna", "tunnel", "turkey", "turn", "turtle",
    "twelve", "twenty", "twice", "twin", "twist", "two", "type", "typical", "ugly", "umbrella",
    "unable", "unaware", "uncle", "uncover", "under", "undo", "unfair", "unfold", "unhappy", "uniform",
    "unique", "unit", "universe", "unknown", "unlock", "until", "unusual", "unveil", "update", "upgrade",
    "uphold", "upon", "upper", "upset", "urban", "urge", "usage", "use", "used", "useful",
    "useless", "usual", "utility", "vacant", "vacuum", "vague", "valid", "valley", "valve", "van",
    "vanish", "vapor", "various", "vast", "vault", "vehicle", "velvet", "vendor", "venture", "venue",
    "verb", "verify", "version", "very", "vessel", "veteran", "viable", "vibrant", "vicious", "victory",
    "video", "view", "village", "vintage", "violin", "virtual", "virus", "visa", "visit", "visual",
    "vital", "vivid", "vocal", "voice", "void", "volcano", "volume", "vote", "voyage", "wage",
    "wagon", "wait", "walk", "wall", "walnut", "want", "warfare", "warm", "warrior", "wash",
    "wasp", "waste", "water", "wave", "way", "wealth", "weapon", "wear", "weasel", "weather",
    "web", "wedding", "weekend", "weird", "welcome", "west", "wet", "whale", "what", "wheat",
    "wheel", "when", "where", "whip", "whisper", "wide", "width", "wife", "wild", "will",
    "win", "window", "wine", "wing", "wink", "winner", "winter", "wire", "wisdom", "wise",
    "wish", "witness", "wolf", "woman", "wonder", "wood", "wool", "word", "work", "world",
    "w orry", "worth", "wrap", "wreck", "wrestle", "wrist", "write", "wrong", "yard", "year",
    "yellow", "you", "young", "youth", "zebra", "zero", "zone", "zoo"
];

        // DOM Elements
        const screens = {
            welcome: document.getElementById('welcome-screen'),
            setup: document.getElementById('setup-screen'),
            recovery: document.getElementById('recovery-screen'),
            chat: document.getElementById('chat-screen')
        };

        // Buttons
        const createAccountBtn = document.getElementById('create-account-btn');
        const recoverAccountBtn = document.getElementById('recover-account-btn');
        const completeSetupBtn = document.getElementById('complete-setup-btn');
        const phraseConfirmedCheckbox = document.getElementById('phrase-confirmed');
        const recoverBtn = document.getElementById('recover-btn');
        const logoutBtn = document.getElementById('logout-btn');
        const sendBtn = document.getElementById('send-btn');
        const emojiBtn = document.getElementById('emoji-btn');
        const profilePicInput = document.getElementById('profile-pic');
        const fileBtn = document.getElementById('file-btn');
        const fileInput = document.getElementById('file-input');

        // Other elements
        const userIdDisplay = document.getElementById('user-id');
        const chatUserIdDisplay = document.getElementById('chat-user-id');
        const chatDisplayNameElement = document.getElementById('chat-display-name');
        const displayNameInput = document.getElementById('display-name');
        const recoveryPhraseContainer = document.getElementById('recovery-phrase');
        const recoveryInputContainer = document.getElementById('recovery-input');
        const recoveryErrorAlert = document.getElementById('recovery-error');
        const messageInput = document.getElementById('message-input');
        const chatMessages = document.getElementById('chat-messages');
        const contactElements = document.querySelectorAll('.contact');
        const currentChatName = document.getElementById('current-chat-name');

        // State
        let currentUser = {
            id: null,
            displayName: '',
            recoveryPhrase: [],
            contacts: {}
        };

        let groups = []; // Each group: { id, name, memberIds: [], messages: [] }

        // Initialize emoji button
        const emojiButton = new EmojiButton({
            position: 'bottom-start', // Adjust position to ensure visibility
            theme: 'light'            // Optional: Set the theme (light or dark)
        });

        // Attach the emoji picker to the button
        emojiBtn.addEventListener('click', () => {
            emojiButton.togglePicker(emojiBtn); // Toggle the emoji picker
        });

        // Handle emoji selection
        emojiButton.on('emoji', emoji => {
            messageInput.value += emoji; // Append the selected emoji to the input
        });

        // Functions
        function showScreen(screenId) {
            Object.values(screens).forEach(screen => {
                screen.classList.remove('active');
            });
            screens[screenId].classList.add('active');
            // Show top-controls only on chat screen
            document.getElementById('top-controls').style.display = (screenId === 'chat') ? 'flex' : 'none';
            // Show delete button only on chat screen (logged in)
            const deleteBtn = document.getElementById('delete-account-btn');
            if (deleteBtn) {
                deleteBtn.style.display = (screenId === 'chat') ? 'block' : 'none';
            }
        }

        function generateUniqueId() {
            return Math.floor(100000 + Math.random() * 900000).toString();
        }

        function generateRecoveryPhrase() {
            const phrase = [];
            for (let i = 0; i < 12; i++) {
                const randomIndex = Math.floor(Math.random() * wordList.length);
                phrase.push(wordList[randomIndex]);
            }
            return phrase;
        }

        function displayRecoveryPhrase(phrase) {
            recoveryPhraseContainer.innerHTML = '';
            phrase.forEach((word, index) => {
                const wordElement = document.createElement('div');
                wordElement.className = 'phrase-word';
                wordElement.innerHTML = `<span>${index + 1}.</span> ${word}`;
                recoveryPhraseContainer.appendChild(wordElement);
            });
        }

        function createRecoveryInputs() {
            recoveryInputContainer.innerHTML = '';
            for (let i = 0; i < 12; i++) {
                const wordInputDiv = document.createElement('div');
                wordInputDiv.className = 'word-input';
                
                const label = document.createElement('label');
                label.textContent = `Word ${i + 1}:`;
                
                const input = document.createElement('input');
                input.type = 'text';
                input.id = `recovery-word-${i + 1}`;
                input.className = 'form-control';
                
                wordInputDiv.appendChild(label);
                wordInputDiv.appendChild(input);
                recoveryInputContainer.appendChild(wordInputDiv);
            }
        }

        function getRecoveryInputs() {
            const words = [];
            for (let i = 1; i <= 12; i++) {
                const input = document.getElementById(`recovery-word-${i}`);
                words.push(input.value.trim().toLowerCase());
            }
            return words;
        }

        function validateRecoveryPhrase(phrase) {
            return JSON.stringify(phrase) === JSON.stringify(currentUser.recoveryPhrase);
        }

        function deriveUserIdFromPhrase(phrase) {
            const phraseStr = phrase.join(' ');
            const hash = CryptoJS.SHA256(phraseStr).toString();
            return hash.substring(0, 6);
        }

        function saveUserToLocalStorage() {
            localStorage.setItem('cryptext_user', JSON.stringify(currentUser));
        }

        function loadUserFromLocalStorage() {
            const savedUser = localStorage.getItem('cryptext_user');
            if (savedUser) {
                currentUser = JSON.parse(savedUser);
                return true;
            }
            return false;
        }

        function addMessageToChat(message, isSent = true) {
            const chatMessages = document.getElementById('chat-messages');
            const messageElement = document.createElement('div');
            messageElement.className = `message ${isSent ? 'sent' : 'received'}`;
            messageElement.textContent = message;

            const timeElement = document.createElement('div');
            timeElement.className = 'message-time';

            const now = new Date();
            timeElement.textContent = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;

            messageElement.appendChild(timeElement);
            chatMessages.appendChild(messageElement);
            chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the latest message
        }

        function showSearchBar() {
            document.getElementById('search-bar').style.display = 'block';
        }

        function showDarkModeToggle() {
            document.getElementById('dark-mode-toggle').style.display = 'block';
        }

        function saveContactsToStorage() {
            localStorage.setItem('cryptext_contacts', JSON.stringify(contacts));
        }

        function loadContactsFromStorage() {
            const stored = localStorage.getItem('cryptext_contacts');
            if (stored) {
                contacts = JSON.parse(stored);
            }
        }

        function getDefaultContacts() {
            return [
                { id: "123456", name: "crypText Info" },
                { id: "789012", name: "Jamal" },
                { id: "345678", name: "Rahel" }
            ];
        }

        // Dummy contacts array for demo (replace with your actual contacts logic)
        let contacts = [
            { id: "123456", name: "crypText Info" },
            { id: "789012", name: "Jamal" },
            { id: "345678", name: "Rahel" }
        ];

        function renderContacts() {
            const contactList = document.querySelector('.contact-list');
            contactList.innerHTML = '';
            contacts.forEach(contact => {
                // crypText Info is undeletable and has no menu
                if (contact.id === "123456") {
                    contactList.innerHTML += `
                        <div class="contact active-contact" data-id="${contact.id}">
                            <img src="images/crypText.logo.png" alt="CrypText Profile Picture" class="contact-picture">
                            <div>
                                <div class="contact-name">${contact.name}</div>
                                <div class="contact-preview">Basic crypText information</div>
                            </div>
                        </div>
                    `;
                } else {
                    contactList.innerHTML += `
                        <div class="contact" data-id="${contact.id}" style="position: relative;">
                            <img src="images/${contact.name.toLowerCase()}.pfp.${contact.id === "789012" ? "webp" : "jpg"}" alt="${contact.name} Profile Picture" class="contact-picture">
                            <div style="flex:1">
                                <div class="contact-name">${contact.name} (@${contact.id})</div>
                                <div class="contact-preview">No messages with this person yet</div>
                            </div>
                            <button class="contact-menu-btn" title="More options">⋮</button>
                        </div>
                    `;
                }
            });
            attachContactMenuEvents();
            attachContactClickEvents(); // <-- Add this line
        }

        // Group modal logic
        const addGroupBtn = document.getElementById('add-group-btn');
        const groupModal = document.getElementById('group-modal');
        const groupModalContent = document.getElementById('group-modal-content');
        const groupContactsForm = document.getElementById('group-contacts-form');
        const createGroupConfirmBtn = document.getElementById('create-group-confirm-btn');
        const cancelGroupBtn = document.getElementById('cancel-group-btn');

        if (addGroupBtn) {
            addGroupBtn.addEventListener('click', () => {
                // Populate contacts as checkboxes
                groupContactsForm.innerHTML = '';
                contacts.forEach(contact => {
                    const label = document.createElement('label');
                    label.style.display = "block";
                    label.style.marginBottom = "6px";
                    label.innerHTML = `<input type="checkbox" value="${contact.id}"> ${contact.name} (@${contact.id})`;
                    groupContactsForm.appendChild(label);
                });
                groupModal.classList.remove('hidden');
            });
        }
        if (cancelGroupBtn) {
            cancelGroupBtn.addEventListener('click', () => {
                groupModal.classList.add('hidden');
            });
        }
        if (groupModalContent) {
            groupModalContent.addEventListener('click', (e) => e.stopPropagation());
        }
        if (groupModal) {
            groupModal.addEventListener('click', function (e) {
                if (e.target === groupModal) groupModal.classList.add('hidden');
            });
        }
        if (createGroupConfirmBtn) {
            createGroupConfirmBtn.addEventListener('click', () => {
                const selected = Array.from(groupContactsForm.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
                alert('Selected contacts for group: ' + selected.join(', '));
                groupModal.classList.add('hidden');
            });
        }

        // Show contacts modal logic with clickable/editable contacts
        const showContactsBtn = document.getElementById('show-contacts-btn');
        const contactsModal = document.getElementById('contacts-modal');
        const contactsModalContent = document.getElementById('contacts-modal-content');
        const contactsList = document.getElementById('contacts-list');
        const closeContactsBtn = document.getElementById('close-contacts-btn');

        // Edit contact modal logic
        const editContactModal = document.getElementById('edit-contact-modal');
        const editContactModalContent = document.getElementById('edit-contact-modal-content');
        const editContactName = document.getElementById('edit-contact-name');
        const editContactId = document.getElementById('edit-contact-id');
        const saveContactBtn = document.getElementById('save-contact-btn');
        const deleteContactBtn = document.getElementById('delete-contact-btn');
        const cancelEditContactBtn = document.getElementById('cancel-edit-contact-btn');

        let editingContactIndex = null;

        if (showContactsBtn) {
            showContactsBtn.addEventListener('click', () => {
                contactsList.innerHTML = '';
                contacts.forEach((contact, idx) => {
                    const li = document.createElement('li');
                    li.style.marginBottom = "8px";
                    li.style.display = "flex";
                    li.style.alignItems = "center";
                    li.style.justifyContent = "space-between";
                    li.style.cursor = "pointer";
                    li.innerHTML = `
                        <span>
                            <strong>${contact.name}</strong> <span style="color:#888;">(@${contact.id})</span>
                        </span>
                        <span>
                            <button class="btn btn-sm edit-contact-btn" data-index="${idx}" style="background:#007bff; color:#fff; font-size:0.9em; padding:2px 8px; border-radius:5px; margin-right:4px;">✎</button>
                            <button class="btn btn-sm delete-contact-btn" data-index="${idx}" style="background:#dc3545; color:#fff; font-size:0.9em; padding:2px 8px; border-radius:5px;">✖</button>
                        </span>
                    `;
                    // Click on name selects contact (you can add your logic here)
                    li.querySelector('span').onclick = () => {
                        alert('Selected contact: ' + contact.name + ' (@' + contact.id + ')');
                    };
                    // Edit button
                    li.querySelector('.edit-contact-btn').onclick = (e) => {
                        editingContactIndex = idx;
                        editContactName.value = contact.name;
                        editContactId.textContent = '@' + contact.id;
                        editContactModal.classList.remove('hidden');
                        e.stopPropagation();
                    };
                    // Delete button
                    li.querySelector('.delete-contact-btn').onclick = (e) => {
                        if (confirm('Are you sure you want to delete this contact?')) {
                            contacts.splice(idx, 1);
                            showContactsBtn.click();
                        }
                        e.stopPropagation();
                    };
                    contactsList.appendChild(li);
                });
                contactsModal.classList.remove('hidden');
            });
        }
        if (closeContactsBtn) {
            closeContactsBtn.addEventListener('click', () => {
                contactsModal.classList.add('hidden');
            });
        }
        if (contactsModalContent) {
            contactsModalContent.addEventListener('click', (e) => e.stopPropagation());
        }
        if (contactsModal) {
            contactsModal.addEventListener('click', function (e) {
                if (e.target === contactsModal) contactsModal.classList.add('hidden');
            });
        }

        // Edit contact modal logic
        if (saveContactBtn) {
            saveContactBtn.addEventListener('click', () => {
                if (editingContactIndex !== null) {
                    // Update the contact's name with the new value
                    contacts[editingContactIndex].name = editContactName.value || contacts[editingContactIndex].name;
                    editContactModal.classList.add('hidden');
                    // Optionally update UI immediately
                    showContactsBtn.click();
                }
            });
        }
        if (deleteContactBtn) {
            deleteContactBtn.addEventListener('click', () => {
                if (editingContactIndex !== null) {
                    if (confirm('Are you sure you want to delete this contact?')) {
                        contacts.splice(editingContactIndex, 1);
                        editContactModal.classList.add('hidden');
                        showContactsBtn.click();
                    }
                }
            });
        }
        if (cancelEditContactBtn) {
            cancelEditContactBtn.addEventListener('click', () => {
                editContactModal.classList.add('hidden');
            });
        }
        if (editContactModalContent) {
            editContactModalContent.addEventListener('click', (e) => e.stopPropagation());
        }
        if (editContactModal) {
            editContactModal.addEventListener('click', function (e) {
                if (e.target === editContactModal) editContactModal.classList.add('hidden');
            });
        }

        // Event Listeners
        createAccountBtn.addEventListener('click', () => {
            const userId = generateUniqueId();
            const recoveryPhrase = generateRecoveryPhrase();

            currentUser.id = userId;
            currentUser.recoveryPhrase = recoveryPhrase;

            userIdDisplay.textContent = userId;
            displayRecoveryPhrase(recoveryPhrase);

            // Reset contacts for new account
            contacts = getDefaultContacts();
            saveContactsToStorage();
            renderContacts();

            showScreen('setup');
        });

        recoverAccountBtn.addEventListener('click', () => {
            createRecoveryInputs();
            showScreen('recovery');
        });

        phraseConfirmedCheckbox.addEventListener('change', () => {
            completeSetupBtn.disabled = !phraseConfirmedCheckbox.checked;
        });

        completeSetupBtn.addEventListener('click', () => {
            currentUser.displayName = displayNameInput.value || 'Anonymous User';
            saveUserToLocalStorage();
            chatUserIdDisplay.textContent = `@${currentUser.id}`;
            chatDisplayNameElement.textContent = currentUser.displayName;
            showSearchBar(); // Show the search bar
            showDarkModeToggle(); // Show the dark mode toggle
            showScreen('chat');
        });

        recoverBtn.addEventListener('click', () => {
            const inputPhrase = getRecoveryInputs();
            if (validateRecoveryPhrase(inputPhrase)) {
                const userId = deriveUserIdFromPhrase(inputPhrase);
                currentUser.id = userId;
                currentUser.recoveryPhrase = inputPhrase;
                currentUser.displayName = 'Recovered User';
                saveUserToLocalStorage();
                chatUserIdDisplay.textContent = `@${currentUser.id}`;
                chatDisplayNameElement.textContent = currentUser.displayName;
                recoveryErrorAlert.classList.add('hidden');

                // Reset contacts for recovered account
                contacts = getDefaultContacts();
                saveContactsToStorage();
                renderContacts();

                showSearchBar();
                showDarkModeToggle();
                showScreen('chat');
            } else {
                recoveryErrorAlert.classList.remove('hidden');
            }
        });

        document.getElementById('back-to-welcome-setup')?.addEventListener('click', function() {
            showScreen('welcome');
        });
        document.getElementById('back-to-welcome-recovery')?.addEventListener('click', function() {
            showScreen('welcome');
        });

        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('cryptext_user');
            localStorage.setItem('cryptext_contacts', JSON.stringify(getDefaultContacts())); // Reset contacts
            showScreen('welcome');
        });

        sendBtn.addEventListener('click', () => {
            const messageInput = document.getElementById('message-input');
            const message = messageInput.value.trim();

            if (message) {
                addMessageToChat(message, true); // Add the message to the chat
                messageInput.value = ''; // Clear the input field
            }
        });

        messageInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                sendBtn.click();
            }
        });

        function attachContactClickEvents() {
            const contactElements = document.querySelectorAll('.contact');
            contactElements.forEach(contact => {
                contact.addEventListener('click', function(e) {
                    // Prevent switching chat if clicking the ⋮ button
                    if (e.target.classList.contains('contact-menu-btn')) return;
                    contactElements.forEach(c => c.classList.remove('active-contact'));
                    this.classList.add('active-contact');
                    const contactName = this.querySelector('.contact-name').textContent;
                    const currentChatName = document.getElementById('current-chat-name');
                    const chatMessages = document.getElementById('chat-messages');
                    currentChatName.textContent = contactName;
                    chatMessages.innerHTML = '';
                    setTimeout(() => {
                        addMessageToChat('Hi there! This is a new conversation.', false);
                    }, 300);
                });
            });
        }

        // Check if user is already logged in
        window.addEventListener('DOMContentLoaded', () => {
            if (loadUserFromLocalStorage()) {
                chatUserIdDisplay.textContent = `@${currentUser.id}`;
                chatDisplayNameElement.textContent = currentUser.displayName;
                showScreen('chat');
            }
        });

        // Handle Profile Picture Upload
        profilePicInput.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function (event) {
                const dataUrl = event.target.result;
                // Save to localStorage
                localStorage.setItem('profilePicture', dataUrl);
                // Set the profile picture src
                document.getElementById('profile-picture').src = dataUrl;
                document.getElementById('profile-picture').style.display = 'block';
                // If you have a modal or other places, update them too
                const modalPic = document.getElementById('modal-profile-picture');
                if (modalPic) {
                    modalPic.src = dataUrl;
                    modalPic.style.display = 'block';
                }
            };
            reader.readAsDataURL(file);
        });

        // Search Functionality
        document.getElementById('search-contacts').addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const contacts = document.querySelectorAll('.contact');
            contacts.forEach(contact => {
                const name = contact.querySelector('.contact-name').textContent.toLowerCase();
                contact.style.display = name.includes(query) ? '' : 'none';
            });
        });

        // Dark Mode Toggle
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });

        // Settings Bar Toggle
        const settingsBtn = document.getElementById('settings-btn');
        const settingsBar = document.getElementById('settings-bar');
        const closeSettingsBtn = document.getElementById('close-settings-btn');

        // Toggle the settings bar
        settingsBtn.addEventListener('click', () => {
            settingsBar.classList.toggle('active');
        });

        // Close the settings bar
        closeSettingsBtn.addEventListener('click', () => {
            settingsBar.classList.remove('active');
        });

        // Toggle the emoji picker
        document.getElementById('emoji-btn').addEventListener('click', () => {
            const emojiPicker = document.getElementById('emoji-picker');
            const emojiButton = document.getElementById('emoji-btn');

            // Toggle visibility
            emojiPicker.classList.toggle('hidden');

            if (!emojiPicker.classList.contains('hidden')) {
                // Get the position of the emoji button
                const buttonRect = emojiButton.getBoundingClientRect();

                // Position the emoji picker above the button
                emojiPicker.style.left = `${buttonRect.left}px`;
                emojiPicker.style.top = `${buttonRect.top - emojiPicker.offsetHeight}px`;
            }
        });

        // Handle emoji selection
        document.getElementById('emoji-picker').addEventListener('click', (event) => {
            if (event.target.tagName === 'SPAN') {
                const emoji = event.target.textContent;
                const messageInput = document.getElementById('message-input');

                // Insert the emoji at the cursor position
                const cursorPosition = messageInput.selectionStart;
                const textBeforeCursor = messageInput.value.substring(0, cursorPosition);
                const textAfterCursor = messageInput.value.substring(cursorPosition);
                messageInput.value = textBeforeCursor + emoji + textAfterCursor;

                // Refocus the input and set the cursor position
                messageInput.focus();
                messageInput.selectionStart = messageInput.selectionEnd = cursorPosition + emoji.length;
            }
        });

        // Handle sending messages (including emojis)
        document.getElementById('send-btn').addEventListener('click', () => {
            const messageInput = document.getElementById('message-input');
            const message = messageInput.value.trim();

            if (message) {
                addMessageToChat(message, true); // Add the message to the chat
                messageInput.value = ''; // Clear the input field
            }
        });

        // Add message to chat
        function addMessageToChat(message, isSent = true) {
            const chatMessages = document.getElementById('chat-messages');
            const messageElement = document.createElement('div');
            messageElement.className = `message ${isSent ? 'sent' : 'received'}`;
            messageElement.textContent = message;

            const timeElement = document.createElement('div');
            timeElement.className = 'message-time';

            const now = new Date();
            timeElement.textContent = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;

            messageElement.appendChild(timeElement);
            chatMessages.appendChild(messageElement);
            chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the latest message
        }

        // Copy Recovery Phrase Button
        document.getElementById('copy-recovery-phrase-btn').addEventListener('click', () => {
            const recoveryPhraseContainer = document.getElementById('recovery-phrase');
            const phraseWords = Array.from(recoveryPhraseContainer.querySelectorAll('.phrase-word')).map(word => word.textContent.trim());
            const recoveryPhrase = phraseWords.join(' ');

            // Copy to clipboard
            navigator.clipboard.writeText(recoveryPhrase).then(() => {
                alert('Recovery phrase copied to clipboard');
            }).catch(err => {
                console.error('Failed to copy recovery phrase: ', err);
            });
        });

        // Show modal
        document.getElementById('add-user-btn').onclick = function() {
            document.getElementById('add-user-modal').classList.remove('hidden');
            document.getElementById('new-user-id').value = '';
            document.getElementById('add-user-error').textContent = '';
            document.getElementById('new-user-id').focus();
        };

        // Hide modal
        document.getElementById('cancel-add-user-btn').onclick = function() {
            document.getElementById('add-user-modal').classList.add('hidden');
        };

        // Confirm add user
        document.getElementById('confirm-add-user-btn').onclick = function() {
            const id = document.getElementById('new-user-id').value.trim();
            const errorDiv = document.getElementById('add-user-error');
            if (!/^\d{6}$/.test(id)) {
                errorDiv.textContent = "Please enter a valid 6-digit ID.";
                return;
            }
            errorDiv.textContent = '';
            // Add user logic here (e.g., add to contact list)
            alert('User @' + id + ' added!'); // Replace with your logic
            document.getElementById('add-user-modal').classList.add('hidden');
        };

        // Optional: Close modal on outside click
        document.getElementById('add-user-modal').onclick = function(e) {
            if (e.target === this) this.classList.add('hidden');
        };

        // Delete Account Modal Logic
        const deleteAccountBtn = document.getElementById('delete-account-btn');
        const deleteAccountModal = document.getElementById('delete-account-modal');
        const confirmDeleteCheckbox = document.getElementById('confirm-delete-checkbox');
        const deleteMessagesBtn = document.getElementById('delete-messages-btn');
        const panicDeleteBtn = document.getElementById('panic-delete-account-btn');
        const cancelDeleteBtn = document.getElementById('cancel-delete-account-btn');
        const modalContent = document.getElementById('delete-account-modal-content');

        // Show modal only when Delete Account is clicked
        if (deleteAccountBtn) {
            deleteAccountBtn.addEventListener('click', () => {
                deleteAccountModal.classList.remove('hidden');
                confirmDeleteCheckbox.checked = false;
                deleteMessagesBtn.disabled = true;
                panicDeleteBtn.disabled = true;
            });
        }

        // Enable buttons only if checkbox is checked
        if (confirmDeleteCheckbox) {
            confirmDeleteCheckbox.addEventListener('change', () => {
                deleteMessagesBtn.disabled = !confirmDeleteCheckbox.checked;
                panicDeleteBtn.disabled = !confirmDeleteCheckbox.checked;
            });
        }

        // Cancel button closes the modal
        if (cancelDeleteBtn) {
            cancelDeleteBtn.addEventListener('click', () => {
                deleteAccountModal.classList.add('hidden');
            });
        }

        // Prevent modal from closing when clicking inside the modal content
        if (modalContent) {
            modalContent.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }

        // Clicking outside the modal content closes the modal
        deleteAccountModal.addEventListener('click', function (e) {
            if (e.target === deleteAccountModal) {
                deleteAccountModal.classList.add('hidden');
            }
        });

        // Handle Delete All Messages
        if (deleteMessagesBtn) {
            deleteMessagesBtn.addEventListener('click', () => {
                // Add your logic to delete all messages here
                alert('All your messages have been deleted. Your account is safe.');
                deleteAccountModal.classList.add('hidden');
            });
        }

        // Handle Panic Delete (Account & All Data)
        if (panicDeleteBtn) {
            panicDeleteBtn.addEventListener('click', () => {
                // Add your logic to delete all data and account here
                localStorage.removeItem('cryptext_user');
                alert('All your data and account have been permanently deleted.');
                deleteAccountModal.classList.add('hidden');
                // Optionally, reload or redirect to welcome screen
                location.reload();
            });
        }

        // Profile modal logic
        const profileSettingsBtn = document.getElementById('profile-settings-btn');
        const profileModal = document.getElementById('profile-modal');
        const profileModalContent = document.getElementById('profile-modal-content');
        const modalProfilePicture = document.getElementById('modal-profile-picture');
        const modalProfilePicInput = document.getElementById('modal-profile-pic-input');
        const modalDisplayName = document.getElementById('modal-display-name');
        const modalUserId = document.getElementById('modal-user-id');
        const saveProfileBtn = document.getElementById('save-profile-btn');
        const cancelProfileBtn = document.getElementById('cancel-profile-btn');

        // Elements on main chat screen
        const chatDisplayName = document.getElementById('chat-display-name');
        const chatUserId = document.getElementById('chat-user-id');
        const profilePicture = document.getElementById('profile-picture');

        // Show modal and fill with current info
        if (profileSettingsBtn) {
            profileSettingsBtn.addEventListener('click', () => {
                // Set current values
                modalDisplayName.value = chatDisplayName.textContent;
                modalUserId.textContent = chatUserId.textContent;
                if (profilePicture.src && profilePicture.style.display !== "none") {
                    modalProfilePicture.src = profilePicture.src;
                    modalProfilePicture.style.display = "block";
                } else {
                    modalProfilePicture.style.display = "none";
                }
                profileModal.classList.remove('hidden');
            });
        }

        // Save changes
        if (saveProfileBtn) {
            saveProfileBtn.addEventListener('click', () => {
                chatDisplayName.textContent = modalDisplayName.value || "Anonymous User";
                // Update profile picture if a new one is selected
                if (modalProfilePicInput.files && modalProfilePicInput.files[0]) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        profilePicture.src = e.target.result;
                        profilePicture.style.display = "block";
                    };
                    reader.readAsDataURL(modalProfilePicInput.files[0]);
                }
                profileModal.classList.add('hidden');
            });
        }

        // Cancel button closes the modal
        if (cancelProfileBtn) {
            cancelProfileBtn.addEventListener('click', () => {
                profileModal.classList.add('hidden');
            });
        }

        // Prevent modal from closing when clicking inside the modal content
        if (profileModalContent) {
            profileModalContent.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }

        // Clicking outside the modal content closes the modal
        if (profileModal) {
            profileModal.addEventListener('click', function (e) {
                if (e.target === profileModal) {
                    profileModal.classList.add('hidden');
                }
            });
        }

        window.addEventListener('DOMContentLoaded', function () {
            const dataUrl = localStorage.getItem('profilePicture');
            if (dataUrl) {
                const profilePic = document.getElementById('profile-picture');
                profilePic.src = dataUrl;
                profilePic.style.display = 'block';
                // Also update modal if present
                const modalPic = document.getElementById('modal-profile-picture');
                if (modalPic) {
                    modalPic.src = dataUrl;
                    modalPic.style.display = 'block';
                }
            }
        });

        window.addEventListener('DOMContentLoaded', function () {
            loadContactsFromStorage();
            renderContacts();
            attachContactMenuEvents();
            attachContactClickEvents();
            // ...rest of your DOMContentLoaded logic...
        });

        function attachContactMenuEvents() {
            const contextMenu = document.getElementById('contact-context-menu');
            let contextTarget = null;

            // Remove any previous listeners to avoid stacking
            document.removeEventListener('mousedown', handleOutsideClick);

            document.querySelectorAll('.contact-menu-btn').forEach(btn => {
                btn.addEventListener('click', function (e) {
                    e.stopPropagation();
                    contextTarget = btn.closest('.contact');
                    // Position menu
                    const rect = btn.getBoundingClientRect();
                    contextMenu.style.top = `${rect.bottom + window.scrollY}px`;
                    contextMenu.style.left = `${rect.right - contextMenu.offsetWidth}px`;
                    contextMenu.classList.remove('hidden');

                    // Add listener to close menu when clicking outside
                    setTimeout(() => {
                        document.addEventListener('mousedown', handleOutsideClick);
                    }, 0);
                });
            });

            // Prevent menu from closing when clicking inside it
            contextMenu.onclick = e => e.stopPropagation();

            function handleOutsideClick(e) {
                if (!contextMenu.contains(e.target)) {
                    contextMenu.classList.add('hidden');
                    contextTarget = null;
                    document.removeEventListener('mousedown', handleOutsideClick);
                }
            }

            // Clear Chat
            document.getElementById('clear-chat-btn').onclick = function (e) {
                e.stopPropagation();
                // Implement your clear chat logic here
                alert('All messages for this chat have been cleared.');
                contextMenu.classList.add('hidden');
                contextTarget = null;
                document.removeEventListener('mousedown', handleOutsideClick);
            };

            // Delete Chat
            document.getElementById('delete-chat-btn').onclick = function (e) {
                e.stopPropagation();
                if (contextTarget) {
                    const contactId = contextTarget.getAttribute('data-id');
                    contacts = contacts.filter(c => c.id !== contactId);
                    saveContactsToStorage();
                    renderContacts();
                    contextMenu.classList.add('hidden');
                    contextTarget = null;
                    document.removeEventListener('mousedown', handleOutsideClick);
                }
            };
        }

        if (fileBtn && fileInput) {
            fileBtn.addEventListener('click', () => {
                fileInput.click();
            });

            fileInput.addEventListener('change', function () {
                const file = this.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = function (e) {
                    if (file.type.startsWith('image/')) {
                        addMediaToChat('image', e.target.result, file.name, true);
                    } else if (file.type.startsWith('video/')) {
                        addMediaToChat('video', e.target.result, file.name, true);
                    } else {
                        addMediaToChat('file', e.target.result, file.name, true, file.type);
                    }
                };
                // For non-image/video files, use readAsDataURL for download links
                reader.readAsDataURL(file);
                this.value = '';
            });
        }

        function addMediaToChat(type, src, name, isSent = true, mimeType = '') {
            const chatMessages = document.getElementById('chat-messages');
            const messageElement = document.createElement('div');
            messageElement.className = `message ${isSent ? 'sent' : 'received'}`;
            let media;
            if (type === 'image') {
                media = document.createElement('img');
                media.src = src;
                media.alt = name;
                media.style.maxWidth = "180px";
                media.style.maxHeight = "180px";
                media.style.display = "block";
                media.style.borderRadius = "10px";
                media.style.margin = "5px 0";
                messageElement.appendChild(media);
            } else if (type === 'video') {
                media = document.createElement('video');
                media.src = src;
                media.controls = true;
                media.style.maxWidth = "220px";
                media.style.maxHeight = "180px";
                media.style.display = "block";
                media.style.borderRadius = "10px";
                media.style.margin = "5px 0";
                messageElement.appendChild(media);
            } else if (type === 'file') {
                media = document.createElement('a');
                media.href = src;
                media.download = name;
                media.target = "_blank";
                media.textContent = `📄 ${name}`;
                media.style.display = "inline-block";
                media.style.wordBreak = "break-all";
                media.style.margin = "5px 0";
                messageElement.appendChild(media);
            }

            const timeElement = document.createElement('div');
            timeElement.className = 'message-time';
            const now = new Date();
            timeElement.textContent = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
            messageElement.appendChild(timeElement);

            chatMessages.appendChild(messageElement);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
// 1. Gebruiker registreren (account aanmaken)
function registerUser(userId, displayName, publicKey) {
  return fetch(`${API_URL}/api/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: userId, display_name: displayName, public_key: publicKey })
  })
  .then(res => res.json());
}

// 2. Gebruiker ophalen (login of details)
function fetchUser(userId) {
  return fetch(`${API_URL}/api/users/${userId}`)
    .then(res => res.json());
}

// 3. Contacten ophalen
function fetchContacts(userId) {
  return fetch(`${API_URL}/api/contacts?user=${userId}`)
    .then(res => res.json());
}

// 3b. Contact toevoegen
function addContact(userId, contactId) {
  return fetch(`${API_URL}/api/contacts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_id: userId, contact_id: contactId })
  })
  .then(res => res.json());
}

// 3c. Contact verwijderen
function removeContact(userId, contactId) {
  return fetch(`${API_URL}/api/contacts/${contactId}?user=${userId}`, {
    method: 'DELETE'
  })
  .then(res => res.json());
}

// 4. Berichten ophalen
function fetchMessages(conversationId) {
  return fetch(`${API_URL}/api/messages?conversation=${conversationId}`)
    .then(res => res.json());
}

// 5. Bericht versturen
function sendMessage(conversationId, senderId, content) {
  return fetch(`${API_URL}/api/messages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      conversation: conversationId,
      sender: senderId,
      content: content
    })
  })
  .then(res => res.json());
}

// 6. Bestand/media uploaden (voorbeeld met FormData)
function uploadFile(conversationId, senderId, file) {
  const formData = new FormData();
  formData.append('conversation', conversationId);
  formData.append('sender', senderId);
  formData.append('file', file);

  return fetch(`${API_URL}/api/files`, {
    method: 'POST',
    body: formData
  })
  .then(res => res.json());
}

// 7. Groep aanmaken
function createGroup(name, memberIds) {
  return fetch(`${API_URL}/api/groups`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, members: memberIds })
  })
  .then(res => res.json());
}

// 7b. Groep bijwerken (leden toevoegen/verwijderen)
function updateGroup(groupId, memberIds) {
  return fetch(`${API_URL}/api/groups/${groupId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ members: memberIds })
  })
  .then(res => res.json());
}

// 8. Profiel aanpassen (bijv. display name)
function updateProfile(userId, displayName, newPublicKey) {
  return fetch(`${API_URL}/api/users/${userId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ display_name: displayName, public_key: newPublicKey })
  })
  .then(res => res.json());
}


