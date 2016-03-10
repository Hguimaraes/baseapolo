angular.module('baseapolo').factory('newsAPI', function () {
    var newsAPI = {};

    newsAPI.getNews = function (ids) {
        // Get the news. If a list containing the ids is specified, return the news accordingly
        if (!ids) {
            return [
                {
                    _id: '1',
                    title: 'Cartometria Digital 3D',
                    author: 'Flavio Mello',
                    content: 'Something using fourier, laplace, etc...',
                    stars: [
                        'a@email.com',
                        'b@email.com',
                        'c@email.com'
                    ],
                    starCounter: 3,
                    creationDate: new Date(),
                    category: "Engenharia Eletrônica"
                },
                {
                    _id: '2',
                    title: 'CompSoc',
                    author: 'Henrique Cukierman',
                    content: "Projeto de extensão no qual alunos devem desenvolver projetos com aplicações" +
                    " diretas na comunidade acadêmica da UFRJ.",
                    stars: [
                        'hguimaraes@poli.ufrj.br',
                        'mml@poli.ufrj.br',
                        'passeri.lucas@poli.ufrj.br'
                    ],
                    starCounter: 3,
                    creationDate: new Date(),
                    category: "Engenharia de Computação"
                },
                {
                    _id: '3',
                    title: 'Efeitos visuais em tempo real utilizando GLSL',
                    author: 'Ricardo Guerra Marroquim',
                    content: 'Content',
                    stars: [
                        'a@email.com',
                        'b@email.com',
                        'c@email.com',
                        'd@email.com',
                        'e@email.com',
                        'f@email.com',
                        'g@email.com',
                        'h@email.com',
                        'i@email.com',
                        'j@email.com'
                    ],
                    starCounter: 10,
                    creationDate: new Date(),
                    category: "Engenharia de Computação"
                },
                {
                    _id: '42',
                    title: 'A vida, o Universo e tudo mais',
                    author: 'Douglas Adams',
                    content:
                    "A Vida, o Universo e Tudo Mais é o terceiro livro da série de Douglas Adams, contendo 221 páginas.",
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

    newsAPI.getNewsById = function (id) {
        return {
            _id: id,
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
        };
    }

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
    };

    newsAPI.deleteNews = function (id) {
        // Send the delete request
        console.log("deleting " + id);
    }


    return newsAPI;
});
