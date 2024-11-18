import { NextResponse } from 'next/server';
import { users, books, orders } from '@/db/schema';
import mysql  from 'mysql2/promise';
import { drizzle } from 'drizzle-orm/mysql2';

const poolConnection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'shop_db',
  password: process.env.password,
});

const db = drizzle(poolConnection);

export async function POST(request: Request) {
  const body = await request.json();

  const { name, email, password, title, author, price, stock, userId, bookId, quantity } = body;

  try {
    const user = await db.insert(users).values([{ name, email, password }]);
    const book = await db.insert(books).values([{ title, author, price: parseInt(price), stock: parseInt(stock) }]);
    const order = await db.insert(orders).values([{
      userId: parseInt(userId),
      bookId: parseInt(bookId),
      quantity: parseInt(quantity),
      totalPrice: parseInt(price) * parseInt(quantity),
    }]);
console.log("data submit hogya h")
    return NextResponse.json({ message: 'Data inserted successfully!', user, book, order });
  } catch (error) {
    console.error('Error inserting data:', error);
    return NextResponse.json({ message: 'Error inserting data.', error }, { status: 500 });
  }
}