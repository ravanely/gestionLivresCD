export class Livres {

  isLend: boolean;
  authorName: string[];

  constructor(public title: string, public ISBN: string, public publishDate: string, public subTitle: string){
    this.isLend = false;
  }
}
