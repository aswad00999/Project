-- Create the table
CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  price DECIMAL(10,2),
  category VARCHAR(50),
  image_url VARCHAR(255),
  description TEXT
);

-- Insert 10 dummy products
INSERT INTO products (name, price, category, image_url, description) VALUES
('Elegant Women Heels', 3499.00, 'Women', 'https://images.unsplash.com/photo-1600181953659-bfdbbcdfb8b6?auto=format&fit=crop&w=600&q=80', 'Stylish and elegant high heels perfect for formal occasions.'),
('Casual Men Sneakers', 2499.00, 'Men', 'https://images.unsplash.com/photo-1606811842652-fd749ed7c8f2?auto=format&fit=crop&w=600&q=80', 'Comfortable sneakers for everyday casual wear.'),
('Kids Sporty Shoes', 1999.00, 'Kids', 'https://images.unsplash.com/photo-1615398315181-c5e8271e374e?auto=format&fit=crop&w=600&q=80', 'Durable and sporty shoes for active kids.'),
('Classic Leather Shoes', 4599.00, 'Men', 'https://images.unsplash.com/photo-1618354691373-bd983fae5340?auto=format&fit=crop&w=600&q=80', 'Premium leather shoes for office and formal events.'),
('Trendy Women Sandals', 1799.00, 'Women', 'https://images.unsplash.com/photo-1618840596550-3d7b18db3f51?auto=format&fit=crop&w=600&q=80', 'Lightweight and colorful sandals for summer.'),
('Boys Casual Loafers', 1899.00, 'Kids', 'https://images.unsplash.com/photo-1562183241-b937f1e884fa?auto=format&fit=crop&w=600&q=80', 'Smart loafers for young boys for casual outings.'),
('Formal Oxford Shoes', 4999.00, 'Men', 'https://images.unsplash.com/photo-1634722803029-06daccbd5d0d?auto=format&fit=crop&w=600&q=80', 'Elegant oxford style shoes for formal wear.'),
('Girls Glitter Flats', 1599.00, 'Kids', 'https://images.unsplash.com/photo-1630792648387-d5266b8e13a3?auto=format&fit=crop&w=600&q=80', 'Sparkling flat shoes perfect for parties.'),
('Women Sports Trainers', 2899.00, 'Women', 'https://images.unsplash.com/photo-1603808033192-082d6919d7fb?auto=format&fit=crop&w=600&q=80', 'Supportive trainers for jogging and workouts.'),
('Men Trekking Boots', 3999.00, 'Men', 'https://images.unsplash.com/photo-1621401296822-9d97c80857c0?auto=format&fit=crop&w=600&q=80', 'Strong grip boots ideal for hiking and trekking.');
