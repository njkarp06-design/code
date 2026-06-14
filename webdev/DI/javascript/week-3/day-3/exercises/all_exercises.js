/* =====================================
   START (HTML): day3normal.html
   =====================================
<!-- Exercise 1 -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form w JS</title>
</head>
<body>
    <div>
<form id="myForm" method="Get" action="https://httpbin.org/get">
    Name: <input type="text" name="name" id="name"><br><br>
    <textarea name="comments" id="comments" cols="30" rows="10">Comments:</textarea><br><br>
    <input type="submit" value="Send">
    </div>
</body>
</html>
<!-- Exercise 2 -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form w JS</title>
</head>
<body>
    <div>
        <form id="myForm" method="Post" action="https://httpbin.org/get">
    Name: <input type="text" name="name" id="name"><br><br>
    <textarea name="comments" id="comments" cols="30" rows="10">Comments:</textarea><br><br>
    <input type="submit" value="Send">
    </div>
</body>
</html>
   =====================================
   END (HTML): day3normal.html
   ===================================== */


// =====================================
// START: day3normal-json.js
// =====================================
const marioGame = {
  "detail" : "An amazing game!",
  "characters" : {
      "mario" : {
        "description": "Small and jumpy. Likes princesses.",
        "height": 10,
        "weight": 3,
        "speed": 12,
      },
      "bowser" : {
        "description": "Big and green, Hates princesses.",
        "height": 16,
        "weight": 6,
        "speed": 4,
      },
      "princessPeach" : {
        "description": "Beautiful princess.",
        "height": 12,
        "weight": 2,
        "speed": 2,
      }
  },
}
// =====================================
// END: day3normal-json.js
// =====================================
