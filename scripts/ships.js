import { getShips, getHaulers } from "./database.js"
import { HaulerList } from "./haulers.js"

const haulers = getHaulers()
const ships = getShips()

export const ShipList = () => {

    let shipsHTML = `<ul class="ships">`

    for (const ship of ships) {
        shipsHTML += `<li class="ship" data-type="ship" data-id="${ship.id}" data-haulerForeignKey="${ship.haulerId}">${ship.name}</li>`
    }
    // for (const pet of pets) {
    //     petHTML += `<li data-walkerForeignKey="${pet.walkerId}">${pet.name}</li>`
    // }
    shipsHTML += "</ul>"

    return shipsHTML

}
                                      

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target


        if (itemClicked.dataset.type === "ship") {     // Was a shipping ship list item clicked?

            const haulerId = itemClicked.dataset.haulerforeignkey    // Get the haulerId value of the shipping ship clicked
            let haulingShip = { name: "Incorrect " }     // Define a default object for the found hauler
            for (const hauler of haulers) {      // Iterate the array of hauler objects
                if (parseInt(haulerId) === hauler.id) {        // Does the haulerId foreign key match the id of the current hauler?
                    haulingShip = hauler        // Reassign the value of `haulingShip` to the current hauler
                }
            }
            const shippkid = itemClicked.dataset.id
            for (const ship of ships) {
                if (parseInt(shippkid) === ship.id) {
                    //console.log(shippkid)
                    window.alert(`${ship.name} is being hauled by ${haulingShip.name}`)      // Show an alert to the user
                }
            }

            
        }
    })





