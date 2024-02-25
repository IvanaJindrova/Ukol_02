const jmeno = (prompt("Zadej svoje jméno: "))
const prijmeni = (prompt("Zadej svoje příjmení: "))

const bezZnakuJm = jmeno.trim()
const bezZnakuPr = prijmeni.trim()

const maleJm = bezZnakuJm.toLowerCase()
const malePr = bezZnakuPr.toLowerCase()

const orezJmena = maleJm.slice(0, 3)
const orezPrijmeni = malePr.slice(0, 5)

const predZavinacem = orezPrijmeni + orezJmena
const celyEmail = predZavinacem + "@" + "fit.cvut.cz"

document.body.innerHTML += 
    `<p>Jméno: ${jmeno}</p>` +
    `<p>Jméno: ${prijmeni}</p>` +
    `<h3>Tvůj email je: <h3>` +
    `<p>${celyEmail}</p>`