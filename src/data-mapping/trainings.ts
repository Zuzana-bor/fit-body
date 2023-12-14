import { Exercise } from '../data/exercises';
import { TrainingData, TrainingsData } from '../data/trainings';

export type TrainingPart = {
  number: string;
  exercise: Exercise;
};
export type Training = TrainingPart[];

export type TrainingObject = {
  id: string;
  training: Training;
};

export type Trainings = TrainingObject[];

export const getTrainings = (
  trainingsData: TrainingsData,
  exercises: Exercise[],
): Trainings => {
  return trainingsData.map((item) => ({
    ...item,
    training: getTraining(item.training, exercises),
  }));
};

export const getTraining = (
  training: TrainingData,
  exercises: Exercise[],
): Training => {
  return training
    .map(({ number, exerciseId }) => ({
      number,
      exercise: exercises.find(({ id }) => id === exerciseId),
    }))
    .filter((item): item is TrainingPart => !!item.exercise);
};
