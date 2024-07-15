/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('collections').insert([
    {
      id: 1,
      name: 'favorite',
      user_id: 'auth0|660629f581e55eb92186427f',
    },
    {
      id: 2,
      name: 'frequently played',
      user_id: '2',
    },
    {
      id: 3,
      name: 'favorite',
      user_id: 'auth0|666a68061c037bdf73501cf4',
    },
  ])
}
