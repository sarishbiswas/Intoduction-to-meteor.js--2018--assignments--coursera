import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './events.js';
// import './helpers.js';
import './routes.js';
// import './main.html';
import '/both/dbboth.js';

Template.discussSite.helpers({

'comments':function(siteId){

// complete the code here so that it reruns

// all the comments with a siteId equal to siteId.
    return Comments.find({});
},

});
// this helper gets the data from the collection for the site-list Template
Template.siteList.helpers({
    'all_websites':function(){
        return Websites.find({});
    },
    'safer_email':function(email){
        if (email.indexOf('@')!=-1){// we have an email
            return email.split('@')[0];
        }
        else{// probably anonymouse.
            return email;
        }
    }
});
