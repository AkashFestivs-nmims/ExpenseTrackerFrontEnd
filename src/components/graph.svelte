
<script>
// @ts-nocheck

    import { onMount } from "svelte";



   onMount(() => {

    
    
        var ctx = document.getElementById('myChart1');
    
        const data = {
        labels: [
            'Red',
            'Green',
            'Yellow',
            'Grey',
            'Blue'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [11, 16, 7, 3, 14],
            backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)'
            ]
        }]
};
    
    
const config = {
  type: 'polarArea',
  data: data,
  options: {}
};
    
      
            new Chart(ctx, config);
        })

    
    
    
      </script>
    
    
        <div class="card text-dark bg-light mb-3" style="max-width: 26rem;">
            <div class="card-header bg-info">Expense Chart</div>
            <div class="card-body">
                <canvas id="myChart1"></canvas>
            </div>
        </div>
    
        
    
    
    <style>
    
    </style>