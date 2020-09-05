import React from "react";
import App from "./App.js";
import {render, fireEvent, findByAltText, getAllByTestId, findByText, getByRole, getAllbyTestId, waitFor, getByText, findByTestId} from "@testing-library/react";
import {fetchShow as mockFetchShow} from "./api/fetchShow";
import { act } from "react-dom/test-utils";
jest.mock("./api/fetchShow")

test("App fetches show data from the api and renders it", async ()=> {

    await (async()=> {
    mockFetchShow.mockResolvedValueOnce(seasonUno);
    const {findByText, getByRole, getAllByTestId, findByTestId} = render(<App/>);
    const season1 = findByText(/"Season 1"/i);
    
    });

   
});


const showData=  {
            episode: [
              {
                "id": 578663,
                "url": "http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
                "name": "Chapter Two: The Weirdo on Maple Street",
                "season": 1,
                "number": 1,
                "airdate": "2016-07-15",
                "airtime": "",
                "airstamp": "2016-07-15T12:00:00+00:00",
                "runtime": 60,
                "image": {
                  "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg",
                  "original": "http://static.tvmaze.com…_untouched/72/181376.jpg"
                },
                "summary":"<p>While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.</p>",
                "_links": {
                  "self": "{href: \"http://api.tvmaze.com/episodes/578663\"}"
                }
            }
           
          ]
        }; 
