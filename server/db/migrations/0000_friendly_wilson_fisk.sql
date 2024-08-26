CREATE TABLE `collections` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`user_id` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `languages` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lyrics` (
	`id` integer PRIMARY KEY NOT NULL,
	`oroginal_lang` integer,
	`trans_Lang` integer,
	`original_lyric` text,
	`trans_lyric` text,
	`romanisation` integer,
	`romanised_text` text,
	`song` integer NOT NULL,
	FOREIGN KEY (`song`) REFERENCES `songs`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `songs` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`artist` text,
	`collection_id` integer NOT NULL,
	FOREIGN KEY (`collection_id`) REFERENCES `collections`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`nickname` text NOT NULL
);
