const firs = 
{
  EBBU: 'Brussels FIR',
  EDGG: 'Langen FIR',
  EDMM: 'München FIR',
  EDWW: 'Bremen FIR',
  EETT: 'Tallinn FIR',
  EFIN: 'Finland FIR',
  EGPX: 'Scottish FIR',
  EGTT: 'London FIR',
  EHAA: 'Amsterdam FIR',
  EISN: 'Shannon FIR',
  EKDK: 'Copenhagen FIR',
  ENOR: 'Norway FIR',
  EPWW: 'Warszawa FIR',
  ESAA: 'Sweden FIR',
  EVRR: 'Riga FIR',
  EYVL: 'Vilnius FIR',
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
  EDDB: 'Berlin SchÃ¶nefeld',
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
  EPGD: 'Gdansk',
  EPWA: 'Warsaw',
  ESGG: 'Göterborg',
  ESNQ: 'Kiruna',
  ESSA: 'Stockholm Arlanda',
  EVRA: 'Riga',
  EYVI: 'Vilnius',
  LKPR: 'Prague',
  LOWW: 'Vienna',
  LSZH: 'Zürich',
  UKBB: 'Kyiv',
  ULLI: 'St. Petersburg',
  UMMS: 'Minsk',
  NEGTTFIR: 'Northern EGTT FIR',
  SEGTTFIR: 'Southern EGTT FIR',
}

