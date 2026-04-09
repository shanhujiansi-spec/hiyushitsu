
const STORAGE_KEY = "hiyoshitsu_saved_entries";
const themesEnhanced = [{"text": "嬉しさ", "mood": "positive", "structureTags": ["ひらく", "明るむ", "緩む", "上向く"], "hintWords": ["ひらく", "光", "弾む", "ほどける", "上がる", "やわらかい"], "coreWords": ["ひらく", "明るむ", "ほどける", "弾む", "上向く", "満ちる"], "sideWords": ["光", "笑う", "やわらかい", "軽い", "晴れる", "声", "手元", "ぬくもり", "広がる", "あたたかい"], "timeWords": ["ふいに", "ぱっと", "すっと", "ひろがる", "残る"]}, {"text": "楽しさ", "mood": "positive", "structureTags": ["弾む", "広がる", "軽やか", "先へ進む"], "hintWords": ["弾む", "跳ねる", "ころがる", "笑う", "軽い", "進む"], "coreWords": ["弾む", "跳ねる", "広がる", "軽やか", "進む", "前のめり"], "sideWords": ["笑い声", "明るい", "風", "走る", "高まる", "にぎやか", "ひらく", "転がる", "足どり", "浮く"], "timeWords": ["つぎつぎ", "どんどん", "すぐに", "先へ", "ひろがっていく"]}, {"text": "安心", "mood": "positive", "structureTags": ["落ち着く", "支えられる", "緩む", "揺れの収束"], "hintWords": ["落ち着く", "支え", "静まる", "包まれる", "着地", "ゆるむ"], "coreWords": ["落ち着く", "静まる", "支えられる", "収まる", "緩む", "安定"], "sideWords": ["包まれる", "やわらかい", "温かい", "椅子", "息をつく", "ひと息", "ぬくもり", "静けさ", "寄りかかる", "手すり"], "timeWords": ["ようやく", "しだいに", "ゆっくり", "やっと", "おさまる"]}, {"text": "解放感", "mood": "positive", "structureTags": ["解ける", "ひらく", "圧の解除", "外へ抜ける"], "hintWords": ["ほどける", "抜ける", "ひらく", "広がる", "外気", "軽くなる"], "coreWords": ["解ける", "ほどける", "抜ける", "ひらく", "軽くなる", "外へ出る"], "sideWords": ["風", "広い", "空", "ドア", "息が通る", "肩の力", "外気", "明るい", "歩き出す", "伸びる"], "timeWords": ["一気に", "すっと", "ふっと", "ほどけていく", "抜けていく"]}, {"text": "誇らしさ", "mood": "positive", "structureTags": ["張る", "上向く", "自己充足", "輪郭が立つ"], "hintWords": ["胸を張る", "上向く", "まっすぐ", "輪郭", "立つ", "確か"], "coreWords": ["張る", "胸を張る", "上向く", "輪郭が立つ", "満ちる", "堂々"], "sideWords": ["まっすぐ", "光る", "声", "背筋", "高い", "きちんと", "収まる", "くっきり", "確か", "胸"], "timeWords": ["じわっと", "静かに", "しっかり", "立ち上がる", "残る"]}, {"text": "かすかな希望", "mood": "positive", "structureTags": ["微光", "兆し", "弱い前進", "消えずに残る"], "hintWords": ["灯り", "細い道", "わずか", "残る", "にじむ", "先"], "coreWords": ["微光", "兆し", "残る", "消えない", "わずかに進む", "先がある"], "sideWords": ["灯り", "遠く", "朝", "にじむ", "細い", "ひとすじ", "かすか", "夜明け", "小さい", "風"], "timeWords": ["まだ", "それでも", "かすかに", "少しずつ", "にじむ"]}, {"text": "救われる感じ", "mood": "positive", "structureTags": ["持ち上がる", "解ける", "支えの到来", "戻ってくる"], "hintWords": ["持ち上がる", "支え", "戻る", "ほどける", "助かる", "すくう"], "coreWords": ["持ち上がる", "すくわれる", "戻る", "支えられる", "解ける", "呼吸が戻る"], "sideWords": ["手", "差し出される", "温かい", "息", "浮く", "軽くなる", "岸", "受け止める", "布", "ひらく"], "timeWords": ["ようやく", "ふいに", "急に", "戻ってくる", "あとから"]}, {"text": "何かが始まる予感", "mood": "positive", "structureTags": ["兆し", "立ち上がり", "まだ見えない動き", "前触れ"], "hintWords": ["兆し", "気配", "立ち上がる", "前触れ", "まだ見えない", "最初"], "coreWords": ["兆し", "気配", "前触れ", "立ち上がる", "動き出す", "始まる"], "sideWords": ["朝", "音", "光", "微かな揺れ", "風", "ドア", "空気が変わる", "ひらく", "影", "息"], "timeWords": ["これから", "まだ", "まもなく", "少しずつ", "立ち上がる"]}, {"text": "懐かしさ", "mood": "positive", "structureTags": ["反響", "距離の縮まり", "呼び戻される", "やわらかな残り"], "hintWords": ["響く", "戻る", "昔", "やわらかい", "残り香", "遠い"], "coreWords": ["戻る", "呼び戻される", "反響", "縮まる", "残る", "やわらかい"], "sideWords": ["写真", "匂い", "声", "夕方", "古い", "木", "廊下", "風景", "光", "ぬくもり"], "timeWords": ["ふいに", "急に", "あとから", "よみがえる", "残る"]}, {"text": "愛おしさ", "mood": "positive", "structureTags": ["やわらかな集中", "包みたい感じ", "近づく", "傷つけたくなさ"], "hintWords": ["包む", "そっと", "近い", "守る", "やわらかい", "手のひら"], "coreWords": ["そっとする", "包む", "守る", "近づく", "やわらかい", "傷つけたくない"], "sideWords": ["手のひら", "まなざし", "小さい", "ぬくもり", "気配", "静か", "寄る", "抱く", "丸い", "寝息"], "timeWords": ["じっと", "そっと", "静かに", "ずっと", "あとから残る"]}, {"text": "ときめき", "mood": "positive", "structureTags": ["跳ねる", "高まる", "予感", "内側の振動"], "hintWords": ["跳ねる", "高鳴る", "きらめく", "予感", "ふるえる", "胸"], "coreWords": ["跳ねる", "高鳴る", "ふるえる", "予感", "きらめく", "内側が振動する"], "sideWords": ["胸", "光", "目が合う", "音", "指先", "浮く", "速い", "白い", "風", "一瞬"], "timeWords": ["ふいに", "一気に", "急に", "ぱっと", "あとから広がる"]}, {"text": "わくわく", "mood": "positive", "structureTags": ["弾む", "待ちきれなさ", "前のめり", "明るい高まり"], "hintWords": ["待ちきれない", "弾む", "前のめり", "明るい", "走り出す", "うずうず"], "coreWords": ["待ちきれない", "弾む", "前のめり", "高まる", "うずうずする", "走り出したい"], "sideWords": ["朝", "前夜", "荷物", "靴", "風", "笑う", "目が覚める", "軽い", "先へ", "明るい"], "timeWords": ["もうすぐ", "これから", "どんどん", "待ち遠しい", "高まる"]}, {"text": "満たされた感じ", "mood": "positive", "structureTags": ["満ちる", "安定", "欠けの解消", "静かな重み"], "hintWords": ["満ちる", "足りる", "静か", "重み", "収まる", "いっぱい"], "coreWords": ["満ちる", "足りる", "落ち着く", "収まる", "安定する", "欠けが埋まる"], "sideWords": ["水", "器", "深い", "静か", "しっとり", "ぬくもり", "やわらかい", "机", "食後", "夕方"], "timeWords": ["静かに", "ゆっくり", "しだいに", "満ちていく", "残る"]}, {"text": "静かな幸福", "mood": "positive", "structureTags": ["穏やかな持続", "ぬくもり", "緩い充足", "波立たなさ"], "hintWords": ["穏やか", "ぬくもり", "静か", "続く", "波立たない", "やわらかい"], "coreWords": ["穏やか", "続く", "ぬくもる", "波立たない", "静かに満ちる", "やわらぐ"], "sideWords": ["朝", "湯気", "机", "窓", "柔らかい光", "布", "手", "静けさ", "息", "部屋"], "timeWords": ["ずっと", "しばらく", "静かに", "長く", "ゆるやかに"]}, {"text": "達成感", "mood": "positive", "structureTags": ["到達", "積み上がりの完了", "重み", "収まり"], "hintWords": ["たどり着く", "積み上がる", "終える", "確か", "重み", "収まる"], "coreWords": ["到達する", "終える", "積み上がる", "収まる", "確かさ", "重み"], "sideWords": ["机", "紙", "夕方", "静か", "息をつく", "背中", "肩", "灯り", "印", "手応え"], "timeWords": ["ようやく", "ついに", "最後に", "積み上がって", "残る"]}, {"text": "親しみ", "mood": "positive", "structureTags": ["距離の近さ", "なじむ", "ひっかかりのなさ", "受け入れ"], "hintWords": ["なじむ", "近い", "自然", "すっと", "やわらぐ", "受け入れる"], "coreWords": ["なじむ", "近い", "受け入れる", "すっと入る", "やわらぐ", "抵抗がない"], "sideWords": ["声", "笑い", "椅子", "カップ", "手元", "会話", "ぬくもり", "柔らかい", "机", "ひと息"], "timeWords": ["いつのまにか", "すっと", "自然に", "しだいに", "なじんでいく"]}, {"text": "ぬくもり", "mood": "positive", "structureTags": ["やわらかく包む", "温度の伝達", "緩む", "近さ"], "hintWords": ["温かい", "包む", "近い", "手のひら", "やわらかい", "ほぐれる"], "coreWords": ["温かい", "包む", "近い", "伝わる", "ほぐれる", "ぬくもる"], "sideWords": ["手", "布", "湯気", "息", "肩", "背中", "マグカップ", "灯り", "ひざ", "毛布"], "timeWords": ["じんわり", "ゆっくり", "しだいに", "あとから", "広がる"]}, {"text": "軽やかさ", "mood": "positive", "structureTags": ["重さの欠如", "浮く", "なめらか", "先へ進む"], "hintWords": ["軽い", "浮く", "すべる", "風", "進む", "ひっかからない"], "coreWords": ["軽い", "浮く", "なめらか", "進む", "ひっかからない", "抜ける"], "sideWords": ["風", "靴", "朝", "足どり", "白い", "ひらく", "鳥", "階段", "空", "光"], "timeWords": ["すっと", "ふわり", "そのまま", "前へ", "流れる"]}, {"text": "心強さ", "mood": "positive", "structureTags": ["支え", "背後の厚み", "揺れにくさ", "前へ出られる"], "hintWords": ["支え", "背中", "厚み", "前へ", "守る", "踏み出す"], "coreWords": ["支え", "守られる", "揺れにくい", "前へ出る", "背後がある", "踏み出せる"], "sideWords": ["背中", "手", "声", "柱", "厚い", "地面", "足元", "灯り", "並ぶ", "肩"], "timeWords": ["いつでも", "そのまま", "すっと", "ためらわず", "踏み出す"]}, {"text": "納得感", "mood": "positive", "structureTags": ["収まり", "つながる", "ずれの解消", "腑に落ちる"], "hintWords": ["腑に落ちる", "収まる", "つながる", "ずれない", "はまる", "ぴたり"], "coreWords": ["腑に落ちる", "つながる", "収まる", "噛み合う", "ずれが消える", "はまる"], "sideWords": ["鍵", "歯車", "机", "線", "輪", "ぴたり", "声", "静か", "整う", "橋"], "timeWords": ["すっと", "ようやく", "やっと", "ぴたりと", "収まる"]}, {"text": "新鮮な気分", "mood": "positive", "structureTags": ["入れ替わる", "澄む", "立ち上がる", "古さの剥落"], "hintWords": ["澄む", "洗われる", "新しい", "入れ替わる", "軽い", "朝"], "coreWords": ["澄む", "入れ替わる", "洗われる", "立ち上がる", "新しくなる", "剥がれる"], "sideWords": ["朝", "風", "水", "窓", "光", "空気", "白い", "歩く", "匂い", "静か"], "timeWords": ["ふいに", "すっと", "一気に", "入れ替わる", "晴れる"]}, {"text": "自由な感じ", "mood": "positive", "structureTags": ["拘束の不在", "広がり", "選べる", "軽い移動"], "hintWords": ["縛られない", "広い", "選べる", "風", "外へ", "自由"], "coreWords": ["縛られない", "広がる", "選べる", "軽く動ける", "外へ出る", "ひらける"], "sideWords": ["空", "風", "道", "ドア", "朝", "靴", "階段", "広い", "鳥", "線路"], "timeWords": ["どこへでも", "そのまま", "すぐに", "先へ", "ひらいていく"]}, {"text": "ほっとする感じ", "mood": "positive", "structureTags": ["緩む", "落ち着く", "危機の通過", "温度の回復"], "hintWords": ["ほっとする", "ほどける", "温かい", "通り過ぎる", "息をつく", "静まる"], "coreWords": ["ほっとする", "緩む", "息をつく", "通り過ぎる", "落ち着く", "温かさが戻る"], "sideWords": ["湯気", "椅子", "夜", "毛布", "窓", "カップ", "肩", "静か", "灯り", "手"], "timeWords": ["ようやく", "ふっと", "しだいに", "通り過ぎて", "戻る"]}, {"text": "前向きさ", "mood": "positive", "structureTags": ["上向く", "前進", "視界が開く", "停滞からの離脱"], "hintWords": ["前へ", "上向く", "開く", "抜ける", "動き出す", "進む"], "coreWords": ["前へ進む", "上向く", "抜ける", "視界が開く", "動き出す", "踏み出す"], "sideWords": ["朝", "道", "窓", "靴", "風", "階段", "光", "声", "地面", "橋"], "timeWords": ["これから", "すぐに", "しだいに", "前へ", "動き出す"]}, {"text": "晴れやかさ", "mood": "positive", "structureTags": ["明るむ", "澄む", "抜ける", "隠れなさ"], "hintWords": ["晴れる", "明るい", "澄む", "抜ける", "まっすぐ", "開ける"], "coreWords": ["晴れる", "澄む", "明るむ", "抜ける", "隠れない", "まっすぐ"], "sideWords": ["青空", "朝", "光", "風", "白い", "窓", "声", "顔", "高い", "広い"], "timeWords": ["ぱっと", "一気に", "すっと", "晴れていく", "ひらく"]}, {"text": "焦り", "mood": "negative", "structureTags": ["時間不足", "圧迫", "空回り", "追われる感じ"], "hintWords": ["間に合わない", "せまる", "もつれる", "閉まる", "背後", "急ぐ"], "coreWords": ["間に合わない", "せまる", "追われる", "もつれる", "閉まりかける", "詰まる"], "sideWords": ["早足", "息", "背中", "信号", "ドア", "夜道", "狭い", "足元", "急ぐ", "汗"], "timeWords": ["もう", "すぐ", "あと少し", "迫る", "追いついてくる"]}, {"text": "停滞", "mood": "negative", "structureTags": ["固着", "重さ", "流れない", "閉塞"], "hintWords": ["止まる", "沈む", "重い", "詰まる", "濁る", "動かない"], "coreWords": ["止まる", "動かない", "固着する", "流れない", "詰まる", "沈む"], "sideWords": ["泥", "車輪", "濁る", "重い", "列", "曇る", "鈍い", "同じ場所", "机", "夕方"], "timeWords": ["ずっと", "そのまま", "いつまでも", "じりじり", "動かない"]}, {"text": "後悔", "mood": "negative", "structureTags": ["遅れ", "取り返せなさ", "こびりつく", "反響"], "hintWords": ["遅い", "戻れない", "こびりつく", "響く", "送れない", "残る"], "coreWords": ["遅い", "戻れない", "取り返せない", "残る", "こびりつく", "何度も返る"], "sideWords": ["夜", "送信", "手", "声", "画面", "帰り道", "染み", "湿る", "紙", "机"], "timeWords": ["あとから", "何度も", "まだ", "いつまでも", "残る"]}, {"text": "疎外感", "mood": "negative", "structureTags": ["隔たり", "外側", "温度差", "入れなさ"], "hintWords": ["ガラス越し", "輪の外", "遅れて来る", "閉じる", "届かない", "温度差"], "coreWords": ["外側", "届かない", "入れない", "温度差", "閉じた輪", "よそ者"], "sideWords": ["ガラス", "店", "灯り", "会話の輪", "遅れて", "ベンチ", "視線", "笑いのあと", "空気", "静か"], "timeWords": ["あとから", "すでに", "もう", "遅れて", "残る"]}, {"text": "静かな怒り", "mood": "negative", "structureTags": ["熱の滞留", "抑制", "内圧", "硬さ"], "hintWords": ["熱", "抑える", "内側", "硬い", "煮える", "噴き出さない"], "coreWords": ["煮える", "押し殺す", "内側で膨らむ", "硬い", "噴き出さない", "熱がこもる"], "sideWords": ["喉", "胸", "背中", "沈黙", "熱い", "赤い", "息", "机", "歯", "こわばる"], "timeWords": ["じわじわ", "ずっと", "まだ", "こもる", "残る"]}, {"text": "取り返しのつかなさ", "mood": "negative", "structureTags": ["不可逆", "断絶", "失われた可能性", "固定"], "hintWords": ["戻れない", "切れる", "失う", "固まる", "越えてしまう", "断つ"], "coreWords": ["戻れない", "切れる", "断たれる", "失う", "越えてしまう", "やり直せない"], "sideWords": ["橋", "線", "ドア", "向こう側", "夜", "駅", "沈む", "閉まる", "紙", "影"], "timeWords": ["もう", "二度と", "すでに", "越えてしまった", "戻れない"]}, {"text": "緊張", "mood": "negative", "structureTags": ["張りつめ", "収縮", "失敗の予感", "崩せなさ"], "hintWords": ["張る", "こわばる", "固い", "待つ", "名前を呼ばれる", "逃げられない"], "coreWords": ["張りつめる", "こわばる", "縮む", "逃げられない", "失敗が怖い", "崩せない"], "sideWords": ["会議室", "椅子", "名前", "手", "喉", "息", "汗", "視線", "机", "足元"], "timeWords": ["直前", "まだ", "今にも", "その前", "呼ばれるまで"]}, {"text": "空回り", "mood": "negative", "structureTags": ["運動の無効化", "ずれ", "力の浪費", "進まなさ"], "hintWords": ["空振り", "もつれる", "滑る", "進まない", "回るだけ", "ずれる"], "coreWords": ["空振り", "回るだけ", "ずれる", "進まない", "もつれる", "力だけ出る"], "sideWords": ["歯車", "車輪", "足", "汗", "机", "何度も", "滑る", "手", "息", "床"], "timeWords": ["何度も", "そのたび", "繰り返し", "ずっと", "前に進まない"]}, {"text": "期待外れ", "mood": "negative", "structureTags": ["落差", "しぼむ", "空白", "熱の喪失"], "hintWords": ["しぼむ", "落ちる", "空っぽ", "冷める", "思ったほどではない", "白ける"], "coreWords": ["しぼむ", "落差", "冷める", "空っぽ", "白ける", "熱が消える"], "sideWords": ["風船", "部屋", "机", "笑いが止む", "紙", "灯り", "白い", "夕方", "声", "間"], "timeWords": ["急に", "その瞬間", "あとから", "しぼんでいく", "消える"]}, {"text": "嫉妬", "mood": "negative", "structureTags": ["比較", "欠乏感", "他者への引力", "内側のざらつき"], "hintWords": ["比べる", "足りない", "ざらつく", "向こう側", "目で追う", "引かれる"], "coreWords": ["比べる", "足りない", "ざらつく", "目で追う", "引かれる", "欠けて見える"], "sideWords": ["光", "声", "向こう側", "笑い", "服", "机", "鏡", "遠い", "白い", "指"], "timeWords": ["ふいに", "じわじわ", "見た瞬間", "あとから", "残る"]}, {"text": "違和感", "mood": "negative", "structureTags": ["ずれ", "なじまなさ", "微細な抵抗", "収まりの悪さ"], "hintWords": ["ずれる", "浮く", "しっくりこない", "引っかかる", "噛み合わない", "余る"], "coreWords": ["ずれる", "しっくりこない", "浮く", "引っかかる", "噛み合わない", "収まらない"], "sideWords": ["服", "椅子", "声", "空気", "指先", "机", "部屋", "温度", "ガラス", "光"], "timeWords": ["ずっと", "ふと", "どうも", "最後まで", "収まらない"]}, {"text": "孤独", "mood": "negative", "structureTags": ["断絶", "応答の不在", "距離", "音の吸収"], "hintWords": ["返らない", "遠い", "吸い込まれる", "灯り", "ひとり", "気配だけ"], "coreWords": ["返らない", "ひとり", "触れられない", "気配だけ", "外側", "届かない"], "sideWords": ["ベンチ", "街灯", "足音", "影", "夜道", "白い傘", "冷たい", "公園", "静かすぎる", "風"], "timeWords": ["いつまでも", "あとから", "残る", "消えない", "返ってこない"]}, {"text": "迷い", "mood": "negative", "structureTags": ["分岐", "決めきれなさ", "揺れ", "足場の不安定さ"], "hintWords": ["分かれる", "揺れる", "決められない", "足元", "行ったり来たり", "立ち止まる"], "coreWords": ["分かれる", "決められない", "揺れる", "立ち止まる", "足場がない", "行ったり来たり"], "sideWords": ["道", "角", "信号", "足元", "霧", "風", "地図", "影", "階段", "夜"], "timeWords": ["しばらく", "何度も", "行ったり来たり", "まだ", "決めきれない"]}, {"text": "諦めきれなさ", "mood": "negative", "structureTags": ["未練", "手放せなさ", "引き戻し", "残火"], "hintWords": ["未練", "手放せない", "戻る", "くすぶる", "残る", "引かれる"], "coreWords": ["未練", "手放せない", "引き戻される", "くすぶる", "残る", "まだ消えない"], "sideWords": ["火", "灰", "夜", "机", "写真", "声", "手紙", "灯り", "画面", "匂い"], "timeWords": ["まだ", "いつまでも", "あとから", "くすぶり続ける", "残る"]}, {"text": "失望のあと", "mood": "negative", "structureTags": ["落下後の静けさ", "熱の消失", "空洞", "残りかす"], "hintWords": ["落ちたあと", "静か", "空っぽ", "冷める", "抜け殻", "残り"], "coreWords": ["冷める", "空っぽ", "落ちたあと", "静かすぎる", "抜け殻", "残りかす"], "sideWords": ["祭りのあと", "机", "夜", "灯り", "紙コップ", "残骸", "椅子", "広い", "白い", "息"], "timeWords": ["あとに", "急に", "すっと", "冷めていく", "残る"]}, {"text": "恥ずかしさ", "mood": "negative", "structureTags": ["露出", "縮こまり", "隠れたさ", "熱の上昇"], "hintWords": ["赤くなる", "隠れる", "縮む", "見られる", "熱い", "うつむく"], "coreWords": ["赤くなる", "見られる", "縮こまる", "隠れたい", "熱くなる", "さらされる"], "sideWords": ["頬", "視線", "椅子", "帰り道", "笑いのあと", "喉", "席", "机", "手", "うつむく"], "timeWords": ["あとから", "ふいに", "急に", "じわっと", "遅れてくる"]}, {"text": "不安", "mood": "negative", "structureTags": ["不確定", "揺れ", "先の見えなさ", "身構え"], "hintWords": ["見えない", "揺れる", "待つ", "まだ来ない", "影", "身を固くする"], "coreWords": ["見えない", "まだ来ない", "揺れる", "こわばる", "読めない", "身構える"], "sideWords": ["霧", "影", "通知", "雷", "夜", "足元", "風", "窓", "灯り", "息"], "timeWords": ["まだ", "これから", "その前", "じわじわ", "近づいてくる"]}, {"text": "退屈", "mood": "negative", "structureTags": ["刺激の欠如", "伸びた時間", "平板", "内側の空白"], "hintWords": ["長い", "変わらない", "平たい", "空っぽ", "だらり", "のびる"], "coreWords": ["長い", "変わらない", "のびる", "平たい", "空っぽ", "起伏がない"], "sideWords": ["時計", "列", "待合室", "白い壁", "机", "午後", "窓", "椅子", "眠い", "同じ"], "timeWords": ["いつまでも", "だらだら", "ずっと", "ただ", "のびていく"]}, {"text": "ぬるい絶望", "mood": "negative", "structureTags": ["鈍い沈下", "抵抗の低下", "冷めた持続", "脱出口のなさ"], "hintWords": ["沈む", "ぬるい", "動けない", "出口がない", "冷める", "じわじわ"], "coreWords": ["沈む", "ぬるい", "動けない", "出口がない", "冷めたまま続く", "抗えない"], "sideWords": ["水", "曇り", "夜", "部屋", "湿る", "鈍い", "重い", "ベッド", "壁", "灯り"], "timeWords": ["じわじわ", "ずっと", "そのまま", "抜け出せない", "沈んでいく"]}, {"text": "報われなさ", "mood": "negative", "structureTags": ["投入と不回収", "空振り", "行き場のなさ", "欠けた応答"], "hintWords": ["返らない", "報われない", "空振り", "届かない", "戻らない", "空く"], "coreWords": ["返らない", "届かない", "空振り", "報われない", "戻らない", "行き場がない"], "sideWords": ["手", "机", "声", "紙", "投げたもの", "夜", "空っぽ", "壁", "ポスト", "画面"], "timeWords": ["何度も", "いつまでも", "そのまま", "返ってこない", "残る"]}, {"text": "置いていかれる感じ", "mood": "negative", "structureTags": ["速度差", "距離の拡大", "追いつけなさ", "外される"], "hintWords": ["離れる", "速い", "追いつけない", "遠ざかる", "向こうへ", "残される"], "coreWords": ["追いつけない", "遠ざかる", "残される", "速度差", "向こうへ行く", "離れていく"], "sideWords": ["人波", "電車", "階段", "足音", "駅", "向こう側", "灯り", "列", "背中", "夕方"], "timeWords": ["どんどん", "そのまま", "先に", "遠ざかっていく", "間に合わない"]}, {"text": "張りつめた沈黙", "mood": "negative", "structureTags": ["停止", "圧", "破裂前", "音の不在"], "hintWords": ["静まり返る", "圧", "止まる", "息をのむ", "音がない", "割れそう"], "coreWords": ["静まり返る", "息をのむ", "割れそう", "止まる", "圧がある", "音がない"], "sideWords": ["エレベーター", "会議室", "机", "喉", "視線", "椅子", "空気", "時計", "扉", "手"], "timeWords": ["今にも", "その直前", "まだ", "止まったまま", "破れそう"]}, {"text": "もう戻れない感じ", "mood": "negative", "structureTags": ["境界越え", "不可逆", "断絶", "後戻り不能"], "hintWords": ["線を越える", "戻れない", "切れる", "向こう側", "渡る", "閉まる"], "coreWords": ["戻れない", "越えてしまう", "切れる", "向こう側", "閉まる", "後戻りできない"], "sideWords": ["橋", "ドア", "改札", "線", "夜", "境目", "雨", "靴", "駅", "影"], "timeWords": ["もう", "すでに", "越えてしまった", "二度と", "戻れない"]}, {"text": "重苦しさ", "mood": "negative", "structureTags": ["圧迫", "沈下", "鈍い持続", "動きにくさ"], "hintWords": ["重い", "のしかかる", "沈む", "鈍い", "動けない", "曇る"], "coreWords": ["重い", "のしかかる", "沈む", "動けない", "鈍い", "曇る"], "sideWords": ["雲", "肩", "背中", "夕方", "部屋", "息", "湿る", "机", "足", "壁"], "timeWords": ["ずっと", "じわじわ", "そのまま", "重いまま", "沈んでいく"]}, {"text": "むなしさ", "mood": "negative", "structureTags": ["空洞", "意味の希薄化", "手応えのなさ", "乾き"], "hintWords": ["空っぽ", "乾く", "響かない", "手応えがない", "むなしい", "薄い"], "coreWords": ["空っぽ", "響かない", "手応えがない", "乾く", "薄い", "意味がない"], "sideWords": ["部屋", "夜", "机", "紙", "白い", "風", "椅子", "コップ", "影", "息"], "timeWords": ["あとに", "そのまま", "ただ", "残らない", "抜けていく"]}];
const scenesEnhanced = [{"text": "朝の光が部屋に差し込んできたとき", "mood": "positive", "coreWords": ["朝", "光", "部屋", "差し込む"], "sideWords": ["朝日", "白い光", "静かな部屋", "明るみ", "窓", "室内"]}, {"text": "好きな人や親しい人から連絡が来たとき", "mood": "positive", "coreWords": ["通知", "連絡", "手元", "つながる"], "sideWords": ["画面", "着信", "明るみ", "返事", "スマホ", "メッセージ"]}, {"text": "仕事や作業をひと区切り終えた直後", "mood": "positive", "coreWords": ["終える", "区切り", "ひと息", "静けさ"], "sideWords": ["肩の力", "机", "紙", "ひと段落", "落ち着く", "作業後"]}, {"text": "休日の朝にゆっくり起きたとき", "mood": "positive", "coreWords": ["休日", "朝", "ゆっくり", "起きる"], "sideWords": ["急がない", "やわらかい時間", "布団", "静か", "穏やか", "光"]}, {"text": "新しい靴で初めて外に出る朝", "mood": "positive", "coreWords": ["新しい靴", "朝", "外に出る", "足元"], "sideWords": ["一歩目", "玄関", "硬い感触", "新しさ", "道", "光"]}, {"text": "旅行の前夜に荷物を詰めているとき", "mood": "positive", "coreWords": ["前夜", "荷物", "詰める", "準備"], "sideWords": ["部屋", "期待", "待ちきれない", "机", "明日", "少し落ち着かない"]}, {"text": "久しぶりの友人と会う直前", "mood": "positive", "coreWords": ["久しぶり", "友人", "会う直前", "待つ"], "sideWords": ["待ち合わせ", "少し緊張", "近づく時間", "明るさ", "声", "足どり"]}, {"text": "欲しかった本や物を手に取ったとき", "mood": "positive", "coreWords": ["手に取る", "欲しかった", "本", "物"], "sideWords": ["重さ", "手元", "実感", "近さ", "持つ", "満たされる"]}, {"text": "雨上がりの空が明るくなってきたとき", "mood": "positive", "coreWords": ["雨上がり", "空", "明るくなる", "湿る"], "sideWords": ["しめりけ", "抜ける感じ", "晴れ間", "道", "匂い", "雲"]}, {"text": "電車やバスで座れて、ひと息ついたとき", "mood": "positive", "coreWords": ["座る", "ひと息", "電車", "バス"], "sideWords": ["支えられる", "揺れ", "座席", "移動の静けさ", "窓", "落ち着く"]}, {"text": "冬の日に温かい飲み物を飲んだとき", "mood": "positive", "coreWords": ["冬", "温かい飲み物", "飲む", "手元"], "sideWords": ["湯気", "冷えた外気", "広がる温度", "カップ", "温かい", "息"]}, {"text": "子どもの笑い声が聞こえたとき", "mood": "positive", "coreWords": ["子ども", "笑い声", "聞こえる", "明るい"], "sideWords": ["不意の明るさ", "軽さ", "空気が和らぐ", "声", "響く", "昼"]}, {"text": "静かなカフェで落ち着いて座ったとき", "mood": "positive", "coreWords": ["静かなカフェ", "座る", "落ち着く", "席"], "sideWords": ["包まれる", "椅子", "カップ", "窓", "外界との距離", "やわらかい"]}, {"text": "好きな音楽を流し始めた瞬間", "mood": "positive", "coreWords": ["音楽", "流し始める", "瞬間", "音"], "sideWords": ["空気が変わる", "浸透する", "部屋", "自分の場", "イントロ", "切り替わる"]}, {"text": "誰かに感謝された帰り道", "mood": "positive", "coreWords": ["感謝された", "帰り道", "言葉", "残る"], "sideWords": ["軽い足どり", "夜道", "内側の明るみ", "ありがとう", "余韻", "声"]}, {"text": "風通しのよい場所に立ったとき", "mood": "positive", "coreWords": ["風", "通る", "立つ", "場所"], "sideWords": ["抜ける", "広がり", "外気", "こもらない", "空", "軽い"]}, {"text": "久しぶりに晴れた日の朝", "mood": "positive", "coreWords": ["晴れ", "朝", "久しぶり", "空気"], "sideWords": ["澄む", "洗われた空気", "青空", "光", "窓", "明るい"]}, {"text": "部屋の片づけが終わって机がきれいになったとき", "mood": "positive", "coreWords": ["片づけ", "終わる", "机", "きれい"], "sideWords": ["整う", "余白", "見通し", "収まり", "部屋", "静か"]}, {"text": "期待していた予定が近づいてきたとき", "mood": "positive", "coreWords": ["予定", "近づく", "期待", "待つ"], "sideWords": ["高まり", "前向きな落ち着かなさ", "明日", "指折り数える", "楽しみ", "そわそわ"]}, {"text": "ひと仕事終えたあとの静かな机の前", "mood": "positive", "coreWords": ["仕事のあと", "静かな机", "前", "区切り"], "sideWords": ["余熱", "静けさ", "手応え", "椅子", "紙", "夕方"]}, {"text": "散歩中に気持ちのいい風が吹いたとき", "mood": "positive", "coreWords": ["散歩", "風", "吹く", "気持ちいい"], "sideWords": ["歩く", "外気", "軽さ", "不意の心地よさ", "道", "空"]}, {"text": "子どものころの写真を見て思わず笑ったとき", "mood": "positive", "coreWords": ["写真", "子どものころ", "笑う", "思い出す"], "sideWords": ["アルバム", "過去", "呼び戻される", "やわらかい距離", "机", "声"]}, {"text": "夜道で遠くの灯りがきれいに見えたとき", "mood": "positive", "coreWords": ["夜道", "遠くの灯り", "きれい", "見る"], "sideWords": ["静けさ", "小さな明るみ", "光", "歩く", "暗い道", "風"]}, {"text": "誰かと自然に会話が弾んだあと", "mood": "positive", "coreWords": ["会話", "弾む", "あと", "自然"], "sideWords": ["会話の余韻", "近さ", "空気のやわらかさ", "笑い", "声", "机"]}, {"text": "眠る前に今日は悪くなかったと思えたとき", "mood": "positive", "coreWords": ["眠る前", "今日", "悪くなかった", "思う"], "sideWords": ["夜", "一日の着地", "静かな収まり", "布団", "小さな肯定", "灯り"]}, {"text": "上司に怒られた後の帰り道", "mood": "negative", "coreWords": ["上司に怒られた", "帰り道", "ひとり", "反芻"], "sideWords": ["足早", "重い空気", "夜道", "残る声", "背中", "歩道"]}, {"text": "夜の公園をひとりで歩いているとき", "mood": "negative", "coreWords": ["夜", "公園", "ひとり", "歩く"], "sideWords": ["ベンチ", "街灯", "足音", "影", "風", "遊具", "静かすぎる"]}, {"text": "会話がひと段落した輪にあとから入るとき", "mood": "negative", "coreWords": ["会話の輪", "あとから入る", "遅れて", "入りづらい"], "sideWords": ["笑いのあと", "余った空気", "視線", "輪", "外側", "気まずい"]}, {"text": "誰もいない会議室に早く着きすぎたとき", "mood": "negative", "coreWords": ["誰もいない", "会議室", "早く着く", "待つ"], "sideWords": ["机", "椅子", "音がない", "空の部屋", "時間が余る", "しんとする"]}, {"text": "終電を逃して駅前に立っているとき", "mood": "negative", "coreWords": ["終電を逃す", "駅前", "立っている", "行き場がない"], "sideWords": ["深夜", "改札", "取り残される", "ひとり", "帰れない", "道"]}, {"text": "送るべき連絡を送れないまま夜になったとき", "mood": "negative", "coreWords": ["送れない", "連絡", "夜", "ためらい"], "sideWords": ["未送信", "手元", "スマホ", "時間だけ過ぎる", "画面", "押せない"]}, {"text": "発表の直前に名前を呼ばれるのを待っているとき", "mood": "negative", "coreWords": ["発表の直前", "名前を呼ばれる", "待つ", "逃げられない"], "sideWords": ["椅子", "喉", "手", "緊張", "順番", "会議室"]}, {"text": "コンビニの明かりだけが妙に明るく見える深夜", "mood": "negative", "coreWords": ["コンビニの明かり", "深夜", "妙に明るい", "周囲が暗い"], "sideWords": ["白い光", "人工的", "浮いて見える", "夜道", "店内", "まぶしい"]}, {"text": "エレベーターで気まずい沈黙が流れているとき", "mood": "negative", "coreWords": ["エレベーター", "沈黙", "気まずい", "他人が近い"], "sideWords": ["狭い箱", "短い時間", "逃げ場がない", "視線", "扉", "息"]}, {"text": "みんなが笑ったあとに自分だけ遅れて笑うとき", "mood": "negative", "coreWords": ["みんなが笑う", "遅れて笑う", "ずれ", "ひとりだけ"], "sideWords": ["笑いのあと", "温度差", "会話", "取り残し", "声", "視線"]}, {"text": "病院の待合室で番号を待っているとき", "mood": "negative", "coreWords": ["病院", "待合室", "番号を待つ", "落ち着かない"], "sideWords": ["白い壁", "無機質", "椅子", "呼ばれる", "静か", "受付"]}, {"text": "夕方のオフィスで人が少なくなってきたとき", "mood": "negative", "coreWords": ["夕方", "オフィス", "人が少ない", "残る"], "sideWords": ["広くなる室内", "仕事の残り", "机", "灯り", "まばら", "取り残される"]}, {"text": "スマホの通知を何度も確認してしまう夜", "mood": "negative", "coreWords": ["スマホ", "通知", "何度も確認", "夜"], "sideWords": ["手元", "画面", "落ち着かない", "繰り返し", "返事", "暗い"]}, {"text": "電車の窓に映った自分の顔を見たとき", "mood": "negative", "coreWords": ["電車", "窓", "自分の顔", "映る"], "sideWords": ["反射", "外と内の重なり", "移動中", "不意に", "表情", "夜"]}, {"text": "大事な話を切り出そうとして言えないままの時間", "mood": "negative", "coreWords": ["言えない", "大事な話", "時間", "切り出せない"], "sideWords": ["沈黙", "口を開けない", "溜まる空気", "先延ばし", "机", "喉"]}, {"text": "誰かの送別会の帰り道", "mood": "negative", "coreWords": ["送別会", "帰り道", "別れのあと", "余韻"], "sideWords": ["夜", "人の気配の残り", "名残", "道", "灯り", "静か"]}, {"text": "文化祭や祭りのあと、急に静かになった場所", "mood": "negative", "coreWords": ["祭りのあと", "急に静か", "場所", "終わった"], "sideWords": ["残骸", "熱の消失", "空白", "紙コップ", "広い", "しんとする"]}, {"text": "行列に並びながら前に進まない時間", "mood": "negative", "coreWords": ["行列", "並ぶ", "進まない", "待たされる"], "sideWords": ["列", "立ち止まる", "長い時間", "じりじり", "人", "床"]}, {"text": "閉店間際の店内を歩いているとき", "mood": "negative", "coreWords": ["閉店間際", "店内", "歩く", "終わりの気配"], "sideWords": ["薄い焦り", "人が減る", "明かり", "棚", "居づらい", "まもなく閉店"]}, {"text": "友人たちの会話にうまく入れないまま時間が過ぎるとき", "mood": "negative", "coreWords": ["友人たち", "会話", "入れない", "時間が過ぎる"], "sideWords": ["会話の輪", "外側", "笑い声", "声の流れ", "視線", "気まずい"]}, {"text": "遠くで雷の音がしている夜", "mood": "negative", "coreWords": ["遠くの雷", "夜", "まだ来ない", "空気が重い"], "sideWords": ["ごろごろ", "暗い", "風", "窓", "待つ感じ", "湿る"]}, {"text": "信号待ちで向かい側の人波を見ているとき", "mood": "negative", "coreWords": ["信号待ち", "向かい側", "人波", "立ち止まる"], "sideWords": ["流れとの差", "止まる", "向こう側", "群れ", "道路", "交差点"]}, {"text": "ミスをしたあとに自分の席へ戻るとき", "mood": "negative", "coreWords": ["ミスのあと", "席へ戻る", "視線が気になる", "小さくなる"], "sideWords": ["机", "うつむく", "足どり", "会議室", "背中", "失敗の残り"]}, {"text": "既読がつかないまま時間だけ過ぎる夜", "mood": "negative", "coreWords": ["既読がつかない", "時間だけ過ぎる", "夜", "反応がない"], "sideWords": ["スマホ", "通知", "返事", "乾いた待機", "画面", "暗い"]}, {"text": "帰り道に今日の会話を何度も思い返してしまうとき", "mood": "negative", "coreWords": ["帰り道", "会話を思い返す", "何度も", "ひとり"], "sideWords": ["言葉が残る", "夜道", "頭の中", "反芻", "声", "歩く"]}];

