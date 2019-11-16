create table inventory(
id serial primary key,
product_name varchar,
price int,
img text

insert into inventory (product_name, price, img)
values
('shoes', 50, 'https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/985126faac9345fbafa8a8dd008d1a68_9366/Duramo_9_Shoes_Black_BB7066_01_standard.jpg'),
('shirt', 20, 'https://cdn.shopify.com/s/files/1/0163/4002/products/blacktee_ecomm_folded_1200x1200_crop_center.progressive.jpg?v=1571262555'),
('pants', 40, 'https://cdni.llbean.net/is/image/wim/503736_28539_41?hei=1092&wid=950&resMode=sharp2&defaultImage=llbstage/A0211793_2')