# 🌤️ CITY_WEATHER

> A simple and beginner-friendly weather application that displays real-time weather information for a city using the OpenWeatherMap API.

---

## 📌 Project Overview

**Sky Checker** is a mini weather web application developed using **HTML, CSS, and JavaScript**.

The application allows users to enter the name of a city and retrieve its current weather information. It uses the **OpenWeatherMap API** to fetch real-time weather data and displays the information directly on the webpage.

The application currently displays:

* 🌡️ Temperature
* ☁️ Climate / Weather condition
* 💧 Humidity
* 📍 City name

---

## ✨ Features

### 🔍 City Search

Users can enter a city name into the search box.

### 🌡️ Temperature

The current temperature is displayed in **Celsius (°C)**.

### ☁️ Climate Information

The application displays the current weather condition, such as:

* Clear
* Clouds
* Rain
* Haze
* Mist

### 💧 Humidity

The current humidity percentage is displayed.

### ⚠️ Error Handling

The application handles:

* Invalid city names
* API request failures
* Network errors

---

## 🛠️ Technologies Used

| Technology         | Purpose                                    |
| ------------------ | ------------------------------------------ |
| HTML5              | Creates the structure of the webpage       |
| CSS3               | Used for styling and layout                |
| JavaScript         | Handles application logic and API requests |
| OpenWeatherMap API | Provides real-time weather data            |
| Fetch API          | Sends requests to the weather API          |
| Git & GitHub       | Version control and project hosting        |

---

## 🧠 How the Application Works

The application follows this basic workflow:

```text
User enters city name
        ↓
User clicks "Check Weather"
        ↓
JavaScript reads the city name
        ↓
Request is sent to OpenWeatherMap API
        ↓
API returns weather data in JSON format
        ↓
JavaScript processes the response
        ↓
Weather information is displayed
```

---

## 🔗 API Used

This project uses the **OpenWeatherMap Current Weather API**.

The application sends the following information to the API:

```text
City Name
API Key
Temperature Unit
```

The API response contains information such as:

```text
City Name
Temperature
Weather Condition
Humidity
```

The application uses:

```javascript
units=metric
```

which allows the temperature to be displayed in Celsius.

---

## 📂 Project Structure

The recommended project structure is:

```text
Sky-Checker/
│
├── index.html
├── weather.css
├── weather.js
├── README.md
└── screenshots/
    ├── home.png
    └── weather-result.png
```

### 📄 File Description

#### `index.html`

Contains the main webpage structure, including:

* Application title
* City input box
* Weather button
* Weather information section

#### `weather.css`

Contains the visual styling of the application.

#### `weather.js`

Contains the main application logic.

It:

1. Reads the city entered by the user.
2. Creates the API request.
3. Fetches weather information.
4. Converts the response into JSON.
5. Displays the weather information.
6. Handles errors.

#### `README.md`

Contains the project documentation.

---

## 💻 HTML Structure

The application contains a main container:

```html
<div class="mainBox">
```

Inside it, the application contains:

```text
Application Heading
       ↓
Tagline
       ↓
City Input
       ↓
Check Weather Button
       ↓
Weather Information Box
```

The weather information is displayed using elements such as:

```html
<h2 id="cityName">City</h2>

<p id="temp">Temperature : -- °C</p>

<p id="climate">Climate : --</p>

<p id="humidity">Humidity : --</p>
```

JavaScript updates these elements after receiving the API response.

---

## ⚙️ JavaScript Functionality

The main function of the application is:

```javascript
async function checkWeather()
```

The function is executed when the user clicks:

```html
<button onclick="checkWeather()">
    Check Weather
</button>
```

### Step 1 — Get City Name

JavaScript retrieves the value entered by the user:

```javascript
let city = document.getElementById("cityInput").value;
```

### Step 2 — Create API URL

The application creates a URL using the entered city:

```javascript
let apiURL =
"https://api.openweathermap.org/data/2.5/weather?q="
+ city +
"&appid=" + apiKey +
"&units=metric";
```

### Step 3 — Send Request

The Fetch API sends a request:

```javascript
let response = await fetch(apiURL);
```

### Step 4 — Convert Response

The response is converted into JSON:

```javascript
let data = await response.json();
```

### Step 5 — Display Weather

If the request is successful:

