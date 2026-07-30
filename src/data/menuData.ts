import { MenuItem } from '../types';

export const HERO_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB8WUvBwuJ85vQZV0dMSHnZSqwdAV6y0kdWIVmK1GSuLbghrIQ8npq4AURcAkMdD43JsRoxdgVQg0LJANLmI-AHr9JwvUd2nlwiG3Cl0Hf6M_v_eD7sgLwY0C8F_jAbwjOgmbdVXOmncNddd9B5ETPtuOX5Z8R-4kmR411PuhyMkbGX7R8hidM_9qHPdRtBkGHzTK2tJdbat7kBDU0q5bIZyY_U98Nfan0KlDWVotpWiqen-yHr_lvRCN0Gm5W6G9g08Hd_lzl_DOEL';

export const LOLA_PORTRAIT_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDxrTew-rKS7WIdwZclka6NkGZlfBJb4FmzzHp82EhciqpYneWlnZjcfyRmY8xR1kyFoVbDdr75bSzAbnaKc5EfhF3tsJoEbA0um9LfnLCYntMXOEL3P887CkhcOM7I_AdU-yHGmngRti8IvyI3ONJG-KIka0pYMCA3SOF0Br-LC3KDZG4CsUTRBpk2EQd4JKCH-_3eqRhJkAi_7KHSK84gmYu9MAwE2M-mwgpbMVXUAWPwfpTCtxb_tWVxWt4_b88hlBJQ6214KIiu';

