"use strict";
var url = "data.json";
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    // console.log(data);
    var day = data.map((elem) => elem.day);
    var amount = data.map((elem) => elem.amount);
    console.log(day, amount);

    // Chart.defaults.global.defaultFontFamily = "DM Sans";
    const ctx = document.getElementById("myChart");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: day,
        datasets: [
          {
            label: "Amount",
            data: amount,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: [
              "hsl(10, 79%, 65%)",
              "hsl(10, 79%, 65%)",
              "hsl(186, 34%, 60%)",
              "hsl(10, 79%, 65%)",
              "hsl(10, 79%, 65%)",
              "hsl(10, 79%, 65%)",
              "hsl(10, 79%, 65%)",
            ],
            backgroundColor: [
              "hsl(10, 79%, 65%)",
              "hsl(10, 79%, 65%)",
              "hsl(186, 34%, 60%)",
              "hsl(10, 79%, 65%)",
              "hsl(10, 79%, 65%)",
              "hsl(10, 79%, 65%)",
              "hsl(10, 79%, 65%)",
            ],
            hoverBorderColor: [
              "hsl(10,100%,76.47%)",
              "hsl(10,100%,76.47%)",
              "hsl(187.35,48.51%,80.2%)",
              "hsl(10,100%,76.47%)",
              "hsl(10,100%,76.47%)",
              "hsl(10,100%,76.47%)",
              "hsl(10,100%,76.47%)",
            ],
            hoverBackgroundColor: [
              "hsl(10,100%,76.47%)",
              "hsl(10,100%,76.47%)",
              "hsl(187.35,48.51%,80.2%)",
              "hsl(10,100%,76.47%)",
              "hsl(10,100%,76.47%)",
              "hsl(10,100%,76.47%)",
              "hsl(10,100%,76.47%)",
            ],

            borderSkipped: false,
            responsive: true,
          },
        ],
      },
      options: {
        scales: {
          x: {
            grid: {
              display: false,
            },
            border: {
              display: false,
            },
            ticks: {
              color: 'hsl(28, 10%, 53%)',
              font: {
                size: 14,
                family: 'DM Sans',
              },
            },
          },
          y: {
            beginAtZero: true,
            display: false,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            xAlign: "center",
            yAlign: "bottom",
            displayColors: false,
            footerFontStyle: "bold",
            caretSize: 0,
            callbacks: {
              label: (context) => {
                var label = "";

                if (label) {
                  label += ": ";
                }
                if (context.parsed.y !== null) {
                  label += `$${context.parsed.y}`;
                }

                return label;
              },
              title: () => null,
            },
            bodyFont: {
              size: 16,
              weight: "bold",
              family: 'DM Sans',
            },
          },
        },
      },
    });
  }
};