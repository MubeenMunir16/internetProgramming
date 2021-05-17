
// function yearSelection(){
    var current = document.getElementById('current');
    current.addEventListener('click', currentPopulation);

    var ten = document.getElementById('ten');
    ten.addEventListener('click', ten_year_ago_Population);

    var twenty = document.getElementById('twenty');
    twenty.addEventListener('click', twenty_years_ago_population);

function currentPopulation(){

    let myChart = document.getElementById('myChart').getContext('2d');
    //global options 
            Chart.defaults.global.defaultFontFamily = 'Lato';
            Chart.defaults.global.defaultFontSize = 18;
            Chart.defaults.global.defaultFontColor = '#777';
            let massPopChart = new Chart(myChart, {
                type: 'bar',
                data: {
                    labels: ['Boston', 'Worchester', 'SpringField', 'Lowel', 'Cambridge', 'New Bedford'],
                    datasets: [{
                        label: 'Population',
                        data: [
                            617000,
                            181000,
                            150000,
                            120000,
                            100000,
                            95000
                        ],
                        // backgroundColor:'green',
                        backgroundColor: [
                            'green',
                            'blue',
                            'pink',
                            'red',
                            'yellow',
                            'orange'
                        ],
                        borderWidth: 1,
                        borderColor: '#777',
                        hoverBorderWidth: 3,
                        hoverBorderColor: '#000'
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: 'Largest Cities in Massachusetts',
                        fontSize: 25
                    },
                    legend: {
                        display: true,
                        position: 'right',
                        labels: {
                            fontColor: '#000'
                        },
                        layout: {
                            left: 50,
                            right: 0,
                            bottom: 0,
                            top: 0
                        }
                    }
                }
            });
}
function ten_year_ago_Population(){

    let myChart = document.getElementById('myChart').getContext('2d');
    //global options 
            Chart.defaults.global.defaultFontFamily = 'Lato';
            Chart.defaults.global.defaultFontSize = 18;
            Chart.defaults.global.defaultFontColor = '#777';
            let massPopChart = new Chart(myChart, {
                type: 'bar',
                data: {
                    labels: ['Boston', 'Worchester', 'SpringField', 'Lowel', 'Cambridge', 'New Bedford'],
                    datasets: [{
                        label: 'Population',
                        data: [
                            117000,
                            141000,
                            120000,
                            110000,
                            100000,
                            85000
                        ],
                        // backgroundColor:'green',
                        backgroundColor: [
                            'green',
                            'blue',
                            'pink',
                            'red',
                            'yellow',
                            'orange'
                        ],
                        borderWidth: 1,
                        borderColor: '#777',
                        hoverBorderWidth: 3,
                        hoverBorderColor: '#000'
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: 'Largest Cities in Massachusetts',
                        fontSize: 25
                    },
                    legend: {
                        display: true,
                        position: 'right',
                        labels: {
                            fontColor: '#000'
                        },
                        layout: {
                            left: 50,
                            right: 0,
                            bottom: 0,
                            top: 0
                        }
                    }
                }
            });
}
function twenty_years_ago_population(){

    let myChart = document.getElementById('myChart').getContext('2d');
    //global options 
            Chart.defaults.global.defaultFontFamily = 'Lato';
            Chart.defaults.global.defaultFontSize = 18;
            Chart.defaults.global.defaultFontColor = '#777';
            let massPopChart = new Chart(myChart, {
                type: 'bar',
                data: {
                    labels: ['Boston', 'Worchester', 'SpringField', 'Lowel', 'Cambridge', 'New Bedford'],
                    datasets: [{
                        label: 'Population',
                        data: [
                            247000,
                            111000,
                            120000,
                            80000,
                            50000,
                            45000
                        ],
                        // backgroundColor:'green',
                        backgroundColor: [
                            'green',
                            'blue',
                            'pink',
                            'red',
                            'yellow',
                            'orange'
                        ],
                        borderWidth: 1,
                        borderColor: '#777',
                        hoverBorderWidth: 3,
                        hoverBorderColor: '#000'
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: 'Largest Cities in Massachusetts',
                        fontSize: 25
                    },
                    legend: {
                        display: true,
                        position: 'right',
                        labels: {
                            fontColor: '#000'
                        },
                        layout: {
                            left: 50,
                            right: 0,
                            bottom: 0,
                            top: 0
                        }
                    }
                }
            });
}