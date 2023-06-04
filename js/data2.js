const userData = [
    {
        category : "python",
        img:"https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg",
        headTexts : "The Complete Python Bootcamp From Zero to Hero in Python",
        user: "Jose Portilla",
        rating: "4.6",
        starImg:`
        <img src="img/star/FullStar.png">
        <img src="img/star/FullStar.png">
        <img src="img/star/FullStar.png">
        <img src="img/star/FullStar.png">
        <img src="img/star/halfStar.png">
        `,
        peopleNumber : "(465,229)",
        price: "89.99"
    },
    {
        category : "python",
        img:"https://img-b.udemycdn.com/course/240x135/543600_64d1_4.jpg",
        headTexts : "Automate the Boring Stuff with Python Programming",
        user: "Al Sweigard",
        rating: "4.7",
        starImg:`
        <img src="img/star/FullStar.png">
        <img src="img/star/FullStar.png">
        <img src="img/star/FullStar.png">
        <img src="img/star/FullStar.png">
        <img src="img/star/halfStar.png">
        `,
        peopleNumber : "(107,504)",
        price: "89.99"
    },
    {
        category : "python",
        img:"https://img-b.udemycdn.com/course/240x135/950390_270f_3.jpg",
        headTexts : "Machine Learning A-Z™: AI, Python & R + ChatGPT Bonus [2023]",
        user: "Krill Ermenko",
        rating: "4.5",
        starImg:`
        <img src="img/star/FullStar.png">
        <img src="img/star/FullStar.png">
        <img src="img/star/FullStar.png">
        <img src="img/star/FullStar.png">
        <img src="img/star/halfStar.png">
        `,
        peopleNumber : "(107,037)",
        price: "89.99"
    },
    {
        category : "python",
        img:"https://img-b.udemycdn.com/course/240x135/2776760_f176_10.jpg",
        headTexts : "100 Days of Code: The Complete Python Pro Bootcamp for 2023",
        user: "Dr.Angela Yu",
        rating: "4.7",
        starImg:`
        <img src="img/star/FullStar.png">
        <img src="img/star/FullStar.png">
        <img src="img/star/FullStar.png">
        <img src="img/star/FullStar.png">
        <img src="img/star/halfStar.png">
        `,
        peopleNumber : "(203,321)",
        price: "74.99"
    },
    {
        category : "python",
        img:"https://img-b.udemycdn.com/course/240x135/2485240_d405_7.jpg",
        headTexts : "Python : Master Programming and Development with 15 Projects",
        user: "Jose Portilla",
        rating: "4.3",
        starImg:`
        <img src="img/star/FullStar.png">
        <img src="img/star/FullStar.png">
        <img src="img/star/FullStar.png">
        <img src="img/star/FullStar.png">
        <img src="img/star/halfStar.png">
        `,
        peopleNumber : "(13,287)",
        price: "64.99"
    }
]

const divIMG = document.querySelector("#bgimg")
const headTexts = document.querySelector(".headtexts")
const user = document.querySelector(".creator")
const rating = document.querySelector(".rating")
const star = document.querySelector(".star-wrapper")
const peopleNumber = document.querySelector(".nmbr-of-people")
const price = document.querySelector(".price")


