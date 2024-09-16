import React from "react";
import { render, screen, act } from "@testing-library/react";
import BubblePage from "./BubblePage";
import getColors from './helpers/getColors'
jest.mock('./helpers/getColors');

const testColors = [
  {
    color: 'aliceblue',
    code: {
      hex: '#f0f8ff',
    },
    id: 1,
  },
  {
    color: 'limegreen',
    code: {
      hex: '#99ddbc',
    },
    id: 2,
  },
  {
    color: 'aqua',
    code: {
      hex: '#00ffff',
    },
    id: 3,
  }
];

getColors.mockResolvedValue({ data: testColors });

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage/>);
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  render(<BubblePage />);
  let colors;
  colors = await screen.findAllByTestId('color');
  expect(colors.length).not.toEqual(0);
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading