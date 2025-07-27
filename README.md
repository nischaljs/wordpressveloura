
# 👗 Veloura – E-Commerce Clothing Shop

Welcome to **Veloura**, a modern and user-friendly e-commerce clothing store built with **WordPress**. Designed for both seamless customer experiences and easy admin management, Veloura lets you showcase and sell fashion effortlessly.

---

## ✨ Features

### 🔧 Admin Panel
- **Product Management**: Add, edit, and remove clothing items with images, prices, and descriptions.
- **Category Management**: Organize products by type (e.g., Tops, Skirts, T-Shirts), size, and color.
- **Customization Options**: Support for multiple sizes and colors per product.
- **Order Management**: View, confirm, and process customer orders directly from the dashboard.

### 🛒 Customer Experience
- **Shopping Cart**: Add and manage items before checkout.
- **Checkout Process**:
  - Review cart.
  - Fill in shipping details.
  - Choose payment method: **Cash on Delivery** or **Card**.
  - Place order securely.
- **Order Tracking**: Customers can log in to view order status and history.

---

## 🛤️ User Journey
1. **Browse Products**: Explore curated collections by category, color, or size.
2. **Add to Cart**: Select items and add them for purchase.
3. **Go to Cart**: Review selected items and adjust quantities.
4. **Checkout**: Enter shipping info and choose payment method.
5. **Order Confirmation**: Admin receives and confirms the order; customer gets confirmation.

---

## 🛠️ Technologies Used
- **WordPress** – Core platform for CMS and e-commerce
- **WooCommerce** – Powers product listings, cart, and checkout
- **PHP & MySQL** – Backend logic and database
- **HTML, CSS, JavaScript** – Frontend design and interactivity
- **Blocksy Theme** – Fast and customizable storefront design

---

## 🚀 Installation and Setup

### 1. Clone the Repository
```bash
git clone https://github.com/nischaljs/wordpressveloura.git
cd wordpressveloura


### 2. Set Up Local Server
- Install and start **XAMPP** (or any local server environment).
- Start **Apache** and **MySQL**.

### 3. Configure Database
- Open **phpMyAdmin** at `http://localhost/phpmyadmin`
- Create a new database:
  - **Database Name**: `cloth`
  - **Collation**: `utf8_general_ci`

### 4. Import Database (Seed the DB)
- Go to the **Import** tab in phpMyAdmin.
- Choose the SQL file from the project (cloth.sql from DatabaseFile).
- Click **Go** to import.

> ⚠️ Ensure the database name in the SQL file matches `cloth`, or update it accordingly.

### 5. Update WordPress Configuration
Edit `wp-config.php` with your database details:
```php
define('DB_NAME', 'cloth');
define('DB_USER', 'root');
define('DB_PASSWORD', '');
define('DB_HOST', 'localhost');
```

### 6. Run the Site
- Move the project folder into `htdocs` (e.g., `htdocs/clothes`).
- Visit: `http://localhost/clothes`

---

## 🔐 Default Login Credentials

### Admin Panel
- **Username**: `admin`
- **Password**: `admin@123`

> 💡 After first login, consider changing the password for security.

---

## 📂 Folder Structure (Key Files)
```
wordpressveloura/
├── wp-config.php          # Database configuration
├── wp-content/
│   ├── themes/            # Active theme: Blocksy
│   ├── plugins/           # WooCommerce, etc.
│   └── uploads/           # Product images
└── seed.sql               # Database seed file (optional)
```

---

## 🛠 Troubleshooting

### 🚫 Can't Access Admin?
If you see a redirect or 404:
- Check `siteurl` and `home` in `wp_options` table.
- Update them to: `http://localhost/clothes`

### 🔒 File Permission Errors?
Fix ownership (Linux/Mac):
```bash
sudo chown -R daemon:daemon /opt/lampp/htdocs/clothes
sudo chmod -R 755 wp-content/uploads
```

### 🧩 Plugin/Theme Causing Error?
Disable all plugins via database:
```sql
UPDATE wp_options SET option_value = 'a:0:{}' WHERE option_name = 'active_plugins';
```

Or rename the `plugins` folder to `plugins.hold`.

---


