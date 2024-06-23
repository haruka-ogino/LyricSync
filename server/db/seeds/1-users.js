/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('users').insert([
    {
      id: 'auth0|660629f581e55eb92186427f',
      // name: 'Haruka',
      nickname: 'Lucas',
      // email: 'haruka@email.com',
    },
    {
      id: '2',
      // name: 'Moa',
      nickname: 'Moa',
      // email: 'moa@email.com',
    },
  ])
}
