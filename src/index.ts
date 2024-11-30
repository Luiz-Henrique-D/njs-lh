import express from "express"
const app = express()
interface IAccount {
	email: string,
	password: string
}
const fakeDB: IAccount[] = [];

app.use(express.json());
app.get("/", (req, res) => {
	res.status(200).json(fakeDB)
});

app.post("/createAccount", (req, res) => {
	const { email, password }:IAccount = req.body;
	if (!email || !password){
		res.status(422).json({
			message: "missing information",
		});
		return
	} 
	const data = {
		email,
		password,
	};
	const mp = fakeDB.map((val) => val.email == data.email);
	if (mp[0] != null) {
		res.sendStatus(403) 
		return
	};
	fakeDB.push(data);
	res.status(201).json(data);
});

app.listen(3000, () => {
	console.log("Online on 3000!");
});
