import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { screen } from '@testing-library/react';

import QuizTimeClock from "./QuizTimeClock";

let container = null;
beforeEach(() => {
  // 렌더링 대상으로 DOM 엘리먼트를 설정합니다.
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // 기존의 테스트 환경을 정리합니다.
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("text 렌더 테스트", () => {
  const quizTimeClockData = {
    hour: 0,
    min: 3,
    sec: 40,
  }
  act(() => {
    render(<QuizTimeClock {...quizTimeClockData} />, container);
  });
  const clockElement = screen.getByText(`00:03:40`);
  expect(clockElement).toBeInTheDocument();
});

// it("modal open 변경에 따른 렌더 테스트", () => {

// });