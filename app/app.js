// index.js

/**
 * Required External Modules
 */

const browserSync = require("browser-sync");
// const { json } = require("express");
const express = require("express");
const { fs, readdirSync, readdir} = require("fs");
const path = require("path");
// const { config } = require("process");

const defuser = require("./defuser.js");
const utils = require("./utils.js");

const fg = require('fast-glob');

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */
const rootstr = '/._Library';


app.set("views", path.join(__dirname, "pug-views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "pug-public")));
// app.use('Library', express.static(path.join(__dirname, '._Library')));
app.use('._Library', express.static(path.join(__dirname, rootstr)));

// console.log();

/**
 * Users Definitions
 */

/**
 * Routes Definitions
 */



const rootbasestr = path.join(__dirname, '._Library');

app.get('/', (req, res, next, libname = rootstr) => {
    console.log('Loading:', libname);

    res.redirect(libname);

});

app.get(`${rootstr}`, (req, res, next, libname = 'Library') => {
    // console.log('Library is:', libname);

    // console.log('rootbasestr',rootbasestr);

    // console.log(libname);

    var forcefolders = false; //when true: use default folders list AND true folders. otherwise oswalk

    try { // Try to open a user's setting
        var cooluser = defuser.openuser(libname); // will always fail.
        console.log(`Loaded ${libname} from -> `, rootstr);
        var folderslist = Object.keys(cooluser.Folderprefs);
    } catch (error) {
        console.warn(error);
        defuser.inituser(libname);
        console.log(`Created/opened ${libname} at -> `, rootstr);
    }

    try { // to get the folderlist
        console.warn('DID THIS WORK?')
        var folderslist = utils.walkdir(utils.getcwd(-rootstr), '*' , dirsonly = true); // intentially cause failure
        // let folderslist = Object.keys(cooluser.userdata.Folderprefs); // because cooluser fails, grab default values
    } catch (error) {
        console.warn(error) // when it fails: set to default

        var obj = defuser.DefaultFolders;

        var keys = Object.keys(obj);
        if (forcefolders == true) {
            var folderslist = keys
        } else {
        var folderslist = keys.filter(function(key) {
            return obj[key]
        }); 
        }
    }

    // var folderslist = defuser.DefaultFolders;

    // build library data

    // utils.listprint([libname, folderslist]);

    res.render("index", // Render the index pug file (Use this and encapsulated variations or contents for the user interface)
    {
        title: libname,
        ppath: libname,
        // ppath: 
        // cwd: lecurrentpath,
        parentpath: rootstr,
        // libpath: getpath(),
        Lepaths: folderslist,
        Leprettypaths: null,
        // Place a return here!
    }
    
    );
});

app.get(`${rootstr}/:path`, function(req, res, next, libname = 'Library'){
    var path2open = req._parsedUrl.path; // .substring(1);

    // console.log('\n REQ: \n\n', req);

    var endpoint = req.params.path;

    // var lecwd = req

    console.log('opening path => ', path2open);

    var coollist;
    var stripperArgs;

    // let mappath = utils.getcwd(path2open);

    // let starter = utils.getstartingpoint(path2open);

    // console.log(mappath);
    var prettypath = utils.prettypath(path2open);

    if (endpoint == 'Books') {
        // globwalker = '**/*.{epub, mobi, pdf}' ; 
        // app/._Library acts as the cwd
        coollist = ['epub', 'mobi', 'pdf'];
        stripperArgs = '';
        // the file extentions are listed in order of preference. if a duplicate is found e.g. ['bookname.epub', 'bookname.mobi'] only 'bookname.epub' is returned.
    } else {
        coollist = null;
        // stripperArgs = '';
    }

    let folderslist = utils.walkdir(coollist, path2open, flat=true); // just do an os.walk equivilant. should return a list of dirs for now
    let prettylist = utils.prettyfolderlist(folderslist, stripperArgs);
    
    res.render("index", // Render the index pug file (Use this and encapsulated variations or contents for the user interface)
    {
        title: endpoint,
        ppath: prettypath,
        cwd: 'oops',
        // nwd: lecurrentpath, //next working dir
        parentpath: path2open, // removes prefix. '._'
    
        // libpath: getpath(),
        Lepaths: folderslist, // This should be different on every unique load
        Leprettypaths: prettylist
    }
    );

});

/*
 * How opening {books or files} should work:
 * 
 * opening a file like this: {app2open: apppath, file2open: filepath}
 *
 *
 */

app.get(`${rootstr}/**/*.epub`, function(req, res, next){
    // var endpoint = req.params.path;
    // console.log('opening path => ', next);
    
    res.send("YAY! epub");
});

app.get(`${rootstr}/**/*.mobi`, function(req, res, next){
    // var endpoint = req.params.path;
    // console.log('opening path => ', next);
    
    res.send("YAY! mobi");
});

app.get("/Settings", function(req, res, next){
    console.log('opening path => ', next);

    res.send('Settings Go Here');
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*/*', function(req, res){
    res.status(404).send('404! what???');
});

// app.use(app.router);



/**
 * 
 */


/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});
