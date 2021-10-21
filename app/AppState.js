import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Car[]} */
  cars = [
    new Car({ make: 'Tesla', model: 'CyberTruck', year: 2022, price: 1000000, color: '#C0C0C0', description: 'This thing is sleek, new WINDOWS!!!', imgUrl: 'https://media.wired.com/photos/5dd82f459ac14a0008116985/4:3/w_1412,h_1059,c_limit/Transoi_storyone_Screen-Shot-2019-11-22-at-10.38.01-AM.jpg' }),
    new Car({ make: 'Mystery', model: 'Machine', year: 1987, price: 29389, color: '#249255', description: 'Smell like teenagers and a dog in here', imgUrl: 'https://www.nydailynews.com/resizer/9_FBW7nzQALkDYNMcdQL8XHAaG8=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/4LB77NIIQWOB7WZU5VLNX6J5XA.JPG' }),
    new Car({ make: 'Ford', model: 'Pinto', year: 1980, price: 1488, color: '#900d09', description: 'This car is HOT!!!', imgUrl: 'https://i.ytimg.com/vi/1mqu-gRqt3g/hqdefault.jpg' })
  ]
  houses = [
    new House({ yearMade: 1992, stories: 2, floor: 'Hardwood', haunted: "Very Haunted", price: 230000, description: "Nice, two story home, eerily quiet neighborhood, no suspicious activity in 30+ years. A steal!!", imgURL: "https://84-iase-web-01.84lumber-iase1.p.azurewebsites.net/media/1688/mtairy_house_plan.jpg" }),
    new House({ yearMade: 1976, stories: 1, floor: "Shag carpet", haunted: "Slightly", price: 350000, description: "Large house, single floor, original carpeting. No stains, despite the parties.", imgURL: "https://www.mountainwoodhomes.com/wp-content/uploads/2019/08/Brady-Bunch-House-1.jpg" }),
    new House({ yearMade: 1902, stories: 4, floor: "Wooden floors", haunted: "Nah", price: 2500000, description: "Vintage Hollywood-style house, recently remodeled, historic. Feel the glamour of the Hollywood golden years.", imgURL: "https://i.pinimg.com/originals/d8/27/f4/d827f4896bb23db0d332de11acaf2e5f.jpg" })
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
