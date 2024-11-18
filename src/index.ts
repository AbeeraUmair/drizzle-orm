 import 'dotenv/config';
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const poolConnection = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "shop_db",
  password:process.env.password,
});
const db = drizzle({ client: poolConnection });
export default db;

  // async function populateTables() {
  //   try {
  //     // Insert into `users`
  //     await db.insert(users).values([
  //       { name: 'John Doe', email: 'john.doe@example.com', password: 'securepassword123' },
  //       { name: 'Jane Smith', email: 'jane.smith@example.com', password: 'securepassword456' },
  //     ]);
  //  // Insert into `books`
  //     await db.insert(books).values([
  //       { title: 'Learn TypeScript', author: 'Author One', price: 20, stock: 50 },
  //       { title: 'Mastering Next.js', author: 'Author Two', price: 25, stock: 30 },
  //     ]);
  
  //     // Insert into `orders`
  //     await db.insert(orders).values([
  //       {
  //         userId: 1,
  //         bookId: 1,
  //         quantity: 2,
  //         totalPrice: 40,
  //       },
  //       {
  //         userId: 2,
  //         bookId:2,
  //         quantity: 1,
  //         totalPrice: 25,
  //       },
  //     ]);
  
  //     console.log('Tables populated successfully!');
  //   } catch (err) {
  //     console.error('Error populating tables:', err);
  //   }
  // }
  
  // populateTables();