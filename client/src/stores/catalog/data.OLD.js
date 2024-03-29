const SHOP_DATA = {
  collections: {
    hats: {
      heroImgUrl: 'https://i.ibb.co/cvpntL1/hats.png'
    },
    sneakers: {
      heroImgUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
    },
    jackets: {
      heroImgUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
    },
    womens: {
      heroImgUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      heroSize: 'large'
    },
    mens: {
      heroImgUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      heroSize: 'large'
    }
  },
  products: {
    '52e778b1-0b58-4727-aa7c-76249f2cc582': {
      name: 'Brown Brim',
      imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
      ckeys: ['hats'],
      price: 25
    },
    'b1868dfb-b3be-4ba7-b084-9bc6d1e68e68': {
      name: 'Blue Beanie',
      imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
      ckeys: ['hats'],
      price: 18
    },
    'f0dd8309-a6e1-4da2-85b2-1821f566df81': {
      name: 'Brown Cowboy',
      imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
      ckeys: ['hats'],
      price: 35
    },
    'e1c34b77-a48e-4d4e-b653-aeab0f00c20d': {
      name: 'Grey Brim',
      imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
      ckeys: ['hats'],
      price: 25
    },
    '931c822d-7978-42ee-b4da-39bbdcd57216': {
      name: 'Green Beanie',
      imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
      ckeys: ['hats'],
      price: 18
    },
    '96b4db7b-27a6-4558-8ce4-7770526c89f5': {
      name: 'Palm Tree Cap',
      imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
      ckeys: ['hats'],
      price: 14
    },
    'cf9910f8-be68-4a21-8db1-692cce06b7e9': {
      name: 'Red Beanie',
      imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
      ckeys: ['hats'],
      price: 18
    },
    'ecb6285c-d6a4-46e3-b600-2eedbfcfa5b3': {
      name: 'Wolf Cap',
      imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
      ckeys: ['hats'],
      price: 14
    },
    'f61da8cc-d8df-4846-8d67-8d5117c64601': {
      name: 'Blue Snapback',
      imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
      ckeys: ['hats'],
      price: 16
    },

    'e75c4676-2a82-46e1-9387-86c4cadadf98': {
      name: 'Adidas NMD',
      imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
      ckeys: ['sneakers'],
      price: 220
    },
    '274826c0-576d-4fc7-b642-5a5043e9dffc': {
      name: 'Adidas Yeezy',
      imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
      ckeys: ['sneakers'],
      price: 280
    },
    '16fbae10-c021-4677-9df3-8059f91584fd': {
      name: 'Black Converse',
      imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
      ckeys: ['sneakers'],
      price: 110
    },
    '0e2ebac5-1b36-4680-a527-1abfe5d65d8f': {
      name: 'Nike White AirForce',
      imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
      ckeys: ['sneakers'],
      price: 160
    },
    '438e36d6-26f8-4a50-bb3c-d2d6363670a0': {
      name: 'Nike Red High Tops',
      imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
      ckeys: ['sneakers'],
      price: 160
    },
    '33e95abd-08b4-431f-bfec-f065c6393d67': {
      name: 'Nike Brown High Tops',
      imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
      ckeys: ['sneakers'],
      price: 160
    },
    '6c469c6b-1f88-404a-b107-1abf4f81c797': {
      name: 'Air Jordan Limited',
      imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
      ckeys: ['sneakers'],
      price: 190
    },
    'cba489ed-f34e-4624-9fe8-c4f5ab6348f7': {
      name: 'Timberlands',
      imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
      ckeys: ['sneakers'],
      price: 200
    },

    '1178a8e4-d64a-4a30-b07f-140191f1a9f8': {
      name: 'Black Jean Shearling',
      imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
      ckeys: ['jackets'],
      price: 125
    },
    'ec26986d-7667-4ffa-91bf-d09896c50cdb': {
      name: 'Blue Jean Jacket',
      imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
      ckeys: ['jackets'],
      price: 90
    },
    '32742b0e-ea5f-414c-810f-65f3d561da2c': {
      name: 'Grey Jean Jacket',
      imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
      ckeys: ['jackets'],
      price: 90
    },
    '8b1efbe4-8c6e-4408-a2a6-36a1c522c4cf': {
      name: 'Brown Shearling',
      imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
      ckeys: ['jackets'],
      price: 165
    },
    '6a991384-40c5-4dbb-b61f-e7de7c80c538': {
      name: 'Tan Trench',
      imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
      ckeys: ['jackets'],
      price: 185
    },

    '4fdf4e54-71bb-4f18-8411-dcbfd18cf4fe': {
      name: 'Blue Tanktop',
      imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
      ckeys: ['womens'],
      price: 25
    },
    'b8bd2bdd-5d4c-4b5b-80c3-cb7a0f1c2f5a': {
      name: 'Floral Blouse',
      imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
      ckeys: ['womens'],
      price: 20
    },
    'fdcf21e2-019d-482a-a52c-475e848a667a': {
      name: 'Floral Dress',
      imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
      ckeys: ['womens'],
      price: 80
    },
    '1edd8227-4d4e-4df7-b338-375d8139ef92': {
      name: 'Red Dots Dress',
      imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
      ckeys: ['womens'],
      price: 80
    },
    'dde67c27-93b9-4a25-b281-0852fc3c8846': {
      name: 'Striped Sweater',
      imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
      ckeys: ['womens'],
      price: 45
    },
    '00df3101-c2f1-49f3-a4ca-3f3abc7bd5e7': {
      name: 'Yellow Track Suit',
      imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
      ckeys: ['womens'],
      price: 135
    },
    '16ad1c88-ae48-4586-9061-166acf85f844': {
      name: 'White Blouse',
      imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
      ckeys: ['womens'],
      price: 20
    },

    'dca611b7-6410-444e-90d7-104d561afa99': {
      name: 'Camo Down Vest',
      imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
      ckeys: ['mens'],
      price: 325
    },
    '979ee457-df2f-48b9-ab60-5b2ef812aa4f': {
      name: 'Floral T-shirt',
      imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
      ckeys: ['mens'],
      price: 20
    },
    'bd88a17d-cfbe-4af1-9c39-6cc09995ab1c': {
      name: 'Black & White Longsleeve',
      imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
      ckeys: ['mens'],
      price: 25
    },
    '19bb0080-b47c-4726-9f98-ad73904b7a39': {
      name: 'Pink T-shirt',
      imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
      ckeys: ['mens'],
      price: 25
    },
    'b30ae7bf-e2a7-4002-b43d-8ca6b9c5d20c': {
      name: 'Jean Long Sleeve',
      imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
      ckeys: ['mens'],
      price: 40
    },
    '172d91ea-deb8-45dc-b26d-fb4e039049f2': {
      name: 'Burgundy T-shirt',
      imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
      ckeys: ['mens'],
      price: 25
    }
  }
}


export default SHOP_DATA
