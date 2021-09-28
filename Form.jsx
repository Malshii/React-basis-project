import React from 'react';
import Navigation from './Navigation';

function Form(){
    return(
        <>
        <Navigation />
        <form action="mailto:contact@yourdomain.com" method="POST" enctype="multipart/form-data" name="EmailTestForm">
        <h1>CONTACT ME</h1>
        Name:<br/>
        <input type="text" size="24" name="VisitorName"/><br/>
        Message:<br/>
        <textarea name="VisitorComment" rows="4" cols="20">
        </textarea><br/>
        <input class="contact" type="submit" value="Submit"/>
        </form>   
        </>
    );
}

export default Form;

