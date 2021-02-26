// utils.js

const path = require("path");
const { PassThrough } = require("stream");

function getcwd(plus = '') {
    console.log("getcwd",__dirname);
    return path.join(__dirname, plus); // starting working directory
}

function getOccurrenceNames(array0, value) {
    array = [];
    // console.log(`  VAL  ${value}`)
    for (var i = 0; i < array0.length; i++){
        // if ((array0))
        var tp = path.parse(array0[i]).name;
        // console.log(tp);
        array.push(tp);
    }
    return array.filter((v) => (v === value)).length;
}

function walkdir(coollist, prefix = '', flat = false) {
    const fg = require('fast-glob'); // get a cwd and use it here.
    var globstring = getGlobStr(coollist);

    var globber = forcePOSIX(path.join('app', prefix, globstring));

    var entries = fg.sync(globber); // These are absolute links. Please convert them to relative links
    
    let parsedEntries = [];

    // console.log(entries);
    flat = true;

    for (let i = 0; i < entries.length; i++){
        entries[i] = forcePOSIX(entries[i]);
        var cntr = 0;

        // console.log(path.parse(entries[i]).name);

        // for (c = 0; c < parsedEntries.length; c++){
        //    
        // }

        // console.warn(`=|= ${path.basename(entries[i])} =|=`)
        if (getOccurrenceNames(parsedEntries, path.parse(entries[i]).name) > cntr) {
            console.log('duplicate');
            continue;
        } else { 
            console.log('unique')
            cntr++;
            parsedEntries.push(entries[i]);
        }

        // for (c = 0; c < parsedEntries.length; c++) {
        //     let x = path.basename(entries[i]);
        //     let y = path.basename(parsedEntries[c]);
        //     console.log(`x == y ?`);
        //     console.log(`${x} == ${y}`);
            
        // }
            //     console.warn(`  FILETYP : ${coollist[c]}`);
            //     if (!parsedEntries.includes(path.basename(entries[i], coollist[c]))) {
                    
            //         // if entry is NOT already parsed?
            //         parsedEntries.push(entries[i]);
            //         continue;
            //     } else { break;}
            // }

            // if (!parsedEntries.includes(entries[i])) {
            //     
            // }
        // } else {
        //     parsedEntries.push(entries[i]);
        // }
    }

    console.warn(parsedEntries);

    return parsedEntries;
}

function getGlobStr(coollist) {
    if (coollist === null) {
        return '**/**';
    } else {
        var tmp = '**/*.{';
        for (let i = 0; i < coollist.length; i++) {
            // const element = coollist[i];
            tmp += coollist[i];
            if (coollist[i] != coollist[coollist.length - 1]) {
                tmp += ',';
            }
        }
        tmp += '}';
        // console.log(tmp);
        return tmp;
    }
}

function forcePOSIX(uglystring) {
    if (uglystring.startsWith(path.sep)) { uglystring.substring(1); }
    return uglystring.split(path.sep).join(path.posix.sep); // [uglystring0.length - 1];
}

function prettyfolderlist(uglylist){
    let betterlist = [];
    // var t = '';
    for (let i = 0; i < uglylist.length; i++) {
        const ugly = uglylist[i];
        betterlist.push(path.basename(ugly,path.extname(ugly)));
    }    
    return betterlist;
}

function prettypath(uglystring){
    // const counter = uglystring.match('/').length
    var uglystring0 = uglystring.split('/');

    let prettystring = '';

    for (let index = 1; index < uglystring0.length; index++) {
        const item = uglystring0[index];
        // console.log(item);
        if (item.length == 0 || item == '') {
            continue;
        } else if (index == uglystring0.length -1) {
            prettystring += item;
            // continue;
        }
        else{
            prettystring += item + ' > ';
            // continue;
        }
    }
    prettystring = prettystring.substring(2);

    if (prettystring.endsWith(' > ')) {
        prettystring = prettystring.substring(0, prettystring.length - 3);
    }

    // console.log(uglystring, '->', prettystring); // return a string like 'parent_dir > current_dir'
    return prettystring;
}

function listprint(somelist){
    const me = Object.keys(this)[0];
    const mo = Object.keys(somelist)[0];
    console.log(`\n\n\n\n---- ${mo} ----\n---- ${me} ----`);
    somelist.forEach(item => {
        console.log(item);
    });
    console.log(me, mo, somelist);
}

module.exports = { listprint, prettypath, walkdir, getcwd, getstartingpoint: forcePOSIX ,prettyfolderlist};

