export const datasets = {
  ecommerce: {
    label: 'E-Commerce System',
    icon: 'shopping-cart',
    tables: {
      users: [
        { id: 1, name: 'Alice Chen', email: 'alice@ops.io', city: 'New York', joined: '2023-01-15' },
        { id: 2, name: 'Bob Reyes', email: 'bob@ops.io', city: 'Los Angeles', joined: '2023-02-20' },
        { id: 3, name: 'Carol Smith', email: 'carol@ops.io', city: 'Chicago', joined: '2023-03-10' },
        { id: 4, name: 'David Kim', email: 'david@ops.io', city: 'New York', joined: '2023-04-05' },
        { id: 5, name: 'Eva Torres', email: 'eva@ops.io', city: 'Miami', joined: '2023-05-18' },
      ],
      products: [
        { id: 1, name: 'Tactical Drone', price: 1299.99, category: 'Electronics', stock: 15 },
        { id: 2, name: 'HUD Headset', price: 299.99, category: 'Electronics', stock: 42 },
        { id: 3, name: 'Combat Boots', price: 189.99, category: 'Apparel', stock: 78 },
        { id: 4, name: 'Night Vision Goggles', price: 899.99, category: 'Electronics', stock: 8 },
        { id: 5, name: 'Tactical Vest', price: 249.99, category: 'Apparel', stock: 33 },
        { id: 6, name: 'Signal Jammer', price: 599.99, category: 'Electronics', stock: 5 },
      ],
      orders: [
        { id: 1, user_id: 1, product_id: 1, amount: 1299.99, status: 'delivered', order_date: '2023-06-01' },
        { id: 2, user_id: 2, product_id: 2, amount: 299.99, status: 'shipped', order_date: '2023-06-03' },
        { id: 3, user_id: 1, product_id: 3, amount: 189.99, status: 'delivered', order_date: '2023-06-05' },
        { id: 4, user_id: 3, product_id: 4, amount: 899.99, status: 'processing', order_date: '2023-06-07' },
        { id: 5, user_id: 4, product_id: 2, amount: 299.99, status: 'delivered', order_date: '2023-06-08' },
        { id: 6, user_id: 5, product_id: 5, amount: 249.99, status: 'shipped', order_date: '2023-06-10' },
        { id: 7, user_id: 2, product_id: 6, amount: 599.99, status: 'delivered', order_date: '2023-06-12' },
      ],
    },
    collections: {
      users: [
        { _id: 1, name: 'Alice Chen', email: 'alice@ops.io', city: 'New York', orders: [1, 3] },
        { _id: 2, name: 'Bob Reyes', email: 'bob@ops.io', city: 'Los Angeles', orders: [2, 7] },
        { _id: 3, name: 'Carol Smith', email: 'carol@ops.io', city: 'Chicago', orders: [4] },
      ],
      products: [
        { _id: 1, name: 'Tactical Drone', price: 1299.99, category: 'Electronics', tags: ['drone', 'aerial', 'tactical'] },
        { _id: 2, name: 'HUD Headset', price: 299.99, category: 'Electronics', tags: ['audio', 'hud', 'tactical'] },
        { _id: 3, name: 'Combat Boots', price: 189.99, category: 'Apparel', tags: ['footwear', 'tactical'] },
      ],
    },
  },
  movies: {
    label: 'Movie Intelligence',
    icon: 'film',
    tables: {
      movies: [
        { id: 1, title: 'Ghost Protocol', year: 2011, genre: 'Action', director_id: 1, rating: 8.2 },
        { id: 2, title: 'Data Breach', year: 2019, genre: 'Thriller', director_id: 2, rating: 7.5 },
        { id: 3, title: 'Neural Storm', year: 2022, genre: 'Sci-Fi', director_id: 1, rating: 8.8 },
        { id: 4, title: 'Zero Day', year: 2020, genre: 'Action', director_id: 3, rating: 7.9 },
        { id: 5, title: 'Quantum Breach', year: 2023, genre: 'Sci-Fi', director_id: 2, rating: 9.1 },
      ],
      actors: [
        { id: 1, name: 'Marcus Veil', nationality: 'American', age: 42 },
        { id: 2, name: 'Lyra Stone', nationality: 'British', age: 35 },
        { id: 3, name: 'Zane Orion', nationality: 'Australian', age: 38 },
      ],
      ratings: [
        { id: 1, movie_id: 1, user: 'agent_x', score: 8, review: 'Intense action' },
        { id: 2, movie_id: 3, user: 'nova_7', score: 9, review: 'Mind-blowing' },
        { id: 3, movie_id: 5, user: 'cipher', score: 10, review: 'Perfect' },
        { id: 4, movie_id: 2, user: 'agent_x', score: 7, review: 'Good thriller' },
      ],
    },
    collections: {
      movies: [
        { _id: 1, title: 'Ghost Protocol', year: 2011, genre: 'Action', rating: 8.2, cast: ['Marcus Veil', 'Lyra Stone'] },
        { _id: 2, title: 'Neural Storm', year: 2022, genre: 'Sci-Fi', rating: 8.8, cast: ['Zane Orion'] },
        { _id: 3, title: 'Quantum Breach', year: 2023, genre: 'Sci-Fi', rating: 9.1, cast: ['Marcus Veil', 'Lyra Stone', 'Zane Orion'] },
      ],
    },
  },
  students: {
    label: 'Academy Records',
    icon: 'graduation-cap',
    tables: {
      students: [
        { id: 1, name: 'Aria Nova', age: 20, major: 'Computer Science', gpa: 3.9 },
        { id: 2, name: 'Kai Storm', age: 22, major: 'Data Science', gpa: 3.7 },
        { id: 3, name: 'Zoe Cipher', age: 21, major: 'Computer Science', gpa: 3.5 },
        { id: 4, name: 'Rex Quantum', age: 23, major: 'Cybersecurity', gpa: 3.8 },
        { id: 5, name: 'Luna Byte', age: 20, major: 'Data Science', gpa: 4.0 },
      ],
      courses: [
        { id: 1, name: 'Database Systems', credits: 4, instructor: 'Dr. Vector' },
        { id: 2, name: 'Machine Learning', credits: 3, instructor: 'Dr. Neural' },
        { id: 3, name: 'Cybersecurity', credits: 3, instructor: 'Dr. Cipher' },
        { id: 4, name: 'Data Structures', credits: 4, instructor: 'Dr. Stack' },
      ],
      marks: [
        { id: 1, student_id: 1, course_id: 1, score: 95, grade: 'A' },
        { id: 2, student_id: 1, course_id: 2, score: 88, grade: 'B+' },
        { id: 3, student_id: 2, course_id: 1, score: 82, grade: 'B' },
        { id: 4, student_id: 3, course_id: 3, score: 91, grade: 'A-' },
        { id: 5, student_id: 4, course_id: 3, score: 97, grade: 'A+' },
        { id: 6, student_id: 5, course_id: 2, score: 99, grade: 'A+' },
      ],
    },
    collections: {
      students: [
        { _id: 1, name: 'Aria Nova', major: 'Computer Science', gpa: 3.9, courses: ['Database Systems', 'Machine Learning'] },
        { _id: 2, name: 'Luna Byte', major: 'Data Science', gpa: 4.0, courses: ['Machine Learning', 'Data Structures'] },
      ],
    },
  },
  social: {
    label: 'Social Network',
    icon: 'users',
    tables: {
      users: [
        { id: 1, username: 'agent_zero', bio: 'Tactical specialist', followers: 1200 },
        { id: 2, username: 'nova_7', bio: 'Data analyst', followers: 890 },
        { id: 3, username: 'cipher_x', bio: 'Security researcher', followers: 2100 },
        { id: 4, username: 'byte_queen', bio: 'Full-stack dev', followers: 3400 },
      ],
      posts: [
        { id: 1, user_id: 1, content: 'SQL window functions are game-changing', likes: 245, created: '2024-01-10' },
        { id: 2, user_id: 2, content: 'MongoDB aggregation pipeline deep dive', likes: 189, created: '2024-01-11' },
        { id: 3, user_id: 3, content: 'CAP theorem explained simply', likes: 567, created: '2024-01-12' },
        { id: 4, user_id: 4, content: 'Normalization vs denormalization trade-offs', likes: 432, created: '2024-01-13' },
      ],
      comments: [
        { id: 1, post_id: 1, user_id: 2, text: 'Great explanation!', created: '2024-01-10' },
        { id: 2, post_id: 1, user_id: 3, text: 'RANK() vs DENSE_RANK() is key', created: '2024-01-10' },
        { id: 3, post_id: 3, user_id: 1, text: 'Finally understood CAP!', created: '2024-01-12' },
      ],
    },
    collections: {
      posts: [
        { _id: 1, author: 'agent_zero', content: 'SQL window functions', likes: 245, comments: [{ user: 'nova_7', text: 'Great!' }] },
        { _id: 2, author: 'cipher_x', content: 'CAP theorem explained', likes: 567, comments: [] },
      ],
    },
  },
};

export const defaultSQLByDataset = {
  ecommerce: `SELECT u.name, COUNT(o.id) as total_orders, SUM(o.amount) as total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.name
ORDER BY total_spent DESC;`,
  movies: `SELECT m.title, m.genre, m.rating, COUNT(r.id) as review_count
FROM movies m
LEFT JOIN ratings r ON m.id = r.movie_id
GROUP BY m.title
ORDER BY m.rating DESC;`,
  students: `SELECT s.name, c.name as course, m.score, m.grade
FROM students s
JOIN marks m ON s.id = m.student_id
JOIN courses c ON m.course_id = c.id
ORDER BY m.score DESC;`,
  social: `SELECT u.username, COUNT(p.id) as posts, SUM(p.likes) as total_likes
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
GROUP BY u.username
ORDER BY total_likes DESC;`,
};
