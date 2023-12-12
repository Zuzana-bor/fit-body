import { TrainingData, TrainingsData } from '../../data/trainings';
import { PlansTabsPart, PlansTabsPartConfig } from './config';
import { Exercise } from '../../data/exercises';

export const getPlansTabs = (
  plansTabsConfig: PlansTabsPartConfig[],
  trainings: Trainings,
): PlansTabsPart[] => {
  return plansTabsConfig
    .map((item) => ({
      ...item,
      content: trainings.find(({ id }) => id === item.id)?.training,
    }))
    .filter((item): item is PlansTabsPart => !!item.content);
};

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
