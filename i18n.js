// Blue Lightning i18n — 多语言支持
// =====================================================

const LANGS = {
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文',
  'en':    'English',
  'ja':    '日本語',
  'ko':    '한국어'
};

const DICT = {

  // ── 导航栏 ────────────────────────────────────
  'nav.reaction':  { 'zh-CN':'反应力测试', 'zh-TW':'反應力測試', 'en':'Reaction Test',   'ja':'反応テスト',       'ko':'반응 속도 테스트' },
  'nav.shooting':  { 'zh-CN':'射击训练',   'zh-TW':'射擊訓練',   'en':'Shooting Trainer', 'ja':'射撃訓練',         'ko':'사격 훈련' },
  'nav.awm':       { 'zh-CN':'狙击手训练',  'zh-TW':'狙擊手訓練',  'en':'Sniper Training',         'ja':'スナイパー訓練',        'ko':'스나이퍼 훈련' },
  'nav.theme':     { 'zh-CN':'切换主题',   'zh-TW':'切換主題',   'en':'Toggle theme',     'ja':'テーマ切替',       'ko':'테마 전환' },

  // ── 首页：反应力测试 ──────────────────────────
  'reaction.title':    { 'zh-CN':'Blue Lightning · 反应力测试', 'zh-TW':'Blue Lightning · 反應力測試', 'en':'Blue Lightning · Reaction Time Test', 'ja':'Blue Lightning · 反応速度テスト',     'ko':'Blue Lightning · 반응 속도 테스트' },
  'reaction.subtitle': { 'zh-CN':'在线测量你的视觉反应速度，每轮 5 次取平均，精准评估你的神经反射能力',
                          'zh-TW':'在線測量你的視覺反應速度，每輪 5 次取平均，精準評估你的神經反射能力',
                          'en':'Measure your visual reaction speed online. 5 trials per round, averaged for accuracy.',
                          'ja':'オンラインで視覚反応速度を測定します。1ラウンド5回の平均値で正確に評価。',
                          'ko':'온라인으로 시각 반응 속도를 측정합니다. 라운드당 5회 테스트로 정확한 평균을 계산합니다.' },
  'reaction.totalRounds':  { 'zh-CN':'总轮数',   'zh-TW':'總輪數',   'en':'Rounds',      'ja':'総ラウンド',   'ko':'총 라운드' },
  'reaction.best':         { 'zh-CN':'历史最佳', 'zh-TW':'歷史最佳', 'en':'Best',         'ja':'自己ベスト',   'ko':'최고 기록' },
  'reaction.avg':          { 'zh-CN':'总平均',   'zh-TW':'總平均',   'en':'Average',      'ja':'平均',         'ko':'평균' },
  'reaction.start':        { 'zh-CN':'点击开始测试', 'zh-TW':'點擊開始測試', 'en':'Click to start', 'ja':'クリックで開始', 'ko':'클릭하여 시작' },
  'reaction.roundHint':    { 'zh-CN':'每轮 5 次测试', 'zh-TW':'每輪 5 次測試', 'en':'5 trials per round', 'ja':'1ラウンド5回', 'ko':'라운드당 5회' },
  'reaction.waiting':      { 'zh-CN':'等待变绿...', 'zh-TW':'等待變綠...', 'en':'Wait for green...', 'ja':'緑になるまで待機...', 'ko':'초록색 대기 중...' },
  'reaction.press':        { 'zh-CN':'按下！',     'zh-TW':'按下！',     'en':'CLICK!',            'ja':'押せ！',             'ko':'클릭!' },
  'reaction.tooEarly':     { 'zh-CN':'太早了！等变绿再点', 'zh-TW':'太早了！等變綠再點', 'en':'Too early! Wait for green', 'ja':'早すぎ！緑を待って', 'ko':'너무 빨라요! 초록색 기다리기' },
  'reaction.retryHint':    { 'zh-CN':'本次重来',   'zh-TW':'本次重來',   'en':'Retry this trial', 'ja':'今回やり直し', 'ko':'이번 회차 재시도' },
  'reaction.newRound':     { 'zh-CN':'点击开始新一轮', 'zh-TW':'點擊開始新一輪', 'en':'Click to start new round', 'ja':'クリックで新ラウンド', 'ko':'새 라운드 시작' },
  'reaction.thisTime':     { 'zh-CN':'本次',       'zh-TW':'本次',       'en':'This trial',       'ja':'今回',         'ko':'이번' },
  'reaction.roundDone':    { 'zh-CN':'本轮完成',   'zh-TW':'本輪完成',   'en':'Round Complete',   'ja':'ラウンド完了', 'ko':'라운드 완료' },
  'reaction.roundAvg':     { 'zh-CN':'本轮平均',   'zh-TW':'本輪平均',   'en':'Round Average',    'ja':'ラウンド平均', 'ko':'라운드 평균' },
  'reaction.ratingLightning': { 'zh-CN':'快如闪电', 'zh-TW':'快如閃電', 'en':'Lightning Fast', 'ja':'電光石火',   'ko':'번개처럼 빠름' },
  'reaction.ratingGood':      { 'zh-CN':'不错',     'zh-TW':'不錯',     'en':'Good',           'ja':'良い',       'ko':'좋음' },
  'reaction.ratingAvg':       { 'zh-CN':'一般',     'zh-TW':'一般',     'en':'Average',        'ja':'普通',       'ko':'보통' },
  'reaction.ratingSlow':      { 'zh-CN':'偏慢',     'zh-TW':'偏慢',     'en':'Slow',           'ja':'遅い',       'ko':'느림' },
  'reaction.info':  { 'zh-CN':'点击方块开始一轮 5 次测试 — 变绿后立即按下<br>绿之前点击视为犯规，该次测试重来',
                       'zh-TW':'點擊方塊開始一輪 5 次測試 — 變綠後立即按下<br>變綠之前點擊視為犯規，該次測試重來',
                       'en':'Click to start a round of 5 trials — click as soon as it turns green<br>Clicking before green counts as a foul, trial will be retried',
                       'ja':'クリックで5回のテスト開始 — 緑になったらすぐに押してください<br>緑になる前に押すと反則、その回はやり直し',
                       'ko':'클릭하여 5회 테스트 시작 — 초록색으로 바뀌면 즉시 클릭<br>초록색 전에 클릭하면 반칙, 해당 회차 재시도' },

  // ── 首页 Section ─────────────────────────────
  'reaction.aboutTitle':  { 'zh-CN':'什么是反应力测试', 'zh-TW':'什麼是反應力測試', 'en':'What is Reaction Time Test', 'ja':'反応速度テストとは', 'ko':'반응 속도 테스트란' },
  'reaction.aboutDesc':   { 'zh-CN':'反应力测试是一种<strong>测量人类反应时间</strong>的在线工具。屏幕颜色随机从红色变为绿色，您需要在看到变化的瞬间立即点击。测试进行 5 轮取平均值，以消除单次偶然误差。反应时间是衡量神经传导速度和大脑信息处理效率的重要指标，广泛应用于电竞训练、驾驶员评估和认知科学研究。',
                             'zh-TW':'反應力測試是一種<strong>測量人類反應時間</strong>的線上工具。螢幕顏色隨機從紅色變為綠色，您需要在看到變化的瞬間立即點擊。測試進行 5 輪取平均值，以消除單次偶然誤差。反應時間是衡量神經傳導速度和大腦資訊處理效率的重要指標，廣泛應用於電競訓練、駕駛員評估和認知科學研究。',
                             'en':'A reaction time test is an online tool that <strong>measures human reaction time</strong>. The screen changes from red to green at random intervals — click the moment you see the change. The test runs 5 trials per round and takes the average to eliminate outliers. Reaction time is a key indicator of neural processing speed and is widely used in esports training, driver assessment, and cognitive research.',
                             'ja':'反応速度テストは<strong>人間の反応時間を測定</strong>するオンラインツールです。画面がランダムなタイミングで赤から緑に変わるので、変化を感知した瞬間にクリックします。5回の平均値を取ることで単発の誤差を排除。反応時間は神経処理速度の重要な指標であり、eスポーツ訓練や運転評価、認知研究に広く活用されています。',
                             'ko':'반응 속도 테스트는 <strong>인간의 반응 시간을 측정</strong>하는 온라인 도구입니다. 화면이 무작위 간격으로 빨간색에서 초록색으로 바뀌면 즉시 클릭하세요. 5회 평균값으로 오차를 제거합니다. 반응 시간은 신경 처리 속도의 핵심 지표로, e스포츠 훈련, 운전자 평가, 인지 과학 연구에 널리 사용됩니다.' },
  'reaction.effectTitle': { 'zh-CN':'训练效果', 'zh-TW':'訓練效果', 'en':'Training Benefits', 'ja':'トレーニング効果', 'ko':'훈련 효과' },
  'reaction.effect1': { 'zh-CN':'缩短视觉到动作的反应延迟', 'zh-TW':'縮短視覺到動作的反應延遲', 'en':'Shorten visual-to-action response delay', 'ja':'視覚から動作への反応遅延を短縮', 'ko':'시각-동작 반응 지연 단축' },
  'reaction.effect2': { 'zh-CN':'提升 FPS 游戏中的对枪反应速度', 'zh-TW':'提升 FPS 遊戲中的對槍反應速度', 'en':'Improve reaction speed in FPS games', 'ja':'FPSゲームでの対戦反応速度を向上', 'ko':'FPS 게임 반응 속도 향상' },
  'reaction.effect3': { 'zh-CN':'改善日常驾驶中的应急反应', 'zh-TW':'改善日常駕駛中的應急反應', 'en':'Improve emergency response in daily driving', 'ja':'日常運転での緊急反応を改善', 'ko':'일상 운전 중 긴급 반응 개선' },
  'reaction.effect4': { 'zh-CN':'延缓年龄增长导致的反应衰退', 'zh-TW':'延緩年齡增長導致的反應衰退', 'en':'Delay age-related reaction decline', 'ja':'加齢による反応速度の低下を遅延', 'ko':'노화로 인한 반응 저하 지연' },
  'reaction.tipsTitle': { 'zh-CN':'提升技巧', 'zh-TW':'提升技巧', 'en':'Tips', 'ja':'上達のコツ', 'ko':'향상 팁' },
  'reaction.tip1': { 'zh-CN':'保持手指轻触鼠标，减少物理延迟', 'zh-TW':'保持手指輕觸滑鼠，減少物理延遲', 'en':'Keep fingers lightly on the mouse to reduce physical delay', 'ja':'指をマウスに軽く置き、物理的遅延を減らす', 'ko':'손가락을 마우스에 가볍게 올려 물리적 지연 감소' },
  'reaction.tip2': { 'zh-CN':'测试前避免咖啡因过量导致手抖', 'zh-TW':'測試前避免咖啡因過量導致手抖', 'en':'Avoid excessive caffeine before testing to prevent hand tremors', 'ja':'テスト前のカフェイン過剰摂取を避ける', 'ko':'테스트 전 과도한 카페인 섭취 피하기' },
  'reaction.tip3': { 'zh-CN':'每天练习 5-10 分钟，贵在坚持', 'zh-TW':'每天練習 5-10 分鐘，貴在堅持', 'en':'Practice 5-10 minutes daily — consistency is key', 'ja':'毎日5-10分の練習、継続が大切', 'ko':'매일 5-10분 연습, 꾸준함이 핵심' },
  'reaction.tip4': { 'zh-CN':'关注平均值而非单次最佳成绩', 'zh-TW':'關注平均值而非單次最佳成績', 'en':'Focus on average scores, not single best results', 'ja':'単発の最高記録より平均値を重視', 'ko':'최고 기록보다 평균에 집중' },
  'reaction.faqTitle': { 'zh-CN':'常见问题', 'zh-TW':'常見問題', 'en':'FAQ', 'ja':'よくある質問', 'ko':'자주 묻는 질문' },
  // FAQ Q&A pairs
  'reaction.faq1q': { 'zh-CN':'多少毫秒算好的反应时间？', 'zh-TW':'多少毫秒算好的反應時間？', 'en':'What is a good reaction time?', 'ja':'良い反応時間は何ミリ秒？', 'ko':'좋은 반응 시간은 몇 ms인가요?' },
  'reaction.faq1a': { 'zh-CN':'普通人的视觉反应时间在 200-250ms 之间。职业 FPS 玩家通常在 150-180ms。低于 150ms 属于优秀水平，低于 120ms 则属于顶尖。', 'zh-TW':'普通人的視覺反應時間在 200-250ms 之間。職業 FPS 玩家通常在 150-180ms。低於 150ms 屬於優秀水平，低於 120ms 則屬於頂尖。', 'en':'Average visual reaction time is 200-250ms. Pro FPS players typically score 150-180ms. Under 150ms is excellent, under 120ms is elite.', 'ja':'一般人の視覚反応時間は200-250ms。プロFPSプレイヤーは150-180ms。150ms未満は優秀、120ms未満はトップクラス。', 'ko':'일반인 시각 반응 시간은 200-250ms. 프로 FPS 선수는 150-180ms. 150ms 미만은 우수, 120ms 미만은 최상위.' },
  'reaction.faq2q': { 'zh-CN':'移动端和电脑端测试有区别吗？', 'zh-TW':'移動端和電腦端測試有區別嗎？', 'en':'Is there a difference between mobile and desktop?', 'ja':'モバイルとPCで違いはありますか？', 'ko':'모바일과 PC 테스트에 차이가 있나요?' },
  'reaction.faq2a': { 'zh-CN':'有。手机触屏的响应延迟通常比鼠标高 20-50ms，且网络延迟也会影响。建议在电脑端使用有线鼠标以获得最准确的结果。', 'zh-TW':'有。手機觸屏的響應延遲通常比滑鼠高 20-50ms，且網路延遲也會影響。建議在電腦端使用有線滑鼠以獲得最準確的結果。', 'en':'Yes. Touchscreen latency is typically 20-50ms higher than a mouse, and network lag also affects results. Use a wired mouse on desktop for the most accurate measurement.', 'ja':'はい。タッチスクリーンの遅延はマウスより20-50ms高く、ネットワーク遅延も影響します。最も正確な結果を得るにはPCで有線マウスを使用してください。', 'ko':'네. 터치스크린 지연이 마우스보다 20-50ms 높고 네트워크 지연도 영향을 줍니다. 가장 정확한 결과는 PC에서 유선 마우스 사용을 권장합니다.' },
  'reaction.faq3q': { 'zh-CN':'反应力可以训练提升吗？', 'zh-TW':'反應力可以訓練提升嗎？', 'en':'Can reaction time be improved with training?', 'ja':'反応速度はトレーニングで向上できますか？', 'ko':'반응 속도는 훈련으로 향상될 수 있나요?' },
  'reaction.faq3a': { 'zh-CN':'可以。通过持续训练可以提升 20-50ms。但每个人的基因上限不同，训练效果存在个体差异。关键在于规律练习而非单次高强度训练。', 'zh-TW':'可以。通過持續訓練可以提升 20-50ms。但每個人的基因上限不同，訓練效果存在個體差異。關鍵在於規律練習而非單次高強度訓練。', 'en':'Yes. Consistent training can improve your time by 20-50ms. However, everyone has a different genetic ceiling. The key is regular practice, not one-off intense sessions.', 'ja':'はい。継続的なトレーニングで20-50ms向上できます。ただし遺伝的上限には個人差があります。重要なのは単発の集中練習ではなく、規則的な練習です。', 'ko':'네. 꾸준한 훈련으로 20-50ms 향상 가능합니다. 다만 유전적 한계는 개인차가 있습니다. 핵심은 일회성이 아닌 규칙적인 연습입니다.' },
  'reaction.faq4q': { 'zh-CN':'为什么有时候我会提前点击？', 'zh-TW':'為什麼有時候我會提前點擊？', 'en':'Why do I sometimes click too early?', 'ja':'早くクリックしてしまうのはなぜ？', 'ko':'왜 가끔 너무 일찍 클릭하게 되나요?' },
  'reaction.faq4a': { 'zh-CN':'这被称为"抢跑"，通常是因为紧张或急于求成。系统会自动检测并标记为犯规，该次测试重新进行。放平心态，专注于颜色变化本身即可。', 'zh-TW':'這被稱為"搶跑"，通常是因為緊張或急於求成。系統會自動檢測並標記為犯規，該次測試重新進行。放平心態，專注於顏色變化本身即可。', 'en':'This is called a "false start," usually caused by nervousness or rushing. The system detects it and marks it as a foul — the trial is retried automatically. Stay calm and focus on the color change.', 'ja':'これは「フライング」と呼ばれ、緊張や焦りが原因です。システムが自動検出して反則扱いとなり、その回はやり直し。落ち着いて色の変化に集中しましょう。', 'ko':'이는 "false start"로, 긴장이나 조바심이 원인입니다. 시스템이 자동 감지하여 반칙 처리하고 재시도합니다. 마음을 편하게 하고 색상 변화에 집중하세요.' },
  'reaction.faq5q': { 'zh-CN':'一天测试多少次合适？', 'zh-TW':'一天測試多少次合適？', 'en':'How many times should I test per day?', 'ja':'1日に何回テストすれば良いですか？', 'ko':'하루에 몇 번 테스트하는 것이 좋나요?' },
  'reaction.faq5a': { 'zh-CN':'建议每天进行 3-5 轮（每轮 5 次），总计 15-25 次测试。过多的重复会让大脑疲劳，反而导致成绩下降，也不利于长期进步。', 'zh-TW':'建議每天進行 3-5 輪（每輪 5 次），總計 15-25 次測試。過多的重複會讓大腦疲勞，反而導致成績下降，也不利於長期進步。', 'en':'We recommend 3-5 rounds per day (5 trials each), totaling 15-25 tests. Too much repetition causes mental fatigue and declining scores — counterproductive for long-term progress.', 'ja':'1日3-5ラウンド（各5回）、合計15-25回のテストを推奨。過度な繰り返しは脳疲労を招き、スコア低下と長期的な進歩の妨げになります。', 'ko':'하루 3-5라운드(각 5회), 총 15-25회 테스트를 권장합니다. 과도한 반복은 정신적 피로를 초래하여 점수 하락과 장기적 발전을 저해합니다.' },

  // ── 你知道吗 ─────────────────────────────────
  'reaction.didYouKnow': { 'zh-CN':'你知道吗', 'zh-TW':'你知道嗎', 'en':'Did You Know', 'ja':'豆知識', 'ko':'알고 계셨나요' },
  'reaction.fact1val': { 'zh-CN':'250ms',  'zh-TW':'250ms',  'en':'250ms',  'ja':'250ms',  'ko':'250ms' },
  'reaction.fact1lbl': { 'zh-CN':'人类平均视觉反应时间', 'zh-TW':'人類平均視覺反應時間', 'en':'Average human visual reaction time', 'ja':'人間の平均視覚反応時間', 'ko':'인간 평균 시각 반응 시간' },
  'reaction.fact2val': { 'zh-CN':'150ms',  'zh-TW':'150ms',  'en':'150ms',  'ja':'150ms',  'ko':'150ms' },
  'reaction.fact2lbl': { 'zh-CN':'职业电竞选手平均水平', 'zh-TW':'職業電競選手平均水平', 'en':'Pro esports player average', 'ja':'プロeスポーツ選手の平均', 'ko':'프로 e스포츠 선수 평균' },
  'reaction.fact3val': { 'zh-CN':'100ms',  'zh-TW':'100ms',  'en':'100ms',  'ja':'100ms',  'ko':'100ms' },
  'reaction.fact3lbl': { 'zh-CN':'人类反应极限（约值）', 'zh-TW':'人類反應極限（約值）', 'en':'Human reaction limit (approx.)', 'ja':'人間の反応限界（約）', 'ko':'인간 반응 한계 (약)' },
  'reaction.fact4val': { 'zh-CN':'50ms',   'zh-TW':'50ms',   'en':'50ms',   'ja':'50ms',   'ko':'50ms' },
  'reaction.fact4lbl': { 'zh-CN':'可通过训练提升的幅度', 'zh-TW':'可通過訓練提升的幅度', 'en':'Improvement possible through training', 'ja':'トレーニングで向上可能な幅', 'ko':'훈련으로 향상 가능한 폭' },

  // ── 相关工具卡片 ─────────────────────────────
  'reaction.rel1Title': { 'zh-CN':'射击训练', 'zh-TW':'射擊訓練', 'en':'Shooting Trainer', 'ja':'射撃訓練', 'ko':'사격 훈련' },
  'reaction.rel1Desc':  { 'zh-CN':'30 秒限时挑战，点击移动目标得分，三种难度可选。测试你的鼠标定位精度和手眼协调能力。', 'zh-TW':'30 秒限時挑戰，點擊移動目標得分，三種難度可選。測試你的滑鼠定位精度和手眼協調能力。', 'en':'30-second timed challenge. Click moving targets to score. Three difficulty levels. Tests mouse accuracy and hand-eye coordination.', 'ja':'30秒の制限時間チャレンジ。動くターゲットをクリックして得点。3段階の難易度。マウス精度と手眼協調をテスト。', 'ko':'30초 제한 도전. 움직이는 표적을 클릭하여 득점. 3단계 난이도. 마우스 정밀도와 손-눈 협응력 테스트.' },
  'reaction.rel2Title': { 'zh-CN':'狙击手训练', 'zh-TW':'狙擊手訓練', 'en':'Sniper Training', 'ja':'スナイパー訓練', 'ko':'스나이퍼 훈련' },
  'reaction.rel2Desc':  { 'zh-CN':'模拟真实狙击场景，三种距离移动靶，子弹飞行有延迟。考验预判能力和定位精度。', 'zh-TW':'模擬真實狙擊場景，三種距離移動靶，子彈飛行有延遲。考驗預判能力和定位精度。', 'en':'Realistic sniper simulation with moving targets at three distances. Bullet travel delay tests prediction and precision.', 'ja':'リアルな狙撃シミュレーション。3距離の移動標的、弾道遅延あり。予測能力と精度が試される。', 'ko':'실제 저격 시뮬레이션. 3가지 거리의 이동 표적, 탄도 지연 있음. 예측 능력과 정밀도 테스트.' },
  'reaction.relCTA':    { 'zh-CN':'开始训练 →', 'zh-TW':'開始訓練 →', 'en':'Start Training →', 'ja':'トレーニング開始 →', 'ko':'훈련 시작 →' },
  'reaction.relCTA2':   { 'zh-CN':'开始测试 →', 'zh-TW':'開始測試 →', 'en':'Start Test →', 'ja':'テスト開始 →', 'ko':'테스트 시작 →' },

  // ── 射击训练页 ──────────────────────────────
  'shooting.title':    { 'zh-CN':'Blue Lightning · 射击训练', 'zh-TW':'Blue Lightning · 射擊訓練', 'en':'Blue Lightning · Shooting Trainer', 'ja':'Blue Lightning · 射撃訓練', 'ko':'Blue Lightning · 사격 훈련' },
  'shooting.subtitle': { 'zh-CN':'30 秒限时挑战，点击移动目标得分，测试你的鼠标定位精度与手眼协调能力',
                          'zh-TW':'30 秒限時挑戰，點擊移動目標得分，測試你的滑鼠定位精度與手眼協調能力',
                          'en':'Timed challenge — click moving targets to score. Test your mouse accuracy and hand-eye coordination.',
                          'ja':'制限時間内に動くターゲットをクリック。マウス精度と手眼協調をテスト。',
                          'ko':'제한 시간 내 움직이는 표적 클릭. 마우스 정밀도와 손-눈 협응력 테스트.' },
  'shooting.score':     { 'zh-CN':'得分',   'zh-TW':'得分',   'en':'Score',    'ja':'スコア',   'ko':'점수' },
  'shooting.time':      { 'zh-CN':'时间',   'zh-TW':'時間',   'en':'Time',     'ja':'時間',     'ko':'시간' },
  'shooting.difficulty':{ 'zh-CN':'难度',   'zh-TW':'難度',   'en':'Difficulty','ja':'難易度',   'ko':'난이도' },
  'shooting.shots':     { 'zh-CN':'射击',   'zh-TW':'射擊',   'en':'Shots',    'ja':'発射',     'ko':'발사' },
  'shooting.accuracy':  { 'zh-CN':'命中率', 'zh-TW':'命中率', 'en':'Accuracy', 'ja':'命中率',   'ko':'명중률' },
  'shooting.avgDev':    { 'zh-CN':'偏离',   'zh-TW':'偏離',   'en':'Deviation','ja':'偏差',     'ko':'편차' },
  'shooting.easy':      { 'zh-CN':'入门',   'zh-TW':'入門',   'en':'Easy',     'ja':'初級',     'ko':'초급' },
  'shooting.medium':    { 'zh-CN':'中等',   'zh-TW':'中等',   'en':'Medium',   'ja':'中級',     'ko':'중급' },
  'shooting.hard':      { 'zh-CN':'困难',   'zh-TW':'困難',   'en':'Hard',     'ja':'上級',     'ko':'고급' },
  'shooting.durLabel':  { 'zh-CN':'选择时长', 'zh-TW':'選擇時長', 'en':'Duration', 'ja':'時間選択', 'ko':'시간 선택' },
  'shooting.startGame': { 'zh-CN':'开始游戏', 'zh-TW':'開始遊戲', 'en':'Start Game', 'ja':'ゲーム開始', 'ko':'게임 시작' },
  'shooting.retry':     { 'zh-CN':'再来一局', 'zh-TW':'再來一局', 'en':'Play Again', 'ja':'もう一度', 'ko':'다시 하기' },
  'shooting.overlayTitle': { 'zh-CN':'射击训练', 'zh-TW':'射擊訓練', 'en':'Shooting Trainer', 'ja':'射撃訓練', 'ko':'사격 훈련' },
  'shooting.overlaySub':  { 'zh-CN':'点击移动的小球来得分<br>30秒内尽可能多地命中目标', 'zh-TW':'點擊移動的小球來得分<br>30秒內盡可能多地命中目標', 'en':'Click moving balls to score<br>Hit as many targets as possible in 30s', 'ja':'動くボールをクリックして得点<br>30秒でできるだけ多く命中させよう', 'ko':'움직이는 공을 클릭하여 득점<br>30초 동안 최대한 많이 맞추기' },
  'shooting.selectDiff':  { 'zh-CN':'选择难度', 'zh-TW':'選擇難度', 'en':'Select Difficulty', 'ja':'難易度選択', 'ko':'난이도 선택' },
  'shooting.info':    { 'zh-CN':'点击移动小球命中得分 — 小球消失后会自动补充新目标<br>30秒倒计时结束统计你的总命中数', 'zh-TW':'點擊移動小球命中得分 — 小球消失後會自動補充新目標<br>30秒倒計時結束統計你的總命中數', 'en':'Click moving balls to score — new targets spawn automatically<br>Final score is counted when the 30-second timer ends', 'ja':'動くボールをクリックして得点 — 消えると新しい標的が自動出現<br>30秒のタイマー終了時に総命中数を集計', 'ko':'움직이는 공 클릭하여 득점 — 사라지면 새 표적 자동 생성<br>30초 타이머 종료 시 총 명중 수 집계' },
  // grades
  'shooting.gradeS': { 'zh-CN':'S 级 — 神枪手', 'zh-TW':'S 級 — 神槍手', 'en':'S Rank — Sharpshooter', 'ja':'S級 — 名射手', 'ko':'S 등급 — 명사수' },
  'shooting.gradeA': { 'zh-CN':'A 级 — 精准射手', 'zh-TW':'A 級 — 精準射手', 'en':'A Rank — Marksman', 'ja':'A級 — 射手', 'ko':'A 등급 — 정확한 사수' },
  'shooting.gradeB': { 'zh-CN':'B 级 — 合格', 'zh-TW':'B 級 — 合格', 'en':'B Rank — Pass', 'ja':'B級 — 合格', 'ko':'B 등급 — 합격' },
  'shooting.gradeC': { 'zh-CN':'C 级 — 继续努力', 'zh-TW':'C 級 — 繼續努力', 'en':'C Rank — Keep Practicing', 'ja':'C級 — 練習を続けよう', 'ko':'C 등급 — 계속 연습' },

  // ── 射击训练 Section ────────────────────────
  'shooting.aboutTitle': { 'zh-CN':'什么是射击训练', 'zh-TW':'什麼是射擊訓練', 'en':'What is Shooting Trainer', 'ja':'射撃訓練とは', 'ko':'사격 훈련이란' },
  'shooting.aboutDesc':  { 'zh-CN':'射击训练是一款<strong>在线定位能力测试工具</strong>，模拟 FPS 游戏中的射击场景。画面中有多个持续移动的小球，您需要在限时内尽可能多地点击命中。每次命中后小球消失并自动补充新目标。系统会记录命中率、平均偏离距离等数据，全面评估您的<strong>鼠标定位精度和手眼协调能力</strong>。',
                            'zh-TW':'射擊訓練是一款<strong>線上定位能力測試工具</strong>，模擬 FPS 遊戲中的射擊場景。畫面中有多個持續移動的小球，您需要在限時內盡可能多地點擊命中。每次命中後小球消失並自動補充新目標。系統會記錄命中率、平均偏離距離等數據，全面評估您的<strong>滑鼠定位精度和手眼協調能力</strong>。',
                            'en':'Shooting Trainer is an <strong>online aiming test tool</strong> that simulates FPS shooting scenarios. Multiple moving balls are on screen — click as many as you can within the time limit. Each hit makes the ball disappear and a new one spawns. The system tracks accuracy, average deviation, and more to evaluate your <strong>mouse precision and hand-eye coordination</strong>.',
                            'ja':'射撃訓練はFPSゲームの射撃シーンを模した<strong>オンライン照準テストツール</strong>です。画面上に複数の動くボールがあり、制限時間内にできるだけ多くクリック命中させます。命中するとボールが消え新しい標的が出現。命中率や平均偏差などのデータから<strong>マウス精度と手眼協調能力</strong>を総合評価します。',
                            'ko':'사격 훈련은 FPS 게임 사격 장면을 시뮬레이션하는 <strong>온라인 조준 테스트 도구</strong>입니다. 여러 개의 움직이는 공이 화면에 있고 제한 시간 내에 최대한 많이 클릭하여 맞춥니다. 명중 시 공이 사라지고 새 표적이 생성됩니다. 명중률, 평균 편차 등의 데이터로 <strong>마우스 정밀도와 손-눈 협응력</strong>을 평가합니다.' },
  'shooting.effectTitle': { 'zh-CN':'训练效果', 'zh-TW':'訓練效果', 'en':'Training Benefits', 'ja':'トレーニング効果', 'ko':'훈련 효과' },
  'shooting.effect1': { 'zh-CN':'提升鼠标快速定位的肌肉记忆', 'zh-TW':'提升滑鼠快速定位的肌肉記憶', 'en':'Build muscle memory for fast mouse positioning', 'ja':'高速マウス操作のマッスルメモリーを構築', 'ko':'빠른 마우스 위치 조정 근육 기억 향상' },
  'shooting.effect2': { 'zh-CN':'改善 FPS 游戏中的甩枪精准度', 'zh-TW':'改善 FPS 遊戲中的甩槍精準度', 'en':'Improve flick shot accuracy in FPS games', 'ja':'FPSゲームでのフリックショット精度を向上', 'ko':'FPS 게임 플릭 샷 정확도 향상' },
  'shooting.effect3': { 'zh-CN':'增强移动目标的追踪能力', 'zh-TW':'增強移動目標的追蹤能力', 'en':'Enhance moving target tracking ability', 'ja':'移動標的の追跡能力を強化', 'ko':'이동 표적 추적 능력 강화' },
  'shooting.effect4': { 'zh-CN':'降低无效点击率，提高命中率', 'zh-TW':'降低無效點擊率，提高命中率', 'en':'Reduce wasted clicks and improve hit rate', 'ja':'無駄なクリックを減らし命中率を向上', 'ko':'불필요한 클릭 감소 및 명중률 향상' },
  'shooting.tipsTitle': { 'zh-CN':'提升技巧', 'zh-TW':'提升技巧', 'en':'Tips', 'ja':'上達のコツ', 'ko':'향상 팁' },
  'shooting.tip1': { 'zh-CN':'优先保证命中率，再追求速度', 'zh-TW':'優先保證命中率，再追求速度', 'en':'Prioritize accuracy over speed', 'ja':'速度より命中率を優先', 'ko':'속도보다 명중률 우선' },
  'shooting.tip2': { 'zh-CN':'从入门难度开始，逐步挑战更高速度', 'zh-TW':'從入門難度開始，逐步挑戰更高速度', 'en':'Start easy and gradually increase difficulty', 'ja':'初級から始めて徐々に難易度アップ', 'ko':'초급부터 시작하여 점진적으로 난이도 상승' },
  'shooting.tip3': { 'zh-CN':'关注"平均偏离"数据，缩小点击误差', 'zh-TW':'關注"平均偏離"數據，縮小點擊誤差', 'en':'Watch average deviation to reduce click error', 'ja':'平均偏差に注目してクリック誤差を縮小', 'ko':'평균 편차를 확인하여 클릭 오차 축소' },
  'shooting.tip4': { 'zh-CN':'每天练习 10-15 分钟效果最佳', 'zh-TW':'每天練習 10-15 分鐘效果最佳', 'en':'Practice 10-15 minutes daily for best results', 'ja':'毎日10-15分の練習が最も効果的', 'ko':'매일 10-15분 연습이 가장 효과적' },
  'shooting.faqTitle': { 'zh-CN':'常见问题', 'zh-TW':'常見問題', 'en':'FAQ', 'ja':'よくある質問', 'ko':'자주 묻는 질문' },
  'shooting.faq1q': { 'zh-CN':'三个难度有什么区别？', 'zh-TW':'三個難度有什麼區別？', 'en':'What is the difference between difficulties?', 'ja':'難易度の違いは何ですか？', 'ko':'난이도 차이는 무엇인가요?' },
  'shooting.faq1a': { 'zh-CN':'入门难度小球移动速度为 1，中等为 2 倍速，困难为 3 倍速。建议从入门开始，命中率达到 80% 以上再升级。', 'zh-TW':'入門難度小球移動速度為 1，中等為 2 倍速，困難為 3 倍速。建議從入門開始，命中率達到 80% 以上再升級。', 'en':'Easy = speed 1, Medium = 2x speed, Hard = 3x speed. Start with Easy and move up once your hit rate exceeds 80%.', 'ja':'初級は速度1、中級は2倍速、上級は3倍速。命中率80%以上になったら次の難易度に進みましょう。', 'ko':'초급=속도1, 중급=2배속, 고급=3배속. 명중률 80% 이상 달성 후 다음 난이도로 진행하세요.' },
  'shooting.faq2q': { 'zh-CN':'"平均偏离"是什么意思？', 'zh-TW':'"平均偏離"是什麼意思？', 'en':'What does "Average Deviation" mean?', 'ja':'「平均偏差」とは何ですか？', 'ko':'"평균 편차"는 무엇을 의미하나요?' },
  'shooting.faq2a': { 'zh-CN':'平均偏离是您每次命中点击位置距离小球圆心的平均像素距离。数值越小说明定位越精准，理想值为 0-5px。', 'zh-TW':'平均偏離是您每次命中點擊位置距離小球圓心的平均像素距離。數值越小說明定位越精準，理想值為 0-5px。', 'en':'Average deviation is the mean pixel distance between your click and the ball center. Lower is better — aim for 0-5px.', 'ja':'平均偏差はクリック位置とボール中心との平均ピクセル距離です。小さいほど精密、理想は0-5px。', 'ko':'평균 편차는 클릭 위치와 공 중심 간의 평균 픽셀 거리입니다. 낮을수록 정밀하며 0-5px가 이상적입니다.' },
  'shooting.faq3q': { 'zh-CN':'如何选择适合自己的时长？', 'zh-TW':'如何選擇適合自己的時長？', 'en':'Which duration should I choose?', 'ja':'どの時間を選べばいいですか？', 'ko':'어떤 시간을 선택해야 하나요?' },
  'shooting.faq3a': { 'zh-CN':'新手建议 10s 短局快速上手，日常训练推荐 30s 标准局，挑战极限可选 60s 长局考验耐力和稳定性。', 'zh-TW':'新手建議 10s 短局快速上手，日常訓練推薦 30s 標準局，挑戰極限可選 60s 長局考驗耐力和穩定性。', 'en':'Beginners: 10s for quick practice. Daily: 30s standard. Challenge: 60s to test endurance and consistency.', 'ja':'初心者は10秒で手軽に。日常訓練は30秒標準。限界挑戦は60秒で持久力と安定性をテスト。', 'ko':'초보자: 10초 빠른 연습. 일일: 30초 표준. 도전: 60초 지구력과 일관성 테스트.' },
  'shooting.faq4q': { 'zh-CN':'命中率多少才算好？', 'zh-TW':'命中率多少才算好？', 'en':'What is a good hit rate?', 'ja':'良い命中率はどのくらい？', 'ko':'좋은 명중률은 얼마인가요?' },
  'shooting.faq4a': { 'zh-CN':'入门难度 80% 以上为合格，90% 以上为优秀。中等难度 70% 以上算不错，困难难度能达到 60% 已是高手水平。', 'zh-TW':'入門難度 80% 以上為合格，90% 以上為優秀。中等難度 70% 以上算不錯，困難難度能達到 60% 已是高手水平。', 'en':'Easy: 80%+ is good, 90%+ is excellent. Medium: 70%+ is solid. Hard: 60%+ is pro level.', 'ja':'初級：80%以上で合格、90%以上で優秀。中級：70%以上で良好。上級：60%以上でプロ級。', 'ko':'초급: 80%+ 합격, 90%+ 우수. 중급: 70%+ 양호. 고급: 60%+ 프로 수준.' },
  'shooting.faq5q': { 'zh-CN':'为什么我的命中率忽高忽低？', 'zh-TW':'為什麼我的命中率忽高忽低？', 'en':'Why does my hit rate fluctuate?', 'ja':'命中率が安定しないのはなぜ？', 'ko':'왜 명중률이 오르락내리락하나요?' },
  'shooting.faq5a': { 'zh-CN':'这很正常。手感、疲劳度、心态都会影响表现。建议关注长期趋势而非单局成绩，坚持一周后看整体进步。', 'zh-TW':'這很正常。手感、疲勞度、心態都會影響表現。建議關注長期趨勢而非單局成績，堅持一週後看整體進步。', 'en':'That is normal. Feel, fatigue, and mindset all affect performance. Focus on long-term trends — check improvement after a week.', 'ja':'それは正常です。感覚、疲労、メンタルは全て影響します。単発のスコアより長期的な傾向を見ましょう。1週間後の進歩を確認してください。', 'ko':'정상입니다. 컨디션, 피로도, 마음가짐이 모두 영향줍니다. 일회성 점수보다 장기 추세를 보세요. 일주일 후 진전을 확인하세요.' },

  // ── 射击训练 你知道吗 ───────────────────────
  'shooting.fact1val': { 'zh-CN':'55+',  'zh-TW':'55+',  'en':'55+',  'ja':'55+',  'ko':'55+' },
  'shooting.fact1lbl': { 'zh-CN':'入门难度 S 级分数线', 'zh-TW':'入門難度 S 級分數線', 'en':'S-Rank threshold (Easy)', 'ja':'初級Sランク基準', 'ko':'초급 S등급 기준' },
  'shooting.fact2val': { 'zh-CN':'3 倍',  'zh-TW':'3 倍',  'en':'3x',   'ja':'3倍',   'ko':'3배' },
  'shooting.fact2lbl': { 'zh-CN':'困难难度小球移动速度', 'zh-TW':'困難難度小球移動速度', 'en':'Hard mode ball speed', 'ja':'上級モードのボール速度', 'ko':'고급 모드 공 속도' },
  'shooting.fact3val': { 'zh-CN':'5 个',  'zh-TW':'5 個',  'en':'5',    'ja':'5個',   'ko':'5개' },
  'shooting.fact3lbl': { 'zh-CN':'同时在场上的小球数量', 'zh-TW':'同時在場上的小球數量', 'en':'Balls on screen at once', 'ja':'同時に画面に表示されるボール', 'ko':'동시 화면 공 개수' },
  'shooting.fact4val': { 'zh-CN':'60s',   'zh-TW':'60s',   'en':'60s',  'ja':'60秒',  'ko':'60초' },
  'shooting.fact4lbl': { 'zh-CN':'最长挑战时间', 'zh-TW':'最長挑戰時間', 'en':'Max challenge duration', 'ja':'最大チャレンジ時間', 'ko':'최대 도전 시간' },

  // ── 射击训练 最近记录 ───────────────────────
  'shooting.historyTitle': { 'zh-CN':'最近记录', 'zh-TW':'最近記錄', 'en':'Recent Records', 'ja':'最近の記録', 'ko':'최근 기록' },

  // ── 射击训练 相关工具 ───────────────────────
  'shooting.rel1Title': { 'zh-CN':'反应力测试', 'zh-TW':'反應力測試', 'en':'Reaction Time Test', 'ja':'反応速度テスト', 'ko':'반응 속도 테스트' },
  'shooting.rel1Desc':  { 'zh-CN':'在线测量视觉反应速度，每轮 5 次取平均。精准评估神经反射能力，最低可达 100ms 以内。', 'zh-TW':'在線測量視覺反應速度，每輪 5 次取平均。精準評估神經反射能力，最低可達 100ms 以內。', 'en':'Measure visual reaction speed online. 5 trials per round. Accurate neural reflex assessment, as low as 100ms.', 'ja':'オンラインで視覚反応速度を測定。1ラウンド5回。100ms以下の精密な神経反射評価。', 'ko':'시각 반응 속도 온라인 측정. 라운드당 5회. 100ms 이하 정밀 신경 반사 평가.' },
  'shooting.rel2Title': { 'zh-CN':'狙击手训练', 'zh-TW':'狙擊手訓練', 'en':'Sniper Training', 'ja':'スナイパー訓練', 'ko':'스나이퍼 훈련' },
  'shooting.rel2Desc':  { 'zh-CN':'模拟真实狙击场景，三种距离移动靶。子弹飞行有延迟，考验预判和定位精度。', 'zh-TW':'模擬真實狙擊場景，三種距離移動靶。子彈飛行有延遲，考驗預判和定位精度。', 'en':'Realistic sniper simulation with 3-distance moving targets. Bullet delay tests prediction and precision.', 'ja':'リアルな狙撃シミュレーション。3距離の移動標的。弾道遅延が予測と精度を試す。', 'ko':'실제 저격 시뮬레이션. 3가지 거리 이동 표적. 탄도 지연으로 예측과 정밀도 테스트.' },

  // ── AWM王 页 ──────────────────────────────────
  'awm.title':    { 'zh-CN':'Blue Lightning · 狙击手训练', 'zh-TW':'Blue Lightning · 狙擊手訓練', 'en':'Blue Lightning · Sniper Training', 'ja':'Blue Lightning · スナイパー訓練', 'ko':'Blue Lightning · 스나이퍼 훈련' },
  'awm.subtitle': { 'zh-CN':'模拟真实狙击场景，三种距离移动靶，子弹飞行延迟，考验预判与定位精度',
                     'zh-TW':'模擬真實狙擊場景，三種距離移動靶，子彈飛行延遲，考驗預判與定位精度',
                     'en':'Realistic sniper simulation. Moving targets at three distances. Bullet travel delay tests your prediction and precision.',
                     'ja':'リアルな狙撃シミュレーション。3距離の移動標的。弾道遅延が予測能力と精度を試す。',
                     'ko':'실제 저격 시뮬레이션. 3가지 거리 이동 표적. 탄도 지연으로 예측 능력과 정밀도를 테스트합니다.' },
  'awm.hits':       { 'zh-CN':'命中',   'zh-TW':'命中',   'en':'Hits',      'ja':'命中',       'ko':'명중' },
  'awm.shots':      { 'zh-CN':'射击',   'zh-TW':'射擊',   'en':'Shots',     'ja':'発射',       'ko':'발사' },
  'awm.accuracy':   { 'zh-CN':'精度',   'zh-TW':'精度',   'en':'Accuracy',  'ja':'精度',       'ko':'정확도' },
  'awm.distance':   { 'zh-CN':'距离',   'zh-TW':'距離',   'en':'Distance',  'ja':'距離',       'ko':'거리' },
  'awm.difficulty': { 'zh-CN':'难度',   'zh-TW':'難度',   'en':'Difficulty','ja':'難易度',     'ko':'난이도' },
  'awm.time':       { 'zh-CN':'时间',   'zh-TW':'時間',   'en':'Time',      'ja':'時間',       'ko':'시간' },
  'awm.sensitivity':{ 'zh-CN':'灵敏度', 'zh-TW':'靈敏度', 'en':'Sensitivity','ja':'感度',       'ko':'감도' },
  'awm.slow':       { 'zh-CN':'慢',     'zh-TW':'慢',     'en':'Slow',      'ja':'遅い',       'ko':'느리게' },
  'awm.medium':     { 'zh-CN':'中',     'zh-TW':'中',     'en':'Medium',    'ja':'中',         'ko':'보통' },
  'awm.fast':       { 'zh-CN':'快',     'zh-TW':'快',     'en':'Fast',      'ja':'速い',       'ko':'빠르게' },
  'awm.easy':       { 'zh-CN':'入门',   'zh-TW':'入門',   'en':'Easy',      'ja':'初級',       'ko':'초급' },
  'awm.normal':     { 'zh-CN':'普通',   'zh-TW':'普通',   'en':'Normal',    'ja':'普通',       'ko':'보통' },
  'awm.hard':       { 'zh-CN':'困难',   'zh-TW':'困難',   'en':'Hard',      'ja':'上級',       'ko':'고급' },
  'awm.challenge':  { 'zh-CN':'挑战模式', 'zh-TW':'挑戰模式', 'en':'Challenge', 'ja':'チャレンジ', 'ko':'챌린지 모드' },
  'awm.endless':    { 'zh-CN':'无尽模式', 'zh-TW':'無盡模式', 'en':'Endless',   'ja':'エンドレス', 'ko':'무한 모드' },
  'awm.startGame':  { 'zh-CN':'开始游戏', 'zh-TW':'開始遊戲', 'en':'Start Game', 'ja':'ゲーム開始', 'ko':'게임 시작' },
  'awm.retry':      { 'zh-CN':'再来一局', 'zh-TW':'再來一局', 'en':'Play Again', 'ja':'もう一度',   'ko':'다시 하기' },
  'awm.selectDiff': { 'zh-CN':'选择难度', 'zh-TW':'選擇難度', 'en':'Select Difficulty', 'ja':'難易度選択', 'ko':'난이도 선택' },
  'awm.selectMode': { 'zh-CN':'选择模式', 'zh-TW':'選擇模式', 'en':'Select Mode', 'ja':'モード選択', 'ko':'모드 선택' },
  'awm.overlayTitle': { 'zh-CN':'狙击手训练', 'zh-TW':'狙擊手訓練', 'en':'Sniper Training', 'ja':'スナイパー訓練', 'ko':'스나이퍼 훈련' },
  'awm.overlaySub':   { 'zh-CN':'移动鼠标平移镜头寻找目标<br>十字准心对准假人点击射击', 'zh-TW':'移動滑鼠平移鏡頭尋找目標<br>十字準心對準假人點擊射擊', 'en':'Move mouse to pan scope and find targets<br>Aim crosshair at dummy and click to shoot', 'ja':'マウスを動かしてスコープを操作<br>十字線を標的に合わせてクリック射撃', 'ko':'마우스를 움직여 스코프 조작<br>십자선을 표적에 맞추고 클릭 사격' },
  'awm.reloading':   { 'zh-CN':'装弹中', 'zh-TW':'裝彈中', 'en':'Reloading', 'ja':'装填中', 'ko':'장전 중' },
  'awm.info': { 'zh-CN':'点击画布锁定鼠标 — 移动鼠标平移镜头寻找目标<br>十字准心对准假人点击射击 | 每次射击后需等待 1 秒装弹<br>按 Esc 解锁鼠标 | 三种距离随机刷新: 80 米 / 140 米 / 200 米',
                 'zh-TW':'點擊畫布鎖定滑鼠 — 移動滑鼠平移鏡頭尋找目標<br>十字準心對準假人點擊射擊 | 每次射擊後需等待 1 秒裝彈<br>按 Esc 解鎖滑鼠 | 三種距離隨機刷新: 80 米 / 140 米 / 200 米',
                 'en':'Click canvas to lock mouse — move to pan scope and find targets<br>Aim crosshair at dummy and shoot | 1-second reload after each shot<br>Press Esc to unlock mouse | Targets spawn at random: 80m / 140m / 200m',
                 'ja':'キャンバスをクリックしてマウスをロック — マウスでスコープを操作し標的を探す<br>十字線を標的に合わせて射撃 | 射撃後1秒の装填時間<br>Escでマウスロック解除 | 標的はランダム出現: 80m / 140m / 200m',
                 'ko':'캔버스 클릭으로 마우스 잠금 — 마우스로 스코프 조작하여 표적 탐색<br>십자선을 표적에 맞추고 사격 | 사격 후 1초 장전<br>Esc로 마우스 잠금 해제 | 표적 랜덤 출현: 80m / 140m / 200m' },

  // ── AWM Section ─────────────────────────────
  'awm.aboutTitle': { 'zh-CN':'什么是狙击训练', 'zh-TW':'什麼是狙擊訓練', 'en':'What is Sniper Training', 'ja':'狙撃訓練とは', 'ko':'저격 훈련이란' },
  'awm.aboutDesc':  { 'zh-CN':'狙击手训练是一款<strong>在线狙击模拟训练工具</strong>，还原真实狙击场景中的开镜、瞄准、预判全过程。通过模拟瞄准镜视野，玩家需要移动镜头搜索目标并在三种距离（80 米 / 140 米 / 200 米）的移动靶上精准射击。子弹带有飞行延迟，逼真还原远距离狙击的<strong>提前量预判</strong>体验。',
                       'zh-TW':'狙擊手訓練是一款<strong>線上狙擊模擬訓練工具</strong>，還原真實狙擊場景中的開鏡、瞄準、預判全過程。通過模擬瞄準鏡視野，玩家需要移動鏡頭搜索目標並在三種距離（80 米 / 140 米 / 200 米）的移動靶上精準射擊。子彈帶有飛行延遲，逼真還原遠距離狙擊的<strong>提前量預判</strong>體驗。',
                       'en':'Sniper Training is an <strong>online sniper simulation tool</strong> that recreates the full sniping experience — scoping, aiming, and prediction. Through a simulated scope view, you pan the camera to find targets and shoot moving dummies at three distances (80m / 140m / 200m). Bullet travel delay adds realistic <strong>lead prediction</strong> challenge.',
                       'ja':'スナイパー訓練は<strong>オンライン狙撃シミュレーションツール</strong>で、スコープ操作、照準、予測の全プロセスを再現。スコープ視野を通してカメラを操作し、3距離（80m/140m/200m）の移動標的を精密射撃。弾道遅延がリアルな<strong>偏差射撃</strong>体験を提供します。',
                       'ko':'스나이퍼 훈련은 <strong>온라인 저격 시뮬레이션 도구</strong>로 스코프 조작, 조준, 예측의 전 과정을 재현합니다. 시뮬레이션된 스코프 시야를 통해 카메라를 움직여 3가지 거리(80m/140m/200m)의 이동 표적을 정밀 사격합니다. 탄도 지연이 실제와 같은 <strong>리드 예측</strong> 도전을 제공합니다.' },
  'awm.effectTitle': { 'zh-CN':'训练效果', 'zh-TW':'訓練效果', 'en':'Training Benefits', 'ja':'トレーニング効果', 'ko':'훈련 효과' },
  'awm.effect1': { 'zh-CN':'提升远距离目标预判能力', 'zh-TW':'提升遠距離目標預判能力', 'en':'Improve long-range target prediction', 'ja':'遠距離標的の予測能力を向上', 'ko':'장거리 표적 예측 능력 향상' },
  'awm.effect2': { 'zh-CN':'改善镜头移动与追踪的平滑度', 'zh-TW':'改善鏡頭移動與追蹤的平滑度', 'en':'Improve scope panning and tracking smoothness', 'ja':'スコープ操作と追跡の滑らかさを改善', 'ko':'스코프 이동 및 추적 부드러움 개선' },
  'awm.effect3': { 'zh-CN':'增强不同距离下的缩放定位感', 'zh-TW':'增強不同距離下的縮放定位感', 'en':'Enhance zoom-aiming feel at different ranges', 'ja':'距離に応じたズーム照準感覚を強化', 'ko':'다양한 거리에서 줌 조준 감각 강화' },
  'awm.effect4': { 'zh-CN':'培养狙击手的心态与耐性', 'zh-TW':'培養狙擊手的心態與耐性', 'en':'Build sniper mindset and patience', 'ja':'狙撃手のメンタルと忍耐力を養成', 'ko':'저격수의 마음가짐과 인내심 함양' },
  'awm.tipsTitle': { 'zh-CN':'提升技巧', 'zh-TW':'提升技巧', 'en':'Tips', 'ja':'上達のコツ', 'ko':'향상 팁' },
  'awm.tip1': { 'zh-CN':'根据目标移动方向提前瞄准前方位置', 'zh-TW':'根據目標移動方向提前瞄準前方位置', 'en':'Aim ahead of the target based on its movement direction', 'ja':'標的の移動方向に合わせて前方を照準', 'ko':'표적 이동 방향에 따라 앞쪽 조준' },
  'awm.tip2': { 'zh-CN':'远距离子弹飞行更慢，需要更大的提前量', 'zh-TW':'遠距離子彈飛行更慢，需要更大的提前量', 'en':'Longer distances mean slower bullet travel — lead more', 'ja':'遠距離ほど弾道が遅いので大きめにリード', 'ko':'장거리일수록 탄도가 느리므로 더 앞서 조준' },
  'awm.tip3': { 'zh-CN':'调节灵敏度找到最适合自己的镜头速度', 'zh-TW':'調節靈敏度找到最適合自己的鏡頭速度', 'en':'Adjust sensitivity to find your ideal scope speed', 'ja':'感度を調整して最適なスコープ速度を見つける', 'ko':'감도를 조정하여 최적의 스코프 속도 찾기' },
  'awm.tip4': { 'zh-CN':'挑战模式下注意时间管理，优先射击近距目标', 'zh-TW':'挑戰模式下注意時間管理，優先射擊近距目標', 'en':'In Challenge mode manage time — prioritize closer targets', 'ja':'チャレンジモードでは時間管理が重要、近距離を優先', 'ko':'챌린지 모드에서는 시간 관리 — 가까운 표적 우선' },
  'awm.faqTitle': { 'zh-CN':'常见问题', 'zh-TW':'常見問題', 'en':'FAQ', 'ja':'よくある質問', 'ko':'자주 묻는 질문' },
  'awm.faq1q': { 'zh-CN':'子弹飞行延迟是多少？', 'zh-TW':'子彈飛行延遲是多少？', 'en':'What is the bullet travel delay?', 'ja':'弾道遅延はどのくらいですか？', 'ko':'탄도 지연은 얼마인가요?' },
  'awm.faq1a': { 'zh-CN':'80 米延迟 100ms，140 米延迟 200ms，200 米延迟 300ms。这意味着你必须预判目标位置，瞄准目标前方开枪才能命中。', 'zh-TW':'80 米延遲 100ms，140 米延遲 200ms，200 米延遲 300ms。這意味著你必須預判目標位置，瞄準目標前方開槍才能命中。', 'en':'80m = 100ms delay, 140m = 200ms, 200m = 300ms. You must predict the target position and aim ahead to hit.', 'ja':'80m=100ms、140m=200ms、200m=300msの遅延。標的の位置を予測し前方を狙う必要があります。', 'ko':'80m=100ms, 140m=200ms, 200m=300ms 지연. 표적 위치를 예측하고 앞쪽을 조준해야 명중합니다.' },
  'awm.faq2q': { 'zh-CN':'换弹时间为什么是 1 秒？', 'zh-TW':'換彈時間為什麼是 1 秒？', 'en':'Why is reload time 1 second?', 'ja':'装填時間はなぜ1秒ですか？', 'ko':'장전 시간이 왜 1초인가요?' },
  'awm.faq2a': { 'zh-CN':'1 秒换弹模拟真实狙击步枪的拉栓动作。换弹期间镜头会上下跳动，模拟后坐力。你需要等换弹完成后才能再次射击。', 'zh-TW':'1 秒換彈模擬真實狙擊步槍的拉栓動作。換彈期間鏡頭會上下跳動，模擬後座力。你需要等換彈完成後才能再次射擊。', 'en':'The 1-second reload simulates bolt-action cycling on a real sniper rifle. The scope kicks during reload to simulate recoil. Wait until reloading finishes to shoot again.', 'ja':'1秒の装填は実在のボルトアクション狙撃銃を模しています。装填中はスコープが跳ね上がり反動を表現。装填完了まで次の射撃はできません。', 'ko':'1초 장전은 실제 볼트액션 저격소총을 시뮬레이션합니다. 장전 중 스코프가 반동으로 튀어오릅니다. 장전 완료 후 다시 사격 가능합니다.' },
  'awm.faq3q': { 'zh-CN':'挑战模式和无尽模式有什么区别？', 'zh-TW':'挑戰模式和無盡模式有什麼區別？', 'en':'What is the difference between Challenge and Endless mode?', 'ja':'チャレンジとエンドレスの違いは？', 'ko':'챌린지와 무한 모드의 차이는?' },
  'awm.faq3a': { 'zh-CN':'挑战模式限时 40 秒，结束后有评级评分（S/A/B/C）；无尽模式没有时间限制，适合自由练习和热身。', 'zh-TW':'挑戰模式限時 40 秒，結束後有評級評分（S/A/B/C）；無盡模式沒有限時，適合自由練習和熱身。', 'en':'Challenge mode is 40 seconds timed with a rank rating (S/A/B/C). Endless mode has no time limit — great for practice and warm-up.', 'ja':'チャレンジモードは40秒制限でランク評価（S/A/B/C）あり。エンドレスモードは時間無制限で練習やウォームアップに最適。', 'ko':'챌린지 모드는 40초 제한에 등급 평가(S/A/B/C). 무한 모드는 시간 제한 없이 자유 연습과 워밍업에 적합.' },
  'awm.faq4q': { 'zh-CN':'灵敏度调到多少最合适？', 'zh-TW':'靈敏度調到多少最合適？', 'en':'What sensitivity setting is best?', 'ja':'感度はどのくらいが最適ですか？', 'ko':'감도는 얼마로 설정하는 것이 좋나요?' },
  'awm.faq4a': { 'zh-CN':'取决于个人习惯。一般建议从 1.0（慢速）开始，适应后再逐步提高。FPS 老手可以尝试 2.0 以上获得更快的镜头转向速度。', 'zh-TW':'取決於個人習慣。一般建議從 1.0（慢速）開始，適應後再逐步提高。FPS 老手可以嘗試 2.0 以上獲得更快的鏡頭轉向速度。', 'en':'It depends on personal preference. Start at 1.0 (slow) and gradually increase as you adapt. FPS veterans can try 2.0+ for faster scope turning.', 'ja':'個人の好みによります。1.0（遅い）から始めて徐々に上げるのがおすすめ。FPS経験者は2.0以上でより速いスコープ操作を試せます。', 'ko':'개인 취향에 따라 다릅니다. 1.0(느리게)부터 시작하여 적응 후 점차 높이세요. FPS 숙련자는 2.0 이상으로 더 빠른 스코프 전환을 시도할 수 있습니다.' },
  'awm.faq5q': { 'zh-CN':'为什么我总是打不中远距离目标？', 'zh-TW':'為什麼我總是打不中遠距離目標？', 'en':'Why do I keep missing long-range targets?', 'ja':'遠距離の標的に当たらないのはなぜ？', 'ko':'왜 장거리 표적을 계속 놓치나요?' },
  'awm.faq5a': { 'zh-CN':'200 米目标体型最小、子弹延迟最长（300ms），需要最大的提前量。建议先从 80 米练起，掌握预判节奏后再挑战更远距离。', 'zh-TW':'200 米目標體型最小、子彈延遲最長（300ms），需要最大的提前量。建議先從 80 米練起，掌握預判節奏後再挑戰更遠距離。', 'en':'200m targets are the smallest with the longest delay (300ms) — they need the most lead. Start with 80m to build prediction rhythm, then move up.', 'ja':'200m標的は最も小さく遅延も最長（300ms）で、最大のリードが必要。まず80mで予測リズムを掴んでから遠距離に挑戦しましょう。', 'ko':'200m 표적은 가장 작고 지연도 가장 길어(300ms) 가장 앞서 조준해야 합니다. 먼저 80m에서 예측 리듬을 익힌 후 더 먼 거리에 도전하세요.' },

  // ── AWM 你知道吗 ─────────────────────────────
  'awm.fact1val': { 'zh-CN':'3',     'zh-TW':'3',     'en':'3',     'ja':'3',     'ko':'3' },
  'awm.fact1lbl': { 'zh-CN':'切换距离（80/140/200m）', 'zh-TW':'切換距離（80/140/200m）', 'en':'Distance options (80/140/200m)', 'ja':'距離バリエーション (80/140/200m)', 'ko':'거리 옵션 (80/140/200m)' },
  'awm.fact2val': { 'zh-CN':'100ms', 'zh-TW':'100ms', 'en':'100ms', 'ja':'100ms', 'ko':'100ms' },
  'awm.fact2lbl': { 'zh-CN':'80m 子弹飞行时间', 'zh-TW':'80m 子彈飛行時間', 'en':'80m bullet travel time', 'ja':'80mの弾道飛行時間', 'ko':'80m 탄도 비행 시간' },
  'awm.fact3val': { 'zh-CN':'2.5x',  'zh-TW':'2.5x',  'en':'2.5x',  'ja':'2.5倍',  'ko':'2.5배' },
  'awm.fact3lbl': { 'zh-CN':'世界地图比瞄准镜视野大', 'zh-TW':'世界地圖比瞄準鏡視野大', 'en':'World map vs scope view ratio', 'ja':'ワールドマップとスコープ視野の比率', 'ko':'월드 맵 대 스코프 시야 비율' },
  'awm.fact4val': { 'zh-CN':'40s',   'zh-TW':'40s',   'en':'40s',   'ja':'40秒',  'ko':'40초' },
  'awm.fact4lbl': { 'zh-CN':'挑战模式限时', 'zh-TW':'挑戰模式限時', 'en':'Challenge mode time limit', 'ja':'チャレンジモード制限時間', 'ko':'챌린지 모드 제한 시간' },

  // ── AWM 相关工具 ────────────────────────────
  'awm.rel1Title': { 'zh-CN':'反应力测试', 'zh-TW':'反應力測試', 'en':'Reaction Time Test', 'ja':'反応速度テスト', 'ko':'반응 속도 테스트' },
  'awm.rel1Desc':  { 'zh-CN':'在线测量视觉反应速度，每轮 5 次取平均。精准评估神经反射能力，最低可达 100ms 以内。', 'zh-TW':'在線測量視覺反應速度，每輪 5 次取平均。精準評估神經反射能力，最低可達 100ms 以內。', 'en':'Measure visual reaction speed online. 5 trials per round. Accurate assessment down to 100ms.', 'ja':'オンラインで視覚反応速度を測定。1ラウンド5回。100ms以下の精密評価。', 'ko':'시각 반응 속도 온라인 측정. 라운드당 5회. 100ms 이하 정밀 평가.' },
  'awm.rel2Title': { 'zh-CN':'射击训练', 'zh-TW':'射擊訓練', 'en':'Shooting Trainer', 'ja':'射撃訓練', 'ko':'사격 훈련' },
  'awm.rel2Desc':  { 'zh-CN':'30 秒限时挑战，点击移动目标得分。三种难度可选，测试鼠标定位精度和手眼协调能力。', 'zh-TW':'30 秒限時挑戰，點擊移動目標得分。三種難度可選，測試滑鼠定位精度和手眼協調能力。', 'en':'30-second timed challenge. Click moving targets to score. Tests mouse accuracy and coordination.', 'ja':'30秒の制限時間チャレンジ。動く標的をクリックして得点。マウス精度と協調性をテスト。', 'ko':'30초 제한 도전. 움직이는 표적 클릭 득점. 마우스 정밀도와 협응력 테스트.' },

  // ── 通用 ────────────────────────────────────
  'common.moreTools': { 'zh-CN':'更多在线小工具', 'zh-TW':'更多線上小工具', 'en':'More online tools', 'ja':'その他のオンラインツール', 'ko':'더 많은 온라인 도구' },
  'common.noscript':  { 'zh-CN':'请启用 JavaScript 以使用此工具。', 'zh-TW':'請啟用 JavaScript 以使用此工具。', 'en':'Please enable JavaScript to use this tool.', 'ja':'このツールを使用するにはJavaScriptを有効にしてください。', 'ko':'이 도구를 사용하려면 JavaScript를 활성화하세요.' },
  'common.noscript.r': { 'zh-CN':'反应力测试 — 在线测量你的反应速度', 'zh-TW':'反應力測試 — 在線測量你的反應速度', 'en':'Reaction Time Test — Measure your reaction speed online', 'ja':'反応速度テスト — オンラインで反応速度を測定', 'ko':'반응 속도 테스트 — 온라인으로 반응 속도 측정' },
  'common.noscript.s': { 'zh-CN':'射击训练 — 在线测试你的鼠标定位能力', 'zh-TW':'射擊訓練 — 在線測試你的滑鼠定位能力', 'en':'Shooting Trainer — Test your mouse aiming skills online', 'ja':'射撃訓練 — オンラインでマウス照準能力をテスト', 'ko':'사격 훈련 — 온라인으로 마우스 조준 능력 테스트' },
  'common.noscript.a': { 'zh-CN':'狙击手训练 — 在线狙击训练', 'zh-TW':'狙擊手訓練 — 在線狙擊訓練', 'en':'Sniper Training — Online sniper training', 'ja':'スナイパー訓練 — オンライン狙撃訓練', 'ko':'스나이퍼 훈련 — 온라인 저격 훈련' },
  'common.noscript.r2': { 'zh-CN':'每轮5次测试，自动计算平均反应时间。支持鼠标点击计时。', 'zh-TW':'每輪5次測試，自動計算平均反應時間。支持滑鼠點擊計時。', 'en':'5 trials per round, automatic average calculation. Mouse click timing supported.', 'ja':'1ラウンド5回、自動平均計算。マウスクリック計測対応。', 'ko':'라운드당 5회, 자동 평균 계산. 마우스 클릭 타이밍 지원.' },
  'common.noscript.s2': { 'zh-CN':'30秒限时挑战，三种难度可选。点击移动小球命中得分。', 'zh-TW':'30秒限時挑戰，三種難度可選。點擊移動小球命中得分。', 'en':'30-second timed challenge, three difficulty levels. Click moving balls to score.', 'ja':'30秒制限チャレンジ、3段階難易度。動くボールをクリックして得点。', 'ko':'30초 제한 도전, 3단계 난이도. 움직이는 공 클릭하여 득점.' },
  'common.noscript.a2': { 'zh-CN':'三种距离移动靶（80m/140m/200m），模拟真实狙击场景。支持灵敏度调节。', 'zh-TW':'三種距離移動靶（80m/140m/200m），模擬真實狙擊場景。支持靈敏度調節。', 'en':'Moving targets at three distances (80m/140m/200m). Realistic sniper simulation with sensitivity control.', 'ja':'3距離の移動標的（80m/140m/200m）。リアルな狙撃シミュレーション、感度調整対応。', 'ko':'3가지 거리 이동 표적(80m/140m/200m). 실제 저격 시뮬레이션, 감도 조절 지원.' },
  'common.langLabel':  { 'zh-CN':'语言', 'zh-TW':'語言', 'en':'Language', 'ja':'言語', 'ko':'언어' }
};

// ── i18n Engine ──────────────────────────────────

let currentLang = localStorage.getItem('bl_lang') || 'zh-CN';

function t(key) {
  const entry = DICT[key];
  if (!entry) return key;
  return entry[currentLang] || entry['zh-CN'] || entry['en'] || key;
}

function applyI18N() {
  // Update <html lang>
  document.documentElement.lang = currentLang;

  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translated = t(key);
    if (translated !== key) {
      el.textContent = translated;
    }
  });

  // Update all [data-i18n-html] elements (for HTML content)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const translated = t(key);
    if (translated !== key) {
      el.innerHTML = translated;
    }
  });

  // Update all [data-i18n-placeholder]
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });

  // Update all [data-i18n-title]
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    el.title = t(key);
  });

  // Sync language select UI
  document.querySelectorAll('.lang-select').forEach(sel => {
    sel.value = currentLang;
  });
}

function switchLang(lang) {
  currentLang = lang;
  localStorage.setItem('bl_lang', lang);
  applyI18N();
  // Dispatch event for game JS to react
  window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

// Apply on load
document.addEventListener('DOMContentLoaded', () => {
  applyI18N();
});
