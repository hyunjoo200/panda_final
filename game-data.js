/* =====================================================================
   중국어 탐험대 · 마지막 차시 「판다의 졸업 대모험」 — 설정 파일 (game-data.js)
   ---------------------------------------------------------------------
   선생님이 고쳐도 되는 곳은 이 파일뿐입니다. (온라인 연결은 firebase-config.js)
   - 따옴표(' ') 안의 글자와 숫자만 바꾸고, 쉼표(,)와 괄호는 지우지 마세요.
   - 문제를 줄이고 싶으면 missions 안의 { id: ... } 묶음을 통째로 지우면 돼요 (구역마다 1개 이상 남기기).
   ===================================================================== */

window.GAME_DATA = {

  lessonId: 'lesson12',
  saveKey: 'panda-lesson12',
  stageLabel: '마지막 차시 · 전체 복습',
  title: '판다의 졸업 대모험',
  subtitle: '我会说一点儿汉语！',
  story: [
    '12번의 중국어 수업이 모두 끝나는 날! 판다가 졸업 여행을 떠나요.',
    '차시마다 가장 중요한 표현이 종 하나씩! 1스테이지에서 1~6차시 종을 울리고 꼬마 대나무 괴물을 이기면 작은 문이 열려요.',
    '작은 문 너머 어두운 2스테이지에는 8~11차시 핵심 표현과… 엄청나게 큰 괴물이 기다리고 있대요! 준비됐나요?'
  ],

  /* 점수 · bump: 버섯과 부딪혀도 별이 줄지 않아요(0) */
  points: { firstTry: 100, retry: 60, bossFirstTry: 150, bossRetry: 90, star: 10, block: 20, golden: 50, bump: 0, stomp: 20, fall: 0 },
  fallRespawn: 'bell',     // 구덩이에 빠지면 지나온 종 근처에서 다시 출발

  /* ---------- 중국어 소리 (검수 전 자동 음성) · pic: 그림 · flag: 국기 ---------- */
  audio: {
    useLocalFiles: true,
    useOnlineVoice: true,
    onlineVoiceUrl: 'https://translate.google.com/translate_tts?ie=UTF-8&tl=zh-CN&client=tw-ob&q=',
    slowRate: 0.7,
    sounds: {
      ma1: { text: '妈', pinyin: 'mā', tone: 1 }, ma2: { text: '麻', pinyin: 'má', tone: 2 },
      ma3: { text: '马', pinyin: 'mǎ', tone: 3 }, ma4: { text: '骂', pinyin: 'mà', tone: 4 },
      nihao: { text: '你好', pinyin: 'nǐ hǎo' }, laoshihao: { text: '老师好', pinyin: 'lǎoshī hǎo' }, tongxuemenhao: { text: '同学们好', pinyin: 'tóngxuémen hǎo' },
      xiexie: { text: '谢谢', pinyin: 'xièxie' }, bukeqi: { text: '不客气', pinyin: 'bú kèqi' },
      duibuqi: { text: '对不起', pinyin: 'duìbuqǐ' }, meiguanxi: { text: '没关系', pinyin: 'méi guānxi' },
      zaoshanghao: { text: '早上好', pinyin: 'zǎoshang hǎo' }, wanan: { text: '晚安', pinyin: 'wǎn’ān' }, zaijian: { text: '再见', pinyin: 'zàijiàn' },
      nijiao: { text: '你叫什么名字？', pinyin: 'Nǐ jiào shénme míngzi?' }, wojiaoxiaoming: { text: '我叫小明。', pinyin: 'Wǒ jiào Xiǎomíng.' },
      nishinaguoren: { text: '你是哪国人？', pinyin: 'Nǐ shì nǎ guó rén?' },
      hanguo: { text: '韩国', pinyin: 'Hánguó', flag: 'KR' }, zhongguo: { text: '中国', pinyin: 'Zhōngguó', flag: 'CN' },
      meiguo: { text: '美国', pinyin: 'Měiguó', flag: 'US' }, riben: { text: '日本', pinyin: 'Rìběn', flag: 'JP' },
      woshihanguoren: { text: '我是韩国人。', pinyin: 'Wǒ shì Hánguó rén.' }, woshizhongguoren: { text: '我是中国人。', pinyin: 'Wǒ shì Zhōngguó rén.' },
      sanshiliu: { text: '三十六', pinyin: 'sānshíliù' },
      d1109: { text: '十一月九号', pinyin: 'shíyī yuè jiǔ hào' }, d0911: { text: '九月十一号', pinyin: 'jiǔ yuè shíyī hào' }, d0119: { text: '一月十九号', pinyin: 'yī yuè shíjiǔ hào' },
      nideshengri: { text: '你的生日是几月几号？', pinyin: 'Nǐ de shēngrì shì jǐ yuè jǐ hào?' },
      wode0521: { text: '我的生日是五月二十一号。', pinyin: 'Wǒ de shēngrì shì wǔ yuè èrshíyī hào.' },
      zheshiwomama: { text: '这是我妈妈。', pinyin: 'Zhè shì wǒ māma.' },
      woshimama: { text: '我是妈妈。', pinyin: 'Wǒ shì māma.' },
      woxihuanmama: { text: '我喜欢妈妈。', pinyin: 'Wǒ xǐhuan māma.' },
      jiaozi: { text: '饺子', pinyin: 'jiǎozi', img: 'jiaozi' }, zhajiangmian: { text: '炸酱面', pinyin: 'zhájiàngmiàn', img: 'zhajiangmian' },
      tanghulu: { text: '糖葫芦', pinyin: 'tánghúlu', img: 'tanghulu' }, malatang: { text: '麻辣烫', pinyin: 'málàtàng', img: 'malatang' },
      mantou: { text: '馒头', pinyin: 'mántou' }, baozi: { text: '包子', pinyin: 'bāozi' },
      nixianghe: { text: '你想喝什么？', pinyin: 'Nǐ xiǎng hē shénme?' },
      he_naicha: { text: '我想喝奶茶。', pinyin: 'Wǒ xiǎng hē nǎichá.' }, chi_naicha: { text: '我想吃奶茶。', pinyin: 'Wǒ xiǎng chī nǎichá.' },
      haochima: { text: '好吃吗？', pinyin: 'Hǎochī ma?' }, henhaochi: { text: '很好吃！', pinyin: 'Hěn hǎochī!' },
      qingtian: { text: '晴天', pinyin: 'qíngtiān', img: 'qingtian' }, xuetian: { text: '雪天', pinyin: 'xuětiān', img: 'xuetian' }, yutian: { text: '雨天', pinyin: 'yǔtiān', img: 'yutian' },
      like_xuetian: { text: '我喜欢雪天。', pinyin: 'Wǒ xǐhuan xuětiān.' },
      like_mao_nine: { text: '我喜欢猫。你呢？', pinyin: 'Wǒ xǐhuan māo. Nǐ ne?' },
      chi_zhajiangmian: { text: '我想吃炸酱面。', pinyin: 'Wǒ xiǎng chī zhájiàngmiàn.' },
      chi_jiaozi: { text: '我想吃饺子。', pinyin: 'Wǒ xiǎng chī jiǎozi.' }, like_jiaozi: { text: '我喜欢饺子。', pinyin: 'Wǒ xǐhuan jiǎozi.' },
      chi_malatang: { text: '我想吃麻辣烫。', pinyin: 'Wǒ xiǎng chī málàtàng.' },
      nixihuan: { text: '你喜欢什么？', pinyin: 'Nǐ xǐhuan shénme?' }, nixiangchi: { text: '你想吃什么？', pinyin: 'Nǐ xiǎng chī shénme?' },
      woxihuanxiongmao: { text: '我喜欢熊猫。', pinyin: 'Wǒ xǐhuan xióngmāo.' },
      tizuqiu: { text: '我喜欢踢足球。', pinyin: 'Wǒ xǐhuan tī zúqiú.' },
      haojiubujian: { text: '好久不见！', pinyin: 'Hǎojiǔ bú jiàn!' },
      zuijin: { text: '最近怎么样？', pinyin: 'Zuìjìn zěnmeyàng?' },
      wohenhao_nine: { text: '我很好。你呢？', pinyin: 'Wǒ hěn hǎo. Nǐ ne?' },
      haikeyi_nine: { text: '还可以。你呢？', pinyin: 'Hái kěyǐ. Nǐ ne?' },
      wohenlei: { text: '我很累。', pinyin: 'Wǒ hěn lèi.' },
      wohenmang: { text: '我很忙。', pinyin: 'Wǒ hěn máng.' },
      haojiu_zuijin: { text: '好久不见！最近怎么样？', pinyin: 'Hǎojiǔ bú jiàn! Zuìjìn zěnmeyàng?' },
      taibangle: { text: '太棒了！', pinyin: 'Tài bàng le!' },
      wohuishuo: { text: '我会说一点儿汉语！', pinyin: 'Wǒ huì shuō yìdiǎnr Hànyǔ!' }
    }
  },

  /* ---------- 구역 (stage 1: 밝은 낮 · stage 2: 어두운 밤) ----------
     theme: forest · village · bridge (낮) / dusk · night · cave (밤)                     */
  zones: [
    { id: 'z1', stage: 1, name: '성조와 인사 숲 (1·2차시)', theme: 'forest', missions: [
      { id: 'q1', type: 'numberCode', place: '성조 종', review: '1차시',
        question: '세 소리를 듣고, 성조 번호를 순서대로 눌러요.',
        sets: [ ['ma2','ma4','ma1'], ['ma3','ma1','ma4'], ['ma4','ma2','ma3'] ],
        hint: '한 소리씩 끊어서 들어 보세요. 1성 높고 평평, 2성 올라가고, 3성 내려갔다 올라가고, 4성 뚝 떨어져요.', reward: '성조 배지' },
      { id: 'q2', type: 'choiceText', sound: 'duibuqi', place: '사과 종', review: '2차시',
        scene: '🐼 💥📓 🐰  "对不起!"',
        question: '판다가 토끼 공책을 떨어뜨리고 "对不起!"라고 했어요. 토끼는 뭐라고 대답할까요?',
        options: [ { text: '没关系', sub: 'méi guānxi', sound: 'meiguanxi', correct: true }, { text: '不客气', sub: 'bú kèqi', sound: 'bukeqi' }, { text: '早上好', sub: 'zǎoshang hǎo', sound: 'zaoshanghao' } ],
        hint: '미안하다는 말에는 "괜찮아"라고 대답해요. 不客气는 고맙다는 말에 하는 대답이에요.', reward: '공책' }
    ]},
    { id: 'z2', stage: 1, name: '이름과 나라 마을 (3·4차시)', theme: 'village', missions: [
      { id: 'q3', type: 'wordOrder', place: '이름 종', sound: 'nijiao', review: '3차시',
        question: '"이름이 뭐야?"를 중국어로 만들어요. 조각을 순서대로 눌러요.',
        tiles: ['你', '叫', '什么', '名字'], extra: ['我'], ending: '？',
        hint: '너(你) → 불리다(叫) → 무엇(什么) → 이름(名字) 순서예요.', reward: '이름표' },
      { id: 'q4', type: 'hearPick', sound: 'woshizhongguoren', answer: 'zhongguo', options: ['hanguo', 'zhongguo', 'meiguo', 'riben'], place: '국기 종', review: '4차시',
        question: '탐험가가 자기 나라를 말해요. 어느 나라 사람일까요?',
        hint: '我是 다음, 人 앞에 나오는 나라 이름을 잘 들어 보세요.', reward: '국기 배지' }
    ]},
    { id: 'z3', stage: 1, name: '숫자와 생일 다리 (5·6차시)', theme: 'bridge', missions: [
      { id: 'q5', type: 'choiceText', sound: 'sanshiliu', place: '숫자 종', review: '5차시',
        scene: '🔢 三十六',
        question: '소리를 듣고 알맞은 숫자를 골라요.',
        options: [ { text: '36', correct: true }, { text: '63' }, { text: '16' } ],
        hint: '三十六 = 三(3) + 十(10) + 六(6). 3 × 10 + 6이에요.', reward: '숫자 카드' },
      { id: 'q6', type: 'choiceText', place: '생일 종', review: '6차시',
        scene: '📅 11월 9일 🎂',
        question: '11월 9일을 중국어로 바르게 쓴 것은?',
        options: [ { text: '十一月九号', sub: 'shíyī yuè jiǔ hào', sound: 'd1109', correct: true }, { text: '九月十一号', sub: 'jiǔ yuè shíyī hào', sound: 'd0911' }, { text: '一月十九号', sub: 'yī yuè shíjiǔ hào', sound: 'd0119' } ],
        hint: '중국어도 "월(月)"을 먼저, "일(号)"을 나중에 말해요.', reward: '생일 케이크' }
    ]},
    { id: 'z4', stage: 2, name: '밤의 가족 골목 (7·8차시)', theme: 'dusk', missions: [
      { id: 'q7', type: 'choiceText', sound: 'zheshiwomama', place: '가족 사진 종', review: '8차시',
        scene: '🖼️ 👩‍👧  "이분은 우리 엄마야!"',
        question: '친구에게 가족사진을 보여 줘요. "이 사람은 우리 엄마야"는?',
        options: [ { text: '这是我妈妈。', sub: 'Zhè shì wǒ māma.', sound: 'zheshiwomama', correct: true }, { text: '我是妈妈。', sub: 'Wǒ shì māma.', sound: 'woshimama' }, { text: '我喜欢妈妈。', sub: 'Wǒ xǐhuan māma.', sound: 'woxihuanmama' } ],
        hint: '这是 zhè shì는 "이 사람은 ~이에요", 我妈妈는 "우리 엄마"예요.', reward: '가족사진' }
    ]},
    { id: 'z5', stage: 2, name: '야시장 동굴 (9차시)', theme: 'night', missions: [
      { id: 'q8', type: 'hearPick', sound: 'chi_zhajiangmian', answer: 'zhajiangmian', options: ['jiaozi', 'zhajiangmian', 'tanghulu'], place: '야시장 종', review: '9차시',
        question: '친구가 야시장에서 주문해요. 무엇을 먹고 싶을까요?',
        hint: '我想吃 다음을 잘 들어요. 炸酱面 zhájiàngmiàn은 짜장면이에요.', reward: '등불' }
    ]},
    { id: 'z5b', stage: 2, name: '취향의 별빛 숲 (10차시)', theme: 'dusk', missions: [
      { id: 'q10c', type: 'choiceText', sound: 'nixihuan', place: '취향 종', review: '10차시',
        scene: '🐰 💬 "你喜欢什么？"  🐱',
        question: '토끼가 "你喜欢什么？"라고 물어요. 고양이를 좋아한다고 말하고 토끼에게도 물어보려면?',
        options: [ { text: '我喜欢猫。你呢？', sub: 'Wǒ xǐhuan māo. Nǐ ne?', sound: 'like_mao_nine', correct: true }, { text: '我是猫。你呢？', sub: 'Wǒ shì māo. Nǐ ne?' }, { text: '我想吃饺子。', sub: 'Wǒ xiǎng chī jiǎozi.', sound: 'chi_jiaozi' } ],
        hint: '좋아하는 것은 我喜欢 + 이름, 상대에게 물어볼 때는 你呢？', reward: '고양이 인형' }
    ]},
    { id: 'z6', stage: 2, name: '안부의 어둠 성 (11차시)', theme: 'cave', missions: [
      { id: 'q13', type: 'choiceText', sound: 'zuijin', place: '대답 종', review: '11차시',
        scene: '🐻 💬 "最近怎么样？"',
        question: '곰이 "最近怎么样？"이라고 물어요. 잘 지낸다고 대답하고 곰에게도 물어보려면?',
        options: [ { text: '我很好。你呢？', sub: 'Wǒ hěn hǎo. Nǐ ne?', sound: 'wohenhao_nine', correct: true }, { text: '我是韩国人。', sub: 'Wǒ shì Hánguó rén.', sound: 'woshihanguoren' }, { text: '我想吃饺子。', sub: 'Wǒ xiǎng chī jiǎozi.', sound: 'chi_jiaozi' } ],
        hint: '我很好 = 나는 잘 지내. 你呢？ = 너는?', reward: '우정 팔찌' }
    ]}
  ],

  /* ---------- 보스 (대화가 상황에 어울리면 O, 아니면 X) ---------- */
  bosses: [
    { id: 'boss1', stage: 1, name: '꼬마 대나무 괴물', look: 'bamboo', size: .8,
      intro: '흐흐흐, 나는 꼬마 대나무 괴물! 1~6차시를 잘 기억하고 있다면 내 문제를 풀 수 있을걸? 이기면 작은 문을 열어 주지!',
      notReady: '흥, 아직 울리지 않은 종이 있잖아! 1스테이지의 종을 모두 울리고 다시 와!',
      wrongLine: '흐흐, 틀렸지롱! 다시 생각해 봐!',
      outro: '으앗, 졌다! 약속대로 작은 문을 열어 줄게. 그런데 문 너머에는… 우리 형님이 기다리고 있지! 흐흐!',
      rounds: [
        { scene: '🐰 처음 만난 친구', situation: '토끼가 판다의 이름을 물었어요.', a: 'nijiao', b: 'wojiaoxiaoming', answer: 'O',
          hint: '이름을 물으면 我叫 + 이름으로 대답해요.' },
        { scene: '🎂 생일 파티', situation: '토끼가 판다의 생일을 물었어요.', a: 'nideshengri', b: 'woshizhongguoren', answer: 'X', fix: 'wode0521',
          hint: '생일을 물었는데 나라를 대답했어요.' },
        { scene: '✏️ 연필을 빌려줬어요', situation: '판다가 고맙다고 하자 토끼가 대답했어요.', a: 'xiexie', b: 'meiguanxi', answer: 'X', fix: 'bukeqi',
          hint: '고맙다는 말에는 不客气, 미안하다는 말에는 没关系로 대답해요.' }
      ]},
    { id: 'boss2', stage: 2, name: '거대한 어둠 괴물', look: 'giant', size: 1.45,
      intro: '크하하하! 여기까지 오다니 대단하군! 나는 어둠의 숲의 주인, 거대한 어둠 괴물이다! 7~11차시 문제 세 개를 모두 풀면… 너를 중국어 졸업생으로 인정해 주지!',
      notReady: '크하하! 아직 울리지 않은 종이 있다! 2스테이지의 종을 모두 울리고 오너라!',
      wrongLine: '크하하하! 틀렸다! 다시 해 보거라!',
      outro: '으으… 이렇게 강하다니! 너는 정말 중국어를 할 줄 아는구나. 졸업을 축하한다… 太棒了！',
      rounds: [
        { scene: '💬 좋아하는 것', situation: '곰이 판다에게 무엇을 좋아하는지 물었어요.', a: 'nixihuan', b: 'chi_malatang', answer: 'X', fix: 'woxihuanxiongmao',
          hint: '你喜欢什么？(뭐 좋아해?)에는 我喜欢…로 대답해요. 我想吃는 "먹고 싶어"예요.' },
        { scene: '🏮 야시장', situation: '가게 주인이 판다에게 뭘 먹고 싶은지 물었어요.', a: 'nixiangchi', b: 'chi_jiaozi', answer: 'O',
          hint: '你想吃什么？에는 我想吃 + 음식으로 대답해요.' },
        { scene: '🎒 방학 끝, 개학날', situation: '오랜만에 만난 곰이 안부를 물었어요.', a: 'haojiu_zuijin', b: 'woshihanguoren', answer: 'X', fix: 'haikeyi_nine',
          hint: '요즘 어떠냐고 물었는데 나라를 대답했어요. 还可以。你呢？처럼 대답해요.' }
      ]}
  ],

  /* ---------- 마지막 축하 ---------- */
  finale: {
    line: '我会说一点儿汉语！',
    pinyin: 'Wǒ huì shuō yìdiǎnr Hànyǔ!',
    kr: '워 후이 숴 이뎬얼 한위!',
    ko: '나는 중국어를 조금 말할 수 있어요!',
    cheer: '12번의 수업을 모두 마쳤어요. 太棒了！ 정말 멋져요!'
  },

  nextStage: '12번의 수업 완주! 太棒了！',
  nextStageLine: '1차시 성조부터 11차시 안부 인사까지, 정말 멋지게 해냈어요. 다음에 중국 친구를 만나면 꼭 말해 봐요!',

  runSpeed: 260,
  jumpPower: 690,
  guideAfterSeconds: 12
};
