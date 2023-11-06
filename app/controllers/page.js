

const output = {
    home: (req, res) => {
       res.render("index");
    },

    basket: (req, res) => {
        res.render("basket");
    },

    enrollCheck: (req, res) => {
        res.render("enrollCheck");
    },

    register: (req, res) => {
        res.render("register");
    },

    search: (req, res) => {
        res.render("search");
    },

    signUp: (req, res) => {
        res.render("signUp");
    },
    findUser: (req, res) => {
        res.render("findUser");
    },
 };

 module.exports = {
    output,
 }