const objectWords = ["傘","白い傘","ベンチ","ブランコ","遊具","街灯","ドアノブ","椅子","時計","紙","ガラス","灯り","机","カップ","手紙","靴","画面","通知","改札","ドア","橋","フェンス","マグカップ","車輪","風船","膜","味噌汁","湯気","信号","ポスト","窓ガラス","手すり"];
const placeWords = ["公園","夜道","改札","会議室","駅前","店内","部屋","廊下","橋","窓辺","机の前","帰り道","待合室","エレベーター","電車","カフェ","オフィス","交差点","夜","朝","夕方","深夜","病院"];
const bodyWords = ["胸","背中","喉","手","指","肩","足","足音","息","頬","体","奥","顔","まぶた","口","歩幅","背筋"];
const sensoryWords = ["冷たい","温かい","重い","軽い","にじむ","響く","湿る","張りつく","ざらつく","かすむ","ひりつく","硬い","やわらかい","明るい","暗い","ぬるい","熱い","しんと","じわじわ","ふいに","広がる","残る","追いつく","揺れる","白い","静か","まぶしい","曇る","冷める"];
const timeStructureWords = ["あとから","遅れて","じわじわ","ふいに","残る","消えない","追いつく","広がる","まだ","いつまでも","ようやく","急に","しだいに","そのあと","やっと","何度も","ずっと","もう","すでに"];
const abstractWords = ["気持ち","感情","状態","存在","本質","意識","心"];
const clichePhrases = ["心が晴れる","胸が痛む","氷のように冷たい","炎のような情熱","波のような不安","闇に包まれる","光が差す"];
const explanationWords = ["つまり","要するに","これは","ということ","である","状態","意味","示している","気持ち","感情","と言える"];

