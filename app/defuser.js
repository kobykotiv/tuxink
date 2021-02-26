// define default users here!
const path = require("path");
var fs = require("fs");

const DefaultFolders = { // folder : set to always visable?
    'Audiobooks': true,
    'Books': true,
    'Comics': false,
    'Documents': true,
    'Movies': false,
    'Music': false,
    'Notes': false,
    'Recordings': false,
    'TVShows': false,
    'Videos': false
}

const startwd = path.join(__dirname, '._'); // starting working directory

function getpath(lename){
    return startwd + lename;
}

function getfullpath(inpath){

}

function openuser(lename) {
    // x = toString(path.join(startwd, dname));
    // y = JSON.parse(fs.readFileSync(path.join(x, 'conf.json')));
    return JSON.parse(fs.readFileSync(getpath(lename), 'conf.json'));
}

function inituser(lename = 'Library', nickname = 'Tuxink') {
    // define stuff here

    let dname = 'Library'; // use the wd as a prefix
    let lll = path.join(startwd + lename);

    for (const element in DefaultFolders) {
        let ooo = path.join(lll, element);

        if (fs.existsSync(ooo)) {
            console.log(`YES -> Do Nothing ${ooo}`)
        } else {
            console.log(`NO  -> Make a Dir ${ooo}`)
            fs.mkdir(ooo, { recursive: true }, (err) => {
                if (err) throw err;
                console.log(`Sucessfully created dir! -> ${ooo}`);
            })
        }
    }
    const configpath = path.join(lll, 'conf.json');

    userdata = { //JSON stuff
        Name: nickname,
        // Password: dpassword,
        Folderprefs: DefaultFolders, //fetches foldersettings JSON
        // candosudo: dsudo,
        // permissions: dper
    };

    // Turn userdata into a JSON complient string
    var data = JSON.stringify(userdata);

    // console.log('\n\n >0>', userdata);
    // console.log(' >1>', data);
    // console.log('=====================================================================================================');
    // if (real) {
    try{

        if (fs.existsSync(configpath)) {
            console.log(`YES -> Do Nothing ${configpath}`)
        } else {

        fs.writeFileSync(configpath, data);
        console.log('Wrote config file -> ', configpath);
    }
        
    } catch (error){
        console.log(error);
    }
    // return;
}

/*
 *  Cool Examples
 */

// var x = new inituser(); //No arguments. GUEST

// var y = new inituser(true, Name = 'Default', dpassword = null, dsudo = true); //One Default argument. ALL MEDIA is actually stored with the DEFAULT Folder acting like the owner.

// console.log('x data', x);
// console.log('y data', y);

// function makedir(path){

// }



module.exports = { openuser, inituser, getpath, DefaultFolders };