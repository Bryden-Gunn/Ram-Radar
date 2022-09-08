### Team Spicy Chocolate 
### Project Ram Radar

Project objective = A platform where users can view on a map different Ram incidents in Auckland 

FIGMA PLANNING FILE = https://www.figma.com/file/2VGg9FfUxAnQAatUIaN8Ei/RAMDAR?node-id=0%3A1
CANVA PRESENTATION FILE = https://www.canva.com/design/DAFLosLz8do/x8As3whRgSL5lN6P6Jp8Lg/view?utm_content=DAFLosLz8do&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink

USER EXPERIENCE: 

1) User arrives to a funky disclaimer page 
2) User sees the app : 
  App has other "useless" components around the main working app (which is the map) 
3) Map shows ram incidents 
4) User can view ram incidents in Auckland by month
5) User can add ram incident in Auckland with these data input: 

- Month
- Plate 
- Longitude
- Latitude 
- Goods Stolen


DATABASE: 

db "rams"
- id = number (PK)
- month = "string" 
- plate = "string" 
- latitude = number 
- longitude = number 
- goods = "string"

CHANGES HISTORY : (please log your changes) 

1. Benson & Taylor : add fakeRams.json to server/db/ folder for front end consumption
2. Fred: Pulling and merging Fred's branch with form.jsx
3. Benson: db migration and seed setup and uploaded
4. Setup basic route and api to call data from localhost:3000/api/v1/rams/


