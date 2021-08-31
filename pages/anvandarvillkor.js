import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Bastforpoolen from "../components/bast-for-poolen";
import BrandCarousel from "../components/brand-carousel";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const Anvandarvillkor = () => {
    return (
        <>
            <Head>
                <title>Användarvillkor</title>
                <meta name="title" content="Användarvillkor - GreenPlank.se" />
                <meta name="description" content="Följande användarvillkor, alla policyer och villkor införlivade som referens, och eventuella efterföljande ändringar av det föregående." />
            </Head>
            <Layout pageTitle="Anvandarvillkor">
                <HeaderTwo />
                <PageHeader title="Anvandarvillkor" crumbTitle="anvandarvillkor" />
                <StickyHeader />
                <section className="about-one pt-120 pb-40">
                    <Container>
                        <Row style={{ marginBottom: "4em" }}>
                            <Col lg={12}>
                                <h2>Användarvillkor</h2>
                                <div className="mb-30">
                                    <h5>Välkommen till Green Plank-webb platsen (“Webbplats”). INNAN DU KAN ANVÄNDA WEBB PLATSEN, MÅSTE DU LÄSA, FÖRSTÅ OCH GODKÄNNA ATT BINDAS AV FÖLJANDE ANVÄNDARVILLKOR, ALLA RIKTLINJER OCH VILLKOR INKORPORERADE AV HÄNVISNINGAR, OCH NÅGRA FÖLJANDE FÖRÄNDRINGAR AV DET FÖREGÅENDE. Genom att använda denna webbplats godkänner du dessa användarvillkor. Om du inte håller med någon del av dessa användarvillkor, ANVÄND INTE DENNA WEBBPLATS ELLER LADDA NER NÅGRA MATERIAL FRÅN DEN.</h5>
                                    <h5 className="mb-30 mt-30">Green Plank AB (“Green Plank”) förbehåller sig rätten att när som helst och efter eget gottfinnande ändra eller ändra villkoren i användarvillkoren eller någon policy eller riktlinje på webb platsen. Eventuella ändringar eller ändringar kommer att gälla efter publicering av ändringarna och meddelande om sådana ändringar på webb platsen. Din fortsatta användning av denna webbplats efter publicering av dess ändringar eller modifieringar kommer att utgöra ditt godkännande av sådana ändringar eller modifieringar. Därför bör du regelbundet läsa igenom användarvillkoren och tillämpliga policy för att förstå de villkor som gäller för din användning av webb platsen.</h5>
                                    <h5 className="mb-30 mt-30">Dessa användarvillkor ändrar inte på något sätt villkoren i något annat avtal du kan ha med Green Plank för andra produkter eller tjänster.</h5>
                                    <h5 className="mb-30 mt-30">Frågor eller kommentarer om webb platsen eller dess innehåll ska riktas till info@GreenPlank.se</h5>
                                    <h5 className="mb-30 mt-30"><strong>INKORPORERAD Policy eller allmänna VILLKOR
                                    </strong></h5>
                                    <h3 className="mb-30 mt-30">Integritets policy</h3>
                                    <h5 className="mb-30 mt-30">Green Plank tror starkt på att skydda användarnas integritet och ge dig information om Green Planks insamling och användnings uppgifter, inklusive personlig information, som samlats in från webb platsen. Därför har Green Plank antagit en integritets policy som du bör hänvisa till för att förstå hur Green Plank använder och samlar in information.</h5>
                                    <h3 className="mb-30 mt-30">Försäljningsvillkor</h3>
                                    <h5 className="mb-30 mt-30">Alla beställningar som görs via webb platsen regleras av Green Planks försäljningsvillkor. Du bör hänvisa till våra försäljningsvillkor för att lära dig mer om tillämpliga produkt garantier, vår retur policy och leveransvillkor. Genom att beställa och / eller acceptera leverans av produkterna samtycker du till att vara bunden av dessa försäljningsvillkor, retur policy, leveransvillkor inklusive ansvars fri skrivningar och begränsningar av ansvar däri. Villkoren för försäljning, retur policy och leveransvillkor kan komma att ändras utan föregående meddelande när som helst, enligt Green Planks eget gottfinnande, så du bör granska försäljnings villkoren, retur policyn och leverans villkoren varje gång du gör ett köp.</h5>
                                    <h3 className="mb-30 mt-30">Webb platsens användarvillkor (användar avtal)</h3>
                                    <ul>
                                        <strong>1. </strong>Genom att ladda ner, kopiera, reproducera, distribuera, skriva ut eller använda material som ägs av Green Plank AB (Green Plank) och specifikt gjort tillgängligt på Green Plank-webb platsen, godkänner du ditt godkännande av detta användar avtal och godkänner alla användarvillkor i detta användar avtal.
                                        <br />
                                        <strong>2. </strong>Material betyder verk oavsett om det är skrivet, grafiskt, fotografiskt, visuellt, ljud och alla ämnen som ägs av Green Plank som visas eller har implementerats på GreenPlank.eu-webb platsen.<br />
                                        <strong>3. </strong>Som det är fallet är allt material på GreenPlank.eu webbplats skyddat av upphovsrätt.<br />
                                        <strong>4. </strong>Tillstånd (tillstånd) att använda Green Planks webbplats material beviljas enligt villkoren enligt dessa användarvillkor.<br />
                                        <strong>5. </strong>Ingenting i beviljande av detta tillstånd utgör ett oåterkalleligt privilegium eller rättighet från användarens sida.<br />
                                        <strong>6. </strong>Green Plank förbehåller sig rätten att återkalla tillstånd att använda något av dess upphovsrätts skyddade material i händelse av att Green Plank fastställer att användaren av det upphovsrätts skyddade material har missbrukat rättigheten att använda materialet på det sätt som anges i dessa användarvillkor.<br />
                                        <strong>7. </strong>Användaren av det upphovsrätts skyddade materialet efter meddelande från Green Plank ska omedelbart upphöra och avstå från att använda materialet, och om materialet visas på en webb plats, ta omedelbart bort materialet från webb platsen utan onödigt dröjsmål.<br />
                                    </ul>
                                    <h3 className="mb-30 mt-30">MEDLEMSKAPS FÖRPLIKTELSER</h3>
                                    <h5 className="mb-30 mt-10">Efter att du har godkänt dessa användarvillkor kan du öppna ett medlems konto under avsnittet Medlemskap på webb platsen (“medlems kontot”) som privat kund eller grossist / återförsäljare. Som en del av medlems registreringen kan den person som öppnar medlems kontot på webb platsen (“administratören”) välja att förse oss med information om andra användare som har behörighet att utföra vissa funktioner på administratörens vägnar via medlems kontot ( ”Auktoriserade användare”). Administratören ska specifikt välja vilka funktioner varje auktoriserad användare har befogenhet att utföra via webb platsen.</h5>
                                    <h5 className="mb-30 mt-10">Auktoriserade användare kan komma åt webb platsen med sina egna personliga lösenord, men kan endast utföra de valda funktionerna för administratörens räkning. När som helst kan en administratör ändra en auktoriserad användares personliga lösenord för att förhindra hans eller hennes åtkomst till webb platsen, begränsa auktoriserad användares befogenhet att utföra vissa funktioner på medlemmens vägnar eller på annat sätt ändra, lägga till eller ta bort auktoriserade användare. Om en auktoriserad användare inte längre är auktoriserad att agera för din räkning är administratören ansvarig för att använda dessa säkerhets procedurer som vi har gjort tillgängliga för dig för att avsluta eller begränsa den auktoriserade användarens åtkomst till webb platsen.</h5>
                                    <h5 className="mb-30 mt-10">Du kommer att få ett lösenord och konto beteckning när du har fyllt i medlems konto informationen. Om du är administratör för ditt medlemskaps konto, med hänsyn till din användning av webb platsen, godkänner du följande:
                                    </h5>
                                    <ul>
                                        <strong>1. </strong>Att ge sann, korrekt, aktuell och fullständig information om dig själv och / eller företaget som du representerar, inklusive men inte begränsat till information om alla auktoriserade användare; inklusive eventuella speciella omständigheter eller begränsningar som gäller för varje auktoriserad användare.<br />
                                        <strong>2. </strong>Att du representerar och garanterar att du har kapacitet och befogenhet<br />
                                        <strong>3. </strong>Att genomföra avtal och göra beställningar på Green Plank-produkter och tjänster på uppdrag av dig eller ditt företag.<br />
                                        <strong>4. </strong>Tagit en beställning gjord av dig eller en auktoriserad användare via webb platsen motsvarar en undertecknad inköps order, och du avstår härmed från alla framtida utmaningar mot giltigheten och verkställande av beställningar som skickas via webb platsen med motiveringen att den överfördes elektroniskt auktoriserad.<br />
                                        <strong>5. </strong>Att du är ansvarig för alla kostnader och avgifter, inklusive utan begränsning, telefon avgifter och tele kommunikations utrustning som uppstår för att använda webb platsen.<br />
                                        <strong>6. </strong>Att du (och ditt företag, om tillämpligt) är fullt ansvariga för alla aktiviteter som sker under ditt lösenord eller medlems konto, och accepterar allt ansvar för dina auktoriserade användares handlingar eller ute lämnande som uppstår på grund av deras användning av webb platsen, även om sådana handlingar eller försummelser är inte specifikt godkända av dig.<br />
                                        <strong>7. </strong>Att omedelbart meddela oss om obehörig användning av ditt lösenord eller medlems konto eller andra säkerhets brott.<br />
                                        <strong>8. </strong>Att du är fullt ansvarig för att hantera ditt medlems konto, inklusive men inte begränsat till:
                                        <ul>
                                            <strong>i. </strong>upprätthålla sekretessen för lösenord och / eller information om medlemskaps konton<br />
                                            <strong>ii. </strong>underhålla och omedelbart uppdatera informationen om medlems kontot för att hålla den sann, korrekt, aktuell och fullständig;<br />
                                            <strong>iii. </strong>se till att en auktoriserad användare har kapacitet och befogenhet att utföra de funktioner som de har auktoriserats av dig att utföra för dig eller ditt företag; och<br />
                                            <strong>iv. </strong>avsluta eller begränsa någon auktoriserad användares åtkomst till webb platsen om någon auktoriserad användare inte längre har rätt att agera eller utföra vissa funktioner för din räkning.<br />
                                        </ul>
                                        <h5 className="mb-30 mt-10">Om du tillhandahåller information som är osann, felaktig, inte aktuell eller ofullständig, eller om vi har rimlig anledning att misstänka att sådan information är osann, felaktig, inte aktuell eller ofullständig, kan vi stänga av eller avsluta ditt medlemskaps konto och vägra alla aktuella och framtida användning av webb platsen från dig. Information om medlemskaps konto och viss annan information om dig omfattas av vår integritets policy. Mer information finns i vår integritets policy.
                                        </h5>
                                        <h4 className="mb-30 mt-30">ÄGANDE AV INNEHÅLL</h4>
                                        <h5 className="mb-30 mt-10">Allt innehåll som ingår på denna webbplats tillhör Green Plank och / eller dess olika tredje parts leverantörer och distributörer och är skyddat enligt immateriella rättigheter i Sverige och andra länder. Inget av innehållet som finns på denna webbplats får reproduceras, publiceras på nytt, distribueras, visas, säljas, överföras eller modifieras utan uttryckligt skriftligt tillstånd från Green Plank och / eller dess tredje parts leverantörer och distributörer.</h5>
                                        <br />
                                    </ul>
                                    <h3 className="mb-30 mt-30">UPPHOVSRÄTT</h3>
                                    <h5 className="mb-30 mt-10">Allt upphovs rätts skyddat och upphovs rätts skyddat material på denna webbplats, inklusive, utan begränsning, Green Plank-logotypen, design, text, grafik, bilder och andra filer, och urvalet och arrangemanget (”Material”) tillhör Green Plank, ALL Rättigheter reserverade Copyright © 2010 Green Plank AB och / eller dess licens givare. Med undantag av vad som anges här får inget av materialet kopieras, reproduceras, distribueras, om publiceras, laddas ner, visas, publiceras eller överföras i någon form eller på något sätt, inklusive, men inte begränsat till, elektronisk, mekanisk, foto kopiering, inspelning eller annars utan föregående skriftligt tillstånd från Green Plank eller respektive upphovs rätts innehavare.</h5>
                                    <h3 className="mb-30 mt-30">VARUMÄRKEN OCH SERVICEMÄRKEN</h3>
                                    <h5 className="mb-30 mt-10">Green Plank, Green Plank-logotypen och de produkter och tjänster som beskrivs på denna webbplats, inklusive utan begränsning, “Green Plank”, är antingen varumärken, service märken eller registrerade varumärken som tillhör Green Plank och dess leverantörer och licens givare och får inte kopieras , imiteras eller används, helt eller delvis, utan föregående skriftligt tillstånd från Green Plank eller dess leverantörer eller licens givare. Dessutom är alla sid huvuden, anpassad grafik, knapp ikoner och skrift service märke, varumärke och / eller klädsel från Green Plank och får inte kopieras, imiteras eller användas, helt eller delvis, utan föregående skriftligt tillstånd från Green Plank. Alla andra varumärke, registrerade varumärke, produkt namn och Green Plank-namn eller logo typer som nämns häri tillhör respektive ägare.</h5>
                                    <h3 className="mb-30 mt-30">ANVÄNDNING AV WEBB PLATSEN</h3>
                                    <h5 className="mb-30 mt-10">Green Plank ger dig en begränsad licens att använda denna webbplats, att göra legitima beställningar och köp och ska inte använda denna webbplats för andra ändamål, inklusive utan begränsning, för att göra någon spekulativ, falsk eller bedräglig beställning eller någon beställning i väntan på efterfrågan. Sådant bidrag omfattar inte, utan begränsning: (a) någon återförsäljning eller kommersiell användning av webb platsen och / eller tekniken eller innehållet däri; (b) insamling och användning av produkt listor eller beskrivningar; (c) använda derivat av webb platsen och dess innehåll; eller (d) användning av data utvinning, robotar eller liknande metoder för insamling och utvinning av data. Med undantag av vad som nämnts ovan, förmedlas du inte någon rättighet eller licens underförstått, stoppad eller på annat sätt i eller under något patent, varumärke, upphovsrätt eller äganderätt till Green Plank eller någon tredje part.</h5>
                                    <h5>
                                        Denna webbplats och innehållet på denna webbplats får inte kopieras, reproduceras, publiceras på nytt, laddas upp, sändas eller distribueras utan skriftligt tillstånd från Green Plank, förutom att du kan ladda ner, visa och skriva ut det material som presenteras på denna webbplats för endast licensierade ändamål; förutsatt att du inte får, utan tillstånd från Green Plank eller respektive upphovsrätts innehavare, (a) kopiera, publicera eller lägga ut material på någon webbplats, datornätverk eller sändnings- eller publikations medier, (b) ändra materialet, och (c) ta bort eller ändra upphovsrätt, varumärke och andra äganderätt som finns i materialet. Obehörig användning av denna webbplats och / eller materialet på denna webbplats kan bryta mot tillämplig lagstiftning om upphovsrätt, varumärke eller andra immateriella rättigheter eller andra lagar.</h5>
                                    <h5>Du får inte använda, rama in eller använda inramnings tekniker för att bifoga Green Plank-varumärke, logotyp eller annan äganderätt (inklusive bilderna som finns på denna webbplats, innehållet i texten eller layouten / utformningen av någon sida eller form på en sida ) utan Green Planks uttryckliga skriftliga medgivande. Vidare får du inte använda några meta taggar eller någon annan “dold text” som använder ett Green Plank-namn, varumärke eller produkt namn utan Green Planks uttryckliga skriftliga medgivande.</h5>
                                    <h3 className="mb-30 mt-30">ÅLDER OCH ANSVAR</h3>
                                    <h5 className="mb-30 mt-10">Du intygar att du har tillräcklig laglig ålder för att använda denna webbplats och skapa bindande juridiska skyldigheter för eventuellt ansvar du kan ådra dig till följd av användningen av denna webbplats. Du förstår att du är ekonomiskt ansvarig för all användning av denna webbplats av dig och de som använder din inloggnings information.</h5>
                                    <h3 className="mb-30 mt-30">UPPSÄGNING</h3>
                                    <h5 className="mb-30 mt-10">Du samtycker till att Green Plank, efter eget gottfinnande, kan avsluta ditt eller någon auktoriserad användares lösenord, konto eller användning av webb platsen eller begränsa din eller någon auktoriserad användares tillgång till någon del av denna webbplats, av någon anledning, inklusive utan begränsning, på grund av bristande användning eller om Green Plank anser att du eller någon auktoriserad användare har brutit mot eller agerat i strid med användarvillkoren eller tillämpliga lagar eller regler. Green Plank kan också, efter eget gottfinnande och när som helst, sluta tillhandahålla Webb platsen, eller någon del därav, med eller utan föregående meddelande. Du samtycker till att varje avslutande av åtkomst till webb platsen enligt någon bestämmelse i användarvillkoren kan ske utan föregående meddelande, och bekräftar och godkänner att Green Plank omedelbart kan inaktivera eller ta bort ditt medlemskaps konto och all relaterad information och filer i ditt konto och / eller spärra ytterligare åtkomst till sådana filer eller webb platsen. Vidare godkänner du att Green Plank inte ansvarar gentemot dig eller någon tredje part för någon uppsägning eller begränsning av åtkomst till webb platsen.</h5>

                                    <h3 className="mb-30 mt-30">FRISKRIVNING AV GARANTIER OCH UTFÖRANDE</h3>
                                    <h5 className="mb-30 mt-10">DIN ANVÄNDNING AV WEBB PLATSEN ÄR PÅ EGEN RISK. WEBB PLATSEN OCH MATERIAL I DENNA TILLHANDAHÅLLS “SOM DE ÄR” OCH “SOM TILLGÄNGLIG” GRUND. DU ERKÄNNER ATT DU HAR HAR FÅTT RÅD AV GREEN PLANK FÖR ATT GÖRA DIN EGNA FÖRDELNING MED HÄNDELSE TILL DENNA WEBBPLATS. GREEN PLANK GÖR INGA UTMÄRKELSER ELLER GARANTIER, VARJE UTTRYCKLIG ELLER UNDERFÖRSTÅDD, AV NÅGOT SLAG MED HÄNDELSE TILL GREEN PLANK WEBBPLATS, DETS FUNKTION, INNEHÅLL, INFORMATION, MATERIAL.
                                        GREEN PLANK FRÅN DRAR UTTRYCKLIGT ALLA FÖRETAG OCH GARANTIER, UTTRYCKLIG ELLER UNDERFÖRSTÅDD, AV NÅGOT SLAG MED HÄNDELSE FÖR DENNA WEBBPLATS ELLER DENNA ANVÄNDNING, INKLUDERAT MEN INTE BEGRÄNSAD FÖR SÄLJBARHET, NOGGRANNHET FÖR EN SÄKER SÄKERHET, RÄTTIGHET, RÄTT INNEHÅLLET ELLER DATA FÖR DENNA WEBBPLATS, AVDELNING OCH ÖVERTRÄDELSE OCH DE SOM UPPSTÅR AV LAG STIFT ELLER ANNAT I LAG ELLER EGET KAPITAL, ELLER FRÅN KURS FÖR HANDLING ELLER ANVÄNDNING AV HANDEL.</h5>
                                    <h3 className="mb-30 mt-30">ANSVARSBEGRÄNSNING</h3>
                                    <h5 className="mb-30 mt-10">YDU? GODKÄNNER ATT GREEN PLANK, DESS DIREKTÖRER, TJÄNSTEMÄN, ANSTÄLLDA ELLER ANDRA FÖRETRÄDARE INTE SKALL ANSVARAS FÖR SKADOR FÖR FUNKTIONEN, INNEHÅLLET, TILLGÅNGEN TILL ELLER ANVÄNDNING AV WEBB PLATSEN. DU GODKÄNNER ATT DENNA BEGRÄNSNING AV ANSVAR, ÄR OMFATTANDE OCH GÄLLER FÖR ALLA SKADOR AV NÅGOT SLAG, INKLUDERAT UTAN BEGRÄNSNING DIREKT, INDIREKT, KOMPENSERANDE, SÄRSKILT, TILLFÄLLIGT, PUNITIVT? OCH FÖLJANDE SKADOR INKLUDERAT, FÖLJANDE SKADOR, FÖR FÖLJANDE SKADOR, FÖLJANDE FÖR SKADA ANVÄNDNING, DATA ELLER ÖVRIGA IMMATERIELLA FÖRLUST (ÄVEN OM GREEN PLANK HAR RÅDET OM MÖJLIGHETEN MED SÅDAN SKADA).
                                        I INGA HÄNDELSER SKAL DET GRUNDLIGA ANSVARET FÖR GREEN PLANK (VARA I KONTRAKT, GARANTI, SKADE (INKLUSIVE FÖRSLAG), PRODUKT ANSVAR, STARK ANSVAR ELLER ÖVRIG TEORI) FÖR ANVÄNDNING AV ELLER I SAMBAND MED ANVÄNDNING AV WEB PLATSEN ÖVERSTIGER 100,00 EUR ELLER ERSÄTTNINGEN DU BETALADE GRÖN PLANK, SOM ALLA ÄR MINDRE.
                                        Vissa lagar tillåter inte begränsningar av underförstådda garantier eller uteslutning eller begränsning av vissa skador. Om dessa lagar gäller kan vissa eller alla ovanstående ansvars friskrivning, undantag eller begränsningar inte gälla dig, och du kan ha ytterligare rättigheter till de som finns här.</h5>
                                    <h3 className="mb-30 mt-30">SKADEERSÄTTNING</h3>
                                    <h5 className="mb-30 mt-10">Du ska gottgöra, försvara och hålla ofarlig Green Plank och dess tjänstemän, styrelseledamöter, anställda, konsulter, representanter och agenter från och mot förlust, ansvar, anspråk, orsak, talan, krav, skador, kostnader eller utgifter inklusive utan begränsning rimlig juridisk, redovisnings- och andra yrkes avgifter, som tas ut av eller för din räkning utöver det ansvar som beskrivs häri eller av tredje parter som uppstår från eller i samband med din användning eller någon av dina auktoriserade användares användning av denna webbplats, inklusive men inte begränsat till brott du eller någon auktoriserad användare av användarvillkoren. Green Plank förbehåller sig rätten att ta exklusivt försvar och kontroll av alla ärenden, med förbehåll för skadestånd från dig, vilket inte får ursäkta dina skadestånds skyldigheter.</h5>
                                    <h3 className="mb-30 mt-30">VERKTYG & FUNKTIONER</h3>
                                    <h5 className="mb-30 mt-10">Alla verktyg, funktioner, uträknar etc. tillhandahålls endast som en artighet. Alla resultat är uppskattningar och ska användas som sådana. Green Plank kan inte hållas ansvarig eller ansvarig för information som härleds från användningen av de tillhandahållna verktygen och funktionerna på webb platsen.</h5>
                                    <h3 className="mb-30 mt-30">VAR DU KÖPER / HITTAR ETT PROFFS / FÅ EN OFFERT
                                    </h3>
                                    <h5 className="mb-30 mt-10">Green Plank garanterar inte att vi kommer att kunna matcha dina servicebehov med en servicepersonal eller att det finns servicepersonal i ditt område som antingen kan eller vill fylla dina servicebehov. Även om vi vidtar vissa åtgärder för att undersöka meriterna för våra listade service personal, gör Green Plank inga garantier eller utfästelser angående kompetensen eller representationerna för en sådan servicepersonal eller kvaliteten på det jobb som han eller hon kan utföra för dig om du väljer att behålla deras tjänster. Green Plank rekommenderar eller inte tjänster från någon speciell service personal. Det är helt upp till dig att ingå ett direkt avtal eller på annat sätt nå en överenskommelse med en service personal, och vi garanterar inte deras prestationer på jobbet eller resultatet eller kvaliteten på de utförda tjänsterna. Service personalen är inte anställda eller agenter för Green Plank, inte heller är Green Plank en agent för service personal. Green Plank utför inte och ansvarar inte för någon av de tjänster som du begär i din service begäran. Dina rättigheter enligt kontrakt som du ingår med servicepersonal regleras av villkoren i sådana avtal och av tillämplig federal, statlig, provinsiell och lokal lagstiftning. Om du har en tvist med någon service personal, måste du ta upp en sådan tvist med service personalen direkt, OCH DU GODKÄNNER HÄR IGEN TILL FRIGÖRANDE GRÖN PLANK (OCH VÅRA TJÄNSTEMÄN, DIREKTÖRER, FÖRETAGARE, MEDARBETARE OCH AGENTER) OCH NÅGON ANNAN PERSON, FIRMA ELLER ENHET (INKLUDERANDE VÅRA FÖRETAGS PARTNERS SOM EN PRODUKT TILLVERKARE ELLER LEVERANTÖR SOM KAN ANVÄNDA DEN GRÖNA PLANK TILLVERKARE) FRÅN NÅGRA SKADOR ELLER KRAV (INKLUDERANDE FÖLJANDE OCH TILLFÄLLIGA SKADOR OCH SKADA OCH SKADA OCH SKADA OCH SKADA OCH SKADA OCH FEL OCH FEL OCH FEL OCH FEL OCH FEL OCH FEL ELLER Oupptäckt, uppstår eller på något sätt som är kopplad till sådana tvister och dina affärer med servicepersonal.</h5>
                                    <h3 className="mb-30 mt-30">LÄNKAR</h3>
                                    <h5 className="mb-30 mt-10">Denna webbplats kan innehålla länkar till andra webbplatser som endast tillhandahålls som en bekvämlighet för dig och införandet av någon länk innebär inte att Green Plank godkänner, undersöker eller verifierar den länkade webb platsen eller informationen där. Green Plank ansvarar inte för innehållet på andra webbplatser och ger ingen garanti avseende andra webbplatser eller innehållet eller materialet på sådana webbplatser. Om du bestämmer dig för att komma åt andra webbplatser gör du det på egen risk.</h5>
                                    <h3 className="mb-30 mt-30">RELATION</h3>
                                    <h5 className="mb-30 mt-10">Förhållandet mellan Green Plank och dig kommer att vara förhållandet mellan oberoende entreprenörer, och varken av oss eller någon av våra respektive befattningshavare, agenter eller anställda kommer att hållas eller tolkas som partners, samarbets bolag, förvaltare, anställda eller agenter för den andra som en resultat av detta avtal eller användning av denna webbplats.</h5>
                                    <h3 className="mb-30 mt-30">GÄLLANDE LAG</h3>
                                    <h5 className="mb-30 mt-10">Detta avtal och dess utförande regleras av Sveriges lagar i alla frågor som uppstår från eller relaterar till användning av denna webbplats, oavsett om det gäller anspråk i kontrakt, skadestånd eller på annat sätt, utan hänsyn till dess bestämmelser om lag konflikt. Du och Green Plank samtycker till att varje talan som kan uppkomma enligt detta avtal ska inledas och prövas vid lämplig domstol i Sverige, Skåne län. Du och Green Plank samtycker var och en till att underkasta sig den personliga och exklusiva behörigheten för domstolarna i Skåne i Sverige. Green Planks underlåtenhet att utöva eller genomdriva någon rättighet eller bestämmelse i användarvillkoren ska inte utgöra ett avstående från sådan rättighet eller bestämmelse. Om någon bestämmelse i användarvillkoren finner att en domstol med behörig jurisdiktion är ogiltig, är parterna ändå överens om att domstolen ska sträva efter att genomföra parternas avsikter som återspeglas i bestämmelsen och de övriga bestämmelserna i villkoren användningen förblir i full kraft och effekt. Du samtycker till att oavsett lag eller lag som motsätter dig, måste alla anspråk eller orsaker till handlingar som härrör från eller är relaterade till användningen av Produkterna och tjänsterna eller användarvillkoren lämnas in inom en (1) månad efter ett sådant anspråk eller orsak till handling uppstod eller är för alltid utestängd.</h5>
                                    <h3 className="mb-30 mt-30">UPPDRAG</h3>
                                    <h5 className="mb-30 mt-10">Du får inte tilldela, förmedla, lägga ut underleverantörer eller delegera dina rättigheter, skyldigheter eller plikter nedan.</h5>
                                    <h3 className="mb-30 mt-30">HELA AVTALET
                                    </h3>
                                    <h5 className="mb-30 mt-10">Dessa användarvillkor, tillsammans med de som införlivas häri eller som det hänvisas till häri, utgör hela avtalet mellan oss om ämnet här, och det ersätter alla tidigare för skrivna eller avtal (vare sig elektroniska, muntliga eller skriftliga) angående ämnet och kan inte ändras eller modifieras förutom skriftligt eller genom att göra sådana ändringar eller modifieringar tillgängliga på denna webbplats.</h5>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <BrandCarousel />
                <Footer />
            </Layout>
        </>
    );
};

export default Anvandarvillkor;
