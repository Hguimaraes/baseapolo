angular.module('baseapolo').factory('newsAPI', function () {
    var newsAPI = {};

    newsAPI.getNews = function (ids) {
        // Get the news. If a list containing the ids is specified, return the news accordingly
        if (!ids) {
            return [
                {
                    _id: '1',
                    title: 'Title',
                    author: 'Author',
                    content: 'Content',
                    stars: [
                        'a@email.com',
                        'b@email.com',
                        'c@email.com',
                        'd@email.com',
                        'e@email.com'
                    ],
                    starCounter: 5,
                    creationDate: new Date(),
                    category: "Engenharia Eletrônica"
                },
                {
                    _id: '42',
                    title: 'A vida, o Universo e tudo mais',
                    author: 'Douglas Adams',
                    content:
                    "A Vida, o Universo e Tudo Mais é o terceiro livro da série de Douglas Adams, contendo 221 páginas." +
                    "A série contém 5 livros, e neste livro, Arthur Dent continua sua procura pela questão d'A vida, do universo e tudo mais, porém, dessa vez… na era pré-histórica. Como consequência de uma série de ações, Arthur e Ford Prefect acabam naufragados no planeta Terra pré-histórico. Após alguns anos são convocados por Slartibartfast para salvar o universo, que estaria em perigo porque o Portão que isolava o planeta Krikkit do resto do universo estaria prestes a ser aberto..",
                    stars: [
                        'a@email.com',
                        'b@email.com',
                        'c@email.com'
                    ],
                    starCounter: 3,
                    creationDate: new Date(),
                    category: "Engenharia de Computação"
                }
            ]
        } else {
            // Get the news from the ids
             return [
                {
                    _id: '1',
                    title: 'Title',
                    author: 'Author',
                    content: 'Content',
                    stars: [
                        'a@email.com',
                        'b@email.com',
                        'c@email.com',
                        'd@email.com',
                        'e@email.com'
                    ],
                    starCounter: 5,
                    creationDate: new Date(),
                    category: "Engenharia Eletrônica"
                }];
        }
    };
    
    newsAPI.getCategories = function () {
        return [
            "Engenharia de Computação",
            "Engenharia Eletrônica",
            "Engenharia Elétrica",
            "Engenharia Mecânica",
            "Engenharia Metalúrgica",
            "Engenharia Naval",
            "Engenharia Ambiental",
            "Engenharia de Produção",
            "Engenharia Química",
            "Engenharia de Controle e Automação",
            "Outro"
        ]
    };
    
    newsAPI.createNews = function (news) {
        // Send the news to the server
        console.log("creating " + news);
    }

    return newsAPI;
});