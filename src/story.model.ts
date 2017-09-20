export class Story {
    public storyId: string;
    public storyDescription: string;
    public storyStartDate: Date;
    public storyEndDate: Date;

    constructor(id: string, desc: string, start: Date, end: Date) {
            this.storyId = id;
            this.storyDescription = desc;
            this.storyStartDate = start;
            this.storyEndDate = end;
    }
}
