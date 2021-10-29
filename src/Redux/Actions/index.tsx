import { CandidateInterFace } from "./actionCreators.interface";
import { ADD_CANDIDATE, DELETE_CANDIDATE } from "./actionTypes";

export const addCandidate = (candidate: CandidateInterFace) => ({
  type: ADD_CANDIDATE,
  payload: candidate,
});

export const deleteCandidate = (id: number) => ({
  type: DELETE_CANDIDATE,
  payload: { id },
});
