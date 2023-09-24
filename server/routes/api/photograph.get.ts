import { IProject } from "~/interfaces/IProject";

const photographsUrl: Array<string> = [
    'photograph-01.jpg',
    'photograph-02.jpg',
    'photograph-03.jpg',
    'photograph-04.jpg',
    'photograph-05.jpg',
    'photograph-06.jpg',
    'photograph-07.jpg',    
]
export default defineEventHandler(async () => {
    return photographsUrl;
});
