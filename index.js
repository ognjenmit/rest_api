const express = require("express");
const bodyParser = require("body-parser");
const e = require("express");
const app = express();
app.use(bodyParser.json());

let policemen = new Object();
policemen["1"] = ["Ognjen", "Mitrovic", "064-611-5905"]
policemen["2"] = ["Mateja", "Markovic", "065-777-7777"]
policemen["3"] = ["Tamara", "Petrovic", "064-888-8888"]
policemen["4"] = ["Mladen", "Rankovic", "065-999-9999"]
policemen["5"] = ["Ksenija", "Despotovic", "065-111-1111"]
policemen["6"] = ["Marko", "Petkovic", "065-111-1111"]

let titles = new Object();
titles["1"] = "Title: Officer"
titles["2"] = "Title: Detective"
titles["3"] = "Title: Head Officer"
titles["4"] = "Title: Sergeant"
titles["5"] = "Title: Police Chief"
titles["6"] = "Title: Deputy"

//Get the title of a policeman
app.get("/titles", (req, res) => {
    console.log("First name: " + req.headers.firstname);
    console.log("Last name: " + req.headers.lastname);
    console.log("ID: " + req.headers.id);
    console.log("Phone: " + req.headers.phone);

    // Verify if a policeman exists
    if (titles[req.headers.id] === undefined) {
        res.status(404).send({"msg":"policeman not found"})
        return;
    }

    //Verify ID matches first and last name
    if (req.headers.firstname == policemen[req.headers.id][0] && req.headers.lastname == policemen[req.headers.id][1]){
        //First last and id match
        res.status(200).send(titles[req.headers.id]);
        return;
    }
    else{
        res.status(401).send({"msg":"First or last name does not match ID."})
        return;
    }

    //Return Appropriate Record
    res.status(200).send({"msg":"HTTP get - Success!"})
});

//Modify the information of a policeman
app.put("/modify", (req, res) => {
    console.log("First name: " + req.headers.firstname);
    console.log("Last name: " + req.headers.lastname);
    console.log("ID: " + req.headers.id);
    console.log("Phone: " + req.headers.phone);

    // Verify if a policeman exists
    if (titles[req.headers.id] === undefined) {
        res.status(404).send({"msg":"policeman not found"})
        return;
    }

    //Verify ID matches first and last name
    if (req.headers.firstname == policemen[req.headers.id][0] && req.headers.lastname == policemen[req.headers.id][1]){
        //First last and id match
        policemen[req.headers.id] = [req.body.firstname, req.body.lastname, req.body.id, req.body.phone]
        res.status(200).send(policemen[req.headers.id]);
        return;
    }
    else{
        res.status(401).send({"msg":"First or last name does not match ID."})
        return;
    }
    res.status(200).send({"msg":"HTTP modify - SUCCESS"})
});

//Modify the information of a policeman
app.put("/modify", (req, res) => {
    console.log("First name: " + req.headers.firstname);
    console.log("Last name: " + req.headers.lastname);
    console.log("ID: " + req.headers.id);
    console.log("Phone: " + req.headers.phone);

    // Verify if a policeman exists
    if (titles[req.headers.id] === undefined) {
        res.status(404).send({"msg":"policeman not found"})
        return;
    }

    //Verify ID matches first and last name
    if (req.headers.firstname == policemen[req.headers.id][0] && req.headers.lastname == policemen[req.headers.id][1]){
        //First last and id match
        policemen[req.headers.id] = [req.body.firstname, req.body.lastname, req.body.id, req.body.phone]
        res.status(200).send(policemen[req.headers.id]);
        return;
    }
    else{
        res.status(401).send({"msg":"First or last name does not match ID."})
        return;
    }
    res.status(200).send({"msg":"HTTP modify - SUCCESS"})
});

//Modify the title of a policeman
app.put("/changetitle", (req, res) => {
    console.log("First name: " + req.headers.firstname);
    console.log("Last name: " + req.headers.lastname);
    console.log("ID: " + req.headers.id);
    console.log("Phone: " + req.headers.phone);

    // Verify if a policeman exists
    if (titles[req.headers.id] === undefined) {
        res.status(404).send({"msg":"policeman not found"})
        return;
    }

    //Verify ID matches first and last name
    if (req.headers.firstname == policemen[req.headers.id][0] && req.headers.lastname == policemen[req.headers.id][1]){
        //First last and id match
        titles[req.headers.id] = [req.body.changetitle]
        res.status(200).send(titles[req.headers.id]);
        return;
    }
    else{
        res.status(401).send({"msg":"First or last name does not match ID."})
        return;
    }
    res.status(200).send({"msg":"HTTP modify - SUCCESS"})
});

//Create a new policeman in a temporary
app.post("/post", (req, res) => {
    console.log("First name: " + req.headers.firstname);
    console.log("Last name: " + req.headers.lastname);
    console.log("ID: " + req.headers.id);
    console.log("Phone: " + req.headers.phone);


    policemen[req.headers.id] = [req.headers.firstname, req.headers.lastname, req.body.phone]
    res.status(200).send(policemen)
});

//Delete a policeman from the database
app.delete("/delete", (req, res) => {
    console.log("First name: " + req.headers.firstname);
    console.log("Last name: " + req.headers.lastname);
    console.log("ID: " + req.headers.id);
    console.log("Phone: " + req.headers.phone);

    // Verify if a policeman Exists
    if (titles[req.headers.id] === undefined) {
        res.status(404).send({"msg":"policeman not found"})
        return;
    }

    //Verify ID matches first and last name
    if (req.headers.firstname == policemen[req.headers.id][0] && req.headers.lastname == policemen[req.headers.id][1]){
        //Delete a policeman and his title from the temporary database
        delete policemen[req.headers.id]
        delete titles[req.headers.id]

        res.status(200).send("Removed: " + policemen)
        return;
    }
    else{
        res.status(401).send({"msg":"First or last name does not match ID."})
        return;
    }

    res.status(200).send({"msg":"HTTP delete - Success!"})
});


app.listen(3000);

