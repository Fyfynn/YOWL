const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');

// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, `./uploads`);
//     },
//     filename: function(req, file, cb) {
//         cb(null, file.originalname)
//     }
//     //new Date().toISOString().replace(/:/g, '-')
// });

// const fileFilter = (req, file, cb) => {
//     if(file.mimetype === 'image/png') {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// }

const { Employee } = require('../models/exemple');
const { comment } = require('../models/comments');
const { post } = require('../models/posts');
const { user } = require('../models/users');

//============================================================== TEST ==============================================================


//get all employees
// router.get('/api/employees', (req, res) => {
//     Employee.find({}, (err, data) => { 
//         if(!err) {
    //             res.send(data);
    //         }
//         else {
//            console.log(err);
//         }
//     });
// });
// // save employee
// router.post('/api/employee/add', (req, res) => {
//     const emp = new Employee({
//         name: req.body.name,
//         email: req.body.email,
//         salary: req.body.salary
//     });
//     emp.save((err, data) => {
//        res.status(200).json({ code:200, message: 'Employee added successfully',
//        addedEmployee: data });
//     });
// });

// // Get single employee
// router.get('/api/employee/:id', (req, res) => {
//     Employee.findById(req.params.id, (err, data) => {
//         if(!err) {
//             res.send(data);
//         }
//         else {
    //             console.log(err);
//         }
//     });
//     });

//     // Update employee
//     router.put('/api/employee/:id', (req, res) => {
//         const emp = {
//             name: req.body.name,
//             email: req.body.email,
//             salary: req.body.salary
//         };
//         Employee.findByIdAndUpdate(req.params.id, {$set: emp}, {new: true}, (err, data) => {
//             if(!err) {
//                 res.status(200).json({ code:200, message: 'Employee updated successfully',
//                 updatedEmployee: data });
//             }
//             else {
//                 console.log(err);
//             }
//         } );
//     } );

//     // Delete employee
//     router.delete('/api/employee/:id', (req, res) => {
//         Employee.findByIdAndRemove(req.params.id, (err, data) => {
//             if(!err) {
//                 res.status(200).json({ code:200, message: 'Employee deleted successfully',
//                 deletedEmployee: data });
//             }
//         } );
//     });



    // ====================COMMENTS COMMENTS COMMENTS COMMENTS COMMENT COMMENTS =======================================================================




//get all comments
router.get('/api/comments', (req, res) => {
    comment.find((err, data) => { 
        if(!err) {
            res.send(data);
        }
        else {
           console.log(err);
           res.status(400).json({ code:400, message: err });
        }
    });
});

// save comment

router.post('/api/comment/add', (req, res) => {
    const com = new comment({
        content: req.body.content,
        post_id: req.body.post_id,
        user_id: req.body.user_id,
        author: req.body.author,
    });
     com.save((err, data) => {
        res.status(200).json({ code:200, message: 'user added successfully',
        error: err,
        addedcomment: data });
     });
});

// Get single comment
router.get('/api/comment/:id', (req, res) => {
    comment.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
        }
        else {
            console.log(err);
            res.status(400).json({ code:400, message: err });
        }
    });
    });

    // Update comment
    router.put('/api/comment/:id', (req, res) => {
        const com = {
            content: req.body.content,
        };
        comment.findByIdAndUpdate(req.params.id, {$set: com}, {new: true}, (err, data) => {
            if(!err) {
                res.status(200).json({ code:200, message: 'comment updated successfully',
                updatedcomment: data });
            }
            else {
                console.log(err);
                res.status(400).json({ code:400, message: err });
            }
        } );
    } );

    // Delete comment
    router.delete('/api/comment/:id', (req, res) => {
        comment.findByIdAndRemove(req.params.id, (err, data) => {
            if(!err) {
                res.status(200).json({ code:200, message: 'comment deleted successfully',
                deletecomment: data });
            }
        } );
    });
    
    router.get('/api/:post_id/comment', async (req, res) => {
        const posts = await comment.find({ post_id: req.params.post_id });
        res.send(posts);
        // post.find({}, (err, data) => { 
        //     if(!err) {
        //         res.send(data);
        //     }
        //     else {
        //        console.log(err);
        //        res.status(400).json({ code:400, message: err });
        //     }
        // });
    });
    
    
    // ======================================================= POST =============================================================
    
    

    //get all posts
    router.get('/api/posts', (req, res) => {
        post.find({}, (err, data) => { 
            if(!err) {
            res.send(data);
        }
        else {
            console.log(err);
            res.status(400).json({ code:400, message: err });
        }
    });
});

