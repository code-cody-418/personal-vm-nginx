import Experience from "../Experience.js";
import Dragon from './Enemies/Dragon.js';
import Environment from './Environment/Environment.js';
import Helpers from '../Helpers/Helpers.js'

export default class World {
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        //Once the resources is loaded
        this.resources.on('ready', () => {
            this.dragon = new Dragon()
            this.environment = new Environment()
            this.helpers = new Helpers()
        })
    }

    update(){
        if(this.helpers && this.dragon){
            this.helpers.update()
            this.dragon.update()
        }
    }
}