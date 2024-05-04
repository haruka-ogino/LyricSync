/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('lyrics').insert([
    {
      id: 1,
      original_lan: 1,
      trans_lang: 2,
      original_lyric: 'Every night in my dreams\n\n I see you, I feel you',
      trans_lyric: 'test - 테스트',
      romanisation: false,
      romanised_text: '',
      song_id: 1,
    },
  ])
}