// // save post
// router.post('/api/post/add', upload.single('image'), (req, res) => {
    //     const newName = req.file.path.replace(`\\`, '/')
    //     console.log(req.file)
    //     const pos = new post({
        //         file: req.file,
        //         // categorie_id: req.body.categorie_id
        //     });
        //     pos.save((err, data) => {
            //        res.status(200).json({ code:200, message: 'Post added successfully',
            //        error: err,
            //        addedpost: data });
            //     });
            // });
    const fileFilter = function(req, file, cb) {
        
        const allowedTypes = ["images/jpeg", "image/png", "image/jpg"];
        if (!allowedTypes.includes(file.mimetype)){
            const error1 = new Error("Wrong file type");
            error1.code = "LIMIT_FILE_TYPES";
            return cb(error1, false);
        }
        cb(null, true);
    }

    const upload = multer({
        dest: './static/',
        fileFilter
    });

    router.post('/api/post/add', upload.single('file'), async (req, res) => {
        try {
            console.log(req.body)
            await sharp(req.file.path)
            .toFile(`./static/${req.file.originalname}`);
            
            const newName = req.file.path.replace(`\\`, '/')
            fs.unlink(newName, () => {
                res.json({ file: `/static/${req.file.originalname}` })
            })
        } catch(error) {
            res.status(422).json({error})
        }
        const pos = new post({
            title: req.body.title,
            file_title: 'static/'+req.body.file_title,
            timestamp: Date.now(),
            link: req.body.link,
            content: req.body.content,
            user_id: req.body.user_id
                    //categorie_id: req.body.categorie_id
        });
        pos.save()
    });
    
    router.use(function(err, req, res, next) {
        if(err.code === "LIMIT_FILE_TYPES") {
            res.status(422).json({error: "Only images are allowed"})
        }
    })

    // Get single post
    router.get('/api/post/:id', (req, res) => {
    post.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
        }
        else {
            console.log(err);
            res.status(400).json({ code:400, message: err });
        }
    });
    });

    // Update post
    router.put('/api/post/:id', (req, res) => {
        const pos = {
        title: req.body.title,
        image: req.body.image,
        timestamp: req.body.timestamp,
        link: req.body.link,
        user_id: req.body.user_id,
        categorie_id: req.body.categorie_id
        };
        post.findByIdAndUpdate(req.params.id, {$set: pos}, {new: true}, (err, data) => {
            if(!err) {
                res.status(200).json({ code:200, message: 'Post updated successfully',
                
                updatedpost: data });
            }
            else {
                console.log(err);
                res.status(400).json({ code:400, message: err });
            }
        });
    });

    // Delete post
    router.delete('/api/post/:id', (req, res) => {
        post.findByIdAndRemove(req.params.id, (err, data) => {
            if(!err) {
                res.status(200).json({ code:200, message: 'Post deleted successfully',
                deletedpost: data });
            }
        } );
    });


    router.get('/api/post', async(req, res) => {
        const search = req.query.search;
        const userId = req.query.userId
        if (!search) {
            return res.status(400).json({ code: 400, message: 'Please provide a search term' })
        }
        let postz = await post.find({ link : search})
        if (!postz) {
    
            if (!userId) {
                return res.status(400).json({ code: 400, message: 'No user found' }) 
            }
            console.log('caca')
            postz = new post({
                link : search,
                timestamps :  Date.now(),
                user_id : userId,
                title : post.title
            }) 
            postz.save()
        }    
        return res.status(200).json(postz)
       });

    // ===============================================================USER ===============================================================
    
    
    //get all users
    router.get('/api/users', (req, res) => {
        user.find({}, (err, data) => { 
            if(!err) {
                res.send(data);
            }
            else {
                console.log(err);
            }
        });
    });

    // signup route
 router.post('/api/user/signup', async (req, res) => {

    if(!(req.body.email && req.body.password)) {
        return res.status(400).send({ error: "Data not formatted properly"});
    }

    let Userpassword = req.body.password?.toString();
    let newPass = await bcrypt.hash(Userpassword, parseInt(10));
    
    const use = new user({
       username: req.body.username,
       email: req.body.email,
       password: newPass,
       birthday: req.body.birthday,
    });
     use.save((err, data) => {
        res.status(200).json({ code:200, message: 'user added successfully',
        error: err,
        addeduser: data });
     });
 });    

    // login route
router.post('/api/user/login', async (req, res) => {
    const signIn = await user.findOne({ email: req.body.email})
    if (signIn) {
        const validPass = await bcrypt.compare(req.body.password, signIn.password);
        if (validPass) {
            res.send({ id: signIn.id, 
                    username: signIn.username, 
                    email: signIn.email, 
                    birthday: signIn.birthday })
        } else {
            res.status(400).json({ error: "Invalid Password"});
        } 
    }
    else {
        res.status(401).json({ error: "User doesn't exist"});
    }
}),

 // Get single user by id
 router.get('/api/user/:id', (req, res) => {
     user.findById(req.params.id, (err, data) => {
         if(!err) {
             res.send(data);
         }
         else {
             console.log(err);
             res.status(400).json({ code:400, message: err });
         }
     });
     });
 
     // Update user
     router.put('/api/user/:id', async (req, res) => {
        let Userpassword = req.body.password?.toString();
        let newPass = await bcrypt.hash(Userpassword, parseInt(10));

         const use = {
            username: req.body.username,
            password: newPass,
            email: user.email,
            birthday: user.birthday,
         };
         user.findByIdAndUpdate(req.params.id, {$set: use}, {new: true}, (err, data) => {
             if(!err) {
                 res.status(200).json({ code:200, message: 'user updated successfully',
                 updateduser: data });
             }
             else {
                 console.log(err);
                 res.status(400).json({ code:400, message: err });
             }
         } );
     } );
 
     // Delete user
     router.delete('/api/user/:id', (req, res) => {
         user.findByIdAndRemove(req.params.id, (err, data) => {
             if(!err) {
                 res.status(200).json({ code:200, message: 'user deleted successfully',
                 deleteduser: data });
             }
         } );
     });



 
    
module.exports = router;







