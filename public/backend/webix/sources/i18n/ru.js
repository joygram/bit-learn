const ru = {
	groupDelimiter:" ",
	groupSize:3,
	decimalDelimiter:",",
	decimalSize:2,
	minusPosition:"before",
	minusSign:"-",

	dateFormat:"%d.%m.%Y",
	timeFormat:"%H:%i",
	longDateFormat:"%d %F %Y",
	fullDateFormat:"%d.%m.%Y %H:%i",

	price:"{obj} руб.",
	priceSettings:{
		groupDelimiter:" ",
		groupSize:3,
		decimalDelimiter:",",
		decimalSize:2,
		minusPosition:"before",
		minusSign:"-"
	},
	
	calendar:{
		monthFull:["Январь", "Февраль", "Март", "Апрель", "Maй", "Июнь", "Июль", "Август", "Сентябрь", "Oктябрь", "Ноябрь", "Декабрь"],
		monthShort:["Янв", "Фев", "Maр", "Aпр", "Maй", "Июн", "Июл", "Aвг", "Сен", "Окт", "Ноя", "Дек"],
		dayFull:[ "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
		dayShort:["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
		hours: "Часы",
		minutes: "Минуты",
		done: "Гoтовo",
		clear: "Очистить",
		today: "Сегодня"
	},

	dataExport:{
		page:"Страница",
		of:"из"
	},
	PDFviewer:{
		of:"из",
		automaticZoom:"Автоматический зум",
		actualSize:"Настоящий размер",
		pageFit:"Размер страницы",
		pageWidth:"Ширина страницы",
		pageHeight:"Высота страницы",
		enterPassword:"Введите пароль",
		passwordError:"Неверный пароль"
	},
	aria:{
		calendar:"Календарь",
		increaseValue:"Увеличить значение",
		decreaseValue:"Уменьшить значение",
		navMonth:["Предыдущий месяц", "Следующий месяц"],
		navYear:["Предыдущий год", "Следующий год"],
		navDecade:["Предыдущие десять лет", "Следующие десять лет"],
		dateFormat:"%d %F %Y",
		monthFormat:"%F %Y",
		yearFormat:"%Y",
		hourFormat:"Часы: %H",
		minuteFormat:"Минуты: %i",
		removeItem:"Удалить элемент",
		pages:["Первая страница", "Предыдущая страница", "Следующая страница", "Последняя страница"],
		page:"Страница",
		headermenu:"Меню шапки таблицы",
		openGroup:"Развернуть группу столбцов",
		closeGroup:"Свернуть группу столбцов",
		closeTab:"Закрыть вкладку",
		showTabs:"Показать больше вкладок",
		resetTreeMap:"Вернуться к первоначальному представлению",
		navTreeMap:"Перейти на уровень выше",
		nextTab:"Следующая вкладка",
		prevTab:"Предыдущая вкладка",
		multitextSection:"Добавить элемент",
		multitextextraSection:"Удалить элемент",
		showChart:"Показать чарт",
		hideChart:"Спрятать чарт",
		resizeChart:"Изменить размер чарта"
	},
	richtext:{
		underline: "Подчеркивание",
		bold: "Жирный",
		italic: "Курсив"
	},
	combo:{
		select:"Выбрать",
		selectAll:"Выбрать все",
		unselectAll:"Сброс выбора"
	},
	message:{
		ok:"OK",
		cancel:"Отмена"
	},
	comments:{
		send: "Отправить",
		confirmMessage: "Комментарий будет удален. Вы уверены?",
		edit: "Редактировать",
		remove: "Удалить",
		placeholder: "Введите текст..",
		moreComments:"Больше комментариев"
	},
	filter:{
		less: "меньше",
		lessOrEqual: "меньше или равно",
		greater: "больше",
		greaterOrEqual: "больше или равно",
		contains: "содержит",
		notContains: "не содержит",
		equal: "равно",
		notEqual: "не равно",
		beginsWith: "начинается с",
		notBeginsWith: "не начинается с",
		endsWith: "заканчиватся",
		notEndsWith: "не заканчиватся",
		between: "между",
		notBetween: "не между"
	},
	timeboard:{
		seconds: "Секунды"
	}
};

export default ru;