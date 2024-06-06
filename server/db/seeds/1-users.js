/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('users').insert([
    {
      id: '1',
      name: 'Haruka',
    },
    {
      id: '2',
      name: 'Moa',
    },
  ])
}
