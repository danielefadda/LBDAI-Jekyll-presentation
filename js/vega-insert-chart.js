function _insertChart(chartId, schemaUrl, width, height) {
    const renderChart = () => {
        const chartDiv = document.getElementById(chartId);
        if (!chartDiv) {
            return;
        }

        const chart = document.createElement('vegachart');
        chart.style.width = width;
        chart.style.height = height;
        chart.setAttribute('schema-url', schemaUrl);
        chartDiv.appendChild(chart);

        if (typeof parseSchema !== 'function' || typeof vegaEmbed !== 'function') {
            return;
        }

        setTimeout(() => {
            parseSchema(chart)
                .then(schema => vegaEmbed(chart, schema, { actions: false }))
                .catch(() => {});
        }, 250);
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderChart, { once: true });
        return;
    }

    renderChart();
}