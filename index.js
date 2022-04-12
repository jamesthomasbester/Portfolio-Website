const projects =     [
    {
        "id": 1,
        "Title": "Crossword Generator",
        "datetime": "January 07, 2022 1:54:16 PM",
        "Tag": "Javascript",
        "Image": "map",
        "Link": "/weatherApp"
    },
    {
        "id": 2,
        "Title": "React Calculator App",
        "datetime": "January 08, 2022 1:54:16 PM",
        "Tag": "React",
        "Image": "calc",
        "Link": "/CalculatorApp"
    },
    {
        "id": 3,
        "Title": "Weather App",
        "datetime": "November 20, 2021 12:35:49 PM",
        "Tag": "Javascript",
        "Image": "IMG_4795",
        "Link": "/CalculatorApp"
    },
    {
        "id": 4,
        "Title": "Daily Work Task Scheduler",
        "datetime": "November 20, 2021 12:35:49 PM",
        "Tag": "Javascript",
        "Image": "dailyTask.png",
        "Link": "https://jamesthomasbester.github.io/DailyTaskScheduler/"
    },
    {
        "id": 5,
        "Title": "Password Generator",
        "datetime": "November 20, 2021 12:35:49 PM",
        "Tag": "Javascript",
        "Image": "PasswordGen.png",
        "Link": "https://jamesthomasbester.github.io/passwordGenerator/"
    },
    {
        "id": 5,
        "Title": "Javascript Quiz",
        "datetime": "November 20, 2021 12:35:49 PM",
        "Tag": "Javascript",
        "Image": "JavascriptQuiz.png",
        "Link": "https://jamesthomasbester.github.io/JavascriptQuiz/"
    }
]

var test = ""

projects.forEach(element => {
    console.log(element);
    test += `    
        <article key="" class='ArticleItem'>
            <a class="ArticleLink" href="${element.Link}">
                <figure class='ArticleTag' data-category="${element.Tag}"> 
                    <img 
                        class='ArticleImg'
                        alt='${element.Tag}'
                        src="./assets/${element.Image}"
                    />
                </figure>
                <div class='ArticleTitle'>
                    <h4>${element.Title}</h4>
                </div>
            </Link>
        </article>
        `
})


$('#updates').append(test);