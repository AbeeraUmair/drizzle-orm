'use client';

import { useState } from 'react';

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    title: '',
    author: '',
    price: '',
    stock: '',
    userId: '',
    bookId: '',
    quantity: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Data submitted successfully!');
        setFormData({
          name: '',
          email: '',
          password: '',
          title: '',
          author: '',
          price: '',
          stock: '',
          userId: '',
          bookId: '',
          quantity: '',
        });
      } else {
        alert('Failed to submit data.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting data.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-6">Data Entry Form</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
        <h2 className="text-lg font-semibold mb-4">User Details</h2>
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        <h2 className="text-lg font-semibold mt-6 mb-4">Book Details</h2>
        <div className="space-y-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Book Title"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Author"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Stock"
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        <h2 className="text-lg font-semibold mt-6 mb-4">Order Details</h2>
        <div className="space-y-4">
          <input
            type="number"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            placeholder="User ID"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="number"
            name="bookId"
            value={formData.bookId}
            onChange={handleChange}
            placeholder="Book ID"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Quantity"
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}