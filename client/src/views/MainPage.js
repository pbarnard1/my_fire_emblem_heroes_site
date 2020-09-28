import React, { useEffect, useState } from 'react';
import PortfolioSection from '../components/PortfolioSection';
import TriviaQuestion from '../components/TriviaQuestion';

export default (props) => {
    const [sectionNum, setSectionNum] = useState(0);

    // Function that will reveal sections one at a time
    const addOne = () => {
        setSectionNum(sectionNum+1);
    }

    // Array containing each section, PLUS the summary and eventually the comment box
    const portfolioArr = [
        <PortfolioSection title="Placeholder 1" mainContent="Lorem ipsum and other stuff" bulletPoints={
            [ // Array of objects - each object is a separate bullet point
                {
                    text: "Coding Dojo",
                    info: "14-week course"
                },
                {
                    text: "Random",
                    info: "More randomness"
                }
            ]
        } />,
        <PortfolioSection title="Placeholder 2" mainContent="Lorem ipsum and other stuff" bulletPoints={
            [
                {
                    text: "Coding Dojo",
                    info: "14-week course"
                }
            ]
        } />,
        <PortfolioSection title="Placeholder 3" mainContent="Lorem ipsum and other stuff" bulletPoints={
            [
                {
                    text: "Coding Dojo",
                    info: "14-week course"
                }
            ]
        } />,
        <PortfolioSection title="Placeholder 4" mainContent="Lorem ipsum and other stuff" bulletPoints={
            [
                {
                    text: "Coding Dojo",
                    info: "14-week course"
                }
            ]
        } />,
        <PortfolioSection title="Placeholder 5" mainContent="Lorem ipsum and other stuff" bulletPoints={
            [
                {
                    text: "Coding Dojo",
                    info: "14-week course"
                }
            ]
        } />
    ];

    // Array of trivia questions
    const triviaArr = [
        <TriviaQuestion question="What is the right answer?"
            correctChoice="B" // A, B, C or D
            possibleAnswers={
                ["This isn't it", // Choice A
                "This is!", // Choice B
                "It's not this one", // Choice C
                "Don't pick me!"] // Choice D
            }
            sectionNum={addOne} />,
        <TriviaQuestion question="What is the right answer?"
            correctChoice="A"
            possibleAnswers={
                ["This is it",
                "This is NOT it",
                "It's not this one",
                "Don't pick me!"]
            }
            sectionNum={addOne} />,
        <TriviaQuestion question="What is the right answer?"
            correctChoice="D"
            possibleAnswers={
                ["This isn't it",
                "This can't be!",
                "It's not this one",
                "Pick me!"]
            }
            sectionNum={addOne} />,
        <TriviaQuestion question="What is the right answer?"
            correctChoice="C"
            possibleAnswers={
                ["This isn't it",
                "This is not right!",
                "It's this one!",
                "Don't pick me!"]
            }
            sectionNum={addOne} />,
        <TriviaQuestion question="What is the right answer?"
            correctChoice="B"
            possibleAnswers={
                ["This isn't it",
                "This is!",
                "It's not this one",
                "Don't pick me!"]
            }
            sectionNum={addOne} />,
    ];

    // useEffect(() => {
    //     setSectionNum(0);
    // }, [])

    return(
        <div>
            <h1>Placeholder for video</h1>
            {portfolioArr.slice(0,sectionNum+1)}
            {triviaArr[sectionNum]}
        </div>
    );
}