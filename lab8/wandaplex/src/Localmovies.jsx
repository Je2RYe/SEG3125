import AllMovies from "./AllMovieLists";
import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import { useTranslation} from 'react-i18next';
i18n.use(LanguageDetector).use(initReactI18next).init({
  debug:true,
  lng:"en",
  resources:{
    en: {
      translation: {

        KFpanda4:"KungFu Panda 4",
        KFDate:"March 1, 2024",
        Length:"Length",
        KFLength:"1h 34min",
        Synopsis:"Synopsis",
        KFSynopsis:"After Po is tapped to become the Spiritual Leader of the Valley of Peace, he needs to find and train a new Dragon Warrior, while a wicked sorceress plans to re-summon all the master villains whom Po has vanquished to the spirit realm.",
        LeaveAComment:"Leave a Comment",


        Comments:"Comments",
        Submit:"Submit",
        YourComment:"Your Comment( Max 200 words)*",
        YourName:"Your Name*",
        YourEmail:"Your E-mail(optional)",
        Addcomment:"Add a Comment",
        q1:"How Can I return to home page?",
        q2:"How to change language of the website?",
        q3:"Can I add comments or rate the movies?",
        q4:"I didn't find the movie I wanted to see",
        close:"Close",
        horror:"Horror",
        sf:"Science Fiction",
        Action:"Action",
        Adventure:"Adventure",
        Anime:"Anime",
        Biograph:"Biograph",
        Comedy:"Comedy",
        Crime:"Crime",
        Documentary:"Documentary",
        
        Apply:"Apply",
        clear:"clear all",
        moviesheading:"Movies",
        genre:"Genre",
        score:"Score",
        rating:"Rating",
        Watch:"Movie Trailer",
        helptext:"help",
        searchtext:"Search",
        "movies": {
          kfpanda: {
            "name": "Kung Fu Panda 4",
            trailerUrl: "https://www.youtube.com/watch?v=cO2ZLBAbkjI",
            "age": "PG",
            score:"4",
            imgUrl: "https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmediafiles.cineplex.com%2FCentral%2FFilm%2FPosters%2F34402_320_470.jpg&w=1920&q=75",
            "genre": ["Action", "Comedy","Anime","Adventure","Action"]
          },
          dp2:{
            name: "Dune: Part two",
            trailerUrl: "https://www.youtube.com/watch?v=0UtYt6Vg2nY",
            age: "PG-13",
            score:5,
            imgUrl: "https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmediafiles.cineplex.com%2FCentral%2FFilm%2FPosters%2F33602_320_470.jpg&w=1920&q=75",
            genre: ["Science Fiction","Adventure","Action"]
          },
          GxKTNE:{
            name: "Godzilla x Kong: The New Empire",
            age: "PG-13",
            score:3,
            trailerUrl: "https://www.youtube.com/watch?v=lV1OOlGwExM",
            imgUrl: "https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmediafiles.cineplex.com%2FCentral%2FFilm%2FPosters%2F34289_320_470.jpg&w=1920&q=75",
            genre: ["Action", "Science Fiction"]
          },
          GbFE:{
            name: "Ghostbusters: Frozen Empire",
            age: "PG-13",
            score:2,
            trailerUrl: "https://www.youtube.com/watch?v=wFNK_KEmcWs",
            imgUrl: "https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmediafiles.cineplex.com%2FCentral%2FFilm%2FPosters%2F34277_320_470.jpg&w=1920&q=75",
            genre: ["Comedy", "Science Fiction","Adventure","Action"]
          },
          FG:{
            name: "French Girl (English and French w/e.s.t.)",
            age: "R",
            score:1,
            trailerUrl: "https://www.youtube.com/watch?v=kzA_s24aHmk",
            imgUrl: "https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmediafiles.cineplex.com%2FCentral%2FFilm%2FPosters%2F35909_320_470.jpg&w=1920&q=75",
            genre: ["Biograph", "Comedy"]
          },
          Heyvkt:{
            name: "Hey, Viktor!",
            age: "R",
            score:4,
            trailerUrl: "https://www.youtube.com/watch?v=0UoC1ka-r6U",
            imgUrl: "https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmediafiles.cineplex.com%2FCentral%2FFilm%2FPosters%2F36145_320_470.jpg&w=1920&q=75",
            genre: ["Comedy"]
          }
        }
      }
    },
    cn:{
      translation: {

        KFpanda4:"功夫熊猫4",
        KFDate:"3月1号， 2024",
        Length:"时长",
        KFLength:"1小时 34分",
        Synopsis:"剧情简介",
        KFSynopsis:"在阿宝被任命为和平谷的精神领袖后，他需要找到并训练一名新的神龙大侠，而一个邪恶的女巫计划重新召唤阿宝已经征服的所有大反派到精神领域。",
        LeaveAComment:"写评论",
        
        Comments:"评论",
        Submit:"提交",
        YourComment:"你的评论(最多200字)*",
        YourEmail:"你的邮箱（可选)",
        YourName:"你的名字*",
        Addcomment:"添加评论",
        q1:"我怎么回到主页面?",
        q2:"我怎么切换网站语言？",
        q3:"我可以写评论或者给电影打分吗?",
        q4:"我找不到我想要看的电影",
        close:"关闭",
        Action:"动作",
        Adventure:"冒险",
        Anime:"动画",
        Biograph:"传记",
        Comedy:"喜剧",
        Crime:"犯罪",
        Documentary:"纪录片",
        horror:"恐怖",
        sf:"科幻",
        
        Apply:"应用",
        clear:"清除",
        moviesheading:"电影",
        genre:"类型",
        score:"评分",
        rating:"评级",
        Watch:"电影预告片",
        helptext:"帮助",
        searchtext:"搜索",
        "movies": {
          kfpanda: {
            "name": "功夫熊猫 4",
            trailerUrl: "https://www.youtube.com/watch?v=cO2ZLBAbkjI",
            age: "PG",
            score:4,
            imgUrl: "https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmediafiles.cineplex.com%2FCentral%2FFilm%2FPosters%2F34402_320_470.jpg&w=1920&q=75",
            "genre": ["Action", "Comedy","Anime","Adventure"]
          },
          dp2:{
            name: "沙丘2",
            trailerUrl: "https://www.youtube.com/watch?v=0UtYt6Vg2nY",
            age: "PG-13",
            score:5,
            imgUrl: "https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmediafiles.cineplex.com%2FCentral%2FFilm%2FPosters%2F33602_320_470.jpg&w=1920&q=75",
            genre: ["Science Fiction","Adventure","Action"]
          },
          GxKTNE:{
            name: "哥吉拉与金刚：新帝国",
            age: "PG-13",
            score:3,
            trailerUrl: "https://www.youtube.com/watch?v=lV1OOlGwExM",
            imgUrl: "https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmediafiles.cineplex.com%2FCentral%2FFilm%2FPosters%2F34289_320_470.jpg&w=1920&q=75",
            genre: ["Action", "Science Fiction"]
          },
          GbFE:{
            name: "超能敢死队2:冰雪帝国",
            age: "PG-13",
            score:2,
            trailerUrl: "https://www.youtube.com/watch?v=wFNK_KEmcWs",
            imgUrl: "https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmediafiles.cineplex.com%2FCentral%2FFilm%2FPosters%2F34277_320_470.jpg&w=1920&q=75",
            genre: ["Comedy", "Science Fiction","Adventure","Action"]
          },
          FG:{
            name: "法国女孩",
            age: "R",
            score:1,
            trailerUrl: "https://www.youtube.com/watch?v=kzA_s24aHmk",
            imgUrl: "https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmediafiles.cineplex.com%2FCentral%2FFilm%2FPosters%2F35909_320_470.jpg&w=1920&q=75",
            genre: ["Biograph", "Comedy"]
          },
          Heyvkt:{
            name: "嘿，维克托!",
            age: "R",
            score:4,
            trailerUrl: "https://www.youtube.com/watch?v=0UoC1ka-r6U",
            imgUrl: "https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmediafiles.cineplex.com%2FCentral%2FFilm%2FPosters%2F36145_320_470.jpg&w=1920&q=75",
            genre: ["Comedy"]
          }
        }
      }
    }
  }
});

const movieKeys = ["kfpanda", "dp2", "GxKTNE", "GbFE", "FG", "Heyvkt"];

const Localmovies = movieKeys.map((key) => ({
  id: key,
  name: i18n.t(`movies.${key}.name`),
  age: i18n.t(`movies.${key}.age`),
  score: i18n.t(`movies.${key}.score`),
  genre: i18n.t(`movies.${key}.genre`, { returnObjects: true }),
  trailerUrl: i18n.t(`movies.${key}.trailerUrl`),
  imgUrl: i18n.t(`movies.${key}.imgUrl`),
}));

export default Localmovies;