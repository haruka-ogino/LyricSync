/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('songs').insert([
    {
      id: 1,
      title: 'My Heart Will Go On',
      artist: 'Celine Dion',
      collection_id: 1,
    },
    {
      id: 2,
      title: 'Dejavu',
      artist: 'Olivia Rodrigo',
      collection_id: 1,
    },
    {
      id: 3,
      title: 'Seven',
      artist: 'Jung Kook',
      collection_id: 1,
    },
    {
      id: 4,
      title: 'Moscas en la Casa',
      artist: 'Shakira',
      collection_id: 1,
    },
    {
      id: 5,
      title: 'Oh Yeah!',
      artist: 'Arashi',
      collection_id: 1,
    },
  ])
}