const routes = 
{
  EBBU : {      
    EBBR : {    
      EFRO : "NIK M624 TOLEN UN873 TUSKA N873 ARS T317 RESNA M607 NEMGU",
      ESNQ : "No specified routing restrictions",
      ENTC : "No specified routing restrictions"
    },  
     OTHER : {    
      EFRO : "HELEN UZ708 KUGAL Z708 BAVTA N873 ARS T317 RESNA M607 NEMGU",
      ESNQ : "No specified routing restrictions",
      ENTC : "No specified routing restrictions"
     }    
  },    
  EDGG : {          
    EDDF : {    
      EFRO : "MARUN Y150 TOLGI UM864 AMALI UN851 MAKEL N851 TRS M607 NEMGU",
      ESNQ : "No specified routing restrictions",
      ENTC : "No specified routing restrictions"
    },  
    OTHER : { 
      EFRO : "KEMAD UN851 MAKEL N851 TRS M607 NEMGU",
      ESNQ : "No specified routing restrictions",
      ENTC : "No specified routing restrictions"
    } 
  },    
  EDMM : {    
    EDDM : {  
      EFRO :        "ANKER Y104 MAMOR L132 KILNU DCT UNRIG DCT BODLA L132 DEMUR N746 TESPO M607 NEMGU",
      ESNQ :       "No specified routing restrictions",
      ENTC :      "No specified routing restrictions"
    },  
    OTHER :  {    
      EFRO :       "DCT UNRIG DCT BODLA L132 DEMUR N746 TESPO M607 NEMGU",
      ESNQ :       "No specified routing restrictions",
      ENTC :       "No specified routing restrictions"
    } 
  },    
  EDWW :  {       
    EDDB : {  
      EFRO :        "GERGA M725 RENKI L132 DEMUR N746 GORPI DCT ARMOD M607 NEMGU",
      ESNQ :        "No specified routing restrictions",
      ENTC :        "No specified routing restrictions"
    },  
    EDDH : {  
      EFRO :       "LUB P605 GESKA N851 TRS M607 NEMGU",
      ESNQ :       "No specified routing restrictions",
      ENTC :       "No specified routing restrictions"
    },  
    EDDT : {  
      EFRO :       "RAKIT Z717 BODLA L132 DEMUR N746 GORPI DCT ARMOD M607 NEMGU",
      ESNQ :       "No specified routing restrictions",
      ENTC :       "No specified routing restrictions"
    },  
    OTHER : { 
      EFRO :       "DCT MIKNA N851 TRS M607 NEMGU ",
      ESNQ :       "No specified routing restrictions", 
      ENTC :       "No specified routing restrictions"
    } 
  },    
  EETT :  {       
    EETN : {      
      EFRO :       "INTOR M857 ULTIR Y75 RIBVU M6 NEPIX",
      ESNQ :       "No specified routing restrictions",
      ENTC :       "No specified routing restrictions"
    },  
    OTHER : { 
      EFRO :       "DOBAN P870 TEVRU Y75 RIBVU M6 NEPIX",
      ESNQ :       "No specified routing restrictions",
      ENTC :       "No specified routing restrictions"
    } 
  },    
  EFIN : {        
    EFHK : {      
      EFRO :       "TEVRU Y75 RIBVU M6 NEPIX", 
      ESNQ :       "No specified routing restrictions",
      ENTC :       "No specified routing restrictions"
    },  
    EFRO : {    
      ESNQ :       "IBSAN DCT NEBET DCT TERPA", 
      ENTC :       "IBSAN T95 EVIMI DCT GAPRO DCT KIIKA", 
      OTHER :      "OLNOP DCT XONTU DCT KETEL DCT (after KETEL free routing)"
    },  
    OTHER : {     
      EFRO :       "Plan your routing through airways and expect reroutings", 
      ESNQ :       "No specified routing restrictions", 
      ENTC :       "No specified routing restrictions"
    } 
  },    
  EGPX : {        
    EGAA : {      
      EFRO :       "BLACA P600 TRN UP600 ADN UZ107 BEREP Z107 FLS Z286 OSMUM DCT SOLKA DCT OSS DCT BEGDO DCT BESLA M607 NEMGU",
      ESNQ :       "No specified routing restrictions",
      ENTC :       "No specified routing restrictions"
    },  
    EGPF : {  
      EFRO :       "PTH UP600 ADN UZ107 BEREP Z107 FLS Z286 OSMUM DCT SOLKA DCT OSS DCT BEGDO DCT BESLA M607 NEMGU",
      ESNQ :       "No specified routing restrictions",
      ENTC :       "No specified routing restrictions"
    },  
    EGPH : {  
      EFRO :       "GRICE P600 PTH UP600 ADN UZ107 BEREP Z107 FLS Z286 OSMUM DCT SOLKA DCT OSS DCT BEGDO DCT BESLA M607 NEMGU",
      ESNQ :       "No specified routing restrictions",
      ENTC :       "No specified routing restrictions"
    },  
    EGPK : {      
      EFRO :       "TRN UP600 ADN UZ107 BEREP Z107 FLS Z286 OSMUM DCT SOLKA DCT OSS DCT BEGDO DCT BESLA M607 NEMGU",
      ESNQ :       "No specified routing restrictions", 
      ENTC :       "No specified routing restrictions"
    },  
    OTHER : {       
      EFRO :       "BEREP Z107 FLS Z286 OSMUM DCT SOLKA DCT OSS DCT BEGDO DCT BESLA M607 NEMGU",
      ESNQ :       "No specified routing restrictions", 
      ENTC :       "No specified routing restrictions"
    } 
  },    
  EGTT : {    
    EGBB : {        
      EFRO :       "LUVUM DCT TNT UN57 POL UP17 TIPTA UM82 RIVOT UM89 ALOTI T400 EGAGO DCT OSLAV DCT BEGDO DCT BESLA M607 NEMGU",
      ESNQ :       "No specified routing restrictions",
      ENTC :       "No specified routing restrictions"
    },  
    EGNX : {  
      EFRO :       "TNT UN57 POL UP17 TIPTA UM82 RIVOT UM89 ALOTI T400 EGAGO DCT OSLAV DCT BEGDO DCT BESLA M607 NEMGU",
      ESNQ :       "No specified routing restrictions",
      ENTC :       "No specified routing restrictions"
    },  
    EGCC : {  
      EFRO :       "POL UP17 TIPTA UM82 RIVOT UM89 ALOTI T400 EGAGO DCT OSLAV DCT BEGDO DCT BESLA M607 NEMGU",
      ESNQ :       "No specified routing restrictions", 
      ENTC :       "No specified routing restrictions"
    },  
    EGGP : {      
      EFRO :       "POL UP17 TIPTA UM82 RIVOT UM89 ALOTI T400 EGAGO DCT OSLAV DCT BEGDO DCT BESLA M607 NEMGU",
      ESNQ :       "No specified routing restrictions",
      ENTC :       "No specified routing restrictions"
    },  
    EGGD : {      
      EFRO :       "BCN UN864 NITON UP17 TIPTA UM82 NIVUN P5 ZOL T400 EGAGO DCT OSLAV DCT BEGDO DCT BESLA M607 NEMGU",
      ESNQ :       "No specified routing restrictions",
      ENTC :       "No specified routing restrictions"
    },  
    EGGW : {      
      EFRO :       "MATCH Q295 PAAVO M604 SVA M609 ULMUG M125 ELVOM DCT ROGED DCT GEVRU DCT BAKIL DCT ELBOG M607 NEMGU",
      ESNQ :       "No specified routing restrictions", 
      ENTC :       "No specified routing restrictions"
    },  
    EGKK : {      
      EFRO :       "FRANE M604 PAAVO Q295 SOMVA UP155 ANDIK UN873 TUSKA N873 ARS T317 RESNA M607 NEMGU",
      ESNQ :       "No specified routing restrictions", 
      ENTC :       "No specified routing restrictions"
    },  
    EGLL : {      
      EFRO :       "POL UP18 NATEB P15 CUTEL P5 ZOL T400 EGAGO DCT OSLAV DCT BEGDO DCT BESLA M607 NEMGU",
      ESNQ :       "No specified routing restrictions", 
      ENTC :       "No specified routing restrictions"
    },  
    EGNM : {      
      EFRO :       "POL UP18 NATEB P15 CUTEL P5 ZOL T400 EGAGO DCT OSLAV DCT BEGDO DCT BESLA M607 NEMGU",
      ESNQ :       "No specified routing restrictions", 
      ENTC :       "No specified routing restrictions"
    },  
    EGNT : {      
      EFRO :       "ROBEM UM82 RIVOT UM89 ALOTI T400 EGAGO DCT OSLAV DCT BEGDO DCT BESLA M607 NEMGU",
      ESNQ :       "No specified routing restrictions", 
      ENTC :       "No specified routing restrictions"
    },  
    EGSS : {      
      EFRO :       "CLN DCT LEDBO M604 SVA M609 ULMUG M125 ELVOM DCT ROGED DCT GEVRU DCT BAKIL DCT ELBOG M607 NEMGU",
      ESNQ :       "No specified routing restrictions", 
      ENTC :       "No specified routing restrictions"
    },  
    NEGTTFIR: {      
      EFRO:       "ALOTI T400 EGAGO DCT OSLAV DCT BEGDO DCT BESLA M607 NEMGU â€orâ€ NIVUN P5 ZOL T400 EGAGO DCT OSLAV DCT BEGDO DCT BESLA M607 NEMGU",
      ESNQ:       "No specified routing restrictions", 
      ENTC:       "No specified routing restrictions" 
    },  
    SEGTTFIR: {      
      EFRO:       "LARGA M604 SVA M609 ULMUG M125 ELVOM DCT ROGED DCT GEVRU DCT BAKIL DCT ELBOG M607 NEMGU",
      ESNQ:       "No specified routing restrictions", 
      ENTC:       "No specified routing restrictions" 
    } 
  },    
  EHAA : {        
    EHAM : {      
      EFRO  : "ANDIK UN873 TUSKA N873 ARS T317 RESNA M607 NEMGU",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    },  
    OTHER : {     
      EFRO  : "LABIL UN873 TUSKA N873 ARS T317 RESNA M607 NEMGU",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    } 
  },    
  EISN : {        
    EIDW : {      
      EFRO  : "(MAXF250) ROTEV P600 TRN/(CLIMB) UP600 ADN UZ107 BEREP Z107 FLS Z286 OSMUM DCT SOLKA DCT OSS DCT BEGDO DCT BESLA M607 NEMGU",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    }, 
    OTHER : {     
      EFRO  : "DCT DEGOS DCT MAC UN537 GOW UP600 ADN UZ107 BEREP Z107 FLS Z286 OSMUM DCT SOLKA DCT OSS DCT BEGDO DCT BESLA M607 NEMGU",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    } 
  },    
  EKDK : {        
    EKCH : {      
      EFRO  : "KEMAX N851 TRS M607 NEMGU",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    },  
    OTHER : {     
      EFRO  : "DCT DETSO N873 ARS T317 RESNA M607 NEMGU",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    } 
  },    
  ENOR : {        
    ENGM : {      
      EFRO  : "RIBBE DCT EGAGO DCT OSLAV DCT BEGDO DCT BESLA M607 NEMGU",
      ESNQ  : "RIBBE DCT EGAGO N150 AGMOL M745 VAGAS",
      ENTC  : "RIBBE Z125 SOMUB DCT GUBAV Z156 AMIMO"
    },  
    ENTC : {      
      EFRO  : "ERPUG DCT GOMAV DCT EXUTI M6 OSLIT",
      ESNQ  : "TULDA DCT POBEL DCT LAPLA"
    },  
    ENBR : {      
      EFRO  : "INTUM DCT ADSAR Z286 OSMUM DCT SOLKA DCT OSS DCT BEGDO DCT BESLA M607 NEMGU",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    },  
    OTHER : {     
      EFRO  : "SOLKA DCT OSS DCT BEGDO DCT BESLA M607 NEMGU",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    } 
  },    
  EPWW : {        
    EPGD : {      
      EFRO  : "NIKMI P733 IPLIT B74 TIGNU N619 RONUS DCT SULUN DCT DOBAN P870 TEVRU Y75 RIBVU M6 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    },  
    EPWA : {      
      EFRO  : "BAMSO Z182 ASLUX Z460 XESNA M857 BOKSU DCT GUNTA DCT DOBAN P870 TEVRU Y75 RIBVU M6 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    },  
    OTHER : {     
      EFRO  : "DCT BOKSU DCT GUNTA DCT DOBAN P870 TEVRU Y75 RIBVU M6 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    } 
  },    
  ESAA : {        
    ESNQ : {      
      EFRO  : "VAGAS DCT BEGDO DCT BESLA M607 NEMGU",
      ENTC  : "RIXEM DCT KIIKA"
    },  
    ESSA : {      
      EFRO  : "TOVRI N851 RIKUM Y370 RUBSI T95 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "RESNA T317 NOVRI DCT RIXEM DCT KIIKA"
    },  
    ESGG : {      
      EFRO  : "LABAN N873 ARS T317 RESNA M607 NEMGU",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    },  
    OTHER : {     
      EFRO  : "DETSO N873 ARS T317 RESNA M607 NEMGU â€orâ€ TRS M607 NEMGU â€orâ€ KOSKA DCT DIVEG DCT GODOB DCT NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    } 
  },    
  EVRR : {        
    EVRA : {      
      EFRO  : "SOKVA DCT DOBAN P870 TEVRU Y75 RIBVU M6 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    },  
    OTHER : {     
      EFRO  : "SOKVA DCT DOBAN P870 TEVRU Y75 RIBVU M6 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    } 
  },    
  EYVL : {        
    EYVI : {      
      EFRO  : "TAGOL M983 DOLAT Q77 KEMET DCT DOBAN P870 TEVRU Y75 RIBVU M6 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    },  
    OTHER : {     
      EFRO  : "GUNTA M857 KEMET DCT DOBAN P870 TEVRU Y75 RIBVU M6 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    } 
  },    
  LKAA : {        
    LKPR : {      
      EFRO  : "ARTUP P733 IPLIT B74 TIGNU N619 RONUS DCT SULUN DCT DOBAN P870 TEVRU Y75 M6 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    },  
    OTHER : {     
      EFRO  : "TOMTI P733 IPLIT B74 TIGNU N619 RONUS DCT SULUN DCT DOBAN P870 TEVRU Y75 M6 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    } 
  },    
  LOVV : {        
    LOWW : {      
      EFRO  : "LEDVA L156 SOPAV L617 REGLI T720 GRUDA N191 NIKMI P733 IPLIT B74 TIGNU N619 RONUS DCT SULUN DCT DOBAN P870 TEVRU Y75 RIBVU M6 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    },  
    OTHER : {     
      EFRO  : "LEDVA L156 SOPAV L617 REGLI T720 GRUDA N191 NIKMI P733 IPLIT B74 TIGNU N619 RONUS DCT SULUN DCT DOBAN P870 TEVRU Y75 RIBVU M6 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    } 
  },    
  LSAS : {        
    LSZH : {      
      EFRO  : "(MAX FL230) DEGES Z1 ETAGO N869 AMOSA Z77 LONLI/(CLIMB) M726 LASGA DCT OKAGA DCT MIKNA N851 TRS M607 NEMGU",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    },  
    LSGG: {       
      EFRO  : "MOLUS UN871 DITON T163 ZUE T125 ROMIR UN851 TEDGO DCT TIKNI N746 ROBEL DCT KENIG DCT OKAGA DCT MIKNA N851 TRS M607 NEMGU",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    },  
    OTHER : {     
      EFRO  : "(MAX FL230) BODAN Z1 ETAGO N869 AMOSA Z77 LONLI/(CLIMB) M726 LASGA DCT OKAGA DCT MIKNA N851 TRS M607 NEMGU",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    } 
  },    
  UKBV : {        
    UKBB : {      
      EFRO  : "TUVOG M856 LOVIK N623 NASKA M850 DUBIN DCT KEMET DCT DOBAN P870 TEVRU Y75 RIBVU M6 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    },  
    OTHER : {     
      EFRO  : "SOMAT Z364 SOGBI M983 DOLAT Q77 KEMET DCT DOBAN P870 TEVRU Y75 RIBVU M6 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    } 
  },    
  ULLL : {        
    ULLI : {      
      EFRO  : "UTETA T561 LEDUN N872 ULTIR Y75 RIBVU M6 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    },  
    OTHER : {     
      EFRO  : "LEDUN N872 ULTIR Y75 RIBVU M6 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    } 
  },    
  UMMV : {    
    UMMS : {      
      EFRO  : "KUBIN M854 DUBIN DCT KEMET DCT DOBAN P870 TEVRU Y75 RIBVU M6 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    },  
    OTHER : {     
      EFRO  : "DUBIN DCT KEMET DCT DOBAN P870 TEVRU Y75 RIBVU M6 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    } 
  },    
  UUWV : {        
    OTHER : {     
      EFRO  : "ROMEL R58 NOTAR DCT KEMET DCT DOBAN P870 TEVRU Y75 RIBVU M6 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
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