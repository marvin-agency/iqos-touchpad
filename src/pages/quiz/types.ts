export interface IQuizPage {
  selectedAnswers: number[];
  handleImagePress: (id: number) => void;
}

export interface IQuizPage3 {
  selectedAnswer: string;
  handleImagePress: (id: string) => void;
}
