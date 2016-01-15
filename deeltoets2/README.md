# Deeltoets 2

Voer onderstaande opdrachten uit. Op http://192.168.56.101:3000/ staan linkjes naar de pagina's waar als het goed is na het maken van de opdrachten iets zichtbaar zou moet zijn. Nadat je de opdrachten hebt gemaakt en getest, zip je de directory met de applicatie en lever je het zipbestand via het inleverlinkje op Moodle in.


1. [10 punten]
Voer npm install uit op de server in de directory van het uitgepakte zipbestand met de opdracht om alle afhankelijkheden te installeren.

2. [10 punten]
Vul jouw eigen voor- en achternaam in in het object van de array in data/gegevens.js en voeg 4 objecten toe met de voor- en achternaam, etc. van 4 willekeurige medestudenten.

3. [20 punten]
Maak via het template views/studenten/index.ejs in een unordered list de voornamen en achternamen van de 5 studenten uit het array in data/gegevens.js in omgekeerde volgorde zichtbaar. Dus het eerste item uit het array staat dan onderaan in de lijst.

4. [20 punten]
a) Maak links van de namen van de studenten in de unordered list uit de vorige opdracht en
b) zorg dat deze via de route /studenten/:index aan het template views/studenten/toon.ejs gekoppeld worden en dat hier de gegevens van de betreffende student in weergegeven worden.

5. [20 punten]
Maak de route /routes/bestanden af en zorg ervoor dat de bestanden die in de directory publiek/upload_dir terechtkomen als linkjes in een unordered list via bestanden/index.ejs zichtbaar worden. Zorg ervoor dat als je op de linkjes klikt de bestanden worden geopend/gedownload.

6. [20 punten]
Het uploadformulier in views/bestanden/index.ejs voert een POST uit naar de route /bestanden. Pas de route /bestanden zo aan zodat de bestanden die via dit formulier worden geüpload in de publiek/upload_dir directory worden opgeslagen met de oorspronkelijke naam waarmee ze zijn geüpload (en dus niet de lange-willekeurige-tekenreeks-naam). Redirect na het hernoemen naar /bestanden zodat alle bestanden in de upload_dir weer getoond worden.

Succes!