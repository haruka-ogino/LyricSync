/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('songs', (table) => {
    table.increments('id').primary
    table.string('title')
    table.string('artist')
    table.integer('playlist_id').references('playlists.id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('songs')
}
