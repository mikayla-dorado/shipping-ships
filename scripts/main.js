import { ShipList } from "./ships.js"
import { HaulerList } from "./haulers.js"
import { DockList } from "./docks.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Shipping Ships</h1>
<article class="details">
    <section class="detail--column list details__ships">
        <h2>Cargo Ships</h2>
        ${ShipList()}
    </section>
    <section class="detail--column list details__ships">
        <h2>Hauling Ships</h2>
        ${HaulerList()}
    </section>
    <section class="detail--column list details__ships">
        <h2>Docks</h2>
        ${DockList()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML