/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('collections').insert([
    {
      id: 1,
      name: 'favorite',
      user_id: 1,
    },
  ])
}
