import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { screen } from '@testing-library/react';

import QuizCard from "./QuizCard";

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

it("렌더 테스트", () => {
  const quizCardData = {
    category: 'test',
    question: 'teqqqq',
    quizAnswers: ['test1', 'test2', 'test3', 'test4'],
    selectAnswerValue: 0,
    onChange: () => {},
  }
  act(() => {
    render(<QuizCard {...quizCardData} />, container);
  });
  const categoryElement = screen.getByText(quizCardData.category);
  expect(categoryElement).toBeInTheDocument();

  const questionElement = screen.getByText(quizCardData.question);
  expect(questionElement).toBeInTheDocument();

  const quizAnswers1Element = screen.getByText(quizCardData.quizAnswers[0]);
  expect(quizAnswers1Element).toBeInTheDocument();

  const quizAnswers2Element = screen.getByText(quizCardData.quizAnswers[1]);
  expect(quizAnswers2Element).toBeInTheDocument();

  const quizAnswers3Element = screen.getByText(quizCardData.quizAnswers[2]);
  expect(quizAnswers3Element).toBeInTheDocument();

  const quizAnswers4Element = screen.getByText(quizCardData.quizAnswers[3]);
  expect(quizAnswers4Element).toBeInTheDocument();
  // expect(container.textContent).toContain(`${quizCardData.category}`);
});