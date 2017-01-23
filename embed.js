var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo");

// POST - title, content
var postSchema = new mongoose.Schema({
  title: String,
  content: String
});
var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema]
});
var User = mongoose.model("User", userSchema);


// var newUser = new User({
//   email: "Harry@Potter.edu",
//   name: "Harry Potter"
// });
//
// newUser.posts.push({
//   title: "How to bre polyjuice potion",
//   content: "Step 1: Go to class..."
// })
//
// newUser.save(function(err, user){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });

// var newPost = new Post({
//   title: "Shinigamies",
//   content: "They like apples"
// });
//
// newPost.save(function(err, post){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

User.findOne({name: "Harry Potter"}, function(err, user){
  if(err){
    // console.log(err);
  } else {
    user.posts.push({
      title: "3 Things I really hate",
      content: "Voldemort. Voldemort. Voldemort."
    });
    user.save(function(err, user){
      if(err){
        console.log(err);
      } else {
        console.log(user);
      }
    });
  }
});
