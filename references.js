var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post");
var User = require("./models/user");


Post.create({
  title: "How to be the best builder pt. 4",
  content: "FA LA LA"
}, function(err, post){
  User.findOne({email: "bob@builder.com"}, function(err, foundUser) {
    if(err){
      console.log(err);
    } else {
      foundUser.posts.push(post);
      foundUser.save(function(err, data) {
        if(err){
          console.log(err);
        } else {
          console.log(data);
        }
      });
    }
  });
})

// Find user
// Find all posts for that user
// User.findOne({email: "bob@builder.com"}).populate("posts").exec(function(err, user){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });


// User.create({
//   email: "bob@builder.com",
//   name: "Bod Debuilder"
// })
