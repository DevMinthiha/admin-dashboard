$(".counter-up").counterUp({
    delay: 10,
    time: 1000
});


let dateArr = ['Aug 26', 'Aug 25', 'Aug 24', 'Aug 23', 'Aug 22', 'Aug 21', 'Aug 20', 'Aug 19', 'Aug 18', 'Aug 17', 'Aug 16'];
let orderArr = [7,5,6,4,6,4,8,6,8,9,6];
let viewerArr = [13,12,15,14,20,17,19,16,23,16,33];
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dateArr,
        datasets: [
            {
            label: 'order-list',
            data: orderArr,
            backgroundColor: [
                "#0d6efd50",
            ],
            borderColor: [
                "#0d6efd'",
            ],
            borderWidth: 1,
            tension: 0,
        },
        {
            label: 'viewer-list',
            data: viewerArr,
            backgroundColor: [
                "#19875450",
            ],
            borderColor: [
                "#198754'",
            ],
            borderWidth: 1,
            tension: 0,
        }
    ]
    },
    options: {
        scales: {
            yAxes: [{
                display: false,
                ticks: {
                    display: false
                }
            }],
            xAxes: [{
                display: false,
                ticks: {
                    display: false
                },
            }]
        },
        legend: {
            display: true,
            shape: "circle",
            labels: {
                usePointStyle: true,
            }
        }
    }
});


let orderFromPlace = [5,15,4,9,7];
let places = ['YGN', 'MDY', 'NPY', 'SHAN', 'MGW'];

var op = document.getElementById('op').getContext('2d');
var opChart = new Chart(op, {
    type: 'doughnut',
    data: {
        labels: places,
        datasets: [{
            label: '# of Votes',
            data: orderFromPlace,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                usePointStyle: true,
            }
        }
    }
});