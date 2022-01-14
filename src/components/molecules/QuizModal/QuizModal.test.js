import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { screen } from '@testing-library/react';

import QuizModal from "./QuizModal";

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
  const quizModalData = {
    open: true,
    onClose: () => {},
    title: 'modal',
    description: 'modal description',
  }
  act(() => {
    render(<QuizModal {...quizModalData} />, container);
  });
  const titleElement = screen.getByText(quizModalData.title);
  expect(titleElement).toBeInTheDocument();

  const descriptionElement = screen.getByText(quizModalData.description);
  expect(descriptionElement).toBeInTheDocument();
});

// it("modal open 변경에 따른 렌더 테스트", () => {

// });