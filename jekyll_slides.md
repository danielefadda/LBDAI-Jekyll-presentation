---
marp: true
theme: master
header: 'Laboratorio su Big Data e AI -  Jekyll'
paginate: true

---

<!-- _class: cover -->
<!-- _paginate: skip -->

<div>
  <h1>Guida all'implementazione di un sito Jekyll</h1>
  <h2>LBDAI</h2>


  <div class="authors">
    <div class="author-name">Daniele Fadda</div>
    <div class="author-name">Eleonora Cappuccio</div>
  </div>

  <div class="university">
    <strong>Universita di Pisa</strong><br>
    Corso: Laboratorio di Big Data e AI<br>
    Anno Accademico: 2025-2026
  </div>

</div>

<div>
</div>

<!--
Benvenuti in questa guida completa all'implementazione di un sito web con Jekyll. Oggi vedremo come costruire un sito per il vostro progetto di Big Data usando Jekyll e GitHub Pages. Questo tutorial vi accompagnera in ogni fase del processo, dalla configurazione iniziale fino al deployment finale. Al termine della sessione avrete un sito pienamente funzionante, utile per presentare il vostro lavoro.

A differenza di un CMS tradizionale, Jekyll non richiede un database: prende il vostro testo, lo processa e genera un sito web statico, pronto per essere navigato.

È uno strumento particolarmente strategico per i progetti accademici e di ricerca, perché permette di separare nettamente i contenuti, scritti in semplice Markdown, dall'architettura del sito. Il vero punto di forza emerge però nell'ecosistema di GitHub: l'integrazione nativa con GitHub Pages vi fornisce non solo una soluzione di hosting gratuita e altamente affidabile, ma anche una pipeline di pubblicazione automatizzata basata sul versioning. In pratica, vi concentrate sui contenuti, e la piattaforma gestisce il resto.
-->


---



# Primi passi con il template Jekyll

## Cosa imparerete
- **Template Setup**: clonare e configurare il template Jekyll
- **Repository Management**: configurare repository GitHub e collaborator
- **Local Development**: ambiente di sviluppo locale
- **GitHub Pages**: pubblicare il sito automaticamente

## Prerequisiti
- Account GitHub

<!--
Iniziamo chiarendo cosa realizzeremo in questo percorso. Copriremo quattro aree principali, fondamentali per creare il sito del progetto. 

Prima vedremo il setup del template: clonazione e configurazione del template Jekyll pensato per i vostri progetti Big Data. 

Poi passeremo alla gestione del repository, con la configurazione su GitHub e la gestione dei collaborator. 

Tratteremo anche il local development setup. Infine vedremo il deployment su GitHub Pages, che consente la pubblicazione automatica del sito. 

Prima di iniziare, assicuratevi di avere un account GitHub.
-->

---

# Check dell'installazione 

## Jekyll 3.9.3 o successive

`jekyll -v` per controllare la versione installata

## Ruby 3.1 o successive

`ruby -v` per controllare la versione di Ruby installata

---

# Passo 1: Configurazione del template di progetto

<div class="alert">
  Questo passaggio deve essere eseguito da un componente solo del gruppo.
</div>

## Uso del repository template
1. **Vai su**: `https://github.com/danielefadda/master-projects-template-2026`
2. **Clicca**: pulsante "Use this template" (in alto a destra)
3. **Seleziona**: "Create a new repository"
4. **Formato nome**: `g0-2026-website` (sostituisci `g0` con il numero del tuo gruppo)
5. **Visibilita**: lascia Public
6. **Crea**: clicca "Create repository"


<!--
Ora vediamo il processo di configurazione del template di progetto. Questa e la base del vostro sito, quindi e importante farla correttamente. Per prima cosa, aprite il repository template al link indicato.
Vedrete il pulsante verde "Use this template" in alto a destra: cliccatelo e selezionate "Create a new repository". Quando assegnate il nome al repository, e fondamentale seguire il formato: g0-2026-website, sostituendo g0 con il numero reale del vostro gruppo. Ad esempio, se siete il gruppo 3, il nome sara g3-2026-website. Lasciate la visibilita su Public: e necessario per il corretto funzionamento di GitHub Pages. Cliccando "Create repository", GitHub creera una copia del template nel vostro account. Guardiamo anche la struttura del repository su cui lavorerete. La cartella docs contiene tutto il necessario: _config.yml per i settaggi base del sito, _data per la configurazione, _pages per le pagine del sito, assets per immagini e risorse, e _includes/_layouts rispettivamente per componenti Jekyll e template HTML.
-->

