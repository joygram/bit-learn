/*Italian (Italy) locale*/
const it = {
	groupDelimiter:".",
	groupSize:3,
	decimalDelimiter:",",
	decimalSize:2,
	minusPosition:"before",
	minusSign:"-",

	dateFormat:"%d/%m/%Y",
	timeFormat:"%H:%i",
	longDateFormat:"%j %F %Y",
	fullDateFormat:"%j %F %Y %H:%i",
	am:null,
	pm:null,
	price:"€ {obj}",
	priceSettings:{
		groupDelimiter:".",
		groupSize:3,
		decimalDelimiter:",",
		decimalSize:2,
		minusPosition:"before",
		minusSign:"-"
	},
	calendar:{
		monthFull:["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],
		monthShort:["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],
		dayFull:["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"],
		dayShort:["dom","lun","mar","mer","gio","ven","sab"],
		hours: "Orario",
		minutes: "Minuti",
		done:"Pronto",
		clear: "Pulisci",
		today: "Oggi"
	},

	dataExport:{
		page:"Pagina",
		of:"di"
	},
	PDFviewer:{
		of:"di",
		automaticZoom:"Zoom automatico",
		actualSize:"Dimensione reale",
		pageFit:"Dimensioni della pagina",
		pageWidth:"Larghezza della pagina",
		pageHeight:"Altezza della pagina",
		enterPassword:"Inserisci la password",
		passwordError:"Password errata"
	},
	aria:{
		calendar:"Calendario",
		increaseValue:"Aumenta il valore",
		decreaseValue:"Riduci il valore",
		navMonth:["Il mese scorso", "Il prossimo mese"],
		navYear:["L'anno scorso", "L'anno prossimo"],
		navDecade:["Decennio precedente", "Prossimo decennio"],
		dateFormat:"%j %F %Y",
		monthFormat:"%F %Y",
		yearFormat:"%Y",
		hourFormat:"Orario: %H",
		minuteFormat:"Minuti: %i",
		removeItem:"Rimuovere l'elemento",
		pages:["Prima pagina", "Pagina precedente", "Pagina successiva", "Ultima pagina"],
		page:"Pagina",
		headermenu:"Menu del titolo",
		openGroup:"Aperto gruppo di colonne",
		closeGroup:"Chiudi gruppo di colonne",
		closeTab:"Chiudi tab",
		showTabs:"Mostra più tabs",
		resetTreeMap:"Tornare alla vista originale",
		navTreeMap:"Livello superiore",
		nextTab:"Tab successivo",
		prevTab:"Tab precedente",
		multitextSection:"Aggiungi elemento",
		multitextextraSection:"Rimuovere l'elemento",
		showChart:"Mostrare grafico",
		hideChart:"Nascondere grafico",
		resizeChart:"Ridimensionare grafico"
	},
	richtext:{
		underline: "Sottolineare",
		bold: "Grassetto",
		italic: "Corsivo"
	},
	combo:{
		select:"Selezionare",
		selectAll:"Seleziona tutto",
		unselectAll:"Deseleziona tutto"
	},
	message:{
		ok:"OK",
		cancel:"Annullare"
	},
	comments:{
		send: "Inviare",
		confirmMessage: "Il commento verrà rimosso. Sei sicuro?",
		edit: "Correggere",
		remove: "Elimina",
		placeholder: "Digitare qui..",
		moreComments:"Altri commenti"
	},
	filter:{
		less: "meno",
		lessOrEqual: "minore o uguale",
		greater: "maggiore",
		greaterOrEqual: "maggiore o uguale",
		contains: "contiene",
		notContains: "non contiene",
		equal: "uguale",
		notEqual: "non uguale",
		beginsWith: "inizia con",
		notBeginsWith: "non inizia con",
		endsWith: "finisce con",
		notEndsWith: "non termina con",
		between: "tra",
		notBetween: "non tra"
	},
	timeboard:{
		seconds: "secondi"
	}
};

export default it;