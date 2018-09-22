import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '/both/dbboth.js';
import './events.js';
import './helpers.js';
import './routes.js';
// client only code

// event listeners on the addSiteForm template
    // Template.addSiteForm.events({
    //     // this runs when they click the add button... you need to compete it
    //  'click .js-add-site':function(event){
    //      var url = $('#url_input').val();// get the form value using jquery...
    //      var  user = ""
    //      // console.log(user);
    //      // PUT YOUR CODE HERE!!
    //      // set up the user variable so that it contains
    //      // the string anonymous person if they are not logged in
    //      // or their email address if they are logged in
    //      if (Meteor.user()){
    //         user = Meteor.user().emails[0].address;
    //      }
    //      else{
    //         user = "anonymous person";
    //      }
    //      var site = {"url":url,
    //                  "createdOn":new Date(),
    //                  "createdBy":user};
    //      Websites.insert(site);
    //      return false;
    //  }
    // });

    // // this helper gets the data from the collection for the site-list Template
    // Template.siteList.helpers({
    //     'all_websites':function(){
    //         return Websites.find({});
    //     },
    //     'safer_email':function(email){
    //         if (email.indexOf('@')!=-1){// we have an email
    //             return email.split('@')[0];
    //         }
    //         else{// probably anonymouse.
    //             return email;
    //         }
    //     }
    // });

