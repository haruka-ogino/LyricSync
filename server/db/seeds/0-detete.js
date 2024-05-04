/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('lyrics').del()
  await knex('languages').del()
  await knex('songs').del()
  await knex('collections').del()
  await knex('users').del()
}