---

# Passo 2: Gestione dei collaboratori

## Aggiungere membri al team
1. **Impostazioni repository**: vai nelle impostazioni del repository
2. **Manage Access**: clicca "Manage access"
3. **Invite Collaborators**: aggiungi i membri tramite username GitHub o email
4. **Docenti richiesti**: aggiungi sempre: `danielefadda`, `Elecapp` e `robertotrasarti`

<!--
La collaborazione e un aspetto chiave. Vediamo come aggiungere i membri del team al repository. Andate nel repository e cliccate sulla tab "Settings". Poi, nella barra laterale sinistra, cliccate su "Manage access". Qui troverete il pulsante "Invite a collaborator": cliccatelo e inserite username GitHub o email dei membri del team. E importante ricordare che dovete sempre aggiungere due docenti specifici come collaborator: danielefadda e Elecapp. Sono i nostri account e ci permettono di monitorare i progressi e fornire feedback.
-->

---

# Passo 2: Gestione dei collaboratori

## Cosa faranno i collaboratori?
- **Clone repository**: scaricheranno il progetto in locale
- **Modifiche e commit**: apporteranno modifiche e le salveranno con commit
- **Push su GitHub**: invieranno le modifiche al repository remoto

## Buone pratiche di collaborazione
- **Lavorare su branch separati**: ogni task dovrebbe avere un branch dedicato
- **Commit frequenti**: salvate spesso le modifiche con messaggi chiari
- **Code review**: rivedete le modifiche prima del merge
- **Pull request**: usate PR per integrare le modifiche nel branch principale
- **Comunicazione chiara**: usa le GitHub Issues per tracciare i task


---

# Comprendere la struttura del progetto

## Struttura del repository
```
project-template/docs/
├── _config.yml          # Impostazioni base del sito
├── _data/
│   └── settings.yml     # Configurazione visuale e contenuti
├── _pages/              # Pagine del vostro sito
├── assets/              # Immagini e risorse
├── _includes/           # Componenti Jekyll
└── _layouts/            # Layout HTML
```


<!--
Ora che avete creato il repository, analizziamone meglio la struttura. Questo e importante per capire dove inserire i file e come e organizzato l'insieme del progetto. La directory principale e docs, dove risiedono tutti i file del sito. All'interno di docs trovate diverse cartelle e file importanti. Il file _config.yml contiene i settaggi base del sito, come base URL e titolo. La cartella _data contiene file di configurazione come settings.yml, con impostazioni visuali e contenuti. La cartella _pages ospita le pagine del sito, ad esempio index.md per la homepage, project.md per la descrizione del progetto, team.md per i membri del team e deliverables.md per risultati e download. La cartella assets contiene immagini e altre risorse. _includes contiene componenti Jekyll riutilizzabili (header, footer, ecc.), mentre _layouts contiene i layout HTML che definiscono la struttura delle pagine. Capire questa struttura e fondamentale per gestire in modo efficace i contenuti del sito.
-->

---

# Passo 3: Setup sviluppo locale (già fatto)

