import React, { useState } from 'react';
import { Questions } from './constants/Questions';

export default function App() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < Questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					Parabéns! Tu conseguiu a pontução de {score} sobre {Questions.length} questões! Deseja responder uma última pergunta?
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Questão: {currentQuestion + 1}/{Questions.length}</span>
						</div>
						<div className='question-text'>{Questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{Questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}