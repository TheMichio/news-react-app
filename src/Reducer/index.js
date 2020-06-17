import {
  GET_KEYWORD_NEWS,
  GET_KEYWORD_DONE,
  GET_KEYWORD_ERROR,
} from "../Actions";

const initialState = {
  loading: false,
  news: [
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Mike Butcher",
      title:
        "Spectrm raises $3M Series A from Runa Capital for its conversational marketing platform",
      description:
        "In the ‘Age of Corona’ – as some like to call it, the roboticization of industry and business has been super-charged by the pandemic. So while companies using messaging platforms to drive customers towards purchases was always on a long term trend, the sheer …",
      url:
        "http://techcrunch.com/2020/05/26/spectrm-raises-3m-series-a-from-runa-capital-for-its-conversational-marketing-platform/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2020/05/Spectrm-UnderstandIntent-1.0-woProfileCard-1x-v2.png?w=444",
      publishedAt: "2020-05-26T15:15:09Z",
      content:
        "In the Age of Corona – as some like to call it, the roboticization of industry and business has been super-charged by the pandemic. So while companies using messaging platforms to drive customers tow… [+1740 chars]",
    },
    {
      source: {
        id: null,
        name: "Lifehacker.com",
      },
      author: "Emily Price",
      title: "What to Watch Tonight, May 20, 2020",
      description:
        "Looking for something to watch tonight? We’ve got a few suggestions!Read more...",
      url:
        "https://lifehacker.com/what-to-watch-tonight-may-20-2020-1843552552",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/s6kwvtg9q6p49noh9e6u.jpg",
      publishedAt: "2020-05-20T19:00:00Z",
      content:
        "Experience Feinsteins/54 Belows staff show\r\nNYC supper club Feinsteins/54 Below is streaming a staff showfrom 2018 tonight that includes performances by the clubs workers, including its servers and c… [+423 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Brian Heater",
      title:
        "Tokyo’s Haneda Airport adopts WHILL’s autonomous mobility devices to help practice social distancing",
      description:
        "Among countless other unexpected effects, COVID-19 has accelerated the adoption of all manner of new technologies, as people look for ways to reduce transmission of the virus. Yokohama, Japan-based WHILL has already seen a bit of traction for its autonomous m…",
      url:
        "http://techcrunch.com/2020/06/08/tokyos-haneda-airport-adopts-whills-autonomous-mobility-devices-to-help-practice-social-distancing/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2020/06/20191102-Haneda-sample-14-small.jpg?w=600",
      publishedAt: "2020-06-08T14:33:41Z",
      content:
        "Among countless other unexpected effects, COVID-19 has accelerated the adoption of all manner of new technologies, as people look for ways to reduce transmission of the virus. Yokohama, Japan-based W… [+1511 chars]",
    },
    {
      source: {
        id: null,
        name: "Theguardian.comeducation",
      },
      author: "Abby Young-Powell",
      title:
        "'I'm worried I'm not going to get a job': meet the corona class of 2020",
      description:
        "Universities are working hard to support their graduates into a difficult labour market – but students’ anxieties remainMaisie Marston, 20, will graduate this year into the worst recession in centuries. “I’ve been job hunting and it’s difficult to find things…",
      url:
        "https://amp.theguardian.comeducation/2020/jun/01/im-worried-im-not-going-to-get-a-job-meet-the-corona-class-of-2020",
      urlToImage:
        "https://i.guim.co.uk/img/media/9ea1e980b683c4dfc18eb49bbbf6a3639cf461fa/0_416_6240_3744/master/6240.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=468b39f6e97af96963197476114c3d80",
      publishedAt: "2020-06-01T06:00:35Z",
      content:
        "Maisie Marston, 20, will graduate this year into the worst recession in centuries. Ive been job hunting and its difficult to find things, she says. Theres a lot of uncertainty. As a result of the pan… [+6445 chars]",
    },
    {
      source: {
        id: "the-next-web",
        name: "The Next Web",
      },
      author: "Satoshi Nakaboto",
      title:
        "Satoshi Nakaboto: ‘Bitcoin hits $10,000 again after corona freefall’",
      description:
        "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Ada Lovelace used to say: Yippee! Bitcoin …",
      url:
        "https://thenextweb.com/hardfork/2020/06/02/satoshi-nakaboto-bitcoin-hits-10000-again-after-corona-freefall/",
      urlToImage:
        "https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864",
      publishedAt: "2020-06-02T09:16:34Z",
      content:
        "Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in … [+2940 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "George Dvorsky",
      title:
        "The Solar Orbiter Has Entered a Thrilling New Phase of Its Journey to the Sun",
      description:
        "The Solar Orbiter project, a collaboration between the European Space Agency and NASA, has begun a critical new stage of the mission after the probe’s first close encounter with the Sun.Read more...",
      url:
        "https://gizmodo.com/the-solar-orbiter-has-entered-a-thrilling-new-phase-of-1844038597",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/q15qxcd7mnv5vkwh6jqa.gif",
      publishedAt: "2020-06-15T16:14:00Z",
      content:
        "Artists impression of the Solar Orbiter. \r\nGif: ESA/ATG medialab/Gizmodo\r\nThe Solar Orbiter project, a collaboration between the European Space Agency and NASA, has begun a critical new stage of the … [+3702 chars]",
    },
    {
      source: {
        id: null,
        name: "NPR",
      },
      author: "Daniel Estrin",
      title:
        "'Everybody's Getting Along Here': How 'Hotel Corona' United Israelis And Palestinians",
      description:
        "A Jerusalem hotel hosted 180 quarantined COVID-19 patients from different backgrounds. Despite concerns they might clash, some became friends. The biggest test of togetherness came during Passover.",
      url:
        "https://www.npr.org/2020/06/09/860182244/everybodys-getting-along-here-how-hotel-corona-united-israelis-and-palestinians",
      urlToImage:
        "https://media.npr.org/assets/img/2020/06/05/photo_2020-05-07-11.40.32_wide-de928d253976c21ed4ce8b2962e3c0bc9856a7c5.jpg?s=1400",
      publishedAt: "2020-06-09T14:42:00Z",
      content:
        'Aysha Abu Shhab (right) and Noam Shuster-Eliassi (second from right) with other COVID-19 patients quarantined by the Israeli military at the Dan Jerusalem Hotel, which became known as "Hotel Corona."… [+9402 chars]',
    },
    {
      source: {
        id: null,
        name: "Digital-photography-school.com",
      },
      author: "Herb Paynter",
      title:
        "The New Corona Photography Workflow- Shoot Privately but Share and Participate Publicly",
      description:
        "The post The New Corona Photography Workflow- Shoot Privately but Share and Participate Publicly appeared first on Digital Photography School. It was authored by Herb Paynter.\nIn the current climate, this corona photography workflow is a great way to share yo…",
      url: "https://digital-photography-school.com/?p=189099",
      urlToImage:
        "https://i1.wp.com/digital-photography-school.com/wp-content/uploads/2020/05/coronavirus.jpg?fit=1500%2C940&ssl=1",
      publishedAt: "2020-05-27T12:30:00Z",
      content:
        "A Post By: Herb Paynter\r\nThe bad medical virus\r\nWhile the planet seeks a solution to the pandemic problem, may I suggest we use this opportunity to participate in an innovative photographic exercise?… [+8701 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Lars Nicolaysen, dpa",
      title: "Schub für die Digitalisierung in Japan",
      description:
        "Die Corona-Krise hat die Nummer Drei der Weltwirtschaft in eine tiefere Rezession gerissen. Trotzdem hat die Corona-Krise auch eine positive Wirkung.",
      url:
        "https://www.heise.de/newsticker/meldung/Schub-fuer-die-Digitalisierung-in-Japan-4722867.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/2/8/9/5/9/6/9/shutterstock_1411294787-9f38378f7f5ed83f.jpeg",
      publishedAt: "2020-05-18T06:01:00Z",
      content:
        "Japans Wirtschaft steht wegen der Corona-Krise vor dem schlimmsten Einbruch der Nachkriegszeit. Die vor Deutschland drittgrößte Volkswirtschaft der Welt schrumpfte bereits im ersten Quartal dieses Ja… [+4827 chars]",
    },
    {
      source: {
        id: "spiegel-online",
        name: "Spiegel Online",
      },
      author: "Markus Feldenkirchen",
      title: "Kolumne: Wir Corona-Spießer",
      description:
        "Wenn ich mich dieser Tage umsehe auf den Straßen, in den Geschäften, den Restaurants, frage ich mich, ob ich vielleicht etwas verpasst habe. Ist Corona schon vorbei?",
      url:
        "https://www.spiegel.de/politik/deutschland/wir-corona-spiesser-a-00000000-0002-0001-0000-000171037295",
      urlToImage:
        "https://cdn.prod.www.spiegel.de/images/097aea0d-ddea-40e3-b025-4a5f4d82c97f_w1280_r1.77_fpx39.45_fpy49.98.jpg",
      publishedAt: "2020-05-26T07:08:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "dpa",
      title: "Corona-Pandemie: Fahrradabsatz normalisiert sich",
      description:
        "Der Verkauf von Fahrrädern läuft schneller wieder an als befürchtet. Offenbar gibt es einen gewissen Nachhol-Effekt.",
      url:
        "https://www.heise.de/news/Corona-Pandemie-Fahrradabsatz-normalisiert-sich-4724182.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/2/8/9/6/9/2/7/eRad-Schnellweg_in_Goettingen_-70438a1f6530df6b.jpeg",
      publishedAt: "2020-05-19T09:10:00Z",
      content:
        "Die Fahrradbranche lässt die Krise rund um die Corona-Pandemie bereits weitgehend hinter sich. Bei Verbandsumfragen zeigten sich zwei Drittel der Händler und 69 Prozent der Werkstätten und anderen Di… [+1227 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Volker Briegleb",
      title: "Ebay: Corona belebt das Geschäft",
      description:
        "Die Onlinehandelsplattform profitiert von einem weltweit gestiegenen Handelsvolumen und hebt ihre Prognose an – sehr zur Freude der Anleger.",
      url:
        "https://www.heise.de/news/Ebay-Corona-belebt-das-Geschaeft-4774950.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/2/9/0/6/2/0/1/shutterstock_1501773125-134ac2c6901e5d96.jpeg",
      publishedAt: "2020-06-04T15:36:00Z",
      content:
        "Bei Ebay laufen die Geschäfte in der Corona-Pandemie wesentlich besser als zuletzt erwartet. Die Online-Handelsplattform hat ihr Prognose für das laufende zweite Quartal deutlich nach oben korrigiert… [+2051 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: null,
      title:
        "'I hope your son gets coronavirus' - Deeney reveals hurtful comments",
      description:
        "Watford captain Troy Deeney says people told him they wished his baby son would contract coronavirus after he chose not to return to training.",
      url: "https://www.bbc.co.uk/sport/football/52831522",
      urlToImage:
        "https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/38C5/production/_112533541_deeney.png",
      publishedAt: "2020-05-28T08:28:22Z",
      content:
        "Troy Deeney has scored six goals in the Premier League this season\r\nWatford captain Troy Deeney says people told him they wished his baby son would contract coronavirus after he chose not to return t… [+1550 chars]",
    },
    {
      source: {
        id: "spiegel-online",
        name: "Spiegel Online",
      },
      author: "Markus Becker",
      title: "Corona: Brüssel plant die Verkehrsrevolution",
      description:
        "Wegen der Coronakrise teilt Belgiens Hauptstadt den Verkehrsraum neu auf. Die City ist eine verkehrsberuhigte Zone, demnächst gilt in der ganzen Stadt Tempo 30, dazu entstehen Radwege. Andere Großstädte könnten nachziehen, auch in Deutschland.",
      url:
        "https://www.spiegel.de/auto/corona-bruessel-plant-die-verkehrsrevolution-a-216f834a-4b32-404b-b539-c87e12553ed8",
      urlToImage:
        "https://cdn.prod.www.spiegel.de/images/22be1b25-5a38-413d-9bb0-ae6d134c8a81_w1280_r1.77_fpx54.73_fpy49.98.jpg",
      publishedAt: "2020-05-24T09:55:38Z",
      content: null,
    },
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: "USA TODAY, Claire Thornton, USA TODAY",
      title: "Tell us your coronavirus story: What does your summer look like?",
      description:
        "USA TODAY and Corona Diaries are gathering personal stories about how the pandemic is changing people's summer, especially those caring for family.",
      url:
        "https://www.usatoday.com/story/news/2020/06/11/coronavirus-summer-how-covid-19-changing-your-familys-plans/5329219002/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2020/05/22/USAT/7a7526c6-3cae-4eba-b1e5-143f1f320ed1-Beach_rd330.JPG?crop=5567,3132,x0,y283&width=3200&height=1680&fit=bounds",
      publishedAt: "2020-06-11T08:00:07Z",
      content:
        "Kamryn Garves, 4, curiously looks up at the no-contact infrared thermometer as teacher Denise Mueller checks his temperature May 13. It's a daily ritual during the coronavirus pandemic before his gra… [+1343 chars]",
    },
    {
      source: {
        id: "spiegel-online",
        name: "Spiegel Online",
      },
      author: "Anne Backhaus",
      title: "Tansania versteckt seine Corona-Toten",
      description:
        "In Tansania hat Präsident Magufuli das Coronavirus für besiegt erklärt. Gesundheitsexpertinnen werfen ihm Vertuschung vor. Tote sollen heimlich nachts begraben worden sein.",
      url:
        "https://www.spiegel.de/politik/ausland/tansania-versteckt-seine-corona-toten-a-1f03c58c-33e3-4189-9f79-f5dc936c7159",
      urlToImage:
        "https://cdn.prod.www.spiegel.de/images/b5c0bb97-1e7f-4544-828c-0c84b11cccd8_w1280_r1.77_fpx50_fpy73.jpg",
      publishedAt: "2020-06-13T18:45:56Z",
      content: null,
    },
    {
      source: {
        id: "spiegel-online",
        name: "Spiegel Online",
      },
      author: "Martin Hesse",
      title: "Corona-Krise: Streit um Betriebsschließungspolicen",
      description:
        "Weil Versicherungskonzerne nur einen Bruchteil der Corona-Schäden ersetzen, wehren sich Gastronomen mit einem Schmähvideo und vielen Klagen. Ein erstes Gericht zerpflückt die Argumente von Allianz und Co.",
      url:
        "https://www.spiegel.de/wirtschaft/service/corona-krise-streit-um-betriebsschliessungspolicen-a-bedcf693-445c-4807-a09a-f532d9191de3",
      urlToImage:
        "https://cdn.prod.www.spiegel.de/images/4f6f8603-5982-4271-86da-a9a3308aa073_w1280_r1.77_fpx47.91_fpy45.jpg",
      publishedAt: "2020-05-19T10:19:49Z",
      content: null,
    },
    {
      source: {
        id: "spiegel-online",
        name: "Spiegel Online",
      },
      author:
        "Marian Blasberg, Georg Fahrion, Susanne Koelbl, Katrin Kuntz, Raniah Salloum",
      title: "Corona: Pandemie stoppt weltweit Demonstrationen",
      description:
        "Proteste in Hongkong, Gelbwesten auf der Straße in Frankreich, Unruhen in Lateinamerika - und dann kam Corona. Aber aufgeben wollen die Demonstranten nirgendwo.",
      url:
        "https://www.spiegel.de/politik/ausland/corona-pandemie-stoppt-weltweit-demonstrationen-a-3c5c5fb3-676b-4826-a717-80eef93dd3f9",
      urlToImage:
        "https://cdn.prod.www.spiegel.de/images/692613a9-7a4b-48e9-bf9b-a1212cfa7b2c_w1280_r1.77_fpx50_fpy55.01.jpg",
      publishedAt: "2020-05-27T08:04:58Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Hipertextual",
      },
      author: "Luis Miranda",
      title:
        "WhatsApp activa un chatbot en español para combatir los bulos sobre el coronavirus",
      description:
        "WhatsApp activó la versión en español del chatbot de la Red Internacional de Verificación de Datos que combate los bulos sobre el coronavirus.\r\n\nWhatsApp y la Red Internacional de Verificación de Datos (IFCN) anunciaron que ya está disponible en español el bo…",
      url:
        "https://hipertextual.com/2020/05/whatsapp-chatbot-coronavirus-espanol-mexico",
      urlToImage:
        "https://hipertextual.com/files/2020/02/hipertextual-que-usar-whatsapp-es-peligroso-2020817542.jpeg",
      publishedAt: "2020-05-26T20:00:32Z",
      content:
        "WhatsApp y la Red Internacional de Verificación de Datos (IFCN) anunciaron que ya está disponible en español el bot que ayuda a reducir los bulos del coronavirus. Tras haberse liberado en inglés a pr… [+2195 chars]",
    },
    {
      source: {
        id: "spiegel-online",
        name: "Spiegel Online",
      },
      author: "DER SPIEGEL",
      title:
        "Corona: Linken-Spitze geht auf Distanz zu sogenannten Hygienedemos",
      description:
        'Die Führung der Linkspartei distanziert sich von den umstrittenen Kundgebungen gegen die Corona-Maßnahmen. Verharmlosung oder Leugnung von Corona sei "rücksichtslos gegenüber Minderheiten und sozial Schwachen", sagte Parteichefin Katja Kipping in Berlin…',
      url:
        "https://www.spiegel.de/politik/deutschland/corona-linken-spitze-geht-auf-distanz-zu-sogenannten-hygienedemos-a-9a32079c-fa68-480c-989f-879531b36b25",
      urlToImage:
        "https://cdn.prod.www.spiegel.de/images/41780a32-65f8-4b6c-aa02-cd9eb660ab62_w1280_r1.77_fpx47.39_fpy44.98.jpg",
      publishedAt: "2020-05-18T14:56:33Z",
      content:
        'Die Führung der Linkspartei distanziert sich von den umstrittenen Kundgebungen gegen die Corona-Maßnahmen. Verharmlosung oder Leugnung von Corona sei "rücksichtslos gegenüber Minderheiten und sozial … [+1008 chars]',
    },
  ],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_KEYWORD_NEWS:
      return { ...state, loading: true };
    case GET_KEYWORD_DONE:
      return { ...state, loading: false, news: action.payload };
    case GET_KEYWORD_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