const state = { currentTheme:null, currentScene:null, currentResult:null, savedEntries:[], recordMode:"newest", recordFilter:"all" };

document.addEventListener("DOMContentLoaded", () => {
  loadSavedEntries(); pickBoth(); bindEvents(); updateWriteScreen(); renderRecords();
});

function randomItem(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function preprocess(text) { return text.replace(/\s+/g, " ").trim(); }
function countWordHits(text, words) {
  let score = 0;
  for (const word of (words || [])) {
    if (!word) continue;
    if (text.includes(word)) { score += 1; continue; }
    if (word.length >= 3) {
      const stem = word.slice(0, word.length - 1);
      if (stem && text.includes(stem)) score += 0.5;
    }
  }
  return score;
}
function getMetaphorMarkerCount(text) {
  const markers = ["ようだ","みたいだ","のような","まるで","に似ている","感じだ","だった"];
  return countWordHits(text, markers);
}
function normalizeHitScore(rawHits, maxScore, thresholds) {
  if (rawHits >= thresholds[0]) return maxScore;
  if (rawHits >= thresholds[1]) return Math.floor(maxScore * 0.75);
  if (rawHits >= thresholds[2]) return Math.floor(maxScore * 0.5);
  if (rawHits > 0) return Math.floor(maxScore * 0.25);
  return 0;
}
function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(el => el.classList.remove("active"));
  document.getElementById(screenId).classList.add("active");
}
function pickTheme() { state.currentTheme = randomItem(themesEnhanced); }
function pickScene() { state.currentScene = randomItem(scenesEnhanced); }
function pickBoth() { pickTheme(); pickScene(); }

