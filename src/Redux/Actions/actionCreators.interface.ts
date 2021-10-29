interface Candidate {
  id: number;
  name: string;
  email: string;
  experience: number;
  current_salary: number;
  expected_ctc: number;
  notice_period: number;
  current_status: string;
  technology: string;
  contact_no: number;
  head_hunted_by: string;
  source_of_hire: string;
  created_at: string;
  updated_at: string;
}
export type CandidateInterFace = Array<Candidate>;
