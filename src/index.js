
const patient_cards = document.querySelector('.patient-cards')
const patient_details = document.querySelector('.patient-details')
const diagnostic_row = document.querySelector('.diagnostic-row')
const respiratory_rate = document.querySelector('.respiratory-rate')
const temperature = document.querySelector('.temperature')
const heart_rate = document.querySelector('.heart-rate')
const respiratory_status = document.querySelector('.respiratory-status')
const temperature_status = document.querySelector('.temperature-status')
const heart_rate_status = document.querySelector('.heart-rate-status')
const systolic = document.querySelector('.systolic')
const diastolic = document.querySelector('.diastolic')
const systolic_status = document.querySelector('.systolic-status')
const diastolic_status = document.querySelector('.diastolic-status')
let patients = []

const handleSelect = (e) => {
    e.currentTarget.classList.add('selected', 'bg-[#D8FCF7]', 'w-full', 'px-2', 'py-2')
    const other_cards = document.querySelectorAll('.patient-card')
    other_cards.forEach(card => {
        if (card !== e.currentTarget) {
            card.classList.remove('selected', 'bg-[#D8FCF7]', 'w-full', 'px-2', 'py-2')
        }
    })

    patient_details.innerHTML = `               <div class="bg-white h-[720px] top-[108px] left-[1216px] rounded-[16px] py-4 ">
    <div class="w-[150px] h-[150px] flex mx-auto">
        <img src=${patients[e.currentTarget.id].profile_picture} alt="" class="w-full">
    </div>
    <h1 class="font-semibold mt-2 text-center mb-10">${patients[e.currentTarget.id].name}</h1>
  <div class="px-6 space-y-8 mb-10">
    <div class="flex items-center gap-2">
        <div class="bg-[#f6f7f8] w-[42px] h-[42px] p-1 flex items-center justify-center rounded-full">
            <img src="./assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg" alt="">
        </div>
        <div>
            <p class="text-gray-600 text-sm">Date of Birth</p>
            <h2 class="font-semibold">${patients[e.currentTarget.id].date_of_birth}</h2>
        </div>
    </div>
    <div class="flex items-center gap-4">
        <div class="bg-[#f6f7f8] w-[42px] h-[42px] p-1 flex items-center justify-center rounded-full">
            <img src=${patients[e.currentTarget.id].gender === "Male" ? "./assets/MaleIcon.svg" : "./assets/FemaleIcon.svg"} alt="">
        </div>
        <div>
            <p class="text-gray-600 text-sm">Gender</p>
            <h2 class="font-semibold">${patients[e.currentTarget.id].gender}</h2>
        </div>
    </div>

    <div class="flex items-center gap-4">
        <div class="bg-[#f6f7f8] w-[42px] h-[42px] p-1 flex items-center justify-center rounded-full">
            <img src="./assets/PhoneIcon.svg" alt="">
        </div>
        <div>
            <p class="text-gray-600 text-sm">Contact Info</p>
            <h2 class="font-semibold">${patients[e.currentTarget.id].phone_number}</h2>
        </div>
    </div>

    <div class="flex items-center gap-4">
        <div class="bg-[#f6f7f8] w-[42px] h-[42px] p-1 flex items-center justify-center rounded-full">
            <img src="./assets/PhoneIcon.svg" alt="">
        </div>
        <div>
            <p class="text-gray-600 text-sm">Emergency Contacts</p>
            <h2 class="font-semibold">${patients[e.currentTarget.id].emergency_contact}</h2>
        </div>
    </div>

    <div class="flex items-center gap-4 ">
        <div class="bg-[#f6f7f8] w-[42px] h-[42px] p-1 flex items-center justify-center rounded-full">
            <img src="./assets/InsuranceIcon.svg" alt="">
        </div>
        <div>
            <p class="text-gray-600 text-sm">Insurance Provider</p>
            <h2 class="font-semibold">${patients[e.currentTarget.id].insurance_type}</h2>
        </div>
    </div>
  </div>
  <div class="px-6">
      <button class="bg-[#01F0D0] w-full h-[48px] rounded-full  ">Show All information</button>

  </div>
</div>
<div class="bg-white rounded-[16px] h-[304px] top-[855px] left-[1216px]  overflow-hidden overflow-y-scroll">
    <div class="p-6">
        <h1 class="font-semibold mb-4">Lab Results</h1>
        <div class="">
            <ul class="space-y-6">
            ${patients[e.currentTarget.id].lab_results.map(result => `<li class="flex items-center justify-between">${result} <img src="./assets/download_FILL0_wght300_GRAD0_opsz24 (1).svg" alt=""></li>`).join('')}
            </ul>
        </div>
    </div>
</div>`
diagnostic_row.innerHTML = ''
patients[e.currentTarget.id].diagnostic_list.forEach((item, index) => {
    const diagnostic = document.createElement("tr")
    diagnostic.innerHTML = `
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${item.name}</td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.description}</td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.status}</td>
    `
    diagnostic_row.appendChild(diagnostic)
})
const diagnosis_history = patients[e.currentTarget.id].diagnosis_history[0]

respiratory_rate.innerText = diagnosis_history.respiratory_rate.value
temperature.innerText = diagnosis_history.temperature.value
heart_rate.innerText = diagnosis_history.heart_rate.value
diastolic.innerText = diagnosis_history.blood_pressure.diastolic.value
systolic.innerText = diagnosis_history.blood_pressure.systolic.value
respiratory_status.innerHTML = `${diagnosis_history.respiratory_rate.levels.toLowerCase().includes('lower') ? '<img src="./assets/ArrowDown.svg" alt="">' : diagnosis_history.respiratory_rate.levels.toLowerCase().includes('higher') ? '<img src="./assets/ArrowUp.svg" alt="">' : ''}${diagnosis_history.respiratory_rate.levels}`
temperature_status.innerHTML = `${diagnosis_history.temperature.levels.toLowerCase().includes('lower') ? '<img src="./assets/ArrowDown.svg" alt="">' : diagnosis_history.temperature.levels.toLowerCase().includes('higher') ? '<img src="./assets/ArrowUp.svg" alt="">' : ''}${diagnosis_history.temperature.levels}`
heart_rate_status.innerHTML = `${diagnosis_history.heart_rate.levels.toLowerCase().includes('lower') ? '<img src="./assets/ArrowDown.svg" alt="">' : diagnosis_history.heart_rate.levels.toLowerCase().includes('higher') ? '<img src="./assets/ArrowUp.svg" alt="">' : ''}${diagnosis_history.heart_rate.levels}`
diastolic_status.innerHTML = `${diagnosis_history.blood_pressure.diastolic.levels.toLowerCase().includes('lower') ? '<img src="./assets/ArrowDown.svg" alt="">' : diagnosis_history.blood_pressure.diastolic.levels.toLowerCase().includes('higher') ? '<img src="./assets/ArrowUp.svg" alt="">' : ''}${diagnosis_history.blood_pressure.diastolic.levels}`
systolic_status.innerHTML = `${diagnosis_history.blood_pressure.systolic.levels.toLowerCase().includes('lower') ? '<img src="./assets/ArrowDown.svg" alt="">' : diagnosis_history.blood_pressure.systolic.levels.toLowerCase().includes('higher') ? '<img src="./assets/ArrowUp.svg" alt="">' : ''}${diagnosis_history.blood_pressure.systolic.levels}`

const ctx = document.getElementById('myChart').getContext('2d');
let chartStatus = Chart.getChart("myChart");
if (chartStatus != undefined) {
  chartStatus.destroy();
}
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: patients[e.currentTarget.id].diagnosis_history.reverse().map(item => item.month + ' ' + item.year),
        datasets: [
            {
                label: 'Systolic',
                data: patients[e.currentTarget.id].diagnosis_history.reverse().map(item => item.blood_pressure.systolic.value),
                borderColor: 'rgb(194,110,180)',
                tension: 0.1
            },
            {
                label: 'Diastolic',
                data: patients[e.currentTarget.id].diagnosis_history.reverse().map(item => item.blood_pressure.diastolic.value),
                borderColor: '#7E6CAB',
                tension: 0.1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false,
                ticks: {
                    padding: 0 // Adjust this value to increase or decrease the padding between the graph values
                }
            },
            x: {
                ticks: {
                    padding: 0 // Adjust this value to increase or decrease the padding between the graph values
                }
            }
        }
    }
});

}

fetch("https://fedskillstest.coalitiontechnologies.workers.dev/", { method: "GET", headers: { Authorization: "Basic " + btoa("coalition:skills-test") }})
.then(res => res.json())
.then(data => {
    console.log(data)
    patients = data
    data.forEach((item, index) => {
    const patient =  `
       <div class="flex items-center gap-4 justify-between cursor-pointer">
           <div class="flex items-center gap-4">
               <div class="w-[48px] h-[48px]">
                   <img src="${item.profile_picture}" alt="" class="w-full">
               </div>
               <div>
                   <h1 class="font-semibold text-[14px]">${item.name}</h1>
                   <p class="text-gray-600 text-sm">${item.gender}, ${item.age}</p>
               </div>
           </div>
           <img src="./assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg" alt="">
       </div>
`
       const patient_node = document.createElement("div")
       patient_node.classList.add('patient-card')
       patient_node.id = index
       patient_node.innerHTML = patient
        patient_node.addEventListener('click', handleSelect)
       patient_cards.appendChild(patient_node)
    });
    })