function updateWriteScreen() {
  document.getElementById("theme-text").textContent = state.currentTheme.text;
  document.getElementById("scene-text").textContent = state.currentScene.text;
}

function renderResult(result) {
  document.getElementById("result-theme").textContent = result.themeText;
  document.getElementById("result-scene").textContent = result.sceneText;
  document.getElementById("total-score").textContent = result.totalScore;
  document.getElementById("core-structure").textContent = result.coreScores.structure;
  document.getElementById("core-concreteness").textContent = result.coreScores.concreteness;
  document.getElementById("score-clarity").textContent = result.scores.clarity;
  document.getElementById("score-structure").textContent = result.scores.structure;
  document.getElementById("score-concreteness").textContent = result.scores.concreteness;
  document.getElementById("score-freshness").textContent = result.scores.freshness;
  document.getElementById("score-resonance").textContent = result.scores.resonance;
  document.getElementById("feedback-line-1").textContent = result.feedback[0];
  document.getElementById("feedback-line-2").textContent = result.feedback[1];
  document.getElementById("feedback-line-3").textContent = result.feedback[2];
  document.getElementById("hint-words").textContent = result.hintWords.join(" / ");
}

function escapeHtml(str) {
  return String(str).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
}

function renderRecords() {
  const list = document.getElementById("records-list");
  let entries = [...state.savedEntries];
  if (state.recordFilter === "top50") entries = entries.sort((a,b)=>b.totalScore-a.totalScore).slice(0,50);
  if (state.recordMode === "newest") entries.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
  else entries.sort((a,b)=>b.totalScore-a.totalScore);
  if (!entries.length) { list.innerHTML = "<p class='muted'>まだ保存された比喩はありません。</p>"; return; }
  list.innerHTML = entries.map(entry => `
    <div class="record-item">
      <p><strong>${entry.totalScore}点</strong></p>
      <p>テーマ：${escapeHtml(entry.themeText)}</p>
      <p>シーン：${escapeHtml(entry.sceneText)}</p>
      <p>${escapeHtml(entry.answer.slice(0,60))}${entry.answer.length>60?"…":""}</p>
      <p class="muted">${new Date(entry.createdAt).toLocaleString("ja-JP")}</p>
      <details>
        <summary>詳細を見る</summary>
        <p>${escapeHtml(entry.answer)}</p>
        <p>明確さ：${entry.scores.clarity} / 20</p>
        <p>構造一致：${entry.scores.structure} / 20</p>
        <p>具体性：${entry.scores.concreteness} / 20</p>
        <p>新鮮さ・必然性：${entry.scores.freshness} / 20</p>
        <p>余韻：${entry.scores.resonance} / 20</p>
        <p>${entry.feedback.map(escapeHtml).join("<br>")}</p>
        <p>ヒント語：${entry.hintWords.map(escapeHtml).join(" / ")}</p>
        <button onclick="deleteEntry('${entry.id}')">削除</button>
      </details>
    </div>`).join("");
}

