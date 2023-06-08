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
    {
        id: 11,
        category: "excel",
        img: "https://img-b.udemycdn.com/course/240x135/793796_0e89_2.jpg",
        headTexts: "Microsoft Excel - Excel from Beginner to Advanced",
        user: "Kyle Prew",
        rating: "4.6",
        starImg: `
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/halfStar.png">
            `,
        peopleNumber: "(378,151)",
        price: "89.99",
        bestseller: true,
      },
      {
        id: 12,
        category: "excel",
        img: "https://img-b.udemycdn.com/course/240x135/2605732_e3d5_3.jpg",
        headTexts: "Zero to Hero in Microsoft Excel: Complete Excel guide 2023",
        user: "Start-Tech-Academy",
        rating: "4.5",
        starImg: `
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/halfStar.png">
            `,
        peopleNumber: "(17,369)",
        price: "89.99",
        bestseller: false,
      },
      {
        id: 13,
        category: "excel",
        img: "https://img-b.udemycdn.com/course/240x135/2070737_3af1_4.jpg",
        headTexts: "Microsoft Excel Weekender Crash Course",
        user: "Start-Tech-Academy",
        rating: "4.4",
        starImg: `
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/halfStar.png">
            `,
        peopleNumber: "(7,654)",
        price: "64.99",
        bestseller: false,
      },
      {
        id: 14,
        category: "excel",
        img: "https://img-b.udemycdn.com/course/240x135/3011572_33ad_2.jpg",
        headTexts: "Microsoft Excel - Learn MS EXCEL For DATA Analysis",
        user: "Yassin Marco",
        rating: "4.3",
        starImg: `
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/halfStar.png">
            `,
        peopleNumber: "(4,874)",
        price: "24.99",
        bestseller: false,
      },
      {
        id: 15,
        category: "excel",
        img: "https://img-b.udemycdn.com/course/240x135/3338560_f31f.jpg",
        headTexts: "Microsoft Excel -Basic Excel/ Advanced Excel Formulas",
        user: "Yassin Marco",
        rating: "4.3",
        starImg: `
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            `,
        peopleNumber: "(3,845)",
        price: "49.99",
        bestseller: false,
      },
      {
        id: 16,
        category: "excel",
        img: "https://img-b.udemycdn.com/course/240x135/321410_d9c5_4.jpg",
        headTexts: "Beginner to Pro in Excel: Financial Modeling and Valuation",
        user: "360 Careers",
        rating: "4.5",
        starImg: `
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/halfStar.png">
            `,
        peopleNumber: "(46,676)",
        price: "129.99",
        bestseller: true,
      },
      {
        id: 17,
        category: "excel",
        img: "https://img-b.udemycdn.com/course/240x135/3338560_f31f.jpg",
        headTexts: "Microsoft Excel -Basic Excel/ Advanced Excel Formulas",
        user: "Yassin Marco",
        rating: "4.3",
        starImg: `
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/halfStar.png">
            `,
        peopleNumber: "(1,845)",
        price: "54.99",
        bestseller: false,
      },
      {
        id: 18,
        category: "excel",
        img: "https://img-b.udemycdn.com/course/240x135/3057290_6754_9.jpg",
        headTexts: "Microsoft Excel Beginner to Advanced w/ Data Analysis 101",
        user: "Irfan Sharif",
        rating: "4.5",
        starImg: `
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/halfStar.png">
            `,
        peopleNumber: "(4,007)",
        price: "69.99",
        bestseller: false,
      },
      {
        id: 19,
        category: "excel",
        img: "https://img-b.udemycdn.com/course/240x135/977438_476d_10.jpg",
        headTexts: "Microsoft Excel - Data Analysis with Excel Pivot Tables",
        user: "Maven Analytics",
        rating: "4.7",
        starImg: `
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/halfStar.png">
            `,
        peopleNumber: "(50,164)",
        price: "74.99",
        bestseller: true,
      },
      {
        id: 20,
        category: "webdev",
        img: "https://img-b.udemycdn.com/course/240x135/1565838_e54e_16.jpg",
        headTexts: "The Complete 2023 Web Development Bootcamp",
        user: "Dr.Angela Yu",
        rating: "4.7",
        starImg: `
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/halfStar.png">
            `,
        peopleNumber: "(291,538)",
        price: "89.99",
        bestseller: true,
      },
      {
        id: 21,
        category: "webdev",
        img: "	https://img-b.udemycdn.com/course/240x135/625204_436a_3.jpg",
        headTexts: "The Web Developer Bootcamp 2023",
        user: "Colt Steele",
        rating: "4.7",
        starImg: `
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/halfStar.png">
            `,
        peopleNumber: "(259,525)",
        price: "89.99",
        bestseller: false,
      },
      {
        id: 22,
        category: "webdev",
        img: "https://img-b.udemycdn.com/course/240x135/965528_737d_7.jpg",
        headTexts: "Web Development Masterclass - Online Certification Course",
        user: "YouAccel Traning",
        rating: "4.5",
        starImg: `
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/halfStar.png">
            `,
        peopleNumber: "(9,095)",
        price: "89.99",
        bestseller: false,
      },
      {
        id: 23,
        category: "webdev",
        img: "https://img-b.udemycdn.com/course/240x135/764164_de03_5.jpg",
        headTexts: "The Complete Web Developer Course 3.0",
        user: "Rob Pervical",
        rating: "4.5",
        starImg: `
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/halfStar.png">
            `,
        peopleNumber: "(71,273)",
        price: "74.99",
        bestseller: false,
      },
      {
        id: 24,
        category: "webdev",
        img: "	https://img-b.udemycdn.com/course/240x135/1415652_ad99_4.jpg",
        headTexts: "Practical Web Development: 22 Courses in 1",
        user: "Creative Online School",
        rating: "4.2",
        starImg: `
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/halfStar.png">
            `,
        peopleNumber: "(4,145)",
        price: "79.99",
        bestseller: false,
      },
      {
        id: 25,
        category: "webdev",
        img: "	https://img-b.udemycdn.com/course/240x135/1415652_ad99_4.jpg",
        headTexts: "Practical Web Development: 22 Courses in 1",
        user: "Creative Online School",
        rating: "4.2",
        starImg: `
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/FullStar.png">
            <img src="img/star/halfStar.png">
            `,
        peopleNumber: "(4,145)",
        price: "79.99",
        bestseller: false,
      },
  ];
  