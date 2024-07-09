/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('languages').insert([
    {
      id: 1,
      name: 'English',
    },
    {
      id: 2,
      name: 'Spanish',
    },
    {
      id: 3,
      name: 'Korean',
    },
    {
      id: 4,
      name: 'Japanese',
    },
  ])
}
