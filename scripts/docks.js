import { getDocks, getHaulers } from "./database.js"

const haulers = getHaulers()
const docks = getDocks()

export const DockList = () => {


    let docksHTML = "<ul>"

    for (const dock of docks) {


        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `<li class="dock" data-name="${dock.location}" data-id="${dock.id}" data-type="dock">"${dock.location}"</li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}

// 
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "dock") {

            const dockId = itemClicked.dataset.id //dock.id PK
            const location = itemClicked.dataset.name
        
            const data = []
            
                 //iterate the docks array
                //if a hauler is currently at the dock, 
                //iterate the haulers array
                //for each hauler if the hauler.dockId is equal to the dock.id
                for (const hauler of haulers) {
                    if (hauler.dockId === parseInt(dockId)) {
                        data.push(hauler.name)
                    }
                    
                }
                if (data.length === 0) {
// The Shanghai, China dock is currently unloading nothing
                window.alert(`${location} is currently unloading nothing`)
                } else if (data.length === 1) {
                window.alert(`${location} is currently unloading ${data[0]}`) 
                } else if (data.length > 1) {
                    window.alert(`${location} is currently unloading ${data.join(", ")}`)
                    //display each item in the array data, using .join()
                }
            }
                

            
        }
)

    

//INSTRUCTION:
// When a dock is clicked, present a message to the user that follows the format below if a hauler is currently at that dock.
// The Shanghai, China dock is currently unloading Boaty McBoatface


// If there is no hauler at the dock, present the following message.
// The Shanghai, China dock is currently unloading nothing

// If there is more than one hauler at the dock, present the following message.
// The Shanghai, China dock is currently unloading Boaty McBoatface, Seawise Giant













//         if (haulers.length === 0) {
//             window.alert(`${dock.location} is currently unloading nothing.`)
//         } else if (haulers.length === 1) {
//         window.alert(`${dock.location} is currenlty unloading ${hauler.name}.`)
//     } else {
//         window.alert (`${dock.location} is currently unloading ${hauler.name}`) //this is supposed to show multiple haulers, how do i do that with string interpolation?
//     }
// }
// }