import peopleData from './data/people.json'

var appRouter = (app) => {

    app.get("/", function(req, res) {
      res.status(200).send("Welcome to our restful API");
    });

    app.get("/people", function (req, res) {
        var data = peopleData
        res.status(200).json({data: data.people});
    });

    app.get("/people/:id", function (req, res) {
        const id = req.params.id
        const people = peopleData
        const data = people.people[id]

        if (data) {
            res.status(200).json({ data });
        } else {
            res.status(400).json({ error: { message: 'invalid id supplied' } });
        }
    });
    
  }
  
export default appRouter