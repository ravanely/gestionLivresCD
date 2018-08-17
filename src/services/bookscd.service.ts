import {Livres} from "../models/Livres";
import {Cd} from "../models/Cd";

export class BookscdService {

  booksList: Livres[] = [
    {
      title: 'Les Damnés de la terre',
      subTitle: '',
      authorName: ['Frantz Fanon'],
      publishDate: '1961',
      ISBN: '97-82-7071-4281-8',
      isLend: true
    },
    {
      title: 'Apprendre la programmation web acec Python&Django',
      subTitle: 'Principes et bonnes pratiques pour les sites web dynamiques',
      authorName: [
        'Hugues Bersini',
        'Pierre Alexis',
        'Gilles Deglos'
      ],
      publishDate: '2018',
      ISBN: '978-2-212-67515-3',
      isLend: false
    },
    {
      title: 'Ionic Cookbook',
      subTitle: 'Rechpes to create cutting-edge, real-time hybrid mobile apps with Ionic',
      authorName: [
        'Indermohan Sing',
        'Hoc Phan',
      ],
      publishDate: '2018',
      ISBN: '978-1-78862-323-o',
      isLend: true
    },
    {
      title: 'SCRUM',
      subTitle: 'Le guide pratique de la méthode agile la plus populaire',
      authorName: [
        'Claude Aubry',
      ],
      publishDate: '2015',
      ISBN: '9782100742165',
      isLend: false
    },
    {
      title: 'Working with odoo 10',
      subTitle: 'Configure, manage, and customize Odoo to build professional-level business applications',
      authorName: [
        'Greg Moss',
      ],
      publishDate: '2017',
      ISBN: '978-1-78646-268-8',
      isLend: true
    },
    {
      title: 'ng-book',
      subTitle: 'The Complete Book on Angular 4',
      authorName: [
        'Nate Murray',
        'Felipe Coury',
        'Ari Lerner',
        'Carlos Taborda'
      ],
      publishDate: '2017',
      ISBN: '',
      isLend: true
    }
  ];

  cdList: Cd[] = [
    {
      albumTitle: 'The BRIDGE',
      artistName: 'Locko',
      publishDate: '2016',
      isLend: false
    },
    {
      albumTitle: 'Trône',
      artistName: 'Booba',
      publishDate: '2017',
      isLend: true
    },
    {
      albumTitle: 'Mohammad Alix',
      artistName: 'Kerry James',
      publishDate: '2016',
      isLend: false
    },
    {
      albumTitle: 'On se connaît pas',
      artistName: 'Mr Leo',
      publishDate: '2018',
      isLend: false
    },
    {
      albumTitle: 'Tu as combien',
      artistName: 'Maalhox le vibeur',
      publishDate: '2017',
      isLend: true
    }
  ];
}
