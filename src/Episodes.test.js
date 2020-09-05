import React from "react";
import {render} from "@testing-library/react";
import Episodes from "./components/Episodes";

test("Checking to see if episodes component renders correctly with and without episode data", ()=>{
    const {queryAllByTestId, rerender} = render(<Episodes episodes={[]}/>);

    expect(queryAllByTestId("episode")).toHaveLength(0);

    const mockData = [
        {
            id: '1',
            name: "Episode 1"
        },
    ]

    rerender(<Episodes episodes={mockData}/>);
    expect(queryAllByTestId("episode")).toHaveLength(1);
});