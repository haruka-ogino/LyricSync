/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('users').insert([
    {
      id: '1',
      name: 'Haruka',
      nickname: 'Haruka',
      email: 'haruka@email.com',
    },
    {
      id: '2',
      name: 'Moa',
      nickname: 'Moa',
      email: 'moa@email.com',
    },
  ])
}
