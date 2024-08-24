import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  nickname: text('nickname').notNull(),
})

export const collections = sqliteTable('collections', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
})

export const songs = sqliteTable('songs', {
  id: integer('id').primaryKey(),
  title: text('title').notNull(),
  artist: text('artist'),
  collectionId: integer('collection_id')
    .notNull()
    .references(() => collections.id, { onDelete: 'cascade' }),
})

export const lyrics = sqliteTable('lyrics', {
  id: integer('id').primaryKey(),
  originalLang: integer('oroginal_lang'),
  transLang: integer('trans_Lang'),
  originalLyric: text('original_lyric'),
  transLyric: text('trans_lyric'),
  romanisation: integer('romanisation', { mode: 'boolean' }),
  romanisedText: text('romanised_text'),
  songId: integer('song')
    .notNull()
    .references(() => songs.id, { onDelete: 'cascade' }),
})

export const languages = sqliteTable('languages', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
})