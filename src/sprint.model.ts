export class Sprint {
    public sprintId = 83;
    public sprintNo = 83 ;
    public sprintStartDate: Date;
    public sprintEndDate: Date;
    public sprintUatStartDate: Date;
    public sprintUatEndDate: Date;
    public sprintNumberOfStories: number;
    public sprintNumberOfStoryPoints: number;

    constructor(id: number, no: number, start: Date, end: Date, uatStart: Date, uatEnd: Date, noOfStories: number, storyPoints: number) {
        this.sprintId = id;
        this.sprintNo = no;
        this.sprintStartDate = start;
        this.sprintEndDate = end;
        this.sprintUatStartDate = uatStart;
        this.sprintUatEndDate = uatEnd;
        this.sprintNumberOfStories = noOfStories;
        this.sprintNumberOfStoryPoints = storyPoints;
    }
}