/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('lyrics', (table) => {
    table.increments('id').primary
    table.number('original_lang').references('languages.id')
    table.number('trans_lang').references('languages.id')
    table.string('original_lyric')
    table.string('trans_lyric')
    table.boolean('romanisation')
    table.string('romanised_text')
    table.integer('song_id').references('songs.id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('lyrics')
}
