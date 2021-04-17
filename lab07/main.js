
const array_sum = (accumulator, currentValue) => accumulator + currentValue
const array_mult = (accumulator, currentValue) => accumulator * currentValue

const languages = [["SQL", 30], ["JavaScript", 56], ["Java", 54], ["ASM", 320], ["C", 128], ["C++", 53]]


class Model {
	constructor() {
		this.Fi_labels = ["Обмен данными", "Распределенная обработка", "Производительность", "Эксплуатационные ограничения по аппаратным ресурсам", "Транзакционная нагрузка", "Интенсивность взаимодействия с пользователем (оперативный ввод данных)", "Эргономические характеристики, влияющие на эффективность работы конечных пользователей", "Оперативное обновление", "Сложность обработки", "Повторное использование", "Легкость инсталляции", "Легкость эксплуатации/администрирования", "Портируемость", "Гибкость"]

		this.Fi_labels_eng = ["Data_exchange", "Distributed_processing", "Performance", "Operating_Limitations_on_Hardware_Resources", "Transactional_Load", "Intensity_of_User_Interaction", "Ergonomics_Affecting_End_User_Efficiency","Online_update","Processing_complexity","Reuse","Ease_of_installation","Ease_of_use_administration","Portability","Flexibility"]
		this.Fi_values = [] // 0 - 5 are possible values

		this.Cocomo_labels = ["RCPX", "RUSE", "PERS", "PREX", "PDIF", "FCIL", "SCED"]
		this.Cocomo_label_meanings = [
			"Надежность и уровень сложности разрабатываемой системы", "Повторное использование компонентов", "Возможности персонала", "Опыт персонала", "Сложность платформы разработки", "Средства поддержки", "График работ"]

		//Очень низкий, Низкий, Номинальный, Высокий, Очень высокий, Сверхвысокий
		this.Cocomo_possible_values =[
			[0.6, 0.83, 1.0, 1.33, 1.91, 2.72],
			[undefined, 0.95, 1.0, 1.07, 1.15, 1.24],
			[1.62, 1.26, 1.0, 0.83, 0.63, 0.5],
			[1.33, 1.22, 1.0, 0.87, 0.74, 0.62],
			[undefined, 0.87, 1.0, 1.29, 1.81, 2.61],
			[1.3, 1.1, 1, 0.87, 0.73, 0.62],
			[1.43, 1.14, 1, 1, 1, undefined]]
		this.Cocomo_values = []

		this.p_factors_labels = ["PREC", "FLEX", "RESL", "TEAM", "PMAT"]
		this.p_factors_labels_meanings = ["Новизна проекта", "Гибкость процесса разработки", "Разрешение рисков в архитектуре системы", "Сплоченность команды", "Уровень зрелости процесса разработки"]
		this.p_factors_possible_values = [
											[["Полное отсутствие прецедентов, полностью непредсказуемый проект",  6.2],
											["Почти полное отсутствие прецедентов, взначительной мере непредсказуемый проект", 4.96],
											["Наличие некоторого количества прецедентов", 3.72],
											["Общее знакомство с проектом", 2.48],
											["Значительное знакомство с проектом", 1.24],
											["Полное знакомство с проектом", 0]],

											[["Точный, строгий процесс разработки", 5.07],
											["Случайные послабления в процессе", 4.05],
											["Некоторые послабления в процессе", 3.04],
											["Большей частью согласованный процесс", 2.03],
											["Некоторое согласование процесса", 1.01],
											["Заказчик определил только общие цели", 0]],

											[["Малое (20 %)", 7],
											["Некоторое (40 %)", 5.65],
											["Частое (60 %)", 4,24],
											["В целом (75 %)", 2.83],
											["Почти полное (90 %)", 1.41],
											["Полное (100%)", 0]],

											[["Сильно затрудненное взаимодействие", 5.48],
											["Несколько затрудненное взаимодействие", 4.38],
											["Некоторая согласованность", 3.29],
											["Повышенная согласованность", 2.19],
											["Высокая согласованность", 1.1],
											["Взаимодействие как в едином целом", 0]],

											[["Уровень 1 СММ", 7],
											["Уровень 1+ СММ", 6.24],
											["Уровень 2 СММ", 4.68],
											["Уровень 3 СММ", 1.12],
											["Уровень 7 СММ", 1.56],
											["Уровень 5 СММ", 0]]
										]
		this.p_factors_values = []
	}
	insert_Fi_data() {
		this.Data_exchange = parseFloat(document.getElementById("Data_exchange").value)
		this.Distributed_processing = parseFloat(document.getElementById("Distributed_processing").value)
		this.Performance = parseFloat(document.getElementById("Performance").value)
		this.Operating_Limitations_on_Hardware_Resources = parseFloat(document.getElementById("Operating_Limitations_on_Hardware_Resources").value)
		this.Transactional_Load = parseFloat(document.getElementById("Transactional_Load").value)
		this.Intensity_of_User_Interaction = parseFloat(document.getElementById("Intensity_of_User_Interaction").value)
		this.Ergonomics_Affecting_End_User_Efficiency = parseFloat(document.getElementById("Ergonomics_Affecting_End_User_Efficiency").value)
		this.Online_update = parseFloat(document.getElementById("Online_update").value)
		this.Processing_complexity = parseFloat(document.getElementById("Processing_complexity").value)
		this.Reuse = parseFloat(document.getElementById("Reuse").value)
		this.Ease_of_installation = parseFloat(document.getElementById("Ease_of_installation").value)
		this.Ease_of_use_administration = parseFloat(document.getElementById("Ease_of_use_administration").value)
		this.Portability = parseFloat(document.getElementById("Portability").value)
		this.Flexibility = parseFloat(document.getElementById("Flexibility").value)

		this.Fi_values = [this.Data_exchange, this.Distributed_processing, this.Performance, this.Operating_Limitations_on_Hardware_Resources, this.Transactional_Load, this.Intensity_of_User_Interaction, this.Ergonomics_Affecting_End_User_Efficiency, this.Online_update, this.Processing_complexity, this.Reuse, this.Ease_of_installation, this.Ease_of_use_administration, this.Portability, this.Flexibility]
	}
	insert_Cocomo_data() {
		this.RCPX = parseFloat(document.getElementById("RCPX").value)
		this.RUSE = parseFloat(document.getElementById("RUSE").value)
		this.PERS = parseFloat(document.getElementById("PERS").value)
		this.PREX = parseFloat(document.getElementById("PREX").value)
		this.PDIF = parseFloat(document.getElementById("PDIF").value)
		this.FCIL = parseFloat(document.getElementById("FCIL").value)
		this.SCED = parseFloat(document.getElementById("SCED").value)
		this.Cocomo_values = [this.RCPX, this.RUSE, this.PERS, this.PREX, this.PDIF, this.FCIL, this.SCED]
	}
	insert_p_data() {
		this.PREC = parseFloat(document.getElementById("PREC").value)
		this.FLEX = parseFloat(document.getElementById("FLEX").value)
		this.RESL = parseFloat(document.getElementById("RESL").value)
		this.TEAM = parseFloat(document.getElementById("TEAM").value)
		this.PMAT = parseFloat(document.getElementById("PMAT").value)
		this.p_factors_values = [this.PREC, this.FLEX, this.RESL, this.TEAM, this.PMAT]
	}
	calcukate_KLOC(allFP) {
		this.fp = allFP * (0.65 + 0.01 * this.Fi_values.reduce(array_sum))

		// 30% кода будет написано на SQL (13 LOC на один оператор);
		// 10 % - на JavaScript (56 LOC);
		// 60% - на Java (53 LOC).
		this.kloc = (0.3 * 13 + 0.1 * 56 + 0.6 * 53) * this.fp / 1000

		return this.kloc
	}
	calculate_Cocomo() {
		this.p = this.p_factors_values.reduce(array_sum) / 100 + 1.01
		this.work = 2.45 * this.Cocomo_values.reduce(array_mult) * Math.pow(this.kloc, this.p)
		this.time = 3.0 * Math.pow(this.work, 0.33 + 0.2 * (this.p - 1.01))
		this.workers = Math.round(this.work / this.time)
		this.budget = this.workers * 150000 * this.time
	}
}

