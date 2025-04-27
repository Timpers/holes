### README.md

# Hole Spacing Visualizer

The **Hole Spacing Visualizer** is a simple web-based tool that allows users to visualize the placement of holes along an axis. It calculates and displays the spacing between holes, the distance from the edges, and provides a graphical representation of the layout.

See the demo at: [Holes Visualizer](https://www.tdub.co.uk/holes/)

## Features

- **Dynamic Input Fields**: Adjust the axis width, number of holes, hole diameter, and margins dynamically.
- **Real-Time Visualization**: Updates the visualization instantly when inputs are changed.
- **Measurements Display**: Displays calculated values such as:
  - Axis width
  - Number of holes
  - Hole diameter
  - Distance between holes
  - Distance from the edges to the first/last hole
- **Responsive Design**: The canvas resizes dynamically to fit the screen width.

## How It Works

1. **Inputs**:
   - **Axis Width (mm)**: The total width of the axis where the holes will be placed.
   - **Number of Holes**: The number of holes to be evenly spaced along the axis.
   - **Hole Diameter (mm)**: The diameter of each hole.
   - **Margin (mm)**: The space to leave on either side of the axis.

2. **Visualization**:
   - The tool calculates the spacing between holes and the edge distances based on the input values.
   - It draws the axis, holes, and measurement lines on a canvas element.

3. **Measurements**:
   - The calculated values are displayed below the canvas for reference.

## Usage

1. Open the holes.html file in any modern web browser.
2. Adjust the input fields:
   - Enter the desired **Axis Width**, **Number of Holes**, **Hole Diameter**, and **Margin**.
3. Click the **Update Visualization** button to refresh the visualization.
4. View the updated layout and measurements.

## File Structure

- **`index.html`**: The main HTML file containing the structure, styles, and JavaScript logic for the visualizer.
- **`style.css`**: CSS file for styling the layout and appearance of the tool.
- **`app.js`**: The JavaScript file that contains the logic for drawing the holes, calculating distances, and handling user interactions.
- **`README.md`**: This file, providing an overview and instructions for the project.

## Code Overview

### HTML Structure

- **Input Controls**: 
  - Four input fields for axis width, number of holes, hole diameter, and margin.
  - A button to update the visualization.
- **Canvas**: A `<canvas>` element for rendering the graphical visualization.
- **Measurements**: A section to display calculated values.

### JavaScript Logic

- **Canvas Drawing**:
  - Draws the axis, holes, and measurement lines dynamically based on user inputs.
- **Calculations**:
  - Calculates the spacing between holes and the edge distances.
  - Accounts for margins on either side of the axis.
- **Event Listeners**:
  - Updates the visualization when the user clicks the "Update Visualization" button or resizes the window.

### CSS Styling

- Provides a clean and responsive layout for the tool.
- Ensures the canvas and input controls are visually appealing and easy to use.

## Example

### Input Values:
- Axis Width: `500 mm`
- Number of Holes: `5`
- Hole Diameter: `10 mm`
- Margin: `20 mm`

### Output:
- Distance Between Holes: `110 mm`
- Distance from Edge to First/Last Hole: `25 mm`

The visualization will display 5 evenly spaced holes along a 500 mm axis with 20 mm margins on either side.

## Requirements

- A modern web browser (e.g., Chrome, Firefox, Edge).
- No additional dependencies or libraries are required.

## Customization

- Modify the default values for the input fields in the `<input>` elements in the HTML file.
- Adjust the styles in the `<style>` section to customize the appearance.

## License

This project is open-source and available for personal or educational use. Feel free to modify and adapt it to your needs.

---

Enjoy using the **Hole Spacing Visualizer**! 🎉