        // Get DOM elements
        const axisWidthInput = document.getElementById('axis-width');
        const numHolesInput = document.getElementById('num-holes');
        const holeDiameterInput = document.getElementById('hole-diameter');
        const marginInput = document.getElementById('margin');
        const updateBtn = document.getElementById('update-btn');
        const canvas = document.getElementById('visualization');
        const ctx = canvas.getContext('2d');

        // Display elements
        const displayWidth = document.getElementById('display-width');
        const displayHoles = document.getElementById('display-holes');
        const displayDiameter = document.getElementById('display-diameter');
        const displaySpacing = document.getElementById('display-spacing');
        const displayEdge = document.getElementById('display-edge');

        // Set canvas dimensions
        function resizeCanvas() {
            canvas.width = canvas.offsetWidth;
            canvas.height = 200;
        }

        function drawVisualization() {
            // Get input values
            const axisWidth = parseFloat(axisWidthInput.value);
            const numHoles = parseInt(numHolesInput.value);
            const holeDiameter = parseFloat(holeDiameterInput.value);
            const margin = parseFloat(marginInput.value);
            

            // Update display values
            displayWidth.textContent = axisWidth;
            displayHoles.textContent = numHoles;
            displayDiameter.textContent = holeDiameter;

            // Calculate edge distance and spacing
            const edgeDistance = numHoles > 1 ? holeDiameter / 2 : (axisWidth - 2 * margin) / 2;
            const usableWidth = axisWidth - 2 * edgeDistance - 2 * margin;
            const spacing = numHoles > 1 ? usableWidth / (numHoles - 1) : 0;

            displaySpacing.textContent = spacing.toFixed(2);
            displayEdge.textContent = margin.toFixed(2);

            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Set scale factor to fit axis within canvas
            const padding = 40;
            const scaleFactor = (canvas.width - padding * 2) / axisWidth;

            // Draw axis
            const axisY = canvas.height / 2;
            const scaledAxisWidth = axisWidth * scaleFactor;
            const startX = (canvas.width - scaledAxisWidth) / 2;

            ctx.beginPath();
            ctx.moveTo(startX, axisY);
            ctx.lineTo(startX + scaledAxisWidth, axisY);
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#333';
            ctx.stroke();

            // Draw holes
            const scaledHoleDiameter = holeDiameter * scaleFactor;
            ctx.fillStyle = '#0070f3';

            if (numHoles === 1) {
                // Single hole in the center
                const holeX = startX + (scaledAxisWidth / 2);
                ctx.beginPath();
                ctx.arc(holeX, axisY, scaledHoleDiameter / 2, 0, Math.PI * 2);
                ctx.fill();

                // Label for center hole
                ctx.fillStyle = '#333';
                ctx.font = '12px sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('Center', holeX, axisY - scaledHoleDiameter - 5);
            } else {
                // Multiple holes with equal spacing
                const scaledSpacing = spacing * scaleFactor;
                const scaledEdgeDistance = edgeDistance * scaleFactor;
                const scaledMargin = margin * scaleFactor;

                for (let i = 0; i < numHoles; i++) {
                    const holeX = startX + scaledMargin + scaledEdgeDistance + (i * scaledSpacing);

                    // Draw hole
                    ctx.beginPath();
                    ctx.arc(holeX, axisY, scaledHoleDiameter / 2, 0, Math.PI * 2);
                    ctx.fill();

                    // Label hole position
                    ctx.fillStyle = '#333';
                    ctx.font = '12px sans-serif';
                    ctx.textAlign = 'center';
                    ctx.fillText(`Hole ${i + 1}`, holeX, axisY - scaledHoleDiameter - 5);

                    // Draw measurement line for spacing (except for the last hole)
                    if (i < numHoles - 1) {
                        const nextHoleX = holeX + scaledSpacing;

                        // Draw spacing measurement
                        const measureY = axisY + 20;
                        ctx.beginPath();
                        ctx.moveTo(holeX, measureY);
                        ctx.lineTo(nextHoleX, measureY);
                        ctx.strokeStyle = '#666';
                        ctx.lineWidth = 1;
                        ctx.stroke();

                        // Draw small vertical lines
                        ctx.beginPath();
                        ctx.moveTo(holeX, measureY - 3);
                        ctx.lineTo(holeX, measureY + 3);
                        ctx.moveTo(nextHoleX, measureY - 3);
                        ctx.lineTo(nextHoleX, measureY + 3);
                        ctx.stroke();

                        // Label spacing
                        ctx.fillText(`${spacing.toFixed(1)} mm`, (holeX + nextHoleX) / 2, measureY + 15);
                    }
                }

                // Draw edge distances
                const firstHoleX = startX + scaledMargin + scaledEdgeDistance;
                const lastHoleX = startX + scaledMargin + scaledEdgeDistance + ((numHoles - 1) * scaledSpacing);

                // Left edge
                ctx.beginPath();
                ctx.moveTo(startX + scaledMargin, axisY - 20);
                ctx.lineTo(firstHoleX, axisY - 20);
                ctx.strokeStyle = '#666';
                ctx.lineWidth = 1;
                ctx.stroke();

                // Draw small vertical lines
                ctx.beginPath();
                ctx.moveTo(startX + scaledMargin, axisY - 23);
                ctx.lineTo(startX + scaledMargin, axisY - 17);
                ctx.moveTo(firstHoleX, axisY - 23);
                ctx.lineTo(firstHoleX, axisY - 17);
                ctx.stroke();

                // Label edge distance
                ctx.fillText(`${edgeDistance.toFixed(1)} mm`, (startX + scaledMargin + firstHoleX) / 2, axisY - 30);

                // Right edge
                ctx.beginPath();
                ctx.moveTo(lastHoleX, axisY - 20);
                ctx.lineTo(startX + scaledAxisWidth - scaledMargin, axisY - 20);
                ctx.stroke();

                // Draw small vertical lines
                ctx.beginPath();
                ctx.moveTo(lastHoleX, axisY - 23);
                ctx.lineTo(lastHoleX, axisY - 17);
                ctx.moveTo(startX + scaledAxisWidth - scaledMargin, axisY - 23);
                ctx.lineTo(startX + scaledAxisWidth - scaledMargin, axisY - 17);
                ctx.stroke();

                // Label edge distance
                ctx.fillText(`${edgeDistance.toFixed(1)} mm`, (lastHoleX + startX + scaledAxisWidth - scaledMargin) / 2, axisY - 30);
            }

            // Draw total width label
            ctx.font = '14px sans-serif';
            ctx.fillText(`Total Width: ${axisWidth} mm`, canvas.width / 2, canvas.height - 10);
        }
        // Initialize
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        drawVisualization();

        // Event listeners
        updateBtn.addEventListener('click', drawVisualization);
