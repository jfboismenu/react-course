import React, { Component } from 'react';

var parseQueryString = function( queryString ) {
    var params = {}, queries, temp, i, l;

    // Split into key/value pairs
    queries = queryString.split("&");

    // Convert the array of strings into an object
    for ( i = 0, l = queries.length; i < l; i++ ) {
        temp = queries[i].split('=');
        params[temp[0]] = decodeURIComponent(temp[1]);
    }
    console.log(params);
    return params;
};

const Course = props => {
    console.log("Course");
    return (
        <div>
            <h1>{parseQueryString(props.location.search.substring(1))["title"]}</h1>
            <p>You selected the Course with ID: {props.match.params.courseId}</p>
        </div>
    );
};

export default Course;