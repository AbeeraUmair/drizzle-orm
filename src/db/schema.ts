import { mysqlTable, serial, varchar, int, timestamp } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
  id: serial('id').primaryKey(), // INT UNSIGNED AUTO_INCREMENT
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const books = mysqlTable('books', {
  id: serial('id').primaryKey(), // INT UNSIGNED AUTO_INCREMENT
  title: varchar('title', { length: 255 }).notNull(),
  author: varchar('author', { length: 255 }).notNull(),
  price: int('price').notNull(),
  stock: int('stock').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const orders = mysqlTable('orders', {
  id: serial('id').primaryKey(), // INT UNSIGNED AUTO_INCREMENT
  userId: int('user_id').notNull(), // Ensure this matches the type of users.id
  bookId: int('book_id').notNull(), // Ensure this matches the type of books.id
  quantity: int('quantity').notNull(),
  totalPrice: int('total_price').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});
