export class Chapiter { 
    public id: number;
    public name: string; 
    public sections: Section[];

    constructor(id: number, name : string, sections: Section[]){
        this.id = id;
        this.name = name;
        this.sections = sections;
    } 
} 

export class Section {
    public id: string;
    public title: string;
    public exemple: string;
    public phrases: Phrase[];

    constructor(id: string, title: string, exemple: string, phrases: Phrase[]){
        this.id = id;
        this.title = title;
        this.exemple = exemple;
        this.phrases = phrases;
    } 
}

export class Phrase {
    public id: number;
    public text: string;
    public reponses: string[]

    constructor(id: number, text: string, reponses: string[]){
        this.id = id;
        this.text = text;
        this.reponses = reponses;
    
    } 
}