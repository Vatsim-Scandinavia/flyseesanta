const firs = 
{
  EBBU: 'Brussels FIR',
  EDGG: 'Langen FIR',
  EDMM: 'München FIR',
  EDWW: 'Bremen FIR',
  EETT: 'Tallinn FIR',
  EFIN: 'Helsinki FIR',
  EGPX: 'Scottish FIR',
  EGTT: 'London FIR',
  EHAA: 'Amsterdam FIR',
  EISN: 'Shannon FIR',
  EKDK: 'Copenhagen FIR',
  ENOR: 'Polaris FIR',
  EPWW: 'Warszawa FIR',
  ESAA: 'Sweden FIR',
  EVRR: 'Riga FIR',
  EYVL: 'Vilnius FIR',
  LFFF: 'Paris FIR',
  LKAA: 'Praha FIR',
  LOVV: 'Wien FIR',
  LSAS: 'Switzerland FIR',
  UKBV: 'Kyiv FIR',
  ULLL: 'Sankt-Peterburg FIR',
  UMMV: 'Minsk FIR',
  UUWV: 'Moscow FIR'
}

const aerodromes = 
{
  EBBR: 'Brussels',
  EDDF: 'Frankfurt',
  EDDM: 'Munich',
  EDDB: 'Berlin Brandenburg',
  EDDH: 'Hamburg',
  EDDT: 'Berlin Tegel',
  EETN: 'Tallinn',
  EFHK: 'Helsinki-Vantaa',
  EFRO: 'Rovaniemi',
  EGAA: 'Belfast Aldergrove',
  EGPF: 'Glasgow',
  EGPH: 'Edinburgh',
  EGPK: 'Prestwick',
  EGBB: 'Birmingham',
  EGNX: 'East Midlands',
  EGCC: 'Manchester',
  EGGP: 'Liverpool',
  EGGD: 'Bristol',
  EINN: 'Shannon',
  EGGW: 'London Luton',
  EGKK: 'London Gatwick',
  EGLL: 'London Heathrow',
  EGNM: 'Leeds',
  EGNT: 'Newcastle',
  EGSS: 'London Stansted',
  EHAM: 'Amsterdam Schiphol',
  EIDW: 'Dublin',
  EKCH: 'Copenhagen',
  ENGM: 'Oslo Gardermoen',
  ENTC: 'Tromsø',
  ENBR: 'Bergen',
  ENVA: 'Trondheim',
  ENZV: 'Stavanger',
  EPGD: 'Gdansk',
  EPWA: 'Warsaw',
  ESGG: 'Göterborg',
  ESNQ: 'Kiruna',
  ESSA: 'Stockholm Arlanda',
  EVRA: 'Riga',
  EYVI: 'Vilnius',
  LFPG: 'Paris Charles de Gaulle',
  LKPR: 'Prague',
  LOWW: 'Vienna',
  LSGG: 'Geneva',
  LSZH: 'Zürich',
  UKBB: 'Kyiv',
  ULLI: 'St. Petersburg',
  UMMS: 'Minsk',
  UUWW: 'Moscow Vnukovo',
  UUDD: 'Moscow Domodedovo',
  UUEE: 'Moscow Sheremetyevo',
  NEGTTFIR: 'Northern EGTT FIR',
  SEGTTFIR: 'Southern EGTT FIR',
}