function scoreClarity(text) {
  let score = 0;
  const length = text.length;
  if (length >= 18 && length <= 90) score += 4;
  else if ((length >= 10 && length <= 17) || (length >= 91 && length <= 130)) score += 3;
  else if (length > 0) score += 2;
  score += getMetaphorMarkerCount(text) >= 1 ? 4 : 2;
  const abstractHits = countWordHits(text, abstractWords);
  score += abstractHits === 0 ? 4 : abstractHits <= 2 ? 3 : 2;
  const conjunctionHits = countWordHits(text, ["そして","しかし","だから","つまり"]);
  score += conjunctionHits <= 1 ? 4 : 2;
  const explanationHits = countWordHits(text, explanationWords);
  score += explanationHits === 0 ? 4 : explanationHits <= 1 ? 3 : 2;
  return Math.min(score, 20);
}

function scoreStructure(text, theme, scene) {
  const coreHits = countWordHits(text, theme.coreWords);
  const sideHits = countWordHits(text, theme.sideWords);
  const timeHits = countWordHits(text, [...theme.timeWords, ...timeStructureWords]);
  const sceneCoreHits = countWordHits(text, scene.coreWords || []);
  const sceneSideHits = countWordHits(text, scene.sideWords || []);
  const coreScore = normalizeHitScore(coreHits, 8, [2,1,0.5]);
  const sideScore = normalizeHitScore(sideHits, 3, [3,2,1]);
  const timeScore = normalizeHitScore(timeHits, 3, [2,1,0.5]);
  const sceneScore = normalizeHitScore(sceneCoreHits + sceneSideHits, 3, [3,2,1]);
  const markerCount = getMetaphorMarkerCount(text);
  const objectHits = countWordHits(text, objectWords);
  const conjunctionHits = countWordHits(text, ["そして","しかし","だから","つまり"]);
  let integrationScore = 1;
  if (markerCount >= 1 && objectHits >= 1 && conjunctionHits <= 1) integrationScore = 3;
  else if (markerCount >= 1 && conjunctionHits <= 1) integrationScore = 2;
  return Math.min(coreScore + sideScore + timeScore + sceneScore + integrationScore, 20);
}

