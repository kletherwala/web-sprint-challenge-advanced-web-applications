import React from 'react';
import '@testing-library/jest-dom';
import {screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';
import {render} from 'react-dom';
import Article from './Article';

// const testArticle =    {
//     id: 1,
//     headline: "Less than half of Seattle homes have air conditioning. After a deadly heat wave, ‘everybody’ wants it.",
//     createdOn: moment().subtract(Math.random()*10, "days").format(),
//     author:"",
//     image: 134,
//     summary: "Triple-digit temperatures led to a spike in demand across the region.",
//     body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home."   
// }

test('renders component without errors', ()=> {
    // render(<Article article={testArticle}/>)
});

// test('renders headline, author from the article when passed in through props', ()=> {
// });

// test('renders "Associated Press" when no author is given', ()=> {
// });

// test('executes handleDelete when the delete button is pressed', ()=> {
// });

//Task List:
//1. Complete all above tests. Create test article data when needed.