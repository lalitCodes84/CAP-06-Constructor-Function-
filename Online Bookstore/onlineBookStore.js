// Author constructor function

function author(name,birthYear,nationality){

    this.name=name;
    this.birthYear=birthYear;
    this.nationality=nationality;

};

// Book constructor function

function book(title,author,genre,price){
    this.title=title;
    this.author={author};
    this.genre=genre;
    this.price=price;
    this.getBookInfo=function(){
        console.log(this);
    }
};