function scoreConcreteness(text) {
  const objectHits = countWordHits(text, objectWords);
  const placeHits = countWordHits(text, placeWords);
  const bodyHits = countWordHits(text, bodyWords);
  const sensoryHits = countWordHits(text, sensoryWords);
  const objectScore = normalizeHitScore(objectHits, 6, [2,1,0.5]);
  const placeScore = normalizeHitScore(placeHits, 4, [2,1,0.5]);
  const bodyScore = normalizeHitScore(bodyHits, 4, [2,1,0.5]);
  const sensoryScore = normalizeHitScore(sensoryHits, 4, [2,1,0.5]);
  let sceneFormationScore = 0;
  if ((objectHits + placeHits + bodyHits + sensoryHits) >= 4) sceneFormationScore = 2;
  else if ((objectHits + placeHits + bodyHits + sensoryHits) >= 2) sceneFormationScore = 1;
  return Math.min(objectScore + placeScore + bodyScore + sensoryScore + sceneFormationScore, 20);
}

function scoreFreshness(text, theme, scene) {
  const clicheHits = countWordHits(text, clichePhrases);
  const clicheScore = clicheHits === 0 ? 5 : clicheHits === 1 ? 2 : 0;
  const unusualObjects = ["白い傘","膜","味噌汁","ドアノブ","改札","ベンチ","ブランコ","通知","窓ガラス"];
  const unusualHits = countWordHits(text, unusualObjects);
  const uniqueScore = unusualHits >= 2 ? 7 : unusualHits >= 1 ? 5 : 3;
  const themeCoreHits = countWordHits(text, theme.coreWords);
  const naturalThemeScore = themeCoreHits >= 2 ? 5 : themeCoreHits >= 1 ? 3 : 1;
  const sceneHits = countWordHits(text, [...(scene.coreWords||[]), ...(scene.sideWords||[])]);
  const sceneFitScore = sceneHits >= 2 ? 3 : sceneHits >= 1 ? 2 : 1;
  return Math.min(clicheScore + uniqueScore + naturalThemeScore + sceneFitScore, 20);
}

