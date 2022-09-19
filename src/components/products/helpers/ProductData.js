import redlipstick from '../../../assets/images/sassyheroimg.png';
import lipglossHero from '../../../assets/images/heroImg2.png';
import smokeyGloss from '../../../assets/images/smokeyGloss.png'
import peachGloss from '../../../assets/images/peachGloss.png';
import exquisiteGloss from '../../../assets/images/exquisiteGloss.png';
const productsArray =[

    {
        name: 'smokey rose',
        price: 45000,
        id: 2,
        img:[smokeyGloss,lipglossHero, peachGloss],
        amount: 0,
        reviews: 200,
    },

    {
        name: 'orchid princess',
        price: 30000,
        id: 4,
        img:[lipglossHero, smokeyGloss],
        amount: 0,
        reviews: 100,


    },
    {
        name: 'ocean girl',
        price: 30000,
        id: 1,
        img: [exquisiteGloss, peachGloss],
        amount: 0,
        reviews: 50,
    },
    {
        name: 'lovely peach',
        price: 30000,
        id: 3,
        img: [peachGloss, exquisiteGloss],
        amount: 0,
        reviews: 100,
    },
    {
        name: 'The queen',
        price: 30000,
        id: 5,
        img: [exquisiteGloss, peachGloss],
        amount: 0,
        reviews: 20,
    },
    {
        name: 'Tender',
        price: 30000,
        id: 6,
        img: [peachGloss, exquisiteGloss],
        amount: 0,
        reviews: 300,
    }
]
export default productsArray;