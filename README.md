# Appliance Energy Consumption Website

This project was created for **COS30045 – Data Visualisation** (Week 0 Exercise 0.2).  
It demonstrates the fundamentals of building a small multi-page website using **HTML, CSS, and JavaScript**, with hosting via Swinburne’s **Mercury server** and version control using **Git & GitHub**.

---

## Project Structure

```
/
  index.html
  televisions.html
  about.html
  assets/
    css/
      style.css
    js/
      script.js
    img/
      PowerIcon.png
  README.md
```

---

## Features

### Three HTML Pages
- **Home**
- **Televisions**
- **About Us**

### Top Navigation Bar
- Appears on all pages  
- PowerIcon (click to return home)  
- Hover effects  
- Active page highlighting  

### Home Page Includes
- Placeholder content about Australian energy consumption  
- **FAQ accordion** (JavaScript)  
- **Interactive Energy Calculator**:
  - Inputs: wattage, hours/day, electricity price  
  - Calculates: daily, monthly, yearly kWh + cost estimates  
  - Validates input  
  - Updates results dynamically  

### External CSS
Consistent styling, colour scheme matching the provided PowerIcon.

### Footer (all pages)
Automatically displays:
- Current year  
- Developer: **Arunsathya Thavroth**  

---

## How to Run

1. Clone your GitHub Classroom repository  
2. Add the project files into the correct folder structure  
3. Commit & push changes regularly  
4. Test locally (open `index.html` in a browser)  
5. Upload to Swinburne Mercury server for hosting  

## License
This project is created for educational purposes as part of COS30045 (Swinburne University).

--- 

## Generative AI Reflection

### Tools Used
ChatGPT was used during development to assist with structuring HTML, CSS organisation, and JavaScript logic for the FAQ accordion and energy calculator.

### How AI Was Used
AI was primarily used as a support tool to:
- Generate initial code structure examples
- Clarify JavaScript event handling concepts
- Suggest improvements for input validation
- Improve the organisation of CSS sections

### My Contribution
Although AI assisted with initial code drafts, I:
- Reviewed and understood all generated code
- Refactored parts of the JavaScript to improve readability
- Replaced inline style manipulation with class-based toggling
- Structured the project folders appropriately
- Rebuilt the Git commit history to reflect logical development stages
- Implemented and tested validation logic to ensure correct behaviour

### What I Learned
Through this process I developed a stronger understanding of:
- DOM manipulation and event handling in JavaScript
- The importance of separating structure (HTML), styling (CSS), and behaviour (JS)
- Client-side input validation techniques
- The importance of meaningful Git commits in professional workflows

### Limitations
AI-generated code occasionally required refinement to better align with assignment constraints and improve clarity. Reviewing and modifying the generated code was essential to ensure correctness and understanding.

## Data Story

This project explores energy consumption of televisions in Australia.

The analysis focuses on:
- Distribution of TV sizes
- Relationship between screen size and energy consumption
- Impact of screen technology on energy usage

Visualisations were created using KNIME and added to the website to communicate insights to users.

## About the Data

The dataset was sourced from the Australian Government energy rating database.
Data was cleaned and processed using KNIME.

Limitations:
- Only includes registered TV models
- May not represent all products in the market

## AI Declaration

ChatGPT was used to assist with structuring explanations and improving clarity.
All analysis and interpretation were completed by the student.