export interface Option {
  id: number;
  text: string;
  nextQuestionId: number | string;
  screenId: number;
}

export interface Question {
  id: number;
  text: string;
  answers: Option[];
}

export interface Answer {
  id: number;
  text: string;
  nextQuestionId: number | string;
  screenId: number;
}
