import { getHaulers } from "./database.js"
import { getShips } from "./database.js"


export const HaulerList = () => {
    const haulers = getHaulers()

let haulersHTML = "<ul>"

for (const hauler of haulers) {
    haulersHTML += `<li class = "hauler" data-type ="hauler" data-id ="${hauler.id}">"${hauler.name}"</li>`
}

haulersHTML += "</ul>"

return haulersHTML

}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        
        if (itemClicked.dataset.type === "hauler") {
            const haulerId = itemClicked.dataset.id

            let shipCounter = 0

            const ShipList = getShips ()

            for (const ship of ShipList) {
                if (parseInt(haulerId) === ship.haulerId) {
                    shipCounter++
                }
            }
            window.alert(`This hauler is carrying ${shipCounter} ships`)
        }
        
       


    }
)

