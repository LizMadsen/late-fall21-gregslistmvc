import { generateId } from "../Utils/generateId.js";

export class House {
    constructor(data) {
        this.id = generateId
        this.yearMade = data.yearMade
        this.stories = data.stories
        this.floor = data.floor
        this.haunted = data.haunted
        this.price = data.price
        this.description = data.description
        this.imgURL = data.imgURL
    }
}