const routes = 
{
  LFFF: {
    LFPG: {
      EFRO: "NURMO UN874 VEKIN UN873 ADUTO N873 BAVTA DCT DETSO DCT PELIT DCT RESNA DCT EDAXA DCT ELBOG DCT BESLA DCT MISMO DCT NEMGU",
      ENTC: "JOIN AT/INCLUDE: NIGEX DCT BDO Z200 BARVI"
     },
    OTHER: {
      ENTC: "JOIN AT/INCLUDE: NIGEX DCT BDO Z200 BARVI",
      EFRO: "NURMO UN874 VEKIN UN873 ADUTO N873 BAVTA DCT DETSO DCT PELIT DCT RESNA DCT EDAXA DCT ELBOG DCT BESLA DCT MISMO DCT NEMGU"
     }
   },
  LSAS: {
    LSZH: {
      EFRO: "DEGES Z1 ETAGO DCT TIKNI N746 ROBEL DCT BANUB Z212 POKEN DCT TESPO DCT VSB DCT KOSKA DCT DIVEG DCT GODOB DCT NEPIX",
      ENTC: "JOIN AT/INCLUDE: NIGEX DCT BDO Z200 BARVI"
     },
    LSGG: {
      EFRO: "MOLUS N871 DITON T163 ZUE T125 ROMIR N851 VEDOK DCT LOKTA DCT TIKNI N746 ROBEL DCT BANUB Z212 POKEN DCT TESPO DCT VSB DCT KOSKA DCT DIVEG DCT GODOB DCT NEPIX",
      ENTC: "JOIN AT/INCLUDE: NIGEX DCT BDO Z200 BARVI"
     },
    OTHER: {
      EFRO: "BODAN Z1 ETAGO DCT TIKNI N746 ROBEL DCT BANUB Z212 POKEN DCT TESPO DCT VSB DCT KOSKA DCT DIVEG DCT GODOB DCT NEPIX",
      ENTC: "JOIN AT/INCLUDE: NIGEX DCT BDO Z200 BARVI"
     }
   },
  ULLL: {
    ULLI: {
      EFRO: "UTETA M60 ATLUM T561 LEDUN DCT ULTIR DCT TEVRU Y75 NEPIX"
     },
    OTHER: {
      EFRO: "LEDUN DCT ULTIR DCT TEVRU Y75 NEPIX"
     }
   },
  EKDK: {
    OTHER: {
      ENTC: "JOIN AT/INCLUDE: SOMUB DCT NIGEX DCT BDO Z200 BARVI",
      EFRO: "DCT DETSO DCT PELIT DCT RESNA DCT EDAXA DCT ELBOG DCT BESLA DCT MISMO DCT NEMGU"
     },
    EKCH: {
      ENTC: "VEDAR L997 RISMA DCT SABAK L997 LUNIP Z320 GIGNI DCT SOMUB DCT NIGEX DCT BDO Z200 BARVI",
      EFRO: "KEMAX T408 OTVEB DCT VSB DCT KOSKA DCT DIVEG DCT GODOB DCT NEPIX"
     }
   },
  EVRR: {
    EVRA: {
      EFRO: "SOKVA DCT DOBAN DCT TEVRU Y75 NEPIX"
     },
    OTHER: {
      EFRO: "SOKVA DCT DOBAN DCT TEVRU Y75 NEPIX"
     }
   },
  ESAA: {
    ESNQ: {
      EFRO: "VAGAS DCT BEGDO DCT BESLA DCT MISMO DCT NEMGU",
      ENTC: "RIXEM DCT MANKI"
     },
    ESGG: {
      ESNQ: "NEGIL M852 OGIRO DCT ETIPU DCT VAGAS",
      ENTC: "SABAK L997 LUNIP Z320 GIGNI DCT SOMUB DCT NIGEX DCT BDO Z200 BARVI",
      EFRO: "LABAN N873 DETSO DCT PELIT DCT RESNA DCT EDAXA DCT ELBOG DCT BESLA DCT MISMO DCT NEMGU"
     },
    OTHER: {
      EFRO: "DETSO DCT PELIT DCT RESNA DCT EDAXA DCT ELBOG DCT BESLA DCT MISMO DCT NEMGU ”or” TRS DCT RESNA DCT EDAXA DCT ELBOG DCT BESLA DCT MISMO DCT NEMGU ”or” VSB DCT KOSKA DCT DIVEG DCT GODOB DCT NEPIX"
     },
    ESSA: {
      EFRO: "TOVRI N851 RIKUM DCT DIVEG DCT GODOB DCT NEPIX",
      ESNQ: "RESNA DCT OSK DCT VAGAS",
      ENTC: "RESNA DCT OSK DCT RIXEM DCT MANKI"
     }
   },
  LKAA: {
    LKPR: {
      EFRO: "ARTUP P733 IPLIT B74 TIGNU P733 LATEG DCT DOBAN DCT TEVRU Y75 NEPIX"
     },
    OTHER: {
      EFRO: "TOMTI P733 IPLIT B74 TIGNU P733 LATEG DCT DOBAN DCT TEVRU Y75 NEPIX"
     }
   },
  EDMM: {
    EDDM: {
      EFRO: "ANKER Y104 MAMOR L132 AGNAV DCT SUPIL DCT KILNU DCT UNRIG DCT BODLA L132 DEMUR N746 GORPI DCT TESPO DCT VSB DCT KOSKA DCT DIVEG DCT GODOB DCT NEPIX",
      ENTC: "GIVMI Y101 ERNAS M726 LASTO M852 ALS Z731 SABAK L997 LUNIP Z320 GIGNI Z125 SOMUB NIGEX BDO Z200 BARVI"
     }
   },
  UMMV: {
    OTHER: {
      EFRO: "DUBIN DCT DOLAT DCT KEMET DCT DOBAN DCT TEVRU Y75 NEPIX"
     },
    UMMS: {
      EFRO: "KUBIN M854 DUBIN DCT DOLAT DCT KEMET DCT DOBAN DCT TEVRU Y75 NEPIX"
     }
   },
  EBBU: {
    EBBR: {
      EFRO: "NIK L191 VICOT N873 KEKIX Z708 AGISU DCT KUGAL DCT BAVTA N873 LOBBI DCT DETSO DCT PELIT DCT RESNA DCT EDAXA DCT ELBOG DCT BESLA DCT MISMO DCT NEMGU",
      ENTC: "JOIN AT/INCLUDE: NIGEX DCT BDO Z200 BARVI"
     }
   },
  EGPX: {
    EGPH: {
      EFRO: "GRICE P600 ASNUD DCT BEREP Z107 FLS Z286 OSMUM DCT SOLKA DCT OSS DCT BEGDO DCT BESLA DCT MISMO DCT NEMGU",
      ENTC: "JOIN AT/INCLUDE: NIGEX DCT BDO Z200 BARVI"
     },
    OTHER: {
      ENTC: "JOIN AT/INCLUDE: NIGEX DCT BDO Z200 BARVI",
      EFRO: "BEREP Z107 FLS Z286 OSMUM DCT SOLKA DCT OSS DCT BEGDO DCT BESLA DCT MISMO DCT NEMGU"
     },
    EGAA: {
      EFRO: "BLACA P600 TRN DCT BEREP Z107 FLS Z286 OSMUM DCT SOLKA DCT OSS DCT BEGDO DCT BESLA DCT MISMO DCT NEMGU",
      ENTC: "JOIN AT/INCLUDE: NIGEX DCT BDO Z200 BARVI"
     },
    EGPF: {
      EFRO: "PTH P600 ASNUD DCT BEREP Z107 FLS Z286 OSMUM DCT SOLKA DCT OSS DCT BEGDO DCT BESLA DCT MISMO DCT NEMGU",
      ENTC: "JOIN AT/INCLUDE: NIGEX DCT BDO Z200 BARVI"
     },
    EGPK: {
      EFRO: "TRN P600 PTH DCT BEREP Z107 FLS Z286 OSMUM DCT SOLKA DCT OSS DCT BEGDO DCT BESLA DCT MISMO DCT NEMGU",
      ENTC: "JOIN AT/INCLUDE: NIGEX DCT BDO Z200 BARVI"
     }
   },
  UKBV: {
    OTHER: {
      EFRO: "TADUN M983 DOLAT DCT KEMET DCT DOBAN DCT TEVRU Y75 NEPIX"
     },
    UKBB: {
      EFRO: "TUVOG M856 LOVIK N623 NASKA M850 DUBIN DCT DOLAT DCT KEMET DCT DOBAN DCT TEVRU Y75 NEPIX"
     }
   },
  UUWV: {
    OTHER: {
      EFRO: "LEMRO N609 NOTAR N609 SUMIM DCT BALTI DCT TEVRU Y75 NEPIX"
     },
    UUWW: {
      EFRO: "SUNUN M869 SOSEB P607 NOTAR N609 SUMIM DCT BALTI DCT TEVRU Y75 NEPIX"
     },
    UUDD: {
      EFRO: "SUNUN M869 SOSEB P607 NOTAR N609 SUMIM DCT BALTI DCT TEVRU Y75 NEPIX"
     },
    UUEE: {
      EFRO: "TOKNU T288 STAPA M869 SOSEB P607 NOTAR N609 SUMIM DCT BALTI DCT TEVRU Y75 NEPIX"
     }
   },
  EISN: {
    EINN: {
      ENTC: "JOIN AT/INCLUDE: NIGEX DCT BDO Z200 BARVI",
      EFRO: "ROTEV P600 GOTNA DCT TRN DCT BEREP Z107 FLS Z286 OSMUM DCT SOLKA DCT OSS DCT BEGDO DCT BESLA DCT MISMO DCT NEMGU"
     },
    EIDW: {
      ENTC: "JOIN AT/INCLUDE: NIGEX DCT BDO Z200 BARVI",
      EFRO: "ROTEV P600 GOTNA DCT TRN DCT BEREP Z107 FLS Z286 OSMUM DCT SOLKA DCT OSS DCT BEGDO DCT BESLA DCT MISMO DCT NEMGU"
     },
    OTHER: {
      EFRO: "ROTEV DCT TRN DCT BEREP Z107 FLS Z286 OSMUM DCT SOLKA DCT OSS DCT BEGDO DCT BESLA DCT MISMO DCT NEMGU",
      ENTC: "JOIN AT/INCLUDE: NIGEX DCT BDO Z200 BARVI"
     }
   },
  EYVL: {
    OTHER: {
      EFRO: "GUNTA M857 SOKVA DCT KEMET DCT DOBAN DCT TEVRU Y75 NEPIX"
     },
    EYVI: {
      EFRO: "TAGOL M983 DOLAT DCT KEMET DCT DOBAN DCT TEVRU Y75 NEPIX"
     }
   },
  LOVV: {
    LOWW: {
      EFRO: "LEDVA L156 SOPAV L617 REGLI T720 GRUDA N191 NIKMI P733 IPLIT B74 TIGNU P733 LATEG DCT DOBAN DCT TEVRU Y75 NEPIX"
     },
    OTHER: {
      EFRO: "LEDVA L156 SOPAV L617 REGLI T720 GRUDA N191 NIKMI P733 IPLIT B74 TIGNU P733 LATEG DCT DOBAN DCT TEVRU Y75 NEPIX"
     }
   },
  EDGG: {
    EDDF: {
      ENTC: "JOIN AT/INCLUDE: NIGEX DCT BDO Z200 BARVI",
      EFRO: "TOBAK N858 ERSIL Y172 MAG DCT BANUB Z212 POKEN DCT TESPO DCT VSB DCT KOSKA DCT DIVEG DCT GODOB DCT NEPIX"
     }
   },
  EDWW: {
    EDDH: {
      ENTC: "JOIN AT/INCLUDE: NIGEX DCT BDO Z200 BARVI",
      EFRO: "EKERN M852 VADIN DCT DETSO DCT PELIT DCT RESNA DCT EDAXA DCT ELBOG DCT BESLA DCT MISMO DCT NEMGU"
     },
    EDDB: {
      ENTC: "GERGA M725 KOGIM SALLO SABAK L997 LUNIP Z320 GIGNI Z125 SOMUB NIGEX BDO Z200 BARVI",
      EFRO: "GERGA M725 RENKI L132 DEMUR N746 GORPI DCT TESPO DCT VSB DCT KOSKA DCT DIVEG DCT GODOB DCT NEPIX"
     }
   },
  EETT: {
    EETN: {
      EFRO: "INTOR DCT TEVRU Y75 NEPIX"
     }
   },
  EPWW: {
    EPGD: {
      EFRO: "NIKMI P733 IPLIT B74 TIGNU N619 RONUS DCT DOBAN DCT TEVRU Y75 NEPIX"
     },
    EPWA: {
      EFRO: "BAMSO Z182 ASLUX Z460 XESNA M857 BOKSU DCT GUNTA DCT DOBAN DCT TEVRU Y75 NEPIX"
     },
    OTHER: {
      EFRO: "DCT BOKSU DCT GUNTA DCT DOBAN DCT TEVRU Y75 NEPIX"
     }
   },
  EHAA: {
    EHAM: {
      EFRO: "ANDIK N873 KEKIX Z708 AGISU DCT KUGAL DCT BAVTA DCT DETSO DCT PELIT DCT RESNA DCT EDAXA DCT ELBOG DCT BESLA DCT MISMO DCT NEMGU",
      ENTC: "JOIN AT/INCLUDE: NIGEX DCT BDO Z200 BARVI"
     }
   },
  ENOR: {
    ENBR: {
      EFRO: "INTUM DCT KEKOD Z286 OSMUM DCT SOLKA DCT OSS DCT BEGDO DCT BESLA DCT MISMO DCT NEMGU",
      ENTC: "INTUM Z108 NONVU DCT NIGEX DCT BDO Z200 BARVI"
     },
    ENVA: {
      EFRO: "SOLKA DCT OSS DCT BEGDO DCT BESLA DCT MISMO DCT NEMGU",
      ENTC: "NIGEX DCT BDO Z200 BARVI"
     },
    ENGM: {
      EFRO: "MASEV DCT GEVRU DCT SUN DCT ELBOG DCT BESLA DCT MISMO DCT NEMGU",
      ENTC: "RIBBE Z125 SOMUB Z103 NIGEX DCT BDO Z200 BARVI",
      ESNQ: "MASEV DCT ETIPU DCT VAGAS"
     },
    ENTC: {
      ESNQ: "MOKAX DCT POBEL DCT LAPLA",
      EFRO: "ERPUG DCT GOMAV DCT EXUTI DCT GITEV Y86 OSLIT"
     },
    ENZV: {
      EFRO: "ODINU Z281 OTSOS P5 OSMUM DCT SOLKA DCT OSS DCT BEGDO DCT BESLA DCT MISMO DCT NEMGU",
      ENTC: "ODINU Z281 OTSOS P5 TOTKO Z86 NELSU Z108 NONVU DCT NIGEX DCT BDO Z200 BARVI"
     },
    OTHER: {
      ENTC: "JOIN AT MOST NATURAL POINT ALONG ROUTE: SOMUB DCT NIGEX DCT BDO Z200 BARVI",
      EFRO: "SOLKA DCT OSS DCT BEGDO DCT BESLA DCT MISMO DCT NEMGU"
     }
   },
  EFIN: {
    EFHK: {
      EFRO: "TEVRU Y75 NEPIX"
     },
    EFRO: {
      OTHER: "OLNOP DCT XONTU DCT KETEL DCT (after KETEL free routing)",
      ENTC: "IBSAN Y75 EVIMI DCT GAPRO DCT KIIKA",
      ESNQ: "IBSAN DCT NEBET DCT TERPA"
     },
    OTHER: {
      EFRO: "Plan your routing through airways and expect reroutings'"
     }
   },
  EGTT: {
    EGNM: {
      EFRO: "[POL UP18 NATEB or NELSA DCT GASKO UP18 NATEB] P15 GIVEM DCT LAMRO DCT NIVUN P5 ZOL T400 EGAGO DCT OSLAV DCT BEGDO DCT BESLA DCT MISMO DCT NEMGU",
      ENTC: "JOIN AT/INCLUDE: NIGEX DCT BDO Z200 BARVI"
     },
    EGGD: {
      EFRO: "BCN UN864 NITON UP17 TIPTA UM82 ROBEM DCT LAMRO DCT NIVUN P5 ZOL T400 EGAGO DCT OSLAV DCT BEGDO DCT BESLA DCT MISMO DCT NEMGU",
      ENTC: "JOIN AT/INCLUDE: NIGEX DCT BDO Z200 BARVI"
     },
    EGNT: {
      ENTC: "JOIN AT/INCLUDE: NIGEX DCT BDO Z200 BARVI",
      EFRO: "NATEB DCT GIVEM DCT ALOTI T400 EGAGO DCT OSLAV DCT BEGDO DCT BESLA DCT MISMO DCT NEMGU"
     },
    EGGP: {
      EFRO: "POL UP17 TIPTA UM82 ROBEM DCT ALOTI T400 EGAGO DCT OSLAV DCT BEGDO DCT BESLA M607 MISMO DCT NEMGU",
      ENTC: "JOIN AT/INCLUDE: NIGEX DCT BDO Z200 BARVI"
     },
    EGSS: {
      EFRO: "CLN DCT LEDBO M604 LARGA DCT INBOB M604 SVA M609 ULMUG M125 ELVOM DCT ROGED DCT GEVRU DCT SUN DCT ELBOG DCT BESLA DCT MISMO DCT NEMGU",
      ENTC: "JOIN AT/INCLUDE: NIGEX DCT BDO Z200 BARVI"
     },
     NEGTTFIR: {
      EFRO: "ALOTI T400 EGAGO DCT OSLAV DCT BEGDO DCT BESLA DCT MISMO DCT NEMGU ”or”LAMRO DCT NIVUN P5 ZOL T400 EGAGO DCT OSLAV DCT BEGDO DCT BESLA DCT MISMO DCT NEMGU",
      ENTC: "JOIN AT/INCLUDE: NIGEX DCT BDO Z200 BARVI"
     },
     SEGTTFIR: {
      EFRO: "LEDGO M604 LARGA DCT INBOB M604 SVA M609 ULMUG M125 ELVOM DCT ROGED DCT GEVRU DCT SUN DCT ELBOG DCT BESLA DCT MISMO DCT NEMGU",
      ENTC: "JOIN AT/INCLUDE: NIGEX DCT BDO Z200 BARVI"
     },
    EGCC: {
      EFRO: "POL UP17 TIPTA UM82 ROBEM DCT ALOTI T400 EGAGO DCT OSLAV DCT BEGDO DCT BESLA M607 MISMO DCT NEMGU",
      ENTC: "JOIN AT/INCLUDE: NIGEX DCT BDO Z200 BARVI"
     },
    EGNX: {
      EFRO: "TNT UN57 POL UP17 TIPTA UM82 ROBEM DCT ALOTI T400 EGAGO DCT OSLAV DCT BEGDO DCT BESLA M607 MISMO DCT NEMGU",
      ENTC: "JOIN AT/INCLUDE: NIGEX DCT BDO Z200 BARVI"
     },
    EGGW: {
      EFRO: "MATCH Q295 PAAVO M604 LARGA DCT INBOB M604 SVA M609 ULMUG M125 ELVOM DCT ROGED DCT GEVRU DCT SUN DCT ELBOG DCT BESLA DCT MISMO DCT NEMGU",
      ENTC: "JOIN AT/INCLUDE: NIGEX DCT BDO Z200 BARVI"
     },
    EGKK: {
      ENTC: "JOIN AT/INCLUDE: NIGEX DCT BDO Z200 BARVI",
      EFRO: "FRANE M604 PAAVO Q295 SOMVA DCT MAVAS DCT LEGPI N873 BAVTA DCT DETSO DCT PELIT DCT RESNA DCT EDAXA DCT ELBOG DCT BESLA DCT MISMO DCT NEMGU"
     },
    EGBB: {
      ENTC: "JOIN AT/INCLUDE: NIGEX DCT BDO Z200 BARVI",
      EFRO: "LUVUM DCT TNT UN57 POL UP17 TIPTA UM82 ROBEM DCT ALOTI T400 EGAGO DCT OSLAV DCT BEGDO DCT BESLA M607 MISMO DCT NEMGU"
     },
    EGLL: {
      EFRO: "BPK Q295 PAAVO M604  LARGA DCT INBOB M604 SVA M609 ULMUG M125 ELVOM DCT ROGED DCT GEVRU DCT SUN DCT ELBOG DCT BESLA DCT MISMO DCT NEMGU",
      ENTC: "JOIN AT/INCLUDE: NIGEX DCT BDO Z200 BARVI"
     }
   }
 }



new Vue({
  el: '#routes',
  data: {
    firs,
    routes,
    aerodromes,
    selectedFir: '',
    selectedDeparture: '',
    selectedRoute: '',
  },
  methods: {
  },
  computed: {
    routeReady: function() {
      return this.selectedFir && this.selectedDeparture && this.selectedRoute;
    }
  }
})