function generate() {
	var model = new Model()
	for (i = 0; i < model.p_factors_labels.length; i++)
	{
		id = model.p_factors_labels[i]
		name = model.p_factors_labels_meanings[i]
		v = model.p_factors_possible_values[i]
		console.log(`this.${id} = parseFloat(document.getElementById("${id}").value)`)
	// 	console.log(
	// `	<div inputdata>
	// 		<label for="${id}">${name} (${id})</label>
	// 		<select name="${id}" id="${id}">
	// 			<option value="${v[0][1]}">${v[0][0]}</option>
	// 			<option value="${v[1][1]}">${v[1][0]}</option>
	// 			<option value="${v[2][1]}">${v[2][0]}</option>
	// 			<option value="${v[3][1]}">${v[3][0]}</option>
	// 			<option value="${v[4][1]}">${v[4][0]}</option>
	// 			<option value="${v[5][1]}">${v[5][0]}</option>
	// 		</select>
	// 	</div>`)

		// id = model.Cocomo_labels[i]
		// console.log(`this.${id} = parseFloat(document.getElementById("${id}").value)`)
	// 	name = model.Cocomo_label_meanings[i]
	// 	v = model.Cocomo_possible_values[i]
	// 	console.log(
	// `	<div inputdata>
	// 		<label for="${id}">${name} (${id})</label>
	// 		<select name="${id}" id="${id}">
	// 			<option value="${v[0]}">Очень низкий</option>
	// 			<option value="${v[1]}">Низкий</option>
	// 			<option value="${v[2]}">Номинальный</option>
	// 			<option value="${v[3]}">Высокий</option>
	// 			<option value="${v[4]}">Очень высокий</option>
	// 			<option value="${v[5]}">Сверхвысокий</option>
	// 		</select>
	// 	</div>`)

	//	id = model.Fi_labels_eng[i]
	// 	name = model.Fi_labels[i]
	// 	console.log(
	// `	<div inputdata>
	// 		<label for="${id}">${name}</label>
	// 		<select name="${id}" id="${id}">
	// 			<option value="0">нет влияния</option>
	// 			<option value="1">случайное влияние</option>
	// 			<option selected value="2">небольшое влияние</option>
	// 			<option value="3">среднее влияние</option>
	// 			<option value="4">существенное влияние</option>
	// 			<option value="5">сильное влияние</option>
	// 		</select>
	// 	</div>`)

	//	console.log(`this.${id} = parseFloat(document.getElementById("${id}").value)`)
	}
}

// generate()

function setdata() {
	model = new Model()
	model.insert_Fi_data()
	model.insert_Cocomo_data()
	model.insert_p_data()
	console.log("Fi_values", model.Fi_values)
	console.log("Cocomo values", model.Cocomo_values)
	console.log("values for p", model.p_factors_values)

	model.calcukate_KLOC(79)
	model.calculate_Cocomo()

	console.log("fp", model.fp)
	console.log("kloc", model.kloc)
	console.log("p", model.p)
	console.log("work", model.work)
	console.log("time", model.time)
	console.log("people", model.workers)
	console.log("budget", model.budget)
}
