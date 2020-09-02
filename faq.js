/*the lines below are to prevent false errors from jslint or eslint in Brackets*/

/*eslint-disable no-unused-vars*/
/*global $, document, alert, window*/
/*jshint browser: true, unused: false, no-unused-vars: true*/
/*jslint devel: true, node: true, vars: true*/
"use strict"; // required by jslint

/*
File Name: faq.js
Date: 08/27/2020
Programmer: Aiden Mace
*/



$(document).ready(function() {
    
    //alert("jQuery code is running");
    
    $("h2").text("Frequently Asked Questions (FAQs)");
    
    $("h2").css("color", "#0000ff");
    
    $("h2").addClass("headings");
    
    $(".headings").css("font-family", "Arial, Helvetica, sans-serif");
    
    $(".headings").css("text-align", "center");
    
    $("dd").hide();
    
    $("dt").on("click", function(){

        //alert("You clicked on a question!");
          
        //$(this).next().show();
          
        //$(this).next().toggle();
          
        $(this).next().slideToggle();
          
        //$("dt").addClass("open");
          
        $("dt").toggleClass("open");
          
        //Correct code for chaining
          
        //$(this).toggleClass("open").next().slideToggle();
          
        });
    
});