function scoreResonance(text) {
  const explanationHits = countWordHits(text, explanationWords);
  const explanationScore = explanationHits === 0 ? 5 : explanationHits <= 1 ? 3 : 1;
  let lingeringScore = 0;
  if (/(ようだ|みたいだ|だった|ように見えた|のまま)$/.test(text)) lingeringScore = 6;
  else if (getMetaphorMarkerCount(text) >= 1) lingeringScore = 4;
  else lingeringScore = 2;
  const timeHits = countWordHits(text, timeStructureWords);
  const timeScore = normalizeHitScore(timeHits, 4, [2,1,0.5]);
  const sensoryHits = countWordHits(text, sensoryWords);
  const sensoryScore = normalizeHitScore(sensoryHits, 3, [2,1,0.5]);
  const directEmotionWords = ["悲しい","寂しい","つらい","苦しい","恥ずかしい","不安だ"];
  const directHits = countWordHits(text, directEmotionWords);
  const directScore = directHits === 0 ? 2 : 0;
  return Math.min(explanationScore + lingeringScore + timeScore + sensoryScore + directScore, 20);
}

function buildOverallLine(total) {
  if (total >= 90) return "非常によくできた比喩です。像・構造・余韻のバランスが高い水準でそろっています。";
  if (total >= 80) return "強い比喩です。全体としてよくまとまり、かなり印象に残ります。";
  if (total >= 70) return "良い比喩です。成立しており、はっきりした強みもあります。";
  if (total >= 60) return "比喩としての形は十分ありますが、まだ伸ばせる部分もあります。";
  if (total >= 50) return "比喩として読めますが、やや構造や具体性が弱めです。";
  return "方向性はありますが、まだ像や構造の芯が弱めです。";
}
function buildStrengthLine(key) {
  const map = {
    clarity: "何をどうたとえているかが読み取りやすく、文の焦点も安定しています。",
    structure: "お題の感覚とシーンの空気が、ひとつの像にうまくまとまっています。",
    concreteness: "物や場面、身体感覚が入っており、情景が立ち上がりやすいです。",
    freshness: "定番に寄りすぎず、それでいて無理のない比喩になっています。",
    resonance: "言い切りすぎず、読後に像や感情が残る終わり方になっています。"
  };
  return map[key];
}
function buildImproveLine(key) {
  const map = {
    clarity: "中心の像をひとつに絞ると、さらに伝わりやすくなります。",
    structure: "テーマの中核語や時間の流れをもう少し強く入れると、お題との結びつきが深まります。",
    concreteness: "物・場所・身体・感覚のどれかを一つ足すと、比喩の輪郭が強くなります。",
    freshness: "対象を半歩ずらしつつ、テーマの芯に近い語を保つと独自性が増します。",
    resonance: "説明を少し減らし、残る像や時間のにじみを強めると余韻が深まります。"
  };
  return map[key];
}

