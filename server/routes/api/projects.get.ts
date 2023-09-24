import { IProject } from "~/interfaces/IProject";

const projects: IProject[] = [
    {
        type: 'set',
        imageUrl: 'titus.jpg',
        title: 'Titus',
    },
    {
        type: 'set',
        imageUrl: 'the-visit-01.jpg',
        title: 'The Visit',
    },
    {
        type: 'set',
        imageUrl: 'hedda-gabler.jpg',
        title: 'Hedda Gabler',
    },
    {
        type: 'set',
        imageUrl: 'parasite.jpg',
        title: 'Parasite'
    },
    {
        type: 'set',
        imageUrl: 'a-dream-play-01.jpg',
        title: 'A Dream Play',
    }
]

export default defineEventHandler(async () => {
    return projects;
});
