body {
  font-family: Arial, sans-serif;
  background: red;  /* Change this line */
  margin: 0;
  padding: 0 20px;
}
header {
  background: blue; /* Change this line */
  color: #fff;
  padding: 20px 0;
  text-align: center;
}
.logo {
  position: absolute;
  top: 20px;
  right:8px;
  height:72px;
}
header {
  position: relative; /* Needed for absolute logo positioning */
}
.title {
  margin: 0;
  font-size: 2.5em;
}

nav {
  margin-top: 10px;
}

nav a {
  color: #fff;
  margin: 0 15px;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

section {
  background: #fff;
  margin: 25px auto;
  padding: 20px;
  max-width: 600px;
  border-radius: 8px;
  box-shadow: 0 2px 8px #ccc;
}

h2 {
  color: #5C6AC4;
}

form label {
  display: block;
  margin-bottom: 10px;
}

input, textarea {
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background: #5C6AC4;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #3949ab;
}
.form-tabs {
  margin-bottom: 10px;
  text-align: center;
}
.form-tabs button {
  margin: 0 10px;
  padding: 6px 14px;
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}
.form-tabs button:hover {
  background: #ddd;
}
.form-content {
  margin-top: 10px;
}
.owner-details {
  text-align: center;
  margin-top: 20px;
}
.owner-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
  box-shadow: 0 2px 8px #ccc;
}
