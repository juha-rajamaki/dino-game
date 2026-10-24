/* Dinomemory in Finnish. Every line of the game keyed by the English it
   replaces (ui), and the cards, the More lines and the map told in Finnish.
   The body is plain JSON, so tools/tts.py can read it too. survivorCues are
   written by tools/tts.py when it records audio/fi/map/asteroid.mp3. */
window.DINO_FI = {
 "version": 19,
 "species": {
  "tyrannosaurus": {
   "means": "”Hirmuliskokuningas”",
   "ago": "68–66 miljoonaa vuotta sitten",
   "size": "12 m pitkä — yhtä pitkä kuin bussi",
   "weight": "8 tonnia — kuin kaksi norsua",
   "place": "Pohjois-Amerikka",
   "fact": "Sen purema oli voimakkain kaikista eläimistä, jotka ovat koskaan kävelleet maalla. Se rouskutti suoraan luiden läpi — kivettyneestä kakasta on löytynyt vielä luunsiruja. Sen silmät katsoivat eteenpäin niin kuin meilläkin, joten se pystyi arvioimaan etäisyyksiä metsästäessään."
  },
  "triceratops": {
   "means": "”Kolmisarvinen naama”",
   "ago": "68–66 miljoonaa vuotta sitten",
   "size": "9 m pitkä — yhtä pitkä kuin iso pakettiauto",
   "weight": "8 tonnia",
   "place": "Pohjois-Amerikka",
   "fact": "Sen kallo oli yksi suurimmista, mitä millään maaeläimellä on koskaan ollut: nokasta niskakilven reunaan jopa 2,5 metriä. Silmien yläpuolella olevat kaksi sarvea saattoivat kumpikin olla yli metrin pituisia. Monissa niskakilvissä on parantuneita arpia, joten ne luultavasti taistelivat myös keskenään eivätkä vain Tyrannosauruksen kanssa."
  },
  "stegosaurus": {
   "means": "”Kattolisko”",
   "ago": "155–145 miljoonaa vuotta sitten",
   "size": "9 m pitkä — yhtä pitkä kuin iso pakettiauto",
   "weight": "5 tonnia",
   "place": "Pohjois-Amerikka",
   "fact": "Sen hännän neljällä piikillä on ihan oikea, vähän hassu nimi: thagomizer. Selän levyt eivät olleet kiinteää panssaria vaan ohutta luuta, jossa oli paljon verisuonia. Niillä se luultavasti komeili tai päästi lämpöä pois. Sen aivot painoivat suunnilleen yhtä paljon kuin luumu."
  },
  "velociraptor": {
   "means": "”Nopea varas”",
   "ago": "75–71 miljoonaa vuotta sitten",
   "size": "2 m pitkä — suunnilleen polkupyörän kokoinen",
   "weight": "15 kg — kuin iso kalkkuna",
   "place": "Mongolia",
   "fact": "Oikeasti se oli vain kalkkunan kokoinen eikä mikään elokuvien ihmisen kokoinen metsästäjä. Kyynärvarren fossiilissa on kyhmyjä, jotka näyttävät tarkalleen, mihin pitkät siipisulat kiinnittyivät. Yhdessä kuuluisassa fossiilissa se on kesken taistelun Protoceratopsin kanssa. Sortuva hiekkadyyni hautasi ne molemmat."
  },
  "brachiosaurus": {
   "means": "”Käsivarsilisko”",
   "ago": "154–150 miljoonaa vuotta sitten",
   "size": "22 m pitkä — yhtä pitkä kuin kaksi bussia",
   "weight": "35 tonnia",
   "place": "Pohjois-Amerikka",
   "fact": "Sen etujalat olivat takajalkoja pidemmät, joten se seisoi etupää koholla kuin valtava kirahvi. Niin se ylsi lehtiin yhdeksän metrin korkeudessa, korkeammalle kuin mikään muu sen ajan eläin. Sen sieraimet olivat korkealla pään päällä, ja se ihmetytti tutkijoita vuosia."
  },
  "ankylosaurus": {
   "means": "”Yhteenkasvanut lisko”",
   "ago": "68–66 miljoonaa vuotta sitten",
   "size": "8 m pitkä — yhtä pitkä kuin pieni bussi",
   "weight": "6 tonnia",
   "place": "Pohjois-Amerikka",
   "fact": "Se oli panssaroitu kuin tankki, ja luulevyjä oli jopa sen silmäluomissa. Hännän päässä oli kiinteästä luusta tehty nuija, jolla se pystyi lyömään niin lujaa, että saalistajan jalka olisi voinut katketa. Pehmeä vatsa oli sen ainoa heikko kohta, joten hyökkäyksen tullen se luultavasti painautui litteäksi maata vasten."
  },
  "spinosaurus": {
   "means": "”Piikkilisko”",
   "ago": "99–93 miljoonaa vuotta sitten",
   "size": "15 m pitkä — bussia pidempi",
   "weight": "7 tonnia",
   "place": "Pohjois-Afrikka",
   "fact": "Se oli pisin kaikista lihaa syövistä dinosauruksista, jopa Tyrannosaurusta pidempi. Se luultavasti ui ja ajoi kaloja takaa korkean, melan muotoisen häntänsä avulla. Sen selän purjetta kannattelivat lähes kaksi metriä korkeat piikit."
  },
  "parasaurolophus": {
   "means": "”Melkein harjalisko”",
   "ago": "76–73 miljoonaa vuotta sitten",
   "size": "10 m pitkä — yhtä pitkä kuin bussi",
   "weight": "2,5 tonnia",
   "place": "Pohjois-Amerikka",
   "fact": "Sen päässä oleva putki oli 1,8 metriä pitkä ja täysin ontto. Tutkijat rakensivat siitä toimivan kopion ja puhalsivat siihen: se törähtää kuin valtava trumpetti. Lauma luultavasti jutteli toisilleen näillä huudoilla metsän halki."
  },
  "allosaurus": {
   "means": "”Erilainen lisko”",
   "ago": "155–145 miljoonaa vuotta sitten",
   "size": "9 m pitkä — yhtä pitkä kuin iso pakettiauto",
   "weight": "2 tonnia",
   "place": "Pohjois-Amerikka",
   "fact": "Se oli aikansa huippusaalistaja, sata miljoonaa vuotta ennen kuin Tyrannosaurusta oli olemassakaan. Utahissa yhdestä louhoksesta löytyi 46 allosauruksen luut sikin sokin. Sen leuat aukesivat tavattoman leveälle, joten se on ehkä iskenyt alaspäin kuin kirves."
  },
  "pachycephalosaurus": {
   "means": "”Paksupäälisko”",
   "ago": "70–66 miljoonaa vuotta sitten",
   "size": "4,5 m pitkä — yhtä pitkä kuin auto",
   "weight": "450 kg",
   "place": "Pohjois-Amerikka",
   "fact": "Sen kallon katto oli 25 senttimetriä kiinteää luuta — kuin kypärä, joka on tehty päästä itsestään. Joidenkin kupolien parantuneet vammat viittaavat siihen, että ne todella tönivät ja puskivat toisiaan. Kupolin ympäri kiersi rivi pieniä luupiikkejä, joten sillä oli päässään ikään kuin kruunu."
  },
  "therizinosaurus": {
   "means": "”Viikatelisko”",
   "ago": "70 miljoonaa vuotta sitten",
   "size": "10 m pitkä — yhtä pitkä kuin bussi",
   "weight": "5 tonnia",
   "place": "Mongolia",
   "fact": "Sillä oli pisimmät kynnet kaikista eläimistä, jotka ovat koskaan eläneet: jokainen puoli metriä pitkä. Vuosikausiin kukaan ei tiennyt, kenen kynnet ne olivat. Ensimmäisessä löydössä oli pelkät kynnet, ja tutkijat arvelivat niiden kuuluneen jättiläiskilpikonnalle. Lopulta selvisi, että se oli hidas kasvinsyöjä, ja kynsillään se on ehkä vetänyt oksia alas."
  },
  "diplodocus": {
   "means": "”Kaksoispalkki”",
   "ago": "154–152 miljoonaa vuotta sitten",
   "size": "25 m pitkä — yhtä pitkä kuin kolme bussia",
   "weight": "15 tonnia",
   "place": "Pohjois-Amerikka",
   "fact": "Sen hännässä oli noin 80 luuta, ja se kapeni ohueksi piiskaksi. Tutkijat arvelevat, että hännän kärki saattoi sivaltaa ilmaa äänen nopeutta nopeammin. Siitä kuului pamaus, joka varoitti saalistajia. Sen kynänmuotoisia hampaita kasvoi vain suun etuosassa, joten se haravoi lehtiä irti oksista."
  },
  "carnotaurus": {
   "means": "”Lihaa syövä härkä”",
   "ago": "72–70 miljoonaa vuotta sitten",
   "size": "8 m pitkä — yhtä pitkä kuin pieni bussi",
   "weight": "1,5 tonnia",
   "place": "Argentiina",
   "fact": "Sen silmien yläpuolella oli kaksi paksua sarvea kuin härällä, ja siitä se sai nimensä: ”lihaa syövä härkä”. Sen kädet olivat niin lyhyet, että kyynärvarsi oli pienempi kuin kämmen. Takajalat taas oli tehty juoksemiseen, ja se saattoi olla nopein kaikista isoista saalistajista."
  },
  "dilophosaurus": {
   "means": "”Kaksiharjainen lisko”",
   "ago": "193 miljoonaa vuotta sitten",
   "size": "7 m pitkä — puolitoista autoa pitkä",
   "weight": "400 kg",
   "place": "Pohjois-Amerikka",
   "fact": "Sen pään kaksi ohutta harjaa ovat totta, ja niillä se luultavasti komeili. Kaulaa ympäröivä röyhelö ja myrkyn sylkeminen taas keksittiin elokuvia varten. Se oli myös paljon isompi kuin elokuvissa — noin seitsemän metriä pitkä ja aikuista ihmistä korkeampi."
  },
  "iguanodon": {
   "means": "”Leguaaninhammas”",
   "ago": "126–122 miljoonaa vuotta sitten",
   "size": "10 m pitkä — yhtä pitkä kuin bussi",
   "weight": "3 tonnia",
   "place": "Belgia",
   "fact": "Sillä oli peukalon paikalla iso kartionmuotoinen piikki, todennäköisesti puolustautumista varten. Ensimmäiset löytäjät laittoivat piikin vahingossa eläimen nenään, niin kuin se olisi ollut sarvikuonon sarvi. Se oli myös yksi kaikkein ensimmäisistä dinosauruksista, joille annettiin nimi, jo vuonna 1825."
  },
  "styracosaurus": {
   "means": "”Piikikäs lisko”",
   "ago": "75,5–74,5 miljoonaa vuotta sitten",
   "size": "6 m pitkä — autoa pidempi",
   "weight": "3 tonnia",
   "place": "Kanada",
   "fact": "Sen kaulaa ympäröivästä niskakilvestä työntyi kuusi pitkää piikkiä kuin kruunu, ja jokainen oli yhtä pitkä kuin sinun käsivartesi. Nenän sarvi saattoi olla 60 senttimetriä pitkä, pidempi kuin yksikään Triceratopsin sarvi. Itse niskakilpi oli yllättävän ohut, joten se oli tehty komeilemiseen."
  },
  "pteranodon": {
   "means": "”Hampaaton siipi”",
   "ago": "85 miljoonaa vuotta sitten",
   "size": "Siipiväli jopa 7 m — leveämpi kuin auto on pitkä",
   "weight": "25 kg — yhtä kevyt kuin iso koira",
   "place": "Pohjois-Amerikka",
   "fact": "Sillä ei ollut lainkaan hampaita — sen nimikin tarkoittaa ”hampaatonta siipeä”. Päästä taaksepäin kaartuva pitkä harja on ehkä toiminut kuin peräsin ja auttanut sitä ohjaamaan liidellessään. Se painoi vain noin 25 kiloa, vaikka sen siivet olivat kuusi metriä leveät."
  },
  "rhamphorhynchus": {
   "means": "”Nokkakuono”",
   "ago": "150 miljoonaa vuotta sitten",
   "size": "Siipiväli 1,8 m — suunnilleen oven korkeus",
   "weight": "2 kg — kuin pieni kissa",
   "place": "Saksa",
   "fact": "Sen pitkän hännän päässä oli vinoneliön muotoinen läppä, joka toimi kuin tikan siivekkeet. Sen neulamaiset hampaat osoittivat eteenpäin, ja niillä oli helppo keihästää kaloja ja pitää ne paikallaan. Jotkut fossiilit ovat säilyneet niin hyvin, että mahassa näkyy vieläkin kala."
  },
  "dimorphodon": {
   "means": "”Kaksimuotoinen hammas”",
   "ago": "195 miljoonaa vuotta sitten",
   "size": "Siipiväli 1,4 m — yhtä leveä kuin polkupyörä on pitkä",
   "weight": "2 kg — kuin pieni kissa",
   "place": "Englanti",
   "fact": "Sen nimi tarkoittaa ”kaksimuotoista hammasta”: leuan etuosassa oli pitkät torahampaat ja niiden takana pieniä hampaita. Melkein millään muulla matelijalla ei ole kahdenlaisia hampaita sillä tavalla. Sen pää oli korkea ja syvä kuin lunnilla, ja se näytti aivan liian isolta muuhun kehoon nähden."
  },
  "ornithocheirus": {
   "means": "”Lintukäsi”",
   "ago": "110 miljoonaa vuotta sitten",
   "size": "Siipiväli 5 m — yhtä leveä kuin pieni bussi on pitkä",
   "weight": "20 kg",
   "place": "Englanti",
   "fact": "Siitä on löydetty vain leukojen katkenneita kärkiä, joten suuri osa tiedoistamme tulee sen läheisiltä serkuilta. Ne olivat kalansyöjiä, joilla oli pitkät, piikkihampaiset leuat, ja ne nappasivat kaloja aalloista. Monen metrin levyisillä siivillään ne pystyivät ylittämään avomeren nousevien ilmavirtojen varassa."
  },
  "mosasaurus": {
   "means": "”Maasjoen lisko”",
   "ago": "70–66 miljoonaa vuotta sitten",
   "size": "13 m pitkä — bussia pidempi",
   "weight": "15 tonnia",
   "place": "Meret ympäri maailmaa",
   "fact": "Se ei ollut dinosaurus vaan valtava merilisko, nykyisten varaanien ja käärmeiden serkku. Se ui hain kaltaisen häntänsä avulla ja pystyi nielemään kilpikonnia ja jopa toisia mosasauruksia. Kaikkein ensimmäinen kaivettiin esiin hollantilaisesta liitukaivoksesta vuonna 1764."
  },
  "argentinosaurus": {
   "means": "”Argentiinan lisko”",
   "ago": "95 miljoonaa vuotta sitten",
   "size": "35 m pitkä — pidempi kuin kolme bussia",
   "weight": "70 tonnia — kuin kymmenen norsua",
   "place": "Argentiina",
   "fact": "Se on painavin tunnettu eläin, joka on koskaan kävellyt maalla. Yksi ainoa luu sen selästä oli aikuista ihmistä korkeampi, ja sen reisiluu oli yli kaksi metriä pitkä. Kukaan ei ole koskaan löytänyt kokonaista luurankoa — kaikki, mitä siitä tiedämme, perustuu kouralliseen jättimäisiä luita."
  },
  "gallimimus": {
   "means": "”Kanan matkija”",
   "ago": "70 miljoonaa vuotta sitten",
   "size": "6 m pitkä — puolitoista autoa pitkä",
   "weight": "450 kg",
   "place": "Mongolia",
   "fact": "Se oli rakenteeltaan kuin strutsi: sillä oli pitkät jalat, pitkä kaula ja hampaaton nokka. Se on tämän kokoelman nopein eläin. Sen nimi tarkoittaa ”kanan matkijaa”, mikä on hassua kuuden metrin pituiselle otukselle. Koska sillä ei ollut hampaita, se luultavasti söi mitä vain sattui löytämään."
  },
  "compsognathus": {
   "means": "”Siro leuka”",
   "ago": "150 miljoonaa vuotta sitten",
   "size": "1 m pitkä — suunnilleen kalkkunan kokoinen",
   "weight": "3 kg — niin kevyt, että sen voi nostaa syliin",
   "place": "Saksa ja Ranska",
   "fact": "Se on yksi pienimmistä koskaan löydetyistä dinosauruksista, niin pieni, että sen voisi nostaa yhdellä kädellä. Yhden fossiilin mahassa on yhä liskon luuranko, ja lisko oli nielaistu kokonaisena. Se eli samaan aikaan ja samassa paikassa kuin Archaeopteryx, vanhin tunnettu lintu."
  },
  "microraptor": {
   "means": "”Pieni varas”",
   "ago": "125–120 miljoonaa vuotta sitten",
   "size": "80 cm pitkä — yhtä pitkä kuin kissa häntineen",
   "weight": "1 kg — kuin kilon sokeripussi",
   "place": "Kiina",
   "fact": "Sillä oli pitkät lentosulat sekä käsissä että jaloissa, joten se lensi tai liiteli neljällä siivellä. Tutkijat tutkivat fossiilisulkien pikkuruisia väriainehiukkasia ja huomasivat, että se oli kiiltävän musta ja hohti kuin kottarainen. Yhden fossiilin mahassa on kokonainen lintu, joka on nielaistu pää edellä."
  },
  "oviraptor": {
   "means": "”Munavaras”",
   "ago": "75–71 miljoonaa vuotta sitten",
   "size": "1,8 m pitkä — yhtä pitkä kuin aikuinen ihminen",
   "weight": "35 kg — kuin iso koira",
   "place": "Mongolia",
   "fact": "Sen nimi tarkoittaa ”munavarasta”, koska ensimmäinen löytyi vuonna 1923 makaamasta munapesän päällä. Tutkijat luulivat sen varastavan Protoceratopsin munia. Seitsemänkymmentä vuotta myöhemmin yhdestä tällaisesta munasta löytyi kuitenkin poikanen, ja se kuului Oviraptorin omaan sukuun. Se oli siis vartioinut omaa pesäänsä eikä ryöstänyt sitä."
  },
  "protoceratops": {
   "means": "”Ensimmäinen sarvinaama”",
   "ago": "75–71 miljoonaa vuotta sitten",
   "size": "2 m pitkä — suunnilleen sängyn pituinen",
   "weight": "80 kg — yhtä painava kuin aikuinen",
   "place": "Mongolia ja Kiina",
   "fact": "Se on toinen puolisko kuuluisasta ”taistelevien dinosaurusten” fossiilista, joka löytyi vuonna 1971. Siinä se on lukittunut taisteluun Velociraptorin kanssa. Velociraptorin kynnet olivat sen päässä ja kurkussa, ja Protoceratops taas puristi saalistajan kättä nokassaan. Nimestään huolimatta sillä ei ollut oikeita sarvia, vain luinen niskakilpi ja nokka kuin papukaijalla."
  },
  "amargasaurus": {
   "means": "”La Amargan lisko”",
   "ago": "130–120 miljoonaa vuotta sitten",
   "size": "10 m pitkä — yhtä pitkä kuin bussi",
   "weight": "3 tonnia",
   "place": "Argentiina",
   "fact": "Sen kaulaa ja selkää pitkin kulki kaksi riviä pitkiä piikkejä, ja pisimmät olivat noin 60 senttimetriä. Kukaan ei tiedä varmasti, olivatko ne sarven peittämiä teräviä piikkejä vai kannattelivatko ne nahkaista purjetta. Siitä on löydetty vain yksi luuranko, joka kaivettiin esiin Argentiinassa vuonna 1984."
  },
  "deinocheirus": {
   "means": "”Kauhea käsi”",
   "ago": "70 miljoonaa vuotta sitten",
   "size": "11 m pitkä — bussia pidempi",
   "weight": "6,5 tonnia — yhtä painava kuin iso norsu",
   "place": "Mongolia",
   "fact": "Lähes viisikymmentä vuotta siitä oli löydetty vain kaksi jättimäistä, 2,4 metriä pitkää kättä, eikä kukaan tiennyt, miltä loppu näytti. Kun kokonaiset luurangot vihdoin kuvailtiin vuonna 2014, selvisi, että sillä oli selässä korkea kyttyrä ja leveä, litteä nokka kuin ankalla. Sen mahasta löytyi yli tuhat nielaistua kiveä ja vähän kalanruotoja, joten se söi melkein mitä tahansa."
  },
  "elasmosaurus": {
   "means": "”Ohutlevylisko”",
   "ago": "80–77 miljoonaa vuotta sitten",
   "size": "10 m pitkä — yhtä pitkä kuin bussi, ja suurin osa siitä kaulaa",
   "weight": "2 tonnia — kuin iso auto",
   "place": "Pohjois-Amerikka",
   "fact": "Sen kaula oli pidempi kuin koko muu keho yhteensä, ja siinä oli 72 luuta. Kirahvin kaulassa on vain seitsemän. Ensimmäinen tutkija, joka kokosi sen luurangon, laittoi pään vahingossa hännän päähän, eikä hänen kilpailijansa antanut hänen koskaan unohtaa sitä. Se ei pystynyt pitämään kaulaansa pystyssä kuin joutsen, vaan se meloi neljällä isolla evällä ja nappaili pieniä kaloja."
  },
  "australovenator": {
   "means": "”Eteläinen metsästäjä”",
   "ago": "95 miljoonaa vuotta sitten",
   "size": "6 m pitkä — autoa pidempi",
   "weight": "500 kg — kuin hevonen",
   "place": "Australia",
   "fact": "Sen lempinimi on Banjo runoilija Banjo Patersonin mukaan. Hän kirjoitti Waltzing Matilda -laulun lähellä kaupunkia, josta dinosaurus löytyi. Sen luut olivat sekaisin erään jättimäisen pitkäkaulaisen kasvinsyöjän luiden kanssa, ja sen lempinimi on Matilda. Banjo oli kevyt ja nopea, ja kummassakin kädessä oli kolme isoa koukkukynttä."
  },
  "muttaburrasaurus": {
   "means": "”Muttaburran lisko”",
   "ago": "110–100 miljoonaa vuotta sitten",
   "size": "8 m pitkä — yhtä pitkä kuin pieni bussi",
   "weight": "2,8 tonnia — sarvikuonoa painavampi",
   "place": "Australia",
   "fact": "Sen kuonon päällä oli iso ontto kyhmy. Sillä se on ehkä törähdellyt kovaa tai haistanut paremmin. Sen hampaat liukuivat toistensa ohi kuin sakset, joten se pystyi pilkkomaan sitkeitä kasveja. Se on nimetty Muttaburran mukaan. Se on pieni kaupunki Queenslandissa, ja sen lähellä eräs karjatilallinen löysi dinosauruksen vuonna 1963."
  },
  "leaellynasaura": {
   "means": "”Leaellynin lisko”",
   "ago": "110 miljoonaa vuotta sitten",
   "size": "2 m pitkä — ja suurin osa siitä oli häntää",
   "weight": "10 kg — kuin perunasäkki",
   "place": "Australia",
   "fact": "Se eli niin lähellä etelänapaa, että talvella oli pimeää monta kuukautta. Sen isot silmät ovat ehkä auttaneet sitä näkemään hämärässä, ja sen häntä oli luultavasti kolme kertaa niin pitkä kuin sen keho. Se on nimetty Leaellynin mukaan. Hän on niiden kahden tutkijan tytär, jotka kaivoivat sen esiin."
  },
  "cryolophosaurus": {
   "means": "”Jäätynyt harjalisko”",
   "ago": "190 miljoonaa vuotta sitten",
   "size": "6,5 m pitkä — puolitoista autoa pitkä",
   "weight": "465 kg — kuin hevonen",
   "place": "Etelämanner",
   "fact": "Se oli ensimmäinen lihansyöjädinosaurus, joka on koskaan löydetty Etelämantereelta. Se löytyi korkealta vuorelta vuonna 1991. Sen päässä oleva harja kulki sivulta toiselle kuin rokkarin kiehkurakampaus, joten se sai lempinimen Elvisaurus, laulaja Elviksen mukaan. Siihen aikaan Etelämanner oli kauempana navasta ja lämpimämpi, ja sitä peittivät metsät eikä jää."
  },
  "ichthyosaurus": {
   "means": "”Kalalisko”",
   "ago": "200–190 miljoonaa vuotta sitten",
   "size": "2–3 m pitkä — suunnilleen delfiinin mittainen",
   "weight": "90 kg — yhtä painava kuin aikuinen",
   "place": "Englanti",
   "fact": "Se näytti delfiiniltä, mutta se oli matelija, ja sen piti nousta pintaan hengittämään. Mary Anning ja hänen veljensä löysivät yhden kaikkein ensimmäisistä kalaliskon luurangoista Lyme Regisin rantakallioilta, kun Mary oli vasta noin kaksitoistavuotias. Fossiilit, joissa emon sisällä on poikasia, näyttävät, että se synnytti meressä, häntä edellä."
  },
  "liopleurodon": {
   "means": "”Sileäkylkinen hammas”",
   "ago": "165–160 miljoonaa vuotta sitten",
   "size": "6 m pitkä — autoa pidempi",
   "weight": "1,5 tonnia — kuin iso auto",
   "place": "Englanti ja Ranska",
   "fact": "Se oli joutsenliskojen lyhytkaulainen serkku, jolla oli valtava pää ja tikarimaiset hampaat. Sen kaltaiset pliosaurukset ovat ehkä haistaneet saaliinsa veden läpi uidessaan, samaan tapaan kuin hai. Eräässä kuuluisassa tv-ohjelmassa se tehtiin kaksikymmentäviisi metriä pitkäksi, mutta oikeasti se oli noin kuusi metriä pitkä — ja silti oman merensä huippusaalistaja."
  },
  "kronosaurus": {
   "means": "”Kronoksen lisko”",
   "ago": "110–100 miljoonaa vuotta sitten",
   "size": "10 m pitkä — yhtä pitkä kuin bussi",
   "weight": "10 tonnia — kuin kaksi norsua",
   "place": "Australia",
   "fact": "Pelkkä sen pää oli yli kaksi metriä pitkä, pidempi kuin makuulla oleva aikuinen. Se on nimetty Kronoksen mukaan. Hän oli jättiläinen vanhoista kreikkalaisista taruista. Sen luita kaivetaan Queenslandin kuivasta maasta, joka oli silloin matalan meren pohjaa. Fossiilien mahoista näkee, että se söi merikilpikonnia ja pitkäkaulaisia joutsenliskoja."
  },
  "archelon": {
   "means": "”Päällikkökilpikonna”",
   "ago": "80–75 miljoonaa vuotta sitten",
   "size": "4,5 m pitkä — yhtä pitkä kuin auto",
   "weight": "2,2 tonnia — autoa painavampi",
   "place": "Pohjois-Amerikka",
   "fact": "Se on suurin kilpikonna, joka on koskaan elänyt. Sillä ei ollut kiinteää kilpeä, vaan luinen kehikko, jota peitti paksu, nahkea iho, niin kuin nykyisillä merinahkakilpikonnilla. Kukaan ei tiedä varmasti, mitä se söi. Terävällä koukkunokallaan se on ehkä murskannut simpukoita ja äyriäisiä tai napannut pehmeää saalista, kuten meduusoja ja kalmareita."
  },
  "albertosaurus": {
   "means": "”Albertan lisko”",
   "ago": "71–68 miljoonaa vuotta sitten",
   "size": "9 m pitkä — yhtä pitkä kuin iso pakettiauto",
   "weight": "2 tonnia — kuin iso auto",
   "place": "Kanada",
   "fact": "Se oli Tyrannosauruksen solakampi ja kevyempi serkku, joka eli muutama miljoona vuotta aiemmin. Albertassa yhdestä louhoksesta tutkijat löysivät ainakin kahdenkymmenenkuuden albertosauruksen luut yhdessä, nuorista aikuisiin. Se viittaa siihen, että ne ovat ehkä eläneet ja kenties metsästäneetkin ryhmissä."
  },
  "edmontosaurus": {
   "means": "”Edmontonin lisko”",
   "ago": "73–66 miljoonaa vuotta sitten",
   "size": "12 m pitkä — bussia pidempi",
   "weight": "4 tonnia — sarvikuonoa painavampi",
   "place": "Pohjois-Amerikka",
   "fact": "Se oli sorsanokkadinosaurus. Sen suussa oli yli tuhat hammasta tiiviissä, jauhavissa riveissä, joten se pystyi pureskelemaan sitkeitä kasveja kuin lehmä. Jotkut fossiilit ovat säilyneet niin hyvin, että palasia sen suomuisesta ihosta on muuttunut kiveksi. Yhdessä näkyi jopa pehmeä, lihaisa heltta pään päällä, niin kuin kukolla."
  },
  "brontosaurus": {
   "means": "”Ukkoslisko”",
   "ago": "155–150 miljoonaa vuotta sitten",
   "size": "22 m pitkä — yhtä pitkä kuin kaksi bussia",
   "weight": "15 tonnia — kuin kolme norsua",
   "place": "Pohjois-Amerikka",
   "fact": "Yli sadan vuoden ajan tutkijat sanoivat, että Brontosaurus oli oikeastaan sama dinosaurus kuin Apatosaurus, ja nimestä luovuttiin. Sitten vuonna 2015 iso tutkimus, jossa vertailtiin kymmeniä luurankoja, totesi sen olevan niin erilainen, että se on taas oma dinosauruksensa. Sen kaula oli paksu ja korkea, paljon painavampi kuin Diplodocuksen kaula."
  },
  "giganotosaurus": {
   "means": "”Jättimäinen eteläinen lisko”",
   "ago": "99–97 miljoonaa vuotta sitten",
   "size": "12,5 m pitkä — bussia pidempi",
   "weight": "7 tonnia — kuin iso norsu",
   "place": "Argentiina",
   "fact": "Se oli yksi suurimmista lihaa syövistä dinosauruksista, joita on koskaan elänyt. Se oli suunnilleen yhtä pitkä kuin Tyrannosaurus, mutta sen pää oli pidempi ja kapeampi. Sen löysi automekaanikko, joka etsi fossiileja vapaa-ajallaan, ja sen nimi on annettu hänen kunniakseen. Se eli noin kolmekymmentä miljoonaa vuotta ennen Tyrannosaurusta ja eri mantereella, joten ne eivät koskaan tavanneet."
  },
  "quetzalcoatlus": {
   "means": "”Sulkakäärme”",
   "ago": "68–66 miljoonaa vuotta sitten",
   "size": "Siipiväli 10 m — yhtä leveä kuin pieni lentokone",
   "weight": "200 kg — yhtä painava kuin iso leijona",
   "place": "Pohjois-Amerikka",
   "fact": "Se oli yksi suurimmista lentävistä eläimistä, joita on koskaan elänyt, ja sen siivet olivat yhtä leveät kuin pienellä lentokoneella. Maassa seistessään se oli yhtä pitkä kuin kirahvi. Se luultavasti asteli maalla neljällä jalalla kuin jättimäinen haikara ja nappaili pieniä eläimiä."
  },
  "archaeopteryx": {
   "means": "”Muinainen siipi”",
   "ago": "150 miljoonaa vuotta sitten",
   "size": "50 cm pitkä — suunnilleen korpin mittainen",
   "weight": "1 kg — kuin korppi",
   "place": "Saksa",
   "fact": "Se oli yksi kaikkein ensimmäisistä linnuista. Sillä oli sulkasiivet, mutta myös hampaat, kynnelliset sormet ja pitkä luinen häntä niin kuin muilla dinosauruksilla. Se löydettiin vuonna 1861, vain kaksi vuotta sen jälkeen, kun Charles Darwin julkaisi kuuluisan kirjansa siitä, miten elävät olennot muuttuvat ajan mittaan. Löytö auttoi osoittamaan, että Darwin oli oikeassa. Luurankoja on löydetty vain noin tusina, kaikki samasta kalkkikivestä Etelä-Saksasta."
  },
  "carcharodontosaurus": {
   "means": "”Haihammaslisko”",
   "ago": "99–94 miljoonaa vuotta sitten",
   "size": "12 m pitkä — yhtä pitkä kuin bussi",
   "weight": "6,5 tonnia — yhtä painava kuin iso norsu",
   "place": "Pohjois-Afrikka",
   "fact": "Sen hampaat olivat pitkät, ohuet ja sahalaitaiset kuin valkohailla, ja siitä se sai nimensä. Se eli Pohjois-Afrikassa Spinosauruksen naapurina, maassa, jossa oli valtavia jokia täynnä jättiläiskaloja. Ensimmäinen hyvä luuranko löytyi Egyptistä, mutta se tuhoutui pommituksessa vuonna 1944, aivan kuten ensimmäinen Spinosauruskin."
  },
  "coelophysis": {
   "means": "”Ontto muoto”",
   "ago": "215–208 miljoonaa vuotta sitten",
   "size": "3 m pitkä — sänkyä pidempi",
   "weight": "20 kg — kuin iso koira",
   "place": "Pohjois-Amerikka",
   "fact": "Se oli yksi varhaisimmista dinosauruksista: kevyt ja nopea, ja sen luut olivat onttoja. Juuri sitä sen nimi tarkoittaa. Ghost Ranchilta New Mexicosta tutkijat löysivät satoja yhteen hautautuneita luurankoja, ehkä jopa yli tuhat. Vuonna 1998 Coelophysiksen kallo lensi avaruuteen Endeavour-avaruussukkulan mukana."
  },
  "megalosaurus": {
   "means": "”Suuri lisko”",
   "ago": "166 miljoonaa vuotta sitten",
   "size": "6 m pitkä — autoa pidempi",
   "weight": "1 tonni — kuin pieni auto",
   "place": "Englanti",
   "fact": "Se oli kaikkein ensimmäinen dinosaurus, jolle annettiin tieteellinen nimi, vuonna 1824. Silloin kukaan ei ollut vielä edes keksinyt sanaa dinosaurus. Ensimmäiset tutkijat luulivat sen kävelleen neljällä jalalla kuin jättiläislisko. Kirjailija Charles Dickens pani sen jopa yhteen tarinaansa vaappumaan pitkin mutaista Lontoon katua."
  },
  "plateosaurus": {
   "means": "”Leveä lisko”",
   "ago": "214–204 miljoonaa vuotta sitten",
   "size": "8 m pitkä — yhtä pitkä kuin pieni bussi",
   "weight": "1 tonni — kuin pieni auto",
   "place": "Saksa ja Sveitsi",
   "fact": "Se oli yksi ensimmäisistä isoista dinosauruksista ja Brontosauruksen kaltaisten jättimäisten pitkäkaulaisten kasvinsyöjien varhainen serkku. Se käveli kahdella takajalallaan eikä nelinkontin, niin kuin tutkijat ennen luulivat. Siitä on löydetty yli sata luurankoa, ja tutkijat arvelevat, että monet niistä juuttuivat syvään mutaan ja upposivat."
  },
  "glacialisaurus": {
   "means": "”Jäätynyt lisko”",
   "ago": "190 miljoonaa vuotta sitten",
   "size": "6 m pitkä — pidempi kuin kirahvi on korkea",
   "weight": "4 tonnia — kuin norsu",
   "place": "Etelämanner",
   "fact": "Se oli pitkäkaulainen kasvinsyöjä ja Brachiosauruksen kaltaisten jättiläisten varhainen serkku. Sen luut löytyivät samalta Etelämantereen vuorelta kuin Cryolophosauruksen luut, joten metsästäjä on ehkä jahdannut sitä. Siihen aikaan Etelämanner oli vihreä ja metsien peittämä, eikä etelänavalla ollut jäätä."
  },
  "pachyrhinosaurus": {
   "means": "”Paksunenäinen lisko”",
   "ago": "73–69 miljoonaa vuotta sitten",
   "size": "8 m pitkä — yhtä pitkä kuin pieni bussi",
   "weight": "4 tonnia — kuin norsu",
   "place": "Kanada ja Alaska",
   "fact": "Sen nenässä ei ollut sarvea vaan iso, paksu ja kuhmurainen luinen pahka, jolla se ehkä tuuppi kilpailijoitaan. Sen kauluksen yläreunassa oli pieniä sarvia. Sen laumat elivät pohjoisessa aina Alaskassa asti, lähellä Pohjoista jäämerta, missä talvella oli viikkokausia pimeää ja luultavasti lunta."
  },
  "ugrunaaluk": {
   "means": "”Muinainen laiduntaja”",
   "ago": "69 miljoonaa vuotta sitten",
   "size": "9 m pitkä — yhtä pitkä kuin kaksi autoa",
   "weight": "3 tonnia — yhtä painava kuin kaksi autoa",
   "place": "Alaska",
   "fact": "Sen nimi tarkoittaa ”muinaista laiduntajaa” iñupiaqin kielellä. Sitä puhuvat Pohjois-Alaskan alkuperäiset asukkaat. Se oli sorsanokkadinosaurus, jolla oli satoja hampaita kasvien jauhamiseen. Useimmat sen luut ovat nuorilta eläimiltä, jotka elivät pimeiden ja kylmien talvien läpi lähellä Pohjoista jäämerta."
  },
  "nanuqsaurus": {
   "means": "”Jääkarhulisko”",
   "ago": "69 miljoonaa vuotta sitten",
   "size": "6 m pitkä tai enemmän — puolitoista autoa pitkä",
   "weight": "Noin 1 tonni — kuin pieni auto",
   "place": "Alaska",
   "fact": "Se oli Tyrannosauruksen serkku, joka metsästi kaukana Alaskan pohjoisosissa, ja sen nimi tarkoittaa ”jääkarhuliskoa”. Se saalisti luultavasti Pachyrhinosauruksia ja nuoria Ugrunaalukeja, ja se eli pitkien ja pimeiden talvien läpi. Sillä oli ehkä pörröisten höyhenten turkki, joka piti sen lämpimänä."
  },
  "utahraptor": {
   "means": "”Utahin varas”",
   "ago": "139–135 miljoonaa vuotta sitten",
   "size": "6 m pitkä — puolitoista autoa pitkä",
   "weight": "Noin 300 kg — yhtä painava kuin flyygeli",
   "place": "Pohjois-Amerikka",
   "fact": "Se on suurin koskaan löydetty raptori, noin kaksikymmentä kertaa painavampi kuin serkkunsa Velociraptor. Kummassakin jalassa oli kaareva tappokynsi, suunnilleen banaanin mittainen. Se nimettiin vuonna 1993, samana vuonna kun Jurassic Park -elokuva tuli ulos, ja se oli vielä isompi kuin elokuvan raptorit."
  },
  "gastonia": {
   "means": "”Robert Gastonin kunniaksi”",
   "ago": "139–135 miljoonaa vuotta sitten",
   "size": "5 m pitkä — yhtä pitkä kuin auto",
   "weight": "Noin 2 tonnia — yhtä painava kuin virtahepo",
   "place": "Pohjois-Amerikka",
   "fact": "Sitä peitti luinen panssari, ja sen hartioista ja kyljistä työntyi isoja litteitä piikkejä kuin teriä. Sen hännässä ei ollut nuijaa, mutta hännän reunoilla oli piikkejä, joilla se pystyi huitomaan hyökkääjää. Se eli Utahraptorin naapurina, ja niiden luut löytyivät samasta louhoksesta."
  },
  "planicoxa": {
   "means": "”Litteä lantio”",
   "ago": "129–125 miljoonaa vuotta sitten",
   "size": "4,5 m pitkä — suunnilleen yhtä pitkä kuin auto",
   "weight": "Noin 450 kg — yhtä painava kuin hevonen",
   "place": "Pohjois-Amerikka",
   "fact": "Sen nimi tarkoittaa ”litteää lantiota”, koska sen lantioluu oli tavallista litteämpi. Siitä tutkijat erottavat sen serkuistaan. Se oli nokallinen kasvinsyöjä, Iguanodonin serkku, ja se käveli luultavasti joko kahdella tai neljällä jalalla. Museon vapaaehtoisten ryhmä löysi sen luut Utahista vuonna 1998."
  },
  "sanajeh": {
   "means": "”Muinainen kita”",
   "ago": "68–67 miljoonaa vuotta sitten",
   "size": "3,5 m pitkä — yhtä pitkä kuin kaksi aikuista peräkkäin makuulla",
   "weight": "Ehkä 25 kg — yhtä painava kuin iso koira",
   "place": "Intia",
   "fact": "Sen fossiili löytyi kiertyneenä murskautuneen dinosauruksenmunan ympärille pesässä, aivan juuri kuoriutuneen pitkäkaulaisen dinosauruksen poikasen vieressä. Luultavasti mutavyöry hautasi ne kaikki kerralla. Tutkijat arvelevat, että tämä käärme väijyi dinosaurusten pesillä ja nappasi poikasia sitä mukaa kuin ne kuoriutuivat."
  },
  "najash": {
   "means": "”Käärme”",
   "ago": "100–95 miljoonaa vuotta sitten",
   "size": "Jopa 2 m pitkä — pidempi kuin aikuinen on pitkä",
   "weight": "Ehkä 5 kg — yhtä painava kuin kissa",
   "place": "Argentiina",
   "fact": "Se oli käärme, jolla oli kaksi pientä takajalkaa ja selkärankaan kiinnittynyt lantio. Sellaista ei ole yhdelläkään nykyään elävällä käärmeellä. Sen luut ovat samoista kivikerroksista kuin Giganotosauruksen. Se eli maalla ja saalisti luultavasti pieniä eläimiä, kuten liskoja, pikkunisäkkäitä ja ehkä dinosaurusten poikasia."
  },
  "baryonyx": {
   "means": "”Raskas kynsi”",
   "ago": "130–125 miljoonaa vuotta sitten",
   "size": "Noin 9 m pitkä — melkein yhtä pitkä kuin bussi",
   "weight": "Noin 1,7 tonnia — autoa painavampi",
   "place": "Englanti",
   "fact": "Sillä oli pitkä, kapea kuono kuin krokotiililla ja kummassakin peukalossa valtava kaareva kynsi, suunnilleen viivoittimen mittainen. Sen luurangon sisältä tutkijat löysivät kalansuomuja ja nuoren Iguanodonin luita, sen viimeisiä aterioita. Se oli ensimmäinen todiste siitä, että jotkin dinosaurukset söivät kalaa."
  },
  "maiasaura": {
   "means": "”Hyvä äitilisko”",
   "ago": "77–76 miljoonaa vuotta sitten",
   "size": "Jopa 9 m pitkä — melkein yhtä pitkä kuin bussi",
   "weight": "Jopa 4 tonnia — sarvikuonoa painavampi",
   "place": "Pohjois-Amerikka",
   "fact": "Tutkijat löysivät sen kokonaisia pesimäalueita, joiden pesät olivat täynnä munankuoria ja poikasia. Poikaset näyttävät pysyneen pesässä kasvaessaan, joten vanhemmat luultavasti hoitivat niitä, ja siksi sen nimi tarkoittaa hyvää äitiliskoa. Se oli ensimmäinen kunnon merkki siitä, että dinosaurukset huolehtivat poikasistaan."
  },
  "mamenchisaurus": {
   "means": "”Mamenxin lisko”",
   "ago": "160–150 miljoonaa vuotta sitten",
   "size": "Noin 22 m pitkä — melkein yhtä pitkä kuin kaksi bussia",
   "weight": "Noin 15 tonnia — yhtä painava kuin kolme norsua",
   "place": "Kiina",
   "fact": "Sen kaula oli melkein puolet koko sen ruumiista, yksi pisimmistä kauloista, joita millään eläimellä on koskaan ollut. Yhdellä lajilla, joka löytyi Länsi-Kiinasta, saattoi olla noin 15 metrin kaula, yli kuusi kertaa niin pitkä kuin kirahvin. Sen kaulanikamat olivat enimmäkseen täynnä ilmaa, mikä piti ne kevyinä."
  },
  "deinonychus": {
   "means": "”Kauhea kynsi”",
   "ago": "115–108 miljoonaa vuotta sitten",
   "size": "Jopa 3,4 m pitkä — suunnilleen yhtä pitkä kuin pieni auto",
   "weight": "Noin 70 kg — yhtä painava kuin aikuinen",
   "place": "Pohjois-Amerikka",
   "fact": "Kummankin jalan toisessa varpaassa oli iso kaareva kynsi, noin 12 senttiä pitkä, jota se piti koholla irti maasta. Jurassic Park -elokuvan raptoreita kutsuttiin Velociraptoreiksi, mutta oikeasti ne tehtiin Deinonychuksen mallin mukaan. Sillä oli luultavasti höyhenet, niin kuin sen serkuilla Velociraptorilla ja Microraptorilla."
  },
  "patagotitan": {
   "means": "”Patagonian jättiläinen”",
   "ago": "Noin 102 miljoonaa vuotta sitten",
   "size": "Noin 31 m pitkä — yhtä pitkä kuin kaksi ja puoli bussia",
   "weight": "Noin 57 tonnia — yhtä painava kuin yhdeksän norsua",
   "place": "Argentiina",
   "fact": "Se on yksi suurimmista eläimistä, jotka ovat koskaan kävelleet maalla, ja se saattoi painaa suunnilleen yhtä paljon kuin Argentinosaurus. Pelkkä sen reisiluu oli noin 2,4 metriä pitkä, pidempi kuin aikuinen. Tutkijat löysivät ainakin kuuden yksilön luut yhdeltä maatilalta."
  },
  "herrerasaurus": {
   "means": "”Herreran lisko”",
   "ago": "Noin 231 miljoonaa vuotta sitten",
   "size": "Jopa 6 m pitkä — autoa pidempi",
   "weight": "Noin 350 kg — flyygeliä painavampi",
   "place": "Argentiina",
   "fact": "Se on yksi vanhimmista koskaan löydetyistä dinosauruksista, ajalta, jolloin dinosauruksia oli vielä vähän. Sen alaleuassa oli liukuva nivel, joka auttoi sitä pitämään kiinni rimpuilevasta saaliista. Yhdessä sen kallossa on puremanjälkiä, ehkä tappelusta toisen Herrerasauruksen kanssa."
  },
  "kentrosaurus": {
   "means": "”Piikkilisko”",
   "ago": "155–150 miljoonaa vuotta sitten",
   "size": "Noin 4,5 m pitkä — suunnilleen yhtä pitkä kuin auto",
   "weight": "Noin 1 tonni — kuin pieni auto",
   "place": "Tansania",
   "fact": "Se oli Stegosauruksen pienempi afrikkalainen serkku. Sen kaulaa ja selkää pitkin kulki levyjä, jotka muuttuivat hännässä pitkiksi, teräviksi piikeiksi, ja kummastakin olkapäästä työntyi vielä yksi pitkä piikki. Tutkijat arvelevat, että se pystyi huitomaan piikkihäntäänsä hyvin nopeasti, ehkä yhtä lujaa kuin auto ajaa kaupungissa."
  },
  "rajasaurus": {
   "means": "”Kuningaslisko”",
   "ago": "69–66 miljoonaa vuotta sitten",
   "size": "Noin 7 m pitkä — yhtä pitkä kuin puolitoista autoa",
   "weight": "Ehkä 2 tonnia — yhtä painava kuin virtahepo",
   "place": "Intia",
   "fact": "Sen otsassa oli yksi lyhyt sarvi, luultavasti näyttämistä tai kilpailijoiden puskemista varten. Se oli Carnotauruksen serkku, ja se luultavasti piileskeli ja odotti isoja eläimiä, puri niitä ja piti kiinni. Se eli samalla seudulla Intiassa kuin Sanajeh, käärme, joka löytyi dinosauruksen pesästä."
  },
  "borealopelta": {
   "means": "”Pohjoinen kilpi”",
   "ago": "112–110 miljoonaa vuotta sitten",
   "size": "Noin 5,5 m pitkä — autoa pidempi",
   "weight": "Noin 1,3 tonnia — yhtä painava kuin auto",
   "place": "Pohjois-Amerikka",
   "fact": "Se on yksi parhaiten säilyneistä koskaan löydetyistä dinosauruksista: sen panssari, iho ja jopa piikkien sarvikuoret ovat yhä paikoillaan, joten se näyttää melkein patsaalta. Tutkijat pystyivät selvittämään jopa sen värin: punaruskea, päältä tummempi ja alta vaaleampi. Sen mahassa oli yhä sen viimeinen ateria, enimmäkseen saniaisia."
  },
  "sinosauropteryx": {
   "means": "”Kiinalainen matelijasiipi”",
   "ago": "125–124 miljoonaa vuotta sitten",
   "size": "Noin 1 m pitkä, enimmäkseen häntää — yhtä pitkä kuin kitara",
   "weight": "Noin 1 kg — yhtä painava kuin sokeripussi",
   "place": "Kiina",
   "fact": "Se oli ensimmäinen dinosaurus lintujen lisäksi, jolta löytyi höyhenpeite: pörröisiä, karvamaisia höyheniä, ei lentämistä varten. Fossiileihin säilyneistä pikkuruisista väritäplistä tutkijat päättelivät, että sillä oli tumma rosvonaamio kuin pesukarhulla, raidallinen häntä ja vaalea vatsa. Tällaiset värit auttoivat sitä piiloutumaan."
  },
  "corythosaurus": {
   "means": "”Kypärälisko”",
   "ago": "77–76 miljoonaa vuotta sitten",
   "size": "Noin 8 m pitkä — yhtä pitkä kuin kaksi autoa",
   "weight": "Noin 3,8 tonnia — sarvikuonoa painavampi",
   "place": "Pohjois-Amerikka",
   "fact": "Sen korkea, pyöreä harja näytti muinaisen kreikkalaisen sotilaan kypärältä. Harja oli sisältä ontto, ja siinä kulki pitkiä hengitysputkia, jotka luultavasti tekivät sen huudoista kovempia ja matalampia, niin kuin trumpetti. Ensimmäisen luurangon vierestä löytyi kiveen painuneita paloja sen ihosta."
  },
  "psittacosaurus": {
   "means": "”Papukaijalisko”",
   "ago": "125–105 miljoonaa vuotta sitten",
   "size": "Noin 2 m pitkä — yhtä pitkä kuin sänky",
   "weight": "Noin 20 kg — yhtä painava kuin kuusivuotias",
   "place": "Aasia",
   "fact": "Sillä oli lyhyt, korkea nokka kuin papukaijalla, ja aikuiset kävelivät kahdella jalalla. Kiinasta löytyneessä fossiilissa mäyrän kokoinen nisäkäs, Repenomamus, puree sitä, ja tulivuoren mutavyöry hautasi ne kesken tappelun. Eivät siis vain dinosaurukset syöneet nisäkkäitä: joskus nisäkkäät söivät dinosauruksia."
  },
  "zuul": {
   "means": "”Zuul, säärten murskaaja”",
   "ago": "76–75 miljoonaa vuotta sitten",
   "size": "Noin 6 m pitkä — yhtä pitkä kuin puolitoista autoa",
   "weight": "Ehkä 2,5 tonnia — virtahepoa painavampi",
   "place": "Pohjois-Amerikka",
   "fact": "Se on nimetty Zuulin mukaan. Zuul on hirviö Haamujengi-elokuvassa, ja tämän dinosauruksen pää näyttää paljon samalta. Sen toinen nimi tarkoittaa säärten murskaajaa, koska se pystyi heilauttamaan raskaan häntänuijansa saalistajan jalkoihin. Sen luuranko löytyi melkein kokonaisena, ja iho ja panssarin sarvikuoret olivat yhä paikoillaan."
  }
 },
 "more": {
  "tyrannosaurus": {
   "found": "Fossiilinmetsästäjä Barnum Brown kaivoi ensimmäisen luurangon esiin Montanassa vuonna 1902, ja Henry Fairfield Osborn antoi sille nimen Tyrannosaurus rex vuonna 1905.",
   "facts": [
    "Teini-iässä se kasvoi huimaa vauhtia. Tutkijat laskivat sen luista kasvurenkaita, samanlaisia kuin puiden vuosirenkaat. Niistä selvisi, että se lihoi noin kaksi kiloa joka päivä neljän vuoden ajan.",
    "Kaikkein täydellisin koskaan löydetty luuranko, lempinimeltään Sue, oli kuollessaan noin 33-vuotias. Sen suurin hammas on juurineen 30 senttimetriä pitkä, yhtä pitkä kuin koulun viivain.",
    "Sen aivoissa hajuaistin osat olivat valtavat, suurimmat kaikista lihansyöjädinosauruksista, joita tutkijat ovat mitanneet. Se pystyi luultavasti haistamaan ruoan kaukaa."
   ]
  },
  "triceratops": {
   "found": "Sen sarvet löydettiin Denverin läheltä Coloradosta vuonna 1887. Othniel Marsh luuli ensin, että ne kuuluivat jättiläisbiisonille. Sitten hän antoi nimen Triceratops vuonna 1889.",
   "facts": [
    "Sen sarvet muuttivat muotoaan, kun se kasvoi. Vauvoilla oli pienet nysät, nuorilla taaksepäin kaartuvat sarvet, ja aikuisilla sarvet kääntyivät osoittamaan eteenpäin.",
    "Yhdessä Triceratopsin lonkkaluussa on noin 80 Tyrannosauruksen hampaanjälkeä. Tutkijat arvelevat, että saalistaja puri yhä uudestaan saadakseen takajalan irti ja syödäkseen sen.",
    "Sen suussa oli satoja hampaita tiiviissä, siisteissä riveissä. Ne leikkasivat sitkeitä kasveja kuin sakset. Kun vanhat hampaat kuluivat, uudet kasvoivat niiden tilalle."
   ]
  },
  "stegosaurus": {
   "found": "Arthur Lakes löysi ensimmäiset luut Morrisonin läheltä Coloradosta vuonna 1877, ja Othniel Marsh antoi nimen Stegosaurus samana vuonna.",
   "facts": [
    "Sen nimi tarkoittaa kattoliskoa. Ensimmäinen sitä tutkinut tiedemies luuli, että levyt olivat lappeellaan sen selässä kuin kattotiilet. Myöhemmät fossiilit osoittivat, että ne seisoivat pystyssä.",
    "Tutkijat löysivät Allosauruksen hännän luun, jossa on reikä. Se sopii täsmälleen Stegosauruksen hännän piikkiin. Haava oli osittain parantunut, joten saalistaja selvisi iskusta.",
    "Vuonna 2024 Stegosauruksen luuranko, lempinimeltään Apex, myytiin melkein 45 miljoonalla dollarilla. Se on suurin summa, mitä fossiilista on koskaan maksettu."
   ]
  },
  "velociraptor": {
   "found": "Peter Kaisen löysi ensimmäisen kallon ja kynnen Mongolian Gobin autiomaasta vuonna 1923 amerikkalaisen luonnontieteellisen museon tutkimusretkellä. Henry Fairfield Osborn antoi sille nimen vuonna 1924.",
   "facts": [
    "Kummassakin jalassa oli yksi valtava, kaareva kynsi, suunnilleen yhtä pitkä kuin sinun sormesi. Kävellessään se piti sitä varvasta koholla maasta, luultavasti jotta kynsi pysyisi terävänä.",
    "Yhden Velociraptorin luurangon vatsasta löytyi ison lentoliskon luu. Se oli sen viimeinen ateria. Tutkijat arvelevat, että se luultavasti söi kuolleen eläimen eikä saalistanut sitä itse.",
    "Sen pitkää häntää jäykistivät ohuet luusauvat, vähän kuin keppi. Se auttoi luultavasti pitämään tasapainon, kun se juoksi, kääntyi ja loikkasi saaliin kimppuun."
   ]
  },
  "brachiosaurus": {
   "found": "H. William Menke löysi ensimmäisen luurangon Grand Junctionin läheltä Coloradosta vuonna 1900, kun hän oli kaivamassa Elmer Riggsin ryhmän kanssa. Riggs antoi sille nimen Brachiosaurus vuonna 1903.",
   "facts": [
    "Pelkkä sen reisiluu on noin kaksi metriä pitkä, pidempi kuin aikuinen ihminen.",
    "Berliiniläisen museon kuuluisaa jättiläisluurankoa kutsuttiin Brachiosaurukseksi melkein sata vuotta. Vuonna 2009 tutkijat päättivät, että se olikin eri dinosaurus Afrikasta.",
    "Sen luurangon täysikokoinen kopio, lempinimeltään Ernestine, seisoo Chicagon O'Haren lentoasemalla. Se on noin 22 metriä pitkä, joten matkustajat kävelevät suoraan sen kaulan alta."
   ]
  },
  "ankylosaurus": {
   "found": "Barnum Brownin ryhmä löysi ensimmäisen luurangon Montanasta vuonna 1906, ja Brown antoi sille nimen Ankylosaurus vuonna 1908.",
   "facts": [
    "Kukaan ei ole koskaan löytänyt kokonaista Ankylosauruksen luurankoa. Tutkijoilla on vain kourallinen vajaita luurankoja ja vain yksi häntänuija.",
    "Niin isoksi eläimeksi sen hampaat olivat pikkuruiset ja lehden muotoiset. Kokoonsa nähden ne olivat pienemmät kuin yhdelläkään sen panssaroiduista sukulaisista. Se luultavasti napsi pehmeitä kasveja eikä pureskellut sitkeitä.",
    "Sen kuonon sisällä ilmakäytävät kiersivät mutkalla kuin kiemurapilli. Tutkijat arvelevat, että ne ehkä lämmittivät tai viilensivät ilmaa tai saivat sen äänet kuulostamaan kovemmilta."
   ]
  },
  "spinosaurus": {
   "found": "Richard Markgraf kaivoi ensimmäiset luut esiin Egyptin autiomaasta vuonna 1912, ja saksalainen tutkija Ernst Stromer antoi nimen Spinosaurus vuonna 1915.",
   "facts": [
    "Ensimmäiset Spinosauruksen luut tuhoutuivat pommin räjähdyksessä toisen maailmansodan aikana vuonna 1944. Seitsemänkymmentä vuotta tutkijoilla oli apunaan vain vanhoja piirroksia ja valokuvia.",
    "Sen luut olivat umpinaiset ja painavat, kuin pingviinillä. Tutkijat arvelevat, että se auttoi sitä uppoamaan ja saalistamaan veden alla, eikä se vain kellunut pinnalla.",
    "Eräs tutkija osti Marokossa oudon luun viiksekkäältä mieheltä. Vuosia myöhemmin hän huomasi saman miehen kävelemässä kahvilan ohi, ja mies johdatti hänet uuden luurangon luo."
   ]
  },
  "parasaurolophus": {
   "found": "Toronton yliopiston ryhmä kaivoi ensimmäisen luurangon esiin Sand Creekin läheltä Albertasta Kanadasta vuonna 1920, ja William Parks antoi sille nimen vuonna 1922.",
   "facts": [
    "Lukiolainen löysi Utahista parhaan koskaan löydetyn Parasaurolophus-vauvan, lempinimeltään Joe. Se oli alle vuoden ikäinen, ja sen kuuluisa harja oli vasta pieni kyhmy.",
    "Tutkijat pohtivat aikoinaan, oliko harja snorkkeli, jolla se hengitti veden alla. Se ei voi olla, koska harjan kärjessä ei ole reikää, josta ilma pääsisi sisään.",
    "Sen suussa oli satoja tiiviisti yhteen pakkautuneita hampaita. Ne muodostivat jauhavan pinnan, joka oli kuin karkea viila. Se murskasi lehdet ja oksat ennen kuin nieli ne."
   ]
  },
  "allosaurus": {
   "found": "Benjamin Mudge ja Samuel Williston kaivoivat ensimmäiset luut esiin Garden Parkissa Coloradossa vuonna 1877, ja Othniel Marsh antoi nimen Allosaurus samana vuonna.",
   "facts": [
    "Big Al -lempinimisellä luurangolla oli 19 murtunutta tai tulehtunutta luuta. Yksi pahasti tulehtunut varvas sai sen luultavasti ontumaan, ja ehkä juuri se lopulta tappoi sen.",
    "Monet yhdestä Coloradon louhoksesta löydetyt Allosauruksen luut ovat täynnä Allosauruksen hampaanjälkiä. Tutkijat arvelevat, että ankarina ja kuivina aikoina ne söivät raatoja ja jopa toisiaan.",
    "Sillä oli pieni luinen sarvi kummankin silmän edessä ja matalat harjanteet kuonoa pitkin. Tutkijat arvelevat, että ne olivat luultavasti komeilua varten, eivät taistelemista."
   ]
  },
  "pachycephalosaurus": {
   "found": "William Winkley löysi lähes kokonaisen kallon tilaltaan Montanasta vuonna 1940, ja Barnum Brown ja Erich Schlaikjer antoivat sille nimen vuonna 1943.",
   "facts": [
    "Jotkut tutkijat arvelevat, että piikikkäät ja litteäpäiset kallot, joille annettiin aikoinaan omat nimet, olivatkin nuoria Pachycephalosauruksia. Kun ne kasvoivat, piikit pienenivät ja päälaen kupoli paisui.",
    "Kyhmyinen pala sen kalloa kaivettiin esiin vuonna 1859. Eräs tutkija arveli sen kuuluneen vyötiäisen kaltaiselle eläimelle, ja totuuden selvittämiseen meni yli sata vuotta.",
    "Sen paksu kallo säilyy paljon paremmin kuin muu ruumis. Kukaan ei ole löytänyt kokonaista luurankoa, joten suurin osa tiedoistamme tulee kalloista ja kupoleista."
   ]
  },
  "therizinosaurus": {
   "found": "Sen jättimäiset kynnet kaivettiin esiin Mongolian Gobin autiomaasta vuonna 1948 venäläisten ja mongolialaisten yhteisellä tutkimusretkellä, ja Evgeny Maleev antoi sille nimen vuonna 1954.",
   "facts": [
    "Vuonna 2023 tutkijat testasivat sen kynsien tietokonemalleja. Kynnet olivat luultavasti liian heikot taisteluun tai kaivamiseen. Tutkijat arvelevat, että jättimäiset kynnet olivat ehkä enimmäkseen komeilua varten.",
    "Sen sukupuussa on paljon lihansyöjiä, kuten Velociraptor, mutta se luopui lihasta ja söi kasveja. Sen lähisukulaisilla oli pörröiset höyhenet, joten se oli luultavasti myös pörröinen.",
    "Mongoliasta tutkijat löysivät sen sukulaisten pesimäpaikan, jossa oli 17 pesää vierekkäin ja greipin kokoisia munia. Useimmat poikaset kuoriutuivat, joten vanhemmat luultavasti vartioivat niitä."
   ]
  },
  "diplodocus": {
   "found": "Benjamin Mudge ja Samuel Williston kaivoivat ensimmäiset luut esiin Cañon Cityn läheltä Coloradosta vuonna 1877, ja Othniel Marsh antoi sille nimen seuraavana vuonna.",
   "facts": [
    "Sen hampaat kuluivat niin nopeasti, että jokainen vaihtui uuteen noin kerran kuukaudessa. Jokaisen hampaan takana odotti jonossa jopa viisi varahammasta.",
    "Andrew-lempinimen saanut vauvan kallo osoitti, että nuorilla Diplodocuksilla oli kapea kuono kuin peuralla. Tutkijat arvelevat, että vauvat söivät monenlaisia kasveja, kun taas aikuisilla oli leveä kuono kuin lehmällä.",
    "Dippy, kuuluisa luuranko, joka toivotti kävijät tervetulleiksi Lontoossa yli sadan vuoden ajan, on kipsikopio. Rikas mies nimeltä Andrew Carnegie lähetti samanlaisia kopioita noin kymmeneen museoon ympäri maailmaa."
   ]
  },
  "carnotaurus": {
   "found": "José Bonaparten johtama ryhmä löysi sen ainoan luurangon maatilalta Chubutista Argentiinasta vuonna 1984, ja Bonaparte antoi sille nimen seuraavana vuonna.",
   "facts": [
    "Siitä on löydetty vain yksi luuranko, ja sen mukana oli kiveen painautuneita palasia ihoa. Ihoa peittivät pienet suomut, ja kylkiä pitkin kulki rivejä isompia kyhmyjä. Höyheniä ei ollut.",
    "Sen silmät osoittivat hieman eteenpäin, joten se näki luultavasti jotkin asiat molemmilla silmillä yhtä aikaa, niin kuin sinäkin. Se auttoi sitä arvioimaan, kuinka kaukana saalis oli.",
    "Sen kallolla tehdyt kokeet viittaavat siihen, että se pystyi napsauttamaan leukansa kiinni hyvin nopeasti, mutta sen purema ei ollut kovin voimakas. Se kävi luultavasti pienempien eläinten kimppuun, jotka se sai napattua nopeasti."
   ]
  },
  "dilophosaurus": {
   "found": "Navajo-mies nimeltä Jesse Williams näytti sen luut tutkijoille Arizonassa vuonna 1942. Samuel Welles kuvaili sen vuonna 1954 ja antoi sille nimen Dilophosaurus vuonna 1970.",
   "facts": [
    "Yhdellä luurangolla oli kahdeksan vammaa, muun muassa murtunut lapaluu sekä tulehtuneita luita käsivarressa ja peukalossa. Se on lihansyöjädinosaurusten ennätys. Luut olivat parantuneet, joten se eli vielä kuukausia tai vuosia.",
    "Sen harjat olivat täynnä ilmataskuja, jotka olivat yhteydessä sen nenään. Nykyiset linnut pullistavat ihoaan tällaisten ilmapussien avulla, joten tutkijat arvelevat, että Dilophosauruskin saattoi tehdä jotain samanlaista.",
    "Tutkijat luulivat aikoinaan, että sen leuat olivat heikot. Vuonna 2020 tehdyssä tutkimuksessa löytyi jälkiä isoista ja vahvoista leukalihaksista, joten se oli luultavasti sittenkin voimakas saalistaja."
   ]
  },
  "iguanodon": {
   "found": "Ensimmäiset hampaat löydettiin Sussexista Englannista noin vuonna 1822. Löytäjä oli luultavasti Mary Ann Mantell. Hänen miehensä Gideon antoi eläimelle nimen vuonna 1825, koska hampaat näyttivät leguaanin hampailta.",
   "facts": [
    "Vuonna 1878 hiilikaivosmiehet löysivät Belgiasta noin kolmekymmentä luurankoa 322 metrin syvyydestä. Se on suunnilleen yhtä syvällä kuin Eiffel-torni on korkea.",
    "Uudenvuodenaattona 1853 noin kaksikymmentä tutkijaa söi hienon illallisen Iguanodonin luonnollisen kokoisen mallin sisällä. Mallia rakennettiin Lontoon Crystal Palacen puistoon.",
    "Sen kolme keskimmäistä sormea olivat kasvaneet yhteen kuin kavio, jonka varassa se käveli, ja pikkusormi taipui tarttumaan ruokaan. Nykyään tutkijat arvelevat, että se käveli useimmiten neljällä jalalla."
   ]
  },
  "styracosaurus": {
   "found": "Fossiilienkerääjä Charles Sternberg löysi ensimmäisen kallon Red Deer -joen varrelta Albertasta Kanadasta vuonna 1913, ja Lawrence Lambe antoi sille nimen samana vuonna.",
   "facts": [
    "Vuonna 2015 eräs tutkija löysi kallon ja antoi sille koiransa mukaan lempinimen Hannah. Sen kaulus oli vino: toisella puolella oli seitsemän luista piikkiä ja toisella kahdeksan.",
    "Sen suun etuosassa oli kapea nokka kuin papukaijalla, ja sillä se nyppi kasveja. Nokan takana hammasrivit leikkasivat ruokaa kuin sakset, ja kuluneiden tilalle kasvoi koko ajan uusia hampaita.",
    "Albertasta tutkijat löysivät luukerrostuman, jossa oli monta samassa paikassa kuollutta Styracosaurusta. Ne ehkä tungeksivat kuivuuden aikana juomapaikan ympärillä."
   ]
  },
  "pteranodon": {
   "found": "Othniel Marshin ryhmä löysi ensimmäiset siipiluut Kansasin liitukivestä vuonna 1870, ja Marsh antoi sille nimen Pteranodon vuonna 1876.",
   "facts": [
    "Pteranodonin fossiileja on löydetty noin 1200, enemmän kuin mistään muusta lentoliskosta. Siksi tutkijat tuntevat sen niin hyvin.",
    "Urokset ja naaraat näyttivät erilaisilta. Uroksilla oli isot harjat ja jopa seitsemän metrin siivet kärjestä kärkeen. Naaraat olivat pienempiä, ja niillä oli pienet harjat ja leveämpi lantio munimista varten.",
    "Yhden Pteranodonin fossiilin leukojen välissä on yhä möykky kalaa, sen kaikkein viimeinen ateria. Se lensi matalan meren yllä, joka peitti aikoinaan Pohjois-Amerikan keskiosat."
   ]
  },
  "rhamphorhynchus": {
   "found": "Ensimmäinen fossiili löytyi kalkkikivestä Baijerista Saksasta. Sen kuvaili vuonna 1825 tutkija, joka luuli sitä linnuksi. Hermann von Meyer antoi nimen Rhamphorhynchus vuonna 1847.",
   "facts": [
    "Useissa fossiileissa se on jäänyt ison, piikkikuonoisen kalan leukoihin. Sen siipi luultavasti takertui kalan hampaisiin, ja molemmat vajosivat pohjaan ja kuolivat yhdessä.",
    "Sen hännän päässä oleva läppä muuttui, kun se kasvoi. Vauvoilla läppä oli pieni ja soikea, vanhemmilla vinoneliö ja kaikkein suurimmilla aikuisilla kolmio.",
    "Sen silmiä ympäröivät luurenkaat muistuttavat yöllä saalistavien merilintujen luurenkaita. Siksi tutkijat arvelevat, että se saattoi kalastaa pimeässä."
   ]
  },
  "dimorphodon": {
   "found": "Mary Anning löysi ensimmäisen luurangon Lyme Regisistä Dorsetista vuonna 1828. Se oli ensimmäinen lentolisko, joka löydettiin Saksan ulkopuolelta, ja Richard Owen antoi sille nimen Dimorphodon vuonna 1859.",
   "facts": [
    "Sen iso pää oli yllättävän kevyt. Se oli täynnä isoja aukkoja, joita erottivat ohuet luiset tuet, aivan kuin sillan runko.",
    "Sen hampaissa olevat pienet naarmut muistuttavat sellaisten liskojen hampaita, jotka saalistavat muita pieniä eläimiä. Se söi siis luultavasti pieniä selkärankaisia eläimiä ja ehkä myös hyönteisiä.",
    "Sen siivet olivat lyhyet ja ruumis tukeva, joten se oli luultavasti huono lentäjä. Se lensi lyhyitä pyrähdyksiä siipiään räpytellen, vähän kuin fasaani. Isojen kaarevien kynsiensä ansiosta se oli hyvä kiipeilijä."
   ]
  },
  "ornithocheirus": {
   "found": "Harry Seeley antoi sille nimen vuonna 1869 katkenneiden leuankärkien perusteella. Ne oli kaivettu esiin Cambridge Greensand -nimisestä kivikerroksesta Cambridgen läheltä Englannista.",
   "facts": [
    "Sen nimi tarkoittaa lintukättä. Sen nimennyt tutkija luuli, että lentoliskot olivat lintujen esi-isiä. Nyt tiedämme, että se ajatus oli väärä.",
    "Vain kahdessa vuodessa Harry Seeley antoi nimen Ornithocheirus 27 erilaiselle lentoliskolle. Nykyään tutkijat ovat yhtä mieltä siitä, että vain yksi niistä todella kuuluu siihen.",
    "Sen fossiileja löysivät 1800-luvun kaivosmiehet, jotka kaivoivat fosfaattipitoisia kiviä maatilojen lannoitteeksi. Kivien seassa oli Ornithocheiruksen leukojen katkenneita kärkiä."
   ]
  },
  "mosasaurus": {
   "found": "Ensimmäiset luut tulivat esiin liitukaivoksista Maastrichtin läheltä Alankomaista vuonna 1764. Englantilainen geologi William Conybeare antoi sille nimen vuonna 1822 läheisen Maas-joen mukaan.",
   "facts": [
    "Leukojen hampaiden lisäksi sillä oli kaksi ylimääräistä hammasriviä kitalaessa. Ne toimivat luultavasti kuin koukut: ne pitivät liukkaasta saaliista kiinni ja työnsivät sitä alas kurkusta.",
    "Ranskan armeija otti sen kuuluisimman kallon sotasaaliiksi vuonna 1795 ja vei sen Pariisiin. Sitä säilytetään siellä museossa vielä tänäkin päivänä.",
    "Mosasaurukset eivät ryömineet rannalle munimaan. Kaukaa merestä löydetyt mosasaurusvauvojen luut osoittavat, että ne luultavasti synnyttivät eläviä poikasia avomerellä, niin kuin valaat."
   ]
  },
  "argentinosaurus": {
   "found": "Maanviljelijä Guillermo Heredia löysi ensimmäisen luun tilaltaan Plaza Huinculin läheltä Argentiinasta vuonna 1987. Hän luuli sitä kivettyneeksi puunrungoksi. José Bonaparte ja Rodolfo Coria antoivat sille nimen vuonna 1993.",
   "facts": [
    "Tutkijat skannasivat sen luurangon luonnollisen kokoisen mallin ja panivat sen kävelemään tietokoneen sisällä. Sen huippunopeudeksi tuli noin 7 kilometriä tunnissa. Se on sama kuin ihmisen reipas kävelyvauhti.",
    "Samoilla seuduilla eli Mapusaurus, valtava lihansyöjä. Useita Mapusauruksia löydettiin hautautuneina yhdessä, joten jotkut tutkijat arvelevat, että ne saalistivat laumoissa ja saattoivat jopa käydä Argentinosauruksen kimppuun.",
    "Sen luurangon täysikokoinen kopio täyttää valtavan salin Plaza Huinculin museossa. Plaza Huincul on argentiinalainen kaupunki lähellä paikkaa, josta luut löytyivät. Kävijät näyttävät luurangon vieressä muurahaisilta."
   ]
  },
  "gallimimus": {
   "found": "Puolalaiset ja mongolialaiset fossiilinmetsästäjät löysivät ensimmäiset luut Mongolian Gobin autiomaasta vuonna 1963. Rinchen Barsbold, Halszka Osmólska ja Ewa Roniewicz antoivat sille nimen vuonna 1972.",
   "facts": [
    "Yhden kallon nokan sisäpuolella on rivejä ohuita harjanteita, kuin kampa ankan nokassa. Jotkut tutkijat arvelevat, että se siivilöi pientä ruokaa mutaisesta vedestä, mutta toisten mielestä harjanteet vain auttoivat sitä katkomaan kasveja.",
    "Monet sen luista olivat onttoja ja täynnä ilmaa, kuin linnulla. Se auttoi noin isoa eläintä pysymään kevytjalkaisena.",
    "Gallimimus-lauma esiintyy vuoden 1993 elokuvassa Jurassic Park. Eläimet kaartavat yhdessä kuin lintuparvi. Se kohtaus auttoi muuttamaan sitä, millaisina ihmiset kuvittelivat dinosaurukset: nopeina ja vilkkaina, ei hitaina ja kömpelöinä."
   ]
  },
  "compsognathus": {
   "found": "Ensimmäinen luuranko löydettiin kalkkikivestä Baijerista Saksasta 1850-luvulla, ja sen keräsi talteen Joseph Oberndorfer. Saksalainen tutkija Johann Wagner antoi sille nimen vuonna 1859.",
   "facts": [
    "Sen nimi tarkoittaa siroa leukaa. Ensimmäinen sitä kuvaillut tutkija luuli sitä oudoksi liskoksi, ja vasta myöhemmin ymmärrettiin, että se oli dinosaurus.",
    "Vuonna 1868 tutkija Thomas Huxley huomasi, kuinka paljon sen luuranko muistutti linnun luurankoa. Hän vertasi sitä Archaeopteryxiin ja oli yksi ensimmäisistä, jotka esittivät, että linnut ovat sukua dinosauruksille.",
    "Saksasta löydetty luuranko on nuori yksilö, vain noin 70 senttimetriä pitkä, yhtä pitkä kuin rullalauta. Isompi, aikuisen luuranko löydettiin Ranskasta noin vuonna 1971."
   ]
  },
  "microraptor": {
   "found": "Kiinalainen tutkija Xu Xing ja hänen ryhmänsä nimesivät sen vuonna 2000. Fossiili kaivettiin esiin Liaoningin maakunnasta Koillis-Kiinasta.",
   "facts": [
    "Muiden Microraptor-fossiilien vatsasta on löytynyt kaloja, kokonainen lisko ja pienen karvaisen nisäkkään jalka. Se taisi napata lähes mitä tahansa, minkä sai kiinni.",
    "Kiinan museoissa on yli 300 Microraptorin tai sen lähisukulaisten fossiilia. Se oli luultavasti muinaisen metsänsä yleisin dinosaurus.",
    "Sen häntä nähtiin ensimmäisen kerran väärennetyssä fossiilissa. Vuonna 1999 eräs lehti kutsui sitä dinosaurusten ja lintujen puuttuvaksi renkaaksi. Sitten tutkijat osoittivat, että fossiili oli koottu kahdesta eri eläimestä."
   ]
  },
  "oviraptor": {
   "found": "George Olsen löysi ensimmäisen luurangon vuonna 1923 Flaming Cliffsin kallioilta Mongoliasta, Gobin autiomaasta. Hän oli mukana amerikkalaisella tutkimusretkellä. Henry Fairfield Osborn nimesi sen vuonna 1924.",
   "facts": [
    "Aivan ensimmäisen luurangon sisältä löytyi liskon palasia. Se söi siis luultavasti pieniä eläimiä ja myös muuta ruokaa.",
    "Sillä ei ollut hampaita, mutta suun katosta työntyi alas kaksi luista piikkiä. Tutkijat arvelevat, että niiden avulla se ehkä piti kiinni kovasta ruoasta tai sai sen rikki.",
    "Erään sen lähisukulaisen munat olivat sinivihreitä, vähän kuin rastaan munat. Tutkijat päättelivät tämän pienistä värijäämistä, joita fossiilisissa munankuorissa vielä on."
   ]
  },
  "protoceratops": {
   "found": "Sen ensimmäisen kallon huomasi vuonna 1922 Mongoliassa, Gobin autiomaassa, James Shackelford. Hän oli amerikkalaisen tutkimusretken valokuvaaja. Walter Granger ja William Gregory nimesivät sen vuonna 1923.",
   "facts": [
    "Sen munat olivat pehmeitä ja nahkamaisia kuin kilpikonnan munat, eivät kovia kuin kananmunat. Tutkijat saivat tämän selville vuonna 2020. He tutkivat munapesuetta, jonka munissa oli yhä pikkuruisia poikasia kippurassa.",
    "Yhdessä pesässä oli 15 samankokoista poikasta tiiviisti vierekkäin. Se viittaa siihen, että poikaset pysyivät pesässä jonkin aikaa kuoriutumisen jälkeen. Luultavasti joku vanhemmista huolehti niistä.",
    "Se on Gobin autiomaan yleisimpiä dinosauruksia. Tutkimusmatkailijat keräsivät vain kolmessa vuodessa yli 100 luurankoa pikkuruisista poikasista aikuisiin."
   ]
  },
  "amargasaurus": {
   "found": "Guillermo Rougier löysi ainoan luurangon vuonna 1984 Argentiinassa. Tutkimusretkeä johti José Bonaparte. Leonardo Salgado ja José Bonaparte nimesivät sen vuonna 1991.",
   "facts": [
    "Tutkijat kuvasivat sen kallon tutkiakseen korvan sisällä olevaa tasapainoelintä. Kävi ilmi, että se piti päätään luultavasti alaspäin kohti maata. Siinä asennossa oli helppo napsia matalia kasveja.",
    "Sen nimi tulee La Amargasta, Argentiinan paikasta, josta se löytyi. Amarga tarkoittaa espanjaksi ”kitkerää”, joten sen nimi kuulostaa samalta kuin ”kitkerä lisko”.",
    "Vuonna 2019 tutkijat löysivät sen sukulaisen, Bajadasauruksen. Sen niskapiikit kaartuivat eteenpäin pään yläpuolelle. Tutkijat arvelevat, että tällaiset pitkät piikit ehkä auttoivat pelottelemaan lihansyöjiä pois."
   ]
  },
  "deinocheirus": {
   "found": "Puolalainen paleontologi Zofia Kielan-Jaworowska löysi sen jättimäiset kädet Mongoliasta, Gobin autiomaasta, vuonna 1965. Halszka Osmólska ja Ewa Roniewicz nimesivät sen vuonna 1970.",
   "facts": [
    "Sen kallo oli noin metrin pituinen, yhtä pitkä kuin kitara. Silti sillä ei ollut yhtään hammasta, vain leveä nokka.",
    "Varkaat kaivoivat erään luurangon kallon ja jalat maasta ja myivät ne ulkomaille. Tutkijat jäljittivät luut yksityiskokoelmaan Eurooppaan, ja ne palautettiin Mongoliaan vuonna 2014.",
    "Ensimmäisen fossiilin puremajäljet kertovat, että Tarbosaurus, Tyrannosauruksen lähisukulainen, oli jyrsinyt sitä. Ehkä siksi luurangon muut osat olivat hajallaan ja kateissa niin kauan."
   ]
  },
  "elasmosaurus": {
   "found": "Armeijan lääkäri Theophilus Turner löysi sen Fort Wallacen läheltä Kansasista Yhdysvalloista vuonna 1867. Edward Drinker Cope nimesi sen seuraavana vuonna, 1868.",
   "facts": [
    "Sen eläessä lämmin ja matala meri jakoi Pohjois-Amerikan kahtia. Siksi sen luut löytyivät Kansasista, joka on nykyään kaukana kaikista meristä.",
    "Tutkijat arvelevat, että sen kaltaiset joutsenliskot synnyttivät eläviä poikasia veteen. Erään sukulaisen fossiilin sisältä löytyi yksi iso poikanen. Se oli noin kolmanneksen emonsa pituinen.",
    "Sen pitkäkaulaiset sukulaiset nielivät kiviä. Yhden vatsassa oli noin 250 kiveä. Kivet luultavasti auttoivat jauhamaan ruokaa ja ehkä myös pitämään tasapainoa vedessä."
   ]
  },
  "australovenator": {
   "found": "Sen luut löytyivät vuonna 2006 karjatilalta Wintonin läheltä Queenslandista. Australian Age of Dinosaurs -ryhmä kaivoi ne esiin. Scott Hocknull ja hänen kollegansa nimesivät sen vuonna 2009.",
   "facts": [
    "Tutkija, joka antoi sille nimen, kutsui sitä aikansa gepardiksi. Se oli kevyt ja nopea, ja avoimessa maastossa se sai luultavasti kiinni useimmat muut eläimet.",
    "Kun tutkijat kuvasivat sen vuonna 2009, se oli täydellisin Australiasta koskaan löydetty lihansyöjädinosaurus.",
    "Tutkijat halusivat selvittää, miltä sen jalat näyttivät nahan kanssa. Siksi he kuvasivat emun jalan. Sitten he rakensivat luonnollisen kokoisen mallijalan ja painoivat sillä jälkiä pehmeään mutaan."
   ]
  },
  "muttaburrasaurus": {
   "found": "Karjatilallinen Doug Langdon löysi sen luut vuonna 1963 Thomson-joen rannalta Muttaburran läheltä Queenslandista. Tutkijat Alan Bartholomai ja Ralph Molnar nimesivät sen vuonna 1981.",
   "facts": [
    "Doug Langdon huomasi luut ratsastaessaan kokoamaan karjaansa. Hän sulloi muutaman palan satulalaukkuunsa ja kertoi vaimolleen löytäneensä hirviön.",
    "Queenslandin asukkaat valitsivat sen yleisöäänestyksessä. Se voitti yksitoista muuta fossiilia ja siitä tuli Queenslandin osavaltion virallinen fossiili.",
    "Se oli ensimmäinen australialainen dinosaurus, josta tehtiin valoksia ja koottiin pystyssä seisova luuranko ihmisten nähtäväksi."
   ]
  },
  "leaellynasaura": {
   "found": "Tom Rich ja Patricia Vickers-Rich löysivät sen ensimmäiset luut Dinosaur Covesta Victoriasta vuonna 1987 ja nimesivät sen vuonna 1989.",
   "facts": [
    "Sen fossiilit saatiin tunneleista, jotka räjäytettiin rantakallioon Victoriassa, koska kivi oli kovaa kuin betoni. Kaivauksilla auttoi noin 70 vapaaehtoista, jotka olivat 7–77-vuotiaita.",
    "Tutkijat arvelevat, että sen talvet saattoivat olla purevan kylmiä, pakkasen puolella. Joissain paikoissa maa on ehkä pysynyt jäässä ympäri vuoden.",
    "Eräässä luurangossa, jonka arvellaan kuuluvan sille, on hännässä yli 70 luuta. Sinun koko selkärangassasi on vain noin 33."
   ]
  },
  "cryolophosaurus": {
   "found": "Geologi David Elliotin ryhmä löysi sen luut korkealta Kirkpatrick-vuorelta Etelämantereelta kesällä 1990–1991. William Hammer kaivoi ne esiin ja nimesi sen vuonna 1994.",
   "facts": [
    "Sen leukojen vieressä oli pitkiä ohuita luita. Siksi tutkijat luulivat ensin, että se oli tukehtunut kasvinsyöjän kaulaan. Myöhemmin tutkimus osoitti, että ne olivat luultavasti sen omia kaulakylkiluita.",
    "Saadakseen sen irti ryhmä rikkoi kolmessa viikossa noin 2 300 kiloa kiveä. Se on enemmän kuin ison auton paino.",
    "Luuranko kuului luultavasti nuorelle, vielä kasvavalle eläimelle. Aikuiset ovat siis ehkä kasvaneet noin 8 metrin mittaisiksi."
   ]
  },
  "ichthyosaurus": {
   "found": "Sen nimeä, joka tarkoittaa kalaliskoa, käytti ensimmäisenä Charles König British Museumista vuonna 1818. Vuonna 1821 Henry De la Beche ja William Conybeare nimesivät sen tunnetuimman lajin.",
   "facts": [
    "Mary Anning huomasi kalaliskojen luurankojen sisällä outoja kiviä. Kun ne lyötiin rikki, sisältä löytyi kalan luita ja suomuja. Ne olivat kivettynyttä kakkaa. Osa oli mustia mustekalan kaltaisten eläinten musteesta, joita kalaliskot olivat syöneet.",
    "Ensimmäinen koskaan löydetty kokonainen kalaliskon luuranko oli Ichthyosaurus. Sen kaivoi luultavasti esiin Mary Anning. Pommi tuhosi sen toisessa maailmansodassa, mutta vanhoja jäljennöksiä löytyi myöhemmin Amerikasta ja Saksasta.",
    "Vuonna 2015 tutkijat nimesivät uuden Ichthyosaurus-lajin Mary Anningin mukaan. Sen fossiili oli ollut Doncasterin museossa yli 30 vuotta, ennen kuin kukaan huomasi sen olevan uusi laji."
   ]
  },
  "liopleurodon": {
   "found": "Ranskalainen tutkija Henri-Émile Sauvage nimesi sen vuonna 1873 yhden ainoan hampaan perusteella. Hammas löytyi Boulogne-sur-Merin läheltä Ranskasta. Myöhemmin lähes kokonaisia luurankoja kaivettiin savikuopista Peterboroughin läheltä Englannista.",
   "facts": [
    "Sen nimi tarkoittaa sileäkylkisiä hampaita. Ensimmäisen tutkitun hampaan terävä osa oli noin 7 senttimetriä pitkä, eikä juuri ollut edes mukana.",
    "Peterboroughin läheltä löytyneen pliosauruksen vatsassa oli mustekalan kaltaisten eläinten pikkuruisia koukkuja, kalan luita ja nieltyjä kiviä. Se oli ehkä Liopleurodon.",
    "Se ui neljällä isolla evällä. Tutkijat arvelevat, että niiden avulla se pystyi kiihdyttämään äkkiä. Niin se luultavasti pystyi syöksymään saaliin kimppuun väijyksistä."
   ]
  },
  "kronosaurus": {
   "found": "Ensimmäinen fossiili, leuan palanen, löytyi Hughendenin läheltä Queenslandista vuonna 1899. Se lähetettiin Queenslandin museoon. Heber Longman nimesi sen vuonna 1924.",
   "facts": [
    "Sen suurimmat hampaat olivat kärjestä juureen mitattuna noin 30 senttimetriä pitkiä, yhtä pitkiä kuin koulun viivoitin.",
    "Tutkijat arvelevat, että sen purema oli noin kaksi kertaa niin voimakas kuin ison suistokrokotiilin purema.",
    "Kuuluisa Kronosaurus-luuranko Harvardin yliopistossa Amerikassa koottiin noin 3 metriä liian pitkäksi, ja siihen käytettiin paljon kipsiä. Tutkijat antoivat sille lempinimen Plasterosaurus, eli kipsisaurus."
   ]
  },
  "archelon": {
   "found": "George Wieland löysi ensimmäisen luurangon Cheyenne-joen läheltä Etelä-Dakotasta Yhdysvalloista vuonna 1895 ja nimesi sen seuraavana vuonna.",
   "facts": [
    "Suurin yksilö oli toisen etuevän kärjestä toisen kärkeen noin 4 metriä leveä. Se on melkein yhtä paljon kuin auton pituus.",
    "Ensimmäisestä koskaan löydetystä luurangosta puuttuu oikea takaevä. Tutkijat arvelevat, että se purtiin irti kilpikonnan vielä eläessä. Kilpikonna on ehkä elänyt sen jälkeen vielä vuosia.",
    "Suurin koskaan löydetty Archelon sai lempinimen Brigitta. Se kaivettiin esiin Etelä-Dakotassa vuonna 1992. Nykyään se on näytteillä luonnontieteellisessä museossa Wienissä, Itävallassa."
   ]
  },
  "brontosaurus": {
   "found": "Othniel Marsh nimesi sen vuonna 1879 valtavan luurangon perusteella. Luurangon kaivoivat esiin Como Bluffista Wyomingista hänen keräilijänsä, joita johti William Reed.",
   "facts": [
    "Viisikymmentä vuotta, vuodesta 1931 vuoteen 1981, Yalen yliopiston kuuluisalla luurangolla oli väärä pää. Se oli lyhyt ja kulmikas kallo, joka kuului toisenlaiselle dinosaurukselle.",
    "Vuonna 1989 Brontosaurus pääsi Yhdysvaltain postimerkkiin, ja ihmiset valittivat, ettei se ollut oikea nimi. Vuodesta 2015 lähtien se on taas oikea nimi.",
    "Se nieli lehdet pureskelematta. Sen valtava vatsa hoiti työn ja hajotti kasveja hitaasti monen päivän ajan."
   ]
  },
  "giganotosaurus": {
   "found": "Rubén Carolini löysi sen luut Villa El Chocónin läheltä Argentiinasta vuonna 1993. Rodolfo Coria ja Leonardo Salgado nimesivät sen vuonna 1995.",
   "facts": [
    "Sen hampaat olivat litteitä kuin veitsen terät, ja niissä oli sahalaitaiset reunat lihan leikkaamiseen. Tyrannosauruksen hampaat taas olivat paksuja ja murskasivat luita.",
    "Sen kallo oli suunnilleen yhtä pitkä kuin aikuinen ihminen. Sen aivot olivat kuitenkin pienet, ja tutkijat arvelevat niiden olleen vähän banaanin muotoiset.",
    "Samaan aikaan eli jättimäisiä pitkäkaulaisia dinosauruksia. Jotkut tutkijat arvelevat, että sen kaltaiset lihansyöjät saattoivat metsästää niiden poikasia tai käydä yhdessä isomman saaliin kimppuun."
   ]
  },
  "coelophysis": {
   "found": "Edward Drinker Cope nimesi sen vuonna 1889 luista, jotka David Baldwin oli löytänyt New Mexicosta vuonna 1881. Vuonna 1947 Edwin Colbertin ryhmä löysi Ghost Ranchilta suuren luukerroksen.",
   "facts": [
    "Joidenkin luurankojen sisältä löytyi pieniä luita, ja tutkijat luulivat, että se söi omia poikasiaan. Myöhempi tutkimus osoitti, että luut kuuluivatkin pienille krokotiilin kaltaisille matelijoille.",
    "Se on New Mexicon osavaltion fossiili. Se valittiin vuonna 1981.",
    "Sillä oli pitkä ja kapea pää täynnä pieniä sahalaitaisia hampaita sekä isot silmät. Se metsästi luultavasti pieniä eläimiä, kuten liskoja."
   ]
  },
  "plateosaurus": {
   "found": "Johann Engelhardt löysi sen ensimmäiset luut Nürnbergin läheltä Saksasta vuonna 1834, ja Hermann von Meyer nimesi sen vuonna 1837.",
   "facts": [
    "Se ei pystynyt kääntämään kämmeniään alaspäin niin kuin sinä. Sen kämmenet osoittivat aina sisäänpäin, ihan kuin se olisi juuri taputtamassa.",
    "Luiden kasvurenkaat kertovat, että aikuiset saattoivat olla hyvin erikokoisia. Jotkut lakkasivat kasvamasta noin viisimetrisinä, toiset kasvoivat kymmenmetrisiksi.",
    "Sveitsin Frickissä niitä on kaivettu savikuopasta niin paljon, että pieni kaupunki avasi oman dinosaurusmuseon."
   ]
  },
  "megalosaurus": {
   "found": "William Buckland tutki luita, jotka olivat peräisin louhokselta Stonesfieldistä Oxfordin läheltä. Hän nimesi Megalosauruksen vuonna 1824.",
   "facts": [
    "Vuonna 1677 eräässä kirjassa oli piirros luunpalasta, joka oli luultavasti Megalosauruksen. Piirtäjä luuli sen kuuluneen jättiläisihmiselle.",
    "Vuonna 1842 Richard Owen keksi sanan dinosaurus, joka tarkoittaa hirmuliskoa. Megalosaurus oli yksi kolmesta ensimmäisestä eläimestä, joista hän sitä käytti.",
    "Pitkään lähes kaikkia ison lihansyöjädinosauruksen luita kutsuttiin Megalosaurukseksi. Nykyään tutkijat käyttävät nimeä vain Oxfordin seudun fossiileista."
   ]
  },
  "carcharodontosaurus": {
   "found": "Sen ensimmäiset hampaat löytyivät Algeriasta, ja ne kuvattiin vuonna 1925. Vuonna 1931 saksalainen tutkija Ernst Stromer nimesi sen Egyptistä löytyneen luurangon perusteella.",
   "facts": [
    "Vuonna 1995 Paul Serenon ryhmä löysi Marokosta valtavan kallon. Se oli noin 1,6 metriä pitkä, pidempi kuin moni aikuinen.",
    "Sen lähisukulainen oli eteläamerikkalainen Giganotosaurus. Niiden suku jakautui luultavasti kahtia, kun Afrikka ja Etelä-Amerikka ajautuivat erilleen.",
    "Samassa paikassa ja samaan aikaan elivät myös Spinosaurus ja ainakin yksi muu iso lihansyöjä. Tutkijat ihmettelevät yhä, miten niin monta jättiläismetsästäjää löysi tarpeeksi syötävää."
   ]
  },
  "archaeopteryx": {
   "found": "Saksasta Solnhofenin läheltä löytyi vuonna 1861 yksi ainoa fossiilinen sulka ja pian sen jälkeen kokonainen luuranko. Hermann von Meyer antoi sille nimen samana vuonna.",
   "facts": [
    "Tutkijat tutkivat fossiilisen sulan pieniä värijäämiä. He arvelevat, että ainakin osa sulasta oli musta kuin varikselta.",
    "Se pystyi luultavasti räpyttelemään siipiään ja lentämään lyhyitä matkoja, vaikkei yhtä hyvin kuin nykyiset linnut.",
    "Yksi luuranko oli Alankomaissa museossa yli sata vuotta lentoliskoksi merkittynä. Vuonna 1970 eräs tutkija huomasi siinä sulat."
   ]
  },
  "quetzalcoatlus": {
   "found": "Opiskelija Douglas Lawson löysi sen ensimmäiset siipiluut Big Bendistä Texasista vuonna 1971 ja nimesi sen vuonna 1975.",
   "facts": [
    "Se on nimetty Quetzalcoatlin mukaan. Quetzalcoatl oli Meksikon atsteekkien sulkapeitteinen käärmejumala.",
    "Lähtiessään lentoon se luultavasti kyyristyi ja ponnisti ilmaan vahvoilla käsillään, vähän kuin seiväshyppääjä.",
    "Sen luut olivat onttoja ja täynnä ilmaa. Vaikka se oli yhtä pitkä kuin kirahvi, se painoi vain suunnilleen yhtä paljon kuin kaksi tai kolme aikuista."
   ]
  },
  "edmontosaurus": {
   "found": "George Sternbergin ryhmä kaivoi ensimmäisen luurangon esiin Red Deer -joen rannalta Albertasta Kanadasta vuonna 1912. Lawrence Lambe nimesi sen vuonna 1917 Edmontonin kaupungin mukaan.",
   "facts": [
    "Yhdessä Edmontosauruksen häntäluussa on Tyrannosauruksen parantunut puremajälki. Sitä purtiin, mutta se pääsi karkuun ja eli niin kauan, että haava ehti parantua.",
    "Vuonna 1908 fossiilinmetsästäjien Sternbergin perhe löysi Wyomingista Edmontosaurus-muumion. Se oli kippuralla, ja nahka oli kietoutunut luiden ympärille. Se on yhä näytteillä museossa New Yorkissa.",
    "Edmontosauruksen luista on löytynyt valtavia kerroksia, joissa on monia yhdessä kuolleita eläimiä. Se viittaa siihen, että ne elivät isoissa laumoissa, kuten gnuut nykyään."
   ]
  },
  "albertosaurus": {
   "found": "Geologi Joseph Burr Tyrrell löysi ensimmäisen kallon Red Deer -joen rannalta Albertasta Kanadasta vuonna 1884, ja Henry Fairfield Osborn nimesi sen vuonna 1905.",
   "facts": [
    "Luiden kasvurenkaat kertovat, että se kasvoi nopeimmin teini-iässä. Silloin sen paino kasvoi yli sata kiloa vuodessa.",
    "Vanhin tutkijoiden löytämä Albertosaurus oli kuollessaan noin 28-vuotias. Se on hyvin vanha isolle lihansyöjädinosaurukselle.",
    "Sen hampaat olivat banaanin muotoisia ja sahalaitaisia, ja niillä se leikkasi lihaa. Kun hammas katkesi tai putosi, tilalle kasvoi uusi."
   ]
  },
  "glacialisaurus": {
   "found": "William Hammerin ryhmä löysi sen luut korkealta Kirkpatrick-vuorelta Etelämantereelta kesällä 1990–1991, läheltä Cryolophosauruksen luita. Nathan Smith ja Diego Pol nimesivät sen vuonna 2007.",
   "facts": [
    "Siitä on löydetty vain muutama luu: osa reisiluuta, nilkka ja jalkaterä. Tutkijat päättelivät, millainen se oli, vertaamalla niitä sen serkkuihin, kuten Plateosaurukseen.",
    "Sen toinen nimi, hammeri, on William Hammerin mukaan. Hän on tutkija, joka kaivoi esiin sekä sen että Cryolophosauruksen.",
    "Se eli samaan aikaan kuin ensimmäiset oikeat jättimäiset pitkäkaulat. Sen kaltaiset varhaiset serkut eivät siis kadonneet, kun jättiläiset tulivat, vaan elivät niiden rinnalla pitkään."
   ]
  },
  "pachyrhinosaurus": {
   "found": "Charles Sternberg nimesi sen vuonna 1950 kalloista, jotka oli löydetty eteläisestä Albertasta Kanadasta. Sen kallossa ei ollut sarvea nenässä, vain paksu ja karhea luinen kyhmy.",
   "facts": [
    "Albertan Pipestone Creekissä oli yhdessä tuhansia nuorten ja vanhojen eläinten luita. Koko lauma on ehkä hukkunut ylittäessään tulvivaa jokea.",
    "Yksi sen lajeista eli Alaskan pohjoisrinteellä, lähellä Pohjoista jäämerta. Siellä sen piti selvitä kuukausien talvipimeästä.",
    "Sen kauluksen pienet sarvet olivat jokaisella eläimellä vähän erilaiset, joten ne ehkä tunnistivat toisensa kauluksista."
   ]
  },
  "ugrunaaluk": {
   "found": "Sen luut ovat Liscombin luukerroksesta Colville-joen varrelta Pohjois-Alaskasta. Siellä geologi Robert Liscomb löysi Alaskan ensimmäiset dinosaurusten luut vuonna 1961. Hirotsugu Mori ja hänen ryhmänsä nimesivät sen vuonna 2015.",
   "facts": [
    "Robert Liscomb luuli löytämiensä luiden kuuluneen jääkauden eläimille. Vasta noin kaksikymmentä vuotta myöhemmin huomattiin, että ne olivat dinosaurusten luita.",
    "Jotkut tutkijat ajattelevat, että se oli oikeastaan Edmontosauruksen laji. Edmontosaurus oli kanadalainen sorsanokkadinosaurus, joten sen nimestä kiistellään yhä.",
    "Useimmat luut kuuluivat noin kolmen metrin mittaisille nuorille eläimille. Kokonainen ryhmä on ehkä kuollut yhdessä, ehkä tulvassa."
   ]
  },
  "nanuqsaurus": {
   "found": "Sen kallon paloja löydettiin vuonna 2006 Kikak-Tegoseakin louhokselta Pohjois-Alaskasta, kun tutkijat kaivoivat esiin Pachyrhinosauruksia. Anthony Fiorillo ja Ronald Tykoski nimesivät sen vuonna 2014.",
   "facts": [
    "Aluksi tutkijat luulivat sitä pieneksi tyrannosauriksi, koska niin kaukana pohjoisessa oli vähän ruokaa. Myöhemmin löydetyt hampaat ja leuat näyttävät, että se oli ehkä luultua isompi.",
    "Sen toinen nimi, hoglundi, on Forrest Hoglundin mukaan. Hän auttoi maksamaan museon, jossa sen luita säilytetään.",
    "Sen kallossa oli lyhyt kuono ja päällä luinen harjanne. Ne ovat pohjoisimpia koskaan löydettyjä tyrannosaurusten luita."
   ]
  },
  "utahraptor": {
   "found": "Carl Limoni löysi valtavan jalan kynnen Itä-Utahista lokakuussa 1991, ja ryhmä kaivoi lisää sen luita Gastonin louhokselta. James Kirkland, Robert Gaston ja Donald Burge nimesivät sen vuonna 1993.",
   "facts": [
    "Vuonna 2001 eräs geologian opiskelija huomasi luun, joka pisti esiin rinteestä Utahissa. Kalliosta paljastui yhdeksän tonnin kivilohkare, jossa oli ainakin kuusi Utahraptoria aikuisista pikkuruiseen poikaseen. Ne ovat ehkä jääneet yhdessä juoksuhiekkaan.",
    "Sen toinen nimi, ostrommaysi, on John Ostromin ja Chris Maysin mukaan. Ostrom osoitti, että sen serkut olivat nopeita ja vilkkaita eläimiä ja sukua linnuille. Maysin yritys rakensi liikkuvia robottidinosauruksia ja auttoi maksamaan kaivaukset.",
    "Vuonna 2018 siitä tuli Utahin osavaltion virallinen dinosaurus. Idea tuli kymmenvuotiaalta pojalta, joka pyysi osavaltion päättäjiä valitsemaan sen."
   ]
  },
  "gastonia": {
   "found": "Sen luita kaivettiin vuodesta 1989 alkaen Gastonin louhokselta Itä-Utahista, josta löytyi myös Utahraptor. James Kirkland nimesi sen vuonna 1998 Robert Gastonin mukaan. Gaston oli taiteilija, jonka mukaan louhoskin on nimetty.",
   "facts": [
    "Sen pää osoitti alaspäin, ja kallon takaosa oli erityisen vahva. James Kirkland arveli, että urokset ehkä puskivat toisiaan päillään kuin pässit näyttääkseen, kuka oli vahvin.",
    "Se on yksi Itä-Utahin kivien yleisimmistä dinosauruksista, ja sen kalloja on löydetty ainakin kymmenen. Tutkijat tuntevat sen paremmin kuin melkein minkään muun varhaisen panssaridinosauruksen.",
    "Vuonna 1999 Lorrie McWhinney löysi kerroksen, joka oli täynnä kokonaisen ryhmän luita. Ne ovat ehkä kuolleet yhdessä kuivuuteen tai tulvaan. Vuonna 2016 toinen Gastonia-laji nimettiin hänen mukaansa."
   ]
  },
  "planicoxa": {
   "found": "Denverin museon vapaaehtoiset löysivät sen luut Itä-Utahista keväällä 1998. Paikkaa he kutsuivat Tonyn luukerrokseksi yhden ryhmäläisen, Tony DiCrocen, mukaan. DiCroce ja Kenneth Carpenter nimesivät sen vuonna 2001.",
   "facts": [
    "Sen toinen nimi, venenica, tarkoittaa myrkkyä. Se ei johdu siitä, että se olisi ollut myrkyllinen, vaan sen luut ovat Poison Strip -nimisestä kivikerroksesta. Nimi tarkoittaa myrkkykaistaletta.",
    "Samasta luukerroksesta löytyi myös pitkäkaulainen dinosaurus, aikuinen ja nuori yhdessä. Se sai nimen Venenosaurus, ja sen toinen nimi, dicrocei, on myös Tony DiCrocen mukaan.",
    "Etelä-Dakotasta sata vuotta sitten löydettyjä luita kutsuttiin ensin Camptosaurukseksi ja vuonna 2008 toiseksi Planicoxa-lajiksi. Vuonna 2011 ne saivat oman nimen, Osmakasaurus. Dinosauruksen nimeäminen vain muutaman luun perusteella on vaikeaa."
   ]
  },
  "sanajeh": {
   "found": "Dhananjay Mohabey Intian geologisesta tutkimuslaitoksesta löysi fossiilin Dholi Dungrin kylän läheltä Gujaratista vuonna 1984. Kesti vuosia huomata, että kivessä oli myös käärme. Jeffrey Wilson huomasi sen selkärangan vuonna 2001, ja hän, Mohabey ja heidän ryhmänsä nimesivät sen vuonna 2010.",
   "facts": [
    "Sen nimi tulee vanhan sanskritin kielen sanoista, jotka tarkoittavat muinaista kitaa. Sen suu ei auennut yhtä leveäksi kuin pytonin, joten pyöreät, noin 16 senttiä leveät munat olivat liian isoja nieltäviksi kokonaisina.",
    "Poikanen oli titanosaurus, noin puoli metriä pitkä. Aikuiset titanosaurukset olivat suurimpia eläimiä, jotka ovat koskaan kävelleet maan päällä, mutta juuri munasta kuoriutuneina ne olivat käärmeelle helppo saalis.",
    "Pian sen jälkeen jättimäiset tulivuoret, Dekkanin trapit, peittivät tämän osan Intiasta laavalla. Nykyään vanhan laavan kerrokset ovat aivan sen kiven päällä, josta käärme löytyi."
   ]
  },
  "najash": {
   "found": "Sen ensimmäiset luut löytyivät Río Negrosta Argentiinasta vuonna 2003, ja Sebastián Apesteguía ja Hussam Zaher nimesivät sen vuonna 2006. Vuonna 2013 Fernando Garberoglio löysi La Buitrerasta hienosti säilyneen kallon, ja vuonna 2019 hänen ryhmänsä kuvasi sen ja useita muita.",
   "facts": [
    "Sen nimi tulee sanasta nahash, joka on hepreaa ja tarkoittaa käärmettä. Se on myös Raamatun Aatamin ja Eevan tarinan käärmeen nimi. Tarinassa käärme joutuu ryömimään vatsallaan, joten sillä on täytynyt olla jalat ennen sitä. Sen toinen nimi, rionegrina, tulee Río Negrosta.",
    "Sen takajalat olivat pienet mutta vahvat, ja sen lantio oli kiinni selkärangassa, niin kuin liskolla. Monilla käärmeillä oli tällaiset pienet takajalat miljoonien vuosien ajan, ja pytoneilla ja boilla on yhä pienet kynnet siinä, missä niiden jalat ennen olivat.",
    "Sillä oli vielä poskiluu, joka nykyisiltä käärmeiltä puuttuu, ja iso suu täynnä teräviä hampaita. Tutkijat luulivat ennen, että ensimmäiset käärmeet olivat pieniä kaivajia, mutta Najashin perusteella ne olivat pikemminkin isosuisia saalistajia."
   ]
  },
  "baryonyx": {
   "found": "William Walker, joka etsi fossiileja vapaa-ajallaan, löysi jättimäisen kynnen savikuopasta Ockleyn läheltä Surreysta Englannista tammikuussa 1983. Luonnontieteellisen museon tutkijat kaivoivat loput luurangosta esiin samana kesänä, ja Alan Charig ja Angela Milner nimesivät sen vuonna 1986.",
   "facts": [
    "Sen toinen nimi, walkeri, on William Walkerin, sen löytäjän, mukaan. Sanomalehdet antoivat sille lempinimen Claws eli Kynnet, haielokuva Tappajahain englanninkielisen nimen Jaws mukaan.",
    "Sen luuranko on täydellisin koskaan löydetty spinosauruksen sukulaisen luuranko, noin kaksi kolmasosaa koko eläimestä, eikä se ehkä ollut edes täysikasvuinen. Sen kopio on esillä Luonnontieteellisessä museossa Lontoossa.",
    "Se oli Spinosauruksen serkku. Se luultavasti kahlasi mataliin jokiin tai kyyristeli rannalla pyydystämässä kaloja ja ehkä koukkasi niitä vedestä isoilla kynsillään."
   ]
  },
  "maiasaura": {
   "found": "Vuonna 1978 fossiilinetsijät pienestä Bynumin kaupungista Montanasta näyttivät Jack Hornerille ja Bob Makelalle pikkuruisia dinosauruksenpoikasen luita, jotka he olivat löytäneet Choteaun läheltä. Horner ja Makela kaivoivat sieltä esiin pesiä mäeltä, jota kutsutaan nykyään Munavuoreksi, ja nimesivät sen vuonna 1979.",
   "facts": [
    "Jokaisessa pesässä oli noin kolmekymmentä–neljäkymmentä munaa, ja jokainen oli suunnilleen strutsinmunan kokoinen. Poikaset kasvoivat nopeasti, noin 40 sentistä noin puolentoista metrin mittaisiksi ensimmäisen vuotensa aikana.",
    "Yhdessä valtavassa luukerroksessa Montanassa on tuhansien yksilöiden luita, joten tutkijat arvelevat, että ne elivät jättimäisissä laumoissa, ehkä jopa kymmenentuhannen eläimen laumoissa.",
    "Vuonna 1985 astronautti Loren Acton vei palan sen luuta ja munankuorta avaruuteen, joten se oli ensimmäinen dinosaurus avaruudessa. Seuraava, vuonna 1998, oli Coelophysiksen kallo."
   ]
  },
  "mamenchisaurus": {
   "found": "Tienrakentajat löysivät ensimmäisen luurangon vuonna 1952, kun he rakensivat maantietä Sichuanissa Kiinassa. Fossiilitutkija Yang Zhongjian, joka tunnetaan myös nimellä C. C. Young, nimesi sen vuonna 1954.",
   "facts": [
    "Se piti nimetä löytöpaikkansa mukaan. Paikan nimi oli Mamingxi, joka tarkoittaa hirnuvan hevosen puroa. Mutta Yang Zhongjianin murre muutti sen muotoon Mamenxi, hevosportin puro, ja virhe jäi pysyväksi.",
    "Sen kaulan kummallakin puolella kulki ohuita luusauvoja, joista jotkin olivat noin neljän metrin mittaisia, yhtä pitkiä kuin auto. Ne ovat ehkä auttaneet pitämään raskaan kaulan jäykkänä.",
    "Yhden Mamenchisauruksen tai sen läheisen serkun luurangon hännän päässä on pieni nuija, joka on tehty yhteen kasvaneista luista. Tutkijat arvelevat, että se oli liian heikko ollakseen kunnon ase."
   ]
  },
  "deinonychus": {
   "found": "Barnum Brown löysi sen ensimmäiset luut Montanasta vuonna 1931, mutta ei koskaan nimennyt sitä. Elokuussa 1964 John Ostrom ja Grant Meyer Yalen Peabody-museosta löysivät lisää Bridgerin läheltä Montanasta, ja Ostrom nimesi sen vuonna 1969.",
   "facts": [
    "Tutkiessaan sitä John Ostrom huomasi, miten paljon se muistutti lintua, ja hän herätti uudelleen ajatuksen, että linnut polveutuvat dinosauruksista. Se sai tutkijat myös ajattelemaan dinosauruksia nopeina ja vilkkaina eikä hitaina ja liskomaisina.",
    "Sen hampaita ja luita löytyy usein yhdessä Tenontosaurus-nimisen ison kasvinsyöjän kanssa, joten se luultavasti saalisti niitä tai söi niiden raatoja. Jotkut tutkijat arvelevat, että useat Deinonychukset metsästivät yhdessä, mutta siitä kiistellään yhä.",
    "Yhden sen luurangon vierestä löytyi munankuoren paloja, luultavasti sen omista munista. Ne olivat ensimmäiset raptorin munat, jotka on koskaan löydetty. Vuonna 2018 tehdyn tutkimuksen mukaan sen munat ovat ehkä olleet sinisiä."
   ]
  },
  "patagotitan": {
   "found": "Vuonna 2010 maatilan työntekijä löysi jättimäisen reisiluun pään Mayon perheen La Flecha -tilalta Chubutista Argentiinasta. Egidio Feruglio -museon tutkijat kaivoivat siellä vuosina 2012–2015, ja José Luis Carballido ja hänen ryhmänsä nimesivät sen vuonna 2017.",
   "facts": [
    "Sen toinen nimi, mayorum, kiittää Mayon perhettä, joka omisti tilan ja antoi tutkijoiden kaivaa siellä.",
    "Sen luurangon kopioita on museoissa New Yorkissa ja Chicagossa. Chicagossa sitä kutsutaan nimellä Máximo. Siellä se on 37 metriä pitkä, ja sen pää on noin 8,5 metrin korkeudessa, melkein kolmen kerroksen korkeudella.",
    "Tutkijat arvelivat ensin, että se painoi noin 70 tonnia, mutta uudempien tutkimusten mukaan pikemminkin 50–60. Dinosauruksen punnitseminen luiden perusteella on vaikeaa, ja tutkijat kiistelevät yhä siitä, mikä titanosaurus oli kaikkein suurin."
   ]
  },
  "herrerasaurus": {
   "found": "Vuohipaimen Victorino Herrera huomasi sen luut kivissä San Juanin lähellä Argentiinassa noin vuonna 1959, ja Osvaldo Reig nimesi sen hänen mukaansa vuonna 1963. Vuonna 1988 Paul Serenon ryhmä löysi melkein kokonaisen kallon ja luurangon.",
   "facts": [
    "Tutkijat eivät vuosiin päässeet yksimielisyyteen, oliko se dinosaurus vai vain läheinen serkku, koska siitä tunnettiin vain osia. Vuonna 1988 löydetty kallo vakuutti useimmat heistä siitä, että se oli yksi aivan ensimmäisistä dinosauruksista.",
    "Se eli Eoraptorin, paljon pienemmän varhaisen dinosauruksen, naapurina ja saalisti luultavasti eläimiä kuten rynkosauruksia, nokallisia, suunnilleen sian kokoisia matelijoita.",
    "Se ei ollut ylin saalistaja: siellä eli myös jättimäisiä krokotiilien serkkuja, rauisukideja, ja yhden Herrerasauruksen kallon hampaanjäljistä päätellen joku niistä on ehkä purrut sitä."
   ]
  },
  "kentrosaurus": {
   "found": "Saksalainen tutkimusretkikunta löysi sen ensimmäiset luut Tendagurusta Tansaniasta vuonna 1909, yhdessä jättimäisten pitkäkaulaisten dinosaurusten luiden kanssa. Edwin Hennig nimesi sen vuonna 1915.",
   "facts": [
    "Retkikunnat kaivoivat esiin yli 1 200 sen luuta noin viidestäkymmenestä eläimestä, mutta yhtään kokonaista luurankoa ei koskaan löytynyt.",
    "Monet sen luista katosivat toisessa maailmansodassa. Vuosia myöhemmin osa luista, joiden tutkijat luulivat kadonneen lopullisesti, löytyi uudelleen kaapista Berliinin museon kellarista.",
    "Sen nimi aiheutti sekaannusta, koska sarvidinosauruksella nimeltä Centrosaurus oli jo melkein samalta kuulostava nimi. Sille ehdotettiin kahta uutta nimeä, mutta sääntöjen mukaan ensimmäinen nimi jää voimaan, joten se on yhä Kentrosaurus."
   ]
  },
  "rajasaurus": {
   "found": "Geologit Dhananjay Mohabey, joka löysi myös Sanajehin, ja G. N. Dwivedi löysivät dinosauruskiviä Rahiolin läheltä Gujaratista vuonna 1981. Suresh Srivastava kaivoi sen luut sieltä esiin vuosina 1982–1984, ja Jeffrey Wilson, Paul Sereno, Srivastava ja heidän ryhmänsä nimesivät sen vuonna 2003.",
   "facts": [
    "Sen nimi tarkoittaa kuningasliskoa sanskritiksi, joka on Intian vanha kieli. Sen toinen nimi, narmadensis, tulee läheisestä Narmada-joesta.",
    "Se oli ensimmäinen iso lihaa syövä dinosaurus Intiasta, josta löytyi näin paljon luurankoa, aivokopasta häntään asti.",
    "Sen lähin serkku, Majungasaurus, eli Madagaskarilla. Intia ja Madagaskar olivat joskus olleet kiinni toisissaan, mikä auttaa ymmärtämään, miksi niiden dinosaurukset olivat niin samanlaisia."
   ]
  },
  "borealopelta": {
   "found": "Shawn Funk, kaivinkoneen kuljettaja öljyhiekkakaivoksella Fort McMurrayn lähellä Albertassa Kanadassa, osui siihen kaivinkoneellaan 21. maaliskuuta 2011. Mark Mitchell Royal Tyrrell -museosta irrotti sitä kivestä noin kuusi vuotta, ja Caleb Brown ja hänen ryhmänsä nimesivät sen vuonna 2017.",
   "facts": [
    "Sen toinen nimi, markmitchelli, kiittää Mark Mitchelliä kaikista niistä vuosista huolellista työtä, yli 7 000 tunnista. Hän kuuli kunnianosoituksesta vasta, kun työ oli valmis.",
    "Se löytyi kivestä, joka oli muodostunut meren pohjalle. Tutkijat arvelevat, että tulva huuhtoi sen merelle, jossa se upposi ja laskeutui selälleen, ja muta peitti sen nopeasti. Siksi se säilyi niin hyvin.",
    "Sen viimeisessä ateriassa oli hiilenpaloja, joten se söi luultavasti paikassa, joka kasvoi uudelleen metsäpalon jälkeen. Saniaiset olivat vasta puolikasvuisia, mikä viittaa siihen, että se kuoli alku- tai keskikesällä."
   ]
  },
  "sinosauropteryx": {
   "found": "Li Yumin, maanviljelijä, joka etsi fossiileja vapaa-ajallaan, löysi sen Liaoningista Koillis-Kiinasta elokuussa 1996. Hän halkaisi kiven kahtia ja myi puolikkaat kahdelle eri museolle, ja Ji Qiang ja Ji Shu'an nimesivät sen samana vuonna.",
   "facts": [
    "Sen toinen nimi, prima, tarkoittaa ensimmäistä, koska se oli ensimmäinen dinosaurus lintujen lisäksi, jolta löytyi höyheniä. Se auttoi osoittamaan, että linnut ovat eläviä dinosauruksia.",
    "Yhden sen fossiilin mahassa on yhä lisko, sen viimeinen ateria. Toisen ruumiin sisällä on munia, joten se oli emo, joka oli juuri munimassa.",
    "Sen raidat ja tummempi selkä ovat sellaista suojaväritystä, jota saaliseläimet käyttävät. Joten tämänkin pienen saalistajan piti luultavasti piiloutua isommilta saalistajilta."
   ]
  },
  "corythosaurus": {
   "found": "Barnum Brown löysi ensimmäisen luurangon Red Deer -joen rannalta Albertasta Kanadasta vuonna 1911 ja nimesi sen vuonna 1914.",
   "facts": [
    "Sen toinen nimi, casuarius, tulee kasuaarista. Se on nykyään elävä iso lintu, jonka päässä on myös harja.",
    "Vuonna 1916, ensimmäisen maailmansodan aikana, kaksi parasta Corythosaurus-luurankoa oli Mount Temple -nimisellä laivalla matkalla Lontoossa olevaan museoon. Saksalainen sotalaiva upotti sen, ja fossiilit ovat yhä Atlantin valtameren pohjassa, yli neljän kilometrin syvyydessä.",
    "Yhdestä fossiilista näkee sen viimeisen aterian: havunneulasia, siemeniä, oksia ja hedelmiä. Nuorilla oli paljon pienemmät harjat, joten tutkijat luulivat niitä ennen eri dinosauruslajeiksi."
   ]
  },
  "psittacosaurus": {
   "found": "Wong-niminen kuljettaja löysi ensimmäisen luurangon amerikkalaisen luonnontieteellisen museon retkikunnalla Mongoliassa vuonna 1922. Henry Fairfield Osborn nimesi sen vuonna 1923.",
   "facts": [
    "Psittacosauruksia on useampaa lajia kuin mitään muuta dinosaurusta, noin kymmenen, ja niiden luurankoja on löydetty satoja eri puolilta Aasiaa.",
    "Yhdessä fossiilissa iho säilyi niin hyvin, että tutkijat pystyivät selvittämään sen värit: päältä tummempi ja alta vaaleampi. Sen hännästä törrötti myös pitkiä harjaksia.",
    "Yhdessä fossiilissa on aikuinen ja 34 poikasta. Jotkut tutkijat arvelevat, että aikuinen oli vanhempi, joka huolehti poikasista, mutta toiset huomasivat, että aikuisen kallo oli liimattu paikalleen, ja asiasta kiistellään yhä."
   ]
  },
  "zuul": {
   "found": "Vuonna 2014 kaivinkone raivasi kiveä Havren lähellä Montanassa Gorgosauruksen luurangon kaivauksia varten ja osui yllättäen sen häntänuijaan. Royal Ontario -museo osti sen, ja Victoria Arbour ja David Evans nimesivät sen vuonna 2017.",
   "facts": [
    "Kaivajat antoivat sille lempinimen Sherman. Sen ympärillä oleva kivi oli niin raskasta, että suurin nostettu kivilohkare painoi noin 15 tonnia.",
    "Sen häntänuija ja jäykkä hännänvarsi sen takana ovat yhteensä noin 2,1 metriä pitkiä, pisimmät minkään Pohjois-Amerikan panssaridinosauruksen.",
    "Jotkin sen kylkien piikeistä olivat katkenneet ja parantuneet sen eläessä. Tutkijat arvelevat, että toinen Zuul löi sitä häntänuijallaan, joten ne luultavasti tappelivat myös keskenään, ehkä elinpaikoista tai puolisoista."
   ]
  }
 },
 "then": {
  "tyrannosaurus": "lämmin, soinen rannikkotasanko suuren sisämeren rannalla",
  "triceratops": "lämpimiä metsiä ja jokia, jotka virtasivat sisämereen",
  "stegosaurus": "laaja jokien halkoma tasanko, jossa oli saniaisniittyjä ja havumetsiä",
  "velociraptor": "hiekka-aavikko dyyneineen, aivan kuten Gobin autiomaa nykyään",
  "brachiosaurus": "leveä jokitasanko, jolla kasvoi korkeita havupuita",
  "ankylosaurus": "lämpimiä metsiä sisämeren rannalla",
  "spinosaurus": "valtava jokisuisto täynnä jättiläiskaloja",
  "parasaurolophus": "reheviä soita sisämeren rannalla",
  "allosaurus": "jokitasanko, jolla oli sadekausi ja kuiva kausi",
  "pachycephalosaurus": "lämpimiä metsiä lähellä rannikkoa",
  "therizinosaurus": "leveitä jokia ja järviä, ja paljon puita",
  "diplodocus": "kuiva tasanko, jolla oli jokia ja saniaisniittyjä",
  "carnotaurus": "matala rannikko, jossa oli laguuneja meren äärellä",
  "dilophosaurus": "jokien ja hiekkadyynien maa",
  "iguanodon": "soisia metsiä, jokia ja järviä",
  "styracosaurus": "vihreä jokitasanko meren lähellä",
  "pteranodon": "avomerta kaukana rannasta — Kansas oli veden alla!",
  "rhamphorhynchus": "lämpimiä, matalia laguuneja ja pieniä saaria",
  "dimorphodon": "lämmin, matala meri kallioisen rannikon edustalla",
  "ornithocheirus": "rannikoita ja matalia meriä",
  "mosasaurus": "lämpimiä meriä, jotka peittivät suuren osan Euroopasta ja Pohjois-Amerikasta",
  "argentinosaurus": "laaja jokien ja metsien tasanko",
  "gallimimus": "jokia ja järviä, joiden ympärillä kasvoi metsää",
  "compsognathus": "kuivia saaria lämpimässä laguunissa",
  "microraptor": "metsiä järvien ympärillä, savuavien tulivuorten lähellä",
  "oviraptor": "hiekka-aavikko dyyneineen",
  "protoceratops": "hiekka-aavikko, jossa oli dyynejä ja keitaita",
  "amargasaurus": "jokitasanko, jolla oli järviä",
  "deinocheirus": "leveitä jokia ja kosteikkoja",
  "elasmosaurus": "suuri meri, joka ulottui keskeltä Pohjois-Amerikan halki",
  "australovenator": "laaja, kostea jokitasanko, jolla oli metsiä ja suvantolampia",
  "muttaburrasaurus": "matalaa maata matalan sisämeren rannalla",
  "leaellynasaura": "kylmä metsä lähellä etelänapaa, pimeä viikkokausia joka talvi",
  "cryolophosaurus": "viileä havupuiden ja saniaisten metsä — ei lainkaan jäätä",
  "ichthyosaurus": "lämmin, matala meri täynnä kaloja ja kalmarin kaltaisia eläimiä",
  "liopleurodon": "lämmin, matala meri nykyisen Englannin ja Ranskan päällä",
  "kronosaurus": "kylmä, matala meri, joka peitti suuren osan Australiasta",
  "archelon": "suuri, lämmin meri, joka ulottui keskeltä Pohjois-Amerikan halki",
  "albertosaurus": "lämmin, kostea rannikkotasanko, jolla oli soita, jokia ja metsiä",
  "edmontosaurus": "lämmin rannikkotasanko, jolla oli soita ja metsiä sisämeren rannalla",
  "brontosaurus": "leveä jokitasanko, jolla oli havumetsiä ja saniaisniittyjä",
  "giganotosaurus": "jokien ja tulvatasankojen maa, jossa asui jättimäisiä pitkäkaulaisia dinosauruksia",
  "quetzalcoatlus": "lämmin jokitasanko, jolla oli järviä ja metsiä, kaukana merestä",
  "archaeopteryx": "lämpimiä, matalia laguuneja ja kuivia, pensaikkoisia saaria",
  "carcharodontosaurus": "leveiden jokien ja soiden maa, täynnä jättiläiskaloja ja krokotiileja",
  "coelophysis": "kuuma jokien maa, jolla oli pitkiä kuivia kausia, keskellä Pangeaa",
  "megalosaurus": "lämpimiä rannikoita ja saaria matalassa trooppisessa meressä",
  "plateosaurus": "lämmin, kuiva jokien ja mutaisten tulvatasankojen maa Pangean laidalla",
  "glacialisaurus": "viileä havupuiden ja saniaisten metsä lähellä etelänapaa — jäätä ei vielä ollut",
  "pachyrhinosaurus": "viileiden metsien ja laajojen jokitasankojen maa, joka ulottui pohjoisessa aina arktiselle alueelle asti",
  "ugrunaaluk": "viileiden metsien maa kaukaisen pohjoisen jokien varsilla, joka talvi viikkokausia pimeä",
  "nanuqsaurus": "viileiden metsien ja jokien maa lähellä Pohjoista jäämerta, joka talvi viikkokausia pimeä",
  "utahraptor": "kuiva tasanko, jolla oli jokia, havumetsiä ja saniaisniittyjä",
  "gastonia": "kuiva maa, jossa jokivarsien metsien välissä oli avointa maastoa",
  "planicoxa": "mutkittelevien jokien, tulvatasankojen ja pienten lampien maa",
  "sanajeh": "lämmin saari, jossa oli sade- ja kuivakausi ja jonka hiekkaiseen maahan jättiläisdinosaurukset munivat",
  "najash": "kuiva maa hiekka-aavikon laidalla, jonka halki virtasi sadekaudella puroja",
  "baryonyx": "laaja, märkä jokien ja laguunien tasanko, täynnä kalaa",
  "maiasaura": "lämmin ylänkötasanko, jolla oli pitkät kuivat kaudet ja jonne laumat tulivat joka vuosi pesimään",
  "mamenchisaurus": "lämmin, märkä allas täynnä järviä, jokia ja metsiä",
  "deinonychus": "lämmin tulvatasankojen, metsien, soiden ja laguunien maa",
  "patagotitan": "metsäinen tulvatasanko, jolla kasvoi havupuita ja saniaisia",
  "herrerasaurus": "lämmin jokien ja tulvatasankojen laakso, jossa oli sade- ja kuivakausi ja tulivuoria lähellä",
  "kentrosaurus": "lämpimiä rannikon laguuneja ja vuorovesitasankoja, ja kauempana sisämaassa havumetsiä",
  "rajasaurus": "kuiva, lämmin saari, jossa oli leveä jokilaakso ja jonne jättimäiset pitkäkaulaiset dinosaurukset tulivat pesimään",
  "borealopelta": "rannikon maa, jossa oli saniaisten peittämiä metsiä matalan meren rannalla",
  "sinosauropteryx": "avointa maata järvien ympärillä, ja lähellä tulivuoria, jotka joskus hautasivat kaiken tuhkaan",
  "corythosaurus": "lämpimiä metsiä ja soita jokien varsilla, jotka virtasivat sisämereen",
  "psittacosaurus": "järvien ja metsien maa, ja lähellä tulivuoria",
  "zuul": "lämmin rannikkotasanko, jolla oli jokia ja metsiä sisämeren rannalla"
 },
 "ageText": {
  "66": "<b>66 miljoonaa vuotta sitten</b> — kymmenen kilometrin levyinen avaruuskivi iskeytyy mereen Meksikon lähellä, ja jättiläisdinosaurusten aika päättyy.",
  "70": "<b>70 miljoonaa vuotta sitten</b> — liitukauden loppu. Atlantti leveni, Intia oli saari, ja meri jakoi Pohjois-Amerikan kahtia.",
  "150": "<b>150 miljoonaa vuotta sitten</b> — jurakausi. Maa oli vielä melkein yhtenä palana, ja Atlantin valtameri oli vain kapea meri.",
  "220": "<b>220 miljoonaa vuotta sitten</b> — triaskausi. Kaikki maa oli yhtä jättimannerta, Pangeaa, ja aivan ensimmäiset dinosaurukset juoksivat sen poikki."
 },
 "nowText": "<b>Tänään</b> — jokainen eläin täällä on nyt fossiili, joka on kaivettu esiin siitä kohdasta, jossa sen merkki on. Rengas Meksikon lähellä näyttää, mihin asteroidi iskeytyi.",
 "story": {
  "70": "Seitsemänkymmentä miljoonaa vuotta sitten, liitukauden lopulla, jättimäinen manner oli haljennut palasiksi, ja palat ajelehtivat hitaasti erilleen. Atlantin valtameri leveni joka vuosi vähän. Intia oli saari, joka purjehti pohjoiseen kohti Aasiaa. Ja lämmin, matala meri virtasi keskeltä Pohjois-Amerikkaa ja jakoi sen kahtia.",
  "150": "Sata viisikymmentä miljoonaa vuotta sitten, jurakaudella, mantereet olivat puristuneet yhteen yhdeksi suureksi palaksi. Katso, miten maa liikkuu! Pohjois-Amerikka oli vielä kiinni Euroopassa ja Afrikassa, ja Atlantin valtameri oli vain kapea meri niiden välissä. Afrikka, Etelä-Amerikka, Etelämanner, Intia ja Australia olivat kaikki yhtä suurta maata etelässä.",
  "220": "Kaksisataakaksikymmentä miljoonaa vuotta sitten, triaskaudella, kaikki maapallon maa oli yhtä suurta jättimannerta. Sen nimi oli Pangea, ja sen ympärillä oli yksi valtava valtameri. Olisit voinut kävellä maailman laidalta toiselle ylittämättä merta kertaakaan. Pangean keskiosa oli kaukana merestä. Siellä oli kuumaa ja kuivaa, ja siellä oli suuria aavikoita.",
  "now": "Takaisin tähän päivään! Kun dinosaurukset elivät, Etelämantereella oli niin lämmintä, että siellä kasvoi metsiä. Mutta miljoonien ja taas miljoonien vuosien ajan mantereet jatkoivat ajelehtimistaan, suunnilleen yhtä nopeasti kuin sinun kyntesi kasvavat. Australia ja Etelä-Amerikka loittonivat Etelämantereesta, kunnes se jäi aivan yksin maailman pohjalle, suoraan etelänavan päälle. Kylmä merivirta alkoi kiertää sen ympäri ja piti lämpimän veden poissa. Samaan aikaan ilmasta katosi hiljalleen osa siitä kaasusta, joka pitää maapallon lämpimänä, ja koko maailma viileni. Talvella satanut lumi ei enää sulanut kesällä. Se kasautui vuosi vuodelta, kunnes noin kolmekymmentäneljä miljoonaa vuotta sitten Etelämantereen vihreät metsät katosivat paksun jään alle. Grönlanti jäätyi paljon myöhemmin, vasta noin kolme miljoonaa vuotta sitten. Sillä välin Atlantin valtameri leveni, ja Intia törmäsi Aasiaan ja työnsi Himalajan vuoret ylös. Tämän pelin eläimistä on nyt jäljellä vain luita, jotka on kaivettu esiin tämän kartan paikoista.",
  "jurassic": "Jurakausi alkoi noin kaksisataa miljoonaa vuotta sitten, ja se kesti yli viisikymmentä miljoonaa vuotta. Maailma oli lämmin ja kostea, eikä navoilla ollut jäätä. Valtavat pitkäkaulaiset kasvinsyöjät, kuten brakiosaurus ja diplodokus, kulkivat havupuiden, saniaisten ja käpypalmujen metsissä. Ruohoa ei ollut, eikä vielä ainuttakaan kukkaa. Allosaurus oli mahtavin saalistaja, lentoliskot liitelivät ylhäällä, ja aivan ensimmäiset linnut vasta opettelivat lentämään.",
  "cretaceous": "Liitukausi kesti melkein kahdeksankymmentä miljoonaa vuotta. Se oli tyrannosauruksen, triceratopsin ja velociraptorin aikaa, ja myös spinosauruksen, joka kalasti Afrikan joissa. Ensimmäiset kukat avautuivat, ja mehiläiset alkoivat käydä niillä. Meriä oli laajalti, ja ne olivat lämpimiä ja täynnä mosasauruksia, pitkäkaulaisia plesiosauruksia ja jättiläiskilpikonnia. Dinosauruksia eli jokaisella mantereella, jopa lähellä etelänapaa.",
  "asteroid": "Kuusikymmentäkuusi miljoonaa vuotta sitten jättimäinen avaruuskivi, noin kymmenen kilometrin levyinen, syöksyi kohti maapalloa. Se iskeytyi mereen Meksikon lähellä, siihen kohtaan, jossa Chicxulubin kaupunki on nykyään. Räjähdys oli voimakkaampi kuin kaikki koskaan tehdyt pommit yhteensä. Valtava ilmanpaineen aalto ryntäsi maiden yli, ja maa tärisi rajummin kuin yksikään maanjäristys, jonka olemme koskaan tunteneet. Kallio, johon kivi osui, suli, ja kraatteri hehkui kuin laava, kunnes meri syöksyi takaisin ja kiehui höyrypilviksi. Jättimäinen aalto, korkea kuin vuori, kiisi valtamerten poikki. Avaruuteen asti lentäneet kivet putosivat takaisin tulikuumina, joten koko taivas hehkui kuin uuni, ja metsät syttyivät palamaan. Sitten pöly ja musta savu täyttivät taivaan ja peittivät auringon. Maailma muuttui kylmäksi ja pimeäksi, ja kasvit lakkasivat kasvamasta. Suuret dinosaurukset, lentoliskot ja suuret merimatelijat kuolivat sukupuuttoon. Mutta jotkin pienet eläimet selvisivät: nisäkkäät, krokotiilit, kilpikonnat ja muutamat pienet höyhenpeitteiset dinosaurukset. Ne pienet dinosaurukset eivät koskaan kuolleet sukupuuttoon. Ne ovat lintuja, joita näet ulkona tänäänkin.",
  "triassic": "Triaskaudella ilmestyivät aivan ensimmäiset dinosaurukset. Ne olivat pieniä ja nopeita, ja ne juoksivat kahdella jalalla. Monet eläimet niiden ympärillä olivat niitä isompia: jättimäisiä krokotiilien serkkuja ja nisäkkäiden esi-isiä. Ensimmäiset lentoliskot nousivat ilmaan, ja kalaliskot uivat meressä. Triaskauden lopussa dinosaurukset levisivät jo kaikkialle Pangeaan."
 },
 "survivors": {
  "turtle": {
   "name": "Kilpikonnat",
   "text": "Kilpikonnat selvisivät. Monet niistä elivät joissa ja järvissä. Siellä ne pystyivät pysymään veden alla tai kaivautumaan mutaan, kun maailma niiden yläpuolella paloi ja jäätyi."
  },
  "mammal": {
   "name": "Pienet nisäkkäät",
   "text": "Pienet karvaiset nisäkkäät, kuten purgatorius, ensimmäisten kädellisten pikkuinen serkku, piiloutuivat koloihin ja söivät siemeniä ja hyönteisiä. Joskus niiden suvusta polveutuisivat apinat, ihmisapinat ja me."
  },
  "croc": {
   "name": "Krokotiilit",
   "text": "Myös krokotiilit selvisivät. Ne pärjäävät hyvin pitkään syömättä, ja joista löytyi yhä ruokaa silloinkin, kun kasvit lakkasivat kasvamasta."
  },
  "bird": {
   "name": "Linnut",
   "text": "Jotkin pienet linnut jäivät henkiin, kuten vegaviksen sukulaiset. Vegavis oli ankan kaltainen lintu, jonka jäänteet on löydetty Etelämantereelta, jossa silloin kasvoi metsiä. Linnut ovat dinosauruksia, joten dinosaurukset eivät koskaan aivan kuolleet sukupuuttoon."
  }
 },
 "craterToday": {
  "name": "Kraatteri tänään",
  "head": "Kraatteri tänään",
  "text": "Kraatteri on yhä olemassa, mutta sitä ei näe: se on hautautunut Jukataninniemimaan alle, noin kilometrin paksuisen kalliokerroksen alle, joka on kertynyt sen päälle myöhemmin. Vain rengas pyöreitä, vedellä täyttyneitä vajoamakuoppia, cenoteja, kiertää sen reunaa. Laitteet, jotka tuntevat painovoiman vedon, näyttävät koko kraatterin, joka on noin 180 kilometriä leveä."
 },
 "survivorWords": {
  "mammal": "nisäkkäät,",
  "croc": "krokotiilit,",
  "turtle": "kilpikonnat",
  "bird": "höyhenpeitteiset dinosaurukset"
 },
 "nowWords": {
  "current": "Kylmä merivirta",
  "cool": "Samaan aikaan",
  "snow": "Talvella satanut",
  "ice": "kolmekymmentäneljä",
  "greenland": "Grönlanti jäätyi",
  "atlantic": "Sillä välin"
 },
 "survivorCues": {
  "mammal": 74.48,
  "croc": 75.76,
  "turtle": 77.15,
  "bird": 79.84
 },
 "places": {
  "Hell Creek, Montana": "Hell Creek, Montana",
  "Frenchman River, Saskatchewan": "Frenchman River, Saskatchewan",
  "Lance Creek, Wyoming": "Lance Creek, Wyoming",
  "Morrison, Colorado": "Morrison, Colorado",
  "Como Bluff, Wyoming": "Como Bluff, Wyoming",
  "Lourinhã, Portugal": "Lourinhã, Portugali",
  "Tugrikin Shireh, Mongolia": "Tugrikin Shireh, Mongolia",
  "Flaming Cliffs, Mongolia": "Flaming Cliffs, Mongolia",
  "Riggs Hill, Colorado": "Riggs Hill, Colorado",
  "Red Deer River, Alberta": "Red Deer River, Alberta",
  "Kem Kem, Morocco": "Kem Kem, Marokko",
  "Bahariya Oasis, Egypt": "Bahariyan keidas, Egypti",
  "Dinosaur Provincial Park, Alberta": "Dinosaur Provincial Park, Alberta",
  "Bisti Badlands, New Mexico": "Bisti Badlands, New Mexico",
  "Cleveland-Lloyd Quarry, Utah": "Cleveland-Lloyd Quarry, Utah",
  "Gaston Quarry, Utah": "Gaston Quarry, Utah",
  "Poison Strip, Utah": "Poison Strip, Utah",
  "Dholi Dungri, Gujarat": "Dholi Dungri, Gujarat",
  "La Buitrera, Argentina": "La Buitrera, Argentiina",
  "Ockley, Surrey": "Ockley, Surrey",
  "Egg Mountain, Montana": "Egg Mountain, Montana",
  "Sichuan, China": "Sichuan, Kiina",
  "Hechuan, Chongqing": "Hechuan, Chongqing",
  "Junggar Basin, Xinjiang": "Dzungarian allas, Xinjiang",
  "Bridger, Montana": "Bridger, Montana",
  "La Flecha, Chubut": "La Flecha, Chubut",
  "Ischigualasto, San Juan": "Ischigualasto, San Juan",
  "Tendaguru, Tanzania": "Tendaguru, Tansania",
  "Rahioli, Gujarat": "Rahioli, Gujarat",
  "Oshih, Mongolia": "Oshih, Mongolia",
  "Havre, Montana": "Havre, Montana",
  "Fort McMurray, Alberta": "Fort McMurray, Alberta",
  "Nemegt Basin, Mongolia": "Nemegtin allas, Mongolia",
  "Dinosaur National Monument, Utah": "Dinosaur National Monument, Utah",
  "Chubut, Argentina": "Chubut, Argentiina",
  "Kayenta, Arizona": "Kayenta, Arizona",
  "Bernissart, Belgium": "Bernissart, Belgia",
  "Tilgate Forest, England": "Tilgate Forest, Englanti",
  "Smoky Hill Chalk, Kansas": "Smoky Hill Chalk, Kansas",
  "Solnhofen, Germany": "Solnhofen, Saksa",
  "Lyme Regis, England": "Lyme Regis, Englanti",
  "Cambridge, England": "Cambridge, Englanti",
  "Maastricht, Netherlands": "Maastricht, Alankomaat",
  "Monmouth County, New Jersey": "Monmouth County, New Jersey",
  "Khouribga, Morocco": "Khouribga, Marokko",
  "Plaza Huincul, Argentina": "Plaza Huincul, Argentiina",
  "Jachenhausen, Germany": "Jachenhausen, Saksa",
  "Canjuers, France": "Canjuers, Ranska",
  "Liaoning, China": "Liaoning, Kiina",
  "Bayan Mandahu, China": "Bayan Mandahu, Kiina",
  "La Amarga, Argentina": "La Amarga, Argentiina",
  "Altan Uul, Mongolia": "Altan Uul, Mongolia",
  "Pierre Shale, Kansas": "Pierre Shale, Kansas",
  "Winton, Queensland": "Winton, Queensland",
  "Muttaburra, Queensland": "Muttaburra, Queensland",
  "Lightning Ridge, New South Wales": "Lightning Ridge, Uusi Etelä-Wales",
  "Dinosaur Cove, Victoria": "Dinosaur Cove, Victoria",
  "Mount Kirkpatrick, Antarctica": "Mount Kirkpatrick, Etelämanner",
  "Peterborough, England": "Peterborough, Englanti",
  "Boulogne-sur-Mer, France": "Boulogne-sur-Mer, Ranska",
  "Hughenden, Queensland": "Hughenden, Queensland",
  "Richmond, Queensland": "Richmond, Queensland",
  "Cheyenne River, South Dakota": "Cheyenne River, Etelä-Dakota",
  "Dry Island Buffalo Jump, Alberta": "Dry Island Buffalo Jump, Alberta",
  "Horseshoe Canyon, Alberta": "Horseshoe Canyon, Alberta",
  "Villa El Chocón, Argentina": "Villa El Chocón, Argentiina",
  "Big Bend, Texas": "Big Bend, Texas",
  "Eichstätt, Germany": "Eichstätt, Saksa",
  "Ghost Ranch, New Mexico": "Ghost Ranch, New Mexico",
  "Stonesfield, Oxfordshire": "Stonesfield, Oxfordshire",
  "Trossingen, Germany": "Trossingen, Saksa",
  "Frick, Switzerland": "Frick, Sveitsi",
  "New Jersey": "New Jersey",
  "Vega Island, Antarctica": "Vegansaari, Etelämanner",
  "Chicxulub, Mexico": "Chicxulub, Meksiko",
  "Kikak-Tegoseak, Alaska": "Kikak-Tegoseak, Alaska",
  "Pipestone Creek, Alberta": "Pipestone Creek, Alberta",
  "Colville River, Alaska": "Colville-joki, Alaska"
 },
 "ui": {
  "Close, and look around first": "Sulje ja katsele ensin ympärillesi",
  "Turn over two cards. If they are the same dinosaur, you keep them.": "Käännä kaksi korttia. Jos niissä on sama dinosaurus, saat pitää ne.",
  "How many pairs": "Montako paria",
  "Easy": "Helppo",
  "Medium": "Keskitaso",
  "Hard": "Vaikea",
  "Extra hard": "Tosi vaikea",
  "Are you sure?": "Oletko varma?",
  "Who is playing": "Ketkä pelaavat",
  "How many players": "Montako pelaajaa",
  "player": "pelaaja",
  "players": "pelaajaa",
  "How to play": "Miten pelataan",
  "Normal": "Tavallinen",
  "Speedrun": "Aikaa vastaan",
  "When you find a pair": "Kun löydät parin",
  "Hand over": "Vuoro vaihtuu",
  "the turn passes": "seuraava pelaa",
  "Go again": "Jatka itse",
  "keep your turn": "saat uuden vuoron",
  "The clock": "Kello",
  "Off": "Pois",
  "no time limit": "ei aikarajaa",
  "Countdown": "Aikaraja",
  "a clock each": "jokaisella oma kello",
  "Language": "Kieli",
  "Start": "Aloita",
  "All cards": "Kaikki kortit",
  "Where they lived: the map": "Missä ne elivät: kartta",
  "Map": "Kartta",
  "Menu": "Valikko",
  "Show cards ▴": "Näytä kortit ▴",
  "New game": "Uusi peli",
  "Jungle": "Viidakko",
  "Sound": "Äänet",
  "Fullscreen": "Koko näyttö",
  "Exit fullscreen": "Pois koko näytöstä",
  "Close": "Sulje",
  "Close the picture": "Sulje kuva",
  "Where they lived": "Missä ne elivät",
  "Tap an animal to see where its bones were found": "Napauta eläintä, niin näet, mistä sen luut löytyivät",
  "When": "Milloin",
  "Triassic": "Triaskausi",
  "Jurassic": "Jurakausi",
  "Cretaceous": "Liitukausi",
  "Asteroid": "Asteroidi",
  "Today": "Nykyään",
  "▶ Whole story": "▶ Koko tarina",
  "Whole story": "Koko tarina",
  "Stop the story": "Lopeta tarina",
  "Close the map": "Sulje kartta",
  "Zoom in": "Lähemmäs",
  "Zoom out": "Kauemmas",
  "Show the whole world": "Näytä koko maailma",
  "Go to a continent": "Siirry maanosaan",
  "Read this card aloud": "Lue kortti ääneen",
  "Read this aloud": "Lue tämä ääneen",
  "Stop reading": "Lopeta lukeminen",
  "Put this card back in the pile": "Laita kortti takaisin pinoon",
  "What you found": "Mitä löysit",
  "Hide cards": "Piilota kortit",
  "Sounds on": "Äänet päällä",
  "Sounds off": "Äänet pois",
  "Jungle sounds on": "Viidakon äänet päällä",
  "Jungle sounds off": "Viidakon äänet pois",
  "Tell the story of the moving world": "Kerro tarina liikkuvasta maailmasta",
  "{n} million years ago": "{n} miljoonaa vuotta sitten",
  "{name} survived": "{name} selvisivät",
  "fossils found in {place}": "fossiileja löydetty: {place}",
  "Where the asteroid hit": "Tähän asteroidi iski",
  "North America": "Pohjois-Amerikka",
  "South America": "Etelä-Amerikka",
  "Europe": "Eurooppa",
  "Africa": "Afrikka",
  "Asia": "Aasia",
  "Australia": "Australia",
  "Antarctica": "Etelämanner",
  "{n} animal": "{n} eläin",
  "{n} animals": "{n} eläintä",
  "found at": "löydetty",
  "Put {name} back": "Laita {name} takaisin",
  "Show {name} on the whole screen": "Näytä {name} koko näytöllä",
  "Bones found at": "Luita löydetty",
  "Back then": "Silloin",
  "This was {then}.": "Täällä oli {then}.",
  "Read the whole card": "Lue koko kortti",
  "found by player {n}": "löytäjä pelaaja {n}",
  "found": "löydetty",
  "Card {n}, face down": "Kortti {n}, kuvapuoli alaspäin",
  "animals — tap one to read about it": "eläintä — napauta yhtä ja lue siitä",
  "Player {n}": "Pelaaja {n}",
  "Player {n} has {time} left": "Pelaajalla {n} on aikaa {time}",
  "of {n} pairs found": "/ {n} paria löydetty",
  "Pterosaur": "Lentolisko",
  "Marine reptile": "Merimatelija",
  "Plesiosaur": "Joutsenlisko",
  "Pliosaur": "Pliosaurus",
  "Ichthyosaur": "Kalalisko",
  "Sea turtle": "Merikilpikonna",
  "Early bird": "Varhainen lintu",
  "Snake": "Käärme",
  "Pterosaur — a flying reptile, not a dinosaur": "Lentolisko — lentävä matelija, ei dinosaurus",
  "Marine reptile — a giant sea lizard, not a dinosaur": "Merimatelija — jättiläismäinen merilisko, ei dinosaurus",
  "Plesiosaur — a long-necked sea reptile, not a dinosaur": "Joutsenlisko — pitkäkaulainen merimatelija, ei dinosaurus",
  "Pliosaur — a short-necked sea reptile, not a dinosaur": "Pliosaurus — lyhytkaulainen merimatelija, ei dinosaurus",
  "Ichthyosaur — a dolphin-shaped sea reptile, not a dinosaur": "Kalalisko — delfiinin muotoinen merimatelija, ei dinosaurus",
  "Sea turtle — a giant turtle, not a dinosaur": "Merikilpikonna — jättiläiskilpikonna, ei dinosaurus",
  "Early bird — one of the first birds, and a dinosaur too": "Varhainen lintu — yksi ensimmäisistä linnuista, ja dinosaurus sekin",
  "Snake — an early snake, not a dinosaur": "Käärme — varhainen käärme, ei dinosaurus",
  "Speed": "Nopeus",
  "Weight": "Paino",
  "Ate": "Söi",
  "Meat — a hunter": "Lihaa — saalistaja",
  "Fish — a fisher": "Kalaa — kalastaja",
  "Insects — a bug catcher": "Hyönteisiä — ötökänpyydystäjä",
  "Anything — a nibbler": "Kaikkea — napostelija",
  "Jellyfish — a slurper": "Meduusoja — hörppijä",
  "Plants — a grazer": "Kasveja — laiduntaja",
  "Lived": "Eli",
  "Length": "Pituus",
  "Found in": "Löydetty",
  "Show where {name} lived on the map": "Näytä kartalla, missä {name} eli",
  "More about {name}": "Lisää: {name}",
  "How it was found": "Miten se löydettiin",
  "Did you know?": "Tiesitkö?",
  "Read about {name}": "Lue: {name}",
  "Your cards": "Sinun korttisi",
  "The board is yours to look at. New game starts another.": "Voit katsella pöytää rauhassa. Uusi peli aloittaa seuraavan.",
  "Player {n} wins!": "Pelaaja {n} voitti!",
  "It's a tie!": "Tasapeli!",
  "{n} dinosaur": "{n} dinosaurus",
  "{n} dinosaurs": "{n} dinosaurusta",
  "Player {n} wins with {animals}.": "Pelaaja {n} voitti: {animals}.",
  "Both found {animals}.": "Molemmat löysivät {animals}.",
  "Everybody found {animals}.": "Kaikki löysivät {animals}.",
  "{names} both found {animals}.": "{names} löysivät kumpikin {animals}.",
  "{names} all found {animals}.": "{names} löysivät kukin {animals}.",
  "and": "ja",
  "Player {n} ran out of time.": "Pelaajalta {n} loppui aika.",
  "It took {time}.": "Aikaa kului {time}.",
  "Time's up!": "Aika loppui!",
  "You found {found} of {pairs} pairs. Try again - you can beat the clock!": "Löysit {found}/{pairs} paria. Yritä uudestaan – voit voittaa kellon!",
  "You found them all!": "Löysit kaikki!",
  "points": "pistettä",
  "{n} turns": "{n} vuoroa",
  "{n}% right": "{n} % oikein",
  "New best score!": "Uusi ennätys!",
  "Your best: {n}": "Ennätyksesi: {n}",
  "Play again": "Pelaa uudestaan",
  "{time} left": "aikaa {time}",
  "Time's up! You found {found} of {pairs} pairs.": "Aika loppui! Löysit {found}/{pairs} paria.",
  "Player {n} has run out of time.": "Pelaajalta {n} loppui aika.",
  "Player {n}, half your time is gone!": "Pelaaja {n}, puolet ajastasi on mennyt!",
  "Half your time is gone!": "Puolet ajasta on mennyt!",
  "Watch out! Four cards are swapping places.": "Varo! Neljä korttia vaihtaa paikkaa.",
  "Watch out! Two cards are swapping places.": "Varo! Kaksi korttia vaihtaa paikkaa.",
  "Back to start": "Takaisin alkuun",
  "Back to game": "Takaisin peliin",
  "Looking at all {n} animals. Tap one to read about it.": "Katselet kaikkia {n} eläintä. Napauta yhtä ja lue siitä.",
  "{n} pairs of cards.": "{n} korttiparia.",
  "Player 1 starts.": "Pelaaja 1 aloittaa.",
  "Find them all!": "Etsi kaikki!",
  "Match!": "Pari!",
  "{found} of {pairs} found.": "{found}/{pairs} löydetty.",
  "Player {n}'s turn.": "Pelaajan {n} vuoro.",
  "Player {n} goes again.": "Pelaaja {n} jatkaa.",
  "Not a pair.": "Ei pari.",
  "Go again!": "Saat jatkaa!",
  "Pair!": "Pari!",
  "Player 1 starts!": "Pelaaja yksi aloittaa!",
  "Time's up! Try again!": "Aika loppui! Yritä uudestaan!",
  "win-3": "Löysit kaikki {pairs} paria! Kolme tähteä, huikeaa!",
  "win-2": "Löysit kaikki {pairs} paria! Kaksi tähteä, hienoa!",
  "win-1": "Löysit kaikki {pairs} paria! Yksi tähti, hyvä!",
  "Change the language? The game you are playing will end.": "Vaihdetaanko kieli? Kesken oleva peli loppuu."
 }
};
