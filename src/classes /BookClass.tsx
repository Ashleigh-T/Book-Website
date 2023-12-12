
class book{
    public inBookshelf: boolean;
    private bookTitle: string;
    private seriesNumber: number;
    public spineColor: string;
    public fontStyle: string;
    public coverColor: string;
    public bookmarkColor: string;
    
    constructor(inBookshelf: boolean, bookTitle: string, seriesNumber: number,
                spineColor: string, fontStyle: string, coverColor: string,
                bookmarkColor: string){
                    this.inBookshelf = inBookshelf
                    this.bookTitle = bookTitle
                    this.seriesNumber = seriesNumber
                    this.spineColor = spineColor
                    this.fontStyle = fontStyle
                    this.coverColor = coverColor
                    this.bookmarkColor = bookmarkColor
                }

    /**
     * getTitle
     */
    public getTitle() {
        return this.bookTitle;
    } 

    public getSeriesNumber(){
        return this.seriesNumber
    }
            
}

export default book