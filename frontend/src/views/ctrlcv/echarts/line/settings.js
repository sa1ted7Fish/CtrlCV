// line chart 1
export const lineChart1 = {
    id: "line-chart-1",
    title: "基础折线图",
    size: {
      width: "300px",
      height: "220px"
    },
    option: {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line'
            }
        ]
    },
}