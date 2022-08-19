var cheerio = require("cheerio")
var axios = require("axios")
var got = require("got")

const url = "https://www.hirunews.lk/local-news.php";
    axios.get(url)
        .then(response => {

           
	    results = [];
            const $ = cheerio.load(response.data);
               $('.section > .trending-section  > .row ').each((i, element) => {
            
            const title = $(element).find("img").attr("alt");
            const image = $(element).find('img').attr('src');
            const link = $(element).find('a').attr('href');
            console.log(title , link)
            });
            });
            
const anony = `https://anony-vip-edition.herokuapp.com/api/news?apikey=hiruwa`;

		const response = await got(anony);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) 
			
			var title = json.news[0].title
			var img = json.news[0].image
			var rm = json.news[0].ReadMore
			var time = json.news[0].dateAndTime
            
const ur = rm ;
    axios.get(ur)
         .then(responce => {
         
         const $ = cheerio.load(response.data);
         
         $('.main-article-section ').each((i, element) => {
            
        const imag = $(element).find('img').attr('data-src');
        console.log(imag)
        });
        });
        
