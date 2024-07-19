/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('lyrics').insert([
    {
      id: 1,
      original_lang: 1,
      trans_lang: 2,
      original_lyric: 'Every night in my dreams\n\n I see you, I feel you',
      trans_lyric: 'test - 테스트',
      romanisation: false,
      romanised_text: '',
      song_id: 1,
    },
    {
      id: 2,
      original_lang: 2,
      trans_lang: 1,
      original_lyric:
        'Mis días sin ti son tan oscuros\nTan largos, tan grises, mis días sin ti\nMis días sin ti son tan absurdos\nTan agrios, tan duros, mis días sin ti\n\nMis días sin ti no tienen noches\nSi alguna aparece, es inútil dormir\nMis días sin ti son un derroche\nLas horas no tienen principio ni fin\n\nTan faltos de aire\nTan llenos de nada\nChatarra inservible, basura en el suelo, oh-oh-oh\nMoscas en la casa\n\nMis días sin ti son como un cielo\nSin lunas plateadas ni rastros de sol\nMis días sin ti son solo un eco\nQue siempre repite la misma canción\n\nTan faltos de aire\nTan llenos de nada\nChatarra inservible, basura en el suelo, oh-oh-oh\nMoscas en la casa\n\nPateando las piedras, aún sigo esperando que vuelvas conmigo\nAún sigo buscando en las caras de ancianos pedazos de niño\nCazando motivos que me hagan creer que aún me encuentro con vida\nMordiendo mis uñas, ahogándome en llanto, extrañándote tanto\n\nMis días sin ti\nMis días sin ti\nMis días sin ti\nCómo duelen los días sin ti\nSin ti\nSin ti...',
      trans_lyric:
        "My days without you are so dark,\nSo long, so grey, my days without you\nMy days without so are so absurd,\nSo bitter, so hard, my days without you\n\nMy days without you don't have nights\nIf some appear, it's useless to sleep\nMy days without you are a waste\nHours don't have start, nor end\n\nSo lacking of air\nSo filled with nothing\nUseless junk, trash on the ground\nFlies in the house\n\nMy days without you are like a sky\nWithout silver moons, nor traces of sun\nMy days without you are only an echo\nThat always repeats the same song\n\nSo lacking of air\nSo filled with nothing\nUseless junk, trash on the ground\nFlies in the house\n\nKicking stones, I still continue thinking that you will return to me\nI still continue looking the faces of elderly pieces of children\nHunting motives that make me believe that I am still alive\nBiting my nails, drowning in tears, missing you dearly\n\nMy days without you\nMy days without you\nMy days without you\nHow they hurt, days without you\nWithout you\nWithout you...",
      romanisation: false,
      romanised_text: '',
      song_id: 4,
    },
    {
      id: 3,
      original_lang: 4,
      trans_lang: 1,
      original_lyric:
        '暗闇に震えてる 君の声聞こえたよ\n見えない消えない 時の中で何か探してた\nどうして望んだもの 見えそうで見えなくて\nバイト帰り 君と二人 待ち合わせた夜\n\n自転車の後ろに 君の体温乗せて\n明け方に翔る 静寂の道を負ける戦はしないよ\nキラキラ二人だけの朝と自由\n\n両手高く上げて この地球を支えて 歌った僕ら\n天に届け 舞い上がれ Oh Yeah！（Oh Yeah！）\nもう一度 あの日に戻れるとしても 同じ道選ぶだろう\n一つになれ 舞い上がれ Oh Yeah！（Oh Yeah！）近づいている\n\n朝焼けの校庭に 埋めた君への手紙\n一つ前の駅で降りて 超えた歩道橋\n何気ない思い出と 痛みの数並べたって\n遠いあの日 君と二人 約束した朝\n\nいつからか少年は涙のわけを知り\n心で泣いて顔は笑うんだ 咲いて歩いてゆくんだ\n午前9時 街が動く 二人乗せて\n\n両手高く上げて この地球を支えて歌った僕ら\n天に届け 舞い上がれ Oh Yeah！（Oh Yeah！）\nもう一度あの日に戻れるとしても 同じ道選ぶだろう\n一つになれ 舞い上がれ Oh Yeah！（Oh Yeah！）近づいている\n\n自転車の後ろに 君の体温乗せて\n明け方に翔る 静寂の道を負ける戦はしないよ\nキラキラ二人だけの朝と自由\n\n両手高く上げて この地球を支えて歌った僕ら\n天に届け 舞い上がれ Oh Yeah！（Oh Yeah！）\nもう一度あの日に戻れるとしても 同じ道選ぶだろう\n一つになれ 舞い上がれ Oh Yeah！（Oh Yeah！）近づいている\nWow wow wow wow wow...',
      trans_lyric:
        "I heard your voice, trembling in the darkness\nWithin time never visible and never ending, I was searching for something\nWhy does it feel like I can see the things I desire, but I can't?\nThe night I met with you on the way home from work\n\nI'll carry your warmth on the back of my bike, and toward the dawn\nWe'll dash down the silent street - I won't fight a battle I can only lose\nA new morning and freedom shine just for us\n\nWe raised both hands high and sang to hold up this planet\nDance up toward the heavens, Oh yeah!\nEven if we could go back to that day, we'd probably choose the same path\nDance upward as one, Oh yeah! We're getting closer\n\nThe letter to you that I buried in the schoolyard bathed in morning light\nI got off the train at the station before my own and crossed the footbridge\nEven if I lined up the nonchalant memories and all the painful times\nIn the morning on that day long ago, I promised you\n\nAt some point young boys learn the reason for their tears, and in their hearts\nThey cry but their faces laugh, they bloom and start to walk forward\nAt nine in the morning the town starts to move, with the two of us on board\n\nWe raised both hands high and sang to hold up this planet\nDance up toward the heavens, Oh yeah!\nEven if we could go back to that day, we'd probably choose the same path\nDance upward as one, Oh yeah! We're getting closer\n\nI'll carry your warmth on the back of my bike, and toward the dawn\nWe'll dash down the silent street - I won't fight a battle I can only lose\nA new morning and freedom shine just for us\n\nWe raised both hands high and sang to hold up this planet\nDance up toward the heavens, Oh yeah!\nEven if we could go back to that day, we'd probably choose the same path\nDance upward as one, Oh yeah! We're getting closer\nWow Wow...\n",
      romanisation: false,
      romanised_text: '',
      song_id: 5,
    },
    {
      id: 4,
      original_lang: 4,
      trans_lang: 1,
      original_lyric:
        '暗闇に震えてる 君の声聞こえたよ\n見えない消えない 時の中で何か探してた\nどうして望んだもの 見えそうで見えなくて\nバイト帰り 君と二人 待ち合わせた夜\n\n自転車の後ろに 君の体温乗せて\n明け方に翔る 静寂の道を負ける戦はしないよ\nキラキラ二人だけの朝と自由\n\n両手高く上げて この地球を支えて 歌った僕ら\n天に届け 舞い上がれ Oh Yeah！（Oh Yeah！）\nもう一度 あの日に戻れるとしても 同じ道選ぶだろう\n一つになれ 舞い上がれ Oh Yeah！（Oh Yeah！）近づいている\n\n朝焼けの校庭に 埋めた君への手紙\n一つ前の駅で降りて 超えた歩道橋\n何気ない思い出と 痛みの数並べたって\n遠いあの日 君と二人 約束した朝\n\nいつからか少年は涙のわけを知り\n心で泣いて顔は笑うんだ 咲いて歩いてゆくんだ\n午前9時 街が動く 二人乗せて\n\n両手高く上げて この地球を支えて歌った僕ら\n天に届け 舞い上がれ Oh Yeah！（Oh Yeah！）\nもう一度あの日に戻れるとしても 同じ道選ぶだろう\n一つになれ 舞い上がれ Oh Yeah！（Oh Yeah！）近づいている\n\n自転車の後ろに 君の体温乗せて\n明け方に翔る 静寂の道を負ける戦はしないよ\nキラキラ二人だけの朝と自由\n\n両手高く上げて この地球を支えて歌った僕ら\n天に届け 舞い上がれ Oh Yeah！（Oh Yeah！）\nもう一度あの日に戻れるとしても 同じ道選ぶだろう\n一つになれ 舞い上がれ Oh Yeah！（Oh Yeah！）近づいている\nWow wow wow wow wow...',
      trans_lyric:
        "I heard your voice, trembling in the darkness\nWithin time never visible and never ending, I was searching for something\nWhy does it feel like I can see the things I desire, but I can't?\nThe night I met with you on the way home from work\n\nI'll carry your warmth on the back of my bike, and toward the dawn\nWe'll dash down the silent street - I won't fight a battle I can only lose\nA new morning and freedom shine just for us\n\nWe raised both hands high and sang to hold up this planet\nDance up toward the heavens, Oh yeah!\nEven if we could go back to that day, we'd probably choose the same path\nDance upward as one, Oh yeah! We're getting closer\n\nThe letter to you that I buried in the schoolyard bathed in morning light\nI got off the train at the station before my own and crossed the footbridge\nEven if I lined up the nonchalant memories and all the painful times\nIn the morning on that day long ago, I promised you\n\nAt some point young boys learn the reason for their tears, and in their hearts\nThey cry but their faces laugh, they bloom and start to walk forward\nAt nine in the morning the town starts to move, with the two of us on board\n\nWe raised both hands high and sang to hold up this planet\nDance up toward the heavens, Oh yeah!\nEven if we could go back to that day, we'd probably choose the same path\nDance upward as one, Oh yeah! We're getting closer\n\nI'll carry your warmth on the back of my bike, and toward the dawn\nWe'll dash down the silent street - I won't fight a battle I can only lose\nA new morning and freedom shine just for us\n\nWe raised both hands high and sang to hold up this planet\nDance up toward the heavens, Oh yeah!\nEven if we could go back to that day, we'd probably choose the same path\nDance upward as one, Oh yeah! We're getting closer\nWow Wow...\n",
      romanisation: false,
      romanised_text: '',
      song_id: 6,
    },
  ])
}
