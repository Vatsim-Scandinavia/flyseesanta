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
  LFPG: 'Paris Charles de Gaulle',
  LKPR: 'Prague',
  LOWW: 'Vienna',
  LSGG: 'Geneva',
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
      EFRO : "AIRAC 2013: NIK L191 VICOT N873 ARS T317 RESNA M607 MISMO DCT NEMGU, AIRAC 2012: NIK M624 TOLEN N873 ARS T317 RESNA M607 MISMO DCT NEMGU",
      ESNQ : "No specified routing restrictions",
      ENTC : "No specified routing restrictions"
    },  
     OTHER : {    
      EFRO : "AIRAC 2013: JOIN AT: HELEN N873 ARS T317 RESNA M607 MISMO DCT NEMGU, AIRAC 2012: HELEN N873 ARS T317 RESNA M607 MISMO DCT NEMGU",
      ESNQ : "No specified routing restrictions",
      ENTC : "No specified routing restrictions"
     }    
  },    
  EDGG : {          
    EDDF : {    
      EFRO : "TOBAK N858 ERSIL Y172 MAG DCT BANUB Z212 ROE P12 ETRUS M864 KOLJA N746 TESPO DCT VSB DCT KOSKA DCT DIVEG DCT GODOB DCT NEPIX",
      ESNQ : "No specified routing restrictions",
      ENTC : "No specified routing restrictions"
    },  
    OTHER : { 
      EFRO : "JOIN AT: ROBEL N746 MAG DCT BANUB Z212 ROE P12 ETRUS M864 KOLJA N746 TESPO DCT VSB DCT KOSKA DCT DIVEG DCT GODOB DCT NEPIX",
      ESNQ : "No specified routing restrictions",
      ENTC : "No specified routing restrictions"
    } 
  },    
  EDMM : {    
    EDDM : {  
      EFRO :        "ANKER Y104 MAMOR L132 AGNAV DCT SUPIL DCT KILNU DCT UNRIG DCT BODLA L132 DEMUR N746 TESPO DCT VSB DCT KOSKA DCT DIVEG DCT GODOB DCT NEPIX",
      ESNQ :       "No specified routing restrictions",
      ENTC :      "No specified routing restrictions"
    },  
    OTHER :  {    
      EFRO :       "JOIN AT: AGNAV DCT SUPIL DCT KILNU DCT UNRIG DCT BODLA L132 DEMUR N746 TESPO DCT VSB DCT KOSKA DCT DIVEG DCT GODOB DCT NEPIX",
      ESNQ :       "No specified routing restrictions",
      ENTC :       "No specified routing restrictions"
    } 
  },    
  EDWW :  {       
    EDDB : {  
      EFRO :        "GERGA M725 RENKI L132 DEMUR N746 TESPO DCT VSB DCT KOSKA DCT DIVEG DCT GODOB DCT NEPIX",
      ESNQ :        "No specified routing restrictions",
      ENTC :        "No specified routing restrictions"
    },  
    EDDH : {  
      EFRO :       "EKERN M852 ALASA M852 ELBUX N873 ARS T317 RESNA M607 MISMO DCT NEMGU",
      ESNQ :       "No specified routing restrictions",
      ENTC :       "No specified routing restrictions"
    },  
    EDDT : {  
      EFRO :       "RAKIT Z717 BODLA L132 DEMUR N746 TESPO DCT VSB DCT KOSKA DCT DIVEG DCT GODOB DCT NEPIX",
      ESNQ :       "No specified routing restrictions",
      ENTC :       "No specified routing restrictions"
    },  
    OTHER : { 
      EFRO :       "JOIN AT: BODLA L132 DEMUR N746 TESPO DCT VSB DCT KOSKA DCT DIVEG DCT GODOB DCT NEPIX ",
      ESNQ :       "No specified routing restrictions", 
      ENTC :       "No specified routing restrictions"
    } 
  },    
  EETT :  {       
    EETN : {      
      EFRO :       "INTOR DCT TEVRU Y75 NEPIX",
      ESNQ :       "No specified routing restrictions",
      ENTC :       "No specified routing restrictions"
    },  
    OTHER : { 
      EFRO :       "JOIN AT: DOBAN DCT TEVRU Y75 NEPIX",
      ESNQ :       "No specified routing restrictions",
      ENTC :       "No specified routing restrictions"
    } 
  },    
  EFIN : {        
    EFHK : {      
      EFRO :       "TEVRU Y75 NEPIX", 
      ESNQ :       "No specified routing restrictions",
      ENTC :       "No specified routing restrictions"
    },  
    EFRO : {    
      ESNQ :       "IBSAN DCT NEBET DCT TERPA", 
      ENTC :       "IBSAN Y75 EVIMI DCT GAPRO DCT KIIKA  ", 
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
      EFRO :       "BLACA P600 TRN UP600 ADN UZ107 BEREP Z107 FLS Z286 OSMUM DCT SOLKA DCT OSS DCT BEGDO DCT BESLA M607 MISMO DCT NEMGU",
      ESNQ :       "No specified routing restrictions",
      ENTC :       "No specified routing restrictions"
    },  
    EGPF : {  
      EFRO :       "PTH UP600 ADN UZ107 BEREP Z107 FLS Z286 OSMUM DCT SOLKA DCT OSS DCT BEGDO DCT BESLA M607 MISMO DCT NEMGU",
      ESNQ :       "No specified routing restrictions",
      ENTC :       "No specified routing restrictions"
    },  
    EGPH : {  
      EFRO :       "GRICE P600 PTH UP600 ADN UZ107 BEREP Z107 FLS Z286 OSMUM DCT SOLKA DCT OSS DCT BEGDO DCT BESLA M607 MISMO DCT NEMGU",
      ESNQ :       "No specified routing restrictions",
      ENTC :       "No specified routing restrictions"
    },  
    EGPK : {      
      EFRO :       "TRN UP600 ADN UZ107 BEREP Z107 FLS Z286 OSMUM DCT SOLKA DCT OSS DCT BEGDO DCT BESLA M607 MISMO DCT NEMGU",
      ESNQ :       "No specified routing restrictions", 
      ENTC :       "No specified routing restrictions"
    },  
    OTHER : {       
      EFRO :       "JOIN AT: BEREP Z107 FLS Z286 OSMUM DCT SOLKA DCT OSS DCT BEGDO DCT BESLA M607 MISMO DCT NEMGU",
      ESNQ :       "No specified routing restrictions", 
      ENTC :       "No specified routing restrictions"
    } 
  },    
  EGTT : {    
    EGBB : {        
      EFRO :       "LUVUM DCT TNT UN57 POL UP17 TIPTA UM82 RIVOT UM89 ALOTI T400 EGAGO DCT OSLAV DCT BEGDO DCT BESLA M607 MISMO DCT NEMGU",
      ESNQ :       "No specified routing restrictions",
      ENTC :       "No specified routing restrictions"
    },  
    EGNX : {  
      EFRO :       "(MAXF280) TNT UN57 POL/(CLIMB) UP17 TIPTA UM82 RIVOT UM89 ALOTI T400 EGAGO DCT OSLAV DCT BEGDO DCT BESLA M607 MISMO DCT NEMGU",
      ESNQ :       "No specified routing restrictions",
      ENTC :       "No specified routing restrictions"
    },  
    EGCC : {  
      EFRO :       "POL UP17 TIPTA UM82 RIVOT UM89 ALOTI T400 EGAGO DCT OSLAV DCT BEGDO DCT BESLA M607 MISMO DCT NEMGU",
      ESNQ :       "No specified routing restrictions", 
      ENTC :       "No specified routing restrictions"
    },  
    EGGP : {      
      EFRO :       "POL UP17 TIPTA UM82 RIVOT UM89 ALOTI T400 EGAGO DCT OSLAV DCT BEGDO DCT BESLA M607 MISMO DCT NEMGU",
      ESNQ :       "No specified routing restrictions",
      ENTC :       "No specified routing restrictions"
    },  
    EGGD : {      
      EFRO :       "BCN UN864 NITON UP17 TIPTA UM82 NIVUN P5 ZOL T400 EGAGO DCT OSLAV DCT BEGDO DCT BESLA M607 MISMO DCT NEMGU",
      ESNQ :       "No specified routing restrictions",
      ENTC :       "No specified routing restrictions"
    },  
    EGGW : {      
      EFRO :       "MATCH Q295 PAAVO M604 SVA M609 ULMUG M125 ELVOM DCT ROGED DCT GEVRU DCT SUN DCT ELBOG M607 MISMO DCT NEMGU",
      ESNQ :       "No specified routing restrictions", 
      ENTC :       "No specified routing restrictions"
    },  
    EGKK : {      
      EFRO :       "FRANE M604 PAAVO Q295 SOMVA DCT MAVAS DCT TUSKA N873 ARS T317 RESNA M607 MISMO DCT NEMGU",
      ESNQ :       "No specified routing restrictions", 
      ENTC :       "No specified routing restrictions"
    },  
    EGLL : {      
      EFRO :       "BPK Q295 PAAVO M604 SVA M609 ULMUG M125 ELVOM DCT ROGED DCT GEVRU DCT SUN DCT ELBOG M607 MISMO DCT NEMGU",
      ESNQ :       "No specified routing restrictions", 
      ENTC :       "No specified routing restrictions"
    },  
    EGNM : {      
      EFRO :       "POL UP18 NATEB P15 CUTEL P5 ZOL T400 EGAGO DCT OSLAV DCT BEGDO DCT BESLA M607 MISMO DCT NEMGU",
      ESNQ :       "No specified routing restrictions", 
      ENTC :       "No specified routing restrictions"
    },  
    EGNT : {      
      EFRO :       "ROBEM UM82 RIVOT UM89 ALOTI T400 EGAGO DCT OSLAV DCT BEGDO DCT BESLA M607 MISMO DCT NEMGU",
      ESNQ :       "No specified routing restrictions", 
      ENTC :       "No specified routing restrictions"
    },  
    EGSS : {      
      EFRO :       "CLN DCT LEDBO M604 SVA M609 ULMUG M125 ELVOM DCT ROGED DCT GEVRU DCT SUN DCT ELBOG M607 MISMO DCT NEMGU",
      ESNQ :       "No specified routing restrictions", 
      ENTC :       "No specified routing restrictions"
    },  
    NEGTTFIR: {      
      EFRO:       "JOIN AT: ALOTI T400 EGAGO DCT OSLAV DCT BEGDO DCT BESLA M607 MISMO DCT NEMGU ”or” NIVUN P5 ZOL T400 EGAGO DCT OSLAV DCT BEGDO DCT BESLA M607 MISMO DCT NEMGU",
      ESNQ:       "No specified routing restrictions", 
      ENTC:       "No specified routing restrictions" 
    },  
    SEGTTFIR: {      
      EFRO:       "JOIN AT: LARGA M604 SVA M609 ULMUG M125 ELVOM DCT ROGED DCT GEVRU DCT SUN DCT ELBOG M607 MISMO DCT NEMGU",
      ESNQ:       "No specified routing restrictions", 
      ENTC:       "No specified routing restrictions" 
    } 
  },    
  EHAA : {        
    EHAM : {      
      EFRO  : "ANDIK N873 ARS T317 RESNA M607 MISMO DCT NEMGU",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    },  
    OTHER : {     
      EFRO  : "JOIN AT: LABIL N873 ARS T317 RESNA M607 MISMO DCT NEMGU",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    } 
  },    
  EISN : {        
    EIDW : {      
      EFRO  : "(MAXF250) ROTEV P600 TRN/(CLIMB) UP600 ADN UZ107 BEREP Z107 FLS Z286 OSMUM DCT SOLKA DCT OSS DCT BEGDO DCT BESLA M607 MISMO DCT NEMGU",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    }, 
    OTHER : {     
      EFRO  : "JOIN AT: DEGOS DCT MAC UN537 GOW UP600 ADN UZ107 BEREP Z107 FLS Z286 OSMUM DCT SOLKA DCT OSS DCT BEGDO DCT BESLA M607 MISMO DCT NEMGU",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    } 
  },    
  EKDK : {        
    EKCH : {      
      EFRO  : "KEMAX T408 OTVEB DCT VSB DCT KOSKA DCT DIVEG DCT GODOB DCT NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    },  
    OTHER : {     
      EFRO  : "JOIN AT: DETSO N873 ARS T317 RESNA M607 MISMO DCT NEMGU",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    } 
  },    
  ENOR : {        
    ENGM : {      
      EFRO  : "MASEV DCT GEVRU DCT SUN DCT ELBOG M607 MISMO DCT NEMGU",
      ESNQ  : "RIBBE DCT EGAGO N150 AGMOL M745 VAGAS",
      ENTC  : "RIBBE Z125 SOMUB DCT GUBAV Z156 AMIMO"
    },  
    ENTC : {      
      EFRO  : "ERPUG DCT GOMAV DCT EXUTI DCT GITEV Y86 OSLIT",
      ESNQ  : "TULDA DCT POBEL DCT LAPLA"
    },  
    ENBR : {      
      EFRO  : "INTUM DCT KEKOD Z286 OSMUM DCT SOLKA DCT OSS DCT BEGDO DCT BESLA M607 MISMO DCT NEMGU",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    },  
    OTHER : {     
      EFRO  : "JOIN AT: SOLKA DCT OSS DCT BEGDO DCT BESLA M607 MISMO DCT NEMGU",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    } 
  },    
  EPWW : {        
    EPGD : {      
      EFRO  : "NIKMI P733 IPLIT B74 TIGNU N619 RONUS DCT DOBAN DCT TEVRU Y75 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    },  
    EPWA : {      
      EFRO  : "BAMSO Z182 ASLUX Z460 XESNA M857 BOKSU DCT GUNTA DCT DOBAN DCT TEVRU Y75 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    },  
    OTHER : {     
      EFRO  : "JOIN AT: BOKSU DCT GUNTA DCT DOBAN DCT TEVRU Y75 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    } 
  },    
  ESAA : {        
    ESNQ : {      
      EFRO  : "VAGAS DCT BEGDO DCT BESLA M607 MISMO DCT NEMGU",
      ENTC  : "RIXEM DCT KIIKA"
    },  
    ESSA : {      
      EFRO  : "TOVRI N851 RIKUM DCT DIVEG DCT GODOB DCT NEPIX",
      ESNQ  : "RESNA T317 VAGAS",
      ENTC  : "RESNA T317 NOVRI DCT RIXEM DCT KIIKA"
    },  
    ESGG : {      
      EFRO  : "LABAN N873 ARS T317 RESNA M607 MISMO DCT NEMGU",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    },  
    OTHER : {     
      EFRO  : "JOIN AT: DETSO N873 ARS T317 RESNA M607 MISMO DCT NEMGU ”or” TRS M607 MISMO DCT NEMGU ”or” VSB DCT KOSKA DCT DIVEG DCT GODOB DCT NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    } 
  },    
  EVRR : {        
    EVRA : {      
      EFRO  : "SOKVA DCT DOBAN DCT TEVRU Y75 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    },  
    OTHER : {     
      EFRO  : "JOIN AT: SOKVA DCT DOBAN DCT TEVRU Y75 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    } 
  },    
  EYVL : {        
    EYVI : {      
      EFRO  : "TAGOL M983 DOLAT DCT KEMET DCT DOBAN DCT TEVRU Y75 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    },  
    OTHER : {     
      EFRO  : "JOIN AT: GUNTA M857 SOKVA DCT KEMET DCT DOBAN DCT TEVRU Y75 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    } 
  },    
  LFFF : {        
    LFPG : {      
      EFRO  : "NURMO UN874 VEKIN UN873 ADUTO N873 TUSKA N873 ARS T317 RESNA M607 MISMO DCT NEMGU",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    },  
    OTHER : {     
      EFRO  : "JOIN AT: NURMO UN874 VEKIN UN873 ADUTO N873 TUSKA N873 ARS T317 RESNA M607 MISMO DCT NEMGU",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    } 
  },    
  LKAA : {        
    LKPR : {      
      EFRO  : "ARTUP P733 IPLIT B74 TIGNU P733 LATEG DCT DOBAN DCT TEVRU Y75 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    },  
    OTHER : {     
      EFRO  : "JOIN AT: TOMTI P733 IPLIT B74 TIGNU P733 LATEG DCT DOBAN DCT TEVRU Y75 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    } 
  },    
  LOVV : {        
    LOWW : {      
      EFRO  : "LEDVA L156 SOPAV L617 REGLI T720 GRUDA N191 NIKMI P733 IPLIT B74 TIGNU P733 LATEG DCT DOBAN DCT TEVRU Y75 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    },  
    OTHER : {     
      EFRO  : "JOIN AT: LEDVA L156 SOPAV L617 REGLI T720 GRUDA N191 NIKMI P733 IPLIT B74 TIGNU P733 LATEG DCT DOBAN DCT TEVRU Y75 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    } 
  },    
  LSAS : {        
    LSGG: {       
      EFRO  : "MOLUS UN871 DITON T163 ZUE T125 ROMIR N851 VEDOK DCT LOKTA DCT TEDGO DCT TIKNI N746 MAG DCT BANUB Z212 ROE P12 ETRUS M864 KOLJA N746 TESPO DCT VSB DCT KOSKA DCT DIVEG DCT GODOB DCT NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    },  
    LSZH : {      
      EFRO  : "(MAX FL230) DEGES Z1 ETAGO N869 AMOSA Z77 LONLI/(CLIMB) M726 LASGA DCT MAG DCT BANUB Z212 ROE P12 ETRUS M864 KOLJA N746 TESPO DCT VSB DCT KOSKA DCT DIVEG DCT GODOB DCT NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    },  
    OTHER : {     
      EFRO  : "JOIN AT: (MAX FL230) BODAN Z1 ETAGO N869 AMOSA Z77 LONLI/(CLIMB) M726 LASGA DCT MAG DCT BANUB Z212 ROE P12 ETRUS M864 KOLJA N746 TESPO DCT VSB DCT KOSKA DCT DIVEG DCT GODOB DCT NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    } 
  },    
  UKBV : {        
    UKBB : {      
      EFRO  : "TUVOG M856 LOVIK N623 NASKA M850 DUBIN DCT DOLAT DCT KEMET DCT DOBAN DCT TEVRU Y75 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    },  
    OTHER : {     
      EFRO  : "JOIN AT: TADUN M983 DOLAT DCT KEMET DCT DOBAN DCT TEVRU Y75 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    } 
  },    
  ULLL : {        
    ULLI : {      
      EFRO  : "UTETA T561 LEDUN DCT ULTIR DCT TEVRU Y75 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    },  
    OTHER : {     
      EFRO  : "JOIN AT: LEDUN DCT ULTIR DCT TEVRU Y75 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    } 
  },    
  UMMV : {    
    UMMS : {      
      EFRO  : "KUBIN M854 DUBIN DCT DOLAT DCT KEMET DCT DOBAN DCT TEVRU Y75 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    },  
    OTHER : {     
      EFRO  : "JOIN AT: DUBIN DCT DOLAT DCT KEMET DCT DOBAN DCT TEVRU Y75 NEPIX",
      ESNQ  : "No specified routing restrictions",
      ENTC  : "No specified routing restrictions"
    } 
  },    
  UUWV : {        
    OTHER : {     
      EFRO  : "JOIN AT: OBELU B239 AJ R900 SIFON B903 ATLUM T561 LEDUN DCT ULTIR DCT TEVRU Y75 NEPIX",
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