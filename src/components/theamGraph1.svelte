<script>

    export let chartName;

// @ts-ignore
google.charts.load("current", {packages:["corechart"]});
      // @ts-ignore
      google.charts.setOnLoadCallback(drawChartdonutchart);
      function drawChartdonutchart() {
        // @ts-ignore
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        var options = {
          title: 'My Daily Activities',
          pieHole: 0.2,
          legend:{position : 'right'},
          width:680,
          height:350
        };

        // @ts-ignore
        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }


      // @ts-ignore
      google.charts.load('current', {'packages':['corechart']});
      // @ts-ignore
      google.charts.setOnLoadCallback(drawChartchart_div);
      function drawChartchart_div() {
        // @ts-ignore
        var data = google.visualization.arrayToDataTable([
          ['Mon', 28, 28, 38, 38],
          ['Tue', 38, 38, 55, 55],
          ['Wed', 55, 55, 77, 77],
          ['Thu', 77, 77, 66, 66],
          ['Fri', 66, 66, 22, 22]
          // Treat the first row as data.
        ], true);

        var options = {
          legend: 'none',
          bar: { groupWidth: '100%' }, // Remove space between bars.
          candlestick: {
            fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
            risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
          },
          width:680,
          height:350
        };

        // @ts-ignore
        var chart = new google.visualization.CandlestickChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

</script>

<div class="theamGraph1">
    <div id={chartName} style="min-width: fit-content"></div>
</div>


<style>

/* .theamGraph1{
    width: 95%;
    margin-top: 20px;
    height: 350px;
    background-color: #FFFFFF;
    border-radius: 20px;
    display: grid;
    justify-content: center;
    align-items: center;
} */

:global(svg){
    width: 95%;
    margin-top: 20px;
    height: 350px;
    background-color: #FFFFFF;
    border-radius: 20px;
}


</style>