## Installazione Ruby e Jekyll
1. **Installa Ruby**: segui la [guida ufficiale Jekyll](https://jekyllrb.com/docs/installation/)
2. **Clona il repository**: `git clone [your-repo-url]`
3. **Installa le dipendenze**: `bundle install`
4. **Avvia il server**: `bundle exec jekyll serve`
5. **Accedi al sito**: `http://127.0.0.1:4000/[repo-name]`

## Vantaggi dello sviluppo locale
- **Test piu rapidi**: preview immediata delle modifiche
- **Lavoro offline**: non serve Internet durante lo sviluppo (eccetto per compilare il remote theme)
- **Editing avanzato**: usa il tuo IDE preferito

---

# Passo 4: Modifica file - Tre metodi

<div class="columns-2">
<div>

## Metodo 1: Editing diretto su GitHub
- **Modifiche semplici**: modifica file direttamente nel browser
- **Aggiornamenti rapidi**: ideale per contenuti testuali
- **Nessun setup**: no installazione locale

## Metodo 2: GitHub Codespaces
- **Editor avanzato**: IDE completo nel browser
- **Estensioni**: installa Prettier per formattazione codice

</div>
<div>

## Metodo 3: Sviluppo locale (consigliato)
- **Controllo completo**: usa qualsiasi editor <br>(noi usiamo VS Code)
- **Integrazione Git**: version control avanzato
- **Lavoro offline**: *ni*, il tema è comunque in remoto, ma puoi fare modifiche senza connessione costante.

</div>
</div>

<!--
Avete tre metodi diversi per modificare i file del sito, ciascuno con vantaggi specifici. Primo, l'editing diretto su GitHub e l'approccio piu semplice: modificate i file direttamente dal browser senza setup locale. E perfetto per modifiche rapide e aggiornamenti di contenuto. Secondo, GitHub Codespaces offre un'esperienza editor piu avanzata direttamente nel browser. Include syntax highlighting, code completion e possibilita di installare estensioni come Prettier per il formatting automatico. Per aprire Codespaces, cliccate "Code" nel repository e selezionate "Create codespace on main". Terzo, lo sviluppo locale offre il controllo totale: potete usare editor come VS Code o PyCharm, integrare meglio Git e lavorare offline. Ogni metodo ha il suo spazio nel workflow, scegliete quello piu adatto al contesto e al vostro livello tecnico.
-->

---

# Passo 5: Configurare _config.yml

```yaml
# Impostazioni repository
baseurl: "/g0-2026-website"  # Nome del repository
url: "https://username.github.io"  # URL GitHub Pages

# Informazioni sito
title: "Titolo del Progetto"
subtitle: "Sottotitolo del Progetto"
description: "Breve descrizione del progetto"

# Link repository (footer)
github_repo:
  - name: "Gruppo 0 - Repository del sito"
    url: "https://github.com/your-username/website-repo"
```

## Variabili chiave
- **baseurl**: deve corrispondere al nome del repository
- **url**: dominio GitHub Pages
- **title/subtitle**: mostrati sul sito
- **github_repo**: link visualizzati nel footer

<!--
Ora configuriamo il file piu importante del setup Jekyll: _config.yml. Questo file controlla i settaggi base del sito e deve essere configurato correttamente per funzionare. L'impostazione piu critica e baseurl, che deve corrispondere esattamente al nome del repository. Ad esempio, se il repository si chiama g3-2026-website, il baseurl deve essere "/g3-2026-website". La variabile url dovrebbe essere il dominio GitHub Pages, in genere "https://username.github.io" dove username e il vostro username GitHub. Personalizzate anche titolo, sottotitolo e descrizione: compariranno sul sito e nei motori di ricerca. 
La sezione github_repo serve a creare link nel footer. Inserite i link sia del repository del progetto sia del repository del sito. Attenzione alla formattazione YAML: l'indentazione e fondamentale e deve essere coerente. Dopo modifiche a _config.yml, se lavorate in locale, riavviate il server Jekyll per applicare i cambiamenti.
-->

---

# Passo 6: Deployment con GitHub Pages

## Pubblicare il sito
1. **Crea il branch `gh-pages`**: vai su GitHub, clicca "Branch" e crea un nuovo branch:`gh-pages`
2. **Configura Pages**
    - vai in Settings > Pages.
    - In "Source", seleziona "Deploy from a branch" `gh-pages` e cartella `/ (root)`.
4. **Deploy tramite action**: nella tab "Actions", clicca sul workflow `Deploy to GitHub Pages` e poi "Run workflow" per avviare il deploy.
## URL del sito
- **Formato**: `https://username.github.io/repository-name/`
- **Esempio**: `https://johndoe.github.io/g0-2026-website/`


<!--
Passiamo ora al deployment del sito con GitHub Pages. E una delle parti piu interessanti perche vedrete il vostro sito online!
- Create un nuovo branch chiamato `gh-pages`. Potete farlo direttamente su GitHub cliccando sul menu a tendina dei branch e selezionando "Create branch".
- Configurate la sezione "Pages" nelle impostazioni del repository. Andate in Settings > Pages, e nella sezione "Source" selezionate "Deploy from a branch", scegliendo il branch `gh-pages` e la cartella `/ (root)`.
- Andate su Actions, selezionate il workflow `Deploy to GitHub Pages` e cliccate "Run workflow" per avviare il deploy. Questo processo costruira il sito e lo pubblichera su GitHub Pages.
-->

---

# Passo 6: Suggerimenti per il deployment GitHub Pages

## Suggerimenti per il deployment
- **Tempo di build**: considera *5-10 minuti* per il primo deploy
- **Aggiornamenti**: le succesive modifiche compaiono in tempi più ragionevoli
- **Troubleshooting**: controlla la tab Actions per eventuali errori

<!--
Il processo di build richiede normalmente alcuni minuti al primo deployment. Il sito sara disponibile nel formato URL https://username.github.io/repository-name/. Ad esempio, se il vostro username GitHub e elecapp e il repository e g3-2026-website, il sito sara su https://elecapp.github.io/g3-2026-website/. Dopo la configurazione iniziale, ogni push su main attivera automaticamente rebuild e aggiornamento del sito. In genere l'aggiornamento avviene in pochi minuti. Se trovate problemi, controllate la tab Actions del repository per analizzare i log di build e fare troubleshooting.
-->

---

# Passo 7: Creare e gestire le pagine

## Struttura pagine
```
docs/_pages/
├── index.md          # Homepage
├── project.md        # Descrizione progetto
├── team.md           # Membri del team
├── deliverables.md   # Risultati e download
└── about.md          # Pagina custom (opzionale)
```

<!--
Ora vediamo come creare e gestire le pagine del sito Jekyll. Le pagine sono nella directory _pages e ogni file Markdown corrisponde a una pagina del sito finale. Il template include quattro pagine essenziali: index.md per la homepage, project.md per la descrizione del progetto, team.md per le informazioni del team e deliverables.md per risultati e download. Potete anche creare pagine personalizzate aggiuntive come about.md per informazioni extra su progetto o metodologia.
-->

---

# Passo 7: Creare e gestire le pagine

## Creare una nuova pagina
1. **Crea file**: aggiungi un file `.md` nella directory `_pages/`
2. **Front Matter**: aggiungi header YAML con metadati
3. **Contenuto**: scrivi in formato Markdown
4. **URL**: il nome file diventa URL della pagina


<!--
Per creare una nuova pagina, aggiungete semplicemente un file .md nella directory _pages. Il nome file diventa il path dell'URL: ad esempio, creando about.md la pagina sara disponibile su your-site-url/about/. Ogni pagina deve iniziare con il front matter, cioe metadati racchiusi tra triple linee. Qui inserite layout, title, subtitle e altre impostazioni specifiche. Il contenuto e scritto in Markdown, semplice da leggere e scrivere. Jekyll processa automaticamente questi file e li converte in HTML per il sito.
-->

---

# Passo 8: Configurazione Front Matter

## Front Matter base
```yaml
---
layout: default
title: "Titolo Pagina"
subtitle: "Sottotitolo Pagina"
header_type: hero
header_img: assets/images/header.png
vega: true  # Abilita i grafici
---
```

<!--
Il front matter e un concetto cruciale in Jekyll da comprendere bene. E la sezione metadati all'inizio di ogni file pagina, racchiusa tra triple linee. Consideratela come il pannello impostazioni della singola pagina. Il layout determina quale template HTML usare: "default" e la scelta piu comune. Title e subtitle compaiono in cima alla pagina e nelle tab del browser. header_type controlla lo stile visuale dell'header. header_img permette di specificare un'immagine di sfondo per l'header. Se usate grafici nella pagina, impostate "vega: true" per abilitarli. Queste impostazioni lavorano insieme per definire look and feel di ogni pagina.
-->

---

<!--
Avete diverse opzioni per i tipi di header, ciascuna con un impatto visivo differente. Ad esempio, il tipo "hero" crea un header full-width con immagine di sfondo, perfetto per una prima impressione forte. Il tipo "base" e l'header standard, adatto alla maggior parte delle pagine contenuto. Il tipo "splash" crea un header full-screen piu scenografico, ottimo per landing page o introduzioni di sezione. Scegliete il tipo di header in base al contenuto e all'obiettivo della pagina.
-->

# Passo 8: Configurazione Front Matter

## Tipi di header
- **hero**: header full-width con immagine di sfondo
- **base**: header standard
- **post**: header in stile blog
- **image**: header focalizzato sull'immagine
- **splash**: header full-screen ad alto impatto

---


# Passo 9: Creazione contenuti con Markdown

<div class="columns-2">
<div>

## Fondamenti Markdown
```markdown
# Titolo 1
## Titolo 2

**Testo in grassetto**
*Testo in corsivo*

- Elenco puntato
- Un altro elemento

[Testo link](https://example.com)
```

</div>
<div>

## Styling avanzato
```markdown
Questo è un paragrafo evidenziato.
{: .lead}

Questo testo appare in verde.
{: .green}
```
</div>
</div>


<!--
Impariamo ora a creare contenuti con Markdown. Markdown e un linguaggio di markup leggero, semplice da apprendere e usare. Per i titoli usate il simbolo cancelletto: un # per titolo principale, due ## per sottotitoli e cosi via. Per enfasi, usate doppio asterisco per grassetto e singolo asterisco per corsivo. Le liste sono immediate: trattini per elenchi puntati e numeri per liste ordinate. I link si creano con parentesi quadre per il testo e tonde per l'URL. Il template include anche opzioni di styling avanzato. Potete aggiungere {: .lead} dopo un paragrafo per evidenziarlo, oppure {: .green} per mostrare testo in verde. Queste classi aiutano a creare contenuti visivamente efficaci e a mettere in risalto le informazioni importanti. Ricordate che Markdown viene convertito in HTML, quindi potete usare anche tag HTML quando servono formattazioni piu complesse.
-->

---


# Passo 10: Aggiungere immagini

## Gestione immagini
- **Posizione**: salva le immagini in `assets/images/`
- **Sintassi Markdown**: `![Testo alt](assets/images/image.jpg)`
- **Tag HTML**: `<img src="assets/images/image.jpg" alt="Descrizione">`

<!--
Le immagini sono una parte importante di qualsiasi sito, e Jekyll ne semplifica la gestione. Tutte le immagini dovrebbero essere salvate nella directory assets/images/ per mantenere l'organizzazione. Potete aggiungere immagini con la sintassi Markdown standard (punto esclamativo, testo alt tra parentesi quadre, path tra parentesi tonde). In alternativa potete usare il tag HTML img per un controllo maggiore sullo styling. Assicuratevi che le immagini siano ottimizzate per il web, cosi da garantire tempi di caricamento rapidi.
-->

---


## Gallerie di immagini
```markdown
<!-- Salva le immagini in assets/images/gallery_name/ -->
{% include_cached snippets/masonry.html internal="gallery_name" %}
```

## Configurazione gallery
```yaml
# Nel file _config.yml
defaults:
  - scope:
      path: "assets/images/gallery_name"
    values:
      image_col: gallery_name
```

<!--
Il template include anche una funzionalita gallery per mostrare piu immagini in un layout ordinato. Per creare una gallery, salvate le immagini in una sottocartella come assets/images/gallery_name/ e poi usate l'include mostrato nella slide. Dovrete configurare la gallery in _config.yml aggiungendo il path della directory nella sezione defaults. Questo crea una gallery responsive in stile masonry, professionale e adatta a tutti i dispositivi. La gallery si adatta automaticamente alle diverse dimensioni dello schermo e offre un modo pulito per presentare immagini legate al progetto.
-->

---

# Passo 11: Embedding dei video

## Integrazione YouTube
```html
<!-- Shortcode video -->
{% include video id="VIDEO_ID" provider="youtube" %}
```

## Provider video
- **YouTube**: scelta piu comune
- **Vimeo**: video professionali
- **Dailymotion**: piattaforma alternativa


<!--
I contenuti video possono valorizzare molto la presentazione del progetto, e Jekyll rende semplice l'embed. Il template include supporto nativo ai video YouTube tramite shortcode. Basta usare l'include con l'ID del video preso dall'URL YouTube e indicare "youtube" come provider. Il template supporta anche altre piattaforme come Vimeo: e sufficiente cambiare il nome del provider. Il vantaggio di questo sistema e che e completamente responsive: i video si adattano automaticamente a schermi e dispositivi diversi. In questo modo i contenuti restano efficaci su desktop, tablet e smartphone.
-->

---

# Passo 12: Aggiungere icone ed elementi visivi

## Icone Font Awesome
```html
<i class="fa-solid fa-pen-nib"></i> Testo con icona
<i class="fa-solid fa-code"></i> Icona codice
<i class="fa-solid fa-chart-bar"></i> Icona grafico
```

<div class="columns-2">
<div>

## Risorse icone
- **Font Awesome**: [fontawesome.com](https://fontawesome.com/search)
- **Varieta**: migliaia di icone gratuite
- **Categorie**: tecniche, social, business, ecc.

</div>
<div>

## Suggerimenti d'uso
- Usa le icone per migliorare la leggibilita
- Mantieni coerenza nello stile delle icone
- Non abusarne: meno e meglio

</div>
</div>

<!--
Icone ed elementi visivi possono rendere il sito piu coinvolgente e facile da navigare. Il template include Font Awesome, che offre migliaia di icone di alta qualita. Per usare un'icona basta inserire il codice HTML con la classe corretta. Ad esempio, fa-solid fa-pen-nib crea un'icona penna, fa-solid fa-code un'icona codice, fa-solid fa-chart-bar un'icona grafico. La libreria completa e disponibile su fontawesome.com/search. Le icone sono utili per evidenziare sezioni, creare pause visive nel testo e rendere la navigazione piu intuitiva. Quando usate le icone, mantenete coerenza di stile e non eccedete: devono arricchire il contenuto, non distrarre.
-->

---

# Passo 13: Creare modal interattivi

<div class="columns-2">
<div>

```html
<!-- Pulsante trigger -->
<button type="button" class="btn btn-primary"
        data-toggle="modal" data-target="#myModal">
    Apri Modal
</button>
```

</div>
<div>

```html

<!-- Struttura modal -->
<div class="modal fade" id="myModal" tabindex="-1">
  <div class="modal-dialog modal-xl modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Titolo Modal</h5>
        <button type="button" class="btn-close"
                data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        Contenuto del modal...
      </div>
    </div>
  </div>
</div>
```

</div>
</div>

<!--
I modali sono finestre pop-up che mostrano contenuti aggiuntivi senza lasciare la pagina corrente. Sono perfetti per informazioni di dettaglio, immagini grandi o contenuti tecnici senza appesantire la pagina principale. Il template usa il componente modal di Bootstrap, che fornisce un sistema pulito e responsive. Per creare un modal servono due parti: un pulsante trigger e la struttura del modal. Il trigger include attributi data-toggle e data-target che indicano quale modal aprire. La struttura del modal include un header con titolo e pulsante di chiusura, un body per il contenuto e un eventuale footer. Potete personalizzare la dimensione con classi come modal-xl (extra large), modal-lg (large), modal-sm (small). La classe modal-dialog-centered centra verticalmente il modal nella pagina.
-->

---

<!--
La data visualization e una parte cruciale di molti progetti Big Data, e il template include un ottimo supporto per grafici interattivi con Vega-Altair. E una combinazione potente che permette di creare visualizzazioni professionali direttamente nel sito. Il processo prevede diversi passaggi. Prima create il grafico in Python con Altair, ricordando di impostare width='container' per avere un layout responsive. Poi salvate il grafico in formato JSON e mettetelo in assets/charts/. Nel front matter della pagina dovete includere 'vega: true' per abilitare la funzionalita. Infine incorporate il grafico usando lo shortcode vegachart con il path del file JSON.
-->

# Passo 14: Aggiungere data visualization (1/3)

## Integrazione grafici (Vega-Altair)
1. **Crea il grafico**: genera JSON con Python/Altair
2. **Salva il file**: inseriscilo in `assets/charts/`
3. **Abilita Vega**: aggiungi `vega: true` nel front matter
4. **Embed grafico**: usa lo shortcode nella pagina

---

<!--
Ecco come implementare la creazione del grafico in Python. Userete la libreria Altair, una libreria molto potente per visualizzazione statistica. In questo esempio creiamo un semplice bar chart che codifica dati del dataset. Il punto chiave e impostare width='container': in questo modo il grafico e responsive e si adatta a dimensioni schermo diverse. L'altezza e impostata a un valore fisso, ad esempio 300 pixel, ma potete adattarla alle vostre esigenze. Una volta creato il grafico, salvatelo in JSON con il metodo save. Assicuratevi che il file sia in assets/charts/ del sito Jekyll, cosi sara accessibile dal sito.
-->

# Passo 14: Aggiungere data visualization (2/3)

## Implementazione del grafico
```python
# Codice Python per generare il grafico
import altair as alt

chart = alt.Chart(data).mark_bar().encode(
    x='column_a:N',
    y='column_b:Q'
).properties(width='container', height=300)

chart.save('assets/charts/my_chart.json')
```

---

<!--
Infine, ecco come incorporare il grafico nella pagina Jekyll. Userete lo shortcode vegachart con il parametro schema-url che punta al file JSON. Notate che il path include il nome del repository: ricordate di sostituire 'repo-name' con il vostro nome repository reale. Il wrapper div con altezza esplicita garantisce la resa corretta del grafico e le proporzioni. Gli attributi style dell'elemento vegachart lo fanno espandere all'intero container. I grafici risultanti sono interattivi, responsive e integrati in modo coerente nel design del sito. E molto utile per mostrare risultati di ricerca, analisi dati e output di progetto in modo coinvolgente.
-->

# Passo 14: Aggiungere data visualization (3/3)

## Embedding del grafico in Jekyll

```html
<!-- Nella tua pagina -->
<div style="height: 300px">
  <vegachart schema-url="/repo-name/assets/charts/my_chart.json"
            style="width: 100%; height: 100%"></vegachart>
</div>
```

---

# Passo 15: Personalizzare la navigazione

<div class="columns-2">
<div>

```yaml
# Nel file _config.yml
navbar:
  style: dual
  brand:
    title: "Titolo del Progetto"
    img: "./assets/images/logo.png"
    url: /
  nav:
    - title: Guida
      url: /guide.html
    - title: Progetto
      url: /project.html
   ...
```
</div>
<div>

```yml
    ...
 -  title: Team
    url: /team.html
    - title: Risorse
    child:
    - title: Documentazione
        url: /docs.html
    - title: Download
        url: /downloads.html
```
</div>
</div>

## Best practice per la navigazione
- **Struttura logica**: raggruppa pagine correlate
- **Etichette chiare**: usa titoli descrittivi
- **Mobile responsive**: testa su schermi differenti

<!--
La navigazione e la spina dorsale di ogni sito, e personalizzarla bene e essenziale per la user experience. Il menu di navigazione si configura in _config.yml nella sezione navbar. La struttura include una sezione brand con titolo del sito e logo, e una sezione nav con le voci di menu. Ogni voce ha un title e un URL. Potete creare dropdown submenu usando la proprieta 'child', che contiene la lista dei sotto-elementi. Questo e utile per organizzare pagine o sezioni correlate. Quando configurate la navigazione, mantenetela logica e intuitiva: raggruppate contenuti correlati e usate etichette descrittive. Testate la navigazione su schermi diversi, dato che il template e responsive e si adatta al mobile. Ricordate di non modificare i parametri style:dual e img.
-->

---

<!--
L'aspetto visuale del sito puo essere personalizzato in modo ampio tramite scelta del tema e personalizzazione dei colori. Il template include diversi temi predefiniti tra cui scegliere. Per cambiare tema, modifica la proprieta 'skin' nella sezione chulapa-skin di _config.yml. Alcune opzioni diffuse includono 'graymor' per un tema grigio professionale, 'minty' per un look verde fresco, 'lux' per un tema scuro elegante, 'journal' per uno stile pulito e leggibile e 'academia' per un aspetto accademico. Ogni tema include palette colori e tipografia gia bilanciate. Scegliete il tema in base al tono del progetto e alle aspettative del pubblico.
-->

# Passo 16: Personalizzazione del tema

## Scegliere un tema
```yaml
# Nel file _config.yml
chulapa-skin:
  skin: "graymor"  # oppure minty, lux, journal, ecc.
```

## Temi disponibili
- **graymor**: tema grigio professionale
- **minty**: tema verde fresco
- **lux**: tema scuro elegante
- ...

---

<!--
Se volete spingere la personalizzazione oltre i temi predefiniti, potete sovrascrivere variabili colore specifiche nella sezione 'vars'. Per esempio potete cambiare il colore primario in linea con il branding del vostro ateneo o impostare un colore di sfondo custom. La variabile primary-color influenza pulsanti, link e altri elementi interattivi, mentre body-bg controlla il colore di sfondo delle pagine. Questa flessibilita vi consente di ottenere un look distintivo mantenendo la qualita professionale del template. Scegliete sempre colori con buon contrasto e alta leggibilita.
-->

# Passo 16: Personalizzazione del tema

## Colori custom
```yaml
chulapa-skin:
  vars:
    primary-color: "#ff0000"
    body-bg: "#fbf1ed"
```

---

<!--
La tipografia ha un ruolo fondamentale in aspetto e leggibilita del sito. Il template permette di integrare facilmente font custom da Google Fonts. Per aggiungere un font, andate su fonts.google.com e sceglietene uno adatto. Copiate l'URL di import e aggiungetelo nella sezione googlefonts di _config.yml. Poi, per applicarlo all'intero sito, inserite il nome del font nella sezione vars, ad esempio in headings-font-family per i titoli o in altre variabili tipografiche. L'esempio mostra l'integrazione di Lekton, un buon font monospace per contenuti tecnici. Scegliete font leggibili e coerenti con contenuto e target del progetto.
-->

# Passo 17: Aggiungere font custom

## Integrazione Google Fonts
```yaml
# Nel file _config.yml
googlefonts:
  - url: "https://fonts.googleapis.com/css2?family=Lekton:ital,wght@0,400;0,700;1,400&display=swap"

chulapa-skin:
  vars:
    headings-font-family: "Lekton"
```

---

<!--
Potete anche creare classi CSS personalizzate per usare i font in modo piu mirato. Nel file assets/css/custom.scss potete definire classi come nell'esempio, cosi da applicare font specifici a singoli elementi tramite classi HTML. Questo vi offre controllo granulare sulla tipografia mantenendo la coerenza complessiva del design. La classe custom-font applica il peso regular, mentre custom-font-bold applica il bold. Potete poi usare queste classi nei contenuti HTML per paragrafo, titoli o altri elementi dove volete applicare la tipografia personalizzata.
-->

# Passo 17: Aggiungere font custom in locale

## Classi CSS personalizzate
```scss
// In assets/css/custom.scss
.custom-font {
  font-family: 'Lekton', monospace;
  font-weight: 400;
}

.custom-font-bold {
  font-family: 'Lekton', monospace;
  font-weight: 700;
}
```

---

<!--
Le tecniche di layout avanzate possono aiutarvi a creare pagine piu efficaci e visivamente interessanti. Il template include diverse funzionalita utili. La classe full-width-wrapper permette di creare sezioni che occupano l'intera larghezza della finestra browser, particolarmente efficace per hero image o separatori di sezione. Questo rompe il vincolo del container standard e puo creare un forte impatto visivo. Usate questa tecnica con moderazione per massimizzare l'effetto: funziona al meglio con immagini grandi, separatori o sezioni ad alto valore comunicativo. La classe full-width-image garantisce che le immagini in queste sezioni siano renderizzate correttamente mantenendo le proporzioni.
-->

# Passo 18: Tecniche di layout avanzate

## Sezioni full-width
```html
<div class="full-width-wrapper">
  <img src="assets/images/wide-image.jpg"
       alt="Immagine a larghezza completa"
       class="full-width-image">
</div>
```

---

<!--
La gestione delle informazioni dei membri del team e semplificata dal sistema integrato nel template. Le informazioni sono archiviate nel file _data/members.yml, che usa formato YAML per definire i dettagli di ciascun membro. Per ogni membro potete specificare nome e pagina personale (o account GitHub personale). Una volta aggiunti i membri in questo file, il footer genera automaticamente una sezione team con la lista completa.
-->

# Passo 19: Gestione membri del team

## Configurazione team
```yaml
# In _data/members.yml
- name: Nome Cognome
  github: https://kdd.isti.cnr.it/people/student-1
  role: student
```

---

<!--
Prima della consegna del sito, e importante passare una checklist finale per verificare che tutto funzioni. Prima, controllate che il nome del repository segua il formato corretto e che il baseurl in _config.yml corrisponda esattamente. Verificate che tutte le pagine abbiano un front matter corretto con metadati necessari. Assicuratevi che la navigazione sia aggiornata e funzionante, con link corretti. Verificate che le informazioni del team in members.yml siano complete e accurate. Controllate che asset multimediali come immagini e video siano nelle cartelle corrette e visualizzati bene. Infine, confermate che il deployment GitHub Pages sia riuscito verificando che il sito sia raggiungibile all'URL previsto.
-->


# Passo 20: Checklist finale e best practice

## Checklist pre-lancio
- ✅ **Nome repository**: formato corretto (gX-2026-website)
- ✅ **Baseurl**: corrisponde al nome repository
- ✅ **Front Matter**: tutte le pagine hanno header corretti
- ✅ **Navigazione**: aggiornata e funzionante
- ✅ **Info team**: informazioni membri complete
- ✅ **Multimedia**: immagini e video posizionati correttamente
- ✅ **GitHub Pages**: deployment completato con successo

---

# Passo 20: Checklist finale e best practice

## Garanzia di qualita
- **Cross-browser testing**: Chrome, Firefox, Safari
- **Mobile responsive**: test su dimensioni schermo diverse
- **Load speed**: ottimizza immagini e asset
- **Accessibility**: testo alt per immagini, heading corretti
- **SEO**: meta description, page title

---

# Grazie!

## Domande?
- Rivedi la documentazione della guida
- Controlla il repository GitHub

<br>

**Iniziamo a costruire!**