function buildFeedback(result, theme, scene, text) {
  const scoreMap = result.scores;
  const sorted = Object.entries(scoreMap).sort((a,b)=>b[1]-a[1]);
  const highest = sorted[0][0];
  const lowest = sorted[sorted.length-1][0];
  const structureCoreHits = countWordHits(text, theme.coreWords);
  const structureTimeHits = countWordHits(text, theme.timeWords);
  let strengthLine = buildStrengthLine(highest);
  if (highest === "structure" && structureCoreHits >= 2) strengthLine = "テーマの本質にかなり近い語や構造を拾えていて、感情の芯が見えています。";
  else if (highest === "resonance" && structureTimeHits >= 1) strengthLine = "あとから残る感じや広がる感じが入っていて、余韻が出ています。";
  return [buildOverallLine(result.totalScore), strengthLine, buildImproveLine(lowest)];
}

function evaluateMetaphor(answer, theme, scene) {
  const text = preprocess(answer);
  const clarity = scoreClarity(text);
  const structure = scoreStructure(text, theme, scene);
  const concreteness = scoreConcreteness(text);
  const freshness = scoreFreshness(text, theme, scene);
  const resonance = scoreResonance(text);
  const totalScore = clarity + structure + concreteness + freshness + resonance;
  const result = {
    themeText: theme.text,
    sceneText: scene.text,
    answer: text,
    totalScore,
    coreScores: { structure, concreteness },
    scores: { clarity, structure, concreteness, freshness, resonance },
    hintWords: theme.hintWords
  };
  result.feedback = buildFeedback(result, theme, scene, text);
  return result;
}

function loadSavedEntries() {
  const raw = localStorage.getItem(STORAGE_KEY);
  state.savedEntries = raw ? JSON.parse(raw) : [];
}
function saveCurrentResult() {
  if (!state.currentResult) return;
  const entry = { id:`entry-${Date.now()}`, ...state.currentResult, createdAt:new Date().toISOString() };
  state.savedEntries.push(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.savedEntries));
  renderRecords();
}
function deleteEntry(id) {
  state.savedEntries = state.savedEntries.filter(entry => entry.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.savedEntries));
  renderRecords();
}
window.deleteEntry = deleteEntry;

function bindEvents() {
  document.getElementById("nav-write").addEventListener("click", ()=>showScreen("screen-write"));
  document.getElementById("nav-records").addEventListener("click", ()=>{ renderRecords(); showScreen("screen-records"); });
  document.getElementById("change-theme").addEventListener("click", ()=>{ pickTheme(); updateWriteScreen(); });
  document.getElementById("change-scene").addEventListener("click", ()=>{ pickScene(); updateWriteScreen(); });
  document.getElementById("change-both").addEventListener("click", ()=>{ pickBoth(); updateWriteScreen(); });
  document.getElementById("answer-input").addEventListener("input", e=>{ document.getElementById("char-count").textContent = preprocess(e.target.value).length; });
  document.getElementById("evaluate-button").addEventListener("click", ()=>{
    const answer = document.getElementById("answer-input").value.trim();
    if (!answer) { alert("比喩を入力してください。"); return; }
    state.currentResult = evaluateMetaphor(answer, state.currentTheme, state.currentScene);
    renderResult(state.currentResult);
    showScreen("screen-result");
  });
  document.getElementById("save-button").addEventListener("click", ()=>{ saveCurrentResult(); alert("保存しました。"); });
  document.getElementById("retry-button").addEventListener("click", ()=>showScreen("screen-write"));
  document.getElementById("new-prompt-button").addEventListener("click", ()=>{
    document.getElementById("answer-input").value = "";
    document.getElementById("char-count").textContent = "0";
    pickBoth(); updateWriteScreen(); showScreen("screen-write");
  });
  document.getElementById("sort-newest").addEventListener("click", ()=>{ state.recordMode = "newest"; renderRecords(); });
  document.getElementById("sort-score").addEventListener("click", ()=>{ state.recordMode = "score"; renderRecords(); });
  document.getElementById("filter-all").addEventListener("click", ()=>{ state.recordFilter = "all"; renderRecords(); });
  document.getElementById("filter-top50").addEventListener("click", ()=>{ state.recordFilter = "top50"; renderRecords(); });
}
