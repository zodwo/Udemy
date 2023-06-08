const userData = [
    {
      id: 0,
      category: "python",
      img: "https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg",
      headTexts: "The Complete Python Bootcamp From Zero to Hero in Python",
      user: "Jose Portilla",
      rating: "4.6",
      starImg: `
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/halfStar.png">
          `,
      peopleNumber: "(465,229)",
      price: 89.99,
      bestseller: false,
    },
    {
      id: 1,
      category: "python",
      img: "https://img-b.udemycdn.com/course/240x135/543600_64d1_4.jpg",
      headTexts: "Automate the Boring Stuff with Python Programming",
      user: "Al Sweigard",
      rating: "4.7",
      starImg: `
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/halfStar.png">
          `,
      peopleNumber: "(107,504)",
      price: 89.99,
      bestseller: false,
    },
    {
      id: 2,
      category: "python",
      img: "https://img-b.udemycdn.com/course/240x135/950390_270f_3.jpg",
      headTexts: "Machine Learning A-Z™: AI, Python & R + ChatGPT Bonus [2023]",
      user: "Krill Ermenko",
      rating: "4.5",
      starImg: `
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/halfStar.png">
          `,
      peopleNumber: "(107,037)",
      price: 89.99,
      bestseller: true,
    },
    {
      id: 3,
      category: "python",
      img: "https://img-b.udemycdn.com/course/240x135/2776760_f176_10.jpg",
      headTexts: "100 Days of Code: The Complete Python Pro Bootcamp for 2023",
      user: "Dr.Angela Yu",
      rating: "4.7",
      starImg: `
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/halfStar.png">
          `,
      peopleNumber: "(203,321)",
      price: "74.99",
      bestseller: true,
    },
    {
      id: 4,
      category: "python",
      img: "https://img-b.udemycdn.com/course/240x135/2485240_d405_7.jpg",
      headTexts: "Python : Master Programming and Development with 15 Projects",
      user: "Jose Portilla",
      rating: "4.3",
      starImg: `
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/halfStar.png">
          `,
      peopleNumber: "(13,287)",
      price: "64.99",
      bestseller: false,
    },
    {
      id: 5,
      category: "python",
      img: "https://img-b.udemycdn.com/course/240x135/903744_8eb2.jpg",
      headTexts: "Python for Data Science and Machine Learning Bootcamp",
      user: "Jose Portilla",
      rating: "4.6",
      starImg: `
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/halfStar.png">
          `,
      peopleNumber: "(131,362)",
      price: "124.99",
      bestseller: false,
    },
    {
      id: 6,
      category: "python",
      img: "https://img-b.udemycdn.com/course/240x135/629302_8a2d_2.jpg",
      headTexts: "Learn Python Programming Masterclass",
      user: "Tim Buchalka",
      rating: "4.6",
      starImg: `
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/halfStar.png">
          `,
      peopleNumber: "(98,731)",
      price: "89.99",
      bestseller: false,
    },
    {
      id: 7,
      category: "python",
      img: "https://img-b.udemycdn.com/course/240x135/3047216_4888_2.jpg",
      headTexts: "Python for beginners - Learn all the basics of python",
      user: "Yassin Marco",
      rating: "4.3",
      starImg: `
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/halfStar.png">
          `,
      peopleNumber: "(98,731)",
      price: "54.99",
      bestseller: false,
    },
    {
      id: 8,
      category: "python",
      img: "https://img-b.udemycdn.com/course/240x135/1495788_1aaa_2.jpg",
      headTexts: "Python for beginners - Learn all the basics of python",
      user: "Ivan Gomes",
      rating: "4.5",
      starImg: `
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/halfStar.png">
          `,
      peopleNumber: "(12,004)",
      price: "69.99",
      bestseller: false,
    },
    {
      id: 9,
      category: "python",
      img: "https://img-b.udemycdn.com/course/240x135/1554180_150a_2.jpg",
      headTexts: "Python Network Programming for Network Engineers (Python 3)",
      user: "David Bombal",
      rating: "4.8",
      starImg: `
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/halfStar.png">
          `,
      peopleNumber: "(8,169)",
      price: "89.99",
      bestseller: false,
    },
    {
      id: 10,
      category: "python",
      img: "https://img-b.udemycdn.com/course/240x135/692188_9da7_30.jpg",
      headTexts: "The Python Mega Course: Learn Python in 60 Days with 20 Apps",
      user: "Ardit Sulce",
      rating: "4.6",
      starImg: `
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/FullStar.png">
          <img src="img/star/halfStar.png">
          `,
      peopleNumber: "(62,264)",
      price: "89.99",
      bestseller: false,
    },
  ];
  