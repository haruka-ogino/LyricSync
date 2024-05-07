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
        'Mis días sin ti son tan oscuros\nTan largos, tan grises, mis días sin ti\nMis días sin ti son tan absurdos\nTan agrios, tan duros, mis días sin ti\n\n\nMis días sin ti no tienen noches\nSi alguna aparece, es inútil dormir\nMis días sin ti son un derroche\nLas horas no tienen principio ni fin\n\n\nTan faltos de aire\nTan llenos de nada\nChatarra inservible, basura en el suelo, oh-oh-oh\nMoscas en la casa\n\n\nMis días sin ti son como un cielo\nSin lunas plateadas ni rastros de sol\nMis días sin ti son solo un eco\nQue siempre repite la misma canción\n\n\nTan faltos de aire\nTan llenos de nada\nChatarra inservible, basura en el suelo, oh-oh-oh\nMoscas en la casa\n\n\nPateando las piedras, aún sigo esperando que vuelvas conmigo\nAún sigo buscando en las caras de ancianos pedazos de niño\nCazando motivos que me hagan creer que aún me encuentro con vida\nMordiendo mis uñas, ahogándome en llanto, extrañándote tanto\n\n\nMis días sin ti\nMis días sin ti\nMis días sin ti\nCómo duelen los días sin ti\nSin ti\nSin ti\nY, y, y, y',
      trans_lyric: 'test - 테스트',
      romanisation: false,
      romanised_text: '',
      song_id: 4,
    },
  ])
}
