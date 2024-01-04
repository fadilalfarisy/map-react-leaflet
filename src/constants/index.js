import { instagram } from "../assets/icons";

export const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/map", label: "Map" },
    { to: "/contact", label: "Contact Us" },
    { to: "/news", label: "News" },
];


export const features = [
    {
        imgURL: instagram,
        title: "Zoom In/Out",
        description: "Memungkinkan pengguna untuk memperbesar atau memperkecil tampilan peta"
    },
    {
        imgURL: instagram,
        title: "Fullscreen",
        description: "Pengguna dapat memperluas tampilan peta menjadi layar penuh"
    },
    {
        imgURL: instagram,
        title: "Your Location",
        description: "Memungkinkan aplikasi untuk menentukan lokasi pengguna"
    },
    {
        imgURL: instagram,
        title: "Home",
        description: "Pengguna dapat kembali ke lokasi awal dengan satu click"
    },
    {
        imgURL: instagram,
        title: "Direction",
        description: "Memberikan petunjuk arah atau rute dari satu lokasi ke lokasi lain"
    },
    {
        imgURL: instagram,
        title: "Compass Point",
        description: "Menunjukkan arah mata angin"
    },
    {
        imgURL: instagram,
        title: "Scale",
        description: "Skala tampilan peta dapat disesuaikan dengan kebutuhan"
    },
    {
        imgURL: instagram,
        title: "Lat & Long",
        description: "Memberikan informasi mengenai koordinat geografis suatu lokasi"
    },
    {
        imgURL: instagram,
        title: "Search",
        description: "Pengguna dapat dengan mudah mencari lokasi tertentu"
    },
    {
        imgURL: instagram,
        title: "Layers Control",
        description: "Memungkinkan pengguna untuk mengontrol lapisan atau informasi tertentu pada peta"
    },
    {
        imgURL: instagram,
        title: "Mini Map",
        description: "Memberikan gambaran keseluruhan dari area yang sedang ditampilkan"
    },
];


export const footerLinks = [
    {
        title: "Mosque",
        links: [
            { name: "Wihdatul Ummah", link: "/" },
            { name: "Al Muttaqien", link: "/" },
            { name: "As Sunnah", link: "/" },
            { name: "Jami' Al Muthmainnah", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "How it works", link: "/" },
            { name: "Contact us", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "abdillah20@mhs.uinjkt.ac.id", link: "mailto:abdillah20@mhs.uinjkt.ac.id" },
            { name: "0818-0399-3321", link: "tel:0818-0399-3321" },
        ],
    },
];

export const socialMedia = [
    { src: instagram, alt: "instagram logo" },
    { src: instagram, alt: "instagram logo" },
    { src: instagram, alt: "instagram logo" },
];

import popularMosque1 from '../assets/masjid1/1.jpg'
import popularMosque2 from '../assets/masjid14/1.jpg'
import popularMosque3 from '../assets/masjid12/1.jpg'
import popularMosque4 from '../assets/masjid4/1.jpg'

export const popularMosque = [
    {
        "mosque": {
            "id": 1,
            'imgURL': popularMosque1,
            "name": "Wihdatul Ummah",
            "latitude": -6.353292,
            "longitude": 106.777251,
            "address": "Jl. Bukit Barisan",
            "rating": 4.9,
            "reviews": 584,
            "info": "Jl. Bukit Barisan No.Blok J, RT.011/RW.014, Limo, Kec. Limo, Kota Depok, Jawa Barat 16514",
            "facilities": [
                "Tempat Wudhu",
                "Kipas",
                "Alat Ibadah",
                "Al-Qur'an",
                "Mimbar",
                "Tempat Penitipan Sepatu"
            ]
        }
    },
    {
        "mosque": {
            "id": 14,
            'imgURL': popularMosque2,
            "name": "Al Muttaqien",
            "latitude": -6.360533,
            "longitude": 106.776425,
            "address": "Jl. Kp. Grogol Sebrang",
            "rating": 4.8,
            "reviews": 465,
            "info": "Jl. Naman Iskandar No.1, Limo, Kec. Limo, Kota Depok, Jawa Barat 16514",
            "facilities": [
                "Tempat Wudhu",
                "Kipas",
                "Alat Ibadah",
                "Al-Qur'an",
                "Mimbar",
                "Tempat Penitipan Sepatu"
            ]
        }
    },
    {
        "mosque": {
            "id": 12,
            "name": "As Sunnah",
            'imgURL': popularMosque3,
            "latitude": -6.379376,
            "longitude": 106.773367,
            "address": "Jl. Tiga Putra",
            "rating": 4.9,
            "reviews": 252,
            "info": "Jl. Tiga Putra No.RT 01/011, Meruyung, Kec. Limo, Kota Depok, Jawa Barat 16532",
            "facilities": [
                "Tempat Wudhu",
                "Kipas",
                "Alat Ibadah",
                "Al-Qur'an",
                "Mimbar",
                "Tempat Penitipan Sepatu"
            ]
        }
    },
    {
        "mosque": {
            "id": 4,
            'imgURL': popularMosque4,
            "name": "Jami' Al Muthmainnah",
            "latitude": -6.382336,
            "longitude": 106.768899,
            "address": "Jl. Meruyung Raya",
            "rating": 4.8,
            "reviews": 193,
            "info": "Jl. Meruyung Raya, Meruyung, Kec. Limo, Kota Depok, Jawa Barat 16515",
            "facilities": [
                "Tempat Wudhu",
                "Kipas",
                "Alat Ibadah",
                "Al-Qur'an",
                "Mimbar",
                "Tempat Penitipan Sepatu"
            ]
        }
    },
]