var cheerio = require("cheerio")
var axios = require("axios")
var got = require("got")
var fetch = require('node-fetch');

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
		       
		       
    fetch(encodeURI(`https://anony-vip-edition.herokuapp.com/api/news?apikey=hiruwa`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.news;
	    
	    console.log(result)
	    
	    });
            });
            });
            
