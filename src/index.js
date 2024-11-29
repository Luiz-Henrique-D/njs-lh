const express = require("express");
const app = express();
const fakeDB = [];

app.use(express.json());
app.get("/", (req, res) => {
	res.status(200).json(fakeDB);
});

app.post("/createAccount", (req, res) => {
	const { email, password } = req.body;
	const data = {
		email,
		password,
	};
	const mp = fakeDB.map((val) => val.email == data.email);
	if (mp[0] != null) return res.sendStatus(403);
	fakeDB.push(data);
	res.status(201).json(data);
});

app.listen(3000, () => {
	console.log("Online on 3000!");
});