export const MENU_ITEMS: MenuItem[] = [
  // --- ENTRADAS ---
  {
    id: 'croquetas-tostones',
    name: 'Croquetas y Tostones',
    category: 'entradas',
    description: 'Clásicos aperitivos cubanos, crujientes y dorados.',
    price: 8.0,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA4Y3DOyBmHDWM7wGh4IYnziz7wAJOuyUx7WrBDTZcnxBbWzcD9Zvjb6Z4h563IC2oY2by-n6G_vt0ma_bgm2EB__vblB3KyUGwvJUmD_sAUqCg2_TbVoxwkE3acv0EQXaFxM8DTbKv1obaKhje8pe9-1AWNdlNtBuEcwJDRO87_sex6hiOeEmoFjSRDun6LHP11iDC-HPIUfosgEGACjb2OdVtRsapdEe4QOTk50ElfM9gUS3xIiLg8AcaydWdLqI0iFuOGlAr31SC',
    featured: true,
    tags: ['Clásico Cubano', 'Crujiente', 'Especial de la Casa'],
    grandmotherNote:
      'La masa de las croquetas se cocina a fuego lento con leche entera y jamón serrano, exactamente como lo hacía la abuela en La Habana Vieja.',
    ingredients: [
      'Jamón serrano artesanal',
      'Plátano verde fresco',
      'Mojo de ajo y naranja agria',
      'Bechamel casera',
    ],
    prepTime: '10 min',
    calories: '340 kcal',
  },
  {
    id: 'tamal-en-hoja',
    name: 'Tamal Cubano en Hoja',
    category: 'entradas',
    description: 'Maíz tierno molido con sofrito criollo y carne de cerdo tierna, envuelto en hoja.',
    price: 7.5,
    imageUrl:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    tags: ['Receta Tradicional', 'Maíz Fresco'],
    grandmotherNote:
      'El secreto de un buen tamal está en desgranar el maíz tierno en casa y mezclarlo con abundante comino y ajo asado.',
    ingredients: ['Maíz tierno', 'Puerco braseado', 'Sofrito de ají cachucha', 'Mojo criollo'],
    prepTime: '15 min',
    calories: '280 kcal',
  },
  {
    id: 'yuca-con-mojo',
    name: 'Yuca con Mojo Criollo',
    category: 'entradas',
    description: 'Yuca hervida al punto suave, bañada en mojo caliente de ajo, cebolla morada y naranja agria.',
    price: 6.5,
    imageUrl:
      'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetariano', 'Sin Gluten'],
    grandmotherNote:
      'El choque del aceite caliente con el ajo machacado y el jugo de naranja agria despierta el aroma de toda la mesa.',
    ingredients: ['Yuca tierna', 'Ajo fresco machacado', 'Cebolla morada', 'Naranja agria fresca', 'Chicharrón molido (opcional)'],
    prepTime: '12 min',
    calories: '240 kcal',
  },

  // --- PLATOS FUERTES ---
  {
    id: 'lechon-asado',
    name: 'Lechón Asado',
    category: 'fuertes',
    description: 'Cerdo asado lentamente con mojo criollo, acompañado de yuca.',
    price: 18.5,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDaS8pc-w98D_WHAXOtKc2eEz5aX1ye5MsITCbO5TGAYo6DVPVQWERlOC0mCmnRNC8wn6z0QZiuPVbuzEu7uYSdmQSfEvnl_7IW10rBnXGvDSLs5nblvnIfzEa-hIVFhUJ3jP57FiBgYNwcTvewBjcpQasZ4uVPfbcQqohZFrua6dZ9Dx1tZrZ69HeWQLi0W91WEyku2eBFq0m6_16h5mvYSQxFfrFjUpdCKQr0sar3JfIn6CyAqkNyVKZtmtuLmpjvLb2k0i87u1Dg',
    featured: true,
    tags: ['Estrella de Lola', 'Sin Gluten', 'Cocina Lenta'],
    grandmotherNote:
      'Marinamos la pierna de puerco por 24 horas con naranja agria, orégano de monte y dientes de ajo enteros antes de asarlo por 6 horas.',
    ingredients: [
      'Pierna de cerdo marinada 24h',
      'Mojo criollo de cítricos',
      'Yuca al mojo con ajo frito',
      'Arroz congrí tradicional',
      'Chicharrón crujiente',
    ],
    prepTime: '20 min',
    calories: '680 kcal',
  },
  {
    id: 'ropa-vieja',
    name: 'Ropa Vieja Habanera',
    category: 'fuertes',
    description: 'Carne de res deshebrada cocinada en salsa de tomate criolla, pimientos asados y vino seco.',
    price: 17.0,
    imageUrl:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    tags: ['Plato Nacional', 'Sabroso'],
    grandmotherNote:
      'El nombre cuenta la leyenda de un viejo padre que no tenía qué dar a su familia y cocinó sus propias ropas con tanto amor que se convirtieron en un festín.',
    ingredients: ['Falda de res deshebrada', 'Sofrito de tomate maduro', 'Pimientos morrones', 'Vino seco cubano', 'Plátano maduro frito'],
    prepTime: '20 min',
    calories: '610 kcal',
  },
  {
    id: 'arroz-con-pollo',
    name: 'Arroz con Pollo a la Chorrera',
    category: 'fuertes',
    description: 'Arroz amarillo caldoso con jugosas piezas de pollo campesino, cerveza, pimientos y guisantes.',
    price: 16.5,
    imageUrl:
      'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
    tags: ['Para Compartir', 'Reconfortante'],
    grandmotherNote:
      'A la chorrera significa que el arroz queda meloso y brillante, cocinado en un caldo rico en azafrán y cerveza rubia.',
    ingredients: ['Pollo campesino macerado', 'Arroz valenciano', 'Azafrán natural', 'Cerveza y pimientos rojos', 'Maduros fritos'],
    prepTime: '25 min',
    calories: '590 kcal',
  },

  // --- POSTRES ---
  {
    id: 'flan-de-leche',
    name: 'Flan de Leche',
    category: 'postres',
    description: 'Tradicional flan bañado en caramelo oscuro.',
    price: 6.0,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB05pvL-aJDPHR_imQQq-lQrfhwlDLRsJkW1j8SuA9IovMmARUysC6E6kuy6OUSJl31NaQGfRf6nVyNypfaETYG0nG04Kmt9UjOYns2mTAjsi-U_4fUV54OheF5mh680UX-zwwrXre0OpQqfzNcvMigu3d-JlexrKYxpIa93ms5MwSXn045e4pbaGZLt8RzC-pW_MfNiZdHs4Xf2_039lCi27IMZ6IqA-dPye05K7Exfc6JhfU7zDkFY6fYTOAVzXS1PUNJnIXUWom8',
    featured: true,
    tags: ['Casero', 'Receta de la Abuela'],
    grandmotherNote:
      'El caramelo debe llegar a un tono ámbar oscuro justo antes del amargor, para contrastar con la dulzura sedosa del flan de huevo.',
    ingredients: [
      'Leche condensada y evaporada',
      'Yemas de huevo frescas',
      'Vainilla pura en vaina',
      'Caramelo tostado artesanal',
    ],
    prepTime: '5 min',
    calories: '310 kcal',
  },
  {
    id: 'tres-leches',
    name: 'Pastel Tres Leches Criollo',
    category: 'postres',
    description: 'Bizcocho esponjoso embebido en tres leches con un toque de ron añejo y merengue suizo quemado.',
    price: 7.0,
    imageUrl:
      'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
    tags: ['Favorito de la Casa'],
    grandmotherNote:
      'Dejamos reposar el bizcocho toda la noche para que absorba cada gota sin perder su ligereza celestial.',
    ingredients: ['Bizcocho artesanal', 'Crema de tres leches', 'Toque de Ron Cubano', 'Merengue suizo dorado', 'Canela molida'],
    prepTime: '5 min',
    calories: '380 kcal',
  },
  {
    id: 'cascos-de-guayaba',
    name: 'Cascos de Guayaba con Queso Crema',
    category: 'postres',
    description: 'Guayabas rojas en almíbar de canela con generosas porciones de queso crema cubano.',
    price: 5.5,
    imageUrl:
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
    tags: ['Clásico Cubano', 'Sin Gluten'],
    grandmotherNote:
      'El matrimonio perfecto en la cocina cubana: la dulzura frutal de la guayaba con la cremosidad láctea ligeramente salada.',
    ingredients: ['Guayabas rojas frescas', 'Almíbar al clavo y canela', 'Queso crema criollo', 'Hojitas de menta'],
    prepTime: '5 min',
    calories: '260 kcal',
  },

  // --- BEBIDAS ---
  {
    id: 'mojito-clasico',
    name: 'Mojito Clásico',
    category: 'bebidas',
    description: 'Refrescante mezcla de ron, hierbabuena, limón y soda.',
    price: 9.0,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCJaQYWpISvscsiYujJCZFtnPEF4PVEEIJAxdNNGf1HlqC0pWrvEYGXz7igBbTYa1tRoUeCuArut7-VN4LJuD_0OrmyWeZBZEHlANf1ugKlf68YQ7yZA-ZUTtZP3a56RI6j3kIMiFzgv87h0Fc_BIv4riVJVAL4WeXVyl4QuilhkITjUA-pgo28NESQTYc5Pyclk-ShhHun17ftrf-l9ie2KiOBSuGF0BZQbBtEvMFfpPFyBRg5OQmHPYc2rrH9PtUdVGBJdz8YMjRg',
    featured: true,
    tags: ['Ron Cubano', 'Coctelería', 'Refrescante'],
    grandmotherNote:
      'La hierbabuena se presiona suavemente con el azúcar blanca, nunca se tritura, para liberar los aceites sin amargar.',
    ingredients: [
      'Ron blanco añejado 3 años',
      'Hierbabuena fresca del huerto',
      'Zumo recién exprimido de limón verde',
      'Azúcar de caña',
      'Soda muy fría y hielo picado',
    ],
    prepTime: '5 min',
    calories: '160 kcal',
  },
  {
    id: 'daiquiri-fresa',
    name: 'Daiquirí Floridita de Fresa',
    category: 'bebidas',
    description: 'Ron blanco, fresas naturales, zumo de limón verde y hielo frappé preparado al momento.',
    price: 9.5,
    imageUrl:
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    tags: ['Coctelería Habanera', 'Frappé'],
    grandmotherNote:
      'El famoso cóctel de El Floridita en La Habana Vieja, equilibrado entre el dulzor de la fresa y la viveza del limón.',
    ingredients: ['Ron blanco de caña', 'Fresas silvestres', 'Limón criollo', 'Hielo frappé granulado'],
    prepTime: '5 min',
    calories: '180 kcal',
  },
  {
    id: 'cafecito-cubano',
    name: 'Cafecito Cubano con Espumita',
    category: 'bebidas',
    description: 'Expreso oscuro y concentrado coronado con una capa gruesa de espumita dorada de azúcar.',
    price: 3.5,
    imageUrl:
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    tags: ['Café Artesanal', 'Energía Criolla'],
    grandmotherNote:
      'La verdadera espumita se logra batiendo las primeras gotas del expreso caliente con el azúcar hasta que parezca caramelo.',
    ingredients: ['Grano 100% arábica tostado oscuro', 'Azúcar morena batida en espumita', 'Amor de sobremesa'],
    prepTime: '3 min',
    calories: '45 kcal',
  },
];
