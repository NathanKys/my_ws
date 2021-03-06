const express = require(`express`)
const Joi = require(`joi`)
const fs = require(`fs`)
const cors = require(`cors`)

const app = express();

app.use(cors());
app.use(express.json());

function bodyValidation(reqBody){
    const schema = {
        name: Joi.string().min(3).required()
    }
    const {error} = Joi.validate(reqBody,schema);

    return error ? error : false
}

// Config
app.get(`/api/courses`,(req,res)=>{
    const courses = JSON.parse(fs.readFileSync(`./test.json`,{encoding:`utf-8`,flag:`r`}))
    res.send(courses);
})

// Search
app.get(`/api/courses/:id`,(req,res)=>{
    const courses = JSON.parse(fs.readFileSync(`./test.json`,{encoding:`utf-8`,flag:`r`}))
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send(`Invalid ID`);
        return;
    }

    res.send(course);
})

// Add
app.post(`/api/courses/`,(req,res)=>{
    const courses = JSON.parse(fs.readFileSync(`./test.json`,{encoding:`utf-8`,flag:`r`}))
    const error = bodyValidation(req.body)

    if(error){
        res.status(400).send(error.details[0].message);
    }

    const courseToAdd = {
        id: courses.length + 1,
        name: req.body.name
    }

    courses.push(courseToAdd);

    const json = JSON.stringify(courses,null,2);
    fs.writeFileSync(`./test.json`,json);

    res.send(courseToAdd);
})


//Edit
app.put(`/api/courses/:id`,(req,res)=>{
    const courses = JSON.parse(fs.readFileSync(`./test.json`,{encoding:`utf-8`,flag:`r`}))
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send(`invalid Id`)
        return;
    }

    const error = bodyValidation(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }

    course.name = req.body.name;

    const json = JSON.stringify(courses,null,2);
    fs.writeFileSync(`./test.json`,json);

    res.send(course)
})

//Delete
app.delete(`/api/courses/:id`,(req,res)=>{
    const courses = JSON.parse(fs.readFileSync(`./test.json`,{encoding:`utf-8`,flag:`r`}))
    const courseToDelete = courses.find(c => c.id === parseInt(req.params.id));
    if(!courseToDelete){
        res.status(404).send(`Invalid ID`);
        return;
    } 

    const indexToDelete = courses.indexOf(courseToDelete);
    courses.splice(indexToDelete,1);

    const json = JSON.stringify(courses,null,2);
    fs.writeFileSync(`./test.json`,json);

    res.send(courseToDelete);
})


const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Server listening to ${PORT}`);
})