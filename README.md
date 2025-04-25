# Decoupled Weather Application

A modern weather application built with a decoupled architecture, featuring a Laravel backend API and a Next.js frontend with TypeScript and Tailwind CSS.

![image](https://github.com/user-attachments/assets/d776bf91-0119-426d-8fd7-d8e1f68c028f)

## Features

- Real-time weather data display
- Temperature unit switching (Celsius/Fahrenheit)
- Wind status with speed indicator
- Humidity status with progress bar
- Modern, responsive UI with Tailwind CSS
- Type-safe development with TypeScript
- RESTful API with Laravel

## Project Structure

The project is divided into two main parts:

### Frontend (`/weather-frontend`)
- Next.js 14+ with TypeScript
- Tailwind CSS for styling
- Modern component architecture
- Real-time weather data fetching
- Responsive design

### Backend (`/weather-api`)
- Laravel 10+
- RESTful API endpoints
- Weather data processing
- Geocoding functionality
- Service providers for authentication and events

## Getting Started

### Prerequisites
- PHP 8.1+
- Node.js 18+
- Composer
- npm or yarn

### Backend Setup
1. Navigate to the backend directory:
```bash
cd weather-api
```

2. Install dependencies:
```bash
composer install
```

3. Set up environment:
```bash
cp .env.example .env
php artisan key:generate
```

4. Start the server:
```bash
php artisan serve
```

### Frontend Setup
1. Navigate to the frontend directory:
```bash
cd weather-frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Features in Detail

### Weather Display
- Current temperature with unit switching
- Weather condition description
- City name and date

### Weather Metrics
- Wind status with speed in km/h
- Humidity percentage with visual indicator
- Clean and intuitive UI for easy reading

## Screenshots

### Main Weather Display
![image](https://github.com/user-attachments/assets/d4da5572-b572-4fd4-b32f-001604e132af)


### 3-day Weather Forecast
![image](https://github.com/user-attachments/assets/192dd229-aa0b-4d4a-95f1-33764015f4f1)


## Technical Implementation

### Frontend Components
- `WeatherCard`: Main weather information display
- `WindStatus`: Wind speed and direction
- `HumidityStatus`: Humidity level with progress bar
- `TemperatureUnitSwitch`: Toggle between Celsius and Fahrenheit

### Backend API Endpoints
- `/api/weather`: Current weather data
- `/api/forecast`: Weather forecast
- `/api/geocode`: Location search

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Weather data provided by OpenWeatherMap API
- Icons from [Weather Icons Set]
- UI inspiration from modern weather applications 
