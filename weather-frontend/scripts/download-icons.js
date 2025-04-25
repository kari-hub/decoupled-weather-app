const fs = require('fs');
const path = require('path');
const https = require('https');

const icons = [
    '01d', '01n', '02d', '02n', '03d', '03n', '04d', '04n',
    '09d', '09n', '10d', '10n', '11d', '11n', '13d', '13n',
    '50d', '50n'
];

const downloadIcon = (icon) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(path.join(__dirname, '../public/weather-icons', `${icon}.png`));
        https.get(`https://openweathermap.org/img/wn/${icon}@2x.png`, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded ${icon}.png`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(file);
            reject(err);
        });
    });
};

const downloadAllIcons = async () => {
    try {
        // Create weather-icons directory if it doesn't exist
        const dir = path.join(__dirname, '../public/weather-icons');
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        // Download all icons
        await Promise.all(icons.map(downloadIcon));
        console.log('All icons downloaded successfully!');
    } catch (error) {
        console.error('Error downloading icons:', error);
    }
};

downloadAllIcons(); 