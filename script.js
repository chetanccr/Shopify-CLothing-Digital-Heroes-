let cartItems = [];
let wishlistItems = [];

// PRODUCT DATA

const trendingProducts = [
  { id:'t1',  name:'Oversized Graphic Tee',   brand:'H&M',          price:799,  img:'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=500', tag:'NEW' },
  { id:'t2',  name:'Slim Fit Chinos',          brand:'Zara',         price:1499, img:'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=500',  tag:'TRENDING' },
  { id:'t3',  name:'Floral Wrap Dress',        brand:'Mango',        price:2199, img:'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=500', tag:'HOT' },
  { id:'t4',  name:'Denim Jacket',             brand:"Levi's",       price:2999, img:'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?q=80&w=500',   tag:'NEW' },
  { id:'t5',  name:'Striped Polo Shirt',       brand:'U.S. Polo',    price:999,  img:'https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?q=80&w=500', tag:'TRENDING' },
  { id:'t6',  name:'High Waist Joggers',       brand:'Puma',         price:1299, img:'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=500',   tag:'NEW' },
  { id:'t7',  name:'Flowy Maxi Skirt',         brand:'Zara',         price:1799, img:'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=500', tag:'HOT' },
  { id:'t8',  name:'Classic White Sneakers',   brand:'Nike',         price:3499, img:'https://images.unsplash.com/photo-1603787081207-362bcef7c144?q=80&w=500', tag:'TRENDING' },
  { id:'t9',  name:'Linen Blazer',             brand:'Jack & Jones', price:3299, img:'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=500', tag:'NEW' },
  { id:'t10', name:'Printed Crop Top',         brand:'H&M',          price:699,  img:'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80&w=500', tag:'HOT' },
  { id:'t11', name:'Wide Leg Trousers',        brand:'Mango',        price:1899, img:'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=500', tag:'TRENDING' },
  { id:'t12', name:'Quilted Puffer Vest',      brand:'Roadster',     price:1599, img:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=500', tag:'NEW' },
  { id:'t13', name:'Tie-Dye Hoodie',           brand:'H&M',          price:1199, img:'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=500',   tag:'HOT' },
  { id:'t14', name:'Straight Cut Jeans',       brand:"Levi's",       price:2499, img:'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?q=80&w=500',   tag:'TRENDING' },
  { id:'t15', name:'Ribbed Knit Sweater',      brand:'Zara',         price:1699, img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=500', tag:'NEW' },
  { id:'t16', name:'Cargo Shorts',             brand:'Roadster',     price:899,  img:'https://images.unsplash.com/photo-1600717535275-0b18ede2f7fc?q=80&w=500', tag:'HOT' },
  { id:'t17', name:'Satin Slip Dress',         brand:'Mango',        price:2699, img:'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=500', tag:'TRENDING' },
  { id:'t18', name:'Utility Shirt Jacket',     brand:'Jack & Jones', price:2199, img:'https://images.unsplash.com/photo-1608234808654-2a8875faa7fd?q=80&w=500', tag:'NEW' },
];

const menProducts = [
  { id:'m1',  name:'Classic Oxford Shirt',    brand:'U.S. Polo',    price:1299, img:'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=500' },
  { id:'m2',  name:'Slim Fit Jeans',          brand:"Levi's",       price:2199, img:'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=500' },
  { id:'m3',  name:'Business Casual Blazer',  brand:'Jack & Jones', price:3999, img:'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=500' },
  { id:'m4',  name:'Printed Casual Shirt',    brand:'Roadster',     price:899,  img:'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=500' },
  { id:'m5',  name:'Muscle Fit T-Shirt',      brand:'H&M',          price:599,  img:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500' },
  { id:'m6',  name:'Chino Trousers',          brand:'Zara',         price:1799, img:'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=500' },
  { id:'m7',  name:'Denim Shirt',             brand:"Levi's",       price:1499, img:'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=500' },
  { id:'m8',  name:'Relaxed Fit Joggers',     brand:'Nike',         price:1999, img:'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=500' },
  { id:'m9',  name:'Formal Waistcoat',        brand:'Jack & Jones', price:2499, img:'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=500' },
  { id:'m10', name:'Mandarin Collar Kurta',   brand:'Manyavar',     price:1799, img:'https://images.unsplash.com/photo-1600717535275-0b18ede2f7fc?q=80&w=500' },
  { id:'m11', name:'Striped Rugby Tee',       brand:'U.S. Polo',    price:799,  img:'https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?q=80&w=500' },
  { id:'m12', name:'Trench Coat',             brand:'Zara',         price:4999, img:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=500' },
  { id:'m13', name:'Cargo Combat Pants',      brand:'Roadster',     price:1599, img:'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=500' },
  { id:'m14', name:'Linen Summer Shorts',     brand:'H&M',          price:699,  img:'https://images.unsplash.com/photo-1600717535275-0b18ede2f7fc?q=80&w=500' },
  { id:'m15', name:'Woollen Pullover',        brand:'Jack & Jones', price:2199, img:'https://images.unsplash.com/photo-1608234808654-2a8875faa7fd?q=80&w=500' },
];

const womenProducts = [
  { id:'w1',  name:'Floral Midi Dress',       brand:'Zara',   price:2499, img:'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=500' },
  { id:'w2',  name:'High Rise Skinny Jeans',  brand:"Levi's", price:2299, img:'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=500' },
  { id:'w3',  name:'Puff Sleeve Blouse',      brand:'H&M',    price:999,  img:'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80&w=500' },
  { id:'w4',  name:'A-Line Mini Skirt',       brand:'Mango',  price:1499, img:'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=500' },
  { id:'w5',  name:'Ribbed Crop Top',         brand:'Zara',   price:799,  img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=500' },
  { id:'w6',  name:'Wrap Maxi Dress',         brand:'Mango',  price:2899, img:'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=500' },
  { id:'w7',  name:'Formal Trouser Suit',     brand:'Zara',   price:5499, img:'https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?q=80&w=500' },
  { id:'w8',  name:'Tie-Dye Leggings',        brand:'H&M',    price:699,  img:'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=500' },
  { id:'w9',  name:'Off-Shoulder Top',        brand:'Mango',  price:1199, img:'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?q=80&w=500' },
  { id:'w10', name:'Denim Jumpsuit',          brand:"Levi's", price:3299, img:'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?q=80&w=500' },
  { id:'w11', name:'Flowy Palazzo Pants',     brand:'Roadster',price:1099,img:'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=500' },
  { id:'w12', name:'Satin Evening Gown',      brand:'Mango',  price:6499, img:'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=500' },
  { id:'w13', name:'Checked Blazer',          brand:'Zara',   price:3999, img:'https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?q=80&w=500' },
  { id:'w14', name:'Printed Kurta Set',       brand:'Biba',   price:1799, img:'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?q=80&w=500' },
  { id:'w15', name:'Knitted Cardigan',        brand:'H&M',    price:1399, img:'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=500' },
];

const kidsProducts = [
  { id:'k1',  name:'Cartoon Print T-Shirt',   brand:'H&M Kids',      price:399,  img:'https://images.unsplash.com/photo-1519278409-1f56fdda7fe5?q=80&w=500' },
  { id:'k2',  name:'Denim Dungaree',           brand:'Zara Kids',     price:1299, img:'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=500' },
  { id:'k3',  name:'Floral Frock',             brand:'Mothercare',    price:799,  img:'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?q=80&w=500' },
  { id:'k4',  name:'Jogger Set',               brand:'Nike Kids',     price:1499, img:'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?q=80&w=500' },
  { id:'k5',  name:'School Uniform Shirt',     brand:'Allen Solly Jr',price:499,  img:'https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?q=80&w=500' },
  { id:'k6',  name:'Hooded Sweatshirt',        brand:'H&M Kids',      price:899,  img:'https://images.unsplash.com/photo-1519278409-1f56fdda7fe5?q=80&w=500' },
  { id:'k7',  name:'Printed Leggings',         brand:'Zara Kids',     price:599,  img:'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?q=80&w=500' },
  { id:'k8',  name:'Party Wear Dress',         brand:'Mothercare',    price:1699, img:'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?q=80&w=500' },
  { id:'k9',  name:'Shorts & Tee Combo',       brand:'Nike Kids',     price:999,  img:'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?q=80&w=500' },
  { id:'k10', name:'Winter Puffer Jacket',     brand:'H&M Kids',      price:2299, img:'https://images.unsplash.com/photo-1491013516836-7db643ee125a?q=80&w=500' },
  { id:'k11', name:'Striped Polo T-Shirt',     brand:'Allen Solly Jr',price:449,  img:'https://images.unsplash.com/photo-1519278409-1f56fdda7fe5?q=80&w=500' },
  { id:'k12', name:'Floral Skirt Set',         brand:'Zara Kids',     price:1099, img:'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?q=80&w=500' },
  { id:'k13', name:'Cargo Pants',              brand:'Nike Kids',     price:1199, img:'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?q=80&w=500' },
  { id:'k14', name:'Knitted Sweater',          brand:'Mothercare',    price:699,  img:'https://images.unsplash.com/photo-1491013516836-7db643ee125a?q=80&w=500' },
  { id:'k15', name:'Ethnic Kurta Pyjama',      brand:'Manyavar Kids', price:1399, img:'https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?q=80&w=500' },
];

const brandProducts = {
  levis: [
    { id:'lv1',  name:'501 Original Jeans',       brand:"Levi's", price:3499, img:'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=500' },
    { id:'lv2',  name:'512 Slim Taper Jeans',      brand:"Levi's", price:3299, img:'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?q=80&w=500' },
    { id:'lv3',  name:'Denim Trucker Jacket',      brand:"Levi's", price:4999, img:'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?q=80&w=500' },
    { id:'lv4',  name:'Classic Graphic Tee',       brand:"Levi's", price:999,  img:'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=500' },
    { id:'lv5',  name:'Ribcage Wide Leg Jeans',    brand:"Levi's", price:3799, img:'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=500' },
    { id:'lv6',  name:'Premium Stretch Jeans',     brand:"Levi's", price:2999, img:'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=500' },
    { id:'lv7',  name:'Oversized Plaid Shirt',     brand:"Levi's", price:1799, img:'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=500' },
    { id:'lv8',  name:'High Rise Mom Jeans',       brand:"Levi's", price:3199, img:'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=500' },
    { id:'lv9',  name:'Sherpa Lined Jacket',       brand:"Levi's", price:5499, img:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=500' },
    { id:'lv10', name:'Relaxed Cargo Pants',       brand:"Levi's", price:2499, img:'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=500' },
    { id:'lv11', name:'White Slim Fit Shirt',      brand:"Levi's", price:1499, img:'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=500' },
    { id:'lv12', name:'Bootcut Jeans',             brand:"Levi's", price:2899, img:'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=500' },
  ],
  zara: [
    { id:'za1',  name:'Linen Blend Shirt',         brand:'Zara', price:2299, img:'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=500' },
    { id:'za2',  name:'Floral Midi Skirt',         brand:'Zara', price:1999, img:'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=500' },
    { id:'za3',  name:'Tailored Blazer',           brand:'Zara', price:4499, img:'https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?q=80&w=500' },
    { id:'za4',  name:'Straight Leg Jeans',        brand:'Zara', price:2799, img:'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=500' },
    { id:'za5',  name:'Printed Wrap Dress',        brand:'Zara', price:3299, img:'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=500' },
    { id:'za6',  name:'Ribbed Knit Turtleneck',    brand:'Zara', price:1799, img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=500' },
    { id:'za7',  name:'Pleated Wide Trousers',     brand:'Zara', price:2499, img:'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=500' },
    { id:'za8',  name:'Oversized Leather Jacket',  brand:'Zara', price:6999, img:'https://images.unsplash.com/photo-1608234808654-2a8875faa7fd?q=80&w=500' },
    { id:'za9',  name:'Satin Slip Dress',          brand:'Zara', price:2999, img:'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=500' },
    { id:'za10', name:'Checked Overshirt',         brand:'Zara', price:1999, img:'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=500' },
    { id:'za11', name:'High Neck Crop Top',        brand:'Zara', price:999,  img:'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80&w=500' },
    { id:'za12', name:'Belted Maxi Dress',         brand:'Zara', price:3799, img:'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=500' },
  ],
  hm: [
    { id:'hm1',  name:'Basic Cotton Tee',          brand:'H&M', price:499,  img:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500' },
    { id:'hm2',  name:'Slim Fit Jeans',            brand:'H&M', price:1799, img:'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?q=80&w=500' },
    { id:'hm3',  name:'Floral Summer Dress',       brand:'H&M', price:1499, img:'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=500' },
    { id:'hm4',  name:'Hoodie Sweatshirt',         brand:'H&M', price:1299, img:'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=500' },
    { id:'hm5',  name:'Oversized Denim Shirt',     brand:'H&M', price:1599, img:'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=500' },
    { id:'hm6',  name:'Wide Leg Trousers',         brand:'H&M', price:1999, img:'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=500' },
    { id:'hm7',  name:'Puff Sleeve Blouse',        brand:'H&M', price:999,  img:'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80&w=500' },
    { id:'hm8',  name:'Ribbed Cardigan',           brand:'H&M', price:1399, img:'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=500' },
    { id:'hm9',  name:'Pleated Mini Skirt',        brand:'H&M', price:899,  img:'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=500' },
    { id:'hm10', name:'Cropped Bomber Jacket',     brand:'H&M', price:2499, img:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=500' },
    { id:'hm11', name:'Printed Co-ord Set',        brand:'H&M', price:2199, img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=500' },
    { id:'hm12', name:'Thermal Leggings',          brand:'H&M', price:699,  img:'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=500' },
  ],
  uspolo: [
    { id:'us1',  name:'Classic Polo T-Shirt',      brand:'U.S. Polo', price:1299, img:'https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?q=80&w=500' },
    { id:'us2',  name:'Oxford Button-Down',        brand:'U.S. Polo', price:1799, img:'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=500' },
    { id:'us3',  name:'Chino Shorts',              brand:'U.S. Polo', price:1099, img:'https://images.unsplash.com/photo-1600717535275-0b18ede2f7fc?q=80&w=500' },
    { id:'us4',  name:'Slim Fit Trousers',         brand:'U.S. Polo', price:1999, img:'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=500' },
    { id:'us5',  name:'Striped Tee',               brand:'U.S. Polo', price:899,  img:'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=500' },
    { id:'us6',  name:'Casual Linen Shirt',        brand:'U.S. Polo', price:1499, img:'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=500' },
    { id:'us7',  name:'Fleece Jacket',             brand:'U.S. Polo', price:2999, img:'https://images.unsplash.com/photo-1608234808654-2a8875faa7fd?q=80&w=500' },
    { id:'us8',  name:'Solid Crew Neck Sweater',   brand:'U.S. Polo', price:1699, img:'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=500' },
    { id:'us9',  name:'Denim Jeans Regular Fit',   brand:'U.S. Polo', price:2299, img:'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?q=80&w=500' },
    { id:'us10', name:'Printed Casual Shirt',      brand:'U.S. Polo', price:1199, img:'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=500' },
    { id:'us11', name:'Hooded Windbreaker',        brand:'U.S. Polo', price:3499, img:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=500' },
    { id:'us12', name:'Formal Dress Shirt',        brand:'U.S. Polo', price:1599, img:'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=500' },
  ],
  jackjones: [
    { id:'jj1',  name:'Slim Denim Jacket',         brand:'Jack & Jones', price:3499, img:'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?q=80&w=500' },
    { id:'jj2',  name:'Relaxed Fit Jeans',         brand:'Jack & Jones', price:2799, img:'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=500' },
    { id:'jj3',  name:'Premium Wool Blazer',       brand:'Jack & Jones', price:5999, img:'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=500' },
    { id:'jj4',  name:'Graphic Print Tee',         brand:'Jack & Jones', price:799,  img:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500' },
    { id:'jj5',  name:'Cargo Trousers',            brand:'Jack & Jones', price:2199, img:'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=500' },
    { id:'jj6',  name:'Knitted Roll Neck',         brand:'Jack & Jones', price:1999, img:'https://images.unsplash.com/photo-1608234808654-2a8875faa7fd?q=80&w=500' },
    { id:'jj7',  name:'Linen Shirt',               brand:'Jack & Jones', price:1699, img:'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=500' },
    { id:'jj8',  name:'Slim Chino Trousers',       brand:'Jack & Jones', price:2499, img:'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=500' },
    { id:'jj9',  name:'Puffer Winter Jacket',      brand:'Jack & Jones', price:4999, img:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=500' },
    { id:'jj10', name:'Zip-Up Hoodie',             brand:'Jack & Jones', price:1599, img:'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=500' },
    { id:'jj11', name:'Straight Cut Jeans',        brand:'Jack & Jones', price:2999, img:'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?q=80&w=500' },
    { id:'jj12', name:'Half Sleeve Shirt',         brand:'Jack & Jones', price:1299, img:'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=500' },
  ],
  roadster: [
    { id:'rd1',  name:'Washed Denim Jacket',       brand:'Roadster', price:2499, img:'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?q=80&w=500' },
    { id:'rd2',  name:'Slim Fit Jeans',            brand:'Roadster', price:1799, img:'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=500' },
    { id:'rd3',  name:'Printed Casual Tee',        brand:'Roadster', price:599,  img:'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=500' },
    { id:'rd4',  name:'Cargo Jogger Pants',        brand:'Roadster', price:1399, img:'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=500' },
    { id:'rd5',  name:'Checked Flannel Shirt',     brand:'Roadster', price:999,  img:'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=500' },
    { id:'rd6',  name:'Bomber Jacket',             brand:'Roadster', price:3299, img:'https://images.unsplash.com/photo-1608234808654-2a8875faa7fd?q=80&w=500' },
    { id:'rd7',  name:'Ripped Jeans',              brand:'Roadster', price:1999, img:'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?q=80&w=500' },
    { id:'rd8',  name:'Hoodie Pullover',           brand:'Roadster', price:1299, img:'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=500' },
    { id:'rd9',  name:'Track Pants',               brand:'Roadster', price:899,  img:'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=500' },
    { id:'rd10', name:'Biker Leather Jacket',      brand:'Roadster', price:4999, img:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=500' },
    { id:'rd11', name:'Distressed Denim Shirt',    brand:'Roadster', price:1599, img:'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=500' },
    { id:'rd12', name:'Slim Cargos',               brand:'Roadster', price:1699, img:'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=500' },
  ],
};

// GLOBAL CSS (injected once)
(function injectGlobalStyles() {
  const s = document.createElement('style');
  s.textContent = `
    @keyframes scFadeIn    { from{opacity:0} to{opacity:1} }
    @keyframes scSlideUp   { from{transform:translateY(40px);opacity:0} to{transform:translateY(0);opacity:1} }
    @keyframes scPageIn    { from{transform:translateY(60px);opacity:0} to{transform:translateY(0);opacity:1} }
    @keyframes scPageOut   { from{transform:translateY(0);opacity:1} to{transform:translateY(60px);opacity:0} }
    @keyframes scToastIn   { from{opacity:0;transform:translateX(-50%) translateY(20px)} to{opacity:1;transform:translateX(-50%) translateY(0)} }
    @keyframes scToastOut  { from{opacity:1} to{opacity:0} }
    @keyframes scSuccessPop { 0%{transform:scale(0.5);opacity:0} 70%{transform:scale(1.1)} 100%{transform:scale(1);opacity:1} }

    #sc-product-page {
      position:fixed; inset:0; background:#f8f8f6;
      z-index:10000; overflow-y:auto;
      animation:scPageIn 0.35s cubic-bezier(.4,0,.2,1);
    }
    .sc-pp-header {
      background:#fff; padding:18px 5%;
      display:flex; align-items:center; justify-content:space-between;
      border-bottom:2px solid #f0f0f0; position:sticky; top:0; z-index:10;
      box-shadow:0 2px 12px rgba(0,0,0,0.06);
    }
    .sc-pp-header-left { display:flex; align-items:center; gap:16px; }
    .sc-pp-back-btn {
      background:none; border:2px solid #1a1a1a; padding:8px 18px;
      font-weight:800; font-size:13px; cursor:pointer; border-radius:4px;
      font-family:inherit; transition:all 0.2s; letter-spacing:1px;
    }
    .sc-pp-back-btn:hover { background:#1a1a1a; color:#fff; }
    .sc-pp-title  { font-size:1.4rem; font-weight:800; letter-spacing:-0.5px; }
    .sc-pp-sub    { font-size:13px; color:#888; margin-top:2px; }
    .sc-pp-cart-btn {
      background:#1a1a1a; color:#fff; padding:10px 22px;
      border-radius:4px; font-weight:800; font-size:13px; cursor:pointer;
      display:flex; align-items:center; gap:8px; border:none; font-family:inherit;
      transition:background 0.2s;
    }
    .sc-pp-cart-btn:hover { background:#333; }
    .sc-cart-badge {
      color:#fff; border-radius:50%; width:20px; height:20px;
      display:inline-flex; align-items:center; justify-content:center;
      font-size:11px; font-weight:800;
    }
    .sc-pp-body   { padding:40px 5%; }
    .sc-pp-h1     { font-size:1.8rem; font-weight:800; margin-bottom:6px; }
    .sc-pp-count  { font-size:14px; color:#888; margin-bottom:32px; }
    .sc-grid {
      display:grid;
      grid-template-columns:repeat(auto-fill,minmax(220px,1fr));
      gap:24px;
    }
    .sc-card {
      background:#fff; border-radius:12px; overflow:hidden;
      box-shadow:0 2px 12px rgba(0,0,0,0.07);
      transition:transform 0.22s,box-shadow 0.22s;
    }
    .sc-card:hover { transform:translateY(-6px); box-shadow:0 12px 28px rgba(0,0,0,0.13); }
    .sc-card img   { width:100%; height:260px; object-fit:cover; display:block; }
    .sc-card-body  { padding:14px 16px 16px; }
    .sc-card-brand { font-size:10px; font-weight:800; letter-spacing:1.5px; margin-bottom:4px; text-transform:uppercase; }
    .sc-card-name  { font-size:14px; font-weight:700; color:#1a1a1a; margin-bottom:8px; }
    .sc-card-price { font-size:16px; font-weight:800; color:#1a1a1a; margin-bottom:14px; }
    .sc-card-tag   {
      display:inline-block; font-size:9px; font-weight:800; padding:3px 8px;
      border-radius:20px; background:#fff8e1; color:#f59f00;
      margin-bottom:10px; letter-spacing:1px;
    }
    .sc-atc-btn {
      width:100%; padding:11px; background:#1a1a1a; color:#fff;
      border:none; border-radius:6px; font-weight:800; font-size:13px;
      cursor:pointer; font-family:inherit; letter-spacing:0.5px;
      transition:background 0.2s,transform 0.1s;
    }
    .sc-atc-btn:hover  { background:#333; }
    .sc-atc-btn:active { transform:scale(0.98); }
    .sc-atc-btn.added  { background:#16a34a; }

    .sc-toast {
      position:fixed; bottom:30px; left:50%; transform:translateX(-50%);
      background:#1a1a1a; color:#fff; padding:12px 28px; border-radius:50px;
      font-weight:700; font-size:14px; z-index:20000; white-space:nowrap;
      animation:scToastIn 0.3s ease, scToastOut 0.3s ease 1.8s forwards;
      pointer-events:none;
    }

    #sc-overlay {
      position:fixed; inset:0; background:rgba(0,0,0,0.55);
      z-index:10001; display:flex; align-items:center; justify-content:center;
      animation:scFadeIn 0.25s ease;
    }
    #sc-modal {
      background:#fff; border-radius:14px; padding:36px 32px;
      max-width:560px; width:92%; position:relative;
      animation:scSlideUp 0.3s ease; max-height:90vh; overflow-y:auto;
    }
    #sc-modal .sc-close-btn {
      position:absolute; top:14px; right:18px; font-size:22px;
      cursor:pointer; background:none; border:none; color:#555; font-weight:700;
    }
    #sc-modal .sc-close-btn:hover { color:#111; }

    /* Success overlay styles */
    #sc-success-overlay {
      position:fixed; inset:0; background:rgba(0,0,0,0.6);
      z-index:20001; display:flex; align-items:center; justify-content:center;
      animation:scFadeIn 0.25s ease;
    }
    .sc-success-card {
      background:#fff; border-radius:20px; padding:48px 40px;
      text-align:center; max-width:400px; width:90%;
      animation:scSuccessPop 0.4s cubic-bezier(.34,1.56,.64,1);
      box-shadow:0 20px 60px rgba(0,0,0,0.2);
    }
    .sc-success-icon {
      width:80px; height:80px; background:linear-gradient(135deg,#16a34a,#22c55e);
      border-radius:50%; display:flex; align-items:center; justify-content:center;
      margin:0 auto 20px; font-size:36px;
    }
    .sc-success-title { font-size:1.5rem; font-weight:800; color:#1a1a1a; margin-bottom:8px; }
    .sc-success-sub   { font-size:14px; color:#888; margin-bottom:24px; line-height:1.5; }
    .sc-success-bar {
      height:4px; background:#f0f0f0; border-radius:2px; overflow:hidden; margin-bottom:16px;
    }
    .sc-success-bar-fill {
      height:100%; background:linear-gradient(90deg,#16a34a,#22c55e);
      animation:scBarFill 2s linear forwards;
    }
    @keyframes scBarFill { from{width:0%} to{width:100%} }
    .sc-success-note { font-size:12px; color:#aaa; }

    /* Instant Not Available styles */
    #sc-instant-overlay {
      position:fixed; inset:0; background:rgba(0,0,0,0.6);
      z-index:20001; display:flex; align-items:center; justify-content:center;
      animation:scFadeIn 0.25s ease;
    }
    .sc-instant-card {
      background:#fff; border-radius:20px; padding:48px 40px;
      text-align:center; max-width:420px; width:90%;
      animation:scSlideUp 0.35s ease;
      box-shadow:0 20px 60px rgba(0,0,0,0.2);
    }
    .sc-instant-icon {
      width:90px; height:90px; background:linear-gradient(135deg,#f97316,#fb923c);
      border-radius:50%; display:flex; align-items:center; justify-content:center;
      margin:0 auto 20px; font-size:40px;
    }
    .sc-instant-title { font-size:1.4rem; font-weight:800; color:#1a1a1a; margin-bottom:10px; }
    .sc-instant-sub   { font-size:14px; color:#666; line-height:1.6; margin-bottom:24px; }
    .sc-instant-location {
      background:#fff7ed; border:1.5px solid #fed7aa; border-radius:10px;
      padding:14px 18px; margin-bottom:24px; display:flex; align-items:center; gap:10px;
    }
    .sc-instant-location span { font-size:13px; font-weight:700; color:#ea580c; }
    .sc-instant-close-btn {
      background:#1a1a1a; color:#fff; padding:13px 32px;
      border:none; border-radius:8px; font-weight:800; font-size:14px;
      cursor:pointer; font-family:inherit; transition:background 0.2s;
    }
    .sc-instant-close-btn:hover { background:#333; }
    .sc-notify-btn {
      background:transparent; color:#1a1a1a; padding:11px 24px;
      border:2px solid #1a1a1a; border-radius:8px; font-weight:800; font-size:13px;
      cursor:pointer; font-family:inherit; margin-top:10px; transition:all 0.2s;
    }
    .sc-notify-btn:hover { background:#1a1a1a; color:#fff; }
  `;
  document.head.appendChild(s);
})();

// TOAST
function showToast(msg) {
  document.querySelector('.sc-toast')?.remove();
  const t = document.createElement('div');
  t.className = 'sc-toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2200);
}

// ─── SUCCESS POPUP (login / signup) ───────────────────────────────────────────
function showSuccessPopup(title, subtitle, onDone) {
  document.getElementById('sc-success-overlay')?.remove();
  document.getElementById('sc-overlay')?.remove();

  const overlay = document.createElement('div');
  overlay.id = 'sc-success-overlay';
  overlay.innerHTML = `
    <div class="sc-success-card">
      <div class="sc-success-icon">✓</div>
      <div class="sc-success-title">${title}</div>
      <div class="sc-success-sub">${subtitle}</div>
      <div class="sc-success-bar"><div class="sc-success-bar-fill"></div></div>
      <div class="sc-success-note">Redirecting you to home page…</div>
    </div>`;
  document.body.appendChild(overlay);

  setTimeout(() => {
    overlay.remove();
    if (typeof onDone === 'function') onDone();
  }, 2200);
}

// ─── INSTANT NOT AVAILABLE POPUP ──────────────────────────────────────────────
function showInstantUnavailable() {
  document.getElementById('sc-instant-overlay')?.remove();

  const overlay = document.createElement('div');
  overlay.id = 'sc-instant-overlay';
  overlay.innerHTML = `
    <div class="sc-instant-card">
      <div class="sc-instant-icon">⚡</div>
      <div class="sc-instant-title">Instant Delivery</div>
      <div class="sc-instant-sub">
        We're working hard to bring Instant delivery to more cities.<br>
        Unfortunately it's not available at your location yet.
      </div>
      <div class="sc-instant-location">
        <span>📍</span>
        <span>Currently Not Deliverable at Your Location</span>
      </div>
      <button class="sc-instant-close-btn" id="sc-instant-close">Got it</button>
      <br>
      <button class="sc-notify-btn" id="sc-instant-notify">🔔 Notify Me When Available</button>
    </div>`;
  document.body.appendChild(overlay);

  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
  document.getElementById('sc-instant-close').addEventListener('click', () => overlay.remove());
  document.getElementById('sc-instant-notify').addEventListener('click', () => {
    overlay.remove();
    showToast('🔔 We\'ll notify you when Instant arrives in your area!');
  });
}

// ─── ADD "INSTANT" NAV LINK after SALE ────────────────────────────────────────
(function addInstantNavLink() {
  const navLinks = document.querySelector('.nav-links ul');
  if (!navLinks) return;

  // Find SALE li
  let saleLi = null;
  navLinks.querySelectorAll('li').forEach(li => {
    if (li.querySelector('a')?.textContent.trim() === 'SALE') saleLi = li;
  });

  const instantLi = document.createElement('li');
  instantLi.innerHTML = `<a href="#" id="sc-instant-link" style="color:#f97316;position:relative;">
    INSTANT
    <span style="position:absolute;top:-6px;right:-18px;background:#f97316;color:#fff;font-size:8px;font-weight:800;padding:2px 5px;border-radius:10px;letter-spacing:0.5px;">NEW</span>
  </a>`;

  if (saleLi) {
    saleLi.after(instantLi);
  } else {
    navLinks.appendChild(instantLi);
  }

  document.getElementById('sc-instant-link').addEventListener('click', e => {
    e.preventDefault();
    showInstantUnavailable();
  });
})();


// PRODUCT PAGE
function showProductPage(title, subtitle, products, accentColor) {
  document.getElementById('sc-product-page')?.remove();

  const page = document.createElement('div');
  page.id = 'sc-product-page';

  page.innerHTML = `
    <div class="sc-pp-header">
      <div class="sc-pp-header-left">
        <button class="sc-pp-back-btn" id="sc-pp-back">← BACK</button>
        <div>
          <div class="sc-pp-title">${title}</div>
          <div class="sc-pp-sub">${subtitle}</div>
        </div>
      </div>
      <button class="sc-pp-cart-btn" id="sc-pp-open-cart">
        🛒 My Bag
        <span class="sc-cart-badge" id="sc-pp-cart-count"
          style="background:${accentColor || '#e44'}">${cartItems.length}</span>
      </button>
    </div>
    <div class="sc-pp-body">
      <div class="sc-pp-h1">${title}</div>
      <div class="sc-pp-count">${products.length} items found</div>
      <div class="sc-grid" id="sc-pp-grid"></div>
    </div>
  `;

  document.body.appendChild(page);

  const grid = document.getElementById('sc-pp-grid');
  products.forEach(item => {
    const card = document.createElement('div');
    card.className = 'sc-card';
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}" loading="lazy">
      <div class="sc-card-body">
        <div class="sc-card-brand" style="color:${accentColor || '#e44'}">${item.brand}</div>
        ${item.tag ? `<div class="sc-card-tag">${item.tag}</div>` : ''}
        <div class="sc-card-name">${item.name}</div>
        <div class="sc-card-price">₹${item.price.toLocaleString()}</div>
        <button class="sc-atc-btn" data-id="${item.id}">ADD TO CART</button>
      </div>
    `;
    grid.appendChild(card);
  });

  grid.addEventListener('click', e => {
    if (!e.target.classList.contains('sc-atc-btn')) return;
    const id = e.target.getAttribute('data-id');
    const product = products.find(p => p.id === id);
    if (!product) return;
    if (!cartItems.find(c => c.id === id)) cartItems.push({ ...product });
    e.target.textContent = '✓ ADDED';
    e.target.classList.add('added');
    setTimeout(() => { e.target.textContent = 'ADD TO CART'; e.target.classList.remove('added'); }, 1500);
    document.getElementById('sc-pp-cart-count').textContent = cartItems.length;
    showToast(`"${product.name}" added to cart!`);
  });

  document.getElementById('sc-pp-back').addEventListener('click', () => {
    page.style.animation = 'scPageOut 0.28s ease forwards';
    setTimeout(() => page.remove(), 290);
  });

  document.getElementById('sc-pp-open-cart').addEventListener('click', openCartOverlay);
}

// CART OVERLAY
function openCartOverlay() {
  let itemsHTML = '';
  if (cartItems.length === 0) {
    itemsHTML = `
      <div style="text-align:center;padding:40px 0;color:#aaa;">
        <div style="font-size:56px;margin-bottom:16px;">🛍️</div>
        <div style="font-size:1.1rem;font-weight:700;color:#333;margin-bottom:8px;">Your cart is empty!</div>
        <div style="font-size:13px;">Add items from any page and they'll appear here.</div>
      </div>`;
  } else {
    itemsHTML = cartItems.map((item, idx) => `
      <div style="display:flex;gap:14px;align-items:center;padding:14px 0;border-bottom:1px solid #f0f0f0;">
        <img src="${item.img}" style="width:70px;height:80px;object-fit:cover;border-radius:8px;">
        <div style="flex:1;">
          <div style="font-size:10px;font-weight:800;letter-spacing:1px;color:#e44;text-transform:uppercase;">${item.brand}</div>
          <div style="font-weight:700;font-size:14px;margin-top:2px;">${item.name}</div>
          <div style="font-weight:800;margin-top:6px;color:#1a1a1a;font-size:15px;">₹${item.price.toLocaleString()}</div>
        </div>
        <button onclick="cartItems.splice(${idx},1);document.getElementById('sc-overlay').remove();openCartOverlay();"
          style="background:none;border:1px solid #ddd;padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#888;">✕</button>
      </div>`).join('');
  }

  const total = cartItems.reduce((s, i) => s + i.price, 0);
  const footerHTML = cartItems.length > 0 ? `
    <div style="margin-top:20px;padding-top:16px;border-top:2px solid #f0f0f0;display:flex;justify-content:space-between;align-items:center;">
      <div>
        <div style="font-size:12px;color:#888;">Total Amount</div>
        <div style="font-weight:800;font-size:1.3rem;">₹${total.toLocaleString()}</div>
      </div>
      <button style="background:#1a1a1a;color:#fff;padding:14px 32px;border:none;border-radius:4px;font-weight:800;cursor:pointer;font-size:14px;font-family:inherit;"
        onclick="showToast('🎉 Order placed successfully!')">PLACE ORDER</button>
    </div>` : '';

  createOverlay(`
    <div style="font-size:1.3rem;font-weight:800;margin-bottom:6px;">🛒 My Bag</div>
    <div style="font-size:13px;color:#888;margin-bottom:20px;">${cartItems.length} item(s)</div>
    ${itemsHTML}${footerHTML}`);
}

// SMALL MODAL OVERLAY HELPER
function createOverlay(content) {
  document.getElementById('sc-overlay')?.remove();
  const overlay = document.createElement('div');
  overlay.id = 'sc-overlay';
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
  overlay.innerHTML = `
    <div id="sc-modal">
      <button class="sc-close-btn" onclick="this.closest('#sc-overlay').remove()">&times;</button>
      ${content}
    </div>`;
  document.body.appendChild(overlay);
  return overlay;
}

// FEATURE 1: Logo → Refresh
document.querySelector('.logo').addEventListener('click', () => window.location.reload());
document.querySelector('.logo').style.cursor = 'pointer';

// FEATURE 2: SALE → Scroll to Deals
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.textContent.trim() === 'SALE') {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector('.offers-section')?.scrollIntoView({ behavior: 'smooth' });
    });
  }
});

// FEATURE 3: NEW & TRENDING + SHOP NOW + VIEW COLLECTION
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.textContent.trim() === 'NEW & TRENDING') {
    link.addEventListener('click', e => {
      e.preventDefault();
      showProductPage('New & Trending', "Fresh drops you'll love", trendingProducts, '#f59f00');
    });
  }
});
document.querySelectorAll('.shop-now, .view-collection').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    showProductPage('New & Trending', "Fresh drops you'll love", trendingProducts, '#f59f00');
  });
});

// FEATURE 4: MEN nav
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.textContent.trim() === 'MEN') {
    link.addEventListener('click', e => {
      e.preventDefault();
      showProductPage("Men's Wear", 'Style that speaks for itself', menProducts, '#1a6ef5');
    });
  }
});

// FEATURE 5: WOMEN nav
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.textContent.trim() === 'WOMEN') {
    link.addEventListener('click', e => {
      e.preventDefault();
      showProductPage("Women's Wear", 'Elegance in every stitch', womenProducts, '#e05aab');
    });
  }
});

// FEATURE 6: KIDS nav
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.textContent.trim() === 'KIDS') {
    link.addEventListener('click', e => {
      e.preventDefault();
      showProductPage("Kids' Wear", 'Comfy, colourful & fun!', kidsProducts, '#16a34a');
    });
  }
});

// FEATURE 7: Shop By Category cards
document.querySelectorAll('.category-card').forEach(card => {
  const heading = card.querySelector('h3')?.textContent?.trim();
  card.style.cursor = 'pointer';
  card.addEventListener('click', () => {
    if      (heading === "Men's Wear")   showProductPage("Men's Wear",   'Style that speaks for itself', menProducts,   '#1a6ef5');
    else if (heading === "Women's Wear") showProductPage("Women's Wear", 'Elegance in every stitch',     womenProducts, '#e05aab');
    else if (heading === "Kids' Wear")  showProductPage("Kids' Wear",   'Comfy, colourful & fun!',      kidsProducts,  '#16a34a');
  });
});

// FEATURE 8: Deals on Top Brands
document.querySelectorAll('.offer-card').forEach(card => {
  const badge = card.querySelector('.brand-badge h2')?.textContent?.trim();
  card.style.cursor = 'pointer';
  card.addEventListener('click', () => {
    const map = {
      "LEVI'S":       { data: brandProducts.levis,    title: "Levi's Collection",       sub: 'Flat 40% OFF — Limited time!',     color: '#c0392b' },
      'ZARA':         { data: brandProducts.zara,     title: 'Zara Collection',          sub: 'Up to 50% OFF on Zara styles',     color: '#2c3e50' },
      'H&M':          { data: brandProducts.hm,       title: 'H&M Collection',           sub: 'Buy 2 Get 1 Free on H&M',          color: '#e74c3c' },
      'U.S. POLO':    { data: brandProducts.uspolo,   title: 'U.S. Polo Collection',     sub: 'Minimum 30% OFF on U.S. Polo',     color: '#2980b9' },
      'JACK & JONES': { data: brandProducts.jackjones,title: 'Jack & Jones Collection',  sub: 'Flat 50% OFF — Shop Now!',         color: '#8e44ad' },
      'ROADSTER':     { data: brandProducts.roadster, title: 'Roadster Collection',      sub: 'Up to 60% OFF on Roadster',        color: '#d35400' },
    };
    const entry = map[badge];
    if (entry) showProductPage(entry.title, entry.sub, entry.data, entry.color);
  });
});

// FEATURE: BAG
document.querySelectorAll('.user-actions a').forEach(link => {
  if (link.textContent.trim() === 'Bag') {
    link.addEventListener('click', e => { e.preventDefault(); openCartOverlay(); });
  }
});

// FEATURE: GIFT
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.textContent.trim() === 'GIFT') {
    link.addEventListener('click', e => {
      e.preventDefault();
      createOverlay(`
        <div style="font-size:1.4rem;font-weight:800;margin-bottom:8px;">🎁 Gift Cards</div>
        <div style="font-size:13px;color:#777;margin-bottom:28px;">Choose your squad and shop for them!</div>
        <div style="display:flex;gap:20px;flex-wrap:wrap;justify-content:center;">
          <a href="https://www.myntra.com" target="_blank"
            style="border-radius:12px;overflow:hidden;width:220px;cursor:pointer;
              box-shadow:0 4px 18px rgba(0,0,0,0.12);transition:transform 0.2s;
              text-decoration:none;color:inherit;display:block;"
            onmouseover="this.style.transform='translateY(-5px)'"
            onmouseout="this.style.transform='translateY(0)'">
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=500"
              style="width:100%;height:160px;object-fit:cover;display:block;">
            <div style="padding:14px;background:#fff;text-align:center;">
              <h3 style="font-size:14px;font-weight:800;margin-bottom:4px;">Close Family & Friends</h3>
              <p style="font-size:11px;color:#888;">Shop your besties' favourites</p>
              <span style="display:inline-block;font-size:10px;font-weight:700;padding:3px 10px;border-radius:30px;margin-top:8px;background:#fff0f0;color:#e44;">❤️ MYNTRA</span>
            </div>
          </a>
          <a href="https://www.meesho.com" target="_blank"
            style="border-radius:12px;overflow:hidden;width:220px;cursor:pointer;
              box-shadow:0 4px 18px rgba(0,0,0,0.12);transition:transform 0.2s;
              text-decoration:none;color:inherit;display:block;"
            onmouseover="this.style.transform='translateY(-5px)'"
            onmouseout="this.style.transform='translateY(0)'">
            <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=500"
              style="width:100%;height:160px;object-fit:cover;display:block;">
            <div style="padding:14px;background:#fff;text-align:center;">
              <h3 style="font-size:14px;font-weight:800;margin-bottom:4px;">Not So Imp</h3>
              <p style="font-size:11px;color:#888;">Affordable picks for everyone else</p>
              <span style="display:inline-block;font-size:10px;font-weight:700;padding:3px 10px;border-radius:30px;margin-top:8px;background:#f5f5f5;color:#888;">🛍 MEESHO</span>
            </div>
          </a>
        </div>`);
    });
  }
});

// ─── FEATURE: PROFILE → Login / Signup ────────────────────────────────────────

function showLoginForm() {
  createOverlay(`
    <div style="font-size:1.5rem;font-weight:800;margin-bottom:4px;">Welcome Back 👋</div>
    <div style="font-size:13px;color:#888;margin-bottom:24px;">Login to your Shopify Clothing account</div>
    <input id="sc-login-email"
      style="width:100%;padding:12px 14px;border:1.5px solid #ddd;border-radius:6px;font-size:14px;margin-bottom:14px;outline:none;font-family:inherit;box-sizing:border-box;"
      type="email" placeholder="Email or Phone Number">
    <input id="sc-login-pass"
      style="width:100%;padding:12px 14px;border:1.5px solid #ddd;border-radius:6px;font-size:14px;margin-bottom:14px;outline:none;font-family:inherit;box-sizing:border-box;"
      type="password" placeholder="Password">
    <div id="sc-login-err" style="color:#e44;font-size:12px;margin-bottom:10px;display:none;">Please enter your email and password.</div>
    <button id="sc-login-btn"
      style="width:100%;padding:13px;background:#1a1a1a;color:#fff;font-weight:800;font-size:15px;border:none;border-radius:6px;cursor:pointer;font-family:inherit;">
      LOGIN
    </button>
    <div style="text-align:center;margin-top:18px;font-size:13px;color:#555;">
      Don't have an account?
      <a id="sc-go-signup" style="color:#e44;font-weight:700;cursor:pointer;text-decoration:none;"> Signup</a>
    </div>`);

  document.getElementById('sc-login-btn').addEventListener('click', () => {
    const email = document.getElementById('sc-login-email').value.trim();
    const pass  = document.getElementById('sc-login-pass').value.trim();
    if (!email || !pass) {
      document.getElementById('sc-login-err').style.display = 'block';
      return;
    }
    showSuccessPopup(
      '🎉 Login Successful!',
      `Welcome back! You're now logged in as <strong>${email}</strong>.`,
      () => { /* already on home page, just close */ }
    );
  });

  document.getElementById('sc-go-signup').addEventListener('click', showSignupForm);
}

function showSignupForm() {
  createOverlay(`
    <div style="font-size:1.5rem;font-weight:800;margin-bottom:4px;">Create Account ✨</div>
    <div style="font-size:13px;color:#888;margin-bottom:20px;">Join Shopify Clothing today — it's free!</div>
    <a href="https://www.facebook.com" target="_blank"
      style="width:100%;padding:12px;border-radius:6px;font-size:14px;font-weight:700;cursor:pointer;border:1.5px solid #1877f2;color:#1877f2;margin-bottom:12px;display:flex;align-items:center;justify-content:center;gap:10px;background:#fff;font-family:inherit;text-decoration:none;box-sizing:border-box;">
      <span style="font-weight:900;">f</span> Login with Facebook
    </a>
    <a href="https://accounts.google.com" target="_blank"
      style="width:100%;padding:12px;border-radius:6px;font-size:14px;font-weight:700;cursor:pointer;border:1.5px solid #db4437;color:#db4437;margin-bottom:12px;display:flex;align-items:center;justify-content:center;gap:10px;background:#fff;font-family:inherit;text-decoration:none;box-sizing:border-box;">
      <span style="font-weight:900;">G</span> Login with Google
    </a>
    <div style="text-align:center;color:#aaa;font-size:12px;margin:16px 0;border-top:1px solid #eee;padding-top:16px;">OR</div>
    <input id="sc-signup-email"
      style="width:100%;padding:12px 14px;border:1.5px solid #ddd;border-radius:6px;font-size:14px;margin-bottom:14px;outline:none;font-family:inherit;box-sizing:border-box;"
      type="email" placeholder="Email Address">
    <input id="sc-signup-pass"
      style="width:100%;padding:12px 14px;border:1.5px solid #ddd;border-radius:6px;font-size:14px;margin-bottom:14px;outline:none;font-family:inherit;box-sizing:border-box;"
      type="password" placeholder="Create Password">
    <div id="sc-signup-err" style="color:#e44;font-size:12px;margin-bottom:10px;display:none;">Please fill in all fields.</div>
    <button id="sc-signup-btn"
      style="width:100%;padding:13px;background:#1a1a1a;color:#fff;font-weight:800;font-size:15px;border:none;border-radius:6px;cursor:pointer;font-family:inherit;">
      CREATE ACCOUNT
    </button>
    <div style="text-align:center;margin-top:16px;font-size:13px;color:#555;">
      Already have an account?
      <a id="sc-go-login" style="color:#e44;font-weight:700;cursor:pointer;text-decoration:none;"> Login</a>
    </div>`);

  document.getElementById('sc-signup-btn').addEventListener('click', () => {
    const email = document.getElementById('sc-signup-email').value.trim();
    const pass  = document.getElementById('sc-signup-pass').value.trim();
    if (!email || !pass) {
      document.getElementById('sc-signup-err').style.display = 'block';
      return;
    }
    showSuccessPopup(
      '🎊 Account Created!',
      `Welcome to Shopify Clothing! Your account for <strong>${email}</strong> is ready.`,
      () => { /* already on home page */ }
    );
  });

  document.getElementById('sc-go-login').addEventListener('click', showLoginForm);
}

document.querySelectorAll('.user-actions a').forEach(link => {
  if (link.textContent.trim() === 'Profile') {
    link.addEventListener('click', e => { e.preventDefault(); showLoginForm(); });
  }
});

// ─── FEATURE: WISHLIST ────────────────────────────────────────────────────────
document.querySelectorAll('.user-actions a').forEach(link => {
  if (link.textContent.trim() === 'Wishlist') {
    link.addEventListener('click', e => {
      e.preventDefault();
      const itemsHTML = wishlistItems.length === 0
        ? `<div style="text-align:center;padding:40px 0;color:#aaa;">
             <div style="font-size:56px;margin-bottom:16px;">🤍</div>
             <div style="font-size:1.1rem;font-weight:700;color:#333;margin-bottom:8px;">Your Wishlist is empty!</div>
             <div style="font-size:13px;">Save items you love and find them here later.</div>
           </div>`
        : wishlistItems.map((item, idx) => `
            <div style="display:flex;gap:14px;align-items:center;padding:14px 0;border-bottom:1px solid #f0f0f0;">
              <img src="${item.img}" style="width:70px;height:80px;object-fit:cover;border-radius:8px;">
              <div style="flex:1;">
                <div style="font-weight:700;font-size:14px;">${item.name}</div>
                <div style="font-weight:800;margin-top:6px;color:#e44;">₹${item.price.toLocaleString()}</div>
              </div>
              <button onclick="if(!cartItems.find(c=>c.id==='${item.id}'))cartItems.push({...wishlistItems[${idx}]});showToast('Added to cart!');document.getElementById('sc-overlay').remove();"
                style="background:#1a1a1a;color:#fff;padding:8px 14px;border:none;border-radius:4px;font-weight:700;cursor:pointer;font-size:11px;font-family:inherit;">
                ADD TO BAG
              </button>
            </div>`).join('');

      createOverlay(`
        <div style="font-size:1.3rem;font-weight:800;margin-bottom:6px;">🤍 My Wishlist</div>
        <div style="font-size:13px;color:#888;margin-bottom:20px;">Add For Later — ${wishlistItems.length} item(s)</div>
        ${itemsHTML}`);
    });
  }
});