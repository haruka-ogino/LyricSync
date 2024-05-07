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
  ])
}