```javascript
if(data.cod == 200)
```

the application displays:

* City name
* Temperature
* Climate
* Humidity

---

## 🛡️ Error Handling

The application uses `try...catch` to handle errors.

```javascript
try {
    // API request
}
catch(error) {
    alert("Something went wrong");
}
```

If the city cannot be found, the application displays:

```text
City not found
```

If another error occurs:

```text
Something went wrong
```

---

## 🔐 API Key Security

### ⚠️ Important

**Do not upload your actual API key to GitHub.**

The API key currently appears directly in the JavaScript code:

```javascript
let apiKey = "YOUR_API_KEY";
```

Before publishing this project publicly, you should:

1. Revoke/rotate the exposed API key.
2. Create a new API key.
3. Avoid committing the new key to GitHub.
4. Use an appropriate environment-variable/backend approach for production.

For a simple frontend-only project, remember that **any API key embedded in browser JavaScript can ultimately be discovered by users**. For a production application, a backend/proxy is preferable.

---

## 🚀 How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/sky-checker.git
```

### 2. Open the Project

```bash
cd sky-checker
```

### 3. Configure the API

Set up your weather API access without committing the secret key to GitHub.

### 4. Run the Application

Open:

```text
index.html
```

in your browser.

For development, you can also use **VS Code Live Server**.

---

## 🖥️ Application Preview

### Home Screen

Add your screenshot here:

```markdown
![Sky Checker Home](screenshots/home.png)
```

### Weather Result

Add your screenshot here:

```markdown
![Weather Result](screenshots/weather-result.png)
```

---

## 📊 Example

If the user enters:

```text
Bhubaneswar
```

the application can display information similar to:

```text
Bhubaneswar

Temperature : 28 °C
Climate : Clouds
Humidity : 75%
```

The actual values depend on the current weather returned by the API.

---

## 🎯 Learning Objectives

This project was created to understand:

* HTML webpage structure
* CSS styling
* JavaScript DOM manipulation
* JavaScript functions
* Async/Await
* Fetch API
* REST APIs
* JSON data
* API error handling
* Git and GitHub
* Basic frontend development

---

## 🔮 Future Improvements

The current version is intentionally simple. Future versions can include:

* 🌦️ 5-day weather forecast
* 🕐 Hourly weather forecast
* 📍 Current-location weather
* 🌙 Dark mode
* 🌡️ Celsius/Fahrenheit switch
* 🌅 Sunrise and sunset times
* 💨 Wind speed
* 👁️ Visibility
* 🌧️ Rain probability
* 📊 Weather charts
* ⭐ Favorite cities
* 📱 Improved mobile interface
* 🎨 Weather-based backgrounds
* 🔔 Weather alerts

---

## 🧪 Possible Future Architecture

```text
                  Sky Checker
                       │
                       ▼
                User enters city
                       │
                       ▼
                JavaScript
                       │
                       ▼
                Weather API
                       │
                       ▼
                 JSON Response
                       │
                       ▼
              Data Processing
                       │
                       ▼
              Weather Display
```

---

## 📈 Future Version

A future version of Sky Checker could provide a complete weather dashboard:

```text
┌─────────────────────────────────┐
│        🌤 Sky Checker           │
├─────────────────────────────────┤
│                                 │
│  Search City: [ Bhubaneswar ]   │
│                                 │
│  🌡️ Temperature: 28°C           │
│  ☁️ Condition: Cloudy            │
│  💧 Humidity: 75%               │
│  💨 Wind: 12 km/h               │
│                                 │
│       5-Day Forecast            │
│                                 │
└─────────────────────────────────┘
```

---

## 🤝 Contributing

Contributions and improvements are welcome.

### Steps

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature/new-feature
```

3. Make your changes.
4. Commit your changes.

```bash
git commit -m "Add new weather feature"
```

5. Push your branch.

```bash
git push origin feature/new-feature
```

6. Create a Pull Request.

---

## 📄 License

This project is available under the **MIT License**.

---

## 👨‍💻 Author

**Divya Jyoti Sahu**

GitHub:
`https://github.com/Divya-sahu04`

---

## ⭐ Show Your Support

If you found this project useful, consider giving the repository a ⭐.

---

### 🌤️ CITY_WEATHER

**A simple project for learning frontend development and weather API integration.**
