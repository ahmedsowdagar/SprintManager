export class Story {
    public storyId: string;
    public storyDescription: string;
    public storyStartDate: string;
    public storyEndDate: string;

    constructor(id: string, desc: string, start: string, end: string) {
            this.storyId = id;
            this.storyDescription = desc;
            this.storyStartDate = start;
            this.storyEndDate = end;
    }
}
